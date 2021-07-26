import React from 'react';
import { FaSyringe } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export default function Header() {
  return (
    <>
      <div className="w-full h-full bg-gray-200">
        {/* Code block starts */}
        <nav className="block w-full bg-white shadow">
          <div className="container flex items-center justify-between h-16 px-6 mx-auto lg:items-stretch">
            <div className="flex items-center">
              <div className="flex items-center mr-10">
                <FaSyringe className="text-blue-500 fill-current" />
                <h3 className="block ml-3 text-base font-bold leading-tight tracking-normal text-gray-800">
                  Vacunación.ar
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-end h-full">
              <div className="flex h-full">
                <a href="https://github.com/ielijose/vacunacion.ar" target="_blank" rel="noreferrer">
                  <div className="flex items-center justify-center w-20 h-full text-gray-400 border-l border-r border-gray-300 cursor-pointer">
                    <FiGithub className="transition-colors hover:text-gray-500" />
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
