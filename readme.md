1. Por ancho del viewport

La más usada (para diseño responsive).

/* Móviles */
@media (max-width: 480px) { ... }

/* Tablets */
@media (min-width: 481px) and (max-width: 768px) { ... }

/* Escritorios */
@media (min-width: 769px) { ... }

O versiones modernas:
@media (width <= 480px) { ... }   /* Nivel 4 */
@media (481px <= width <= 768px) { ... }



2. Por altura del viewport
@media (max-height: 600px) {
  /* pantallas horizontales o bajas */
}


3. Por orientación

@media (orientation: portrait) { ... }
@media (orientation: landscape) { ... }


4. Por resolución o densidad de píxeles

@media (min-resolution: 2dppx) {
  /* pantallas Retina o 4K */
}

También se puede usar:

@media (min-device-pixel-ratio: 2) { ... }


5. Por modo de color o preferencia del sistema
@media (prefers-color-scheme: dark) {
  /* Modo oscuro */
}

@media (prefers-color-scheme: light) {
  /* Modo claro */
}

6. Por preferencia de movimiento
@media (prefers-reduced-motion: reduce) {
  /* Desactiva animaciones */
}

7. Por tipo de puntero o interacción

@media (pointer: coarse) { /* pantallas táctiles */ }
@media (pointer: fine) {   /* mouse o touchpad */ }
@media (hover: hover) {    /* dispositivos con hover */ }


8. Por tipo de dispositivo (casi obsoletos)

@media screen { ... }
@media print { ... }
@media speech { ... }




Combinación de condiciones
@media (min-width: 600px) and (orientation: landscape) {
  ...
}

@media (prefers-color-scheme: dark) or (width < 600px) {
  ...
}

@media not (hover: hover) {
  ...
}



Ejemplo completo de uso
/* Base */
body { font-size: 16px; }

/* Responsive */
@media (width <= 768px) {
  body { font-size: 14px; }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #111; color: #eee; }
}

/* Pantallas retina */
@media (min-resolution: 2dppx) {
  img { image-rendering: crisp-edges; }
}

