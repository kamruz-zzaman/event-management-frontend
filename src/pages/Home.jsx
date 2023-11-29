import React from "react";
import EventList from "../components/Events/EventList";
import Footer from "../components/shared-components/Footer";
import Header from "../components/shared-components/Header";
import useAuthCheck from "../hooks/useAuthCheck";

const Home = () => {
  const isAuth = useAuthCheck();
  console.log(isAuth);
  return (
    <React.Fragment>
      <Header />
      <div className="mx-6 md:mx-20 my-6 md:my-10">
        <EventList />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
