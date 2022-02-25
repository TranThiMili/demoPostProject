import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsDetailPageProps {
}

export default function ParamsDetailPage (props: ParamsDetailPageProps) {
    const router = useRouter()
  return (
    <div>
      Post Params Page
      <p>Query: {JSON.stringify(router.query)}</p>
     
    </div>
  );
}
