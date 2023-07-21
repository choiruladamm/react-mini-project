/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Slider = ({ onChange, min, max }) => {
  return (
    <input
      onChange={onChange}
      type="range"
      min={min}
      max={max}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "
    />
  );
};

export default Slider;
