import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "components";
import { HomePage, TweetsPage } from "pages";
import { ROUTES } from "routes";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path={ROUTES.MAIN} element={<HomePage />} />
        <Route path={ROUTES.TWEETS} element={<TweetsPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default App;
