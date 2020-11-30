import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  useEffect(() => {
    Notification.requestPermission(function (status) {
      console.log("Notification permission status:", status);
    });
  }, []);

  return (
    <Switch>
      <Route path="/posts/:id" component={PostPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
