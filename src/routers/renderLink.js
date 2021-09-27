import { Link } from 'react-router-dom'

function renderLink(props) {
  const { routes, Wrapper } = props
  return (
    <>
      {routes.map((route, index) => (
        <Wrapper
          key={index}
          render={() => (
            <Link to={route.path}>{route.title}</Link>
          )}
        />
      ))}
    </>
  )
}

export default renderLink

