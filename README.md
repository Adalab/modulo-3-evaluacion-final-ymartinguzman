

# Evaluación final módulo 3 Adalab

Este ejercicio de evaluación consiste en crear una página web con React. Es un buscador de los personajes del universo Rick y Morty.

A través del buscador, podemos filtrar por el nombre de los personajes y podemos ordenarlos alfabéticamente.

Todos los personajes tienen su propia tarjeta identificativa donde se recogen unos datos mínimos:

- Imagen
- Nombre
- Especie


Haciendo uso de React Router, podemos acceder a los datos específicos de cada tarjeta para ampliar la información.


## Características

El proyecto está desarrollado con React.js en **componentes funcionales**.

La información de los personajes la obtenemos a partir de datos de un servidor externo: https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json

Los personajes pueden filtrarse por nombre y por orden alfabético, y en caso de no obtener resultados que coincidan, se muestra siempre la misma imagen "No results found".

Se puede obtener mas información sobre cada personaje clickando sobre cada tarjeta, que abre una nueva ruta donde aparecen los datos iniciales junto con otros datos más específicos.

Desde cada nueva ruta, tenemos acceso al inicio de la página mediente botones.


## Estructura de carpetas

```
├── public/
├── src/
│ | ├── components/
│ | |    ├── App.js/
│ | |    ├── Characterdetail.js/
│ | |    ├── CharacterList.js/
│ | |    ├── Filter.js/
│ | |    ├── Header.js/
│ ├── images/
│ ├── services/
│ |   ├── api.js/
│ ├── stylesheets/
│ |   ├── App.scss/
├── .gitignore
├── debug.log
├── package-lock.json
├── package.json
├── README.md
```

### Instalación

Instalar React.js 

`npm install create-react-app`

Crear un proyecto nuevo

`create-react-app nombre-del-proyecto`

Arrancar el proyecto
`cd nombre-del-proyecto`

`npm start`


Instalar dependecias de:

- Sass 

`npm install node-sass`  `npm install node-sass@4.14.1`

- PropTypes 

`npm install --save prop-types`

- React Router 

`npm install --save react-router-dom`


Happy coding!
