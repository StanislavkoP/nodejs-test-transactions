const path = require('path');

module.exports = {
  rules: [
    {
      test: /input.json/,
      include: [
        path.resolve('./src'),
      ],
      use: [
        {
          loader: (content, meta) => {
            return content;
          },
        },
      ],
    },
  ],
};
