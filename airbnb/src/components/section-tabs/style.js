import styled from "styled-components";


const TabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 180px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    white-space: nowrap;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`

export default TabsWrapper;