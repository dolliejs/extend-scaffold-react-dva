module.exports = {
  installers: [],
  files: {
    add: [
      'src/models/(.*).(js|ts)',
      'src/patches/(.*)',
    ],
    merge: [
      'src/App.(js|tsx)',
      'src/index.(js|tsx)',
      'package.json',
    ],
  },
  endScripts: [
    (context) => {
      if (context.fs.exists('tsconfig.json')) {
        [
          'src/models/app.js',
          'src/patches/dva/index.js',
        ].forEach((pathname) => context.fs.remove(pathname));
      } else {
        [
          'src/models/app.ts',
          'src/models/index.ts',
          'src/patches/dva/index.tsx',
        ].forEach((pathname) => context.fs.remove(pathname));
      }
    },
  ],
};
