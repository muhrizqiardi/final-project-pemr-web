function LoginScreen() {
  return (
    <>
      <div className="h-screen bg-custom-light">
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

        <main className="loginPage justify-center ">
          <div className="mb-24 grid grid-cols-2">
            <div className="sticky top-0 h-min bg-[rgb(51,15,10)] p-16">
              <img src="./src/assets/batik-signup-jobseeker.png" alt="" />
            </div>
            <div className="bg-[#F4FDAF] p-16">
              <form
                action=""
                className="flex flex-col items-center justify-center gap-4  "
              >
                <img
                  src="./src/assets/[Transparent Background] [Shape Only] SpaceWork LOGO - 160922.png"
                  alt=""
                  className="h-16 w-16"
                />
                <div className="text-center text-custom-text_red">
                  <p className="text-4xl font-bold">Dafter ke SpaceWork</p>
                  <p className="text-3xl font-light">
                    sebagai <span className="italic">jobseeker</span>
                  </p>
                </div>

                <div className="username h-15 relative mb-4 flex w-full flex-wrap items-center  rounded bg-custom-bg_box_input pr-10">
                  <div className="w-15 -mr-px flex justify-center p-4">
                    <span className="flex items-center rounded rounded-r-none border-0 bg-custom-bg_box_input px-3 text-2xl leading-normal text-gray-600">
                      <i className="fas fa-user-circle"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="border-grey-light font-roboto relative h-10 w-px flex-1 flex-shrink flex-grow self-center rounded rounded-l-none border-0  bg-custom-bg_box_input px-3  text-xl leading-normal outline-none"
                    placeholder="Username"
                  />
                </div>
                <div className="password    h-15 relative mb-4 flex w-full flex-wrap  items-stretch rounded bg-custom-bg_box_input">
                  <div className="w-15 -mr-px flex justify-center p-4">
                    <span className="whitespace-no-wrap flex items-center rounded rounded-r-none bg-custom-bg_box_input px-3 text-xl leading-normal text-gray-600">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="font-roboto relative h-10 w-px flex-auto  flex-shrink flex-grow self-center border-0 bg-custom-bg_box_input px-3 text-xl leading-normal outline-none"
                    placeholder="Password"
                  />
                  <div className="-mr-px flex">
                    <span className="whitespace-no-wrap flex items-center rounded rounded-l-none border-0 bg-custom-bg_box_input px-3 leading-normal text-gray-600">
                      <i className="fas fa-eye-slash"></i>
                    </span>
                  </div>
                </div>
                <div className="mb8"></div>

                <div className="flex flex-row">
                  <div className="mr-auto">
                    <input type="checkbox" />
                  </div>
                  <div>
                    <span>
                      <a href="">
                        <u>Lupa Kata Sandi</u>
                      </a>
                    </span>
                  </div>
                </div>

                <button className="w-full rounded bg-custom-button py-3 px-4 text-white">
                  Daftar
                </button>
                <button className="w-full rounded bg-custom-button py-3 px-4 text-white">
                  Masuk dengan Akun Google
                </button>

                <span className="py-3 px-4">
                  Belum punya akun?
                  <a href="/sign-up">
                    <u className="font-bold">Sign Up</u>
                  </a>
                </span>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default LoginScreen;
