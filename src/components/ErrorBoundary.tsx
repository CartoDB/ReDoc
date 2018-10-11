import * as React from 'react';
import styled from '../styled-components';

const ErrorWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

export class ErrorBoundary extends React.Component<{}, { error?: Error }> {
  constructor(props) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error) {
    this.setState({ error });
    return false;
  }

  render() {
    if (this.state.error) {
      console.error(this.state.error.message);
      return (
        <ErrorWrapper>
          <h1>We could not load the documentation. Check the console for more details.</h1>
        </ErrorWrapper>
      );
    }
    return React.Children.only(this.props.children);
  }
}
