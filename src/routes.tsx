import React, { useRef } from "react";
import { ReduxType } from "reducer/types";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "reducer/maps";
import { Switch, useLocation, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { HelmetProvider } from "react-helmet-async";
import Header from "components/header";
import Profiles from "pages/profiles";
import Browse from "pages/browse";
import NotFound from "pages/404";

const Routes: React.FC<ReduxType> = ({ state }) => {

  const { user, preload } = state;

  const location = useLocation(),
        nodeRef = useRef(null);

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} nodeRef={nodeRef} classNames="scale" timeout={500}>
          <div className="main-container" ref={nodeRef}>
            <HelmetProvider>
              <Switch location={location}>
                <Route exact path="/">
                  {user === 0 && preload === -1 ? <Redirect to="/profiles" /> : <Redirect to="/browse" /> }
                </Route>
                <Route path="/profiles" render={() => <Profiles /> }>
                  {user !== 0 && preload !== -1 ? <Redirect to="/browse" /> : "" }
                </Route>
                <Route  path="/browse" render={() => <Browse /> }>
                  {user === 0 && preload === -1 ? <Redirect to="/profiles" /> : "" }
                </Route>
                <Route render={() => <NotFound /> } />
              </Switch>
            </HelmetProvider>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
