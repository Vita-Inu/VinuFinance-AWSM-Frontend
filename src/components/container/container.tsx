import { styled } from 'styled-components';
import { PropsWithChildren } from 'react';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 144rem;
  padding: 0 8rem;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 0 2.4rem;
  }
`;

export const Container = (props: PropsWithChildren) => (
  <StyledContainer {...props} />
);
