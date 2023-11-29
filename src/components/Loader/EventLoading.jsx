import React from "react";

const EventLoading = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center p-10">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventLoading;
