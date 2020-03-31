import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import PrivateRoute from "../components/private-route"
import Login from "../components/login"
const Profile = () => <h1>Profile</h1>
const Details = () => <h1>Details</h1>
const Default = () => <h1>Default</h1>

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/details" component={Details} />
        <Login path="/login" />
        <PrivateRoute path="/" component={Default} />
      </Router>
    </Layout>
  )
}
export default App
