const fs = require('fs');
const path = require('path');

const targetDir = path.join('C:\\Users\\jairo\\OneDrive\\Desktop\\convectorifylogo', 'vectorify_master_package');

const dirs = ['01_production', '02_components', '03_animations'];

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir);
dirs.forEach(d => {
    const p = path.join(targetDir, d);
    if (!fs.existsSync(p)) fs.mkdirSync(p);
});

// Common geometric data
const polyC = "0,-390 338,-195 225,-130 0,-260 -225,-130 -225,130 0,260 225,130 338,195 0,390 -338,195 -338,-195";
const polyV = "-225,-130 0,260 225,-130 80,-130 145,-92 0,130 -145,-92 -80,-130";
const linesY = '<line x1="0" y1="0" x2="0" y2="130" />\n<line x1="0" y1="0" x2="-145" y2="-92" />\n<line x1="0" y1="0" x2="145" y2="-92" />';

const svgDocumented = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="-510 -510 1020 1020" xmlns="http://www.w3.org/2000/svg">
  <!-- 
    ========================================================================
    CONVECTORIFY LOGO - THE DEFINITIVE MASTER EDITION (v3.2)
    ========================================================================
    
    FILOSOFÍA GEOMÉTRICA Y MATEMÁTICA:
    * Isometría: Las diagonales viajan a 30° de la horizontal (Relación Y:X = 1:sqrt(3)).
      Esto logra la ilusión perfecta de un cubo en tres dimensiones.
    
    ANÁLISIS DE MEDIDAS Y PROPORCIONES (Con Redondeo a 8px):
    * ViewBox (-510 a 510, tamaño 1020x1020): 
      Se suman 10px en cada dirección para crear una "Zona Segura". Esto asegura que
      el redondeo (stroke exterior) no se ampute contra los bordes matemáticos al renderizar.
      
    * Radio Exterior (390px):
      Desde el centro (0,0) hasta el pico más alto. 390 es múltiplo modular perfecto para 130.
      
    * Grosor de la C (130px):
      Equivale exactamente a un tercio (1/3) del radio total (390/3 = 130). Esto brinda un peso 
      corporativo medio-pesado. Maxima legibilidad e impacto institucional.
      
    * Grosor de la Letra Y interna (24px):
      Al ser 24px, compensa ópticamente la gran masa exterior, equilibrando el diseño
      para evitar que el "punto de fuga" se sienta débil.
      
    EL ROUNDING/SUAVIZADO (8px):
    * Se utiliza 'stroke-width="8"' con 'stroke-linejoin="round"'.
    * Efecto: Expande el diseño orgánico 4px por todos sus bordes (ya que el Stroke es centrado) 
      puliendo el "Aliasing" (píxeles aserrados). Transforma el logo de "Boceto Técnico Frío" a 
      una "Marca Premium" dándole un toque estilo de gama alta de Silicon Valley.
      
    * UNIFICACIÓN ESTRUCTURAL:
    * La "V" se unificó quitando su línea divisoria para evitar artefactos visuales
      cuando se escale la imagen en vectores web o impresos.
  -->
  <g stroke-linejoin="round" stroke-linecap="round" fill="currentColor" stroke="currentColor">
    <!-- El escudo exterior curvo/hexagonal -->
    <polygon points="${polyC}" stroke-width="8" />
    <polygon points="${polyV}" stroke-width="8" />
    <!-- Conectores Cúbicos Centrales (Y) -->
    <g stroke-width="24" fill="none">
      ${linesY.split('\n').join('\n      ')}
    </g>
  </g>
