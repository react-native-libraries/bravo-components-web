module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          "root": ["./src"],
          "extensions": [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".jsx",
            ".js",
            ".json"
          ],
          "alias": {
            "@components": "./application/bravo-components/components",
            "@routes": "./application/routes",
            "@services": "./application/services",
            "@screens": "./application/screens",
            "@layout": "./application/layout",
            "@assets": "./application/assets",
            "@utils": "./application/utils",
          }
        },
        'react-native-reanimated/plugin',
      ]
    ]
  };
};

