import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import logotextImage from "../assets/logotext.png";
import JobVacancyCard from "../components/JobVacancyCard";
import Spinner from "../components/Spinner";
import axiosInstance from "../helpers/axiosInstance";
import useError from "../helpers/useError";

function SearchScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const { isError, setError } = useError();
  const [searchResultData, setSearchResultData] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const fetchResult = async () => {
    try {
      const response = await axiosInstance.get("/job-vacancies", {
        params: {
          title: new URLSearchParams(window.location.search).get("q"),
        },
      });
      setSearchResultData(response.data.data);
    } catch (error) {
      setError(true, error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResult();
  }, [searchQuery]);

  return (
    <div className="bg-white">
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
            <a href="/sign-up/jobseekers">Daftar</a>
          </li>
          <li>
            <a href="/login/jobseekers">Masuk</a>
          </li>
        </ul>
      </header>
      <main className="home bg-custom-light-100 w-full">
        <form className="flex gap-8 bg-custom-secondary px-16 py-8">
          <div className="box-1 flex gap-2 rounded-3xl bg-white px-4 py-2">
            <MagnifyingGlassIcon className="h-6 " />
            <input
              name="q"
              type="search"
              placeholder="Cari lowongan"
              defaultValue={new URLSearchParams(window.location.search).get(
                "q"
              )}
            />
          </div>
          <button
            type="submit"
            className="flex rounded-3xl bg-custom-primary px-4 py-2 font-bold"
          >
            Cari
          </button>
        </form>

        <div className="mx-auto flex max-w-6xl flex-col gap-4 p-4">
          {isLoading ? <Spinner /> : null}
          {!isLoading && !isError
            ? searchResultData.map((job) => (
                <JobVacancyCard
                  title={job.title}
                  jobId={job.id}
                  companyName={job.company.name}
                />
              ))
            : null}
        </div>
      </main>
      <footer className=" w-full flex-col">
        <div className="footer-2 w-full items-center bg-custom-footer py-16">
          <h2 className="text-center text-white"> &copy; SpaceWorks</h2>
        </div>
      </footer>
    </div>
  );
}

export default SearchScreen;
