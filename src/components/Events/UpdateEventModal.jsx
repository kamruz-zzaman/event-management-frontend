import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { useEditEventMutation } from "../../features/event/eventApi";
import toast from "react-hot-toast";

const UpdateEventModal = ({ open, setOpen, data, refetch }) => {
  const [editEvent, { isLoading }] = useEditEventMutation();
  const closeModal = () => setOpen(false);
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

  React.useEffect(() => {
    if (data) {
      setInputData({
        title: data?.title,
        description: data?.description,
        start_time: data?.start_time,
        end_time: data?.end_time,
        location: data?.location,
      });
    }
  }, [data]);

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
      setErrors(validationErrors);
    } else {
      const id = data?._id;
      editEvent({ inputData, id }).then((res) => {
        if (res?.data) {
          toast.success(`Event Updated!`);
          refetch();
          closeModal();
        }
      });
    }
  };
  return (
    <React.Fragment>
      <Transition appear show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="bg-white p-5 max-w-sm w-full">
                    <div className="flex justify-center mb-2">
                      <span className="inline-block bg-gray-200 rounded-full p-3">
                        <i className="fas fa-calendar-alt text-xl px-1"></i>
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-center mb-4">
                      Update an event
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
                          value={inputData.title}
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
                          value={inputData.description}
                          onChange={handleInputChange}
                          id="description"
                          name="description"
                          placeholder="Event Description"
                          className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${
                            errors.description ? "border-red-500" : ""
                          }`}
                        />
                        {errors.description && (
                          <p className="text-red-500 text-sm">
                            {errors.description}
                          </p>
                        )}
                      </div>
                      <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                          Start Time *
                        </label>
                        <input
                          onChange={handleInputChange}
                          value={inputData.start_time}
                          type="datetime-local"
                          id="start_time"
                          name="start_time"
                          className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${
                            errors.start_time ? "border-red-500" : ""
                          }`}
                        />
                        {errors.start_time && (
                          <p className="text-red-500 text-sm">
                            {errors.start_time}
                          </p>
                        )}
                      </div>
                      <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                          End Time *
                        </label>
                        <input
                          onChange={handleInputChange}
                          value={inputData.end_time}
                          type="datetime-local"
                          id="end_time"
                          name="end_time"
                          className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${
                            errors.end_time ? "border-red-500" : ""
                          }`}
                        />
                        {errors.end_time && (
                          <p className="text-red-500 text-sm">
                            {errors.end_time}
                          </p>
                        )}
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                          Location *
                        </label>
                        <input
                          onChange={handleInputChange}
                          value={inputData.location}
                          type="text"
                          id="location"
                          name="location"
                          placeholder="Dhaka,Bangladesh"
                          className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${
                            errors.location ? "border-red-500" : ""
                          }`}
                        />
                        {errors.location && (
                          <p className="text-red-500 text-sm">
                            {errors.location}
                          </p>
                        )}
                      </div>
                      {isLoading ? (
                        <button
                          type="submit"
                          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                          <div>
                            <svg
                              aria-hidden="true"
                              role="status"
                              className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="#1C64F2"
                              ></path>
                            </svg>
                            Loading...
                          </div>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                          Update
                        </button>
                      )}
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
};

export default UpdateEventModal;

UpdateEventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};
