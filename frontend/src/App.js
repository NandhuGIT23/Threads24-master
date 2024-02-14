import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

import Loading from "./components/Loading";
const Home = lazy(() => import("./components/Home"));

const Events = lazy(() => import("./components/Events"));

const Workshops = lazy(() => import("./components/Workshops"));

const Register = lazy(() => import("./components/Register"));

//workshops
const Webdevelopment = lazy(() => import("./pages/Webdevelopment"));
const CyberSecurity = lazy(() => import("./pages/CyberSecurity"));
const Flutter = lazy(() => import("./pages/Flutter"));
const Uiux = lazy(() => import("./pages/Uiux"));

//events
const Actlikethis= lazy(() => import("./pages/Actlikethis"));
const Captureflag= lazy(() => import("./pages/Captureflag"));
const Codeclash= lazy(() => import("./pages/Codeclash"));
const Codequill= lazy(() => import("./pages/Codequill"));
const Digitaljunction= lazy(() => import("./pages/Digitaljunction"));
const Karaoke= lazy(() => import("./pages/Karaoke"));
const Paperpresentation= lazy(() => import("./pages/Paperpresentation"));
const Picoftheday= lazy(() => import("./pages/Picoftheday"));
const Quizfesta= lazy(() => import("./pages/Quizfesta"));
const Treasurehunt= lazy(() => import("./pages/Treasurehunt"));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Home></Home>
              </Suspense>
            }
          ></Route>

          <Route
            path="/events"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Events></Events>
              </Suspense>
            }
          ></Route>

          <Route
            path="/workshops"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Workshops></Workshops>
              </Suspense>
            }
          ></Route>

          <Route
            path="/register"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Register></Register>
              </Suspense>
            }
          ></Route>
          <Route
            path="/web_dev"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Webdevelopment></Webdevelopment>
              </Suspense>
            }
          ></Route>

          <Route
            path="/Cyber_security"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <CyberSecurity></CyberSecurity>
              </Suspense>
            }
          ></Route>

          <Route
            path="/flutter"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Flutter></Flutter>
              </Suspense>
            }
          ></Route>

          <Route
            path="/uiux"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Uiux></Uiux>
              </Suspense>
            }
          ></Route>

          <Route
            path="/Actlikethis"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Actlikethis></Actlikethis>
              </Suspense>
            }
          ></Route>
          <Route
            path="/Captureflag"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Captureflag></Captureflag>
              </Suspense>
            }
          ></Route>
          <Route
            path="/Codeclash"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Codeclash></Codeclash>
              </Suspense>
            }
          ></Route>
          <Route
            path="/Codequill"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Codequill></Codequill>
              </Suspense>
            }
          ></Route>
          <Route
            path="/Digitaljunction"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Digitaljunction></Digitaljunction>
              </Suspense>
            }
          ></Route>
          <Route
            path="/Karaoke"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Karaoke></Karaoke>
              </Suspense>
            }
          ></Route>
          <Route
            path="/Paperpresentation"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Paperpresentation></Paperpresentation>
              </Suspense>
            }
          ></Route>
          <Route
            path="/Picoftheday"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Picoftheday></Picoftheday>
              </Suspense>
            }
          ></Route>
          <Route
            path="/Quizfesta"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Quizfesta></Quizfesta>
              </Suspense>
            }
          ></Route>
          <Route
            path="/Treasurehunt"
            element={
              <Suspense fallback={<Loading></Loading>}>
                <Treasurehunt></Treasurehunt>
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
