function LandingScreen() {
  return (
    <div>
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
      <main className="home m-96">
        <h2>Main</h2>
      </main>
      <footer className=" bg-custom-footer flex items-center w-full p-16">
        <h2> &copy; SpaceWorks</h2>
      </footer>
    </div>
  );
}
export default LandingScreen;
