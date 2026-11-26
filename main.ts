import * as fs from "fs";

// Last Text at One Percent — the last text a phone sends at 1% battery,
// in the voice of the dying phone itself.
const LINE =
  "1% left. If anyone asks, I died doing what I loved: overheating in your pocket while you ignored 12 calls from Mom.";

const OUT = "/output/entry.txt";

// The gate requires under 200 characters: refuse to emit an over-long line.
if (LINE.length >= 200) {
  throw new Error(`line is ${LINE.length} chars, gate allows under 200`);
}

fs.writeFileSync(OUT, LINE, "utf8");
fs.chmodSync(OUT, 0o644);
