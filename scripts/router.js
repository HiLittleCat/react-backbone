define([
	'backbone',
	'views'
	],
	function (Backbone, views) {
		return Backbone.Router.extend({
			routes: {
				'': 'index'
			},
			index: function () {
				var index = new views.index();
				var menus = new views.menus();
			}
		});
	});