import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full px-4 bg-blue-700 xl:pt-4">
      <div className="container py-4 mx-auto lg:pb-10 lg:pt-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="lg:w-1/4">
            <div className="flex items-center">
              <Link href="/">
                <a className="block text-xl font-bold leading-tight tracking-normal text-white hover:text-gray-300 animate-link lg:ml-3">
                  Vacunación.ar
                </a>
              </Link>
            </div>
          </div>
          <div className="items-center justify-end lg:w-3/4 lg:flex">
            <ul className="flex justify-center lg:justify-end f-m-m">
              <a href="https://github.com/ielijose/vacunacion.ar" target="_blank" rel="noreferrer">
                <li className="flex items-center mt-2 mb-2 text-lg font-semibold text-white hover:text-gray-300 animate-link lg:mb-0 lg:mt-0">
                  <FaGithub className="mr-2" />
                  GitHub
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
