var _ = require('underscore');
var cdb = require('cartodb.js');
var template = require('./error.tpl');

/**
 * A typical error view.
 * @param {Object} options
 * @param {String} options.title If not provided will use a generic text as fallback
 * @param {String} options.desc If not provied will use a generic text as fallback
 */
module.exports = cdb.core.View.extend({

  className: 'IntermediateInfo',

  initialize: function (opts) {
    var attrs = _.defaults(
      _.pick(opts, ['title', 'desc']),
      {
        title: _t('components.error.default-title'),
        desc: _t('components.error.default-desc')
      }
    );
    this.model = new cdb.core.Model(attrs);
  },

  render: function () {
    this.$el.html(this._html());
    return this;
  },

  _html: function () {
    var m = this.model;
    return template({
      title: m.get('title'),
      desc: m.get('desc')
    });
  }
});
