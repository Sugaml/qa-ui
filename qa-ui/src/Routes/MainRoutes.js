import { Routes, Route } from "react-router-dom"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Account from "../Pages/Account/Account"

function MainRouter() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Dashboard/> } />
        <Route exact path="/account" element={ <Account/> } />
      </Routes>
    </div>
  )
}

export default MainRouter
