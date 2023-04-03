const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'navbar',

  exposes: {
    './navbarComponents': './projects/navbar/src/app/export/entry.module.ts',
    './navbarBehavior': './projects/navbar/src/app/export/navbar.behavior.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
