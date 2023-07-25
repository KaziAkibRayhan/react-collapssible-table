import TraderTable from "components/Table/TraderTable";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "redux/store";
const Auth = React.lazy(() => import("pages/auth/Auth"));
const About = React.lazy(() => import("pages/About"));
const Dashboard = React.lazy(() => import("pages/protected/Dashboard"));
const Loader = React.lazy(() => import("components/loader/Loader"));
const NotFound = React.lazy(() => import("pages/NotFound"));
const AuthLayout = React.lazy(() => import("layouts/AuthLayout"));
const ProtectedLayout = React.lazy(() => import("layouts/ProtectedLayout"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<AuthLayout />}>
                {/* Auth route start from here. */}
                <Route path="/auth" element={<Auth />} />
                {/* Auth route end here. */}
              </Route>
              <Route element={<ProtectedLayout />}>
                {/* Protected route start from here. */}
                <Route path="/" element={<Dashboard />} />
                {/* Protected route end here. */}
              </Route>
              {/* Other route start here. */}
              <Route path="/about" element={<About />} />
              <Route path="/table" element={<TraderTable />} />
              {/* Other route end here. */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.Suspense>
    </div>
  );
}

export default App;
