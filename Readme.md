<p align='left'>
    <img src='https://raw.githubusercontent.com/kenpulicorre/countries_proyect/main/client/src/images/bandera.gif' </img>
</p>

# Scraping job with nodejs Project

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Aprender mejores prácticas.
- Ilustrar el comportamiento scraping, Cron y Job

## Enunciado:

Build a simple web application that will act as a task scheduler for simple tasks.
Specifically, the first task is to ping a website and scrape the headers (or first 1000
characters). The application should take a Cron syntax expression and a URL as
input, and then execute the job according to the schedule.

➢ Use any language (C#, Java, Javascript, Go, NodeJs, ...)

➢ Save the scraped date in any database (SQL server, My SQL, mongo,
postgreSQL, ...)

➢ Provide a web API (REST, GraphQL, etc.)

➢ You can build the application to run locally, or in a public cloud (Azure, AWS,
GCP) using whatever technology stacks are available for you in that
environment.

➢ You do not need to include authentication.

➢ UI is optional

➢ You must keep your code in a source control repository (GitHub, Bitbucket,
etc.)

➢ Do not build a Cron expression parser, there are many to choose from.

➢ Url Preview for CronCron

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

-**Importante-2:**debes crear un archivo .env en la carpeta api,
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

Adicionalmente será necesario que creen desde psql una base de datos llamada `biznation` y el modelo al cual se le realiza el llenado de datos se le denomina en este proyecto `data`

El contenido de `client` fue creado usando: Create React App.

#### Tecnologías usadas:

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] Node.js

## Back notas:

### orden de dependencias instaladas

- npm init
- npm i cheerio request request-promise
- npm i node-cron
- npm i axios node-localstorage
- npm i express

#### pruebas desde postman

- todas las pruebas se realizan desde postaman por lo tanto revice este documento para guiarse: - [**docu postman para proyecto**](https://documenter.getpostman.com/view/19592464/UzR1K2oL)

## Archivo ejecucion :

para ejecutar el archivo back y front solo debe de instalar las dependencias, despues debe de dirijirse a la carpeta desde la terminal y ejecutar : (el archivo front puede modificar el puerto con el archivo `.env` colocando el puerto deseado POR EJEMPLO :`PORT=4001`)

```
npm install
```

y una vez se tengan instaladas las dependencias ejecutar la aplicacion,

```
npm start
```

referencia:

[ toscrape](https://quotes.toscrape.com/)

---

## **AUTOR**

**kenneth E. Puliche Correa**

### <h3> 🤝🏻 &nbsp;Connect with Me </h3>

Email: **ingkeneidel@gmail.com**
Wpp: **<a href="https://wa.link/0l2haf"> +573114035605 </a>**

## 🌐 Socials:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kenneth-puliche-correa-813311225/)
</br>

---
