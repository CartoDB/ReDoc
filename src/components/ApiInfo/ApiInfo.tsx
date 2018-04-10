import { observer } from 'mobx-react';
import * as React from 'react';

import { AppStore } from '../../services/AppStore';

import { EmptyDarkRightPanel, MiddlePanel, Row } from '../../common-elements/';
import { Markdown } from '../Markdown/Markdown';
import { SecurityDefs } from '../SecuritySchemes/SecuritySchemes';

import { DownloadButton } from './styled.elements';

interface ApiInfoProps {
  store: AppStore;
}

@observer
export class ApiInfo extends React.Component<ApiInfoProps> {
  render() {
    const { store } = this.props;
    const { info, externalDocs } = store.spec;

    const downloadFilename = info.downloadFileName;
    const downloadLink = info.downloadLink;

    return (
      <Row>
        <MiddlePanel className="api-info">
          <div>
            <Markdown
              source={info.description || ''}
              raw={false}
              components={{
                'security-definitions': {
                  component: SecurityDefs,
                  propsSelector: _store => ({ securitySchemes: _store!.spec.securitySchemes }),
                },
              }}
              store={store}
            />

            {downloadLink && (
              <DownloadButton download={downloadFilename} target="_blank" href={downloadLink}>
                Download OpenAPI specification
              </DownloadButton>
            )}

            {(info.contact && (
              <DownloadButton target="_blank" href={info.contact.url}>
                {info.contact.name}
              </DownloadButton>
            )) ||
              null}

            {(externalDocs && (
              <p>
                <a href={externalDocs.url}>{externalDocs.description || externalDocs.url}</a>
              </p>
            )) ||
              null}
          </div>
        </MiddlePanel>
        <EmptyDarkRightPanel />
      </Row>
    );
  }
}
