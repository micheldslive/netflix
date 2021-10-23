import { useState, useRef } from "react";
import { Switch, useLocation, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { HelmetProvider } from "react-helmet-async";
import Header from "components/header";
import Profiles from "pages/profiles";
import Browse from "pages/browse";
import NotFound from "pages/404";

const Routes = () => {
  const [user, setUser] = useState<number>(0),
        [preload, setPreload] = useState<number>(-1),
        [scroll, setScroll] = useState<boolean>(false),
        location = useLocation(),
        nodeRef = useRef(null);

  const listenScrollEvent = (e: any) => {
    let currentScroll = e.scrollHeight - e.scrollTop;
    setScroll(currentScroll < 1400);
  };

  return (
    <>
      <Header user={user} setUser={setUser} preload={preload} setPreload={setPreload} scroll={scroll} />
      <TransitionGroup>
        <CSSTransition key={location.key} nodeRef={nodeRef} classNames="scale" timeout={500}>
          <div className="main-container" ref={nodeRef} onScroll={(e)=> listenScrollEvent(e.target)}>
            <HelmetProvider>
              <Switch location={location}>
                <Route exact path="/">
                  {user === 0 && preload === -1 ? <Redirect to="/profiles" /> : <Redirect to="/browse" /> }
                </Route>
                <Route path="/profiles" render={(props) => <Profiles user={user} setUser={setUser} {...props} /> }>
                  {user !== 0 && preload !== -1 ? <Redirect to="/browse" /> : "" }
                </Route>
                <Route  path="/browse" render={(props) => <Browse user={user} preload={preload} setPreload={setPreload} {...props} /> }>
                  {user === 0 && preload === -1 ? <Redirect to="/profiles" /> : "" }
                </Route>
                <Route render={(props) => <NotFound setUser={setUser} setPreload={setPreload} {...props} /> } />
              </Switch>
            </HelmetProvider>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Routes;
