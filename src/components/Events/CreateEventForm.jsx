import React from "react";

const CreateEventForm = () => {
  const [inputData, setInputData] = React.useState({
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    location: "",
  });
  const [errors, setErrors] = React.useState({});
  const handleInputChange = (event) => {
    setInputData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields
    const validationErrors = {};
    Object.keys(inputData).forEach((key) => {
      if (!inputData[key]) {
        validationErrors[key] = "This field is required";
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      // There are validation errors, update the state
      setErrors(validationErrors);
    } else {
      // No validation errors, submit the form or perform other actions
      // Add your form submission logic here
    }
  };

  return (
    <React.Fragment>
      <section className="bg-white dark:bg-gray-900 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="hidden bg-no-repeat bg-center lg:block "
            style={{
              backgroundImage: "url('/src/assets/createeventcover.jpg')",
            }}
          ></div>
          <div className="flex justify-center">
            <div className="bg-white p-5 max-w-sm w-full">
              <div className="flex justify-center mb-2">
                <span className="inline-block bg-gray-200 rounded-full p-3">
                  <i className="fas fa-calendar-alt text-xl px-1"></i>
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4">
                Create a new event
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Title *
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Event Title"
                    className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${
                      errors.title ? "border-red-500" : ""
                    }`}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Description *
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    id="description"
                    name="description"
                    placeholder="Event Description"
                    className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${
                      errors.description ? "border-red-500" : ""
                    }`}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Start Time *
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="datetime-local"
                    id="start_time"
                    name="start_time"
                    className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${
                      errors.start_time ? "border-red-500" : ""
                    }`}
                  />
                  {errors.start_time && (
                    <p className="text-red-500 text-sm">{errors.start_time}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    End Time *
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="datetime-local"
                    id="end_time"
                    name="end_time"
                    className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${
                      errors.end_time ? "border-red-500" : ""
                    }`}
                  />
                  {errors.end_time && (
                    <p className="text-red-500 text-sm">{errors.end_time}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Location *
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Dhaka,Bangladesh"
                    className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${
                      errors.location ? "border-red-500" : ""
                    }`}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm">{errors.location}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CreateEventForm;