</svg>`;

const svgMinified = `<svg viewBox="-510 -510 1020 1020" xmlns="http://www.w3.org/2000/svg"><g stroke-linejoin="round" stroke-linecap="round" fill="currentColor" stroke="currentColor"><polygon points="${polyC}" stroke-width="8"/><polygon points="${polyV}" stroke-width="8"/><g stroke-width="24" fill="none">${linesY.replace(/\n/g,"")}</g></g></svg>`;

fs.writeFileSync(path.join(targetDir, '01_production', 'logo_vectorify_master_documented.svg'), svgDocumented);
fs.writeFileSync(path.join(targetDir, '01_production', 'logo_vectorify_master_minified.svg'), svgMinified);

const showcaseHtml = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Convectorify - Final 8px Showcase</title>
    <style>
        body { background: #0a0c10; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; }
        .logo { width: 400px; height: 400px; color: #00ffcc; filter: drop-shadow(0 20px 40px rgba(0,255,204,0.15)); }
        svg { width: 100%; height: 100%; }
        h1 { margin-top: 30px; font-weight: 300; letter-spacing: 2px; }
        .actions { margin-top: 20px; display: flex; gap: 10px; }
        .btn { padding: 10px 20px; background: #00ffcc; color: black; border-radius: 5px; text-decoration: none; font-weight: bold; }
        .btn:hover { background: white; }
    </style>
</head>
<body>
    <div class="logo">
        ${svgMinified}
    </div>
    <h1>CONVECTORIFY</h1>
    <p style="opacity: 0.6; margin-top: 10px;">Master v3.2 - 8px Rounding (Smooth Tech)</p>
    <div class="actions">
        <a class="btn" href="../03_animations/01_draw_lines.html">Ver Animaciones Dinámicas</a>
    </div>
</body>
</html>`;
fs.writeFileSync(path.join(targetDir, '01_production', '01_logo_showcase.html'), showcaseHtml);

// 02 Components
const createComp = (name, svg) => {
    fs.writeFileSync(path.join(targetDir, '02_components', name), `<svg viewBox="-510 -510 1020 1020" xmlns="http://www.w3.org/2000/svg" style="color:black;"><g stroke-linejoin="round" stroke-linecap="round" fill="currentColor" stroke="currentColor">${svg}</g></svg>`);
}
createComp('01_component-c.svg', `<polygon points="${polyC}" stroke-width="8"/>`);
createComp('02_component-v.svg', `<polygon points="${polyV}" stroke-width="8"/>`);
createComp('03_component-y.svg', `<g stroke-width="24" fill="none">${linesY}</g>`);
createComp('04_component-inner-cube-illusion.svg', `<polygon points="0,0 145,-92 0,130 -145,-92" stroke-width="8"/>`);

