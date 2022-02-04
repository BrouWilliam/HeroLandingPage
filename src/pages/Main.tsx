//import { useState } from 'react'
import ButtonContact from '../atoms/ButtonContact'
import Frontend from '../templates/Frontend'
import * as S from './styles'

import HeaderImage from '../assets/header-image.png'
import CardActivity from '../modecules/CardActivity'

function Main() {
  return ( 
  
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>We are a full service digital agency that builds immesive user experience.</h6>
          <ButtonContact/>
        </div>
        <S.ColumnImagem>
          <CardActivity />

          <img src={HeaderImage} alt="Mulher fazendo uma pesquisa" />
        </S.ColumnImagem>
      </S.Container>
    </Frontend>

  )
}

export default Main
