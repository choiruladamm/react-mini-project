/* eslint-disable react/prop-types */

const Button = ({type, children}) => {
  return (
    <button
      type={type}
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5"
    >
      {children}
    </button>
  );
};

export default Button;
