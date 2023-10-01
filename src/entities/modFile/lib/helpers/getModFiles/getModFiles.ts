import { readBinaryFile, readDir } from "@tauri-apps/api/fs";
import { BaseDirectory } from "@tauri-apps/api/path";
import JSZip from "jszip";
// import StreamZip from "node-stream-zip";

import { fileExtension } from "shared/lib/helpers";

const getModFiles = async () => {
  const modPath = "/Users/mikhail/Downloads/bg3";

  const dirContents = await readDir(modPath, {
    dir: BaseDirectory.Home,
    recursive: true,
  });

  const files: string[] = [];

  function processEntries(entries: any) {
    for (const entry of entries) {
      files.push(entry.path);

      if (entry.children) {
        processEntries(entry.children);
      }
    }
  }

  processEntries(dirContents);

  const results: any[] = [];

  for (const zipFile of files.filter(fileExtension.isZip)) {
    const data = await readBinaryFile(zipFile);
    const zip = new JSZip();
    const zipData = await zip.loadAsync(data);

    zipData.forEach((_, file) => {
      results.push(file.name);
    });
  }

  return results;
};

export { getModFiles };
