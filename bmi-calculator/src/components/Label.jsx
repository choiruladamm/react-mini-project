/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Label = ({ children, value, className }) => {
  return (
    <label
      htmlFor="minmax-range"
      className={`block mb-2 ${className} text-base font-medium text-gray-900`}
    >
      {children} {value}
    </label>
  );
};

export default Label;
