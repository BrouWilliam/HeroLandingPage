import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    left: 0px;
    background: linear-gradient(135deg, #EE9AE5 0%, #5961F9 100%);
    color: #FFF;
    width: 154px;
    border-radius: 12px;
    text-align: left;
    padding: 12px;
    overflow: hidden;
    opacity: 0;
    top: 50px;
    animation: showOnPageCard 0.5s linear forwards;

    small{
        font-size: 14px;
    }

    div{
        margin-top: 10px;
        

        span{
            font-weight: 500;
            font-size: 18px;
            margin-right: 6px;
        }
    }

    i{
        width: 154px;
        height: 77px;
        position: absolute;
        border-radius: 100px;

        &.circle1{
            left: 105px;
            top: -10px;
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
            z-index: 1;
        }
        &.circle2{
            bottom: -50px;
            left: 80px;
            background: linear-gradient(0deg, #DAAAFF, #DAAAFF);
            transform: rotate(45deg);
        }
        &.circle3{
            background: rgba(255, 255, 255, 0.3);
            transform: rotate(-72.7deg);
            border: solid 1px #FFF;
            top: -56px;
            left: 42px;
            opacity: 0.3;
        }
    }

    @keyframes showOnPageCard{
        from{
            opacity: 0;
        }

        to{
            opacity: 1;
            top: 105px;
        }
    }
`