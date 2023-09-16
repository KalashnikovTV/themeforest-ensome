import { memo } from 'react';

import LinkReadMore from '@components/LinkReadMore';

import { IAnalyticsCardItemProps } from './interfaces';
import { Card, Image, Paragraph, Title } from './styles';

const AnalyticsCardItem: React.FC<IAnalyticsCardItemProps> = (props: IAnalyticsCardItemProps) => {
  const { id, path, alt, title, text, link } = props;

  return (
    <Card>
      <Image src={path} alt={alt} />
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
      <LinkReadMore path={`${link}/${id}`} />
    </Card>
  );
};

export default memo(AnalyticsCardItem);
