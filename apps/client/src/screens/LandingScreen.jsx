import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";

function LandingScreen() {
  return (
    <div className="bg-custom-light">
      <header className=" bg-custom-light-100 w-full flex items-center gap-8 px-16 top-0">
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
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li className="">
              <a href="#">Daftar</a>
            </li>
            <li>
              <a href="#">Masuk</a>
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
        <div className="px-16 py-8 bg-custom-secondary flex gap-8">
          <div className="box-1 px-4 py-2 flex rounded-3xl bg-white gap-2">
            <MagnifyingGlassIcon className="h-6 " />
            <input type="text" placeholder="Cari lowongan" />
          </div>
          <div className="px-4 py-2 flex rounded-3xl bg-white gap-2">
            <MapPinIcon className="h-6" />
            <input type="text" placeholder="Kota" />
          </div>
          <button className="px-4 py-2 flex rounded-3xl bg-custom-primary font-bold">
            Cari
          </button>
        </div>
        <div className="box-2 my-20 ml-28">
          <h2>DAFTAR SEKARANG, GRATIS!</h2>
          <button className="mt-7 bg-custom-button text-white rounded-xl p-2 font-bold">
            Daftar
          </button>
          <button className="mt-7 ml-12 bg-custom-button text-white p-2 rounded-xl font-bold">
            Masuk
          </button>
        </div>

        <div className="box-3">
          <h2>Punya Pertanyaan...</h2>
          <h2>seputar </h2>
        </div>
      </main>
      <footer className=" flex-col w-full">
        <div className="footer-1 w-full bg-custom-secondary py-16 justify-center flex ">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-5xl font-bold text-white">Raih pekerjaan impianmu!</h2>
            <button className=" bg-custom-primary rounded-xl p-2 font-bold  ">Daftar Sekarang</button>
          </div>
        </div>
        <div className="footer-2 bg-custom-footer w-full py-16 items-center">
          <h2 className="text-center text-white"> &copy; SpaceWorks</h2>
        </div>
      </footer>
    </div>
  );
}
export default LandingScreen;
