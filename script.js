var application = {
  init: function() {
    this.createModel();
    this.createCollection();
    this.createGroceryList();
    this.createTemplates();
    this.renderItems();
  },
  createModel: function() {
    this.GroceryItem = Backbone.Model.extend();
  },
  createCollection: function() {
    this.GroceryList = Backbone.Collection.extend({
      model: this.GroceryItem,
      getLastID: function() {
        if (this.length === 0) {
          return 0;
        }
        return this.last().get('id');
      },
      getNextID: function() {
        return this.getLastID() + 1;
      }
    });
  },
  createTemplates: function() {
    this.itemTemplate = Handlebars.compile($('#item').html());
    Handlebars.registerPartial('item', this.itemTemplate);
    this.itemsTemplate = Handlebars.compile($('#items').html());
  },
  createGroceryList: function() {
    var self = this;
    this.list = new this.GroceryList();

    var savedList = this.getList();

    if (savedList) {
      this.list.set(savedList);
    } else {
      items_json.forEach(function(item) {
        var groceryItem = new self.GroceryItem(item);
        groceryItem.set('id', self.list.getNextID());
        self.list.add(groceryItem);
      });
    }
  },
  createGroceryItem: function(name, quantity) {
    var newGroceryItem = new this.GroceryItem({
      name: name,
      quantity: quantity,
      id: this.list.getNextID()
    });

    this.list.add(newGroceryItem);
    this.saveList();
  },
  renderItems: function() {
    var context = { items: this.list.models };
    var itemsHTML = this.itemsTemplate(context);

    $('tbody').html(itemsHTML);

    this.addListeners();
  },
  handleDeleteAll: function(e) {
    e.preventDefault();

    this.list.reset();
    this.renderItems();
    this.saveList();
  },
  handleDeleteItem: function(e) {
    e.preventDefault();

    var id = $(e.target).attr('data-id');
    this.list.remove(id);

    this.renderItems();
    this.saveList();
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var newName = $('[name="name"]').val();
    var newQuantity = $('[name="quantity"]').val();

    this.createGroceryItem(newName, newQuantity)

    this.renderItems();
  },
  sortListByName: function() {
    this.list.comparator = 'name';
    this.list.sort();
    this.renderItems();
  },
  sortListByQuantity: function() {
    this.list.comparator = function(groceryItem) {
      return parseInt(groceryItem.get('quantity'));
    }
    this.list.sort();
    this.renderItems();
  },
  addListeners() {
    this.clearAllListeners();
    $('main > p').on('click', this.handleDeleteAll.bind(this));
    $('form').on('submit', this.handleSubmit.bind(this));
    $('td > a').on('click', this.handleDeleteItem.bind(this));
    $('[data-prop="name"]').on('click', this.sortListByName.bind(this));
    $('[data-prop="quantity"]').on('click', this.sortListByQuantity.bind(this));
  },
  saveList: function() {
    listString = JSON.stringify(this.list.toJSON());
    localStorage.setItem('groceryList', listString);
  },
  getList: function() {
    return JSON.parse(localStorage.getItem('groceryList'));
  },
  clearAllListeners: function(node) {
    $('main > p').off();
    $('form').off();
    $('td > a').off();
    $('[data-prop="name"]').off();
    $('[data-prop="quantity"]').off();
  }
};

$(application.init.bind(application));
