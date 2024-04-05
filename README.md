#Servidores Welcome World
Este proyecto implementa un servidor de gestión de archivos que permite crear, leer, renombrar y eliminar archivos. Los archivos se crean con un contenido que incluye la fecha actual al comienzo en formato "dd/mm/yyyy".

##Requisitos
*Node.js
*Express.js
*File System (fs) module
*Moment.js

##Instalación
1. Clona el repositorio:
git clone https://github.com/bcontreras1810/Desafio-Opcional-Servidores-Welcome-World.git

2. Navega al directorio del proyecto:
cd nombre de la carpeta clonada

3.Instala las dependencias:
npm install

Uso
1. Inicia el servidor:
node server.js

2. Accede a las siguientes rutas para interactuar con el servidor:

GET /crear: Crea un archivo con el nombre y el contenido proporcionados en los parámetros de la consulta. El contenido incluye la fecha actual al comienzo en formato "dd/mm/yyyy".
GET /leer: Devuelve el contenido de un archivo cuyo nombre es especificado en los parámetros de la consulta.
GET /renombrar: Renombra un archivo, utilizando el nombre y el nuevo nombre especificados en los parámetros de la consulta. Devuelve un mensaje de éxito que incluye el nombre anterior del archivo y su nuevo nombre.
GET /eliminar: Elimina un archivo cuyo nombre es especificado en los parámetros de la consulta.

##Ejemplos

###Crear un archivo
GET /crear?nombre=ejemplo.txt&contenido=Este%20es%20el%20contenido%20del%20archivo.
Respuesta exitosa:
Archivo creado con éxito!

###Leer un archivo
GET /leer?nombre=ejemplo.txt
Respuesta exitosa:
Este es el contenido del archivo.
Renombrar un archivo
GET /renombrar?nombre=ejemplo.txt&nuevoNombre=nuevoEjemplo.txt
Respuesta exitosa:
Archivo ejemplo.txt renombrado a nuevoEjemplo.txt.

###Eliminar un archivo
GET /eliminar?nombre=nuevoEjemplo.txt
Respuesta exitosa:
Archivo nuevoEjemplo.txt eliminado con éxito.

##Contribución
Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad.
3. Realiza tus cambios y realiza commits.
git commit -m "Agrega nueva funcionalidad"
4. Sube tus cambios a tu repositorio remoto:
git push origin feature/nueva-funcionalidad
5 . Abre un pull request en el repositorio original.
