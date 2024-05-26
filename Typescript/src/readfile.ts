import * as fs from "fs";

const content = fs.readFileSync("./menu.tsv", "utf8");
export const menuTSV: string[] = content.split("\n");
