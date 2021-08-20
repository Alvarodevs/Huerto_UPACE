import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import { Header } from './components/Header';
import { Home } from './views/home';
import { Footer } from './components/Footer';
import { Registration } from "./components/Registration";


export const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>

          
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>

        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );

};

export default Layout;
