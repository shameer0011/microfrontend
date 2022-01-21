import React, { Fragment, Suspense } from "react";
import ReactDOM from "react-dom";
import PDPContents from "./PDPContents";
import "./index.css";
import SafeComponent from "./SafeComponent";

const Header = React.lazy(() => import("home/Header"))
import Footer from 'home/Footer'////this is same as exposes keyword


import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";

const App = () => (
  <>
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/product/:id" element={<PDPContents />} ></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>

    <div className="container" style={{ marginTop: 0 }}>
      <div>
        <Suspense fallback={<div>Loading</div>}>
          <SafeComponent>
            <Header />
          </SafeComponent>
        </Suspense>
      </div>
      <h3>PDP HOME PAGE</h3>

      <div>
        <Footer />
      </div>

    </div >
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));

