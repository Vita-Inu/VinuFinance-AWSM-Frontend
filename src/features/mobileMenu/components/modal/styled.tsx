import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const Box = styled.div`
  background-color: #150d1d;
  padding: 4.2rem 8rem 6.3rem;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    padding: 2.4rem 2.4rem;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Close = styled.div`
  padding: 0 1rem;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 3.2rem 0 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
