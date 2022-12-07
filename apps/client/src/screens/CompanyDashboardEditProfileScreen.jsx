import { Link } from "@tanstack/react-location";
import logotextImage from "../assets/logotext.png";
import Footer from "../components/Footer";

export default function CompanyDashboardEditProfileScreen() {
  console.log("bebek");

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
            <li className="rounded-md px-3 py-2 font-bold">
              Edit profil perusahaan
            </li>
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="job-vacancies">Daftar lowongan yang telah dibuat</Link>
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
        <section className="p-6 text-3xl">
          <h1 className="font-bold">Edit Profil Perusahaan</h1>
          <p className="mx-3 mt-8 text-sm ">Gambar Profil</p>
          <div className="grid grid-cols-3 p-4">
            <img
              className="w-20 rounded-full"
              src="https://play-lh.googleusercontent.com/CSI0B9GfUsfUPcWY3CJ9sFIvoF2jseK7FR8mRE6jrRMf5fwYBBOJDxSGhW-8CFRoKA8"
              alt=""
            />
            <a href="" className="py-6 px-3 text-sm">
              <p>Ubah Gambar</p>
            </a>
          </div>
          <form action="p-16">
            <div className="flex flex-col py-8">
              <label htmlFor="" className=" mb-2 text-sm font-bold">
                Nama Perusahaan
              </label>
              <input
                type="text"
                className="h-10 bg-custom-bg_box_input text-lg"
              />
            </div>
            <div className="flex flex-col py-6">
              <label htmlFor="" className="mb-2 text-sm font-bold">
                Deskripsi tentang Perusahaan
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="bg-custom-bg_box_input text-lg"
              ></textarea>
            </div>
            <button className="  mb-8 rounded-lg bg-yellow-500 p-2 text-base hover:font-bold">
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
