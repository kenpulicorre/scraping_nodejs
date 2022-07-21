<p align='left'>
    <img src='https://raw.githubusercontent.com/kenpulicorre/countries_proyect/main/client/src/images/bandera.gif' </img>
</p>

# Project scraping job with nodejs

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Aprender mejores prácticas.
- Aprender a utilizar scraping

## Comenzando

1.  Forkear el repositorio para tener una copia del mismo en sus cuentas
2.  Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendrán un `boilerplate` con la estructura general tanto del servidor como de cliente.

**IMPORTANTE:** Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

-**importante2:**debes crear un archivo .env en la carpeta api,
y puede llenar como este ejemplo :

     DB_USER=postgres
     DB_PASSWORD=12345
     DB_HOST=localhost

donde `postgres` es el nombre de su base de datos `12345` es la contraseña y `localhost` es el el lugar o dominio de su base de datos se encunentra en el archivo `env.ejemplo`

## BoilerPlate

El boilerplate cuenta con dos carpetas: `apiback` y `clientfront`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `data`

El contenido de `client` fue creado usando: Create React App.

## Enunciado

#### Tecnologías usadas:

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] Node.js

#### pruebas desde postman

- todas las pruebas se realizan desde postaman por lo tanto revice este documento para guiarse: - [ ] **docu postman para proyecto**: -`https://documenter.getpostman.com/view/19592464/UzR1K2oL`

## Archivo ejecucion :

para ejecutar el archivo back y front solo debe de instalar las dependencias, despues debe de dirijirse a la carpeta desde la terminal y ejecutar :

```
npm install
```

y una vez se tengan instaladas las dependencias ejecutar la aplicacion,

```
npm start
```

## nota:

**Autor**
**kenneth E. Puliche Correa**
