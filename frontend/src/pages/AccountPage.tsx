import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useUserContext } from "../userContext";

const AccountPage = () => {
  const { user, ready } = useUserContext();
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  const linkClasses = (type: string) => {
    let className = "py-2  px-6";

    if (type === subpage) {
      className += " bg-primary text-white rounded-full";
    }
    return className;
  };

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
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
    </div>
  );
};

export default AccountPage;
