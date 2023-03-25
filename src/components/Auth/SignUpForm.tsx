import { useFormik, FormikValues } from "formik";
import { Link } from "react-router-dom";
import { signUpFormSchema } from "../../schemas";

const onSubmit = (values: FormikValues, { resetForm }: FormikValues) => {
  resetForm();
};

export const SignUpForm = () => {
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: signUpFormSchema,
  });
  return (
    <div className=" max-w-[90%] border border-gray-100 shadow-lg p-8 rounded-md">
      <h1 className="text-2xl mb-4">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="my-1">
          <label className="block text-sm " htmlFor="name">
            Name
          </label>
          <input
            value={values.name}
            onChange={handleChange}
            id="name"
            type="text"
            placeholder="Your name..."
            onBlur={handleBlur}
            className={`border p-2 w-full rounded-md outline-none ${
              errors.name && touched.name ? "border-red-500" : "border-gray-100"
            }`}
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-xs mb-1">{errors.name}</p>
          )}
        </fieldset>
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
        <fieldset className="my-1">
          <label className="block text-sm " htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            onBlur={handleBlur}
            className={`border p-2 w-full rounded-md outline-none ${
              errors.confirmPassword && touched.confirmPassword
                ? "border-red-500"
                : "border-gray-100"
            }`}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="text-red-500 text-xs mb-1">
              {errors.confirmPassword}
            </p>
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
          <Link to="/auth/sign-in" className="cursor-pointer hover:underline">
            Already have account? Sign in now!
          </Link>
        </div>
      </form>
    </div>
  );
};
