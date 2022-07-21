const { Router } = require("express");
const { Op } = require("sequelize");
const request = require("request-promise");
const cheerio = require("cheerio");
const cron = require("node-cron");
const fs = require("fs");

const { Country, Activity, Data } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const axios = require("axios");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x = cron.schedule("0 * * * * *", async () => {
  let minuto = time();
  let funcion = await init();
  console.log("hola mundo", minuto, funcion, url2);
});
let url2;
let expresion2;
let header;
let objeto;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//----------------------funciones----------------------//
//------funcion scraping:----------
async function init() {
  console.log("--------------uuurl2 dentro del init-----", url2);
  const $ = await request({
    uri: url2,
    transform: (body) => cheerio.load(body),
  });
  //lectura header:-----------------------------------
  header = $("head").html();
  // console.log(header);
  //lectura mil caracteres:----------------------------
  const webSiteHeading = $("body");
  let xx = webSiteHeading.text().trim();
  let milCaracteres = xx
    .split(" ")
    .join("")
    .replace(/(\r\n|\n|\r)/gm, "")
    .slice(0, 50);
  //fin de lectura mil caracteres:---------------------
  objeto = { head: header, milCaracteres: milCaracteres };
  getApiInfoData();
  return objeto;
}
//-----funcion time:---------------
async function time(params) {
  // let date = new Date().toDateString().split(" ").join("_");
  let date = new Date();
  let min = date.getMinutes();
  ////---crear archivo-----------
  // let escrito = new Promise((res, rej) => {
  //   fs.writeFile(`${min}dato.txt`, `${min}texto`, (e) => {
  //     if (e) {
  //       rej(e);
  //     } else {
  //       res();
  //     }
  //   });
  // });
  return min;
}
const getApiInfoData = async () => {
  try {
    const dataApi = await axios.get("http://localhost:3001/data"); //para apinfo
    console.log("~~~~~~~~~:dataApi", dataApi.data);

    // const apiInfo = await dataApi.data.map((e) => {
    //   // let capital = e.capital ? e.capital[0] : "no info";
    //   return {
    //     head: e.head, //es como el id
    //     milCaracteres: e.milCaracteres,
    //   };
    // });
    await Data.create({
      header: dataApi.data.head, //es como el id
      character: dataApi.data.milCaracteres,
    });

    return dataApi.data;
    // return apiInfo;
  } catch (error) {
    console.log(error);
  }
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-------------------rutas-------------------------------//
//--------.get("/"---------------------------------------|
router.get("/", async (req, res, next) => {
  // const dbCountry = await addToDbCountry();
  res.send("ruta landing page");
});
//--------.post("/data"---------------------------------------|
router.post("/data", (req, res) => {
  x.stop();
  console.log("leyo archivo");
  url2 = req.body.url2;
  console.log("leyo url2------", url2);
  expresion2 = req.body.expresion;
  res.send("url dijitada: " + req.body.url2 + "\nexpresion: " + expresion2);
});
//--------.get("/data"---------------------------------------|
router.get("/data", (req, res) => {
  x.stop();
  if (expresion2 === "" || expresion2 == null) {
    expresion2 = "* * * * * *";
  }
  console.log("leyo url2------", url2);

  console.log("leyo expresion2------", expresion2);

  // opera.sumar(12, 9);
  // res.send(
  //   "url dijitada get: " +
  //     url2 +
  //     "\nexpresion get: " +
  //     expresion2 +
  //     "\nobjeto: " +
  //     objeto
  // );
  res.send(objeto);
  x = cron.schedule(expresion2, async () => {
    let minuto = time();
    let funcion = await init();

    console.log("hola mundo", minuto, funcion, url2);
  });
});
//--------.get("/data"---------------------------------------|
router.get("/pdata", async (req, res, next) => {
  // const dbCountry = await addToDbCountry();
  const x = await getApiInfoData();

  res.send(x);
});

router.get("/reset", (req, res) => {
  x.stop();
  res.send("termino cron");
});
router.get("/dataall", async (req, res) => {
  let dataDb = await Data.findAll({
    order: [["createdAt", "DESC"]],
    // attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  //  return countryDb;
  res.send(dataDb);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports = router;
