define([
    'scripts/collections/users.js',
    'scripts/collections/menus.js'
  ],
  function(users, menus) {
    return {
      users: users,
      menus: menus
    }
  });