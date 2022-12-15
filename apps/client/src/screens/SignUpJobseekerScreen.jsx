import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-location";
import useError from "../helpers/useError";
import { useState } from "react";
import axiosInstance from "../helpers/axiosInstance";
import logoImage from "../assets/logo.png";
import logotextImage from "../assets/logotext.png";
import batikImage from "../assets/batik-signup-jobseeker.png";

function SignUpJobseekerScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { isError, setError, errorMessage } = useError();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log({ data });
    try {
      await axiosInstance.post("/jobseekers", {
        ...data,
      });

      navigate({ to: "/login/jobseekers", replace: false });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="overflow-y-autobg-custom-light h-screen">
      <header className="top-0 flex w-full items-center justify-end gap-8 bg-custom-footer_signin_joobseeker px-16">
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

      <div className="mb-24 grid grid-cols-2">
        <div className="sticky top-0 h-min bg-[rgb(51,15,10)] p-16">
          <img src={batikImage} alt="" />
        </div>
        <div className="bg-[#F4FDAF] p-16">
          <div className="p-6">
            <article className="rounded-2xl bg-[rgb(51,15,10)] p-4 text-center text-white hover:underline">
              <a href="/sign-up/companies">
                Ingin membuat akun perusahaan? Kunjungi laman ini.
              </a>
            </article>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center gap-4  "
          >
            <img src={logoImage} alt="" className="h-16 w-16" />
            <div className="text-center text-custom-text_red">
              <p className="text-4xl font-bold">Dafter ke SpaceWork</p>
              <p className="text-3xl font-light ">
                sebagai{" "}
                <span className="text-3xl font-light italic">jobseeker</span>
              </p>
            </div>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm font-bold">Nama Lengkap</span>
              <input
                type="text"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="contoh: Ahmad Budi Cahyono"
                {...register("fullName")}
              />
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm font-bold">Email</span>
              <input
                type="email"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="contoh: ahmad.budi@email.com"
                {...register("email")}
              />
            </label>

            <label className="flex w-full flex-col ">
              <span className="mb-2 text-sm font-bold ">Password</span>
              <input
                type="password"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="minimal 8 digit"
                minLength={8}
                {...register("password")}
              />
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm font-bold">Tanggal Lahir</span>
              <input
                type="date"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="contoh: ahmad.budi@email.com"
                {...register("birthDate")}
              />
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm font-bold">Alamat Lengkap</span>
              <textarea
                required
                rows="4"
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                {...register("address")}
              ></textarea>
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm font-bold">Kota</span>
              <input
                type="text"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="contoh: Jakarta"
                {...register("cityCode")}
              />
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm font-bold">Negara</span>
              <input
                type="text"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="contoh: Indonesia"
                {...register("countryCode")}
              />
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm font-bold">
                Deskripsi tentang Diri Sendiri
              </span>
              <textarea
                required
                rows="4"
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                {...register("description")}
              ></textarea>
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm font-bold">Jenis Kelamin</span>
              <select
                className="w-full rounded bg-custom-bg_box_input py-3 px-4 text-opacity-60"
                {...register("gender")}
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="male" className="text-black">
                  Pria
                </option>
                <option value="female" className="text-black">
                  Wanita
                </option>
              </select>
            </label>

            <div className="mb8"></div>

            <button className="w-full rounded bg-custom-button py-3 px-4 text-white">
              Daftar
            </button>

            <span className="">
              Sudah punya akun?
              <a href="/login">
                <u className="font-bold">Login</u>
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUpJobseekerScreen;
