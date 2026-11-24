import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  // D8 won 24/25 of 16 drafts: deadpan one-star shape, a specific complaint
  // (the vacuumed dust bunny), unmistakably feline voice, and the sting
  // lands in the last words ("accepting applications for a new human").
  "One star. She vacuumed my favourite dust bunny. It had a name. I am now accepting applications for a new human.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
