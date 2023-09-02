import { Transition } from "@headlessui/react";

const Modal = ({ isOpen, onClose }) => {
  const [resetEmail, setResetEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetEmail((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(resetEmail);
  return (
    <>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`fixed inset-0 flex items-center justify-center z-12  ${
            isOpen ? "visible" : "hidden"
          }`}
        >
          <div className="fixed inset-0 bg-gray-800 opacity-50 shadow-lg"></div>
          <div className="bg-white rounded-lg z-10">
            <div className="flex justify-end">
              <div className="relative w-full max-w-lg p-4 mx-auto rounded-md shadow-xl">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                    onClick={onClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="max-w-sm mx-auto py-3 px-2 space-y-3 text-center">
                  <h3 className="text-xl font-medium text-gray-800">
                    Reset Password
                  </h3>
                  <p className="text-[15px] text-gray-600">
                    Enter the email address associated with your account and
                    we&apos;ll send you a link to reset your password.
                  </p>
                  <div className="relative">
                    <svg
                      className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <input
                      name="email"
                      type="text"
                      placeholder="Enter email address"
                      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-amber-500 shadow-sm rounded-lg"
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="block w-full mt-4 py-3 px-4 font-medium text-sm text-center text-white bg-balablue hover:bg-slate-900 active:bg-balablue rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Modal;
