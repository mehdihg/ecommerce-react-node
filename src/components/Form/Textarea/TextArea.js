const TextArea = ({ formik }) => {
  return (
    <textarea
      type="textarea"
      onChange={formik.handleChange}
      value={formik.values.textarea}
      onBlur={formik.handleBlur}
      name="message"
      placeholder="Message"
    />
  );
};
export default TextArea;
