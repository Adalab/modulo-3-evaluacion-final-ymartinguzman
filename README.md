# Descripción del proyecto

La página web consiste en un buscardor por nombre de los personajes del universo Rick y Morty.

Todos los personajes tienen su propia tarjeta identificativa. En ella se recogen unos datos mínimos:

- \*\*Imagen
- \*\*Nombre
- \*\*Especie

Haciendo uso de React Router, podemos acceder a los datos específicos de cada tarjeta donde se amplia información.

Es un ejercicio propuesto como método de evaluación final tras aprender a usar Reactjs en el Módulo 3 de Adalab.

## Características

El proyecto está desarrollado con Reactjs en componentes funcionales.

La información de los personajes la obtenemos a partir de datos de un servidor externo: https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json

Se puede obtener mas información sobre cada personaje clickando sobre ellos.

Se inicia una nueva ruta donde aparecen los datos iniciales junto a otros datos más específicos.
Implementación y uso de React router

## Estructura de carpetas

```public/~~~
~~~src/~~~
~~~ ~~~components/~~~
│ | ├── App.js/
│ | ├── Characterdetail.js/
│ | ├── CharacterList.js/
│ | ├── Filter.js/
│ | ├── Header.js/
│ ├── images/
│ ├── services/
│ | ├── api.js/
│ ├── stylesheets/
│ | ├── App.scss/
├── .gitignore
├── debug.log
├── package-lock.json
├── package.json
├── README.md

### Instalación

Para crear proyecto nuevo

- \*\*npm install create-react-app

Instalar dependecias de:

- \*\*Sass npm install node-sass // npm install node-sass@4.14.1
- \*\*PropTypes npm install --save prop-types
- \*\*React Router npm install --save react-router-dom

Happy coding!
```
