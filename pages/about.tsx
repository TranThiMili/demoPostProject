import * as React from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Link from 'next/link';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import { MainLayout } from '@/components/layout';
const HeaderProps = dynamic(() => import('@/components/common/header'), { ssr: false });

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [postList, setPostList] = React.useState([]);
  const router = useRouter();
  const page = router.query?.page;
  // const {src, width, quantity} = props;
  useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}}`);
      const data = await response.json();
      setPostList(data.data);
    })(),
      [page];
  });

  const handlerClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <MainLayout>
      <h1> About</h1>
      <HeaderProps />
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handlerClick}>Click</button>
    </MainLayout>
  );
}

export async function getStaticProps() {
  console.log('getStatic');

  return {
    props: {},
  };
}
