# Proyecto Final React: E-commerce The Clothing Store

## Descripción del proyecto
El proyecto consiste en una tienda de ropa online llamada The Clothing Store. Este e-commerce tiene dos categorías: ropa para hombre y ropa para mujer. Cada ítem que se puede comprar contiene su nombre, descripción y precio. Este e-commerce fue creado por medio de React y está conectado a una base de datos de la cual se trae la información de los productos y en la cual se almacenan las compras realizadas por los clientes. 

# Documentación 

## Base de datos 
Para almacenar los datos se utilizó Firebase (Google), implementando Firestore. 

## Librerías
Para la navegación del E-commerce se implementó React-router-dom. 

# Componentes y Carpetas
Este proyecto consta de dos tipos de componentes: los componentes presentacionales (permiten mostrar la información en la web, por ejemplo el componente Item tiiene como función mostrar un producto) y componentes contenedores (los cuales permiten traer la información de la base de datos y contienen a los componentes presentacionales). 
Así mismo, el proyecto está compuesto por los siguientes archivos y carpetas: 

**App.jsx** - archivo que contiene los componentes y el routing para la navegación de la web
**context** - carpeta que contiene el contexto del cart, este contexto permite utilizar la misma información en diferentes componentes sin la necesidad de utilizar una gran cantidad de props o eventos
**components** - carpeta que contiene archivos ,jsx y su respectivo archivo .css para el estilo de la web
**index.html e index.jsx** 

# Funcionamiento
La web funciona de la siguiente manera: 
1. Cuenta con tres links en el nav: Home (el cual es el inicio/presentación del e-commerce), All Products (contiene todos los productos - hombre y mujer), Men (filtra los productos de manera que solo contiene productos para hombre), Women (filtra los productos de manera que solo contiene productos para mujer). Cuenta también con un ícono del carrito que permite ver el número de productos que hay en el carrito (si se han agregado), y si se clickea te lleva al carrito. 

2. Una vez que se le da click a View Detail (Ver detalle), lleva al detalle del ítem, el cual contiene precio, nombre y descripción, ahí se puede elegir la cantidad de ítems que se quieren comprar (por medio del ItemCounter) y tiene un botón Add To Cart para agregar al carrito, y una vez hecho esto un botón Go To Cart para ir al carrito. 

3. Una vez en el carrito, se pueden eliminar ítems si se quiere por medio del botón Delete All. También hay un botón Checkout que lleva al formulario (cuando ya se quiere hacer la compra), en el formulario se ingresa el nombre y el correo electrónico del usuario. 

4. Una vez ingresados los datos en el formulario y clickeado el botón Submit, estos se guardan en la base de datos (Firebase), junto con los datos de la orden (nombre, precio, id, cantidad y precio total), y aparece un mensaje que dice que la compra se realizó con éxito, junto con el número de orden. 
