import * as React from 'react';
import { ResponseModel } from '../../services/models';
import { ResponseView } from './Response';
import { H5 } from '../../common-elements/headers';

const ResponsesHeader = H5.extend`
  margin-bottom: 15px;
`;

export interface ResponseListProps {
  responses: ResponseModel[];
}

export class ResponsesList extends React.PureComponent<ResponseListProps> {
  render() {
    const { responses } = this.props;

    if (!responses || responses.length === 0) {
      return null;
    }

    return (
      <div>
        <ResponsesHeader> Responses </ResponsesHeader>
        {responses.map(response => {
          return <ResponseView key={response.code} response={response} />;
        })}
      </div>
    );
  }
}
