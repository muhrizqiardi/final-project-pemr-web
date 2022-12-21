import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";

function LandingScreen() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="bg-custom-light">
      <Header />
      <main className="home bg-custom-light-100 w-full">
        <div className="ml-20 mb-8 flex font-bold">
          <h1 className="text-5xl">
            Temukan Pekerjaan <br /> Remote Impianmu
          </h1>
        </div>
        <form
          action="/search-jobs"
          className="flex gap-8 bg-custom-secondary px-16 py-8"
        >
          <div className="box-1 flex gap-2 rounded-3xl bg-white px-4 py-2">
            <MagnifyingGlassIcon className="h-6 " />
            <input type="text" placeholder="Cari lowongan" name="q" />
          </div>
          <button className="flex rounded-3xl bg-custom-primary px-4 py-2 font-bold">
            Cari
          </button>
        </form>
      </main>

      <div className="my-12 mx-auto grid max-w-4xl grid-cols-3 p-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={128}
          height={128}
          viewBox="0 0 24 24"
          style={{ fill: "currentcolor", transform: "", msfilter: "" }}
          className="text-custom-text_red"
        >
          <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v4h5v-2h2v2h6v-2h2v2h5V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 11h-2v-2H9v2H7v-2H2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6h-5v2z" />
        </svg>

        <div className="col-span-2 flex flex-col justify-center">
          <p className="text-3xl font-semibold text-custom-text_red ">
            Lowongan Kerja Remote Lengkap
          </p>
        </div>
      </div>

      <div className="my-12 mx-auto grid max-w-4xl grid-cols-3 p-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={128}
          height={128}
          viewBox="0 0 24 24"
          style={{ fill: "currentcolor", transform: "", msfilter: "" }}
          className="text-custom-text_red"
        >
          <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
        </svg>

        <div className="col-span-2 flex flex-col justify-center">
          <p className="text-3xl font-semibold text-custom-text_red ">
            Perusahaan Terpercaya
          </p>
        </div>
      </div>

      <footer className=" w-full flex-col">
        {!isAuthenticated ? (
          <div className="footer-1 flex w-full justify-center bg-custom-secondary py-16 ">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-5xl font-bold text-white">
                Raih pekerjaan impianmu!
              </h2>
              <button className=" rounded-xl bg-custom-primary p-2 font-bold  ">
                Daftar Sekarang
              </button>
            </div>
          </div>
        ) : null}
        <div className="footer-2 w-full items-center bg-custom-footer py-16">
          <h2 className="text-center text-white"> &copy; SpaceWorks</h2>
        </div>
      </footer>
    </div>
  );
}
export default LandingScreen;
