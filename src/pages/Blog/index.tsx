import { Navigate, useParams } from 'react-router-dom';

import { AppRoutes } from '@constants/app-routes';
import { useFilter } from '@hooks/useFilter';
import PageHeaderBlock from '@layouts/PageHeaderBlock';
import { BLOG_DATA } from '@mocks/data';
import { Container } from '@theme/theme';

import { Wrapper } from './styles';

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
      <PageHeaderBlock title={title} />
      {/* Перенести контейнер во внутрь будущего отдельного блока */}
      <Container>
        <Wrapper>
          Blog page
          <div>id: {id}</div>
          <img src={path} alt={alt} />
          <div>title: {title}</div>
          <div>subtitle: {subtitle}</div>
          <div>text: {text}</div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Blog;
