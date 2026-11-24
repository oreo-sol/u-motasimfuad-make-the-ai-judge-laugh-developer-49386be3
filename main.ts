import { mkdirSync, writeFileSync } from "node:fs";

const first =
  "It passed every test I wrote — unfortunately, ";
const second = "production wasn't one of them.";
const line = first + second;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
