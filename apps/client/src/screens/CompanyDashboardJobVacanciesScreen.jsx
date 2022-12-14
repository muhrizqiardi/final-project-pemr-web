import { Link } from "@tanstack/react-location";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import env from "../helpers/env";

export default function CompanyDashboardJobVacanciesScreen() {
  const { company, token, isLoading: authIsLoading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [jobVacancies, setJobVacancies] = useState();

  const fetchJobVacancies = async () => {
    try {
      const result = await axios.get(`${env.API_URL}/job-vacancies`, {
        params: {
          companyId: company.id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobVacancies(result.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (company) fetchJobVacancies();
  }, [company]);

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
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="../edit-profile">Edit profil perusahaan</Link>
            </li>
            <li className="rounded-md px-3 py-2 font-bold">
              Daftar lowongan yang telah dibuat
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

        <section className="col-span-2 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Daftar Lowongan yang Telah Dibuat
          </h2>

          <div className="flex flex-col gap-3">
            {jobVacancies?.map((jobVacancy, index) => (
              <a key={index} href="/jobs/1">
                <article className="rounded-xl border-2 p-9 hover:bg-gray-50">
                  <p className="text-xl font-bold">{jobVacancy.title}</p>
                  <p className="mb-2">{jobVacancy.company.name}</p>
                </article>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
