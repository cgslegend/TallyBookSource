import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Icon from "./Icon";


const NavWrapper = styled.nav`
  background: #ffffff;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    >li{
      width: 33.333%;
      text-align: center;
      
      >a {
        .icon{
          width: 24px;
          height: 24px;
          fill: #4d4d4d;
        }
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.active{
          color:rgb(255,100,32);
          .icon{
            fill: rgb(255,100,32);
          }
        }
      }
    }
  }
  line-height: 24px;
`

const Nav = () =>{
    return(
    <NavWrapper>
    <ul>
    <li>

    <NavLink to="/tags" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><Icon name="tags" />标签页</NavLink>
</li>
    <li>

        <NavLink to="/money"> <Icon name="money" />记账页</NavLink>
    </li>
    <li>

        <NavLink to="/statistics"><Icon name="statistics" />统计页</NavLink>
    </li>
</ul>
</NavWrapper>
    )
}
export default Nav;