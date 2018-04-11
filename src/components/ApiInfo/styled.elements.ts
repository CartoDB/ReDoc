import styled from '../../styled-components';

import { H1, MiddlePanel } from '../../common-elements';

const delimiterWidth = 15;

export const ApiInfoWrap = MiddlePanel;

export const ApiHeader = H1.extend`
  margin-top: 0;
  margin-bottom: 0.5em;
`;

export const DownloadButton = styled.a`
  font: 600 12px/20px 'Montserrat';
  text-transform: uppercase;
  padding: 4px 0;
  display: block;
  text-decoration: none;
`;

export const InfoSpan = styled.span`
  &::before {
    content: '|';
    display: inline-block;
    opacity: 0.5;
    width: ${delimiterWidth}px;
    text-align: center;
  }

  &:last-child::after {
    display: none;
  }
`;

export const InfoSpanBoxWrap = styled.div`
  overflow: hidden;
`;

export const InfoSpanBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888
  margin-left: -${delimiterWidth}px;
`;
