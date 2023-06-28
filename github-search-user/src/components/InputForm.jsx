/* eslint-disable react/prop-types */

const InputForm = ({ query, onChange }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
    />
  );
};

export default InputForm;
