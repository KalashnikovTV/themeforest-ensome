import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { AppRoutes } from '@constants/app-routes';
import { BLOG_DATA } from '@mocks/data';

import { DEFAULT_BLOG_NEWS_PAGE } from './constants';

const Blog: React.FC = () => {
  const { id: blogId } = useParams();

  const getBlogItem = useMemo(
    () =>
      blogId
        ? BLOG_DATA?.find(({ id }) => id === Number(blogId))
        : BLOG_DATA?.find(({ id }) => id === DEFAULT_BLOG_NEWS_PAGE),
    [blogId]
  );

  if (getBlogItem && !blogId) return <Navigate to={`${AppRoutes.blog}/${DEFAULT_BLOG_NEWS_PAGE}`} />;

  if (!getBlogItem) return <Navigate to={AppRoutes.notFound} />;

  const { id, path, alt, title, subtitle, text } = getBlogItem;

  return (
    <>
      Blog page
      <div>id: {id}</div>
      <img src={path} alt={alt} />
      <div>title: {title}</div>
      <div>subtitle: {subtitle}</div>
      <div>text: {text}</div>
    </>
  );
};

export default Blog;
