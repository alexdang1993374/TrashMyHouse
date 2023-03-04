import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useUserContext } from "../userContext";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(false);
  const { user, ready, setUser } = useUserContext();
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  const logout = async () => {
    await axios.post("/logout");
    setRedirect(true);
    setUser(null);
  };

  const linkClasses = (type: string) => {
    let className = "py-2  px-6";

    if (type === subpage) {
      className += " bg-primary text-white rounded-full";
    }
    return className;
  };

  //What to render
  if (!ready) {
    return <div>Loading...</div>;
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={linkClasses("profile")} to={"/account"}>
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My accomodations
        </Link>
      </nav>

      {subpage === "profile" && (
        <div className="max-w-lg mx-auto">
          Logged in as {user?.name} ({user?.email})<br />{" "}
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
