import { useMatch, useNavigate } from "@tanstack/react-location";
import axios from "axios";
import { useContext } from "react";
import logotextImage from "../assets/logotext.png";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import env from "../helpers/env";

function JobVacancyDetailScreen() {
  const {
    data: { jobVacancyDetail },
  } = useMatch();
  const { jobseeker } = useContext(AuthContext);

  return (
    <>
      <Header />

      <section className="p-16">
        <div className="mx-auto max-w-6xl">
          <article className="rounded-xl border-2 p-9 ">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">
                  {jobVacancyDetail?.title ?? ""}
                </p>
                <p className="mb-16">{jobVacancyDetail?.company?.name ?? ""}</p>
              </div>
              <div className="">
                {jobseeker ? (
                  <a
                    href={`/jobs/${jobVacancyDetail.id}/apply`}
                    className=" transform rounded-xl bg-custom-primary p-2  font-bold hover:scale-95"
                  >
                    Lamar pekerjaan
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>

            <p className="mb-4 font-semibold">Deskripsi</p>
            <p>{jobVacancyDetail.description}</p>
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
