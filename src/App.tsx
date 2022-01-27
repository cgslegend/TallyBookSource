import { Outlet, HashRouter as Router,
    Routes as Switch,
    Route} from "react-router-dom";

import Tags from "./view/tags";
import Money from "./view/money";
import Statistics from "./view/statistics";
import styled from "styled-components";

const Wrapper = styled.div`
background: #f5f5f5;
`

 function List() {
    return (

        <Wrapper>

            <Outlet/>

        </Wrapper>

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
