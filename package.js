Package.describe({
    summary: "Bourbon - A simple and lightweight mixin library for SASS, with SCSS syntax"
});

Package.on_use(function (api) {
    api.use('scss', ['client', 'server']);
    //dont need to add any files to the client, they're there just so the package will build
});
