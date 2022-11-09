import logotextImage from "../assets/logotext.png";

function JobVacancyDetailScreen() {
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

      <section className="p-16">
        <div className="mx-auto max-w-6xl">
          <article className="rounded-xl border-2 p-9 ">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">Quality Assurance </p>
                <p className="mb-16">Qasir</p>
              </div>
              <button className="flex h-min rounded-3xl bg-custom-primary px-4 py-2 font-bold">
                Lamar
              </button>
            </div>

            <p className="mb-4 font-semibold">Deskripsi</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis quidem ducimus nisi praesentium quos molestias
              perspiciatis ipsam dignissimos error tempora, quo quaerat veniam
              iste odit magni obcaecati porro fugiat impedit. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Incidunt molestias
              aspernatur a fugit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam nemo inventore nulla neque ea rem
              velit? Neque, quod repudiandae? Quaerat quae quas illum sit quo
              tenetur? Atque veniam corporis hic!
            </p>
          </article>
        </div>
      </section>

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
    </>
  );
}
export default JobVacancyDetailScreen;
