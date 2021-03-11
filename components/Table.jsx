import React from 'react';
import { formatNumber } from '../utils/numbers';

export default function Table({ data, population }) {
  return (
    <>
      <div className="container w-full px-6 py-12 mx-auto overflow-x-scroll xl:overflow-x-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full h-16 py-8 bg-gray-800">
              <th className="pl-4 pr-6 font-normal leading-4 tracking-normal text-left text-gray-300 rounded-l-lg md:pl-8">
                Provincia
              </th>
              <th className="hidden pr-6 font-normal leading-4 tracking-normal text-left text-gray-300 md:table-cell">
                Población
              </th>
              <th className="hidden pr-6 font-normal leading-4 tracking-normal text-left text-gray-300 md:table-cell">
                Vacuna
              </th>
              <th className="pr-6 font-normal leading-4 tracking-normal text-left text-gray-300">Primera Dosis</th>
              <th className="pr-6 font-normal leading-4 tracking-normal text-left text-gray-300">% Primera Dosis</th>
              <th className="pr-6 font-normal leading-4 tracking-normal text-left text-gray-300">Segunda Dosis</th>

              <th className="pr-0 font-normal leading-4 tracking-normal text-left text-gray-300 rounded-r-lg md:pr-8">
                % Segunda Dosis
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const provincePopulation = population[row.jurisdiccion_nombre] || 0;

              return (
                <tr key={row.jurisdiccion_nombre} className="h-20 border-b border-gray-300 cursor-pointer">
                  <td className="pl-4 pr-6 text-sm font-bold leading-4 tracking-normal text-gray-800 md:pl-8 whitespace-nowrap">
                    {row.jurisdiccion_nombre}
                  </td>

                  <td className="hidden pr-6 text-sm leading-4 tracking-normal text-gray-800 md:table-cell whitespace-nowrap ">
                    {formatNumber(provincePopulation)}
                  </td>
                  <td className="hidden pr-6 text-sm leading-4 tracking-normal text-gray-800 md:table-cell whitespace-nowrap ">
                    {row.vacuna_nombre}
                  </td>
                  <td className="pr-6 text-sm font-semibold leading-4 tracking-normal text-gray-800 whitespace-nowrap">
                    {formatNumber(row.primera_dosis_cantidad)}
                  </td>
                  <td className="pr-6 text-sm font-semibold leading-4 tracking-normal text-gray-800 whitespace-nowrap">
                    {formatNumber((row.primera_dosis_cantidad * 100) / provincePopulation)}%
                  </td>
                  <td className="pr-6 text-sm font-semibold leading-4 tracking-normal text-gray-800 whitespace-nowrap">
                    {formatNumber(row.segunda_dosis_cantidad)}
                  </td>
                  <td className="pr-6 text-sm font-semibold leading-4 tracking-normal text-gray-800 whitespace-nowrap">
                    {formatNumber((row.segunda_dosis_cantidad * 100) / provincePopulation)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
