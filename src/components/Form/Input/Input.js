import { IoWarning } from "react-icons/io5";
const Input = ({ formik, name, placeholder, type }) => {
  return (
    <div className="input-container register-input login-input">
      <input
        type={type}
        onChange={formik.handleChange}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        name={name}
        placeholder={placeholder}
      />
      <div className="tooltip">
        {formik.errors[name] && formik.touched[name] && (
          <>
            <IoWarning />
            <span className="tooltiptext">{formik.errors[name]}</span>
          </>
        )}
      </div>
    </div>
  );
};
export default Input;
