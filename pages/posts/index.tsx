import { GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostListProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListProps) {
  return (
    <div>
      <h1>PostListPage</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  {
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await response.json();

    return {
      props: {
        posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
      },
    };
  }
};
