import React from "react"
import "./App.module.scss"
import "@linzjs/lui/dist/lui.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./components/Pages/HomePage"
import { NavBar } from "./components/Elements/NavBar/NavBar"
import Playground from "./components/Pages/Playground/Playground"

const App: React.FC = () => {
  return (
    <Router>
      <AllPages />
    </Router>
  )
}

const AllPages: React.FC = () => {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/playground" component={Playground} />
    </>
  )
}

export default App
