import { SOCIAL_LINKS } from '@constants/social-links';

import { SpritesItem, SpritesLink, SpritesList } from './styles';

const Sprites: React.FC = () => {
  return (
    <SpritesList>
      {SOCIAL_LINKS.map(({ path, href, alt }, index) => {
        return (
          <SpritesItem key={`${path}-${index}`}>
            <SpritesLink href={href} target="_blank" rel="noreferrer noopener nofollow">
              <img src={path} alt={alt} />
            </SpritesLink>
          </SpritesItem>
        );
      })}
    </SpritesList>
  );
};

export default Sprites;
