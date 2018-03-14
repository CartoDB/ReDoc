import styled, { media } from '../styled-components';

export const MiddlePanel = styled.div`
  width: ${props => props.theme.middlePanel.width}px;
  padding: 0 ${props => props.theme.spacingUnit * 2}px;

  &.api-info {
    padding: ${props => props.theme.spacingUnit * 2}px ${props => props.theme.spacingUnit * 2}px 0;
  }

  ${media.lessThan('medium')`
    width: 100%;
  `};
`;

export const RightPanel = styled.div`
  width: ${props => `calc(100% - ${props.theme.middlePanel.width}px)`};
  color: #fafbfc;
  bckground-color: ${props => props.theme.rightPanel.backgroundColor};
  padding: ${props => props.theme.spacingUnit * 2}px;

  ${media.lessThan('medium')`
    width: 100%;
  `};
`;

export const DarkRightPanel = styled(RightPanel)`
  background-color: ${props => props.theme.rightPanel.backgroundColor};
`;

export const EmptyDarkRightPanel = styled(DarkRightPanel)`
  ${media.lessThan('medium')`
    padding: 0
  `};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;

  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`;
