const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "..", "src", "components", "Navigation.js");
const buf = fs.readFileSync(file);
console.log("File:", file);
console.log("Length:", buf.length);
console.log("First 8 bytes:", buf.slice(0, 8));
// Detect BOM
if (buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
  console.log("BOM (UTF-8) detected");
} else {
  console.log("No UTF-8 BOM detected");
}
// Find non-ASCII bytes
const nonAscii = [];
for (let i = 0; i < buf.length; i++) {
  if (buf[i] > 0x7f) nonAscii.push({ i, byte: buf[i] });
}
console.log("Non-ASCII byte count:", nonAscii.length);
if (nonAscii.length > 0)
  console.log("First 20 non-ASCII bytes sample:", nonAscii.slice(0, 20));
// Print surrounding text for first non-ascii occurrence
if (nonAscii.length > 0) {
  const idx = nonAscii[0].i;
  const start = Math.max(0, idx - 40);
  const end = Math.min(buf.length, idx + 40);
  console.log("Context (utf8):\n", buf.slice(start, end).toString("utf8"));
}
