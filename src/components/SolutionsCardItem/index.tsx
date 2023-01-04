import { memo } from 'react';

import LinkReadMore from '@components/LinkReadMore';

import { ISolutionsCardItemProps } from './interfaces';
import { Card, Image, Paragraph, Title } from './styles';

const SolutionsCardItem: React.FC<ISolutionsCardItemProps> = (props: ISolutionsCardItemProps) => {
  const { path, alt, title, text, link } = props;

  return (
    <Card>
      <Image src={path} alt={alt} />
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
      <LinkReadMore path={link} />
    </Card>
  );
};

export default memo(SolutionsCardItem);
