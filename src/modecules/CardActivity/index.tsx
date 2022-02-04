import * as S from './styles'
import ArrowUp from '../../assets/up.svg'

const CardActivity = () => (
    <S.Container>
        <small>Activity</small>
        <div>
            <span>18</span> 
            <img src={ArrowUp} alt="" />
        </div>
        
        <i className="circle1"></i>
        <i className="circle2"></i>
        <i className="circle3"></i>
        
    </S.Container>
)

export default CardActivity