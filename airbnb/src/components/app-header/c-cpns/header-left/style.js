import styled from 'styled-components';

const LeftWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.primaryColor};
    
    .logo {
        display: flex;
        align-items: center;
        margin-left: 24px;
        cursor: pointer;
        img {
            margin-left: 12px;
            width: 162px;
            height: 20px;
        }
    }
`

export default LeftWrapper;