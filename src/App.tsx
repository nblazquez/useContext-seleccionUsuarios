import "./App.css";
import Profile from "./components/Profile";
import UserList from "./components/UserList";
import { UserState } from "./context/User/UserState";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <UserState>
        <div className="container p-4">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-7">
            <Profile />
          </div>
        </div>
      </UserState>
    </>
  );
}

export default App;
