/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 mr-2 bg-slate-900 border-slate-900 rounded cursor-pointer"
    />
  );
};

export default Checkbox;
