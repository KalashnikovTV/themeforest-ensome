import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Routes } from '@router/routes';

import { IBreadcrumb, IBreadcrumbsProps } from './interfaces';
import { Item, LinkBreadcrumb, List, Nav } from './styles';
import { convertBreadcrumb } from './utils';

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({
  rootLabel = Routes.HOME?.replace('/', ''),
  omitRootLabel = false,
  labelsToUppercase = true,
  replaceCharacterList = [{ from: '-', to: ' ' }],
  omitIndexList = null,
  transformLastLabel = null,
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
          path: '/' + linkPath.slice(0, i + 1).join('/'),
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
            <LinkBreadcrumb to={Routes.HOME} $isActiveItem={false}>
              {convertBreadcrumb(rootLabel || Routes.HOME?.slice(1), labelsToUppercase, replaceCharacterList)}
            </LinkBreadcrumb>
          </Item>
        )}

        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, index) => {
            if (
              !breadcrumb ||
              breadcrumb.breadcrumb.length === 0 ||
              (omitIndexList && omitIndexList.find((value) => value !== index))
            ) {
              return;
            }

            return (
              <Item key={`${breadcrumb.path}-${index}`}>
                <LinkBreadcrumb to={breadcrumb.path} $isActiveItem={index === breadcrumbs.length - 1}>
                  {index === breadcrumbs.length - 1
                    ? convertBreadcrumb(
                        breadcrumb.breadcrumb,
                        labelsToUppercase,
                        replaceCharacterList,
                        transformLastLabel
                      )
                    : convertBreadcrumb(breadcrumb.breadcrumb, labelsToUppercase, replaceCharacterList)}
                </LinkBreadcrumb>
              </Item>
            );
          })}
      </List>
    </Nav>
  );
};

export default memo(Breadcrumbs);
