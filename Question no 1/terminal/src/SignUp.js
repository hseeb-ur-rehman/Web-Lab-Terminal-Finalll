import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState(null);

  const submitHandler = (e) => {
    const sendReq = async () => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user,
          password: password,
        }),
      });
      const data = await response.json();

      setToken(data.token);
      localStorage.setItem("token", data.token);
      console.log(data);
    };
    sendReq();
    e.preventDefault();
  };
  return (
    <>
      <div>
        <h2>
            <h1>Some Username and Password are:</h1>
        <ul>
          <li>"username":"yraigatt3","password":"sRQxjPfdS"</li>
          <li>"username":"kmeus4","password":"aUTdmmmbH"</li>
          <li>"username":"jtreleven5","password":"zY1nE46Zm"</li>
        </ul>
        </h2>
      </div>
      <form method="post" onSubmit={submitHandler}>
        <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Sign Up</button>
      </form>
      {token && <div style={{background:"black", color: "white", margin: "30px"}}>Token is : {token}</div>}
    </>
  );
};

export default SignUp;