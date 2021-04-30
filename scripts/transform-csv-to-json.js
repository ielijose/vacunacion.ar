const neatCsv = require('neat-csv');
const fs = require('fs-extra');

module.exports = async function transformCsvToJson(csvFileName) {
  try {
    const data = await fs.readFile(`./public/csv/${csvFileName}`);
    return await neatCsv(data);
  } catch (err) {
    console.error(err);
    return {};
  }
};
