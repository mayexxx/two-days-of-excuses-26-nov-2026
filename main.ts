import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "I spent the last six hours trying to convince a CAPTCHA that I am, in fact, a very tall and sophisticated bicycle.");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 114 || content !== "I spent the last six hours trying to convince a CAPTCHA that I am, in fact, a very tall and sophisticated bicycle.") {
  throw new Error(`Invalid entry content: ${JSON.stringify(content)}`);
}
