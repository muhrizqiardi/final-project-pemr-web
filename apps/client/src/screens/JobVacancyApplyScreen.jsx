import { useMatch, useNavigate } from "@tanstack/react-location";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import logotextImage from "../assets/logotext.png";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import env from "../helpers/env";

function JobVacancyApplyScreen() {
  const {
    data: { jobVacancyDetail },
  } = useMatch();
  const { jobseeker, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleApplyJob = async (data) => {
    try {
      const result = await axios.post(
        `${env.API_URL}/applications`,
        {
          jobVacancyId: jobVacancyDetail.id,
          coverLetter: data.coverLetter
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!result) throw new Error("Gagal mendaftar pekerjaan");
    } catch (error) {
      console.error(error);
    } finally {
      navigate({ to: "/jobseeker-dashboard/applications" });
    }
  };

  return (
    <>
      <Header />

      <section className="p-16">
        <div className="mx-auto max-w-3xl">
          <form
            onSubmit={handleSubmit(handleApplyJob)}
            className="rounded-xl border-2 p-9 "
          >
            <p className="text-2xl font-bold">
              {jobVacancyDetail?.title ?? ""}
            </p>
            <p className="mb-8">{jobVacancyDetail?.company?.name ?? ""}</p>

            <label className="mb-4 flex flex-col">
              <span className="mb-1">Cover letter</span>
              <textarea
                rows={10}
                className="rounded-lg border-b border-black bg-neutral-300 px-4 py-3 outline-none"
                {...register("coverLetter")}
              />
            </label>

            <button className=" transform rounded-xl bg-custom-primary p-2  font-bold hover:scale-95">
              Lamar pekerjaan
            </button>
          </form>
        </div>
      </section>

      <footer className=" w-full flex-col">
        <div className="footer-1 flex w-full justify-center bg-custom-secondary py-16 ">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-5xl font-bold text-white">
              Raih pekerjaan impianmu!
            </h2>
            <a
              href="apply"
              className=" transform rounded-xl bg-custom-primary p-2  font-bold hover:scale-95"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
        <div className="footer-2 w-full items-center bg-custom-footer py-16">
          <h2 className="text-center text-white"> &copy; SpaceWorks</h2>
        </div>
      </footer>
    </>
  );
}
export default JobVacancyApplyScreen;
