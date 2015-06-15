define([
    'jsx!react-components/jsx/users',
    'jsx!react-components/jsx/menus'
  ],
  function(users,menus) {
    return {
      users: users,
      menus: menus
    }
  });