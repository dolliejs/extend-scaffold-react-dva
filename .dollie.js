module.exports = {
  installers: [],
  files: {
    add: [
      (context) => {
        console.log(context);
        const index = context.findIndex((item) => item.scaffoldName.indexOf('extend-scaffold-react-ts') !== -1);
        if (index !== -1) {
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
