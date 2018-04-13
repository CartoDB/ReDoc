import * as React from 'react';
import styled from '../../styled-components';

import { Spinner } from './Spinner.svg';

const LoadingWrapper = styled.div`
  text-align: center;
  width: 100vw;
  height: 100%;
  display: flex;
  padding: 2em 0;
  justify-content: center;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
`;

export interface LoadingProps {
  color: string;
}

export class Loading extends React.PureComponent<LoadingProps> {
  render() {
    return (
      <LoadingWrapper>
        <Spinner color={this.props.color} />
      </LoadingWrapper>
    );
  }
}
