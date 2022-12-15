import { useContext } from "react";
import logotextImage from "../assets/logotext.png";
import { AuthContext } from "../contexts/AuthContext";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const User = ({ jobseeker, company, loading, isAuthenticated }) => {
  if (loading) return <></>;

  if (!isAuthenticated)
    return (
      <>
        <li className="ml-auto">
          <a href="/sign-up/jobseekers">Daftar</a>
        </li>
        <li>
          <a href="/login/jobseekers">Masuk</a>
        </li>
      </>
    );

  if (company)
    return (
      <div className="flex items-center gap-2">
        <article className="rounded-md border-2 py-2 px-2.5">
          <p className="text-sm">
            <a href="/company-dashboard/edit-profile">{company.name}</a>
          </p>
          <p className="text-xs text-gray-700">Company</p>
        </article>
        <button>
          <ArrowRightOnRectangleIcon className="h-16 w-6" />
        </button>
      </div>
    );

  if (jobseeker)
    return (
      <div className="flex items-center gap-2">
        <article className="rounded-md border-2 py-2 px-2.5">
          <p className="text-sm">
            <a href="/jobseeker-dashboard/edit-profile">{jobseeker.fullName}</a>
          </p>
          <p className="text-xs text-gray-700">Jobseeker</p>
        </article>
        <button>
          <ArrowRightOnRectangleIcon className="h-16 w-6" />
        </button>
      </div>
    );

  return (
    <>
      <li className="ml-auto">
        <a href="/sign-up/jobseekers">Daftar</a>
      </li>
      <li>
        <a href="/login/jobseekers">Masuk</a>
      </li>
    </>
  );
};

function Header() {
  const { isAuthenticated, isLoading, company, jobseeker } =
    useContext(AuthContext);

  return (
    <header className="bg-custom-light-100 top-0 flex h-36 w-full items-center gap-8 px-16">
      <a href="/" className="logo">
        <img src={logotextImage} alt="" className="h-36" />
      </a>
      <ul className="flex flex-grow items-center gap-8">
        <li className="mr-auto">
          <a href="/search-jobs">Cari lowongan</a>
        </li>
        <User
          jobseeker={jobseeker}
          company={company}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
      </ul>
    </header>
  );
}

export default Header;
