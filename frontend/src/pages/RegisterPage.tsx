import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const RegisterPage = () => {
  return (
    <ContainerSt>
      <h1 className="text-4xl text-center mb-4">Register</h1>
      <div className="text-left">
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
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
