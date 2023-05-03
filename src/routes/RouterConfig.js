export const RouterConfig = () => {
    return (
        <Switch>
            <Route exact path={ROOT} component={Home}/>
            <Route exact path={DASHBOARD} component={Dashboard}/>
            {/* all auth protected routes */}
            <PrivateRoute path={PAGE1}>
            <Page1/>
            </PrivateRoute>
            <PrivateRoute path={PAGE2}>
            <Page2/>
            </PrivateRoute>
            {/* 404 page not found will redirect to HomeScreen */}
            <Route path="*">
            <Notfound/>
            </Route>
            
        </Switch>
    );
};
export default RouterConfig;