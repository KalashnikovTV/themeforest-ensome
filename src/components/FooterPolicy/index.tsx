import { POLICY_LINKS } from '@constants/policy-links';

import { Wrapper, Paragraph, LinkPolicyWrapper, LinkPolicy } from './styles';

const FooterPolicy: React.FC = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Paragraph>Ensome, © {getCurrentYear} All Rights Reserved</Paragraph>

      <LinkPolicyWrapper>
        {POLICY_LINKS.map(({ name, path }, index) => {
          return (
            <LinkPolicy key={`${name}-${index}`} to={path}>
              {name}
            </LinkPolicy>
          );
        })}
      </LinkPolicyWrapper>
    </Wrapper>
  );
};

export default FooterPolicy;
