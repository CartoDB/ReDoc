import * as React from 'react';
import styled from '../../styled-components';
import { highlight } from '../../utils';

import { SampleControls, SampleControlsWrap } from '../../common-elements';
import { CopyButtonWrapper } from '../../common-elements/CopyButtonWrapper';

const StyledPre = styled.pre`
  font-family: ${props => props.theme.rightPanel.fontFamily};
  font-size: ${props => props.theme.code.fontSize};
  font-weight: 600;
  overflow-x: auto;
  margin: 0;

  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export interface SourceCodeProps {
  source: string;
  lang: string;
}

export class SourceCode extends React.PureComponent<SourceCodeProps> {
  render() {
    const { source, lang } = this.props;
    return <StyledPre dangerouslySetInnerHTML={{ __html: highlight(source, lang) }} />;
  }
}

export class SourceCodeWithCopy extends React.PureComponent<SourceCodeProps> {
  render() {
    return (
      <CopyButtonWrapper data={this.props.source}>
        {({ renderCopyButton }) => (
          <SampleControlsWrap>
            <SourceCode lang={this.props.lang} source={this.props.source} />
            <SampleControls>{renderCopyButton()}</SampleControls>
          </SampleControlsWrap>
        )}
      </CopyButtonWrapper>
    );
  }
}
