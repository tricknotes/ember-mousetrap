define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    __exports__["default"] = Ember.Mixin.create({
      mergedProperties: ['shortcuts'],

      init: function() {
        this._super.apply(this, arguments);

        this.on('activate', this, function() {
          if (!this.shortcuts) return;

          Ember.keys(this.shortcuts).forEach(function(key) {
            var callback = this.shortcuts[key];

            if (!callback.__ember_mousetrap__) return;

            var var$0 = callback.__ember_mousetrap__, keys = var$0.keys, action = var$0.action;

            Mousetrap.bind(keys, callback.bind(this), action);
          }, this);
        });

        this.on('deactivate', this, function() {
          if (!this.shortcuts) return;

          Ember.keys(this.shortcuts).forEach(function(key) {
            var callback = this.shortcuts[key];

            if (!callback.__ember_mousetrap__) return;

            var keys = callback.__ember_mousetrap__.keys;

            Mousetrap.unbind(keys);
          }, this);
        });
      }
    });
  });