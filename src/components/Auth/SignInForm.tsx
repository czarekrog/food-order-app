import { useFormik, FormikValues } from "formik";
import { Link } from "react-router-dom";
import { signInFormSchema } from "../../schemas";

const onSubmit = (values: FormikValues, { resetForm }: FormikValues) => {
  //Sign in action below

  resetForm();
};

export const SignInForm = () => {
  const {
    values,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: signInFormSchema,
  });

  return (
    <div className=" max-w-[90%] border border-gray-100 shadow-lg p-8 rounded-md">
      <h1 className="text-2xl mb-4">Sign in</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="my-1">
          <label className="block text-sm " htmlFor="email">
            Email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter your email..."
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
        <fieldset className="my-1">
          <label className="block text-sm " htmlFor="password">
            Password
          </label>
          <input
            value={values.password}
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="Password"
            onBlur={handleBlur}
            className={`border p-2 w-full rounded-md outline-none ${
              errors.password && touched.password
                ? "border-red-500"
                : "border-gray-100"
            }`}
          />
          {errors.password && touched.password && (
            <p className="text-red-500 text-xs mb-1">{errors.password}</p>
          )}
        </fieldset>
        <button
          type="submit"
          disabled={isSubmitting}
          className="block my-4 bg-gray-100 px-5 py-2 rounded-md hover:bg-gray-200"
        >
          Sign in
        </button>
        <div className="border-t mt-4 p-2 flex flex-col gap-2 items-center">
          <Link
            to="/auth/forgot-password"
            className="cursor-pointer hover:underline"
          >
            Forgot password? Recover it now!
          </Link>
          <Link to="/auth/sign-up" className="cursor-pointer hover:underline">
            Don't have account? Sign up now!
          </Link>
        </div>
      </form>
    </div>
  );
};
