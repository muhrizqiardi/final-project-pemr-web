import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-location";
import useError from "../helpers/useError";
import { useState } from "react";
import axiosInstance from "../helpers/axiosInstance";
import logoImage from "../assets/logo.png";
import logotextImage from "../assets/logotext.png";
import batikImage from "../assets/batik-signup-jobseeker.png";

function LoginCompanyScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { isError, setError, errorMessage } = useError();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log({data})
    try {
      const result = await axiosInstance.post("/jobseekers-auth", {
        ...data,
      });

      localStorage.setItem("token", result.data.data.toString());
      localStorage.setItem("role", "jobseeker");

      navigate({ to: "/", replace: false });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div className="h-screen bg-custom-light">
        <header className="bg-custom-light-100 top-0 mb-12 flex w-full items-center justify-end gap-8 px-16">
          <div className=" logo mr-auto">
            <img src={logotextImage} alt="" className=" w-36" />
          </div>
          <div className="">
            <ul className="flex justify-end gap-8">
              <li className="">
                Kembali ke{" "}
                <a href="/" className="justify-end font-bold">
                  <u>home page</u>
                </a>
              </li>
            </ul>
          </div>
        </header>

        <main className="loginPage justify-center ">
          <div className="mb-24 grid grid-cols-2">
            <div className="sticky top-0 h-min bg-[rgb(51,15,10)] p-16">
              <img src={batikImage} alt="" />
            </div>
            <div className="bg-[#F4FDAF] p-16">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center gap-4  "
              >
                <div className="p-6">
                  <article className="rounded-2xl bg-[rgb(51,15,10)] p-4 text-center text-white hover:underline">
                    <a href="/sign-up/jobseekers">
                      Ingin masuk ke akun jobseeker? Kunjungi laman ini.
                    </a>
                  </article>
                </div>
                <img src={logoImage} alt="" className="h-16 w-16" />
                <div className="text-center text-custom-text_red">
                  <p className="text-4xl font-bold">Dafter ke SpaceWork</p>
                  <p className="text-3xl font-light">
                    sebagai <span className="italic">company</span>
                  </p>
                </div>

                <div className="username h-15 relative mb-4 flex w-full flex-wrap items-center  rounded bg-custom-bg_box_input pr-10">
                  <div className="w-15 -mr-px flex justify-center p-4">
                    <span className="flex items-center rounded rounded-r-none border-0 bg-custom-bg_box_input px-3 text-2xl leading-normal text-gray-600">
                      <i className="fas fa-user-circle"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="border-grey-light font-roboto relative h-10 w-px flex-1 flex-shrink flex-grow self-center rounded rounded-l-none border-0  bg-custom-bg_box_input px-3  text-xl leading-normal outline-none"
                    placeholder="Email"
                    {...register("email")}
                  />
                </div>
                <div className="password    h-15 relative mb-4 flex w-full flex-wrap  items-stretch rounded bg-custom-bg_box_input">
                  <div className="w-15 -mr-px flex justify-center p-4">
                    <span className="whitespace-no-wrap flex items-center rounded rounded-r-none bg-custom-bg_box_input px-3 text-xl leading-normal text-gray-600">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="font-roboto relative h-10 w-px flex-auto  flex-shrink flex-grow self-center border-0 bg-custom-bg_box_input px-3 text-xl leading-normal outline-none"
                    placeholder="Password"
                    {...register("password")}
                  />
                </div>
                <div className="mb8"></div>

                <button className="w-full rounded bg-custom-button py-3 px-4 text-white">
                  Masuk akun
                </button>

                <span className="py-3 px-4">
                  Belum punya akun?
                  <a href="/sign-up">
                    <u className="font-bold">Sign Up</u>
                  </a>
                </span>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default LoginCompanyScreen;
