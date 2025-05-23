
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/**/*.graphql",
  generates: {
    './src/generates.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
    }
  }
};

export default config;
