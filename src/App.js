import Navbar from './components/nav/Navbar';
import TodoControl from './components/todo-control/TodoControl';
import TodoHeader from './components/todo-header/TodoHeader';
import { renderRoutes, renderLink ,routes } from './routers'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="todo">
        <TodoHeader title="Daily UI Todo List" subTitle="Practice Design Everyday">
          <Navbar>
            {renderLink({ routes, Wrapper: Navbar.Item })}
          </Navbar>
        </TodoHeader>
        <section className="todo-body">
          {renderRoutes({ routes })}
        </section>
        <TodoControl />
      </div>
    </div>
  );
}

export default App;
