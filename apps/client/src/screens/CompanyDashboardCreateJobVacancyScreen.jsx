import { Link } from "@tanstack/react-location";
import { useContext } from "react";
import logotextImage from "../assets/logotext.png";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import env from "../helpers/env";

export default function CompanyDashboardCreateJobVacancyScreen() {
  const { company, token, isLoading } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await axios.post(`${env.API_URL}/job-vacancies`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      window.location.pathname = `/jobs/${result.data.data.id}`;
    } catch (error) {
      console.error(error);
    }
  };

  console.log({ company });

  if (isLoading) return "Loading...";

  if (company)
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
              <li className="rounded-md px-3 py-2 hover:bg-gray-100">
                <Link to="../job-vacancies">Edit profil perusahaan</Link>
              </li>
              <li className="rounded-md px-3 py-2 hover:bg-gray-100">
                <Link to="../job-vacancies">
                  Daftar lowongan yang telah dibuat
                </Link>
              </li>
              <li className="rounded-md px-3 py-2 font-bold">
                Membuat lowongan pekerjaan baru
              </li>
              <li className="rounded-md px-3 py-2 hover:bg-gray-100">
                <Link to="../applications">Lamaran yang diterima</Link>
              </li>
            </ul>
          </section>

          <section className="col-span-2 p-6">
            <h2 className="mb-4 text-2xl font-bold">
              Membuat Lowongan Pekerjaan Baru
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <label className="flex flex-col">
                <span className="mb-1">Judul Pekerjaan</span>
                <input
                  type="text"
                  className="rounded-lg border-b border-black bg-neutral-300 px-4 py-3 outline-none"
                  {...register("title")}
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-1">Deskripsi Pekerjaan</span>
                <textarea
                  rows={10}
                  className="rounded-lg border-b border-black bg-neutral-300 px-4 py-3 outline-none"
                  {...register("description")}
                />
              </label>

              <button className="flex w-min rounded-3xl bg-custom-primary px-4 py-2 font-bold">
                Submit
              </button>
            </form>
          </section>
        </div>
      </>
    );
}
