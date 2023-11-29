import React from "react";
import Header from "../components/shared-components/Header";
import Footer from "../components/shared-components/Footer";
import CreateEventForm from "../components/Events/CreateEventForm";

const CreateEvent = () => {
  return (
    <React.Fragment>
      <Header />
      <CreateEventForm />
      <Footer />
    </React.Fragment>
  );
};

export default CreateEvent;
