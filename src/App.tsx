import { Outlet, HashRouter as Router,
    Routes as Switch,
    Route,
    Link } from "react-router-dom";
import styled from "styled-components";

const Wapper = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
flex-grow: 1;
  overflow: auto;
`
const Nav = styled.nav`
border: 1px solid blue;
  >ul{
    display: flex;
    >li{
      width: 33.333%;
      text-align: center;
      padding: 16px;
    }
  }
`
 function List() {
    return (

        <Wapper>
            <Main>
            <Outlet />
            </Main>
            <Nav>
                <ul>
                    <li>
                        <Link to="/tags">标签页</Link>
                    </li>
                    <li>

                        <Link to="/money">记账页</Link>
                    </li>
                    <li>
                        <Link to="/statistics">统计页</Link>
                    </li>
                </ul>
            </Nav>


        </Wapper>

    );
}

export default function App(){
    return(<Router>
        <div>
            <Switch>
                <Route path="/" element={<List />}>
                    <Route path="money" element={<Money />} />
                    <Route path="tags" element={<Tags/>} />
                    <Route path="statistics" element={<Statistics/>} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Switch>
        </div>
    </Router>)
}




function Money() {
    return (
        <div>
            <h2>记账页</h2>
        </div>
    );
}

function Tags() {
    return (
        <div>
            <h2>标签页</h2>
        </div>
    );
}

function Statistics() {
    return (
        <div>
            <h2>统计页</h2>
        </div>
    );
}