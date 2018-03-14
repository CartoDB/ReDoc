import styled, { css } from '../styled-components';

const headerFontSize = {
  1: '32px',
  2: '20px',
  3: '16px',
  5: '12px',
};

export const headerCommonMixin = level => css`
  font-family: ${props => props.theme.headingsFont.family};
  font-weight: 600;
  font-size: ${headerFontSize[level]};
`;

export const H1 = styled.h1`
  ${headerCommonMixin(1)};
  color: ${props => props.theme.colors.main};
  text-transform: capitalize;
`;

export const H2 = styled.h2`
  ${headerCommonMixin(2)};
  color: ${props => props.theme.colors.main};
`;

export const H3 = styled.h2`
  ${headerCommonMixin(3)};
  color: ${props => props.theme.colors.main};
`;

export const H5 = styled.h5`
  ${headerCommonMixin(5)};
  margin: 0;
  color: ${props => props.theme.colors.main};
  text-transform: uppercase;
  line-height: 20px;
`;
