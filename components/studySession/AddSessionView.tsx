import { LoadingSpinner } from "@components/icons";
import { useUIDispatch } from "@components/ui/context";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface RegisterFormInput {
  department: string;
  professor: string;
  classNum: string;
  description?: string;
  maxCapacity: number;
  sessionStart: string;
  sessionEnd: string;
  building: string;
  roomNum: string;
}

const AddSessionView = () => {
  const uiDispatch = useUIDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register, handleSubmit, watch, errors } = useForm<RegisterFormInput>();

  const onSubmit = async (formData: RegisterFormInput) => {
    console.log(formData);
    setLoading(true);
    try {
      setLoading(false);
      uiDispatch({ type: "CLOSE_MODAL" });
      uiDispatch({ type: "SET_TOAST_TEXT", text: "Session successfully created" });
      uiDispatch({ type: "OPEN_TOAST" });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="space-y-8 w-80">
        <form className="p-2 text-sm sm:text-base" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center">
            <h1 className="text-gray-800 text-2xl font-semibold">Create Study Session</h1>
          </div>
          <div className="text-gray-600 font-medium space-y-4 mt-12">
            <div className="flex space-x-5">
              <div>
                <label className="text-gray-600" htmlFor="department">
                  Department<span className="text-red-500">*</span>
                </label>
                <select
                  ref={register({
                    required: true,
                    maxLength: 2,
                  })}
                  className="block font-light focus:shadow-md px-3 border w-20 rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                  name="department"
                  id="department"
                >
                  <option value="CS">CS</option>
                  <option value="CE">CE</option>
                  <option value="BME">BME</option>
                </select>
                {errors.department && (
                  <span className="italic text-red-500 text-sm">Department is required</span>
                )}
              </div>
              <div className="w-full">
                <label className="text-gray-600" htmlFor="classNum">
                  Class Number<span className="text-red-500">*</span>
                </label>
                <input
                  className="block font-light px-3 border w-full focus:shadow-md rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                  name="classNum"
                  type="text"
                  maxLength={8}
                  ref={register({ required: true })}
                />
                {errors.classNum && (
                  <span className="italic text-red-500 text-sm">Class number is required</span>
                )}
              </div>
            </div>

            <div>
              <label className="text-gray-600" htmlFor="professor">
                Professor Name<span className="text-red-500">*</span>
              </label>
              <input
                className="block font-light px-3 border w-full focus:shadow-md rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                name="professor"
                maxLength={50}
                ref={register({ required: true })}
              />
              {errors.professor && (
                <span className="italic text-red-500 text-sm">Professor name is required</span>
              )}
            </div>

            <div className="mt-5 ">
              <label className="text-gray-600" htmlFor="maxCapacity">
                Maximum Capacity<span className="text-red-500">*</span>
              </label>
              <select
                ref={register({ required: true })}
                className="block font-light px-3 focus:shadow-md border w-16 rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                name="maxCapacity"
                id="maxCapacity"
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>

              {errors.maxCapacity && (
                <span className="italic text-red-500 text-sm">
                  Maximum capacity is required
                </span>
              )}
              <div className="flex justify-between">
                <div className="mt-5">
                  <label htmlFor="sessionStart">
                    Session Start<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="mt-5">
                  <label htmlFor="sessionEnd">
                    Session End<span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between space-x-5">
                <div className="mt-5">
                  <label htmlFor="building">
                    Building<span className="text-red-500">*</span>
                    <input
                      className="block font-light px-3 border w-44 focus:shadow-md rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                      name="building"
                      type="text"
                      maxLength={50}
                      ref={register({ required: true })}
                    />
                  </label>
                  {errors.building && (
                    <span className="italic text-red-500 text-sm">Building is required</span>
                  )}
                </div>

                <div className="mt-5 w-full">
                  <label htmlFor="roomNum">
                    Room #<span className="text-red-500">*</span>
                    <input
                      className="block font-light px-3 border w-full focus:shadow-md rounded-md border-gray-300 h-10 mt-1 focus:ring-1 focus:ring-lime-400 outline-none transition duration-200 ease-out"
                      name="roomNum"
                      type="text"
                      maxLength={8}
                      ref={register({ required: true })}
                    />
                  </label>
                  {errors.roomNum && (
                    <span className="italic text-red-500 text-sm">
                      Room number is required
                    </span>
                  )}
                </div>
              </div>
              {error && <span className="italic text-red-500 text-sm">{error}</span>}
            </div>
          </div>

          <button
            className="flex justify-center items-center text-white shadow-md font-medium text-center w-full py-2 mt-10 rounded-md bg-gradient-to-r from-lime-800 to-lime-600 hover:bg-gradient-to-r hover:from-lime-900 hover:to-lime-700 focus:outline-none focus:ring-lime-400 focus:ring-2 transition-all duration-150 ease-out"
            type="submit"
            disabled={loading}
          >
            {loading && <LoadingSpinner className="h-6 w-6 mr-2" />}
            {loading ? "Creating Session..." : "Create Session"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSessionView;
