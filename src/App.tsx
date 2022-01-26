import { Outlet, HashRouter as Router,
    Routes as Switch,
    Route,
    Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wapper = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
flex-grow: 1;
  overflow: auto;
`

 function List() {
    return (

        <Wapper>
            <Main>
            <Outlet />
            </Main>
            <Nav />

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