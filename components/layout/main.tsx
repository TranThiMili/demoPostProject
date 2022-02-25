import { LayoutProps } from '@/models/common';
import Link from 'next/link';
import * as React from 'react';
import { useEffect } from 'react';

export interface IMainLayoutProps {
}

export function MainLayout ({children}: LayoutProps) {
    useEffect(() => {
        console.log('mounting');
        return  () => console.log('unmounting')
    }, []) /// chir chjay luc mount and unmount
  return (
    <div>
        <h1>Main Layout</h1>
        <Link href='/'><a>Home</a></Link>
      
        <Link href='/about'><a>About</a></Link>

        <div>{children}</div>
    </div>
  );
}
