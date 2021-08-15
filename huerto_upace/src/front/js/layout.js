import { Header } from './components/Header';
import { Home } from './views/home';



export const Layout = () => {
  return (
    <>
      <Header/>
      <Home/>
        {/* <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/weekjumbotron">
          <WeekJumbo />
        </Route>

        <Route exact path="/recipe_detail_jumbo">
          <RecipeDetail />
        </Route>

        <Route exact path="/userprofile">
          <Userprofile />
        </Route>

        <Route exact path="/new_week">
          <NewWeek />
        </Route>

        <Route exact path="/weeks">
          <AllWeeks />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

			<Footer /> */}
		</>
	);

};

export default Layout;
