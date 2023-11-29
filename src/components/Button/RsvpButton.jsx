import PropTypes from "prop-types";
import React from "react";

const RsvpButton = (props) => {
  const { onClick } = props;
  return (
    <React.Fragment>
      <button
        onClick={onClick}
        className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-50  px-6 py-2 text-sm font-medium text-slate-800 hover:text-yellow-400 focus:outline-none focus:ring active:bg-yellow-600 active:text-white"
      >
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-yellow-400 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-yellow-400 transition-all duration-200 group-hover:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-yellow-400 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-yellow-400 transition-all duration-200 group-hover:h-full"></span>
        RSVP
      </button>
    </React.Fragment>
  );
};

export default RsvpButton;

RsvpButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
