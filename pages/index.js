import React from 'react';
import Header from '../components/Header';
import Stats from '../components/Stats';
import Table from '../components/Table';

const Index = ({ data, info }) => {
  return (
    <>
      <Header />
      <Stats data={data} />

      <Table data={data} />
    </>
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
