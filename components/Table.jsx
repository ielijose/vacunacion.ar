import React from 'react';
import { formatNumber } from '../utils/numbers';

export default function Table({ data, population }) {
  return (
    <>
      <div className="mx-auto container px-6 py-12 w-full overflow-x-scroll xl:overflow-x-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full h-16 bg-gray-800 py-8">
              <th className="rounded-l-lg pl-4 md:pl-8 text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">
                Provincia
              </th>
              <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4 hidden md:table-cell">
                Población
              </th>
              <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4 hidden md:table-cell">
                Vacuna
              </th>
              <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Primera Dosis</th>
              <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">% Primera Dosis</th>
              <th className="text-gray-300 font-normal pr-6 text-left tracking-normal leading-4">Segunda Dosis</th>

              <th className="rounded-r-lg text-gray-300 font-normal pr-0 md:pr-8 text-left tracking-normal leading-4">
                % Segunda Dosis
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const provincePopulation = population[row.jurisdiccion_nombre] || 0;

              return (
                <tr key={row.jurisdiccion_nombre} className="cursor-pointer h-20 border-gray-300 border-b">
                  <td className="pl-4 md:pl-8 text-sm pr-6 whitespace-nowrap text-gray-800 tracking-normal leading-4 font-bold">
                    {row.jurisdiccion_nombre}
                  </td>

                  <td className="hidden md:table-cell text-sm pr-6 whitespace-nowrap text-gray-800 tracking-normal leading-4 ">
                    {formatNumber(provincePopulation)}
                  </td>
                  <td className="hidden md:table-cell text-sm pr-6 whitespace-nowrap text-gray-800 tracking-normal leading-4 ">
                    {row.vacuna_nombre}
                  </td>
                  <td className="text-sm pr-6 whitespace-nowrap text-gray-800 tracking-normal leading-4 font-semibold">
                    {formatNumber(row.primera_dosis_cantidad)}
                  </td>
                  <td className="text-sm pr-6 whitespace-nowrap text-gray-800 tracking-normal leading-4 font-semibold">
                    {formatNumber(row.primera_dosis_cantidad / provincePopulation)}%
                  </td>
                  <td className="text-sm pr-6 whitespace-nowrap text-gray-800 tracking-normal leading-4 font-semibold">
                    {formatNumber(row.segunda_dosis_cantidad)}
                  </td>
                  <td className="text-sm pr-6 whitespace-nowrap text-gray-800 tracking-normal leading-4 font-semibold">
                    {formatNumber(row.segunda_dosis_cantidad / provincePopulation)}%
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
