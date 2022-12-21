import Header from "../components/Header";
function DetailApplication() {
  return (
    <>
      <Headers />
      <section className="col-span-2 p-6">
        <h2 className="mb-4 text-2xl font-bold">Lamaran yang Diterima</h2>

        <div className="flex flex-col gap-6">
          <article>
            <div className="mb-2 flex items-center gap-3">
              <img
                src="https://thispersondoesnotexist.com/image"
                className="h-6 w-6 rounded-full"
                />
              <p>
                <span>by </span>
                <span className="font-semibold">Fulan binti Mulan</span>
                <span> 1h ago</span>
              </p>
            </div>
            <a href="/jobs/1">
              <article className="rounded-xl border-2 p-9 hover:bg-gray-50">
                <p className="text-xl font-bold">Quality Assurance </p>
                <p className="mb-2">Qasir</p>
                <p className="text-gray-700">Pengalaman min. 1 tahun</p>
              </article>
            </a>
          </article>

        
          <article>
            <div className="mb-2 flex items-center gap-3">
              <img
                src="https://thispersondoesnotexist.com/image"
                className="h-6 w-6 rounded-full"
                />
              <p>
                <span>by </span>
                <span className="font-semibold">Fulan binti Mulan</span>
                <span> 1h ago</span>
              </p>
            </div>
            <a href="/jobs/1">
              <article className="rounded-xl border-2 p-9 hover:bg-gray-50">
                <p className="text-xl font-bold">Quality Assurance </p>
                <p className="mb-2">Qasir</p>
                <p className="text-gray-700">Pengalaman min. 1 tahun</p>
              </article>
            </a>
          </article>
        </div>
      </section>

      div
    </>
  );
}

export default DetailApplication ;