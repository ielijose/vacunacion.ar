import React from 'react';
import { formatNumber } from '../utils/numbers';
import TimeAgo from './TimeAgo';

function Stats({ data, info }) {
  const firstTotal = formatNumber(data.reduce((count, row) => count + parseInt(row.primera_dosis_cantidad), 0));
  const secondTotal = formatNumber(data.reduce((count, row) => count + parseInt(row.segunda_dosis_cantidad), 0));

  return (
    <div className="container mx-auto pt-4">
      <div className="relative xl:px-20 lg:px-20 md:px-12 pt-10">
        <h1 className="text-center pb-4 xl:text-4xl text-3xl xl:w-4/6 w-5/6 mx-auto font-extrabold text-gray-800">
          Vacunación COVID-19 en Argentina
        </h1>

        <div className="flex  w-4/5 flex-wrap mx-auto">
          <div className="w-full md:w-6/12  pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-indigo-700 pb-1">{firstTotal}</p>
            <p className="text-2xl text-gray-600 text-center font-normal">Primera Dosis</p>
          </div>
          <div className="w-full md:w-6/12  pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-indigo-700 pb-1">{secondTotal}</p>
            <p className="text-2xl text-gray-600 text-center font-normal">Segunda Dosis</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-sm mb-2">
          Datos actualizados <TimeAgo timestamp={info.lastModified} />.
        </div>

        <div className="text-sm">
          Fuente:{' '}
          <a
            href="http://datos.salud.gob.ar/dataset/vacunas-contra-covid-19-dosis-aplicadas-en-la-republica-argentina"
            target="_blank"
            className="text-indigo-600"
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
