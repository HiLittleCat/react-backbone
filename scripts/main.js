require.config({
	baseUrl: "/",
	paths: {
		jquery: 'vendor/jquery/jquery-2.1.1.min',
		underscore: 'vendor/lodash/lodash',
		backbone: 'vendor/backbone/backbone',
		text: 'vendor/react/text',
		react: 'vendor/react/react-with-addons',
		JSXTransformer: 'vendor/react/JSXTransformer',
		jsx: 'vendor/react/jsx',
		semantic: 'vendor/semantic/semantic',
		Services: 'config/Services',
		models: 'scripts/models/all',
		collections: 'scripts/collections/all',
		views: 'scripts/views/all',
		router: 'scripts/router',
		components: 'react-components/all',
		ui: 'scripts/ui'
	},
	shim: {
		backbone: {
			deps: [
				"jquery",
				"underscore"
			],
			exports: "Backbone"
		},
		jquery: {
			exports: "$"
		},
		underscore: {
			exports: "_"
		},
		components: {
			deps: [
				'react'
			],
			exports: 'components'
		},
		semantic: {
			deps: [
				'jquery'
			],
			exports: 'semantic'
		}
	},
	jsx: {
		fileExtension: '.jsx',
		harmony: true,
		stripTypes: true
	}
});

require(['backbone', 'router', 'semantic', 'ui'], function(Backbone, Router) {
	new Router();
	Backbone.history.start();
});