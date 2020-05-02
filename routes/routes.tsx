import * as React from "react";
import { Route, Switch } from "react-router-dom";

const Routes: React.SFC = () => (
    <>
        <Switch>
            <Route component={() => <div>Not Found</div>} />
        </Switch>
    </>
);

export default Routes;
