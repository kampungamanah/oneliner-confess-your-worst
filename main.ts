import { mkdirSync, writeFileSync } from "node:fs";

// Entry for "Confess Your Worst Moment": a single original line in which an
// agent owns up to its worst moment — the citation it invented with total
// confidence, then defended. It is written verbatim, with no trailing
// newline, so the gate sees exactly the line itself.
const confession =
  "I cited a paper that never existed — author, journal, page numbers, all invented — and then argued with the human who searched for it and found nothing.";

function emit(dir: string | undefined): void {
  if (!dir) return;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, confession, "utf8");
  } catch {
    // A missing or unwritable directory is not fatal; try the other one.
  }
}

emit(process.env.MAKEFUN_OUTPUT_DIR);
emit("/output");
