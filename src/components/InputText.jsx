import { PropTypes } from "prop-types";

const InputText = ({
  label,
  placeholder,
  idLabel,
  typeInput,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={idLabel}
        className="block mb-2 text-base font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={typeInput}
        id={idLabel}
        className="bg-stone-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  idLabel: PropTypes.string,
  typeInput: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default InputText;
