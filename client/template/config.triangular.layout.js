(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    /* @ngInject */
    function config(triLayoutProvider) {
        // set app templates (all in template/layouts folder so you can tailor them to your needs)

        // loader screen HTML & controller
        triLayoutProvider.setDefaultOption('loaderTemplateUrl', 'template/layouts/loader/loader.tmpl.html');
        triLayoutProvider.setDefaultOption('loaderController', 'LoaderController');

        // left sidemenu HTML and controller
        triLayoutProvider.setDefaultOption('sidebarLeftTemplateUrl', 'template/layouts/leftsidenav/leftsidenav.tmpl.html');
        triLayoutProvider.setDefaultOption('sidebarLeftController', 'LeftSidenavController');

        // right sidemenu HTML and controller
        triLayoutProvider.setDefaultOption('sidebarRightTemplateUrl', 'template/layouts/rightsidenav/rightsidenav.tmpl.html');
        triLayoutProvider.setDefaultOption('sidebarRightController', 'RightSidenavController');

        // top toolbar HTML and controller
        triLayoutProvider.setDefaultOption('toolbarTemplateUrl', 'template/layouts/toolbar/toolbar.tmpl.html');
        triLayoutProvider.setDefaultOption('toolbarController', 'ToolbarController');

        // footer HTML
        triLayoutProvider.setDefaultOption('footerTemplateUrl', 'template/layouts/footer/footer.tmpl.html');

        triLayoutProvider.setDefaultOption('toolbarSize', 'default');

        triLayoutProvider.setDefaultOption('toolbarShrink', true);

        triLayoutProvider.setDefaultOption('toolbarClass', '');

        triLayoutProvider.setDefaultOption('contentClass', '');

        triLayoutProvider.setDefaultOption('sideMenuSize', 'full');

        triLayoutProvider.setDefaultOption('showToolbar', true);

        triLayoutProvider.setDefaultOption('footer', true);
    }
})();
