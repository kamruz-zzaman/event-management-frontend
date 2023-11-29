import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";

const CreateEventModal = ({ open, setOpen }) => {
  const closeModal = () => setOpen(false);
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
};

export default CreateEventModal;

CreateEventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
