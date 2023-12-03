import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WritePost from "./pages/WritePost";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();

  const addUser = (userData) => {
    setUsers([
      ...users,
      {
        ...userData,
        email: userData.email.toLowerCase(),
      },
    ]);
  };

  const loginUser = ({ email, password }) => {
    const user = users.find(
      (u) => u.email === email.toLowerCase() && u.password === password
    );
    if (user) {
      setLoggedInUser(user);
      alert("login successful");
    } else {
      setLoggedInUser();
      alert("email or password incorrect");
    }
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };

  console.log("Users", users);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout logoutUser={logoutUser} loggedInUser={loggedInUser} />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register addUser={addUser} />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/write-post" element={<WritePost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
