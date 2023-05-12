import "./App.css";
import app from "./firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };
  return (
    <div className="App">
      {user.email ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google sign in</button>
      )}

      <h2>Name: {user.displayName}</h2>
      <p>I know your email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
