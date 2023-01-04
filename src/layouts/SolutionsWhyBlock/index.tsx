import { Wrapper, Image, WrapperContent, Title, WrapperDescription, Subtitle, Paragraph } from './styles';

const SolutionsWhyBlock: React.FC = () => {
  return (
    <Wrapper>
      <Image />
      <WrapperContent>
        <Title>Why choose us?</Title>

        <WrapperDescription>
          <Subtitle>Machine learning</Subtitle>
          <Paragraph>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores.
          </Paragraph>
          <Subtitle>Embed analytics</Subtitle>
          <Paragraph>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores.
          </Paragraph>
          <Subtitle>Access control</Subtitle>
          <Paragraph>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores.
          </Paragraph>
        </WrapperDescription>
      </WrapperContent>
    </Wrapper>
  );
};

export default SolutionsWhyBlock;
