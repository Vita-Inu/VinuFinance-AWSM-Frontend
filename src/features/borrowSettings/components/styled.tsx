import { styled } from 'styled-components';
import NextImage from 'next/image';

export const Box = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  z-index: 2;
`;

export const Icon = styled(NextImage)``;

export const Inputs = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8;
`;

export const Buttons = styled.div`
  padding-top: 4rem;
  margin-top: auto;
`;