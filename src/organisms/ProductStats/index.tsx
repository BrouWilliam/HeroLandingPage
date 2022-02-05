import CardActivity from '../../modecules/CardActivity'
import HeaderImage from '../../assets/header-image.png'

import * as S from './styles'


const ProductStats = () =>{
    return(
        <S.Container>
          <CardActivity />

          <img src={HeaderImage} alt="Mulher fazendo uma pesquisa" />
        </S.Container>
    )
}

export default ProductStats