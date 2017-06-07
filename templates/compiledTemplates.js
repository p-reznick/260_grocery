(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['application'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main>\n  <table>\n    <thead>\n      <tr>\n        <th data-prop=\"name\">Name</th>\n        <th data-prop=\"quantity\" colspan=\"2\">Quantity</th>\n      </tr>\n    </thead>\n    <tbody>\n    </tbody>\n  </table>\n  <p><a href=\"#\">Delete all</a></p>\n\n  <form action=\"\" method=\"post\">\n    <fieldset>\n      <dl>\n        <dt><label for=\"name\">Name</label></dt>\n        <dd><input type=\"text\" name=\"name\" /></dd>\n        <dt><label for=\"quantity\">Quantity</label></dt>\n        <dd><input type=\"text\" name=\"quantity\" /></dd>\n      </dl>\n      <input type=\"submit\" value=\"Add Item\" />\n    </fieldset>\n  </form>\n</main>\n";
},"useData":true});
templates['item'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\n  <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</td>\n  <td><a data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">Delete</a></td>\n</tr>\n";
},"useData":true});
templates['items'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.attributes : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.item,depth0,{"name":"item","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();