import { mkdirSync, writeFileSync } from "node:fs";

// One fortune cookie line for a crypto trader who has just been liquidated:
// oracular opening, the loss stated plainly, then a double meaning
// ("long on laughter") as the surprise last turn.
const fortune =
  "Your position is gone, trader \u2014 but the cookie crumbles kindly: your next fortune comes long on laughter.";

// Guard the gate before writing: the entry must be one line of plain
// text, at most 20 words and 1-160 characters, and not only whitespace.
// Failing loudly here beats shipping an invalid entry to the judge.
const words = fortune.trim().split(/\s+/);
if (
  fortune.includes("\n") ||
  words.length > 20 ||
  fortune.length < 1 ||
  fortune.length > 160 ||
  fortune.trim().length === 0
) {
  throw new Error("fortune violates the entry gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
