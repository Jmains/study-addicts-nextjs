import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { OpenEye, ClosedEye } from "@components/icons";

interface Props {}

interface RegisterFormInput {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

const RegisterView: FC<Props> = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm<RegisterFormInput>();
  const onSubmit = (data: RegisterFormInput) => {
    console.log(data);
    router.push("/login");
  };

  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  // console.log(watch("firstName"));
  // console.log(watch("lastName"));
  // console.log(watch("email"));
  // console.log(watch("password"));

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="space-y-8 w-full max-w-sm">
        <div>
          <h1 className="font-bold text-3xl text-center">Sign up an account</h1>
        </div>

        <form className="p-6 bg-white rounded-lg shadow-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-gray-600 font-medium space-y-6">
            <div>
              <label htmlFor="firstName">
                First name<span className="text-red-500">*</span>
              </label>
              <input
                className="block focus:shadow-md w-full pl-3 border rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                name="firstName"
                ref={register({
                  required: true,
                  maxLength: 25,
                })}
              />
              {errors.firstName?.type === "required" && (
                <span className="italic text-red-500 text-sm">first name is required</span>
              )}
              {errors.firstName?.type === "maxLength" && (
                <span className="italic text-red-500 text-sm">
                  first name must not exceed 25 characters
                </span>
              )}
            </div>
            <div>
              <label className="text-gray-600" htmlFor="firstName">
                Last name
              </label>
              <input
                className="block pl-3 border w-full focus:shadow-md rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                name="lastName"
                ref={register({ pattern: /^[A-Za-z]+$/i, maxLength: 20 })}
              />
            </div>

            <div>
              <label className="text-gray-600" htmlFor="email">
                Email address<span className="text-red-500">*</span>
              </label>

              <input
                className="block pl-3 border w-full focus:shadow-md rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                name="email"
                type="email"
                autoComplete="email"
                required
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="italic text-red-500 text-sm">email is required</span>
              )}
            </div>

            <div className="mt-5 ">
              <label className="text-gray-600" htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="block pl-3 focus:shadow-md border w-full rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  ref={register({ required: true })}
                />
                {showPassword ? (
                  <OpenEye
                    onClick={togglePasswordVisiblity}
                    className="absolute mx-2 top-0 mt-3 right-0 h-5 w-5 cursor-pointer"
                  />
                ) : (
                  <ClosedEye
                    onClick={togglePasswordVisiblity}
                    className="absolute mx-2 top-0 mt-3 right-0 h-5 w-5 cursor-pointer"
                  />
                )}
              </div>
              {errors.password && (
                <span className="italic text-red-500 text-sm">password is required</span>
              )}
            </div>
          </div>

          <button
            className="text-white shadow-md font-medium text-center w-full py-2 mt-10 rounded-md bg-gradient-to-r from-lime-800 to-lime-600 hover:bg-gradient-to-r hover:from-lime-900 hover:to-lime-700 focus:outline-none focus:ring-lime-400 focus:ring-2 transition-all duration-150 ease-out"
            type="submit"
          >
            Sign up
          </button>
          <p className="text-sm italic text-gray-500 text-center mt-4">
            By clicking "Sign up" you are agreeing to our{" "}
            <Link href="/">
              <a className="text-lime-600 hover:underline">Terms and Conditions</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
