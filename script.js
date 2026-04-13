const scene      = document.getElementById('scene');
const earthInner = document.getElementById('earthInner');
const earthHover = document.getElementById('earthHover');
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

const orbits = [
  document.getElementById('orbit1'),
  document.getElementById('orbit2')
];

let SPHERE = 0;
const ORBIT_SCALES = [1.18, 1.52];

function buildLayout() {
  SPHERE = Math.min(window.innerWidth * 0.65, 860);
  const maxOrbit = SPHERE * ORBIT_SCALES[ORBIT_SCALES.length - 1];

  scene.style.width  = `${maxOrbit}px`;
  scene.style.height = `${maxOrbit}px`;

  earthInner.style.width  = `${SPHERE}px`;
  earthInner.style.height = `${SPHERE}px`;

  orbits.forEach((orbit, i) => {
    const size = `${SPHERE * ORBIT_SCALES[i]}px`;
    orbit.style.width  = size;
    orbit.style.height = size;
  });
}

buildLayout();
window.addEventListener('resize', buildLayout);


/* Efecto hover: escucha en todo el documento */
let target  = { x: -9999, y: -9999, r: 0 };
let current = { x: -9999, y: -9999, r: 0 };

function applyMask(x, y, r) {
  const mask = `radial-gradient(circle ${r}px at ${x}px ${y}px, transparent 0%, black 80%)`;
  earthHover.style.maskImage       = mask;
  earthHover.style.webkitMaskImage = mask;
}

applyMask(-9999, -9999, 300);

function lerp(a, b, t) { return a + (b - a) * t; }

(function animateMask() {
  current.x = lerp(current.x, target.x, 0.10);
  current.y = lerp(current.y, target.y, 0.10);
  current.r = lerp(current.r, target.r, 0.09);

  applyMask(current.x, current.y, Math.max(0, current.r));
  requestAnimationFrame(animateMask);
})();

document.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  target.x = e.clientX - (cx - SPHERE / 2);
  target.y = e.clientY - (cy - SPHERE / 2);
  target.r = Math.round(SPHERE * 0.37);

  cursorDot.style.left  = `${e.clientX}px`;
  cursorDot.style.top   = `${e.clientY}px`;
  cursorRing.style.left = `${e.clientX}px`;
  cursorRing.style.top  = `${e.clientY}px`;
});

document.addEventListener('mouseleave', () => {
  target.r = 0;
  cursorDot.style.opacity  = '0';
  cursorRing.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursorDot.style.opacity  = '1';
  cursorRing.style.opacity = '1';
});