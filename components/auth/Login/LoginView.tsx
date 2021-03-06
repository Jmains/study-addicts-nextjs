import { useForm } from "react-hook-form";
import Link from "next/link";
import { FC, useState } from "react";
import { AcademicCap, ClosedEye, LoadingSpinner, OpenEye } from "@components/icons";
import { useUIDispatch, useUIState } from "@components/ui/context";
import Image from "next/image";
import Logo from "@components/ui/Logo";
import { useAuth } from "@utils/hooks/useAuth";

interface Props {}

interface LoginFormInput {
  email: string;
  password: string;
}

const LoginView: FC<Props> = () => {
  const auth = useAuth();
  const uiDispatch = useUIDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register, handleSubmit, watch, errors } = useForm<LoginFormInput>();

  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  const onSubmit = async (formData: LoginFormInput) => {
    const { email, password } = formData;
    setLoading(true);

    try {
      await auth.login(email, password);
      uiDispatch({ type: "CLOSE_MODAL" });
      uiDispatch({ type: "SET_TOAST_TEXT", text: "Successfully logged in!" });
      uiDispatch({ type: "OPEN_TOAST" });
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="space-y-8 w-80">
        <form className="p-2 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center">
            <h1 className="text-gray-800 text-2xl font-semibold">Study Addicts</h1>
          </div>
          <div className="text-gray-600 font-medium space-y-4 mt-12">
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
                    aria-label="show password"
                    onClick={togglePasswordVisiblity}
                    className="absolute mx-2 top-0 mt-3 right-0 h-5 w-5 cursor-pointer"
                  />
                ) : (
                  <ClosedEye
                    aria-label="hide password"
                    onClick={togglePasswordVisiblity}
                    className="absolute mx-2 top-0 mt-3 right-0 h-5 w-5 cursor-pointer"
                  />
                )}
              </div>

              {errors.password && (
                <span className="italic text-red-500 text-sm mt-2">password is required</span>
              )}
              {error && <span className="italic text-red-500 text-sm mt-2">{error}</span>}
            </div>
          </div>

          <div className="text-sm text-right mt-2">
            <a
              onClick={() => uiDispatch({ type: "SET_MODAL_VIEW", view: "FORGOT_PASS_VIEW" })}
              className=" text-lime-600 hover:text-lime-700 cursor-pointer "
            >
              Forgot your password?
            </a>
          </div>

          <button
            className="flex items-center justify-center text-white font-medium text-center w-full py-2 mt-8 rounded-md bg-gradient-to-r from-lime-800 to-lime-600 hover:bg-gradient-to-r hover:from-lime-900 hover:to-lime-700 focus:outline-none focus:ring-2 transition duration-300 ease-out"
            type="submit"
            disabled={loading}
          >
            {loading && <LoadingSpinner className="h-6 w-6 mr-2" />}
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-gray-500 text-center text-sm mt-5 font-light">
            Don't have an account? {/* <Link href="/register"> */}
            <a
              onClick={() => {
                uiDispatch({ type: "SET_MODAL_VIEW", view: "REGISTER_VIEW" });
              }}
              className="text-lime-600 hover:underline cursor-pointer font-normal"
            >
              Sign Up
            </a>
            {/* </Link> */}
          </p>

          <div className="flex justify-center text-gray-400 text-sm font-light mt-10">
            <Link href="/">
              <a>&copy; Company &bull;&nbsp; </a>
            </Link>
            <Link href="/">
              <a> Privacy & Terms &bull;&nbsp; </a>
            </Link>
            <Link href="/">
              <a> Contact</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
