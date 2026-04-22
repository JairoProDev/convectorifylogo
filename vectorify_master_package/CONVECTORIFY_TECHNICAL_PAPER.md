# CONVECTORIFY - Arquitectura y Simbolismo del Logo

## 1. El Significado Oculto (Storytelling Conceptual)
El logo de Convectorify no es un simple diseño estético; es un **ecosistema de símbolos matemáticos y de ingeniería** fusionados en una única estructura geométrica inquebrantable. 

Cada curva y vértice cuenta una parte de la historia de la marca:

*   **El Hexágono Exterior:** Representa la estructura universal (como los panales de abeja o las moléculas orgánicas). Es el elemento más fuerte en la naturaleza. Simboliza que la base de la marca es sólida, estable y escalable.
*   **La Letra "C" (Coraza):** Cierra casi todo el hexágono dejando solo una apertura lateral. Simboliza una "red de captura" o un "acelerador de partículas", procesando la energía proveniente del exterior.
*   **La Letra "V" (Gravedad y Dirección):** La forma precipitada de la V señala directamente hacia abajo, hacia el núcleo. Simboliza inmersión, profundidad de análisis y foco absoluto.
*   **La Letra "Y" (Los Ejes X, Y, Z):** Las 3 líneas centrales nacen del punto `[0,0]`. Representan matemáticamente los 3 ejes del espacio tridimensional. Convectorify toma datos planos (2D) y los expande a soluciones reales y complejas (3D).
*   **El Cubo Ilusorio (Gestalt):** Gracias al principio psicológico de "Gestalt", el cerebro une los espacios vacíos entre la V y la Y, revelando un cubo flotando en el centro. Este cubo representa "el producto final", la "caja negra" o "el servicio estructurado" que la marca entrega.
*   **Los Vectores (Agujas de Reloj y Flechas):** Las puntas y líneas simulan agujas de un reloj apuntando en direcciones específicas. Representan **Precisión Métrica, Velocidad, Escalabilidad Temporal (Vectores) y Dinamismo.** Siempre moviéndose hacia adelante y abriéndose camino.
*   **El Diamante:** Todo el contorno general de los espacios negativos encierra un diamante perfecto. Valor, resistencia y altísima calidad.

## 2. Solución Técnica: El Grosor de la Letra "Y"
**El Problema:** Al aplicar animaciones de estilo "Wireframe" (esquemas de líneas sin relleno), la letra Y central se ve mucho más masiva (24px) que los bordes perimetrales de la C y la V (stroke de 8px), rompiendo la armonía lineal.

**La Razón:** Esto se debe a que la C y la V son polígonos cerrados (tienen "fill" y su "stroke" bordea su figura). La Y, sin embargo, es un trazo único (`<line>`) central, por lo que su `stroke` es quien soporta todo el peso de la figura.

**La Mejor Solución (CSS Targeting Dinámico):**
La solución más elegante, sin necesidad de destruir el peso de la Y en el diseño sólido, es asignar clases nativas (`.y-stem`, `.c-shell`, `.v-core`) al SVG. 
Durante las animaciones Wireframe, simplemente indicamos vía CSS que la "Y" pierda su masividad y se alinee matemáticamente al resto del contorno:

```css
/* Cuando el logo pasa a modo Lineal/Wireframe, la Y se vuelve de 8px */
.anim-wireframe .y-stem {
    stroke-width: 8px !important; 
    /* OPCIONAL: Añadir 'stroke-dasharray' solo a la Y */
}
```
Esto preserva el código HTML súper limpio y usa el motor del navegador para resolver el peso visual en tiempo real.

"
Este logo está 100% vectorizado matemáticamente, lo que habilita capacidades que logos tradicionales PNG jamás lograrían:
"
