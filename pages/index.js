import React from 'react';
import Header from '../components/Header';
import Stats from '../components/Stats';
import Table from '../components/Table';

const Index = ({ data, info }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Stats data={data} info={info} />
      <Table data={data} />
    </div>
  );
};

export async function getStaticProps() {
  const data = require('../public/data/latest.json');
  const info = require('../public/data/info.json');

  return {
    props: {
      data,
      info,
    },
  };
}

export default Index;
