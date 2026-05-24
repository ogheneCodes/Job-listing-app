import { useState } from "react";

type JobProps = {
  title: string;
  company: string;
  location: string;
  salary: string;
};

const JobCard = ({ title, company, location, salary }: JobProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "10px",
      }}
    >
      <h2>{title}</h2>

      <p>
        <strong>Company:</strong> {company}
      </p>

      {showDetails && (
        <>
          <p>
            <strong>Location:</strong> {location}
          </p>

          <p>
            <strong>Salary:</strong> {salary}
          </p>
        </>
      )}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default JobCard;