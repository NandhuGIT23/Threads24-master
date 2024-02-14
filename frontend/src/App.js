import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

import Loading from "./components/Loading";
// import Home from "./components/Home";
const Home = lazy(() => import("./components/Home"));

// import Events from "./components/Events";
const Events = lazy(() => import("./components/Events"));

// import Workshops from "./components/Workshops";
const Workshops = lazy(() => import("./components/Workshops"));

// import Register from "./components/Register";
const Register = lazy(() => import("./components/Register"));

// import Download from "./components/Download";
const Webdevelopment = lazy(() => import("./components/Webdevelopment"));

// import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Home></Home> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route
            path="/events"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Events></Events>
              </Suspense>
            }
          ></Route>

          <Route path="/workshops" element={
            <Suspense fallback={<Loading></Loading>}>
            <Workshops></Workshops>
          </Suspense>
          }></Route>

          <Route path="/register" element={
            <Suspense fallback={<Loading></Loading>}>
            <Register></Register>
          </Suspense>
          }></Route>

          {/* <Route path="/modal" element={<Modal></Modal>}></Route> */}

          {/* <Route
          path='/download'
          element= {<Download></Download>}
          ></Route> */}
          <Route
            path="/web_dev"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Webdevelopment></Webdevelopment>
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
