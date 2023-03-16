import styled from "styled-components";


const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 28px;
    .ant-select-selector, .ant-pagination-options {
        display: none;
    }
    .ant-pagination-item-active {
        background-color: ${props => props.theme.color.primaryColor};
        border-color: ${props => props.theme.color.primaryColor};
    }

    .ant-pagination-item-active a {
        color: #fff;
        &:hover {
            background-color: ${props => props.theme.color.secondaryColor};
            color: #fff;
            border-color: ${props => props.theme.color.secondaryColor};
        }
    }
`

export default PaginationWrapper;