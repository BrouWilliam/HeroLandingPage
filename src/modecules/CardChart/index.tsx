import * as S from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowRight from '../../assets/arrow-right.svg'
import { useCallback } from 'react'

const CardChart = () => {
    const amountBars = Array.from(Array(12).keys())

    const fillZero = useCallback((value: number) =>{
        const number = (value +1).toString()
        return number.padStart(2,'0')
    }, [])

    return(
        <S.Container>
            <div>
                <img src={ArrowLeft} alt="" />
                <strong>Stats</strong>
                <img src={ArrowRight} alt="" />
            </div>

            <S.Chart>
                {amountBars.map(item => 
                    <div key={String(item)}>
                        <div>
                            <span></span>
                        </div>
                        <small>{fillZero(item)}</small>
                    </div>
                )}
            </S.Chart>
        </S.Container>
    )
}

export default CardChart