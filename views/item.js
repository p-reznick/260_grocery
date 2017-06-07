var ItemView = Backbone.View.extend({
  template: Handlebars.templates.item,
  render: function() {
    var context = this.model.toJSON();
    this.el = this.template(context);
    return this.el;
  }
});
