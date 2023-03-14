import styled from "styled-components";

const ItemWrapper = styled.div`
  margin-bottom: 20px;
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;
  border-radius: 10px;
  ${props => props.theme.mixin.boxShadow}
  &:hover {
    cursor: pointer;
  }

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }

  .name {
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .css-dev-only-do-not-override-ph9edi {
      margin-right: 5px;
      margin-bottom: 2px;
      font-size: 12px;
      color: ${props => props.theme.color.secondaryColor};
    }

    .ant-rate-star {
      margin-right: 2px;
    }
  }
`

export default ItemWrapper;