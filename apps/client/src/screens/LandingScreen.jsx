import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import logotextImage from "../assets/logotext.png";
import Header from "../components/Header";

function LandingScreen() {
  return (
    <div className="bg-custom-light">
      <Header />
      <main className="home bg-custom-light-100 w-full">
        <div className="ml-20 mb-8 flex font-bold">
          <h1 className="text-5xl">
            Temukan Pekerjaan <br /> Freelance Impianmu
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
        <div className="box-2 my-20 ml-28">
          <h2>DAFTAR SEKARANG, GRATIS!</h2>
          <button className="mt-7 rounded-xl bg-custom-button p-2 font-bold text-white">
            Daftar
          </button>
          <button className="mt-7 ml-12 rounded-xl bg-custom-button p-2 font-bold text-white">
            Masuk
          </button>
        </div>

        <div className="box-3">
          <h2>Punya Pertanyaan...</h2>
          <h2>seputar </h2>
        </div>
      </main>
      <footer className=" w-full flex-col">
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
        <div className="footer-2 w-full items-center bg-custom-footer py-16">
          <h2 className="text-center text-white"> &copy; SpaceWorks</h2>
        </div>
      </footer>
    </div>
  );
}
export default LandingScreen;
