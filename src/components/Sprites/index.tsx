import { SOCIAL_LINKS } from '@constants/social-links';

import { Item, Link, List, Image } from './styles';

const Sprites: React.FC = () => {
  return (
    <List>
      {SOCIAL_LINKS.map(({ id, path, href, alt }) => {
        return (
          <Item key={id}>
            <Link href={href} target="_blank" rel="noreferrer noopener nofollow" title={`Go to ${href}`}>
              <Image src={path} alt={alt} />
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

export default Sprites;
