import { Link } from "@tanstack/react-location";
import logotextImage from "../assets/logotext.png";

export default function CompanyDashboardCreateJobVacancyScreen() {
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
              <Link to="job-vacancies">Edit profil perusahaan</Link>
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="job-vacancies">Daftar lowongan yang telah dibuat</Link>
            </li>
            <li className="rounded-md px-3 py-2 font-bold">
              Membuat lowongan pekerjaan baru
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="applications">Lamaran yang diterima</Link>
            </li>
          </ul>
        </section>

        <section className="col-span-2 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Membuat Lowongan Pekerjaan Baru
          </h2>

          <form className="flex flex-col gap-3">
            <label className="flex flex-col">
              <span className="mb-1">Judul Pekerjaan</span>
              <input
                type="text"
                className="rounded-lg border-b border-black bg-neutral-300 px-4 py-3 outline-none"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1">Deskripsi Pekerjaan</span>
              <textarea
                rows={10}
                className="rounded-lg border-b border-black bg-neutral-300 px-4 py-3 outline-none"
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
