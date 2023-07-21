/* eslint-disable react/prop-types */

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-slate-950 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 mt-6 w-full"
    >
      {children}
    </button>
  );
};

export default Button;
