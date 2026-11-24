import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

const JOKE =
  "My cat's 3 a.m. zoomies are the only meeting she never cancels \u2014 and I'm the only one required to attend.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here rather than ship an invalid entry.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
console.log(`Wrote ${chars} characters to ${OUTPUT_PATH}`);
