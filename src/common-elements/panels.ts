import styled, { media } from '../styled-components';

export const MiddlePanel = styled.div`
  width: ${props => props.theme.middlePanel.width};
  padding: 32px;
  position: relative;

  h1 {
    line-height: 48px;
  }

  ul,
  ol h1 {
    font-size: 18px;
    margin-top: 16px;
  }

  p {
    margin: 16px 0;
  }

  > div,
  > table {
    tr > td:last-of-type{
      padding-left: .5em;
    }

    margin-bottom: 30px;
  }

  ${media.lessThan('medium')`
    width: 100%;
  `};

  &:after {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: calc(100% - 20px);
    display: block;
    content: '';
    border-bottom: 1px solid #eeeeee;
    transform: translateX(-50%);
  }
`;

export const RightPanel = styled.div`
  width: ${props => `calc(100% - ${props.theme.middlePanel.width})`};
  color: #fafbfc;
  background-color: ${props => props.theme.rightPanel.backgroundColor};
  padding: ${props => props.theme.spacingUnit * 2}px;
  position: relative;
  font-family: ${props => props.theme.rightPanel.fontFamily};

  ${media.lessThan('medium')`
    width: 100%;
  `};

  &:after {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: calc(100% - 20px);
    display: block;
    content: '';
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    transform: translateX(-50%);
  }
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
