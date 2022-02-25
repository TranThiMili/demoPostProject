import exp from 'constants';
import * as React from 'react';

export interface ParamsPageProps {}

export default function ParamsPage(props: ParamsPageProps) {
  return <div>Param Page</div>;
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    props: {},
  };
}
