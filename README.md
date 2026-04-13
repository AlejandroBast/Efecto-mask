# Efecto Mask

Proyecto front-end que muestra una escena hero animada con una esfera central, orbitas luminosas y un efecto de mascara radial que sigue el cursor.

## Vista general

La interfaz usa dos imagenes superpuestas de la esfera:

- Capa base: textura principal.
- Capa superior: imagen revelada mediante una mascara circular que se mueve con el mouse.

Ademas, incluye orbitas animadas, puntos en movimiento y un cursor personalizado para reforzar el efecto visual.

## Caracteristicas

- Efecto de reveal con `mask-image` y `-webkit-mask-image`.
- Animacion suave del foco radial con interpolacion (lerp).
- Layout responsive calculado con JavaScript segun el ancho de ventana.
- Orbitas y particulas con animaciones CSS.
- Cursor personalizado (punto + anillo).

## Tecnologias

- HTML5
- CSS3 (animaciones, gradientes, media queries)
- JavaScript vanilla

## Estructura del proyecto

```text
efectoMask/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
`-- Assets/
	|-- hero-item.png
	`-- hero-item-hover.png
```

## Como ejecutar

1. Clona o descarga este repositorio.
2. Abre la carpeta del proyecto.
3. Ejecuta `index.html` en tu navegador.

Opcional (recomendado): usar un servidor local para desarrollo, por ejemplo la extension Live Server de VS Code.

## Como funciona

En `script.js` se controlan tres partes clave:

- `buildLayout()`: calcula el tamano de la esfera (`SPHERE`) y de las orbitas (`ORBIT_SCALES`) de forma responsive.
- `applyMask(x, y, r)`: aplica una mascara radial sobre la capa hover para revelar la imagen superior.
- `animateMask()`: suaviza el movimiento del foco radial con interpolacion para evitar saltos bruscos.

En `style.css` se define el look visual:

- Animacion de rotacion lenta de la esfera.
- Orbitas con puntos brillantes en distintas velocidades.
- Fondo oscuro con gradiente inferior.
- Estilos responsive para pantallas medianas y moviles.

## Personalizacion rapida

- Cambiar tamano de esfera: ajustar `window.innerWidth * 0.65` y el maximo `860` en `buildLayout()`.
- Cambiar tamano de orbitas: editar `ORBIT_SCALES`.
- Cambiar radio del foco: modificar `SPHERE * 0.37` en el evento `mousemove`.
- Cambiar velocidad de animaciones: editar duraciones en `style.css` (`slowRotate`, `orbitFloat`, `orbitDotSpin`).

## Compatibilidad

El efecto depende de soporte para mascaras CSS. Funciona mejor en navegadores modernos (Chrome, Edge, Safari y versiones recientes de Firefox).

## Autor

Alejandro Bast
