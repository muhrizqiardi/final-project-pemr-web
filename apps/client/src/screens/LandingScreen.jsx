import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";

function LandingScreen() {
  return (
    <div className="bg-custom-light">
      <header className=" bg-custom-light-100 top-0 flex w-full items-center gap-8 px-16">
        <div className="logo">
          <img
            src="./src/assets/[Transparet Background] SpaceWork LOGO - 160922.png"
            alt=""
            className="w-36"
          />
        </div>
        <div className="">
          <ul className="flex gap-8">
            <li>
              <a href="#">Cari Lowongan</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li className="mr-auto">
              <a href="#">Tentang Kami</a>
            </li>
            <li className="">
              <a href="/sign-up">Daftar</a>
            </li>
            <li>
              <a href="/login">Masuk</a>
            </li>
          </ul>
        </div>
      </header>
      <main className="home bg-custom-light-100 w-full">
        <div className="ml-20 mb-8 flex font-bold">
          <h1 className="text-5xl">
            Temukan Pekerjaan <br /> Freelance Impianmu
          </h1>
        </div>
        <div className="flex gap-8 bg-custom-secondary px-16 py-8">
          <div className="box-1 flex gap-2 rounded-3xl bg-white px-4 py-2">
            <MagnifyingGlassIcon className="h-6 " />
            <input type="text" placeholder="Cari lowongan" />
          </div>
          <div className="flex gap-2 rounded-3xl bg-white px-4 py-2">
            <MapPinIcon className="h-6" />
            <input type="text" placeholder="Kota" />
          </div>
          <button className="flex rounded-3xl bg-custom-primary px-4 py-2 font-bold">
            Cari
          </button>
        </div>
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
