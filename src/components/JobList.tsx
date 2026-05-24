import JobCard from "./JobCard";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
};

const JobList = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      salary: "₦400,000",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Dev Solutions",
      location: "Enugu",
      salary: "₦300,000",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Lagos",
      salary: "₦350,000",
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Code Masters",
      location: "Abuja",
      salary: "₦500,000",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudNet",
      location: "Remote",
      salary: "₦600,000",
    },
    {
      id: 6,
      title: "Mobile Developer",
      company: "AppWorks",
      location: "Port Harcourt",
      salary: "₦450,000",
    },
    {
      id: 7,
      title: "Data Analyst",
      company: "Insight Ltd",
      location: "Ibadan",
      salary: "₦320,000",
    },
    {
      id: 8,
      title: "Cybersecurity Analyst",
      company: "SecureTech",
      location: "Lagos",
      salary: "₦700,000",
    },
    {
      id: 9,
      title: "Network Engineer",
      company: "Net Solutions",
      location: "Kano",
      salary: "₦380,000",
    },
    {
      id: 10,
      title: "Cloud Engineer",
      company: "SkyCloud",
      location: "Remote",
      salary: "₦650,000",
    },
  ];

  return (
    <div>
      <h1>Job Listings</h1>

      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
          />
        ))
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;