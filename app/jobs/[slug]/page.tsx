import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import JobApplicationForm from "@/app/components/JobApplicationForm";

type Job = {
  title: string;
  description?: string;
  qualifications?: string[];
  responsibilities?: string[];
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

async function loadJobs(): Promise<Job[]> {
  const dataPath = path.join(process.cwd(), "data", "jobs.json");
  try {
    const raw = await fs.readFile(dataPath, "utf8");
    return JSON.parse(raw) as Job[];
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const jobs = await loadJobs();
  return jobs.map((j) => ({ slug: slugify(j.title) }));
}

export default async function JobApplyPage({ params }: { params: { slug: string } }) {
  const jobs = await loadJobs();
  const job = jobs.find((j) => slugify(j.title) === params.slug);
  if (!job) return notFound();

  return (
    <section>
      <div className="container" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <a href="/jobs" style={{ display: "inline-block", marginBottom: 16, color: "#666" }}>← Back to Jobs</a>
        <h1 style={{ marginBottom: 8, fontSize: 36, fontWeight: 800 }}>{job.title}</h1>
        {job.description && <p style={{ maxWidth: 800, fontSize: 18, color: "#555", lineHeight: 1.6, marginBottom: 32 }}>{job.description}</p>}

        <div className="grid" style={{ marginTop: 24, marginBottom: 48 }}>
          {job.responsibilities && (
            <div className="card">
              <h3>Responsibilities</h3>
              <ul style={{ marginTop: 12 }}>
                {job.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          )}
          {job.qualifications && (
            <div className="card">
              <h3>Qualifications</h3>
              <ul style={{ marginTop: 12 }}>
                {job.qualifications.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <h2 style={{ marginBottom: 16 }}>Application Form</h2>
        <p style={{ marginBottom: 24, color: "#555" }}>Complete the form below to apply for this position. All fields marked with an asterisk (*) are required.</p>
        <JobApplicationForm jobTitle={job.title} />
      </div>
    </section>
  );
}
