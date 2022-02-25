import * as React from 'react';

export interface HeaderProps {}

export default function HeaderProps(props: HeaderProps) {
  console.log('render header');

  return <div className="header">Hi</div>;
}
