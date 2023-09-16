import { memo } from 'react';

import SubscribeForm from '@forms/SubscribeForm';
import { Container } from '@theme/theme';

import { ISubscribeBlockProps } from './interfaces';

import { WrapperContent, Wrapper, WrapperText, Title, Paragraph } from './styles';

const SubscribeBlock: React.FC<ISubscribeBlockProps> = ({ bgColor }: ISubscribeBlockProps) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Container>
        <WrapperContent>
          <WrapperText>
            <Title>Subscribe to our newsletter</Title>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </Paragraph>
          </WrapperText>
          <SubscribeForm />
        </WrapperContent>
      </Container>
    </Wrapper>
  );
};

export default memo(SubscribeBlock);
