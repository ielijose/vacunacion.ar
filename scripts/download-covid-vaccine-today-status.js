// https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19VacunasAgrupadas.csv

const download = require('download');
const fs = require('fs-extra');
const transformCsvToJson = require('./transform-csv-to-json');

const CSV_URL = 'https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19VacunasAgrupadas.csv';

const date = new Date();
const year = date.getFullYear();
const day = `${date.getDate()}`.padStart(2, '0');
const month = `${date.getMonth() + 1}`.padStart(2, '0');

const filename = `${year}${month}${day}.csv`;

download(CSV_URL, 'public/data', { filename })
  .then(async () => {
    console.log(`${CSV_URL} downloaded`);
    const json = await transformCsvToJson(filename);
    console.log(filename);
    const jsonFileName = filename.replace('.csv', '.json');

    console.log(json);

    await fs.writeJson(`./public/data/${jsonFileName}`, json);
    await fs.copyFile(`./public/data/${jsonFileName}`, './public/data/latest.json');
    await fs.writeJson('./public/data/info.json', { lastModified: +new Date() });
  })
  .catch((err) => {
    console.error(`${CSV_URL} can't be downloaded. Error:`);
    console.error(err);
  });
