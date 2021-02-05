import React from 'react';
import { FaSyringe } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import Head from 'next/head';

export default function Header() {
  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="w-full bg-white block shadow">
          <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
            <div className="flex items-center">
              <div className="mr-10 flex items-center">
                <FaSyringe className="fill-current text-indigo-500" />
                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 block">
                  Vacunación.ar
                </h3>
              </div>
            </div>
            <div className="h-full  flex items-center justify-end">
              <div className="h-full flex">
                <a href="https://github.com/ielijose/vacunacion.ar" target="_blank" rel="noreferrer">
                  <div className="w-20 h-full flex items-center justify-center border-l border-r border-gray-300 cursor-pointer text-gray-400">
                    <FiGithub className="hover:text-gray-500 transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Code block ends */}
      </div>
    </>
  );
}
