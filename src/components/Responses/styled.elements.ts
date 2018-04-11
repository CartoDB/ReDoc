import styled from '../../styled-components';

import { H5 } from '../../common-elements';
import { transparentizeHex } from '../../utils';
import { ResponseTitle } from './ResponseTitle';

export const StyledResponseTitle = styled(ResponseTitle)`
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 12px;
  line-height: 1.5em;
  background-color: #f2f2f2;
  cursor: pointer;
  display: block;
  color: ${props => props.theme.colors[props.type]};
  background-color: ${props => transparentizeHex(props.theme.colors[props.type], 0.08)};

  ${props =>
    (props.empty && `
      cursor: default;
      &::before {
        content: "—";
        font-weight: bold;
        width: 1.5em;
        text-align: center;
        display: inline-block;
      }
      `) || ''};`
;

export const ResponseDetailsWrap = styled.div`
  padding: 10px;
`;

export const HeadersCaption = H5.withComponent('caption').extend`
  text-align: left;
  margin-top: 1em;
`;
