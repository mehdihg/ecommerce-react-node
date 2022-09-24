import "./Form.css";
import Input from "./Input/Input";

import "react-toastify/dist/ReactToastify.css";
import Button from "./Button/Button";



const Form = ({
  InputValues,
  formik,
  children,
  autocomplete,
  ButtnText,
  title,
}) => {
  return (
    <>
      <h3 className="title-form">{title}</h3>

      <form
        className="form"
        onSubmit={formik.handleSubmit}
        autoComplete={autocomplete}
      >
        {InputValues.map((item) => {
          return <Input key={item.id} formik={formik} {...item} />;
        })}

        {children}
        <Button formik={formik} type="submit" FormsBtn>
          {ButtnText}
        </Button>
      </form>


    </>
  );
};
export default Form;
