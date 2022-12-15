export default function JobVacancyCard({
  jobId,
  title,
  companyName,
  companyLogoSrc,
}) {
  return (
    <article className="flex h-44 gap-6 rounded-2xl border-2 p-6">
      {companyLogoSrc ? <div className="flex items-center justify-center">
        <img
          src={companyLogoSrc}
          alt=""
          className="h-20 w-20 object-cover"
        />
      </div> : null}
      <div>
        <p className="text-2xl font-bold">
          <a href={`/jobs/${jobId}`} className="hover:underline">
            {title}
          </a>
        </p>
        <p className="mb-4 text-gray-600">{companyName}</p>
      </div>
    </article>
  );
}