// 03 Animations (20 Htmls)
const anims = [
    { name: "01_draw_lines", title: "1. Trazado de Lineas", css: "fill: none; stroke-dasharray: 5000; stroke-dashoffset: 5000; animation: draw 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate; } @keyframes draw { to { stroke-dashoffset: 0; }" },
    { name: "02_pulsar", title: "2. Latido Central", css: "transform-origin: center; animation: pulse 2s infinite ease-in-out; } @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); }" },
    { name: "03_neon_cyberpunk", title: "3. Neon Cyberpunk", css: "animation: neon 1.5s infinite alternate; } @keyframes neon { from { filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 20px currentColor); } to { filter: drop-shadow(0 0 15px currentColor) drop-shadow(0 0 40px currentColor); }" },
    { name: "04_hologram_glitch", title: "4. Holo-Glitch", css: "animation: glitch 0.3s steps(2) infinite; } @keyframes glitch { 0% { transform: translate(0) skew(0deg); opacity: 1; } 20% { transform: translate(-5px, 5px) skew(10deg); opacity: 0.8; } 40% { transform: translate(-5px, -5px) skew(-10deg); opacity: 1; filter: drop-shadow(5px 0 0 red); } 60% { transform: translate(5px, 5px) skew(5deg); opacity: 0.9; filter: drop-shadow(-5px 0 0 blue); } 80% { transform: translate(5px, -5px) skew(-5deg); opacity: 1; } 100% { transform: translate(0); }" },
    { name: "05_3d_glass", title: "5. Cristal 3D Rotativo", css: "transform-style: preserve-3d; animation: rot3d 10s linear infinite; filter: drop-shadow(0 30px 40px rgba(0,255,204,0.3)); } @keyframes rot3d { to { transform: perspective(1000px) rotateY(360deg) rotateX(15deg); }" },
    { name: "06_gradient_flow", title: "6. Flujo de Gradiente", css: "fill: url(#grad); color: transparent; stroke: url(#grad);", extraDefs: "<linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#00ffcc'><animate attributeName='stop-color' values='#00ffcc;#ff0055;#00ffcc' dur='4s' repeatCount='indefinite'/></stop><stop offset='100%' stop-color='#0055ff'><animate attributeName='stop-color' values='#0055ff;#ffaa00;#0055ff' dur='4s' repeatCount='indefinite'/></stop></linearGradient>" },
    { name: "07_dash_chaser", title: "7. Culebra Electrica", css: "fill: rgba(0,255,204,0.05); stroke-dasharray: 200 400; animation: chase 2s linear infinite; } @keyframes chase { to { stroke-dashoffset: -600; }" },
    { name: "08_liquid_metal", title: "8. Metal Liquido (Gooey)", css: "filter: url(#goo); animation: breathe 3s alternate infinite ease-in-out; } @keyframes breathe { 0% { transform: scale(1); } 100% { transform: scale(1.05); }", extraDefs: "<filter id='goo'><feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur'/><feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'/></filter>" },
    { name: "09_radar_sweep", title: "9. Barrido de Radar", css: "mask: url(#radar); animation: pop 2s; }", extraDefs: "<mask id='radar'><rect x='-600' y='-600' width='1200' height='1200' fill='white'><animateTransform attributeName='transform' type='rotate' from='0 0 0' to='360 0 0' dur='3s' repeatCount='indefinite' /></rect><path d='M0,0 L0,-600 A600,600 0 0,1 600,0 Z' fill='black'/></mask>" },
    { name: "10_parallax_layers", title: "10. Efecto Parallax Fake", css: "transform-origin: center; animation: float 4s ease-in-out infinite alternate; } @keyframes float { 0% { filter: drop-shadow(15px 15px 0px rgba(0,255,204,0.5)) drop-shadow(-15px -15px 0px rgba(255,0,85,0.5)); transform: translate(-10px, -5px); } 100% { filter: drop-shadow(-15px -15px 0px rgba(0,255,204,0.5)) drop-shadow(15px 15px 0px rgba(255,0,85,0.5)); transform: translate(10px, 5px); }" },
    { name: "11_shatter_rebuild", title: "11. Destruccion Reensamble", extraCSS: "polygon, g { animation: shatter 4s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55); transform-origin: center; } g { animation-delay: 0.2s; } polygon:nth-child(2) { animation-delay: 0.4s; } @keyframes shatter { 0%, 20% { transform: translate(0,0) rotate(0deg); opacity: 1; } 50% { transform: translate(var(--tx, 100px), var(--ty, 100px)) rotate(var(--rot, 45deg)); opacity: 0; } 80%, 100% { transform: translate(0,0) rotate(0deg); opacity: 1; } } polygon:nth-child(1) { --tx: -200px; --ty: -100px; --rot: -40deg; } polygon:nth-child(2) { --tx: 200px; --ty: 100px; --rot: 60deg; } g { --tx: 0px; --ty: 200px; --rot: 180deg; }" },
    { name: "12_breathing_opacity", title: "12. Respiracion Calmada", css: "animation: opacityBreathe 4s ease-in-out infinite alternate; } @keyframes opacityBreathe { 0% { opacity: 0.2; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1); }" },
    { name: "13_wireframe_flash", title: "13. Flash a Wireframe Estructural", css: "animation: flash 1.5s steps(1) infinite; } @keyframes flash { 0%, 100% { fill: currentColor; stroke-width: 8; } 50% { fill: transparent; stroke: currentColor; stroke-width: 12; }" },
    { name: "14_orbiting_echo", title: "14. Eco Orbital Reflexivo", extraCSS: ".echo { position: absolute; width: 350px; height: 350px; color: #ff0055; fill: none; stroke: currentColor; stroke-width: 4; animation: echoGrow 3s infinite ease-out; z-index: -1; } .e2 { animation-delay: 1.5s; color: #00ffcc;} @keyframes echoGrow { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(2.5); opacity: 0; } }", extraHTML: `<svg class="echo e1" viewBox="-510 -510 1020 1020"><g stroke-linejoin="round" stroke-linecap="round"><polygon points="${polyC}"/></g></svg><svg class="echo e2" viewBox="-510 -510 1020 1020"><g stroke-linejoin="round" stroke-linecap="round"><polygon points="${polyC}"/></g></svg>` },
    { name: "15_magnetic_hover", title: "15. Atraccion Electromagnetica", extraCSS: "svg { transition: transform 0.1s ease-out; transform-style: preserve-3d; }", extraJS: "document.addEventListener('mousemove', e => { const svg = document.querySelector('.main-svg'); if(!svg) return; const rect = svg.getBoundingClientRect(); const cx = rect.left + rect.width/2; const cy = rect.top + rect.height/2; const dx = (e.clientX - cx)/15; const dy = (e.clientY - cy)/15; svg.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) rotateY(' + dx + 'deg) rotateX(' + (-dy) + 'deg)'; });" },
    { name: "16_focus_blur", title: "16. Enfoque Cinematografico", css: "animation: cineFocus 4s infinite alternate ease-in-out; } @keyframes cineFocus { 0% { filter: blur(30px); opacity: 0; transform: scale(1.2); } 100% { filter: blur(0px); opacity: 1; transform: scale(1); }" },
    { name: "17_shimmering_light", title: "17. Reflejo Luz Metalica", css: "mask-image: linear-gradient(-60deg, transparent 30%, white 50%, transparent 70%); mask-size: 200% 200%; animation: lightPass 2.5s infinite linear; } @keyframes lightPass { 0% { mask-position: 200% 0; } 100% { mask-position: -200% 0; }" },
    { name: "18_bounce_spring", title: "18. Rebote Elastico", css: "animation: spring 2s infinite; transform-origin: bottom center; } @keyframes spring { 0%, 100% { transform: scale(1) translateY(0); } 10% { transform: scale(1.2, 0.8) translateY(20px); } 30% { transform: scale(0.9, 1.1) translateY(-30px); } 50% { transform: scale(1.05, 0.95) translateY(0); } 65% { transform: scale(0.98, 1.02) translateY(-5px); } 80% { transform: scale(1, 1) translateY(0); }" },
    { name: "19_interactive_expand", title: "19. Hover Abanico de Piezas", extraCSS: "svg { transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); } polygon, g { transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); transform-origin: center; } svg:hover polygon:nth-child(1) { transform: scale(1.1); opacity: 0.5; } svg:hover polygon:nth-child(2) { transform: scale(0.9) translateY(40px); fill: #ff0055; } svg:hover g { transform: scale(1.2) translateY(-40px); color: #00ffcc; }" },
    { name: "20_matrix_reveal", title: "20. Lluvia de Codigo (Matrix)", css: "animation: scanline 4s infinite linear; mask-image: linear-gradient(to bottom, white 50%, transparent 50%); mask-size: 100% 40px; } @keyframes scanline { 0% { mask-position: 0 0; } 100% { mask-position: 0 1000px; }" }
];

