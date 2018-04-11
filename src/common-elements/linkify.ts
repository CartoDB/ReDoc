import styled, { css } from 'styled-components';

// tslint:disable-next-line
export const linkifyMixin = className => css`
  ${className} {
    cursor: pointer;
    margin-left: 20px;
    padding: 0;
    line-height: 1;
    width: 20px;
    display: inline-block;
    color: blue;
  }
`;

export const ShareLink = styled.a`
  ${linkifyMixin('&')};
`;
