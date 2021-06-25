import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContexts'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/rooms/new" exact component={NewRoom}></Route>
          <Route path="/rooms/:id" component={Room}></Route>

          <Route path="/admin/rooms/:id" component={AdminRoom}></Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;