import fs from "fs/promises";
import path from "path";

export const metadata = { title: "Job Listings" };

type Job = {
  title: string;
  description?: string;
  qualifications?: string[];
  responsibilities?: string[];
  link?: string;
  applicationLink?: string;
};

async function loadJobs(): Promise<Job[]> {
  const dataPath = path.join(process.cwd(), "data", "jobs.json");
  try {
    const raw = await fs.readFile(dataPath, "utf8");
    const jobs = JSON.parse(raw) as Job[];
    return jobs;
  } catch (err) {
    return [];
  }
}

export default async function JobsPage() {
  const jobs = await loadJobs();
  return (
    <section>
      <div className="container" style={{ paddingTop: 32 }}>
        <h2>Job Listings</h2>
        {jobs.length === 0 ? (
          <p style={{ marginTop: 16 }}>
            Jobs will be posted here soon. If you have the latest roles list,
            please add it to <strong>data/jobs.json</strong>.
          </p>
        ) : (
          <div className="grid" style={{ marginTop: 16 }}>
            {jobs.map((job) => (
              <div key={job.title} className="card">
                <h3>{job.title}</h3>
                {job.description && <p style={{ marginBottom: 16 }}>{job.description}</p>}
                {job.applicationLink ? (
                  <a href={job.applicationLink} target="_blank" rel="noopener noreferrer" className="cta">Apply Now</a>
                ) : (
                  <a href={`/jobs/${slugify(job.title)}`} className="cta">View Details & Apply</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
