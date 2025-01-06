import { Route, Routes } from "react-router-dom";
import routesConstants from "../constants/routeConstants";
import LayoutContainer from "../layout/LayoutContainer";
import HomeScreen from "../screens/Home/HomeScreen";
import PageNotFound from "../screens/PageNotFound/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routesConstants.ROOT} element={<LayoutContainer />}>
        <Route path={routesConstants.HOME} element={<HomeScreen />} />
      </Route>
      <Route path={routesConstants.PAGE_NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
