import { Outlet, HashRouter as Router,
    Routes as Switch,
    Route} from "react-router-dom";

import Tags from "./view/Tags";
import Money from "./view/Money";
import Statistics from "./view/Statistics";
import styled from "styled-components";
import {TagEditor} from "./view/TagEditor";

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
                    <Route path="tags" element={<Tags/>}/>
                    <Route path="tags/*" element={<TagEditor/>}/>
                    <Route path="statistics" element={<Statistics/>} />
                    <Route path="money" element={<Money />} />
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
