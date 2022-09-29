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
          <div className="mb-12 flex flex-col items-center">
            <form
              action=""
              className=" mb-8 flex flex-col items-center bg-custom-bg_card_form p-12"
            >
              <div className="m-10 flex flex-col items-center">
                <h2 className="items-center text-4xl  font-extrabold text-custom-text_red">
                  Masuk ke SpaceWorks
                </h2>
                <h4 className="">
                  atau{" "}
                  <a href="">
                    <u className="font-bold">buat akun baru</u>
                  </a>
                </h4>
              </div>
              <div className="username h-15 relative mb-4  flex w-full flex-wrap items-center  rounded bg-custom-bg_box_input pr-10">
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
              <a
                href="#"
                className="font-roboto mb-6 text-right text-base font-bold leading-normal text-black hover:underline"
              >
                Forget Password ?
              </a>
              <a
                href="/"
                className="px-17 m-15 mt-4 mb-20 rounded bg-custom-text_red text-center font-sans text-xl leading-tight text-white md:px-12 md:py-4 md:text-base"
              >
                Login
              </a>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default LoginScreen;
