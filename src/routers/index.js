import HomePage from '../views/Home'
import renderRoutes from './renderRoutes'
import renderLink from './renderLink'
import CompletePage from '../views/Complete'

const routes = [
  {
    path: '/',
    exact: true,
    title: 'HOME',
    component: HomePage
  },
  {
    path: '/complete',
    exact: true,
    title: 'FINISH',
    // component: React.lazy(() => import('../views/Complete.jsx'))
    component: CompletePage
  }
]

export default routes

export {
  renderRoutes,
  renderLink,
  routes
}