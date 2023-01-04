import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppRoutes } from '@constants/app-routes';

import { IBreadcrumb, IBreadcrumbsProps } from './interfaces';
import { Item, LinkBreadcrumb, List, Nav } from './styles';
import { convertBreadcrumb } from './utils';

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({
  rootLabel = AppRoutes.home?.slice(1),
  omitRootLabel = false,
  labelsToUppercase = true,
  replaceCharacterList = [{ from: '-', to: ' ' }],
  omitIndexList = null,
  transformLabel = null
}: IBreadcrumbsProps) => {
  const location = useLocation();

  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[] | null>(null);

  useEffect(() => {
    if (location) {
      const linkPath = location.pathname.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          path: '/' + linkPath.slice(0, i + 1).join('/')
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [location]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <Nav aria-label="breadcrumbs">
      <List>
        {!omitRootLabel && (
          <Item>
            <LinkBreadcrumb to={AppRoutes.home} $isActiveItem={false}>
              {convertBreadcrumb(rootLabel || AppRoutes.home?.slice(1), labelsToUppercase, replaceCharacterList)}
            </LinkBreadcrumb>
          </Item>
        )}

        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, index) => {
            if (
              !breadcrumb ||
              breadcrumb.breadcrumb.length === 0 ||
              (omitIndexList && omitIndexList.find((value) => value === index))
            ) {
              return;
            }

            return (
              <Item key={`${breadcrumb.path}-${index}`}>
                <LinkBreadcrumb to={breadcrumb.path} $isActiveItem={index === breadcrumbs.length - 1}>
                  {convertBreadcrumb(breadcrumb.breadcrumb, labelsToUppercase, replaceCharacterList, transformLabel)}
                </LinkBreadcrumb>
              </Item>
            );
          })}
      </List>
    </Nav>
  );
};

export default memo(Breadcrumbs);
