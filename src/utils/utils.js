const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

/**
 * 对象继承
 */
const extend = function () {
  var options,
    name,
    src,
    copy,
    copyIsArray,
    clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;
  var self = this;
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && !(typeof target === 'function')) {
    target = {};
  }
  if (i === length) {
    target = this;
    i--;
  }
  for (; i < length; i++) {
    if (options = arguments[i]) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target === copy) {
          continue;
        }
        if (deep && copy && (self.$isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && self.$isPlainObject(src) ? src : {};
          }
          target[name] = self.$extend(deep, clone, copy);
        } else {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}


export {
  extend
}
