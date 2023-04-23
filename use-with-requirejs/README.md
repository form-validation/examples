## Using FormValidation with requirejs

In order to integrate [FormValidation](https://formvalidation.io) with [requirejs](https://requirejs.org), perform the following steps:

1. Copy all the files and folders of the `/dist/@form-validation/amd` folder to the `www/lib/@form-validation` folder

The `www/lib/@form-validation` folder then will consist of the following files:

```js
www
└── lib
    └── @form-validation
        ├── bundle
        ├── core
        ├── locales
        ├── plugins-[PluginName]
        ├── styles
        └── validators-[ValidatorName]
```

2. The `index.html` file contains the markup of the form that you want to validate

3. The `www/app/main.js` file contains the validation script

4. Open the `index.html` in your browser

5. (Optional) To build an optimized version of the app, run the following command at the root folder:

```shell
$ node tools/r.js -o tools/build.js
```

The command creates an optimized version of the project in a**www-built** directory. The `www-built/app.js` file will be optimized to include all of its dependencies.
You can open the `www-built/index.html` in the browser.

For more information on the optimizer, please visit the requirejs' [optimization page](http://requirejs.org/docs/optimization.html)
