import { useForm } from "react-hook-form";
import Link from "next/link";
import { FC, useState } from "react";
import { ClosedEye, OpenEye } from "@components/icons";
import { useUIDispatch } from "@components/ui/context";
import Modal from "@components/ui/Modal";

interface Props {}

interface LoginFormInput {
  email: string;
  password: string;
}

const LoginView: FC<Props> = () => {
  const uiDispatch = useUIDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm<LoginFormInput>();
  const onSubmit = (data: LoginFormInput) => console.log(data);

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
        {/* Form Title */}
        <h1 className="font-bold text-3xl text-center">Sign in to your account</h1>

        <form className="p-6 bg-white rounded-lg shadow-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-gray-600 font-medium space-y-6">
            <div className="">
              <label className="text-gray-600" htmlFor="email">
                Email address<span className="text-red-500">*</span>
              </label>

              <input
                className="block pl-3 border w-full text-gray-600 font-light rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 focus:shadow-md outline-none transition duration-200 ease-out"
                name="email"
                type="email"
                autoComplete="email"
                ref={register({ required: true })}
              />

              {errors.email && (
                <span className={errors.email ? "italic text-red-500 text-sm" : "hidden"}>
                  email is required
                </span>
              )}
            </div>

            <div className="mt-6">
              <label className="text-gray-600" htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  className="block pl-3 pr-9 border w-full  text-gray-600 font-light rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 focus:shadow-md outline-none transition duration-200 ease-out"
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
                <span className="italic text-red-500 text-sm mt-2">password is required</span>
              )}
            </div>
          </div>

          <div className="text-sm text-right mt-3">
            <Link href="/">
              <a className=" text-lime-600 hover:text-lime-700">Forgot your password?</a>
            </Link>
          </div>
          <button
            className="text-white font-medium text-center w-full py-2 mt-10 rounded-md bg-gradient-to-r from-lime-800 to-lime-600 hover:bg-gradient-to-r hover:from-lime-900 hover:to-lime-700 focus:outline-none focus:ring-2 transition duration-300 ease-out"
            type="submit"
          >
            Sign in
          </button>
          <p className="text-gray-500 italic text-center text-sm mt-3">
            Don't have an account? {/* <Link href="/register"> */}
            <a onClick={() => {}} className="text-lime-600 hover:underline cursor-pointer">
              Sign up
            </a>
            {/* </Link> */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
