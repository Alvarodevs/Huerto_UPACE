import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import { Header } from './components/header&footer/Header';
import { Home } from './views/home';
import { Footer } from './components/header&footer/Footer';
import { RegisterForm } from "./components/header&footer/RegisterForm";

//Categories
import { EcoFood } from './views/ecofood'
import { Flowers } from './views/flowers'
import { Pots } from './views/pots'
import { Others } from './views/others'


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
            <RegisterForm />
          </Route>
          
          {/* ---- URLS PARA PRODUCTOS -----*/}
          
          <Route exact path="/verdurasyfrutas">
            <EcoFood />
          </Route> 
          
          <Route exact path="/flores">
            <Flowers />
          </Route> 

          <Route exact path="/macetas">
            <Pots />
          </Route> 

          <Route exact path="/otros">
            <Others />
          </Route> 
          

        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );

};

export default Layout;
