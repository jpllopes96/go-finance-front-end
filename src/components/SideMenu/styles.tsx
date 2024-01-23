import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.black1};
    position: fixed;

    a{
        position: absolute;
        left: auto;
        top: 25px;
    }

`;

export const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    a{
        position: relative;
    }

`