function Footer() {
  return (
    <footer className=" flex-col w-full">
      <div className="footer-1 w-full bg-custom-secondary py-16 justify-center flex ">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-5xl font-bold text-white">
            Raih pekerjaan impianmu!
          </h2>
          <button className=" bg-custom-primary rounded-xl p-2 font-bold  ">
            Daftar Sekarang
          </button>
        </div>
      </div>
      <div className="footer-2 bg-custom-footer w-full py-16 items-center">
        <h2 className="text-center text-white"> &copy; SpaceWorks</h2>
      </div>
    </footer>
  );
}
export default Footer;
