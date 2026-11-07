const canvas = document.querySelector('#plot');
const slope = document.querySelector('#slope');
const intercept = document.querySelector('#intercept');
function draw() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  const ctx = canvas.getContext('2d');
  ctx.scale(ratio, ratio);
  const scale = Math.min(width, height) / 12;
  const cx = width / 2, cy = height / 2;
  ctx.strokeStyle = '#e9eee5';
  ctx.lineWidth = 1;
  for (let i = -10; i <= 10; i++) {
    ctx.beginPath(); ctx.moveTo(cx + i * scale, 0); ctx.lineTo(cx + i * scale, height); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, cy + i * scale); ctx.lineTo(width, cy + i * scale); ctx.stroke();
  }
  ctx.strokeStyle = '#93a48d';
  ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(width, cy); ctx.moveTo(cx, 0); ctx.lineTo(cx, height); ctx.stroke();
  const k = Number(slope.value), b = Number(intercept.value);
  ctx.strokeStyle = '#28604c'; ctx.lineWidth = 3;
  ctx.beginPath();
  for (let px = 0; px <= width; px++) {
    const y = k * ((px - cx) / scale) + b;
    if (px === 0) ctx.moveTo(px, cy - y * scale); else ctx.lineTo(px, cy - y * scale);
  }
  ctx.stroke(); ctx.fillStyle = '#bc8b4b';
  ctx.beginPath(); ctx.arc(cx, cy - b * scale, 6, 0, Math.PI * 2); ctx.fill();
  document.querySelector('#equation').textContent = `y = ${k}x ${b < 0 ? '−' : '+'} ${Math.abs(b)}`;
  document.querySelector('#description').textContent = `斜率 ${k}，截距 ${b}。直线经过 (0, ${b})，${k > 0 ? '从左向右上升' : k < 0 ? '从左向右下降' : '保持水平'}。`;
}
slope.addEventListener('input', draw);
intercept.addEventListener('input', draw);
document.querySelector('#reset').addEventListener('click', () => { slope.value = '1'; intercept.value = '0'; draw(); });
new ResizeObserver(draw).observe(canvas);
draw();
