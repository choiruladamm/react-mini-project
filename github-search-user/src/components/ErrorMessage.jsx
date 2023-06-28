/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const ErrorMessage = ({children}) => {
  return (
    <div className="flex items-center justify-center gap-5 border border-gray-300 px-5 py-3 mt-5 rounded-md bg-red-200 text-gray-700 italic">
      {children}
    </div>
  );
};

export default ErrorMessage;
