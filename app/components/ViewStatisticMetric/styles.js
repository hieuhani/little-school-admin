import styled from 'styled-components';

const Wrapper = styled.div`
`;

const ChartWrapper = styled.div`
  float: left;
  background-color: ${(props) => props.color}
`;

const Chart = styled.div`
  padding: 16px 12px 9px 12px;
`;
const Counter = styled.div`
  background-color: ${(props) => props.color}
  overflow: hidden;
  color: rgba(255, 255, 255, 0.9);
  padding: 16px 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  small {
    margin-bottom: 2px;
    display: block;
  }
  h2 {
    margin: 0;
    line-height: 100%;
    font-size: 22px;
    font-weight: 300;
    color: #fff;
  }
`;

export {
  Wrapper,
  Chart,
  Counter,
  ChartWrapper,
};
