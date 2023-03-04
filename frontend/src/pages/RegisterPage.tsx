import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e: any) => {
    e.preventDefault();
    axios.get("http://localhost:4000/test");
  };

  return (
    <ContainerSt>
      <h1 className="text-4xl text-center mb-4">Register</h1>
      <div className="text-left">
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>{" "}
          </div>
        </form>
      </div>
    </ContainerSt>
  );
};

export default RegisterPage;

const ContainerSt = tw.div`
    mb-64
    grow
    flex
    items-center
    flex-col
    justify-center

`;
