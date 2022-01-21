import { promises as fsPromises } from 'node:fs';
import { join } from 'node:path';
import { xml } from './xmlCreate';

export async function createFile({ path, name }: Record<string, string>) {
  try {
    const myFile = join(path, name);
    const content = xml;
    // console.log(`[LOG] xml`, `<${typeof xml}>`, xml);

    // try to read file
    const result = await fsPromises.readFile(myFile);
    // console.log(`[LOG] result`, `<${typeof result}>`, Boolean(result));

    await fsPromises.writeFile(myFile, content, { flag: 'w', encoding: 'utf-8' });
  } catch {
    // console.log(`[LOG] error`, `<${typeof error}>`, error);
    await fsPromises.mkdir(path, { recursive: true });
    await fsPromises.writeFile(join(path, name), '');
  }
}
