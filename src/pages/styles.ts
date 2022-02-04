import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    > div{
        width: 50%;
    }

    h1{
        color:# 1E255E;
        font-size: 56px;
        font-weight: 700;
    }

    h6{
        font-size: 16px;
        color: rgba(30, 37, 94, 0.7);
        font-weight: 400;
        line-height: 24px;
        max-width: 400px;
        margin-top: 20px;
    }
`

export const ColumnImagem = styled.div`
    text-align: right;
    position: relative;

    img{
        max-width:100%;
        height: auto;
    }
`