import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get(
      "access_token"
    );

    axios
      .get("http://localhost:8010/proxy/user", {
        headers: {
          Authorization: "token " + token,
        },
      })
      .then((res) => {
        setUser(res.data);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);

  return (
    <div className="App text-center container-fluid">
      {!loggedIn ? (
        <div>
          <img
            alt="simple"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            width="150"
          ></img>
          <h1>Sign in with GitHub</h1>
          <a href="https://github.com/login/oauth/authorize?client_id=97f7c4390006237e1758&redirect_uri=http://localhost:8080/oauth/redirect">Sign In</a>
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <p>
            This is a simple integration between OAuth2 on GitHub with Node.js
          </p>

          <img alt="user" src={user.avatar_url}></img>
          <div>{user.name}</div>
          <div>{user.bio}</div>
          <a href={user.html_url}>GitHub Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;