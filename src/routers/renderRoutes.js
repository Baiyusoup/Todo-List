import { Route, Switch } from 'react-router-dom'

function renderRoutes(params) {
  const { SwitchProps, routes } = params
  return (
    <Switch {...SwitchProps}>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={!!route.exact}
        />
      ))}
    </Switch>
  )
}

export default renderRoutes