import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import FormPersonalData from "./components/tugas1/FormPersonalData";
import Widget1 from "./components/tugas2/Widget1";
import FormPersonalDataMultiple from "./components/tugas2/FormPersonalDataMultiple";
import Layout from "./components/latihan-3-1/layouts/Layout";
import Homes from "./components/latihan-3-1/modules/Homes/Homes";
// import AppRoute from "./components/latihan-3-1/apps/AppRoute";
import AppRoute from "./components/tugas4/apps/routes/AppRoute";
import { BrowserRouter } from "react-router-dom";

const { PUBLIC_URL } = process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <FormPersonalData />
    <Widget1 />
    <FormPersonalDataMultiple /> */}
    {/* <Layout>
      <Homes />
    </Layout> */}

    <BrowserRouter basename={PUBLIC_URL}>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
