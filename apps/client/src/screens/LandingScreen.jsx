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
      <main className="home my-6 ml-20  bg-custom-light-100 w-full">
        <div className="box-1 flex left-4 font-bold">
          <h1 className="text-5xl">Temukan Pekerjaan <br /> Freelance Impianmu</h1>
        </div>
      </main>
      <footer className=" bg-custom-footer flex justify-center w-full p-16">
        <h2> &copy; SpaceWorks</h2>
      </footer>
    </div>
  );
}
export default LandingScreen;
