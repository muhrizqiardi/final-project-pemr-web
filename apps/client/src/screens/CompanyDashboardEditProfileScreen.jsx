import { Link } from "@tanstack/react-location";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import env from "../helpers/env";

export default function CompanyDashboardEditProfileScreen() {
  const { register, handleSubmit } = useForm();
  const { company, token, isLoading: authIsLoading } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const _ = await axios.patch(
        `${env.API_URL}/companies/${company.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  if (authIsLoading) return null;

  return (
    <>
      <Header />

      <section className="bg-[#691D1D] p-16 text-white">
        <h1 className="mb-6 text-6xl font-bold">{company.name}</h1>
        <p className="mb-4 text-lg font-bold">Tentang perusahaan</p>
        <p>{company.description}</p>
      </section>

      <div className="grid grid-cols-3 p-16">
        <section className="border-r border-r-gray-400 p-6">
          <ul className="flex flex-col gap-4 text-end">
            <li className="rounded-md px-3 py-2 font-bold">
              Edit profil perusahaan
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="../job-vacancies">
                Daftar lowongan yang telah dibuat
              </Link>
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="../create-job-vacancy">
                Membuat lowongan pekerjaan baru
              </Link>
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="../applications">Lamaran yang diterima</Link>
            </li>
          </ul>
        </section>
        <section className="p-6">
          <h1 className="mb-4 text-3xl font-bold">Edit Profil Perusahaan</h1>
          {/* <p className="mx-3 mt-8 text-sm ">Gambar Profil</p>
          <div className="grid grid-cols-3 p-4">
            <img
              className="w-20 rounded-full"
              src="https://play-lh.googleusercontent.com/CSI0B9GfUsfUPcWY3CJ9sFIvoF2jseK7FR8mRE6jrRMf5fwYBBOJDxSGhW-8CFRoKA8"
              alt=""
            />
            <a href="" className="py-6 px-3 text-sm">
              <p>Ubah Gambar</p>
            </a>
          </div> */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col">
              <span className="mb-1">Nama</span>
              <input
                type="text"
                className="rounded-lg border-b border-black bg-neutral-300 px-4 py-3 outline-none"
                defaultValue={company.name}
                {...register("name")}
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1">Deskripsi</span>
              <textarea
                rows={10}
                className="rounded-lg border-b border-black bg-neutral-300 px-4 py-3 outline-none"
                defaultValue={company.description}
                {...register("description")}
              />
            </label>

            <button
              type="submit"
              className="flex w-min rounded-3xl bg-custom-primary px-4 py-2 font-bold"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
