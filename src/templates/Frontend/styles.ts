import styled, { StyledComponent } from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;

    main{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`