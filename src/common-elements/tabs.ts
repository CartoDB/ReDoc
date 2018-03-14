import { Tabs as ReactTabs } from 'react-tabs';
import styled from '../styled-components';

export { Tab, TabList, TabPanel } from 'react-tabs';

export const Tabs = styled(ReactTabs)`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;

    > li {
      padding: 5px 10px;
      display: inline-block;
      flex: 1;

      font-family: ${props => props.theme.headingsFont.family};
      text-transform: uppercase;
      font-weight: 600;
      font-size: 12px;
      color: #747d82;

      cursor: pointer;
      text-align: center;
      outline: none;
      color: #ccc;

      &.react-tabs__tab--selected {
        color: #fff;
      }

      &:only-child {
        flex: none;
        min-width: 100px;
      }

      // &.tab-success {
      //   color: ${props => props.theme.colors.success};
      // }

      // &.tab-redirect {
      //   color: ${props => props.theme.colors.redirect};
      // }

      // &.tab-info {
      //   color: ${props => props.theme.colors.info};
      // }

      // &.tab-error {
      //   color: ${props => props.theme.colors.error};
      // }
    }
  }
  > .react-tabs__tab-panel {
    border-top: 1px solid rgba(255, 255, 255, 0.15);

    & > div,
    & > pre {
      padding: 20px 0;
      margin: 0;
    }
  }
`;

export const SmallTabs = styled(Tabs)`
  > ul {
    display: block;
    > li {
      padding: 0;
      margin-right: 20px;
      font-size: 12px;
      padding: 2px 0;
      border-bottom: 1px dashed;
      color: #787b7d;
      backgrond: none;

      &:last-child {
        margin-right: 0;
      }

      &.react-tabs__tab--selected {
        backgrond: none;
        color: #babcbf;
      }
    }
  }
  > .react-tabs__tab-panel {
    border-top: 1px solid rgba(255, 255, 255, 0.15);

    & > div,
    & > pre {
      padding: 10px 0;
      margin: 0;
    }
  }
`;
