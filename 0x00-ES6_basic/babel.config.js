
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
            "dev": "npx babel-node 0-constants.js"
          },
        },
      ],
    ],
  };
  