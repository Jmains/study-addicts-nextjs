import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { OpenEye, ClosedEye } from "@components/icons";
import Image from "next/image";
import { useUIDispatch } from "@components/ui/context";

interface Props {}

interface RegisterFormInput {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

const RegisterView: FC<Props> = () => {
  const router = useRouter();
  const uiDispatch = useUIDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm<RegisterFormInput>();
  const onSubmit = (data: RegisterFormInput) => {
    setLoading(true);
    // Do async task
    setLoading(false);
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
    <div className="flex items-center justify-center">
      <div className="space-y-8 w-80">
        <form className="p-2 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center">
            <Image src="/vercel.svg" height={100} width={100} />
          </div>
          <div className="text-gray-600 font-medium space-y-4 mt-3">
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
                <span className="italic text-red-500 text-sm">password is required</span>
              )}
            </div>
          </div>

          <button
            className="text-white shadow-md font-medium text-center w-full py-2 mt-10 rounded-md bg-gradient-to-r from-lime-800 to-lime-600 hover:bg-gradient-to-r hover:from-lime-900 hover:to-lime-700 focus:outline-none focus:ring-lime-400 focus:ring-2 transition-all duration-150 ease-out"
            type="submit"
            disabled={loading}
          >
            Sign up
          </button>
          <span className="text-center block mt-5 text-gray-500 text-sm font-light">
            Already have an account?{" "}
            <a
              className="font-normal text-lime-600 hover:underline cursor-pointer"
              onClick={() => uiDispatch({ type: "SET_MODAL_VIEW", view: "LOGIN_VIEW" })}
            >
              Log In
            </a>
          </span>

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

export default RegisterView;
