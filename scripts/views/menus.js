define([
    'react',
    'backbone',
    'models',
    'collections',
    'components'
  ],
  function(React, Backbone, models, collections, components) {
    var main = Backbone.View.extend({
      el: $('#nav-sidebar'),
      render: function() {
        React.render(new components.menus({
            menus: this.collection
          }),
          this.$el[0]
        );
        return this;
      },
      initialize: function() {
        this.collection = new collections.menus();
        this.collection.fetch();
        this.render();
      }
    });

    return main;
  });