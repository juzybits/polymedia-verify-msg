import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export function getVersion(): string {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const packageText = readFileSync(join(__dirname, "..", "..", "package.json"), "utf8");
    const packageJson = JSON.parse(packageText); // eslint-disable-line
    return packageJson.version; // eslint-disable-line
}
