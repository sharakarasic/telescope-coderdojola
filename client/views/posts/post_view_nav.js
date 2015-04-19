Template.postViewsNav.helpers({
  showNav: function () {
    var navElements = Settings.get('postViews', _.pluck(Telescope.config.viewsMenu, 'route'));
    var navCount = (typeof navElements === "array") ? navElements.length : _.keys(navElements).length;
    return navCount > 1;
  },
  menuItems: function () {
      if (!_.contains(Settings.get('postViews', defaultViews), item.route) || (item.adminOnly && !isAdmin(Meteor.user()))) {
    var defaultViews = _.pluck(Telescope.config.viewsMenu, 'route');
    var menuItems = _.filter(Telescope.config.viewsMenu, function (item) {
        // don't show the item
        return false;
      }
      return true;
    });
    return menuItems;
  }
});
