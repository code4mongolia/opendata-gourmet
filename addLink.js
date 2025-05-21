import { CSV } from "https://js.sabae.cc/CSV.js";

const fn = "./grourmet.csv";
const data = await CSV.fetchJSON(fn);
for (const i of data) {
  i.url_glb = "https://code4mongolia.github.io/opendata-grourmet/" + i.file + ".glb";
  i.url_usdz = "https://code4mongolia.github.io/opendata-grourmet/" + i.file + ".usdz";
}
await Deno.writeTextFile(fn, CSV.stringify(data));
