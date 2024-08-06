import React, { FC } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

interface MainProps {
  children: React.ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
