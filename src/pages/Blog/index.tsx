import { Navigate, useParams } from 'react-router-dom';

import { AppRoutes } from '@constants/app-routes';
import { useFilter } from '@hooks/useFilter';
import { BLOG_DATA } from '@mocks/data';

const DEFAULT_BLOG_NEWS_PAGE = 1;

const Blog: React.FC = () => {
  const { id: blogId } = useParams();

  const { activeItem, filteredItems } = useFilter(BLOG_DATA, blogId);

  if (filteredItems && !blogId) {
    return <Navigate to={`${AppRoutes.blog}/${DEFAULT_BLOG_NEWS_PAGE}`} />;
  }

  if (!activeItem) {
    return <Navigate to={AppRoutes.notFound} />;
  }

  const { id, path, alt, title, subtitle, text } = activeItem;

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
