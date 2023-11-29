import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Calender from "../Calender/Calender";
import { useSelector } from "react-redux";
import RsvpButton from "../Button/RsvpButton";
import { useUpdateRsvpMutation } from "../../features/event/eventApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ShareModal from "../Share/ShareModal";

const Details = ({ data, setOpen, refetch }) => {
  const [updateRsvp] = useUpdateRsvpMutation();
  const state = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = state;
  const navigate = useNavigate();
  const handleRsvp = () => {
    if (data?.rsvp?.includes(user?._id)) {
      const inputData = {
        userId: user?._id,
        rsvpStatus: "cancel",
      };
      const id = data?._id;
      updateRsvp({ inputData, id }).then((res) => {
        if (res?.data) {
          toast.success(`Cancel Request!`);
          refetch();
        }
      });
    } else {
      const inputData = {
        userId: user?._id,
        rsvpStatus: "attend",
      };
      const id = data?._id;
      updateRsvp({ inputData, id }).then((res) => {
        if (res?.data) {
          toast.success(`Accept Request!`);
          refetch();
        }
      });
    }
  };
  return (
    <React.Fragment>
      <h1 className="font-bold text-2xl text-center">{data?.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
        <div>
          <Calender dateValue={new Date(data?.start_time)} />
        </div>
        <div className="mt-10">
          <p>
            Event start at{" "}
            {dayjs(data?.start_time).format("MMM D, YYYY h:mm A")}
          </p>
          <p>
            Event end at {dayjs(data?.end_time).format("MMM D, YYYY h:mm A")}
          </p>
          <p>Location: {data?.location}</p>
          <p className="text-blue-400 hover:text-blue-500 cursor-pointer">
            526 will attend
          </p>
          <p>{data?.description}</p>
          <div className="flex items-center mt-10">
            {user ? (
              <div className="mr-10">
                <RsvpButton onClick={handleRsvp} />
              </div>
            ) : (
              <div className="mr-10">
                <RsvpButton onClick={() => navigate("/login")} />
              </div>
            )}

            {user?.id === data?.user_id && (
              <div>
                <button
                  onClick={() => setOpen(true)}
                  className="text-white bg-blue-400 py-2 px-10 rounded hover:bg-blue-500"
                >
                  Edit
                </button>
              </div>
            )}
            <div className="ml-10">
              <button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              >
                <i className="fas fa-share-alt text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </React.Fragment>
  );
};

export default Details;

Details.propTypes = {
  data: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};
