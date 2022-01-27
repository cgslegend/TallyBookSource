import { Outlet, HashRouter as Router,
    Routes as Switch,
    Route} from "react-router-dom";

import Tags from "./view/tags";
import Money from "./view/money";
import Statistics from "./view/statistics";


 function List() {
    return (

        <div>

            <Outlet/>

        </div>

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
