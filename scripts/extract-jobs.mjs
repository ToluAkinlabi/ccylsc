import fs from "fs/promises";
import path from "path";
import mammothDefault, * as mammothNS from "mammoth";

const mammoth = mammothDefault ?? mammothNS;

async function main() {
  const docxPaths = [
    path.join(process.cwd(), "data", "LinkedIn Job List.docx"),
    path.join(process.cwd(), "LinkedIn Job List.docx"),
  ];

  let html = "";
  for (const p of docxPaths) {
    try {
      const result = await mammoth.convertToHtml({ path: p });
      if (result?.value) { html = result.value; break; }
    } catch (e) { /* try next */ }
  }

  if (!html) {
    console.error("DOCX not found. Place 'LinkedIn Job List.docx' in repo root or data/.");
    process.exit(1);
  }

  // Write raw HTML for review/debug
  await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true });
  await fs.writeFile(path.join(process.cwd(), "data", "jobs.html"), html, "utf8");

  // Parse titles in the form: <p><strong>1. Script Writer</strong></p>
  const titleRegex = /<p><strong>\s*\d+\.\s*([^<]+)<\/strong><\/p>/gi;
  const titleMatches = [...html.matchAll(titleRegex)];

  const jobs = [];
  for (let i = 0; i < titleMatches.length; i++) {
    const m = titleMatches[i];
    const title = m[1].trim();
    const startIdx = m.index + m[0].length;
    const endIdx = i + 1 < titleMatches.length ? titleMatches[i + 1].index : html.length;
    const block = html.slice(startIdx, endIdx);

    // Role Overview
    let description;
    const roleIdx = block.indexOf("<p><strong>Role Overview:");
    if (roleIdx >= 0) {
      const after = block.slice(roleIdx);
      // Text may be after a <br/> inside the same <p>
      const roleMatch = after.match(/Role Overview:\s*<br\s*\/?>\s*([\s\S]*?)<\/p>/i);
      if (roleMatch) description = roleMatch[1].replace(/<[^>]+>/g, "").trim();
    }

    // Responsibilities
    const responsibilities = [];
    const respIdx = block.indexOf("<p><strong>Responsibilities:");
    if (respIdx >= 0) {
      const respAfter = block.slice(respIdx);
      const ulMatch = respAfter.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
      if (ulMatch) {
        const liMatches = [...ulMatch[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
        for (const lm of liMatches) {
          const txt = lm[1].replace(/<[^>]+>/g, "").trim();
          if (txt) responsibilities.push(txt);
        }
      }
    }

    // Qualifications
    const qualifications = [];
    const qualIdx = block.indexOf("<p><strong>Qualifications:");
    if (qualIdx >= 0) {
      const qualAfter = block.slice(qualIdx);
      const ulMatch = qualAfter.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
      if (ulMatch) {
        const liMatches = [...ulMatch[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
        for (const lm of liMatches) {
          const txt = lm[1].replace(/<[^>]+>/g, "").trim();
          if (txt) qualifications.push(txt);
        }
      }
    }

    jobs.push({
      title,
      description,
      qualifications: qualifications.length ? qualifications : undefined,
      responsibilities: responsibilities.length ? responsibilities : undefined,
    });
  }

  await fs.writeFile(path.join(process.cwd(), "data", "jobs.json"), JSON.stringify(jobs, null, 2), "utf8");
  console.log(`Extracted ${jobs.length} jobs to data/jobs.json`);
}

main().catch((e) => { console.error(e); process.exit(1); });
