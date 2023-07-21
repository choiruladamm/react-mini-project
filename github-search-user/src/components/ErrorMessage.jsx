/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export const ErrorMessage = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-5 px-5 py-3 mt-5 italic text-gray-700 bg-red-200 border border-gray-300 rounded-md">
      {children}
    </div>
  );
};

