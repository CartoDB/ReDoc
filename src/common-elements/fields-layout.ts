import styled from '../styled-components';
import { transparentizeHex } from '../utils/styled';
import { deprecatedCss } from './mixins';

export const PropertiesTableCaption = styled.caption`
  text-align: right;
  font-size: 0.9em;
  font-weight: normal;
  color: ${props => transparentizeHex(props.theme.colors.text, 0.4)};
`;

export const PropertyCell = styled.td`
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  border: 1px solid ${props => props.theme.schemaView.linesColor};

  tr:first-of-type > &,
  tr.last > & {}

  // Dropdown
  tr.last + tr > & {}

  tr:only-child > & {
    background: none;
  }
`;

export const PropertyCellWithInner = PropertyCell.extend`
  padding: 0;
`;

export const PropertyNameCell = PropertyCell.extend`
  vertical-align: top;
  line-height: 20px;
  white-space: nowrap;
  font-size: 0.929em;
  font-weight: 300;
  font-family: ${props => props.theme.headingsFont.family};

  &.deprecated {
    ${deprecatedCss};
  }
`;

export const PropertyDetailsCell = styled.td`
  padding: 10px;
  width: ${props => props.theme.schemaView.defaultDetailsWidth};
  border: 1px solid ${props => props.theme.schemaView.linesColor};
  box-sizing: border-box;
  vertical-align: top;

  tr.expanded & {
    border-bottom: none;
  }
`;

export const PropertyBullet = styled.span`
  color: ${props => props.theme.colors.highlight};
  font-family: ${props => props.theme.code.fontFamily};
  background-color: rgba(80, 0, 204, 0.05);
`;

export const InnerPropertiesWrap = styled.div`
  padding: 1em;
`;

export const PropertiesTable = styled.table`
  border-collapse: collapse;
  border-radius: 3px;
  margin: 1.5em 0;
  border-spacing: 0;
  width: 100%;

  > tr {
    vertical-align: middle;
  }

  &
    ${InnerPropertiesWrap},
    &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap},
    &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap} {
    margin: 1em 0 1em 1em;
    background: #f0f0f0;
  }

  &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap},
    &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap},
    &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap} {
    background: #ffffff;
  }
`;
