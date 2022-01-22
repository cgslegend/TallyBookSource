import {
    HashRouter as Router,
    Routes as Switch,
    Route,
    Link
} from "react-router-dom";
import App from "./App";
 function T2 (){
    return(<Router>
    <div>
        <Switch>
            <Route path="/" element={<App />}>
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

export default  T2 ;


function Money() {
    return (
        <div>
            <h2>Money</h2>
        </div>
    );
}

function Tags() {
    return (
        <div>
            <h2>Tags</h2>
        </div>
    );
}

function Statistics() {
    return (
        <div>
            <h2>Statistics</h2>
        </div>
    );
}
