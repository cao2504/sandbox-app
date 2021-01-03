import React from "react"
import "./App.css"
import "@linzjs/lui/dist/lui.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./components/Pages/HomePage"

const App: React.FC = () => {
  return (
    <Router>
      <AllPages />
    </Router>
  )
}

const AllPages: React.FC = () => {
  return <Route exact path="/" component={HomePage} />
}

export default App
