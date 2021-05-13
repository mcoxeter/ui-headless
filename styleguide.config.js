const path = require('path');
module.exports = {
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath);
    return ext === '.tsx'
      ? require('react-docgen-typescript').parse(
          filePath,
          source,
          resolver,
          handlers
        )
      : require('react-docgen').parse(source, resolver, handlers);
  },
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  sections: [
    {
      name: 'Documentation',
    },
    {
      name: 'Legos',
      components: 'src/legos/**/[A-Z]*.{ts,tsx}',
    },
    {
      name: 'Patterns',
      components: 'src/patterns/**/[A-Z]*.{ts,tsx}',
    },
  ],
};
