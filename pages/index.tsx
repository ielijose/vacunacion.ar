import React from 'react';

import Footer from '../components/Footer';
import Stats from '../components/Stats';
import Table from '../components/Table';

const Index = ({ data, info, population }) => {
  return (
    <div className="bg-gray-100">
      <Stats data={data} info={info} population={population} />
      <Table data={data} population={population} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const data = require('../public/data/latest.json');
  const info = require('../public/data/info.json');
  const population = require('../public/data/population.json');

  return {
    props: {
      data,
      info,
      population,
    },
  };
}

export default Index;
