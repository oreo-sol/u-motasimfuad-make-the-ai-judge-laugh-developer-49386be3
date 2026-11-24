import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "It passed every test I wrote — unfortunately, production wasn't one of them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
