define([
  'react'
  ],
  function (React) {
    var menuItem = React.createFactory(
      React.createClass({
        render: function () {
          return (
            <a className='item'>{this.props.menu.get('navName')}</a>
          )
        }
      })
    );
    var menus = React.createFactory(
      React.createClass({
        componentDidMount: function () {
          this.props.menus.on('reset add remove', function () {
            this.forceUpdate();
          }.bind(this));
        },
        render: function () {
          var menus = this.props.menus.models.map(function (menu) {
            return menuItem({
              menu: menu
            });
          });

          return (
            <div className='ui vertical menu'>
              <div className='menu'>{menus}</div>
            </div>
          )
        }
      })
    );
    return menus;
  });