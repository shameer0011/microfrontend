import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { useEffect } from 'react'
import Header from './Header';
import Footer from './Footer'
import HomeContent from './homeContent';
import { Provider } from "react-redux";
import configureStore from "../src/redux/store/storeConfigure";
import { getAllUTasks } from "./apis/nodejs/task";
const App = () => {

  const store = configureStore();
  // console.log(store.getState(), "storeeee")

  useEffect(async () => {
    store.subscribe(() => {
      const state = store.getState();
      // console.log(state.breadcumbReducer, "storeeeeee state")
    });
    const users = await getAllUTasks();
    console.log(users, "userssss")
    getAllTask()
  }, [])
  const getAllTask = async () => {
    const users = await getAllUTasks();
    console.log(users, "userssss")

  }
  return (
    <>
      <Provider store={store}>
        <div className="container" style={{ marginTop: 0 }}>
          <div>
            <Header app={{ name: "THIS IS HEADER SECTION" }} />
          </div>
          <div><HomeContent /></div>
          <div>
            <Footer />
          </div>
        </div>
      </Provider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
