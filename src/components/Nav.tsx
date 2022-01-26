import styled from "styled-components";
import {Link} from "react-router-dom";
import Icon from "./icon";


const NavWapper = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    >li{
      width: 33.333%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width: 24px;
        height: 24px;
      }
    }
  }
  line-height: 24px;
`

const Nav = () =>{
    return(
    <NavWapper>
    <ul>
    <li>
        <Icon name="tags" />
    <Link to="/tags">标签页</Link>
</li>
    <li>
        <Icon name="money" />
        <Link to="/money">记账页</Link>
    </li>
    <li>
        <Icon name="statistics" />
        <Link to="/statistics">统计页</Link>
    </li>
</ul>
</NavWapper>
    )
}
export default Nav;