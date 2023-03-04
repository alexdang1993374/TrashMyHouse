import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useUserContext } from "../userContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useUserContext();

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", { email, password });
      if (res.data === "email not found") {
        alert("Incorrect Email");
      } else if (res.data === "incorrect password") {
        alert("Incorrect Password");
      } else {
        setUser(res.data);
        alert("Login successful");
        setRedirect(true);
      }
    } catch (e) {
      alert("Login failed");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <ContainerSt>
      <h1 className="text-4xl text-center mb-4">Login</h1>
      <div className="text-left">
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link className="underline text-black" to={"/register"}>
              Register now
            </Link>{" "}
          </div>
        </form>
      </div>
    </ContainerSt>
  );
};

export default LoginPage;

const ContainerSt = tw.div`
    mb-64
    grow
    flex
    items-center
    flex-col
    justify-center

`;
