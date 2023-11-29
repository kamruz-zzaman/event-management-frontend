import React from "react";

const CreateEvent = () => {
  return (
    <React.Fragment>
      <div className="bg-white p-5 max-w-sm w-full">
        <div className="flex justify-center mb-2">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <i className="fas fa-calendar-alt text-xl px-1"></i>
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create a new event
        </h2>
        <form>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Title *
            </label>
            <input
              type="text"
              id="fullName"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="James Brown"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Description *
            </label>
            <textarea
              id="description"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="Something..."
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Start Time *
            </label>
            <input
              type="datetime-local"
              id="start_time"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              End Time *
            </label>
            <input
              type="datetime-local"
              id="start_time"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Location *
            </label>
            <input
              type="text"
              id="location"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="Dhaka,Bangladesh"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Create
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateEvent;
