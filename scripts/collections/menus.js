define([
    'Services',
    'backbone',
    'models'
  ],
  function(Services, Backbone, models) {
    return Backbone.Collection.extend({
      model: models.menu,
      url: Services.menu,
      parse: function(response) {
        return response;
      }
    });
  });