anims.forEach((anim) => {
    let content = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>${anim.title}</title>
    <style>
        body { background: #0a0c10; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; overflow: hidden; --accent: #00ffcc; }
        .wrapper { position: relative; width: 350px; height: 350px; display: flex; align-items: center; justify-content: center; }
        h1 { position: absolute; top: 30px; font-weight: 300; letter-spacing: 2px; color: var(--accent); font-size: 1.1rem;}
        p { position: absolute; bottom: 30px; opacity: 0.5; font-size: 0.8rem; text-decoration: underline; cursor: pointer; transition: 0.3s; }
        p:hover { opacity: 1; color: var(--accent); }
        .main-svg { width: 100%; height: 100%; color: var(--accent); fill: currentColor; stroke: currentColor; ${anim.css || ''}
        ${anim.extraCSS || ''}
    </style>
</head>
<body>
    <h1>${anim.title}</h1>
    <div class="wrapper">
        ${anim.extraHTML || ''}
        <svg class="main-svg" viewBox="-510 -510 1020 1020" xmlns="http://www.w3.org/2000/svg">
            <defs>
                ${anim.extraDefs || ''}
            </defs>
            <g stroke-linejoin="round" stroke-linecap="round">
                <polygon points="${polyC}" stroke-width="8"/>
                <polygon points="${polyV}" stroke-width="8"/>
                <g stroke-width="24" fill="none">
                    ${linesY}
                </g>
            </g>
        </svg>
    </div>
    <p onclick="window.location.href='../01_production/01_logo_showcase.html'">Volver al Showcase Principal</p>
    ${anim.extraJS ? `<script>${anim.extraJS}</script>` : ''}
</body>
</html>`;
    fs.writeFileSync(path.join(targetDir, '03_animations', anim.name + '.html'), content);
});

console.log("Vectorify Master Package Generator - Ejecutado con exito.");
