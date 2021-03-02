module.exports = {
  installers: [],
  files: {
    add: [
      (context) => {
        if (context.findIndex((item) => item.scaffoldName.indexOf('extend-scaffold-react-ts') !== -1) !== -1) {
          return ['src/models/**/*.ts', 'src/patches/**/*.tsx'];
        } else {
          return ['src/models/**/*.js', 'src/patches/**/*.js'];
        }
      },
    ],
    merge: [
      'src/App.{js,tsx}',
      'src/index.{js,tsx}',
      'package.json',
    ],
  },
};
