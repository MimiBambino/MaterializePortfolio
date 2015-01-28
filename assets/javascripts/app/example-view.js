define(['jquery'], function($) {
  var ExampleView = (function() {

    function ExampleView() {}

    ExampleView.prototype.render = function(element) {
      $(element).append("");  // Put header template html here
    };

    return ExampleView;

  })();
  return ExampleView;
});