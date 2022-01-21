import { resolve, join, dirname } from 'node:path';
import { default as builder } from 'xmlbuilder';
import { getFilesDirectory } from './getFilesDirectory';

const fileSource = getFilesDirectory(join('.', 'source'));
const fileName = fileSource.map(f => f.split('\\').slice(-1)[0].replace('.esp', ''));

const typeDescriptor = (property: string) => ({
  dependencyType: {
    defaultType: {
      '@name': 'Optional',
    },
    patterns: {
      pattern: [
        {
          dependencies: {
            '@operator': 'Or',
            fileDependency: [
              { '@file': `${property}.esp`, '@state': 'Missing' },
              { '@file': `${property}.esp`, '@state': 'Inactive' },
            ],
          },
          type: { '@name': 'NotUsable' },
        },
        {
          dependencies: {
            '@operator': 'And',
            fileDependency: [{ '@file': `${property}.esp`, '@state': 'Active' }],
          },
          type: { '@name': 'Recommended' },
        },
      ],
    },
  },
});
// '@source': `PyP SE - Protect Your People SE\\NPC\\Russian\\${f}.esp`,
const loopPlugin = ({ fileName, fileSource }: Record<string, string[]>) => {
  console.log(`[LOG] fileSource`, `<${typeof fileSource}>`, fileSource);
  console.log(`[LOG] fileName`, `<${typeof fileName}>`, fileName);
  const nameArr = fileName.map((f: string, dex: number) => ({
    '@name': f,
    description: `${f} translate`,
    files: {
      file: {
        '@source': fileSource[dex],
        '@destination': `${f}.esp`,
        '@priority': '0',
      },
    },
    typeDescriptor: typeDescriptor(f),
  }));

  console.log(`[LOG] nameArr`, `<${typeof nameArr}>`, nameArr);
  return nameArr;
};

const pureCfg = {
  config: {
    '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    '@xsi:noNamespaceSchemaLocation': 'http://qconsulting.ca/fo3/ModConfig5.0.xsd',
    moduleName: 'skyrim-translate-swarm-collections',
    moduleImage: {
      '@path': ':\\Pictures\\02-10-2021 00-26-07.png',
    },
    installSteps: {
      '@order': 'Explicit',
      installStep: {
        '@name': 'StepOne',
        optionalFileGroups: {
          '@order': 'Explicit',
          group: {
            '@name': 'Auto-select',
            '@type': 'SelectAny',
            plugins: {
              '@order': 'Explicit',
              plugin: loopPlugin({ fileName, fileSource }),
            },
          },
        },
      },
    },
  },
};

const xmlObject = pureCfg;

const xml = builder.create(xmlObject, { headless: false, encoding: 'utf-8' }).end({ pretty: true });

// console.log(xml);
export { xml };
