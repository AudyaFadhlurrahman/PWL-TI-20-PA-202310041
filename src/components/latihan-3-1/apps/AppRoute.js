import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../modules/Homes/Homes";
import Explore from "../modules/Explore/Explore";
import Messages from "../modules/Messages/Messages";
import Feeds from "../modules/Explore/widgets/Feeds";
import Reels from "../modules/Explore/widgets/Reels";
import FYP from "../modules/Explore/widgets/FYP";
import Profiles from "../modules/Profiles/Profiles";
import NotFound from "../layouts/components/notFounds/notFound";
import Login from "../modules/Login/Login";

export default function AppRoute() {
  const routes = [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/explore",
      component: Explore,
      children: [
        { path: "feeds", component: Feeds },
        { path: "reels", component: Reels },
        { path: "fyp", component: FYP },
      ],
    },
    {
      path: "/messages",
      component: Messages,
    },
    {
      path: "/profile",
      component: Profiles,
    },
  ];

  return (
    <Routes>
      <Route
        index
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      {routes.map((e, index) =>
        e.children ? (
          <Route
            path={e.path}
            element={
              <Layout>
                <e.component />
              </Layout>
            }
            key={index}
          >
            {e.children.map((c, index) => (
              <Route path={c.path} element={<c.component />} key={index} />
            ))}
          </Route>
        ) : (
          <Route
            path={e.path}
            element={
              <Layout>
                <e.component />
              </Layout>
            }
            key={index}
          />
        )
      )}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
