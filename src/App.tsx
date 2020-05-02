import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Store } from "redux";
import { History } from "history";
import { IAppState } from "../src/store/index";
import Routes from "../routes/routes";
import Layout from "components/layout/Layout";

interface MainProps {
    store: Store<IAppState>;
    history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Layout>
                    <Routes />
                </Layout>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
