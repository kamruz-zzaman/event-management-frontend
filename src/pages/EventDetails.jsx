import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/shared-components/Header";
import Footer from "../components/shared-components/Footer";

const EventDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
};

export default EventDetails;
