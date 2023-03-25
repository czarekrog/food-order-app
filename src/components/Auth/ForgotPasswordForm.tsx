import { useFormik, FormikValues } from "formik";
import { forgotPasswordFormSchema } from "../../schemas";

const onSubmit = (values: FormikValues, { resetForm }: FormikValues) => {
  resetForm();
};

export const ForgotPasswordForm = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
    validationSchema: forgotPasswordFormSchema,
  });
  return (
    <div className="w-96 max-w-[90%] border border-gray-100 shadow-lg p-8 rounded-md">
      <h1 className="text-2xl mb-4">Forgot password</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="my-1">
          <label className="block text-sm " htmlFor="email">
            Email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="text"
            placeholder="Your email..."
            onBlur={handleBlur}
            className={`border p-2 w-full rounded-md outline-none ${
              errors.email && touched.email
                ? "border-red-500"
                : "border-gray-100"
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-xs mb-1">{errors.email}</p>
          )}
        </fieldset>
        <button
          type="submit"
          disabled={isSubmitting}
          className="block my-4 bg-gray-100 px-5 py-2 rounded-md hover:bg-gray-200"
        >
          Send recovery link
        </button>
      </form>
    </div>
  );
};
