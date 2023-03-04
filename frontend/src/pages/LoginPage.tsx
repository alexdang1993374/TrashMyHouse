import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const LoginPage = () => {
  return (
    <ContainerSt>
      <h1 className="text-4xl text-center mb-4">Login</h1>
      <div className="text-left">
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
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
