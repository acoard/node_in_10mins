var mustache = require('mustache'); // commonJS import style in node.
var express = require('express');
var app = express();

var template_vars = {
  "header": "Colors",
  "items": [
      {"name": "red", "first": true, "colour": "red"},
      {"name": "green", "link": true, "colour": "green"},
      {"name": "blue", "link": true, "colour": "blue"}
  ],
  "empty": true,
  "bug": false
};

var template = '<!DOCTYPE html>\
<html>\
    <head>\
    </head>\
    <body>\
        <h1>{{header}}</h1>\
         {{#bug}} \
         ERROR MESSAGE GOES HERE \
        {{/bug}} \
        {{#items}} \
          {{#first}} \
            <li><strong>{{name}}</strong></li> \
          {{/first}} \
          {{#link}} \
            <li><span style="color: {{colour}}">{{name}}</span></li> \
          {{/link}} \
        {{/items}} \
         {{#empty}} \
          <p>The list is empty.</p> \
        {{/empty}}\
    </body>\
    </html>'

var renderedTemplate = mustache.render(template, template_vars);

app.get('/template.html', function(req, res){
  res.send(renderedTemplate);

});
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});


