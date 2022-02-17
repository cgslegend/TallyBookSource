import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Page = styled.div`
  background: #FF6420;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh);
  flex-direction: column;
  >div{
    font-size: 40px;
    color: #ffffff;
    padding: 16px;
  }
  >a{
    
    font-size: 24px;
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 4px;
    border-radius:10px;
  }
`

const Welcome = () => {

    return (
        <Page>
            <div>个人记账工具</div>
            <NavLink to="/money">开始使用</NavLink>
        </Page>
    )
}
export {Welcome}
