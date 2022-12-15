import { Link } from "@tanstack/react-location";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import logotextImage from "../assets/logotext.png";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import env from "../helpers/env";

export default function CompanyDashboardApplicationsScreen() {
  const { company, token, isLoading: authIsLoading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [applications, setApplications] = useState();

  const fetchJobVacancies = async () => {
    try {
      const result = await axios.get(`${env.API_URL}/applications`, {
        params: {
          companyId: company.id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setApplications(result.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRespond = async (applicationId, status) => {
    try {
      const result = await axios.patch(
        `${env.API_URL}/applications/${applicationId}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.pathname = "/company-dashboard/applications";
    } catch (error) {
      console.error(error);
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
        <h1 className="mb-6 text-6xl font-bold">Qasir</h1>
        <p className="mb-4 text-lg font-bold">Tentang perusahaan</p>
        <p>
          Qasir adalah aplikasi point of sale (POS) yang mendukung sistem kasir
          digital, fitur kelola produk dan inventori, laporan penjualan,
          pembayaran digital.
        </p>
      </section>

      <div className="grid grid-cols-3 p-16">
        <section className="border-r border-r-gray-400 p-6">
          <ul className="flex flex-col gap-4 text-end">
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="../edit-profile">Edit profil perusahaan</Link>
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="../applications">
                Daftar lowongan yang telah dibuat
              </Link>
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="../create-job-vacancy">
                Membuat lowongan pekerjaan baru
              </Link>
            </li>
            <li className="rounded-md px-3 py-2 font-bold">
              Lamaran yang diterima
            </li>
          </ul>
        </section>

        <section className="col-span-2 p-6">
          <h2 className="mb-4 text-2xl font-bold">Lamaran yang Diterima</h2>

          <div className="flex flex-col gap-6">
            {applications?.map((application, index) => (
              <article key={index}>
                <div className="mb-2 flex items-center gap-3">
                  <p>
                    <span>by </span>
                    <span className="font-semibold">
                      {application.jobseeker.fullName}
                    </span>
                  </p>
                </div>
                <article className="rounded-xl border-2 p-9">
                  <p className="text-xl font-bold">
                    {application.jobVacancy.title}
                  </p>
                  <p className="mb-6">{application.jobVacancy.company.name}</p>

                  <details className="mb-6">
                    <summary>Cover letter</summary>
                    <p>{application.coverLetter}</p>
                  </details>

                  <div className="flex gap-4">
                    <button
                      onClick={() => handleRespond(application.id, "ACCEPTED")}
                      className="flex w-min rounded-3xl bg-green-400 px-4 py-2 font-bold hover:bg-green-600"
                    >
                      Terima
                    </button>
                    <button
                      onClick={() => handleRespond(application.id, "REJECTED")}
                      className="flex w-min rounded-3xl bg-red-400 px-4 py-2 font-bold hover:bg-red-600"
                    >
                      Tolak
                    </button>
                  </div>
                </article>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
