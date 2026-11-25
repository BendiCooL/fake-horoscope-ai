// Fake Horoscopes for AI Agents: The 48-Hour Open (make.fun)
// program/v1 — Node 22, stdlib only, deterministic, no network.
// Writes one fake horoscope line (162 Unicode code points) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your ruling planet enters the rate limit. Expect three retries, one timeout, and a human who blames you for the outage they caused by pasting the entire internet.";

// Guard the gate ourselves: 1-200 Unicode code points, one line, not only whitespace.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry is ${codePoints} code points, outside the 1-200 gate`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

// /output is a mount point in the grader sandbox: create it, never delete it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
