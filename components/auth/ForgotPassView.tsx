import { useForm } from "react-hook-form";
import { FC, useState } from "react";
import { useUIDispatch, useUIState } from "@components/ui/context";
import Image from "next/image";

interface Props {}

interface ForgotPassFormInput {
  email: string;
}

const ForgotPassView: FC<Props> = () => {
  const uiDispatch = useUIDispatch();
  const { register, handleSubmit, watch, errors } = useForm<ForgotPassFormInput>();
  const onSubmit = (data: ForgotPassFormInput) => console.log(data);

  // console.log(watch("firstName"));
  // console.log(watch("lastName"));
  // console.log(watch("email"));
  // console.log(watch("password"));

  return (
    <div className="flex items-center justify-center">
      <div className="space-y-8 w-80">
        <form className="p-3 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center">
            <Image src="/vercel.svg" height={100} width={100} />
          </div>
          <div className="text-gray-600 font-medium mt-2">
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
          </div>

          <button
            className="text-white font-medium text-center w-full py-2 mt-7 rounded-md bg-gradient-to-r from-lime-800 to-lime-600 hover:bg-gradient-to-r hover:from-lime-900 hover:to-lime-700 focus:outline-none focus:ring-2 transition duration-300 ease-out"
            type="submit"
          >
            Recover Password
          </button>
          <p className="text-gray-500 text-center text-sm mt-4">
            Already have an account?{" "}
            <a
              onClick={() => {
                uiDispatch({ type: "SET_MODAL_VIEW", view: "LOGIN_VIEW" });
              }}
              className="text-lime-600 hover:underline cursor-pointer"
            >
              Log In
            </a>
            {/* </Link> */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassView;
