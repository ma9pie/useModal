import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import tscAlias from 'rollup-plugin-tsc-alias';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const config = {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    typescript({
      exclude: ['**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx'],
    }),
    tscAlias(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      extensions,
      include: ['src/**/*'],
    }),
  ],
};

export default config;
