import { Link } from "@tanstack/react-location";
import { useEffect, useState } from "react";
import { useContext } from "react";
import logotextImage from "../assets/logotext.png";
import { AuthContext } from "../helpers/AuthContext";
import axiosInstance from "../helpers/axiosInstance";

export default function CompanyDashboardJobVacanciesScreen() {
  const { user: company, isLoading: authIsLoading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [companyData, setCompanyData] = useState();

  const getCompany = async () => {
    try {
      const result = await axiosInstance.get(`/companies/${company.id}`);

      setCompanyData(result.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log({ companyData });

  if (authIsLoading && isLoading) return <>Loading...</>;

  useEffect(() => {
    if (!authIsLoading) getCompany();
  }, []);

  return (
    <>
      <header className="bg-custom-light-100 top-0 flex h-36 w-full items-center gap-8 px-16">
        <div className="logo">
          <img src={logotextImage} alt="" className="h-36" />
        </div>
        <ul className="flex flex-grow gap-8">
          <li>
            <a href="#">Cari Lowongan</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li className="mr-auto">
            <a href="#">Tentang Kami</a>
          </li>
          <li className="ml-auto">
            <a href="/sign-up">Daftar</a>
          </li>
          <li>
            <a href="/login">Masuk</a>
          </li>
        </ul>
      </header>

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
              <Link to="edit-profile">Edit profil perusahaan</Link>
            </li>
            <li className="rounded-md px-3 py-2 font-bold">
              Daftar lowongan yang telah dibuat
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="create-job-vacancies">
                Membuat lowongan pekerjaan baru
              </Link>
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="applications">Lamaran yang diterima</Link>
            </li>
          </ul>
        </section>

        <section className="col-span-2 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Daftar Lowongan yang Telah Dibuat
          </h2>

          <div className="flex flex-col gap-3">
            <a href="/jobs/1">
              <article className="rounded-xl border-2 p-9 hover:bg-gray-50">
                <p className="text-xl font-bold">Quality Assurance </p>
                <p className="mb-2">Qasir</p>
                <p className="text-gray-700">Pengalaman min. 1 tahun</p>
              </article>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
