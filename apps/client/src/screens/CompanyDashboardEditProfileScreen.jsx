import { Link } from "@tanstack/react-location";
import logotextImage from "../assets/logotext.png";

export default function CompanyDashboardEditProfileScreen() {
  console.log("bebek")

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
            <li className="px-3 py-2 rounded-md font-bold">
              Edit profil perusahaan
            </li>
            <li className="px-3 py-2 rounded-md hover:bg-gray-100">
              <Link to="job-vacancies">Daftar lowongan yang telah dibuat</Link>
            </li>
            <li className="px-3 py-2 rounded-md hover:bg-gray-100">
              <Link to="create-job-vacancies">Membuat lowongan pekerjaan baru</Link>
            </li>
            <li className="px-3 py-2 rounded-md hover:bg-gray-100">
              <Link to="applications">Lamaran yang diterima</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
