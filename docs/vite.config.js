import pkg from '../packages/vtable/package.json';
import * as path from 'path';
import react from '@vitejs/plugin-react';

export default {
  optimizeDeps: {},
  server: {
    host: '0.0.0.0',
    port: 3020,
    https: !!process.env.HTTPS,
    open: true
  },
  define: {
    __DEV__: true,
    __VERSION__: JSON.stringify(pkg.version)
  },
  resolve: {
    alias: {
      '@visactor/vtable': path.resolve('../packages/vtable/src/index.ts'),
      '@visactor/vtable-editors': path.resolve('../packages/vtable-editors/src/index.ts'),
      '@vutils-extension': path.resolve(__dirname, '../packages/vtable/src/vutil-extension-temp'),
      '@src': path.resolve(__dirname, '../packages/vtable/src/'),

      // react: 'openinula', // 新增
      // 'react-dom': 'openinula', // 新增
      // 'react/jsx-dev-runtime': 'openinula/jsx-dev-runtime'
    }
  },
  plugins: [react()]
};
