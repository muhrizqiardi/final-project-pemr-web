function SignUpJobseekerScreen() {
  return (
    <div className="overflow-y-autobg-custom-light h-screen">
      <header className="bg-custom-light-100 top-0 mb-12 flex w-full items-center justify-end gap-8 px-16">
        <div className=" logo mr-auto">
          <img
            src="./src/assets/[Transparet Background] SpaceWork LOGO - 160922.png"
            alt=""
            className=" w-36"
          />
        </div>
        <div className="">
          <ul className="flex justify-end gap-8">
            <li className="">
              Kembali ke{" "}
              <a href="/" className="justify-end font-bold">
                <u>home page</u>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="mb-24 grid grid-cols-2">
        <div className="h-min bg-[rgb(51,15,10)] p-16 sticky top-0">
          <img src="./src/assets/batik-signup-jobseeker.png" alt="" />
        </div>
        <div className="bg-[#F4FDAF] p-16">
          <form
            action=""
            className="flex flex-col items-center justify-center gap-4  "
          >
            <div className="text-center text-custom-text_red">
              <p className="text-4xl font-bold">Dafter ke SpaceWork</p>
              <p className="">
                sebagai <span className="italic">jobseeker</span>
              </p>
            </div>
            <img
              src="./src/assets/[Transparent Background] [Shape Only] SpaceWork LOGO - 160922.png"
              alt=""
              className="h-16 w-16"
            />
            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm">Email</span>
              <input
                type="email"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="contoh: ahmad.budi@email.com"
              />
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm">Nama Lengkap</span>
              <input
                type="text"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="contoh: Ahmad Budi Cahyono"
              />
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm">Password</span>
              <input
                type="text"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="minimal 8 digit"
              />
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm">Alamat Lengkap</span>
              <textarea
                required
                rows="4"
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
              ></textarea>
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm">Nomor Telepon</span>
              <input
                type="tel"
                required
                className="w-full rounded bg-custom-bg_box_input py-3 px-4"
                placeholder="contoh: 0812345678"
              />
            </label>

            <label className="flex w-full flex-col">
              <span className="mb-2 text-sm">Jenis Kelamin</span>
              <select
                name=""
                id=""
                className="w-full rounded bg-custom-bg_box_input py-3 px-4 text-opacity-60"
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="" className="text-black">
                  Pria
                </option>
                <option value="" className="text-black">
                  Wanita
                </option>
              </select>
            </label>

            <div className="mb8"></div>

            <button className="w-full rounded bg-custom-button py-3 px-4 text-white">
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUpJobseekerScreen;
