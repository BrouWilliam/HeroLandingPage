import { ReactNode } from "react"
import * as S from './styles'

type FrontendProps = {
    children: ReactNode
}

const Frontend = ({children}: FrontendProps) => {
    return (<S.Container>Teste Frontend {children}</S.Container>)
}

export default Frontend