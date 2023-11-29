import React from "react";
import RsvpButton from "../Button/RsvpButton";
import DatePicker from "react-datepicker";

const EventList = () => {
  const [dateRange, setDateRange] = React.useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <React.Fragment>
      <div className="flex items-center justify-center m-0 p-0">
        <div className="w-full sm:w-11/12 md:w-full lg:w-full bg-white">
          <div className="w-full flex justify-between items-center py-3">
            <h2 className="text-2xl font-semibold">Events</h2>
          </div>
          <div className="w-full flex justify-center py-1 mb-4">
            <div className="relative w-full mr-5">
              <input
                type="text"
                className="w-full  bg-white py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-black transition-colors duration-300"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
                className="w-56 px-5 bg-white py-2  pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-black transition-colors duration-300"
                placeholderText="Select Date"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, i) => (
              <div
                key={i}
                className=" bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-black hover:border-2 transition-colors duration-300"
              >
                <h2 className="text-xl font-semibold mb-4">Event 1</h2>
                <p className="text-gray-700">
                  Start at 14th December 2023 05.23pm
                </p>
                <p className="text-gray-700">
                  Rabindraw Sarabar, Dhanmondi, Dhaka-1207, Bangladesh
                </p>
                <div className="mt-5">
                  <RsvpButton onClick={() => ""} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventList;
