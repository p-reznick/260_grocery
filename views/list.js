var ListView = Backbone.View.extend({
  tagName: 'tbody',
  template: Handlebars.templates.items,
  render: function() {
    this.$el.html('');
    this.collection.forEach(this.renderOne.bind(this));
    $('tbody').html(this.$el.html());
    this.addListeners();
    return this;
  },
  renderOne: function(item) {
    var view = new ItemView({ model: item });
    this.$el.append(view.render());
  },
  initialize: function() {
    this.render();
  },
  addListeners: function() {
    this.collection.on('change', this.render.bind(this));
    $('td a').on('click', application.handleDeleteItem.bind(application));
  }
});
