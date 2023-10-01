import { readDir } from "@tauri-apps/api/fs";
import { BaseDirectory } from "@tauri-apps/api/path";

const getCurrentSettings = async () => {
  const modPath =
    "/Users/mikhail/Documents/Larian Studios/Baldur's Gate 3/PlayerProfiles/Public";

  const dirContents = await readDir(modPath, {
    dir: BaseDirectory.Home,
    recursive: true,
  });

  const result: string[] = [];

  function processEntries(entries: any) {
    for (const entry of entries) {
      result.push(entry.path);

      if (entry.children) {
        processEntries(entry.children);
      }
    }
  }

  processEntries(dirContents);

  return result;
};

export { getCurrentSettings };
