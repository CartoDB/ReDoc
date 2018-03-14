import styled from '../../styled-components';

import { H1, MiddlePanel } from '../../common-elements';

const delimiterWidth = 15;

export const ApiInfoWrap = MiddlePanel;

export const ApiHeader = H1.extend`
  margin-top: 0;
  margin-bottom: 0.5em;
`;

export const DownloadButton = styled.a`
  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%227%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3Cpath%20d%3D%22M1.536%207H8v1H1.711l1.975%201.975c.2.2.194.51-.001.705a.504.504%200%200%201-.706.002L.147%207.85a.492.492%200%200%201-.14-.437.492.492%200%200%201%20.14-.438L2.98%204.143a.504.504%200%200%201%20.706.002.494.494%200%200%201%20.001.705L1.536%207z%22%20id%3D%22a%22/%3E%0A%20%20%3C/defs%3E%0A%20%20%3Cuse%20fill%3D%22%231FAC06%22%20transform%3D%22matrix%28-1%200%200%201%208%20-4%29%22%20xlink%3Ahref%3D%22%23a%22%20fill-rule%3D%22evenodd%22/%3E%0A%3C/svg%3E);
  background-repeat: no-repeat;
  background-position: center left;
  font: 600 12px/20px 'Montserrat';
  text-transform: uppercase;
  padding: 4px 8px 4px 12px;
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
