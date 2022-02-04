import { ReactNode } from "react"
import Header from "../../organisms/Header"
import * as S from './styles'

type FrontendProps = {
    children: ReactNode
}

const Frontend = ({children}: FrontendProps) => {
    return <S.Container>
        <Header></Header>
    </S.Container>
}

export default Frontend