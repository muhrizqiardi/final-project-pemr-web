function LandingScreen() {
  return (
    <div className="bg-custom-light-100">
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
              <a href="">Cari Lowongan</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Komunitas</a>
            </li>
            <li>
              <a href="">Tentang Kami</a>
            </li>
            <li className="">
              <a href="">Daftar</a>
            </li>
            <li>
              <a href="">Masuk</a>
            </li>
          </ul>
        </div>
      </header>
      <main className="home my-6 bg-custom-light-100 w-full">
        <div className="ml-20 mb-8 flex font-bold">
          <h1 className="text-5xl">
            Temukan Pekerjaan <br /> Freelance Impianmu
          </h1>
        </div>
        <div className="px-16 py-8 bg-custom-secondary flex gap-8">
          <div className="px-4 py-2 flex rounded-3xl bg-white">
            <input type="text" placeholder="Cari lowongan" />
          </div>
          <div className="px-4 py-2 flex rounded-3xl bg-white">
            <input type="text" placeholder="Kota" />
          </div>
          <button className="px-4 py-2 flex rounded-3xl bg-custom-primary">
            Cari
          </button>
        </div>
      </main>
      <footer className=" bg-custom-footer flex justify-center w-full p-16">
        <h2> &copy; SpaceWorks</h2>
      </footer>
    </div>
  );
}
export default LandingScreen;
