import fs, { PathLike } from 'node:fs';

function loopDirection(direction: PathLike): string[] {
  return fs.readdirSync(direction).flatMap((item: string) => {
    const path = `${direction}\\${item}`;

    if (fs.statSync(path).isDirectory()) return loopDirection(path);
    return path;
  });
}

export const getFilesDirectory = (direction: PathLike) => loopDirection(direction);
