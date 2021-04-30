// https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19VacunasAgrupadas.csv
const util = require('util');
const stream = require('stream');
const download = require('download');
const fs = require('fs-extra');
const unzipper = require('unzipper');
const transformCsvToJson = require('./transform-csv-to-json');
const group = require('./group-json');

const pipeline = util.promisify(stream.pipeline);

const CSV_URL = 'https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19VacunasAgrupadas.csv.zip';

const date = new Date();
const year = date.getFullYear();
const day = `${date.getDate()}`.padStart(2, '0');
const month = `${date.getMonth() + 1}`.padStart(2, '0');

const filename = `${year}${month}${day}.zip`;
const filenameCsv = `${year}${month}${day}.csv`;
const filenameJson = `${year}${month}${day}.json`;

download(CSV_URL, 'public/zip', { filename })
  .then(async () => {
    await pipeline(fs.createReadStream(`./public/zip/${filename}`), unzipper.Extract({ path: 'public/zip' }));
    await fs.rename(`./public/zip/Covid19VacunasAgrupadas.csv`, `./public/csv/${filenameCsv}`);

    console.log(`${CSV_URL} downloaded`);
    const json = await transformCsvToJson(filenameCsv);

    const groupedJson = group(json);

    console.log(JSON.stringify(groupedJson, null, 2));

    await fs.writeJson(`./public/data/${filenameJson}`, groupedJson);
    await fs.copyFile(`./public/data/${filenameJson}`, './public/data/latest.json');
    await fs.writeJson('./public/data/info.json', { lastModified: +new Date() });
  })
  .catch((err) => {
    console.error(`${CSV_URL} can't be downloaded. Error:`);
    console.error(err);
  });
