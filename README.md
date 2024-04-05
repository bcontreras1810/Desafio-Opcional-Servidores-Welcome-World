<h1><strong>Servidores Welcome World</strong></h1>

<p>Este proyecto implementa un servidor de gestión de archivos que permite crear, leer, renombrar y eliminar archivos. Los archivos se crean con un contenido que incluye la fecha actual al comienzo en formato "dd/mm/yyyy".</p>

<h2><strong>Requisitos</strong></h2>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>File System (fs) module</li>
<li>Moment.js</li>
</ul>

<h2><strong>Instalación</strong></h2>
<ol>
<li>Clona el repositorio: <code>git clone https://github.com/bcontreras1810/Desafio-Opcional-Servidores-Welcome-World.git</code></li>
<li>Navega al directorio del proyecto: <code>cd nombre de la carpeta clonada</code></li>
<li>Instala las dependencias: <code>npm install</code></li>
</ol>

<h2><strong>Uso</strong></h2>
<ol>
<li>Inicia el servidor: <code>node server.js</code></li>
<li>Accede a las siguientes rutas para interactuar con el servidor:</li>
</ol>

<h3><strong>GET /crear</strong></h3>
<p>Crea un archivo con el nombre y el contenido proporcionados en los parámetros de la consulta. El contenido incluye la fecha actual al comienzo en formato "dd/mm/yyyy".</p>

<h3><strong>GET /leer</strong></h3>
<p>Devuelve el contenido de un archivo cuyo nombre es especificado en los parámetros de la consulta.</p>

<h3><strong>GET /renombrar</strong></h3>
<p>Renombra un archivo, utilizando el nombre y el nuevo nombre especificados en los parámetros de la consulta. Devuelve un mensaje de éxito que incluye el nombre anterior del archivo y su nuevo nombre.</p>

<h3><strong>GET /eliminar</strong></h3>
<p>Elimina un archivo cuyo nombre es especificado en los parámetros de la consulta.</p>

<h2><strong>Ejemplos</strong></h2>

<h3><strong>Crear un archivo</strong></h3>
<p>GET /crear?nombre=ejemplo.txt&contenido=Este%20es%20el%20contenido%20del%20archivo.</p>
<p>Respuesta exitosa:<br>
Archivo creado con éxito!</p>

<h3><strong>Leer un archivo</strong></h3>
<p>GET /leer?nombre=ejemplo.txt</p>
<p>Respuesta exitosa:<br>
Este es el contenido del archivo.</p>

<h3><strong>Renombrar un archivo</strong></h3>
<p>GET /renombrar?nombre=ejemplo.txt&nuevoNombre=nuevoEjemplo.txt</p>
<p>Respuesta exitosa:<br>
Archivo ejemplo.txt renombrado a nuevoEjemplo.txt.</p>

<h3><strong>Eliminar un archivo</strong></h3>
<p>GET /eliminar?nombre=nuevoEjemplo.txt</p>
<p>Respuesta exitosa:<br>
Archivo nuevoEjemplo.txt eliminado con éxito.</p>

<h2><strong>Contribución</strong></h2>
<p>Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:</p>
<ol>
<li>Realiza un fork del repositorio.</li>
<li>Crea una rama para tu nueva funcionalidad.</li>
<li>Realiza tus cambios y realiza commits:<br>
<code>git commit -m "Agrega nueva funcionalidad"</code></li>
<li>Sube tus cambios a tu repositorio remoto:<br>
<code>git push origin feature/nueva-funcionalidad</code></li>
<li>Abre un pull request en el repositorio original.</li>
</ol>

