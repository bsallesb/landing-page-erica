import React, { memo } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './List.styles';

interface IListProps {
  name: string;
  link: string;
}

const List: React.FC<IListProps> = ({ name, link }) => {
  return (
    <Wrapper>
      <AnchorLink href={link} offset="100">
        {name}
      </AnchorLink>
    </Wrapper>
  );
};

export default memo(List);
