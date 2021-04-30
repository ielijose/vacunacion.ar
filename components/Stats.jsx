import React from 'react';
import { formatNumber } from '../utils/numbers';
import TimeAgo from './TimeAgo';

function Stats({ data, info, population }) {
  const firstTotal = data.reduce((count, row) => count + parseInt(row.primera_dosis_cantidad), 0);
  const secondTotal = data.reduce((count, row) => count + parseInt(row.segunda_dosis_cantidad), 0);
  const totalPopulation = population.Totales;

  const firstPercentage = formatNumber((firstTotal * 100) / totalPopulation);
  const secondPercentage = formatNumber((secondTotal * 100) / totalPopulation);

  const fmtFirstTotal = formatNumber(firstTotal);
  const fmtSecondTotal = formatNumber(secondTotal);

  return (
    <div className="container pt-4 mx-auto">
      <div className="relative pt-10 xl:px-20 lg:px-20 md:px-12">
        <h1 className="w-5/6 pb-4 mx-auto text-3xl font-extrabold text-center text-gray-800 xl:text-4xl xl:w-4/6">
          Vacunación COVID-19 en Argentina
        </h1>

        <div className="flex flex-wrap w-4/5 mx-auto">
          <div className="w-full pt-8 pb-8 md:w-6/12">
            <p className="pb-1 text-5xl font-bold text-center text-blue-700">{fmtFirstTotal}</p>
            <p className="text-2xl font-normal text-center text-gray-600">Primera Dosis</p>
            <p className="pb-1 text-2xl font-bold text-center text-blue-500">{firstPercentage}%</p>
          </div>
          <div className="w-full pt-8 pb-8 md:w-6/12">
            <p className="pb-1 text-5xl font-bold text-center text-blue-700">{fmtSecondTotal}</p>
            <p className="text-2xl font-normal text-center text-gray-600">Segunda Dosis</p>
            <p className="pb-1 text-2xl font-bold text-center text-blue-500">{secondPercentage}%</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 text-sm">
          Datos actualizados <TimeAgo timestamp={info.lastModified} />.
        </div>

        <div className="text-sm">
          Fuente:{' '}
          <a
            href="http://datos.salud.gob.ar/dataset/vacunas-contra-covid-19-dosis-aplicadas-en-la-republica-argentina"
            target="_blank"
            className="text-blue-600"
            rel="noreferrer"
          >
            Ministerio de Salud
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
