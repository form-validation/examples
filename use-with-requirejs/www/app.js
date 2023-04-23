// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        '@form-validation/core': '@form-validation/core/index',
        // Plugins
        '@form-validation/plugin-bootstrap': '@form-validation/plugin-bootstrap/index',
        '@form-validation/plugin-framework': '@form-validation/plugin-framework/index',
        '@form-validation/plugin-icon': '@form-validation/plugin-icon/index',
        '@form-validation/plugin-message': '@form-validation/plugin-message/index',
        '@form-validation/plugin-submit-button': '@form-validation/plugin-submit-button/index',
        '@form-validation/plugin-trigger': '@form-validation/plugin-trigger/index',
    },
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
