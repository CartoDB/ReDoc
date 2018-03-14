import styled from '../styled-components';

export const SampleControls = styled.div`
  font-family: ${props => props.theme.headingsFont.family};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  color: #747d82;
  text-align: right;

  &:hover {
    color: #909ba0;
  }

  > span {
    display: inline-block;
    padding: 2px 0;
    cursor: pointer;
  }
`;

export const SampleControlsWrap = styled.div`
  &:hover ${SampleControls} {
    opacity: 1;
  }
`;
