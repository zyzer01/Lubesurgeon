import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

function ConsentModal({ isOpen, onClose, onAccept, onReject }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative z-10 p-4 mx-auto overflow-hidden bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Cookie Consent</h3>
            <p className="mt-2 text-sm text-gray-500">
              We use cookies to provide you with the best experience on our website. By clicking
              &quot;Accept&quot; you agree to our use of cookies.
            </p>
          </div>
          <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onAccept}
              type="button"
              className="w-full px-4 py-2 mt-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Accept
            </button>
            <button
              onClick={onReject}
              type="button"
              className="w-full px-4 py-2 mt-3 mr-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default ConsentModal;
