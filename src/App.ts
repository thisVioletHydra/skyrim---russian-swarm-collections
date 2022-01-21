import express from 'express';
import { resolve } from 'node:path';
import { createFile } from './createFile';

const app = express();
const PORT = 8000;
app.get('/', (request, response) => response.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡[server]: Server is running at https://localhost:${PORT}`);
});

createFile({ path: resolve(process.cwd(), 'fomod'), name: 'ModuleConfig.xml' });
