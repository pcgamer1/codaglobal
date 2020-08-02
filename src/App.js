import React, { lazy, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import "./App.css"

import Spinner from "./components/spinner/spinner.component"

const HomePage = lazy(() => import("./components/HomePage"))
const Details = lazy(() => import("./components/Details"))

function App() {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/details' component={Details} />
      </Suspense>
    </Switch>
  )
}

export default App
