import { defineConfig } from 'rollup'
import { readPackageSync,  } from 'read-pkg'
import typescriptPlugin from '@rollup/plugin-typescript'
import dtsPlugin from 'rollup-plugin-dts'

const packageJson = readPackageSync({ normalize: true })

export default defineConfig([{
  input: 'src/index.ts',
  plugins: [typescriptPlugin()],
  output: {
    file: packageJson.module,
    format: 'esm',
  },
  external: [
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {})
  ],
}, {
  input: 'src/index.ts',
  plugins: [typescriptPlugin(), dtsPlugin()],
  output: {
    file: packageJson.types,
    format: 'es',
  },
  external: [
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {})
  ],
}])
