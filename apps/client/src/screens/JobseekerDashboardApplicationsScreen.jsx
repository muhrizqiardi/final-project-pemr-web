import Footer from "../components/Footer";
import { Link } from "@tanstack/react-location";
import Header from "../components/Header";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import axios from "axios";
import env from "../helpers/env";

function JobseekerDashboardApplicationsScreen() {
  const {
    jobseeker,
    token,
    isLoading: authIsLoading,
  } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [applications, setApplications] = useState();

  const fetchApplications = async () => {
    try {
      const result = await axios.get(`${env.API_URL}/applications`, {
        params: {
          jobseekerId: jobseeker.id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setApplications(result.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [jobseeker]);

  if (authIsLoading) return null;

  return (
    <>
      <Header />

      <section className="bg-[#691D1D] p-16 text-white">
        <h1 className="mb-6 text-6xl font-bold">{jobseeker.fullName}</h1>
        <p className="mb-4 text-lg font-bold">Jobseeker</p>
      </section>

      <div className="grid grid-cols-4 p-16">
        <section className="border-r border-r-gray-400 p-6">
          <ul className="flex flex-col gap-4 text-end">
            <li className="rounded-md px-3 py-2 hover:bg-gray-100">
              <Link to="/jobseeker-dashboard/edit-profile">Edit profil</Link>
            </li>
            <li className="rounded-md px-3 py-2 font-bold">Lamaran</li>
          </ul>
        </section>
        <section className="col-span-3 p-6">
          <h1 className="mb-6 text-3xl font-bold">Lamaran</h1>
          {isLoading ? <Spinner /> : null}
          {!isLoading ? (
            <div className="flex flex-col gap-6">
              {applications?.map((application) => (
                <a href={`/jobs/${application.jobVacancy.id}`}>
                  <article className="rounded-xl border-2 p-9 hover:bg-gray-50">
                    <p className="text-xl font-bold">
                      {application.jobVacancy.title}
                    </p>
                    <p className="mb-2">
                      {application.jobVacancy.company.name}
                    </p>
                    <div className="w-fit rounded-full bg-black px-3 py-2 text-xs text-white">
                      {
                        {
                          NOT_YET_RESPONDED: "Belum ditanggapi",
                          ACCEPTED: "Diterima",
                          REJECTED: "Ditolak",
                        }[application.status]
                      }
                    </div>
                  </article>
                </a>
              ))}
            </div>
          ) : null}
        </section>
      </div>
      <Footer />
    </>
  );
}
export default JobseekerDashboardApplicationsScreen;
