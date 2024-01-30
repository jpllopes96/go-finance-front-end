import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    body{
        background-color: ${(props) => props.theme.colors.black2};
        color: ${(props) => props.theme.colors.white};
    }
    button{
        background-color: ${props => props.theme.colors.primary};
        padding: 16px;
        border-radius: 8px;
        font-size: 25px;
        font-weight: bold;
        color: ${props => props.theme.colors.white};
        cursor: pointer;
        border-width: 0;
        transition: all 1;

        &:hover{
            background-color: ${props => props.theme.colors.secondary};
        }
    }

    input{
        border: none;
        min-height: 27px;
        background-color: ${props => props.theme.colors.black3};
        border-radius: 4px;
        color: ${props => props.theme.colors.white};
        padding-left: 16px;
        padding-top: 8px;
        padding-bottom: 8px;

        ::-webkit-input-placeholder{
            color:#4b4747;
            font-size: 12px;
            font-weight: 500;
        }
    }


`;