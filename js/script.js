// Seleccionamos el enlace de contacto con el ID 'enlaceContacto', que permite a los usuarios interactuar con el para abrir la ventana emergente de contacto.
const enlaceContacto = document.getElementById('enlaceContacto');

// Agregamos un evento de clic al enlace de contacto. Cuando se hace clic en el boton contacto, se ejecutará una función.
enlaceContacto.addEventListener('click', () => {
  // Creamos un nuevo elemento <div> llamado 'popup'. Este elemento servirá como contenedor para la ventana emergente que aparecerá cuando el enlace de contacto sea clickeado.
  const popup = document.createElement('div');

  // Agregamos la clase CSS 'popup' al elemento <div>. Esta clase se define en la hoja de estilo y contiene los estilos necesarios para la apariencia de la ventana emergente.
  popup.classList.add('popup');

  // Agregamos contenido HTML al elemento 'popup'. Este contenido incluye una estructura de cabecera con el logo y un mensaje introductorio para la ventana emergente. Luego, hay un formulario con campos para el nombre, correo electrónico, mensaje y botones de enviar y cerrar.
  popup.innerHTML = `
    <div class="popup-content">
      <div class="cabecera">
        <img src="../img/logo.png" alt="Logo Reaper Gaming Squad">
        <div class="titulo">
          <h3>Contáctanos</h3>
          <p>Si tenés alguna pregunta o comentario sobre Reaper Gaming Squad, no dudes en ponerte en contacto con nosotros.</p>
        </div>
      </div>
      <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required>
        <label for="correo">Correo electrónico:</label>
        <input type="email" id="correo" required>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" required></textarea>
        <button type="submit">Enviar</button>
        <button id="cerrarPopup">Cerrar</button>
      </form>
    </div>
  `;

  // Añadimos el elemento 'popup' al cuerpo del documento (<body>). Esto hace que la ventana emergente sea visible en la página web.
  document.body.appendChild(popup);

  // Seleccionamos el botón de cerrar la ventana emergente por su ID 'cerrarPopup'.
  const cerrarPopup = document.getElementById('cerrarPopup');

  // Agregamos un evento de clic al botón de cerrar la ventana emergente. Cuando este botón es clickeado, se ejecuta una función que elimina el elemento 'popup' del cuerpo del documento, ocultando así la ventana emergente.
  cerrarPopup.addEventListener('click', () => {
    document.body.removeChild(popup);
  });
});
