var ApplicationView = Backbone.View.extend({
  el: 'body',
  template: Handlebars.templates.application,
  render: function() {
    this.$el.html(this.template());
  },
  addListeners: function() {
    $('main > p > a').on('click', application.handleDeleteAll.bind(application));
    $('form').on('submit', application.handleSubmit.bind(application));
  },
  initialize: function() {
    this.render();
    this.addListeners();
  }
});
