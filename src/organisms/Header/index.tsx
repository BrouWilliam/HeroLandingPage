import * as S from './styles'

import Logo from '../../modecules/Logo'
import Menu from '../Menu/index'
import Button from '../../atoms/Button'

const Header = () => {
    return (
        <S.Box>
            <Logo />
            <Menu />
            <Button />
        </S.Box>
    )
}

export default Header