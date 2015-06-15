define([
    'scripts/models/user.js',
    'scripts/models/menu.js'
  ],
  function(user, menu) {
    return {
      menu: menu,
      user: user
    }
  });