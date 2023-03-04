import tw from "tailwind-styled-components";

const LoginPage = () => {
  return (
    <ContainerSt>
      <h1 className="text-4xl mb-2">Login</h1>
      <div className="text-left">
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
        </form>
      </div>
    </ContainerSt>
  );
};

export default LoginPage;

const ContainerSt = tw.div`
    mt-4
`;
