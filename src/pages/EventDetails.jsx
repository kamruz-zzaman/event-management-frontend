import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/shared-components/Header";
import Footer from "../components/shared-components/Footer";
import { useGetEventDetailsQuery } from "../features/event/eventApi";
import Details from "../components/Events/Details";
import UpdateEventModal from "../components/Events/UpdateEventModal";
import EventLoading from "../components/Loader/EventLoading";

const EventDetails = () => {
  const { id } = useParams();
  const { data, refetch, isLoading } = useGetEventDetailsQuery(id);
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Header />
      {isLoading ? (
        <div className="min-h-[60vh]">
          <EventLoading />
        </div>
      ) : (
        <div className="mx-6 md:mx-20 my-6 md:my-10">
          {data && <Details data={data} setOpen={setOpen} refetch={refetch} />}
        </div>
      )}
      <Footer />
      {open && (
        <UpdateEventModal
          open={open}
          setOpen={setOpen}
          data={data}
          refetch={refetch}
        />
      )}
    </React.Fragment>
  );
};

export default EventDetails;
