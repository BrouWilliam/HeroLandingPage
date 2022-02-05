import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 12px;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    left: 30px;
    padding: 20px;
    opacity: 0;
    bottom: -50px;
    animation: showOnPage 0.5s linear forwards;

    > div{
        display: flex;
        justify-content: space-between;
        align-items: center

    }

    @keyframes showOnPage{
        from{
            opacity: 0;
        }

        to{
            opacity: 1;
            bottom: 0;
        }
    }
`

function generateBars(){
    const amountBars = [...Array(12).keys()]
    let styleSpan: any = [];

    amountBars.forEach(item => {
        styleSpan.push( `
            div:nth-child(${ item + 1 }){
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                div{
                    background-color: #EFF3FE;
                    height: 91px;
                    width: 2.1px;
                    border-radius: 5px;
                    display: flex;
                    justify-content: flex-end;

                    span{
                        background-color: #5236FF;
                        display:block;
                        height: 0px;
                        animation: animationheight 1s linear forwards;
                        max-height: ${(Math.ceil(Math.random() * 100))}px;
                        width: 3.5px;
                        border-radius: 5px;
                    }
                }
                small{
                    color: #BACCFD;
                    font-size: 10px;
                    margin-top: 10px;
                }
            }
        `)
    })

    return styleSpan.join('')
    
}

export const Chart = styled.div`
    margin-top: 28px;
    

    ${generateBars()}

    @keyframes animationheight{
        from{
            height: 0px;
        }

        to{
            height: 91px;
            
        }
    }



`