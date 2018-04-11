(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Redoc"] = factory();
	else
		root["Redoc"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("base64-js")
var ieee754 = __webpack_require__("ieee754")
var isArray = __webpack_require__("isarray")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{height:15px;bottom:0}.ps__rail-x,.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;position:absolute}.ps__rail-y{width:15px;right:0}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps__rail-x:focus,.ps__rail-x:hover,.ps__rail-y:focus,.ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px}.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}", "", {"version":3,"sources":["/Users/elena/Projects/CARTO/ReDoc/node_modules/perfect-scrollbar/css/perfect-scrollbar.css"],"names":[],"mappings":"AAGA,IACE,0BAA4B,AAC5B,qBAAsB,AACtB,wBAAyB,AACzB,kBAAmB,AACnB,qBAAuB,CACxB,AAKD,YAKE,YAAa,AAEb,QAAY,CAGb,AAED,wBAXE,aAAc,AACd,UAAW,AACX,0DAA4D,AAC5D,kEAAoE,AAKpE,iBAAmB,CAapB,AAVD,YAKE,WAAY,AAEZ,OAAS,CAGV,AAED,oDAEE,cAAe,AACf,4BAA8B,CAC/B,AAED,oJAME,UAAa,CACd,AAED,wEAIE,sBAAuB,AACvB,UAAa,CACd,AAKD,aAGE,8DAAgE,AAChE,sEAAwE,AACxE,WAAY,AAEZ,UAAY,CAGb,AAED,0BAXE,sBAAuB,AACvB,kBAAmB,AAOnB,iBAAmB,CAapB,AAVD,aAGE,6DAA+D,AAC/D,qEAAuE,AACvE,UAAW,AAEX,SAAW,CAGZ,AAED,8DAEE,sBAAuB,AACvB,WAAa,CACd,AAED,8DAEE,sBAAuB,AACvB,UAAY,CACb,AAGD,oCACE,IACE,uBAA0B,CAC3B,CACF,AAED,sEACE,IACE,uBAA0B,CAC3B,CACF","file":"perfect-scrollbar.css","sourcesContent":["/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps__rail-x:hover,\n.ps__rail-y:hover,\n.ps__rail-x:focus,\n.ps__rail-y:focus {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/prismjs/themes/prism-dark.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "code[class*=language-],pre[class*=language-]{color:#fff;background:none;text-shadow:0 -.1em .2em #000;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}:not(pre)>code[class*=language-],pre[class*=language-]{background:#4d4033}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border:.3em solid #7a6652;border-radius:.5em;box-shadow:inset 1px 1px .5em #000}:not(pre)>code[class*=language-]{padding:.15em .2em .05em;border-radius:.3em;border:.13em solid #7a6652;box-shadow:inset 1px 1px .3em -.1em #000;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#998066}.namespace,.token.punctuation{opacity:.7}.token.boolean,.token.constant,.token.number,.token.property,.token.symbol,.token.tag{color:#d1949e}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#bde052}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f5b83d}.token.atrule,.token.attr-value,.token.keyword{color:#d1949e}.token.important,.token.regex{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.deleted{color:red}", "", {"version":3,"sources":["/Users/elena/Projects/CARTO/ReDoc/node_modules/prismjs/themes/prism-dark.css"],"names":[],"mappings":"AAMA,6CAEC,WAAa,AACb,gBAAiB,AACjB,8BAAgC,AAChC,8DAAuE,AACvE,gBAAiB,AACjB,gBAAiB,AACjB,oBAAqB,AACrB,kBAAmB,AACnB,iBAAkB,AAClB,gBAAiB,AAEjB,gBAAiB,AACjB,cAAe,AACf,WAAY,AAEZ,qBAAsB,AACtB,kBAAmB,AACnB,iBAAkB,AAClB,YAAc,CACd,AAED,aACC,6CAEC,gBAAkB,CAClB,CACD,AAED,uDAEC,kBAA8B,CAC9B,AAGD,sBACC,YAAa,AACb,cAAe,AACf,cAAe,AACf,0BAAqC,AACrC,mBAAoB,AACpB,kCAAqC,CACrC,AAGD,iCACC,yBAA0B,AAC1B,mBAAoB,AACpB,2BAAsC,AACtC,yCAA2C,AAC3C,kBAAoB,CACpB,AAED,yDAIC,aAAyB,CACzB,AAMD,8BACC,UAAY,CACZ,AAED,sFAMC,aAA0B,CAC1B,AAED,0FAMC,aAAyB,CACzB,AAED,0GAMC,aAAyB,CACzB,AAED,+CAGC,aAA0B,CAC1B,AAED,8BAEC,UAAY,CACZ,AAED,6BAEC,eAAkB,CAClB,AACD,cACC,iBAAmB,CACnB,AAED,cACC,WAAa,CACb,AAED,eACC,SAAW,CACX","file":"prism-dark.css","sourcesContent":["/**\n * prism.js Dark theme for JavaScript, CSS and HTML\n * Based on the slides of the talk “/Reg(exp){2}lained/”\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: white;\n\tbackground: none;\n\ttext-shadow: 0 -.1em .2em black;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\npre[class*=\"language-\"],\n:not(pre) > code[class*=\"language-\"] {\n\tbackground: hsl(30, 20%, 25%);\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder: .3em solid hsl(30, 20%, 40%);\n\tborder-radius: .5em;\n\tbox-shadow: 1px 1px .5em black inset;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .15em .2em .05em;\n\tborder-radius: .3em;\n\tborder: .13em solid hsl(30, 20%, 40%);\n\tbox-shadow: 1px 1px .3em -.1em black inset;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: hsl(30, 20%, 50%);\n}\n\n.token.punctuation {\n\topacity: .7;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol {\n\tcolor: hsl(350, 40%, 70%);\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: hsl(75, 70%, 60%);\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: hsl(40, 90%, 60%);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: hsl(350, 40%, 70%);\n}\n\n.token.regex,\n.token.important {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\n.token.deleted {\n\tcolor: red;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/reftools/lib/clone.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
* a collection of cloning functions
*/
/**
* a no-op placeholder which returns the given object unchanged
* useful for when a clone function needs to be passed but cloning is not
* required
* @param obj the input object
* @return the input object, unchanged
*/
function nop(obj) {
    return obj;
}
/**
* clones the given object using JSON.parse and JSON.stringify
* @param obj the object to clone
* @return the cloned object
*/
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
* clones the given object's properties shallowly, ignores properties from prototype
* @param obj the object to clone
* @return the cloned object
*/
function shallowClone(obj) {
    var result = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            result[p] = obj[p];
        }
    }
    return result;
}
/**
* clones the given object's properties deeply, ignores properties from prototype
* @param obj the object to clone
* @return the cloned object
*/
function deepClone(obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p) || Array.isArray(obj)) {
            result[p] = (typeof obj[p] === 'object') ? deepClone(obj[p]) : obj[p];
        }
    }
    return result;
}
/**
* clones the given object's properties shallowly, using Object.assign
* @param obj the object to clone
* @return the cloned object
*/
function fastClone(obj) {
    return Object.assign({}, obj);
}
/**
* Source: stackoverflow http://bit.ly/2A1Kha6
*/
function circularClone(obj, hash) {
    if (!hash)
        hash = new WeakMap();
    // Do not try to clone primitives or functions
    if (Object(obj) !== obj || obj instanceof Function)
        return obj;
    if (hash.has(obj))
        return hash.get(obj); // Cyclic reference
    try {
        var result = new obj.constructor();
    }
    catch (e) {
        result = Object.create(Object.getPrototypeOf(obj));
    }
    // Optional: support for some standard constructors (extend as desired)
    /*if (obj instanceof Map)
        Array.from(obj, ([key, val]) => result.set(circularClone(key, hash),
                                                   circularClone(val, hash)) );
    else if (obj instanceof Set)
        Array.from(obj, (key) => result.add(circularClone(key, hash)) );
    */
    // Register in hash
    hash.set(obj, result);
    // Clone and assign enumerable own properties recursively
    return Object.assign.apply(Object, [result].concat(Object.keys(obj).map(function (key) {
        return (_a = {}, _a[key] = circularClone(obj[key], hash), _a);
        var _a;
    })));
}
module.exports = {
    nop: nop,
    clone: clone,
    shallowClone: shallowClone,
    deepClone: deepClone,
    fastClone: fastClone,
    circularClone: circularClone
};


/***/ }),

/***/ "./node_modules/reftools/lib/jptr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
* escapes JSON Pointer using ~0 for ~ and ~1 for /
* @param s the string to escape
* @return the escaped string
*/
function jpescape(s) {
    s = s.split('~').join('~0');
    s = s.split('/').join('~1');
    return s;
}
/**
* unescapes JSON Pointer using ~0 for ~ and ~1 for /
* @param s the string to unescape
* @return the unescaped string
*/
function jpunescape(s) {
    s = s.split('~1').join('/');
    s = s.split('~0').join('~');
    return s;
}
// JSON Pointer specification: http://tools.ietf.org/html/rfc6901
/**
* from obj, return the property with a JSON Pointer prop, optionally setting it
* to newValue
* @param obj the object to point into
* @param prop the JSON Pointer or JSON Reference
* @param newValue optional value to set the property to
* @return the found property, or false
*/
function jptr(obj, prop, newValue) {
    if (typeof obj === 'undefined')
        return false;
    if (!prop || (prop === '#'))
        return (typeof newValue !== 'undefined' ? newValue : obj);
    if (prop.indexOf('#') >= 0) {
        var parts = prop.split('#');
        var uri = parts[0];
        if (uri)
            return false; // we do internal resolution only
        prop = parts[1];
        prop = decodeURIComponent(prop.slice(1));
    }
    if (prop.startsWith('/'))
        prop = prop.slice(1);
    var components = prop.split('/');
    for (var i = 0; i < components.length; i++) {
        components[i] = jpunescape(components[i]);
        var setAndLast = (typeof newValue !== 'undefined') && (i == components.length - 1);
        var index = parseInt(components[i], 10);
        if (!Array.isArray(obj) || isNaN(index) || (index.toString() !== components[i])) {
            index = (Array.isArray(obj) && components[i] === '-') ? -2 : -1;
        }
        else {
            components[i] = (i > 0) ? components[i - 1] : ''; // backtrack to indexed property name
        }
        if ((index != -1) || obj.hasOwnProperty(components[i])) {
            if (index >= 0) {
                if (setAndLast) {
                    obj[index] = newValue;
                }
                obj = obj[index];
            }
            else if (index === -2) {
                if (setAndLast) {
                    if (Array.isArray(obj)) {
                        obj.push(newValue);
                    }
                    return newValue;
                }
                else
                    return undefined;
            }
            else {
                if (setAndLast) {
                    obj[components[i]] = newValue;
                }
                obj = obj[components[i]];
            }
        }
        else {
            if ((typeof newValue !== 'undefined') && (typeof obj === 'object') &&
                (!Array.isArray(obj))) {
                obj[components[i]] = (setAndLast ? newValue : ((components[i + 1] === '0' || components[i + 1] === '-') ? [] : {}));
                obj = obj[components[i]];
            }
            else
                return false;
        }
    }
    return obj;
}
module.exports = {
    jptr: jptr,
    jpescape: jpescape,
    jpunescape: jpunescape
};


/***/ }),

/***/ "./node_modules/reftools/lib/recurse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var jpescape = __webpack_require__("./node_modules/reftools/lib/jptr.js").jpescape;
function defaultState() {
    return {
        path: '#',
        depth: 0,
        pkey: '',
        parent: {},
        payload: {},
        seen: new WeakMap(),
        identity: false,
        identityDetection: false
    };
}
/**
* recurses through the properties of an object, given an optional starting state
* anything you pass in state.payload is passed to the callback each time
* @param object the object to recurse through
* @param state optional starting state, can be set to null or {}
* @param callback the function which receives object,key,state on each property
*/
function recurse(object, state, callback) {
    if (!state)
        state = { depth: 0 };
    if (!state.depth) {
        state = Object.assign({}, defaultState(), state);
    }
    if (typeof object !== 'object')
        return;
    var oPath = state.path;
    for (var key in object) {
        state.key = key;
        state.path = state.path + '/' + encodeURIComponent(jpescape(key));
        state.identityPath = state.seen.get(object[key]);
        state.identity = (typeof state.identityPath !== 'undefined');
        callback(object, key, state);
        if ((typeof object[key] === 'object') && (!state.identity)) {
            if (state.identityDetection && !Array.isArray(object[key]) && object[key] !== null) {
                state.seen.set(object[key], state.path);
            }
            var newState = {};
            newState.parent = object;
            newState.path = state.path;
            newState.depth = state.depth ? state.depth + 1 : 1;
            newState.pkey = key;
            newState.payload = state.payload;
            newState.seen = state.seen;
            newState.identity = false;
            newState.identityDetection = state.identityDetection;
            recurse(object[key], newState, callback);
        }
        state.path = oPath;
    }
}
module.exports = {
    recurse: recurse
};


/***/ }),

/***/ "./node_modules/swagger2openapi/common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fs = __webpack_require__("./node_modules/node-libs-browser/mock/empty.js");
var url = __webpack_require__("url");
var fetch = __webpack_require__("node-fetch");
var yaml = __webpack_require__("js-yaml");
var recurse = __webpack_require__("./node_modules/reftools/lib/recurse.js").recurse;
var jptr = __webpack_require__("./node_modules/reftools/lib/jptr.js").jptr;
var resolveInternal = jptr;
var clone = __webpack_require__("./node_modules/reftools/lib/clone.js").clone;
function uniqueOnly(value, index, self) {
    return self.indexOf(value) === index;
}
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
/**
 * simple hash implementation based on https://stackoverflow.com/a/7616484/1749888
 * @param {string} s - string to hash
 * @returns {number} numerical hash code
 */
function hash(s) {
    var hash = 0;
    var chr;
    if (s.length === 0)
        return hash;
    for (var i = 0; i < s.length; i++) {
        chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
String.prototype.toCamelCase = function camelize() {
    return this.toLowerCase().replace(/[-_ \/\.](.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
};
function getVersion() {
    return __webpack_require__("./node_modules/swagger2openapi/package.json").version;
}
function readFileAsync(filename, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, encoding, function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}
function resolveAllInternal(obj, context, options) {
    recurse(obj, {}, function (obj, key, state) {
        if (isRef(obj, key)) {
            if (obj[key].startsWith('#')) {
                if (options.verbose)
                    console.warn('Internal resolution', obj[key]);
                state.parent[state.pkey] = clone(resolveInternal(context, obj[key]));
            }
        }
    });
    return obj;
}
function resolveExternal(root, pointer, options, callback) {
    var u = url.parse(options.source);
    var base = options.source.split('\\').join('/').split('/');
    var doc = base.pop(); // drop the actual filename
    if (!doc)
        base.pop(); // in case it ended with a /
    var fragment = '';
    var fnComponents = pointer.split('#');
    if (fnComponents.length > 1) {
        fragment = '#' + fnComponents[1];
        pointer = fnComponents[0];
    }
    base = base.join('/');
    var u2 = url.parse(pointer);
    var effectiveProtocol = (u2.protocol ? u2.protocol : (u.protocol ? u.protocol : 'file:'));
    var target = url.resolve(base ? base + '/' : '', pointer);
    if (options.cache[target]) {
        if (options.verbose)
            console.log('CACHED', target);
        var context = clone(options.cache[target]);
        var data = context;
        if (fragment) {
            data = resolveInternal(data, fragment);
        }
        data = resolveAllInternal(data, context, options);
        callback(data, target);
        return Promise.resolve(data);
    }
    if (options.verbose)
        console.log('GET', target);
    if (options.handlers && options.handlers[effectiveProtocol]) {
        return options.handlers[effectiveProtocol](base, pointer, fragment, options)
            .then(function (data) {
            callback(data, target);
            return data;
        });
    }
    else if (u.protocol && u.protocol.startsWith('http')) {
        return fetch(target, { agent: options.agent })
            .then(function (res) {
            if (res.status !== 200)
                throw new Error("Received status code " + res.status);
            return res.text();
        })
            .then(function (data) {
            try {
                var context = data = yaml.safeLoad(data, { json: true });
                options.cache[target] = data;
                if (fragment) {
                    data = resolveInternal(data, fragment);
                }
                data = resolveAllInternal(data, context, options);
            }
            catch (ex) {
                if (options.verbose)
                    console.warn(ex);
            }
            callback(data, target);
            return data;
        })
            .catch(function (err) {
            if (options.verbose)
                console.warn(err);
        });
    }
    else {
        return readFileAsync(target, options.encoding || 'utf8')
            .then(function (data) {
            try {
                var context = data = yaml.safeLoad(data, { json: true });
                options.cache[target] = data;
                if (fragment) {
                    data = resolveInternal(data, fragment);
                }
                data = resolveAllInternal(data, context, options);
            }
            catch (ex) {
                if (options.verbose)
                    console.warn(ex);
            }
            callback(data, target);
            return data;
        })
            .catch(function (err) {
            console.warn(err.message);
            if (options.promise)
                options.promise.reject(err);
        });
    }
}
var parameterTypeProperties = [
    'format',
    'minimum',
    'maximum',
    'exclusiveMinimum',
    'exclusiveMaximum',
    'minLength',
    'maxLength',
    'multipleOf',
    'minItems',
    'maxItems',
    'uniqueItems',
    'minProperties',
    'maxProperties',
    'additionalProperties',
    'pattern',
    'enum',
    'default'
];
var arrayProperties = [
    'items',
    'minItems',
    'maxItems',
    'uniqueItems'
];
var httpVerbs = [
    'get',
    'post',
    'put',
    'delete',
    'patch',
    'head',
    'options',
    'trace'
];
function sanitise(s) {
    s = s.replace('[]', 'Array');
    var components = s.split('/');
    components[0] = components[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm, '_');
    return components.join('/');
}
function sanitiseAll(s) {
    return sanitise(s.split('/').join('_'));
}
function isRef(obj, key) {
    return ((key === '$ref') && (typeof obj[key] === 'string'));
}
module.exports = {
    clone: clone,
    uniqueOnly: uniqueOnly,
    hasDuplicates: hasDuplicates,
    recurse: recurse,
    hash: hash,
    getVersion: getVersion,
    resolveExternal: resolveExternal,
    resolveInternal: jptr,
    parameterTypeProperties: parameterTypeProperties,
    arrayProperties: arrayProperties,
    httpVerbs: httpVerbs,
    sanitise: sanitise,
    sanitiseAll: sanitiseAll,
    isRef: isRef
};


/***/ }),

/***/ "./node_modules/swagger2openapi/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @ts-check

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fs = __webpack_require__("./node_modules/node-libs-browser/mock/empty.js");
var url = __webpack_require__("url");
var pathlib = __webpack_require__("./node_modules/path-browserify/index.js");
var co = __webpack_require__("co");
var maybe = __webpack_require__("call-me-maybe");
var fetch = __webpack_require__("node-fetch");
var yaml = __webpack_require__("js-yaml");
var jptr = __webpack_require__("./node_modules/reftools/lib/jptr.js");
var common = __webpack_require__("./node_modules/swagger2openapi/common.js");
var walkSchema = __webpack_require__("./node_modules/swagger2openapi/walkSchema.js").walkSchema;
var statusCodes = __webpack_require__("./node_modules/swagger2openapi/statusCodes.js").statusCodes;
// TODO split out into params, security etc
// TODO handle specification-extensions with plugins?
var targetVersion = '3.0.0';
var componentNames; // initialised in main
function throwError(message, options) {
    var err = new Error(message);
    err.options = options;
    if (options.promise) {
        options.promise.reject(err);
    }
    else {
        throw err;
    }
}
function throwOrWarn(message, container, options) {
    if (options.warnOnly) {
        container[options.warnProperty || 'x-s2o-warning'] = message;
    }
    else {
        throwError(message, options);
    }
}
function fixUpSubSchema(schema, parent) {
    if (schema.discriminator && typeof schema.discriminator === 'string') {
        schema.discriminator = { propertyName: schema.discriminator };
    }
    if (schema.items && Array.isArray(schema.items)) {
        if (schema.items.length === 0) {
            schema.items = {};
        }
        else if (schema.items.length === 1) {
            schema.items = schema.items[0];
        }
        else
            schema.items = { anyOf: schema.items };
    }
    if (schema.type && Array.isArray(schema.type)) {
        if (schema.type.length === 0) {
            delete schema.type;
        }
        else {
            if (!schema.oneOf)
                schema.oneOf = [];
            for (var _i = 0, _a = schema.type; _i < _a.length; _i++) {
                var type = _a[_i];
                var newSchema = {};
                if (type === 'null') {
                    schema.nullable = true;
                }
                else {
                    newSchema.type = type;
                    for (var _b = 0, _c = common.arrayProperties; _b < _c.length; _b++) {
                        var prop = _c[_b];
                        if (typeof schema.prop !== 'undefined') {
                            newSchema[prop] = schema[prop];
                            delete schema[prop];
                        }
                    }
                }
                if (newSchema.type) {
                    schema.oneOf.push(newSchema);
                }
            }
            delete schema.type;
            if (schema.oneOf.length === 0) {
                delete schema.oneOf; // means was just null => nullable
            }
            else if (schema.oneOf.length < 2) {
                schema.type = schema.oneOf[0].type;
                if (Object.keys(schema.oneOf[0]).length > 1) {
                    throwOrWarn('Lost properties from oneOf', schema, options);
                }
                delete schema.oneOf;
            }
        }
        // do not else this
        if (schema.type && Array.isArray(schema.type) && schema.type.length === 1) {
            schema.type = schema.type[0];
        }
    }
    if (schema.type && schema.type === 'null') {
        delete schema.type;
        schema.nullable = true;
    }
    if ((schema.type === 'array') && (!schema.items)) {
        schema.items = {};
    }
    if (typeof schema.required === 'boolean') {
        if (schema.required && schema.name) {
            if (typeof parent.required === 'undefined') {
                parent.required = [];
            }
            if (Array.isArray(parent.required))
                parent.required.push(schema.name);
        }
        delete schema.required;
    }
    // TODO if we have a nested properties (object inside an object) and the
    // *parent* type is not set, force it to object
    // TODO if default is set but type is not set, force type to typeof default
}
function fixUpSubSchemaExtensions(schema, parent) {
    if (schema["x-required"] && Array.isArray(schema["x-required"])) {
        if (!schema.required)
            schema.required = [];
        schema.required = schema.required.concat(schema["x-required"]);
        delete schema["x-required"];
    }
    if (schema["x-anyOf"]) {
        schema.anyOf = schema["x-anyOf"];
        delete schema["x-anyOf"];
    }
    if (schema["x-oneOf"]) {
        schema.anyOf = schema["x-oneOf"];
        delete schema["x-oneOf"];
    }
    if (schema["x-not"]) {
        schema.anyOf = schema["x-not"];
        delete schema["x-not"];
    }
    if (typeof schema["x-nullable"] === 'boolean') {
        schema.nullable = schema["x-nullable"];
        delete schema["x-nullable"];
    }
}
function fixUpSchema(schema) {
    walkSchema(schema, {}, {}, function (schema, parent, state) {
        fixUpSubSchemaExtensions(schema, parent);
        fixUpSubSchema(schema, parent);
    });
}
function fixupRefs(obj, key, state) {
    var options = state.payload.options;
    if (common.isRef(obj, key)) {
        if (obj[key].startsWith('#/components/')) {
            // nop
        }
        else if (obj[key].startsWith('#/definitions/')) {
            //only the first part of a schema component name must be sanitised
            var keys = obj[key].replace('#/definitions/', '').split('/');
            var newKey = componentNames.schemas[decodeURIComponent(keys[0])]; // lookup, resolves a $ref
            if (!newKey) {
                throwOrWarn('Could not resolve reference ' + obj[key], obj, options);
            }
            else {
                keys[0] = newKey;
            }
            obj[key] = '#/components/schemas/' + keys.join('/');
        }
        else if (obj[key].startsWith('#/parameters/')) {
            // for extensions like Apigee's x-templates
            obj[key] = '#/components/parameters/' + common.sanitise(obj[key].replace('#/parameters/', ''));
        }
        else if (obj[key].startsWith('#/responses/')) {
            // for extensions like Apigee's x-templates
            obj[key] = '#/components/responses/' + common.sanitise(obj[key].replace('#/responses/', ''));
        }
        else if (obj[key].startsWith('#')) {
            // fixes up direct $refs or those created by resolvers
            var target = common.clone(jptr.jptr(options.openapi, obj[key]));
            if (target === false)
                throwOrWarn('direct $ref not found ' + obj[key], obj, options);
            else if (options.refmap[obj[key]]) {
                obj[key] = options.refmap[obj[key]];
            }
            else {
                // we use a heuristic to determine what kind of thing is being referenced
                var oldRef = obj[key];
                oldRef = oldRef.replace('/properties/headers/', '');
                oldRef = oldRef.replace('/properties/responses/', '');
                oldRef = oldRef.replace('/properties/parameters/', '');
                oldRef = oldRef.replace('/properties/schemas/', '');
                var type = 'schemas';
                var schemaIndex = oldRef.lastIndexOf('/schema');
                type = (oldRef.indexOf('/headers/') > schemaIndex) ? 'headers' :
                    ((oldRef.indexOf('/responses/') > schemaIndex) ? 'responses' :
                        ((oldRef.indexOf('/example') > schemaIndex) ? 'examples' :
                            ((oldRef.indexOf('/parameters/') > schemaIndex) ? 'parameters' : 'schemas')));
                // non-body/form parameters have not moved in the overall structure (like responses)
                // but extracting the requestBodies can cause the *number* of parameters to change
                if (type === 'schemas') {
                    fixUpSchema(target);
                }
                if (type !== 'responses') {
                    var prefix = type.substr(0, type.length - 1);
                    if ((prefix === 'parameter') && target.name && (target.name === common.sanitise(target.name))) {
                        prefix = encodeURIComponent(target.name);
                    }
                    var suffix = 1;
                    while (jptr.jptr(options.openapi, '#/components/' + type + '/' + prefix + suffix))
                        suffix++;
                    var newRef = '#/components/' + type + '/' + prefix + suffix;
                    var refSuffix = '';
                    if (type === 'examples') {
                        target = { value: target };
                        refSuffix = '/value';
                    }
                    jptr.jptr(options.openapi, newRef, target);
                    options.refmap[obj[key]] = newRef + refSuffix;
                    obj[key] = newRef + refSuffix;
                }
            }
        }
    }
    if ((key === 'x-ms-odata') && (typeof obj[key] === 'string') && (obj[key].startsWith('#/'))) {
        var keys = obj[key].replace('#/definitions/', '').replace('#/components/schemas/', '').split('/');
        var newKey = componentNames.schemas[decodeURIComponent(keys[0])]; // lookup, resolves a $ref
        if (!newKey) {
            throwOrWarn('Could not resolve reference ' + obj[key], obj, options);
        }
        else {
            keys[0] = newKey;
        }
        obj[key] = '#/components/schemas/' + keys.join('/');
    }
}
/*
* This has to happen as a separate pass because multiple $refs may point
* through elements of the same path
*/
function dedupeRefs(openapi, options) {
    for (var ref in options.refmap) {
        jptr.jptr(openapi, ref, { $ref: options.refmap[ref] });
    }
}
function processSecurity(securityObject) {
    for (var s in securityObject) {
        for (var k in securityObject[s]) {
            var sname = common.sanitise(k);
            if (k != sname) {
                securityObject[s][sname] = securityObject[s][k];
                delete securityObject[s][k];
            }
        }
    }
}
function processSecurityScheme(scheme, options) {
    if (scheme.type === 'basic') {
        scheme.type = 'http';
        scheme.scheme = 'basic';
    }
    if (scheme.type === 'oauth2') {
        var flow = {};
        var flowName = scheme.flow;
        if (scheme.flow === 'application')
            flowName = 'clientCredentials';
        if (scheme.flow === 'accessCode')
            flowName = 'authorizationCode';
        if (typeof scheme.authorizationUrl !== 'undefined')
            flow.authorizationUrl = scheme.authorizationUrl.split('?')[0].trim() || '/';
        if (typeof scheme.tokenUrl !== 'undefined')
            flow.tokenUrl = scheme.tokenUrl.split('?')[0].trim() || '/';
        flow.scopes = scheme.scopes || {};
        scheme.flows = {};
        scheme.flows[flowName] = flow;
        delete scheme.flow;
        delete scheme.authorizationUrl;
        delete scheme.tokenUrl;
        delete scheme.scopes;
        if (typeof scheme.name !== 'undefined') {
            if (options.patch) {
                delete scheme.name;
            }
            else {
                throwError('(Patchable) oauth2 securitySchemes should not have name property', options);
            }
        }
    }
}
function deleteParameters(value) {
    return !value["x-s2o-delete"];
}
function processHeader(header, options) {
    if (header.$ref) {
        header.$ref = header.$ref.replace('#/responses/', '#/components/responses/');
    }
    else {
        if (header.type && !header.schema) {
            header.schema = {};
        }
        if (header.type)
            header.schema.type = header.type;
        if (header.items && header.items.collectionFormat) {
            if (header.items.type && header.items.type != 'array') {
                if (header.items.collectionFormat != header.collectionFormat) {
                    throwOrWarn('Nested collectionFormats are not supported', header, options);
                }
                delete header.items.collectionFormat;
            }
        }
        if (typeof header.collectionFormat !== 'undefined') {
            if (header.type != 'array') {
                if (options.patch) {
                    delete header.collectionFormat;
                }
                else {
                    throwError('(Patchable) collectionFormat is only applicable to header.type array', options);
                }
            }
            if (header.collectionFormat === 'csv') {
                header.style = 'simple';
            }
            if (header.collectionFormat === 'ssv') {
                throwOrWarn('collectionFormat:ssv is no longer supported for headers', header, options); // not lossless
            }
            if (header.collectionFormat === 'pipes') {
                throwOrWarn('collectionFormat:pipes is no longer supported for headers', header, options); // not lossless
            }
            if (header.collectionFormat === 'multi') {
                header.explode = true;
            }
            if (header.collectionFormat === 'tsv') {
                throwOrWarn('collectionFormat:tsv is no longer supported', header, options); // not lossless
                header["x-collectionFormat"] = 'tsv';
            }
            delete header.collectionFormat;
        }
        delete header.type;
        for (var _i = 0, _a = common.parameterTypeProperties; _i < _a.length; _i++) {
            var prop = _a[_i];
            if (typeof header[prop] !== 'undefined') {
                header.schema[prop] = header[prop];
                delete header[prop];
            }
        }
        for (var _b = 0, _c = common.arrayProperties; _b < _c.length; _b++) {
            var prop = _c[_b];
            if (typeof header[prop] !== 'undefined') {
                header.schema[prop] = header[prop];
                delete header[prop];
            }
        }
    }
}
function fixParamRef(param, options) {
    if (param.$ref.indexOf('#/parameters/') >= 0) {
        var refComponents = param.$ref.split('#/parameters/');
        param.$ref = refComponents[0] + '#/components/parameters/' + common.sanitise(refComponents[1]);
    }
    if (param.$ref.indexOf('#/definitions/') >= 0) {
        throwOrWarn('Definition used as parameter', param, options);
    }
}
/**
 * @returns requestBody
 */
function processParameter(param, op, path, index, openapi, options) {
    var result = {};
    var singularRequestBody = true;
    var consumes = ((op && op.consumes) || (openapi.consumes || [])).filter(common.uniqueOnly);
    if (param.$ref && (typeof param.$ref === 'string')) {
        // if we still have a ref here, it must be an internal one
        fixParamRef(param, options);
        var ptr = decodeURIComponent(param.$ref.replace('#/components/parameters/', ''));
        var rbody = false;
        var target = openapi.components.parameters[ptr]; // resolves a $ref, must have been sanitised already
        if (((!target) || (target["x-s2o-delete"])) && param.$ref.startsWith('#/')) {
            // if it's gone, chances are it's a requestBody component now unless spec was broken
            param["x-s2o-delete"] = true;
            rbody = true;
        }
        // shared formData parameters from swagger or path level could be used in any combination.
        // we dereference all op.requestBody's then hash them and pull out common ones later
        if (rbody) {
            var ref = param.$ref;
            var newParam = common.resolveInternal(openapi, param.$ref);
            if (!newParam && ref.startsWith('#/')) {
                throwOrWarn('Could not resolve reference ' + ref, param, options);
            }
            else {
                if (newParam)
                    param = newParam; // preserve reference
            }
        }
    }
    if (param.name || param.in) {
        if (typeof param['x-deprecated'] === 'boolean') {
            param.deprecated = param['x-deprecated'];
            delete param['x-deprecated'];
        }
        if (typeof param['x-example'] !== 'undefined') {
            param.example = param['x-example'];
            delete param['x-example'];
        }
        if ((param.in != 'body') && (!param.type)) {
            if (options.patch) {
                param.type = 'string';
            }
            else {
                throwError('(Patchable) parameter.type is mandatory for non-body parameters', options);
            }
        }
        if (param.type && typeof param.type === 'object' && param.type.$ref) {
            // $ref anywhere sensibility
            param.type = resolveInternal(openapi, param.type.$ref);
        }
        if (param.description && typeof param.description === 'object' && param.description.$ref) {
            // $ref anywhere sensibility
            param.description = resolveInternal(openapi, param.description.$ref);
        }
        var oldCollectionFormat = param.collectionFormat;
        if (param.collectionFormat) {
            if (param.type != 'array') {
                if (options.patch) {
                    delete param.collectionFormat;
                }
                else {
                    throwError('(Patchable) collectionFormat is only applicable to param.type array', options);
                }
            }
            if ((param.collectionFormat === 'csv') && ((param.in === 'query') || (param.in === 'cookie'))) {
                param.style = 'form';
            }
            if ((param.collectionFormat === 'csv') && ((param.in === 'path') || (param.in === 'header'))) {
                param.style = 'simple';
            }
            if (param.collectionFormat === 'ssv') {
                if (param.in === 'query') {
                    param.style = 'spaceDelimited';
                }
                else {
                    throwOrWarn('collectionFormat:ssv is no longer supported except for in:query parameters', param, options); // not lossless
                }
            }
            if (param.collectionFormat === 'pipes') {
                if (param.in === 'query') {
                    param.style = 'pipeDelimited';
                }
                else {
                    throwOrWarn('collectionFormat:pipes is no longer supported except for in:query parameters', param, options); // not lossless
                }
            }
            if (param.collectionFormat === 'multi') {
                param.explode = true;
            }
            if (param.collectionFormat === 'tsv') {
                throwOrWarn('collectionFormat:tsv is no longer supported', param, options); // not lossless
                param["x-collectionFormat"] = 'tsv';
            }
            delete param.collectionFormat;
        }
        if (param.type && (param.type != 'object') && (param.type != 'body') && (param.in != 'formData')) {
            if (param.items && param.schema) {
                throwOrWarn('parameter has array,items and schema', param, options);
            }
            else {
                if ((!param.schema) || (typeof param.schema !== 'object'))
                    param.schema = {};
                param.schema.type = param.type;
                if (param.items) {
                    param.schema.items = param.items;
                    delete param.items;
                    common.recurse(param.schema.items, null, function (obj, key, state) {
                        if ((key === 'collectionFormat') && (typeof obj[key] === 'string')) {
                            if (oldCollectionFormat && obj[key] !== oldCollectionFormat) {
                                throwOrWarn('Nested collectionFormats are not supported', param, options);
                            }
                            delete obj[key]; // not lossless
                        }
                        // items in 2.0 was a subset of JSON-Schema items object, it gets
                        // fixed up below
                    });
                }
                for (var _i = 0, _a = common.parameterTypeProperties; _i < _a.length; _i++) {
                    var prop = _a[_i];
                    if (typeof param[prop] !== 'undefined')
                        param.schema[prop] = param[prop];
                    delete param[prop];
                }
            }
        }
        if (param.schema) {
            fixUpSchema(param.schema);
        }
        if (param["x-ms-skip-url-encoding"]) {
            if (param.in === 'query') {
                param.allowReserved = true;
                delete param["x-ms-skip-url-encoding"];
            }
        }
    }
    if (param.in === 'formData') {
        // convert to requestBody component
        singularRequestBody = false;
        result.content = {};
        var contentType = 'application/x-www-form-urlencoded';
        if ((consumes.length) && (consumes.indexOf('multipart/form-data') >= 0)) {
            contentType = 'multipart/form-data';
        }
        result.content[contentType] = {};
        if (param.schema) {
            result.content[contentType].schema = param.schema;
            if (param.schema.$ref) {
                result['x-s2o-name'] = decodeURIComponent(param.schema.$ref.replace('#/components/schemas/', ''));
            }
        }
        else {
            result.content[contentType].schema = {};
            result.content[contentType].schema.type = 'object';
            result.content[contentType].schema.properties = {};
            result.content[contentType].schema.properties[param.name] = {};
            var schema = result.content[contentType].schema;
            var target = result.content[contentType].schema.properties[param.name];
            if (param.description)
                target.description = param.description;
            if (param.example)
                target.example = param.example;
            if (param.type)
                target.type = param.type;
            for (var _b = 0, _c = common.parameterTypeProperties; _b < _c.length; _b++) {
                var prop = _c[_b];
                if (typeof param[prop] !== 'undefined')
                    target[prop] = param[prop];
            }
            if (param.required === true) {
                if (!schema.required)
                    schema.required = [];
                schema.required.push(param.name);
            }
            if (typeof param.default !== 'undefined')
                target.default = param.default;
            if (target.properties)
                target.properties = param.properties;
            if (param.allOf)
                target.allOf = param.allOf; // new are anyOf, oneOf, not, x- vendor extensions?
            if ((param.type === 'array') && (param.items)) {
                target.items = param.items;
                if (target.items.collectionFormat)
                    delete target.items.collectionFormat;
            }
            if (param.type === 'file') {
                target.type = 'string';
                target.format = 'binary';
            }
        }
    }
    else if (param.type === 'file') {
        // convert to requestBody
        if (param.required)
            result.required = param.required;
        result.content = {};
        result.content["application/octet-stream"] = {};
        result.content["application/octet-stream"].schema = {};
        result.content["application/octet-stream"].schema.type = 'string';
        result.content["application/octet-stream"].schema.format = 'binary';
    }
    if (param.in === 'body') {
        result.content = {};
        if (param.name)
            result['x-s2o-name'] = (op && op.operationId ? common.sanitiseAll(op.operationId) : '') + ('_' + param.name).toCamelCase();
        if (param.description)
            result.description = param.description;
        if (param.required)
            result.required = param.required;
        if (param.schema && param.schema.$ref) {
            result['x-s2o-name'] = decodeURIComponent(param.schema.$ref.replace('#/components/schemas/', ''));
        }
        else if (param.schema && (param.schema.type === 'array') && param.schema.items && param.schema.items.$ref) {
            result['x-s2o-name'] = decodeURIComponent(param.schema.items.$ref.replace('#/components/schemas/', '')) + 'Array';
        }
        if (!consumes.length) {
            consumes.push('application/json'); // TODO verify default
        }
        for (var _d = 0, consumes_1 = consumes; _d < consumes_1.length; _d++) {
            var mimetype = consumes_1[_d];
            result.content[mimetype] = {};
            result.content[mimetype].schema = common.clone(param.schema) || {};
            fixUpSchema(result.content[mimetype].schema);
        }
    }
    if (Object.keys(result).length > 0) {
        param["x-s2o-delete"] = true;
        // work out where to attach the requestBody
        if (op) {
            if (op.requestBody && singularRequestBody) {
                op.requestBody["x-s2o-overloaded"] = true;
                var opId = op.operationId || index;
                throwOrWarn('Operation ' + opId + ' has multiple requestBodies', op, options);
            }
            else {
                op.requestBody = Object.assign({}, op.requestBody); // make sure we have one
                if ((op.requestBody.content && op.requestBody.content["multipart/form-data"])
                    && (result.content["multipart/form-data"])) {
                    op.requestBody.content["multipart/form-data"].schema.properties =
                        Object.assign(op.requestBody.content["multipart/form-data"].schema.properties, result.content["multipart/form-data"].schema.properties);
                    op.requestBody.content["multipart/form-data"].schema.required = (op.requestBody.content["multipart/form-data"].schema.required || []).concat(result.content["multipart/form-data"].schema.required || []);
                    if (!op.requestBody.content["multipart/form-data"].schema.required.length) {
                        delete op.requestBody.content["multipart/form-data"].schema.required;
                    }
                }
                else if ((op.requestBody.content && op.requestBody.content["application/x-www-form-urlencoded"])
                    && (result.content["application/x-www-form-urlencoded"])) {
                    op.requestBody.content["application/x-www-form-urlencoded"].schema.properties =
                        Object.assign(op.requestBody.content["application/x-www-form-urlencoded"].schema.properties, result.content["application/x-www-form-urlencoded"].schema.properties);
                    op.requestBody.content["application/x-www-form-urlencoded"].schema.required = (op.requestBody.content["application/x-www-form-urlencoded"].schema.required || []).concat(result.content["application/x-www-form-urlencoded"].schema.required || []);
                    if (!op.requestBody.content["application/x-www-form-urlencoded"].schema.required.length) {
                        delete op.requestBody.content["application/x-www-form-urlencoded"].schema.required;
                    }
                }
                else {
                    op.requestBody = Object.assign(op.requestBody, result);
                    if (!op.requestBody['x-s2o-name']) {
                        if (op.requestBody.schema && op.requestBody.schema.$ref) {
                            op.requestBody['x-s2o-name'] = decodeURIComponent(op.requestBody.schema.$ref.replace('#/components/schemas/', '')).split('/').join('');
                        }
                        else if (op.operationId) {
                            op.requestBody['x-s2o-name'] = common.sanitiseAll(op.operationId);
                        }
                    }
                }
            }
        }
    }
    // tidy up
    delete param.type;
    for (var _e = 0, _f = common.parameterTypeProperties; _e < _f.length; _e++) {
        var prop = _f[_e];
        delete param[prop];
    }
    if ((param.in === 'path') && ((typeof param.required === 'undefined') || (param.required !== true))) {
        if (options.patch) {
            param.required = true;
        }
        else {
            throwError('(Patchable) path parameters must be required:true', options);
        }
    }
    return result;
}
function processResponse(response, name, op, openapi, options) {
    if (response.$ref && (typeof response.$ref === 'string')) {
        if (response.$ref.indexOf('#/definitions/') >= 0) {
            //response.$ref = '#/components/schemas/'+common.sanitise(response.$ref.replace('#/definitions/',''));
            throwOrWarn('definition used as response: ' + response.$ref, response, options);
        }
        else {
            if (response.$ref.startsWith('#/responses/')) {
                response.$ref = '#/components/responses/' + common.sanitise(decodeURIComponent(response.$ref.replace('#/responses/', '')));
            }
        }
    }
    else {
        if ((typeof response.description === 'undefined') || (response.description === null)
            || ((response.description === '') && options.patch)) {
            if (options.patch) {
                var sc = statusCodes.find(function (e) {
                    return e.code === name;
                });
                if ((typeof response === 'object') && (!Array.isArray(response))) {
                    response.description = (sc ? sc.phrase : '');
                }
            }
            else {
                throwError('(Patchable) response.description is mandatory', options);
            }
        }
        if (response.schema) {
            fixUpSchema(response.schema);
            if (response.schema.$ref && (typeof response.schema.$ref === 'string') && response.schema.$ref.startsWith('#/responses/')) {
                response.schema.$ref = '#/components/responses/' + common.sanitise(decodeURIComponent(response.schema.$ref.replace('#/responses/', '')));
            }
            var produces = ((op && op.produces) || (openapi.produces || [])).filter(common.uniqueOnly);
            if (!produces.length)
                produces.push('*/*'); // TODO verify default
            response.content = {};
            for (var _i = 0, produces_1 = produces; _i < produces_1.length; _i++) {
                var mimetype = produces_1[_i];
                response.content[mimetype] = {};
                response.content[mimetype].schema = common.clone(response.schema);
                if (response.examples && response.examples[mimetype]) {
                    var example = {};
                    example.value = response.examples[mimetype];
                    response.content[mimetype].examples = {};
                    response.content[mimetype].examples.response = example;
                    delete response.examples[mimetype];
                }
                if (response.content[mimetype].schema.type === 'file') {
                    response.content[mimetype].schema = { type: 'string', format: 'binary' };
                }
            }
            delete response.schema;
        }
        // examples for content-types not listed in produces
        for (var mimetype in response.examples) {
            if (!response.content)
                response.content = {};
            if (!response.content[mimetype])
                response.content[mimetype] = {};
            response.content[mimetype].examples = {};
            response.content[mimetype].examples.response = {};
            response.content[mimetype].examples.response.value = response.examples[mimetype];
        }
        delete response.examples;
        if (response.headers) {
            for (var h in response.headers) {
                if (h.toLowerCase() === 'status code') {
                    if (options.patch) {
                        delete response.headers[h];
                    }
                    else {
                        throwError('(Patchable) "Status Code" is not a valid header', options);
                    }
                }
                else {
                    processHeader(response.headers[h], options);
                }
            }
        }
    }
}
function processPaths(container, containerName, options, requestBodyCache, openapi) {
    for (var p in container) {
        var path = container[p];
        // path.$ref is external only
        if ((path['x-trace']) && (typeof path['x-trace'] === 'object')) {
            path.trace = path['x-trace'];
            delete path['x-trace'];
        }
        if ((path['x-summary']) && (typeof path['x-summary'] === 'string')) {
            path.summary = path['x-summary'];
            delete path['x-summary'];
        }
        if ((path['x-description']) && (typeof path['x-description'] === 'string')) {
            path.description = path['x-description'];
            delete path['x-description'];
        }
        if ((path['x-servers']) && (Array.isArray(path['x-servers']))) {
            path.servers = path['x-servers'];
            delete path['x-servers'];
        }
        for (var method in path) {
            if ((common.httpVerbs.indexOf(method) >= 0) || (method === 'x-amazon-apigateway-any-method')) {
                var op = path[method];
                if (op.parameters && Array.isArray(op.parameters)) {
                    if (path.parameters) {
                        var _loop_1 = function (param_1) {
                            if (typeof param_1.$ref === 'string') {
                                fixParamRef(param_1, options);
                                param_1 = common.resolveInternal(openapi, param_1.$ref);
                            }
                            match = op.parameters.find(function (e, i, a) {
                                return ((e.name === param_1.name) && (e.in === param_1.in));
                            });
                            if (!match && (param_1.in === 'formData') || (param_1.in === 'body') || (param_1.type === 'file')) {
                                processParameter(param_1, op, path, p, openapi, options);
                            }
                        };
                        var match;
                        for (var _i = 0, _a = path.parameters; _i < _a.length; _i++) {
                            var param_1 = _a[_i];
                            _loop_1(param_1);
                        }
                    }
                    for (var _b = 0, _c = op.parameters; _b < _c.length; _b++) {
                        var param_2 = _c[_b];
                        processParameter(param_2, op, path, method + ':' + p, openapi, options);
                    }
                    if (!options.debug) {
                        op.parameters = op.parameters.filter(deleteParameters);
                    }
                }
                if (op.security)
                    processSecurity(op.security);
                //don't need to remove requestBody for non-supported ops as they "SHALL be ignored"
                // responses
                if (!op.responses) {
                    var defaultResp = {};
                    defaultResp.description = 'Default response';
                    op.responses = { default: defaultResp };
                }
                for (var r in op.responses) {
                    var response = op.responses[r];
                    processResponse(response, r, op, openapi, options);
                }
                if ((op['x-servers']) && (Array.isArray(op['x-servers']))) {
                    op.servers = op['x-servers'];
                    delete op['x-servers'];
                }
                else if (op.schemes && op.schemes.length) {
                    for (var _d = 0, _e = op.schemes; _d < _e.length; _d++) {
                        var scheme = _e[_d];
                        if ((!openapi.schemes) || (openapi.schemes.indexOf(scheme) < 0)) {
                            if (!op.servers) {
                                op.servers = [];
                            }
                            for (var _f = 0, _g = openapi.servers; _f < _g.length; _f++) {
                                var server = _g[_f];
                                var newServer = common.clone(server);
                                var serverUrl = url.parse(newServer.url);
                                serverUrl.protocol = scheme;
                                newServer.url = serverUrl.format();
                                op.servers.push(newServer);
                            }
                        }
                    }
                }
                if (options.debug) {
                    op["x-s2o-consumes"] = op.consumes || [];
                    op["x-s2o-produces"] = op.produces || [];
                }
                delete op.consumes;
                delete op.produces;
                delete op.schemes;
                if (op["x-ms-examples"]) {
                    for (var e in op["x-ms-examples"]) {
                        var example = op["x-ms-examples"][e];
                        var se = common.sanitiseAll(e);
                        if (example.parameters) {
                            for (var p_1 in example.parameters) {
                                var value = example.parameters[p_1];
                                for (var _h = 0, _j = (op.parameters || []).concat(path.parameters || []); _h < _j.length; _h++) {
                                    var param = _j[_h];
                                    if (param.$ref) {
                                        param = jptr.jptr(openapi, param.$ref);
                                    }
                                    if ((param.name === p_1) && (!param.example)) {
                                        if (!param.examples) {
                                            param.examples = {};
                                        }
                                        param.examples[e] = { value: value };
                                    }
                                }
                            }
                        }
                        if (example.responses) {
                            for (var r in example.responses) {
                                if (example.responses[r].headers) {
                                    for (var h in example.responses[r].headers) {
                                        var value = example.responses[r].headers[h];
                                        for (var rh in op.responses[r].headers) {
                                            if (rh === h) {
                                                var header = op.responses[r].headers[rh];
                                                header.example = value;
                                            }
                                        }
                                    }
                                }
                                if (example.responses[r].body) {
                                    openapi.components.examples[se] = { value: common.clone(example.responses[r].body) };
                                    if (op.responses[r] && op.responses[r].content) {
                                        for (var ct in op.responses[r].content) {
                                            var contentType = op.responses[r].content[ct];
                                            if (!contentType.examples) {
                                                contentType.examples = {};
                                            }
                                            contentType.examples[e] = { $ref: '#/components/examples/' + se };
                                        }
                                    }
                                }
                            }
                        }
                    }
                    delete op["x-ms-examples"];
                }
                if (op.parameters && op.parameters.length === 0)
                    delete op.parameters;
                if (op.requestBody) {
                    var effectiveOperationId = op.operationId ? common.sanitiseAll(op.operationId) : common.sanitiseAll(method + p).toCamelCase();
                    var rbName = common.sanitise(op.requestBody['x-s2o-name'] || effectiveOperationId || '');
                    delete op.requestBody['x-s2o-name'];
                    var rbStr = JSON.stringify(op.requestBody);
                    var rbHash = common.hash(rbStr);
                    if (!requestBodyCache[rbHash]) {
                        var entry = {};
                        entry.name = rbName;
                        entry.body = op.requestBody;
                        entry.refs = [];
                        requestBodyCache[rbHash] = entry;
                    }
                    var ptr = '#/' + containerName + '/' + encodeURIComponent(jptr.jpescape(p)) + '/' + method + '/requestBody';
                    requestBodyCache[rbHash].refs.push(ptr);
                }
            }
        }
        if (path.parameters) {
            for (var p2 in path.parameters) {
                var param = path.parameters[p2];
                processParameter(param, null, path, p, openapi, options); // index here is the path string
            }
            if (!options.debug) {
                path.parameters = path.parameters.filter(deleteParameters);
            }
        }
    }
}
function main(openapi, options) {
    var requestBodyCache = {};
    componentNames = { schemas: {} };
    if (openapi.security)
        processSecurity(openapi.security);
    for (var s in openapi.components.securitySchemes) {
        var sname = common.sanitise(s);
        if (s != sname) {
            if (openapi.components.securitySchemes[sname]) {
                throwError('Duplicate sanitised securityScheme name ' + sname, options);
            }
            openapi.components.securitySchemes[sname] = openapi.components.securitySchemes[s];
            delete openapi.components.securitySchemes[s];
        }
        processSecurityScheme(openapi.components.securitySchemes[sname], options);
    }
    for (var s in openapi.components.schemas) {
        var sname = common.sanitiseAll(s);
        var suffix_1 = '';
        if (s != sname) {
            while (openapi.components.schemas[sname + suffix_1]) {
                // @ts-ignore
                suffix_1 = (suffix_1 ? ++suffix_1 : 2);
            }
            openapi.components.schemas[sname + suffix_1] = openapi.components.schemas[s];
            delete openapi.components.schemas[s];
        }
        componentNames.schemas[s] = sname + suffix_1;
        fixUpSchema(openapi.components.schemas[sname + suffix_1]);
    }
    // fix all $refs to their new locations (and potentially new names)
    options.refmap = {};
    common.recurse(openapi, { payload: { options: options } }, fixupRefs);
    dedupeRefs(openapi, options);
    for (var p in openapi.components.parameters) {
        var sname = common.sanitise(p);
        if (p != sname) {
            if (openapi.components.parameters[sname]) {
                throwError('Duplicate sanitised parameter name ' + sname, options);
            }
            openapi.components.parameters[sname] = openapi.components.parameters[p];
            delete openapi.components.parameters[p];
        }
        var param = openapi.components.parameters[sname];
        processParameter(param, null, null, sname, openapi, options);
    }
    for (var r in openapi.components.responses) {
        var sname = common.sanitise(r);
        if (r != sname) {
            if (openapi.components.responses[sname]) {
                throwError('Duplicate sanitised response name ' + sname, options);
            }
            openapi.components.responses[sname] = openapi.components.responses[r];
            delete openapi.components.responses[r];
        }
        var response = openapi.components.responses[sname];
        processResponse(response, sname, null, openapi, options);
        if (response.headers) {
            for (var h in response.headers) {
                if (h.toLowerCase() === 'status code') {
                    if (options.patch) {
                        delete response.headers[h];
                    }
                    else {
                        throwError('(Patchable) "Status Code" is not a valid header', options);
                    }
                }
                else {
                    processHeader(response.headers[h], options);
                }
            }
        }
    }
    for (var r in openapi.components.requestBodies) {
        var rb = openapi.components.requestBodies[r];
        var rbStr = JSON.stringify(rb);
        var rbHash = common.hash(rbStr);
        var entry = {};
        entry.name = r;
        entry.body = rb;
        entry.refs = [];
        requestBodyCache[rbHash] = entry;
    }
    processPaths(openapi.paths, 'paths', options, requestBodyCache, openapi);
    if (openapi["x-ms-paths"]) {
        processPaths(openapi["x-ms-paths"], 'x-ms-paths', options, requestBodyCache, openapi);
    }
    if (!options.debug) {
        for (var p in openapi.components.parameters) {
            var param = openapi.components.parameters[p];
            if (param["x-s2o-delete"]) {
                delete openapi.components.parameters[p];
            }
        }
    }
    if (options.debug) {
        openapi["x-s2o-consumes"] = openapi.consumes || [];
        openapi["x-s2o-produces"] = openapi.produces || [];
    }
    delete openapi.consumes;
    delete openapi.produces;
    delete openapi.schemes;
    var rbNamesGenerated = [];
    openapi.components.requestBodies = {}; // for now as we've dereffed them
    var counter = 1;
    for (var e in requestBodyCache) {
        var entry = requestBodyCache[e];
        if (entry.refs.length > 1) {
            // create a shared requestBody
            var suffix = '';
            if (!entry.name) {
                entry.name = 'requestBody';
                // @ts-ignore
                suffix = counter++;
            }
            while (rbNamesGenerated.indexOf(entry.name + suffix) >= 0) {
                // @ts-ignore - this can happen if descriptions are not exactly the same (e.g. bitbucket)
                suffix = (suffix ? ++suffix : 2);
            }
            entry.name = entry.name + suffix;
            rbNamesGenerated.push(entry.name);
            openapi.components.requestBodies[entry.name] = common.clone(entry.body);
            for (var r in entry.refs) {
                var ref = {};
                ref.$ref = '#/components/requestBodies/' + entry.name;
                jptr.jptr(openapi, entry.refs[r], ref);
            }
        }
    }
    if (openapi.components.responses && Object.keys(openapi.components.responses).length === 0) {
        delete openapi.components.responses;
    }
    if (openapi.components.parameters && Object.keys(openapi.components.parameters).length === 0) {
        delete openapi.components.parameters;
    }
    if (openapi.components.examples && Object.keys(openapi.components.examples).length === 0) {
        delete openapi.components.examples;
    }
    if (openapi.components.requestBodies && Object.keys(openapi.components.requestBodies).length === 0) {
        delete openapi.components.requestBodies;
    }
    if (openapi.components.securitySchemes && Object.keys(openapi.components.securitySchemes).length === 0) {
        delete openapi.components.securitySchemes;
    }
    if (openapi.components.headers && Object.keys(openapi.components.headers).length === 0) {
        delete openapi.components.headers;
    }
    if (openapi.components.schemas && Object.keys(openapi.components.schemas).length === 0) {
        delete openapi.components.schemas;
    }
    if (openapi.components && Object.keys(openapi.components).length === 0) {
        delete openapi.components;
    }
    return openapi;
}
function extractServerParameters(server) {
    server.url = server.url.split('{{').join('{');
    server.url = server.url.split('}}').join('}');
    server.url.replace(/\{(.+?)\}/g, function (match, group1) {
        if (!server.variables) {
            server.variables = {};
        }
        server.variables[group1] = { default: 'unknown' };
    });
}
function findExternalRefs(master, options, actions) {
    common.recurse(master, null, function (obj, key, state) {
        if (common.isRef(obj, key)) {
            if (!obj[key].startsWith('#')) {
                actions.push(common.resolveExternal(master, obj[key], options, function (data, source) {
                    var external = {};
                    external.context = state.path;
                    external.$ref = obj[key];
                    external.original = common.clone(data);
                    external.updated = data;
                    external.source = source;
                    options.externals.push(external);
                    var localOptions = Object.assign({}, options, { source: source });
                    findExternalRefs(data, localOptions, actions);
                    if (options.patch && obj.description && !data.description) {
                        data.description = obj.description;
                    }
                    state.parent[state.pkey] = data;
                }));
            }
        }
    });
}
function fixInfo(openapi, options, reject) {
    if (!openapi.info) {
        if (options.patch) {
            openapi.info = { version: '', title: '' };
        }
        else {
            return reject(new Error('(Patchable) info object is mandatory'));
        }
    }
    if ((typeof openapi.info.title === 'undefined') || (openapi.info.title === null)) {
        if (options.patch) {
            openapi.info.title = '';
        }
        else {
            return reject(new Error('(Patchable) info.title cannot be null'));
        }
    }
    if ((typeof openapi.info.version === 'undefined') || (openapi.info.version === null)) {
        if (options.patch) {
            openapi.info.version = '';
        }
        else {
            return reject(new Error('(Patchable) info.version cannot be null'));
        }
    }
    if (typeof openapi.info.version !== 'string') {
        if (options.patch) {
            openapi.info.version = openapi.info.version.toString();
        }
        else {
            return reject(new Error('(Patchable) info.version cannot be null'));
        }
    }
    if (typeof openapi.info.logo !== 'undefined') {
        if (options.patch) {
            openapi.info['x-logo'] = openapi.info.logo;
            delete openapi.info.logo;
        }
        else
            return reject(new Error('(Patchable) info should not have logo property'));
    }
    if (typeof openapi.info.termsOfService !== 'undefined') {
        if (openapi.info.termsOfService === null) {
            if (options.patch) {
                openapi.info.termsOfService = '';
            }
            else {
                return reject(new Error('(Patchable) info.termsOfService cannot be null'));
            }
        }
        if (url.URL && options.whatwg) {
            try {
                url.URL.parse(openapi.info.termsOfService);
            }
            catch (ex) {
                if (options.patch) {
                    delete openapi.info.termsOfService;
                }
                else
                    return reject(new Error('(Patchable) info.termsOfService must be a URL'));
            }
        }
    }
}
function fixPaths(openapi, options, reject) {
    if (!openapi.paths) {
        if (options.patch) {
            openapi.paths = {};
        }
        else {
            return reject(new Error('(Patchable) paths object is mandatory'));
        }
    }
}
function convertObj(swagger, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        options.externals = [];
        options.promise = {};
        options.promise.resolve = resolve;
        options.promise.reject = reject;
        if (!options.cache)
            options.cache = {};
        if (swagger.openapi && (typeof swagger.openapi === 'string') && swagger.openapi.startsWith('3.')) {
            options.openapi = common.clone(swagger);
            fixInfo(options.openapi, options, reject);
            fixPaths(options.openapi, options, reject);
            var actions_1 = [];
            if (options.resolve) {
                findExternalRefs(options.openapi, options, actions_1);
            }
            co(function () {
                var _i, actions_2, action;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _i = 0, actions_2 = actions_1;
                            _a.label = 1;
                        case 1:
                            if (!(_i < actions_2.length)) return [3 /*break*/, 4];
                            action = actions_2[_i];
                            return [4 /*yield*/, action];
                        case 2:
                            _a.sent(); // because we can mutate the array
                            _a.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            if (options.direct) {
                                resolve(options.openapi);
                            }
                            else {
                                resolve(options);
                            }
                            return [2 /*return*/];
                    }
                });
            })
                .catch(function (err) {
                reject(err);
            });
            return; // we should have resolved or rejected by now
        }
        if ((!swagger.swagger) || (swagger.swagger != "2.0")) {
            return reject(new Error('Unsupported swagger/OpenAPI version: ' + (swagger.openapi ? swagger.openapi : swagger.swagger)));
        }
        var openapi = options.openapi = {};
        openapi.openapi = targetVersion; // semver
        if (options.origin) {
            if (!openapi["x-origin"]) {
                openapi["x-origin"] = [];
            }
            var origin = {};
            origin.url = options.origin;
            origin.format = 'swagger';
            origin.version = swagger.swagger;
            origin.converter = {};
            origin.converter.url = 'https://github.com/mermade/swagger2openapi';
            origin.converter.version = common.getVersion();
            openapi["x-origin"].push(origin);
        }
        // we want the new and existing properties to appear in a sensible order. Not guaranteed
        openapi = Object.assign(openapi, common.clone(swagger));
        delete openapi.swagger;
        if (swagger.host) {
            for (var _i = 0, _a = swagger.schemes || ['']; _i < _a.length; _i++) {
                var s = _a[_i];
                var server = {};
                server.url = (s ? s + ':' : '') + '//' + swagger.host + (swagger.basePath ? swagger.basePath : '/');
                extractServerParameters(server);
                if (!openapi.servers)
                    openapi.servers = [];
                openapi.servers.push(server);
            }
        }
        else if (swagger.basePath) {
            var server = {};
            server.url = swagger.basePath;
            extractServerParameters(server);
            if (!openapi.servers)
                openapi.servers = [];
            openapi.servers.push(server);
        }
        delete openapi.host;
        delete openapi.basePath;
        if (openapi['x-servers'] && Array.isArray(openapi['x-servers'])) {
            openapi.servers = openapi['x-servers'];
            delete openapi['x-servers'];
        }
        // TODO APIMatic extensions (x-server-configuration) ?
        if (swagger['x-ms-parameterized-host']) {
            var xMsPHost = swagger['x-ms-parameterized-host'];
            var server = {};
            server.url = xMsPHost.hostTemplate;
            server.variables = {};
            for (var msp in xMsPHost.parameters) {
                var param = xMsPHost.parameters[msp];
                if (param.$ref) {
                    param = common.resolveInternal(openapi, param.$ref);
                }
                if (!msp.startsWith('x-')) {
                    delete param.required; // all true
                    delete param.type; // all strings
                    delete param.in; // all 'host'
                    if (typeof param.default === 'undefined') {
                        if (param.enum) {
                            param.default = param.enum[0];
                        }
                        else {
                            param.default = '';
                        }
                    }
                    server.variables[param.name] = param;
                    delete param.name;
                }
            }
            if (!openapi.servers)
                openapi.servers = [];
            openapi.servers.push(server);
            delete openapi['x-ms-parameterized-host'];
        }
        fixInfo(openapi, options, reject);
        fixPaths(openapi, options, reject);
        openapi.components = {};
        if (openapi['x-callbacks']) {
            openapi.components.callbacks = openapi['x-callbacks'];
            delete openapi['x-callbacks'];
        }
        openapi.components.examples = {};
        openapi.components.headers = {};
        if (openapi['x-links']) {
            openapi.components.links = openapi['x-links'];
            delete openapi['x-links'];
        }
        openapi.components.parameters = openapi.parameters || {};
        openapi.components.responses = openapi.responses || {};
        openapi.components.requestBodies = {};
        openapi.components.securitySchemes = openapi.securityDefinitions || {};
        openapi.components.schemas = openapi.definitions || {};
        delete openapi.definitions;
        delete openapi.responses;
        delete openapi.parameters;
        delete openapi.securityDefinitions;
        var actions = [];
        if (options.resolve) {
            findExternalRefs(openapi, options, actions);
        }
        co(function () {
            var _i, actions_3, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, actions_3 = actions;
                        _a.label = 1;
                    case 1:
                        if (!(_i < actions_3.length)) return [3 /*break*/, 4];
                        action = actions_3[_i];
                        return [4 /*yield*/, action];
                    case 2:
                        _a.sent(); // because we can mutate the array
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        main(openapi, options);
                        if (options.direct) {
                            return [2 /*return*/, resolve(options.openapi)];
                        }
                        else {
                            return [2 /*return*/, resolve(options)];
                        }
                        return [2 /*return*/];
                }
            });
        })
            .catch(function (err) {
            reject(err);
        });
    }));
}
function convertStr(str, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        var obj = null;
        try {
            obj = JSON.parse(str);
        }
        catch (ex) {
            try {
                obj = yaml.safeLoad(str, { json: true });
                options.sourceYaml = true;
            }
            catch (ex) { }
        }
        if (obj) {
            options.original = obj;
            convertObj(obj, options)
                .then(function (options) { return resolve(options); })
                .catch(function (ex) { return reject(ex); });
        }
        else {
            reject(new Error('Could not parse string'));
        }
    }));
}
function convertUrl(url, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        if (!options.origin) {
            options.origin = url;
        }
        if (options.verbose) {
            console.log('GET ' + url);
        }
        fetch(url, { agent: options.agent }).then(function (res) {
            if (res.status !== 200)
                throw new Error("Received status code " + res.status);
            return res.text();
        }).then(function (body) {
            convertStr(body, options)
                .then(function (options) { return resolve(options); })
                .catch(function (ex) { return reject(ex); });
        }).catch(function (err) {
            reject(err);
        });
    }));
}
function convertFile(filename, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        fs.readFile(filename, options.encoding || 'utf8', function (err, s) {
            if (err) {
                reject(err);
            }
            else {
                options.sourceFile = filename;
                convertStr(s, options)
                    .then(function (options) { return resolve(options); })
                    .catch(function (ex) { return reject(ex); });
            }
        });
    }));
}
function convertStream(readable, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        var data = '';
        readable.on('data', function (chunk) {
            data += chunk;
        })
            .on('end', function () {
            convertStr(data, options)
                .then(function (options) { return resolve(options); })
                .catch(function (ex) { return reject(ex); });
        });
    }));
}
module.exports = {
    targetVersion: targetVersion,
    convert: convertObj,
    convertObj: convertObj,
    convertUrl: convertUrl,
    convertStr: convertStr,
    convertFile: convertFile,
    convertStream: convertStream
};


/***/ }),

/***/ "./node_modules/swagger2openapi/package.json":
/***/ (function(module, exports) {

module.exports = {"name":"swagger2openapi","version":"2.11.16","description":"Convert Swagger 2.0 definitions to OpenApi 3.0 and validate","main":"index.js","bin":{"swagger2openapi":"./swagger2openapi.js"},"scripts":{"test":"mocha"},"browserify":{"transform":[["babelify",{"presets":["es2015"]}]]},"repository":{"url":"https://github.com/Mermade/swagger2openapi.git","type":"git"},"author":"Mike Ralphson <mike.ralphson@gmail.com>","license":"BSD-3-Clause","dependencies":{"ajv":"^5.0.1","call-me-maybe":"^1.0.1","co":"^4.6.0","js-yaml":"^3.6.1","node-fetch":"^2.0.0","node-readfiles":"^0.2.0","reftools":"0.0.20","should":"^13.0.1","yargs":"^11.0.0"},"keywords":["swagger","openapi","openapi2","openapi3","converter","conversion","validator","validation","resolver","lint","linter"],"devDependencies":{"babel-core":"^6.24.1","babel-loader":"^7.1.0","babel-preset-es2015":"^6.24.1","coveralls":"^3.0.0","mocha":"^5.0.0","webpack":"^3.5.6"}}

/***/ }),

/***/ "./node_modules/swagger2openapi/statusCodes.js":
/***/ (function(module, exports) {

var statusCodes = [
    {
        "code": "default",
        "phrase": "Default response"
    },
    {
        "code": "1XX",
        "phrase": "Informational"
    },
    {
        "code": "100",
        "phrase": "Continue"
    },
    {
        "code": "101",
        "phrase": "Switching Protocols"
    },
    {
        "code": "2XX",
        "phrase": "Successful"
    },
    {
        "code": "200",
        "phrase": "OK"
    },
    {
        "code": "201",
        "phrase": "Created"
    },
    {
        "code": "202",
        "phrase": "Accepted"
    },
    {
        "code": "203",
        "phrase": "Non-Authoritative Information"
    },
    {
        "code": "204",
        "phrase": "No Content"
    },
    {
        "code": "205",
        "phrase": "Reset Content"
    },
    {
        "code": "206",
        "phrase": "Partial Content"
    },
    {
        "code": "3XX",
        "phrase": "Redirection"
    },
    {
        "code": "300",
        "phrase": "Multiple Choices"
    },
    {
        "code": "301",
        "phrase": "Moved Permanently"
    },
    {
        "code": "302",
        "phrase": "Found"
    },
    {
        "code": "303",
        "phrase": "See Other"
    },
    {
        "code": "304",
        "phrase": "Not Modified"
    },
    {
        "code": "305",
        "phrase": "Use Proxy"
    },
    {
        "code": "307",
        "phrase": "Temporary Redirect"
    },
    {
        "code": "4XX",
        "phrase": "Client Error"
    },
    {
        "code": "400",
        "phrase": "Bad Request"
    },
    {
        "code": "401",
        "phrase": "Unauthorized"
    },
    {
        "code": "402",
        "phrase": "Payment Required"
    },
    {
        "code": "403",
        "phrase": "Forbidden"
    },
    {
        "code": "404",
        "phrase": "Not Found"
    },
    {
        "code": "405",
        "phrase": "Method Not Allowed"
    },
    {
        "code": "406",
        "phrase": "Not Acceptable"
    },
    {
        "code": "407",
        "phrase": "Proxy Authentication Required"
    },
    {
        "code": "408",
        "phrase": "Request Timeout"
    },
    {
        "code": "409",
        "phrase": "Conflict"
    },
    {
        "code": "410",
        "phrase": "Gone"
    },
    {
        "code": "411",
        "phrase": "Length Required"
    },
    {
        "code": "412",
        "phrase": "Precondition Failed"
    },
    {
        "code": "413",
        "phrase": "Payload Too Large"
    },
    {
        "code": "414",
        "phrase": "URI Too Long"
    },
    {
        "code": "415",
        "phrase": "Unsupported Media Type"
    },
    {
        "code": "416",
        "phrase": "Range Not Satisfiable"
    },
    {
        "code": "417",
        "phrase": "Expectation Failed"
    },
    {
        "code": "418",
        "phrase": "I'm a teapot"
    },
    {
        "code": "421",
        "phrase": "Misdirected request"
    },
    {
        "code": "426",
        "phrase": "Upgrade Required"
    },
    {
        "code": "5XX",
        "phrase": "Server Error"
    },
    {
        "code": "500",
        "phrase": "Internal Server Error"
    },
    {
        "code": "501",
        "phrase": "Not Implemented"
    },
    {
        "code": "502",
        "phrase": "Bad Gateway"
    },
    {
        "code": "503",
        "phrase": "Service Unavailable"
    },
    {
        "code": "504",
        "phrase": "Gateway Time-out"
    },
    {
        "code": "505",
        "phrase": "HTTP Version Not Supported"
    },
    {
        "code": "102",
        "phrase": "Processing"
    },
    {
        "code": "103",
        "phrase": "Early Hints"
    },
    {
        "code": "207",
        "phrase": "Multi-Status"
    },
    {
        "code": "226",
        "phrase": "IM Used"
    },
    {
        "code": "308",
        "phrase": "Permanent Redirect"
    },
    {
        "code": "422",
        "phrase": "Unprocessable Entity"
    },
    {
        "code": "423",
        "phrase": "Locked"
    },
    {
        "code": "424",
        "phrase": "Failed Dependency"
    },
    {
        "code": "428",
        "phrase": "Precondition Required"
    },
    {
        "code": "429",
        "phrase": "Too Many Requests"
    },
    {
        "code": "431",
        "phrase": "Request Header Fields Too Large"
    },
    {
        "code": "451",
        "phrase": "Unavailable For Legal Reasons"
    },
    {
        "code": "506",
        "phrase": "Variant Also Negotiates"
    },
    {
        "code": "507",
        "phrase": "Insufficient Storage"
    },
    {
        "code": "511",
        "phrase": "Network Authentication Required"
    },
    {
        "code": "7XX",
        "phrase": "Developer Error"
    }
];
module.exports = {
    statusCodes: statusCodes
};


/***/ }),

/***/ "./node_modules/swagger2openapi/walkSchema.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var util = __webpack_require__("util");
function getDefaultState() {
    return { depth: 0, seen: new WeakMap(), top: true, combine: false };
}
function walkSchema(schema, parent, state, callback) {
    if (typeof state.depth === 'undefined')
        state = getDefaultState();
    if (schema == null)
        return schema;
    if (typeof schema.$ref !== 'undefined') {
        var temp = { $ref: schema.$ref };
        callback(temp, parent, state);
        return temp; // all other properties SHALL be ignored
    }
    if (state.combine) {
        if (schema.allOf && Array.isArray(schema.allOf) && schema.allOf.length === 1) {
            schema = Object.assign({}, schema.allOf[0], schema);
            delete schema.allOf;
        }
        if (schema.anyOf && Array.isArray(schema.anyOf) && schema.anyOf.length === 1) {
            schema = Object.assign({}, schema.anyOf[0], schema);
            delete schema.anyOf;
        }
        if (schema.oneOf && Array.isArray(schema.oneOf) && schema.oneOf.length === 1) {
            schema = Object.assign({}, schema.oneOf[0], schema);
            delete schema.oneOf;
        }
    }
    callback(schema, parent, state);
    if (state.seen.has(schema)) {
        return schema;
    }
    //else
    if ((typeof schema === 'object') && (schema !== null))
        state.seen.set(schema, true);
    state.top = false;
    state.depth++;
    if (typeof schema.items !== 'undefined') {
        state.property = 'items';
        walkSchema(schema.items, schema, state, callback);
    }
    if (schema.additionalItems) {
        if (typeof schema.additionalItems === 'object') {
            state.property = 'additionalItems';
            walkSchema(schema.additionalItems, schema, state, callback);
        }
    }
    if (schema.additionalProperties) {
        if (typeof schema.additionalProperties === 'object') {
            state.property = 'additionalProperties';
            walkSchema(schema.additionalProperties, schema, state, callback);
        }
    }
    if (schema.properties) {
        for (var prop in schema.properties) {
            var subSchema = schema.properties[prop];
            state.property = 'properties/' + prop;
            walkSchema(subSchema, schema, state, callback);
        }
    }
    if (schema.patternProperties) {
        for (var prop in schema.patternProperties) {
            var subSchema = schema.patternProperties[prop];
            state.property = 'patternProperties/' + prop;
            walkSchema(subSchema, schema, state, callback);
        }
    }
    if (schema.allOf) {
        for (var index in schema.allOf) {
            var subSchema = schema.allOf[index];
            state.property = 'allOf/' + index;
            walkSchema(subSchema, schema, state, callback);
        }
    }
    if (schema.anyOf) {
        for (var index in schema.anyOf) {
            var subSchema = schema.anyOf[index];
            state.property = 'anyOf/' + index;
            walkSchema(subSchema, schema, state, callback);
        }
    }
    if (schema.oneOf) {
        for (var index in schema.oneOf) {
            var subSchema = schema.oneOf[index];
            state.property = 'oneOf/' + index;
            walkSchema(subSchema, schema, state, callback);
        }
    }
    if (schema.not) {
        state.property = 'not';
        walkSchema(schema.not, schema, state, callback);
    }
    state.depth--;
    return schema;
}
module.exports = {
    getDefaultState: getDefaultState,
    walkSchema: walkSchema
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/workerize-loader/dist/index.js?inline&fallback=false!./src/services/SearchWorker.worker.ts":
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__("./node_modules/workerize-loader/dist/rpc-wrapper.js")
				var methods = ["add","done","toJS","load","search"]
				module.exports = function() {
					var w = new Worker(URL.createObjectURL(new Blob(["/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/react-hot-loader/webpack.js!./node_modules/awesome-typescript-loader/dist/entry.js??ref--0-1!./src/services/SearchWorker.worker.ts\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./node_modules/lunr/lunr.js\":\n/***/ (function(module, exports, __webpack_require__) {\n\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.1.6\n * Copyright (C) 2018 Oliver Nightingale\n * @license MIT\n */\n\n;(function(){\n\n/**\n * A convenience function for configuring and constructing\n * a new lunr Index.\n *\n * A lunr.Builder instance is created and the pipeline setup\n * with a trimmer, stop word filter and stemmer.\n *\n * This builder object is yielded to the configuration function\n * that is passed as a parameter, allowing the list of fields\n * and other builder parameters to be customised.\n *\n * All documents _must_ be added within the passed config function.\n *\n * @example\n * var idx = lunr(function () {\n *   this.field('title')\n *   this.field('body')\n *   this.ref('id')\n *\n *   documents.forEach(function (doc) {\n *     this.add(doc)\n *   }, this)\n * })\n *\n * @see {@link lunr.Builder}\n * @see {@link lunr.Pipeline}\n * @see {@link lunr.trimmer}\n * @see {@link lunr.stopWordFilter}\n * @see {@link lunr.stemmer}\n * @namespace {function} lunr\n */\nvar lunr = function (config) {\n  var builder = new lunr.Builder\n\n  builder.pipeline.add(\n    lunr.trimmer,\n    lunr.stopWordFilter,\n    lunr.stemmer\n  )\n\n  builder.searchPipeline.add(\n    lunr.stemmer\n  )\n\n  config.call(builder, builder)\n  return builder.build()\n}\n\nlunr.version = \"2.1.6\"\n/*!\n * lunr.utils\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * A namespace containing utils for the rest of the lunr library\n */\nlunr.utils = {}\n\n/**\n * Print a warning message to the console.\n *\n * @param {String} message The message to be printed.\n * @memberOf Utils\n */\nlunr.utils.warn = (function (global) {\n  /* eslint-disable no-console */\n  return function (message) {\n    if (global.console && console.warn) {\n      console.warn(message)\n    }\n  }\n  /* eslint-enable no-console */\n})(this)\n\n/**\n * Convert an object to a string.\n *\n * In the case of `null` and `undefined` the function returns\n * the empty string, in all other cases the result of calling\n * `toString` on the passed object is returned.\n *\n * @param {Any} obj The object to convert to a string.\n * @return {String} string representation of the passed object.\n * @memberOf Utils\n */\nlunr.utils.asString = function (obj) {\n  if (obj === void 0 || obj === null) {\n    return \"\"\n  } else {\n    return obj.toString()\n  }\n}\nlunr.FieldRef = function (docRef, fieldName, stringValue) {\n  this.docRef = docRef\n  this.fieldName = fieldName\n  this._stringValue = stringValue\n}\n\nlunr.FieldRef.joiner = \"/\"\n\nlunr.FieldRef.fromString = function (s) {\n  var n = s.indexOf(lunr.FieldRef.joiner)\n\n  if (n === -1) {\n    throw \"malformed field ref string\"\n  }\n\n  var fieldRef = s.slice(0, n),\n      docRef = s.slice(n + 1)\n\n  return new lunr.FieldRef (docRef, fieldRef, s)\n}\n\nlunr.FieldRef.prototype.toString = function () {\n  if (this._stringValue == undefined) {\n    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef\n  }\n\n  return this._stringValue\n}\n/**\n * A function to calculate the inverse document frequency for\n * a posting. This is shared between the builder and the index\n *\n * @private\n * @param {object} posting - The posting for a given term\n * @param {number} documentCount - The total number of documents.\n */\nlunr.idf = function (posting, documentCount) {\n  var documentsWithTerm = 0\n\n  for (var fieldName in posting) {\n    if (fieldName == '_index') continue // Ignore the term index, its not a field\n    documentsWithTerm += Object.keys(posting[fieldName]).length\n  }\n\n  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)\n\n  return Math.log(1 + Math.abs(x))\n}\n\n/**\n * A token wraps a string representation of a token\n * as it is passed through the text processing pipeline.\n *\n * @constructor\n * @param {string} [str=''] - The string token being wrapped.\n * @param {object} [metadata={}] - Metadata associated with this token.\n */\nlunr.Token = function (str, metadata) {\n  this.str = str || \"\"\n  this.metadata = metadata || {}\n}\n\n/**\n * Returns the token string that is being wrapped by this object.\n *\n * @returns {string}\n */\nlunr.Token.prototype.toString = function () {\n  return this.str\n}\n\n/**\n * A token update function is used when updating or optionally\n * when cloning a token.\n *\n * @callback lunr.Token~updateFunction\n * @param {string} str - The string representation of the token.\n * @param {Object} metadata - All metadata associated with this token.\n */\n\n/**\n * Applies the given function to the wrapped string token.\n *\n * @example\n * token.update(function (str, metadata) {\n *   return str.toUpperCase()\n * })\n *\n * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.\n * @returns {lunr.Token}\n */\nlunr.Token.prototype.update = function (fn) {\n  this.str = fn(this.str, this.metadata)\n  return this\n}\n\n/**\n * Creates a clone of this token. Optionally a function can be\n * applied to the cloned token.\n *\n * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.\n * @returns {lunr.Token}\n */\nlunr.Token.prototype.clone = function (fn) {\n  fn = fn || function (s) { return s }\n  return new lunr.Token (fn(this.str, this.metadata), this.metadata)\n}\n/*!\n * lunr.tokenizer\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * A function for splitting a string into tokens ready to be inserted into\n * the search index. Uses `lunr.tokenizer.separator` to split strings, change\n * the value of this property to change how strings are split into tokens.\n *\n * This tokenizer will convert its parameter to a string by calling `toString` and\n * then will split this string on the character in `lunr.tokenizer.separator`.\n * Arrays will have their elements converted to strings and wrapped in a lunr.Token.\n *\n * @static\n * @param {?(string|object|object[])} obj - The object to convert into tokens\n * @returns {lunr.Token[]}\n */\nlunr.tokenizer = function (obj) {\n  if (obj == null || obj == undefined) {\n    return []\n  }\n\n  if (Array.isArray(obj)) {\n    return obj.map(function (t) {\n      return new lunr.Token(lunr.utils.asString(t).toLowerCase())\n    })\n  }\n\n  var str = obj.toString().trim().toLowerCase(),\n      len = str.length,\n      tokens = []\n\n  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {\n    var char = str.charAt(sliceEnd),\n        sliceLength = sliceEnd - sliceStart\n\n    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {\n\n      if (sliceLength > 0) {\n        tokens.push(\n          new lunr.Token (str.slice(sliceStart, sliceEnd), {\n            position: [sliceStart, sliceLength],\n            index: tokens.length\n          })\n        )\n      }\n\n      sliceStart = sliceEnd + 1\n    }\n\n  }\n\n  return tokens\n}\n\n/**\n * The separator used to split a string into tokens. Override this property to change the behaviour of\n * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.\n *\n * @static\n * @see lunr.tokenizer\n */\nlunr.tokenizer.separator = /[\\s\\-]+/\n/*!\n * lunr.Pipeline\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * lunr.Pipelines maintain an ordered list of functions to be applied to all\n * tokens in documents entering the search index and queries being ran against\n * the index.\n *\n * An instance of lunr.Index created with the lunr shortcut will contain a\n * pipeline with a stop word filter and an English language stemmer. Extra\n * functions can be added before or after either of these functions or these\n * default functions can be removed.\n *\n * When run the pipeline will call each function in turn, passing a token, the\n * index of that token in the original list of all tokens and finally a list of\n * all the original tokens.\n *\n * The output of functions in the pipeline will be passed to the next function\n * in the pipeline. To exclude a token from entering the index the function\n * should return undefined, the rest of the pipeline will not be called with\n * this token.\n *\n * For serialisation of pipelines to work, all functions used in an instance of\n * a pipeline should be registered with lunr.Pipeline. Registered functions can\n * then be loaded. If trying to load a serialised pipeline that uses functions\n * that are not registered an error will be thrown.\n *\n * If not planning on serialising the pipeline then registering pipeline functions\n * is not necessary.\n *\n * @constructor\n */\nlunr.Pipeline = function () {\n  this._stack = []\n}\n\nlunr.Pipeline.registeredFunctions = Object.create(null)\n\n/**\n * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token\n * string as well as all known metadata. A pipeline function can mutate the token string\n * or mutate (or add) metadata for a given token.\n *\n * A pipeline function can indicate that the passed token should be discarded by returning\n * null. This token will not be passed to any downstream pipeline functions and will not be\n * added to the index.\n *\n * Multiple tokens can be returned by returning an array of tokens. Each token will be passed\n * to any downstream pipeline functions and all will returned tokens will be added to the index.\n *\n * Any number of pipeline functions may be chained together using a lunr.Pipeline.\n *\n * @interface lunr.PipelineFunction\n * @param {lunr.Token} token - A token from the document being processed.\n * @param {number} i - The index of this token in the complete list of tokens for this document/field.\n * @param {lunr.Token[]} tokens - All tokens for this document/field.\n * @returns {(?lunr.Token|lunr.Token[])}\n */\n\n/**\n * Register a function with the pipeline.\n *\n * Functions that are used in the pipeline should be registered if the pipeline\n * needs to be serialised, or a serialised pipeline needs to be loaded.\n *\n * Registering a function does not add it to a pipeline, functions must still be\n * added to instances of the pipeline for them to be used when running a pipeline.\n *\n * @param {lunr.PipelineFunction} fn - The function to check for.\n * @param {String} label - The label to register this function with\n */\nlunr.Pipeline.registerFunction = function (fn, label) {\n  if (label in this.registeredFunctions) {\n    lunr.utils.warn('Overwriting existing registered function: ' + label)\n  }\n\n  fn.label = label\n  lunr.Pipeline.registeredFunctions[fn.label] = fn\n}\n\n/**\n * Warns if the function is not registered as a Pipeline function.\n *\n * @param {lunr.PipelineFunction} fn - The function to check for.\n * @private\n */\nlunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {\n  var isRegistered = fn.label && (fn.label in this.registeredFunctions)\n\n  if (!isRegistered) {\n    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\\n', fn)\n  }\n}\n\n/**\n * Loads a previously serialised pipeline.\n *\n * All functions to be loaded must already be registered with lunr.Pipeline.\n * If any function from the serialised data has not been registered then an\n * error will be thrown.\n *\n * @param {Object} serialised - The serialised pipeline to load.\n * @returns {lunr.Pipeline}\n */\nlunr.Pipeline.load = function (serialised) {\n  var pipeline = new lunr.Pipeline\n\n  serialised.forEach(function (fnName) {\n    var fn = lunr.Pipeline.registeredFunctions[fnName]\n\n    if (fn) {\n      pipeline.add(fn)\n    } else {\n      throw new Error('Cannot load unregistered function: ' + fnName)\n    }\n  })\n\n  return pipeline\n}\n\n/**\n * Adds new functions to the end of the pipeline.\n *\n * Logs a warning if the function has not been registered.\n *\n * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.\n */\nlunr.Pipeline.prototype.add = function () {\n  var fns = Array.prototype.slice.call(arguments)\n\n  fns.forEach(function (fn) {\n    lunr.Pipeline.warnIfFunctionNotRegistered(fn)\n    this._stack.push(fn)\n  }, this)\n}\n\n/**\n * Adds a single function after a function that already exists in the\n * pipeline.\n *\n * Logs a warning if the function has not been registered.\n *\n * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.\n * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.\n */\nlunr.Pipeline.prototype.after = function (existingFn, newFn) {\n  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)\n\n  var pos = this._stack.indexOf(existingFn)\n  if (pos == -1) {\n    throw new Error('Cannot find existingFn')\n  }\n\n  pos = pos + 1\n  this._stack.splice(pos, 0, newFn)\n}\n\n/**\n * Adds a single function before a function that already exists in the\n * pipeline.\n *\n * Logs a warning if the function has not been registered.\n *\n * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.\n * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.\n */\nlunr.Pipeline.prototype.before = function (existingFn, newFn) {\n  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)\n\n  var pos = this._stack.indexOf(existingFn)\n  if (pos == -1) {\n    throw new Error('Cannot find existingFn')\n  }\n\n  this._stack.splice(pos, 0, newFn)\n}\n\n/**\n * Removes a function from the pipeline.\n *\n * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.\n */\nlunr.Pipeline.prototype.remove = function (fn) {\n  var pos = this._stack.indexOf(fn)\n  if (pos == -1) {\n    return\n  }\n\n  this._stack.splice(pos, 1)\n}\n\n/**\n * Runs the current list of functions that make up the pipeline against the\n * passed tokens.\n *\n * @param {Array} tokens The tokens to run through the pipeline.\n * @returns {Array}\n */\nlunr.Pipeline.prototype.run = function (tokens) {\n  var stackLength = this._stack.length\n\n  for (var i = 0; i < stackLength; i++) {\n    var fn = this._stack[i]\n    var memo = []\n\n    for (var j = 0; j < tokens.length; j++) {\n      var result = fn(tokens[j], j, tokens)\n\n      if (result === void 0 || result === '') continue\n\n      if (result instanceof Array) {\n        for (var k = 0; k < result.length; k++) {\n          memo.push(result[k])\n        }\n      } else {\n        memo.push(result)\n      }\n    }\n\n    tokens = memo\n  }\n\n  return tokens\n}\n\n/**\n * Convenience method for passing a string through a pipeline and getting\n * strings out. This method takes care of wrapping the passed string in a\n * token and mapping the resulting tokens back to strings.\n *\n * @param {string} str - The string to pass through the pipeline.\n * @returns {string[]}\n */\nlunr.Pipeline.prototype.runString = function (str) {\n  var token = new lunr.Token (str)\n\n  return this.run([token]).map(function (t) {\n    return t.toString()\n  })\n}\n\n/**\n * Resets the pipeline by removing any existing processors.\n *\n */\nlunr.Pipeline.prototype.reset = function () {\n  this._stack = []\n}\n\n/**\n * Returns a representation of the pipeline ready for serialisation.\n *\n * Logs a warning if the function has not been registered.\n *\n * @returns {Array}\n */\nlunr.Pipeline.prototype.toJSON = function () {\n  return this._stack.map(function (fn) {\n    lunr.Pipeline.warnIfFunctionNotRegistered(fn)\n\n    return fn.label\n  })\n}\n/*!\n * lunr.Vector\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * A vector is used to construct the vector space of documents and queries. These\n * vectors support operations to determine the similarity between two documents or\n * a document and a query.\n *\n * Normally no parameters are required for initializing a vector, but in the case of\n * loading a previously dumped vector the raw elements can be provided to the constructor.\n *\n * For performance reasons vectors are implemented with a flat array, where an elements\n * index is immediately followed by its value. E.g. [index, value, index, value]. This\n * allows the underlying array to be as sparse as possible and still offer decent\n * performance when being used for vector calculations.\n *\n * @constructor\n * @param {Number[]} [elements] - The flat list of element index and element value pairs.\n */\nlunr.Vector = function (elements) {\n  this._magnitude = 0\n  this.elements = elements || []\n}\n\n\n/**\n * Calculates the position within the vector to insert a given index.\n *\n * This is used internally by insert and upsert. If there are duplicate indexes then\n * the position is returned as if the value for that index were to be updated, but it\n * is the callers responsibility to check whether there is a duplicate at that index\n *\n * @param {Number} insertIdx - The index at which the element should be inserted.\n * @returns {Number}\n */\nlunr.Vector.prototype.positionForIndex = function (index) {\n  // For an empty vector the tuple can be inserted at the beginning\n  if (this.elements.length == 0) {\n    return 0\n  }\n\n  var start = 0,\n      end = this.elements.length / 2,\n      sliceLength = end - start,\n      pivotPoint = Math.floor(sliceLength / 2),\n      pivotIndex = this.elements[pivotPoint * 2]\n\n  while (sliceLength > 1) {\n    if (pivotIndex < index) {\n      start = pivotPoint\n    }\n\n    if (pivotIndex > index) {\n      end = pivotPoint\n    }\n\n    if (pivotIndex == index) {\n      break\n    }\n\n    sliceLength = end - start\n    pivotPoint = start + Math.floor(sliceLength / 2)\n    pivotIndex = this.elements[pivotPoint * 2]\n  }\n\n  if (pivotIndex == index) {\n    return pivotPoint * 2\n  }\n\n  if (pivotIndex > index) {\n    return pivotPoint * 2\n  }\n\n  if (pivotIndex < index) {\n    return (pivotPoint + 1) * 2\n  }\n}\n\n/**\n * Inserts an element at an index within the vector.\n *\n * Does not allow duplicates, will throw an error if there is already an entry\n * for this index.\n *\n * @param {Number} insertIdx - The index at which the element should be inserted.\n * @param {Number} val - The value to be inserted into the vector.\n */\nlunr.Vector.prototype.insert = function (insertIdx, val) {\n  this.upsert(insertIdx, val, function () {\n    throw \"duplicate index\"\n  })\n}\n\n/**\n * Inserts or updates an existing index within the vector.\n *\n * @param {Number} insertIdx - The index at which the element should be inserted.\n * @param {Number} val - The value to be inserted into the vector.\n * @param {function} fn - A function that is called for updates, the existing value and the\n * requested value are passed as arguments\n */\nlunr.Vector.prototype.upsert = function (insertIdx, val, fn) {\n  this._magnitude = 0\n  var position = this.positionForIndex(insertIdx)\n\n  if (this.elements[position] == insertIdx) {\n    this.elements[position + 1] = fn(this.elements[position + 1], val)\n  } else {\n    this.elements.splice(position, 0, insertIdx, val)\n  }\n}\n\n/**\n * Calculates the magnitude of this vector.\n *\n * @returns {Number}\n */\nlunr.Vector.prototype.magnitude = function () {\n  if (this._magnitude) return this._magnitude\n\n  var sumOfSquares = 0,\n      elementsLength = this.elements.length\n\n  for (var i = 1; i < elementsLength; i += 2) {\n    var val = this.elements[i]\n    sumOfSquares += val * val\n  }\n\n  return this._magnitude = Math.sqrt(sumOfSquares)\n}\n\n/**\n * Calculates the dot product of this vector and another vector.\n *\n * @param {lunr.Vector} otherVector - The vector to compute the dot product with.\n * @returns {Number}\n */\nlunr.Vector.prototype.dot = function (otherVector) {\n  var dotProduct = 0,\n      a = this.elements, b = otherVector.elements,\n      aLen = a.length, bLen = b.length,\n      aVal = 0, bVal = 0,\n      i = 0, j = 0\n\n  while (i < aLen && j < bLen) {\n    aVal = a[i], bVal = b[j]\n    if (aVal < bVal) {\n      i += 2\n    } else if (aVal > bVal) {\n      j += 2\n    } else if (aVal == bVal) {\n      dotProduct += a[i + 1] * b[j + 1]\n      i += 2\n      j += 2\n    }\n  }\n\n  return dotProduct\n}\n\n/**\n * Calculates the cosine similarity between this vector and another\n * vector.\n *\n * @param {lunr.Vector} otherVector - The other vector to calculate the\n * similarity with.\n * @returns {Number}\n */\nlunr.Vector.prototype.similarity = function (otherVector) {\n  return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude())\n}\n\n/**\n * Converts the vector to an array of the elements within the vector.\n *\n * @returns {Number[]}\n */\nlunr.Vector.prototype.toArray = function () {\n  var output = new Array (this.elements.length / 2)\n\n  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {\n    output[j] = this.elements[i]\n  }\n\n  return output\n}\n\n/**\n * A JSON serializable representation of the vector.\n *\n * @returns {Number[]}\n */\nlunr.Vector.prototype.toJSON = function () {\n  return this.elements\n}\n/* eslint-disable */\n/*!\n * lunr.stemmer\n * Copyright (C) 2018 Oliver Nightingale\n * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt\n */\n\n/**\n * lunr.stemmer is an english language stemmer, this is a JavaScript\n * implementation of the PorterStemmer taken from http://tartarus.org/~martin\n *\n * @static\n * @implements {lunr.PipelineFunction}\n * @param {lunr.Token} token - The string to stem\n * @returns {lunr.Token}\n * @see {@link lunr.Pipeline}\n */\nlunr.stemmer = (function(){\n  var step2list = {\n      \"ational\" : \"ate\",\n      \"tional\" : \"tion\",\n      \"enci\" : \"ence\",\n      \"anci\" : \"ance\",\n      \"izer\" : \"ize\",\n      \"bli\" : \"ble\",\n      \"alli\" : \"al\",\n      \"entli\" : \"ent\",\n      \"eli\" : \"e\",\n      \"ousli\" : \"ous\",\n      \"ization\" : \"ize\",\n      \"ation\" : \"ate\",\n      \"ator\" : \"ate\",\n      \"alism\" : \"al\",\n      \"iveness\" : \"ive\",\n      \"fulness\" : \"ful\",\n      \"ousness\" : \"ous\",\n      \"aliti\" : \"al\",\n      \"iviti\" : \"ive\",\n      \"biliti\" : \"ble\",\n      \"logi\" : \"log\"\n    },\n\n    step3list = {\n      \"icate\" : \"ic\",\n      \"ative\" : \"\",\n      \"alize\" : \"al\",\n      \"iciti\" : \"ic\",\n      \"ical\" : \"ic\",\n      \"ful\" : \"\",\n      \"ness\" : \"\"\n    },\n\n    c = \"[^aeiou]\",          // consonant\n    v = \"[aeiouy]\",          // vowel\n    C = c + \"[^aeiouy]*\",    // consonant sequence\n    V = v + \"[aeiou]*\",      // vowel sequence\n\n    mgr0 = \"^(\" + C + \")?\" + V + C,               // [C]VC... is m>0\n    meq1 = \"^(\" + C + \")?\" + V + C + \"(\" + V + \")?$\",  // [C]VC[V] is m=1\n    mgr1 = \"^(\" + C + \")?\" + V + C + V + C,       // [C]VCVC... is m>1\n    s_v = \"^(\" + C + \")?\" + v;                   // vowel in stem\n\n  var re_mgr0 = new RegExp(mgr0);\n  var re_mgr1 = new RegExp(mgr1);\n  var re_meq1 = new RegExp(meq1);\n  var re_s_v = new RegExp(s_v);\n\n  var re_1a = /^(.+?)(ss|i)es$/;\n  var re2_1a = /^(.+?)([^s])s$/;\n  var re_1b = /^(.+?)eed$/;\n  var re2_1b = /^(.+?)(ed|ing)$/;\n  var re_1b_2 = /.$/;\n  var re2_1b_2 = /(at|bl|iz)$/;\n  var re3_1b_2 = new RegExp(\"([^aeiouylsz])\\\\1$\");\n  var re4_1b_2 = new RegExp(\"^\" + C + v + \"[^aeiouwxy]$\");\n\n  var re_1c = /^(.+?[^aeiou])y$/;\n  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;\n\n  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;\n\n  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;\n  var re2_4 = /^(.+?)(s|t)(ion)$/;\n\n  var re_5 = /^(.+?)e$/;\n  var re_5_1 = /ll$/;\n  var re3_5 = new RegExp(\"^\" + C + v + \"[^aeiouwxy]$\");\n\n  var porterStemmer = function porterStemmer(w) {\n    var stem,\n      suffix,\n      firstch,\n      re,\n      re2,\n      re3,\n      re4;\n\n    if (w.length < 3) { return w; }\n\n    firstch = w.substr(0,1);\n    if (firstch == \"y\") {\n      w = firstch.toUpperCase() + w.substr(1);\n    }\n\n    // Step 1a\n    re = re_1a\n    re2 = re2_1a;\n\n    if (re.test(w)) { w = w.replace(re,\"$1$2\"); }\n    else if (re2.test(w)) { w = w.replace(re2,\"$1$2\"); }\n\n    // Step 1b\n    re = re_1b;\n    re2 = re2_1b;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      re = re_mgr0;\n      if (re.test(fp[1])) {\n        re = re_1b_2;\n        w = w.replace(re,\"\");\n      }\n    } else if (re2.test(w)) {\n      var fp = re2.exec(w);\n      stem = fp[1];\n      re2 = re_s_v;\n      if (re2.test(stem)) {\n        w = stem;\n        re2 = re2_1b_2;\n        re3 = re3_1b_2;\n        re4 = re4_1b_2;\n        if (re2.test(w)) { w = w + \"e\"; }\n        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,\"\"); }\n        else if (re4.test(w)) { w = w + \"e\"; }\n      }\n    }\n\n    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)\n    re = re_1c;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      w = stem + \"i\";\n    }\n\n    // Step 2\n    re = re_2;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      suffix = fp[2];\n      re = re_mgr0;\n      if (re.test(stem)) {\n        w = stem + step2list[suffix];\n      }\n    }\n\n    // Step 3\n    re = re_3;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      suffix = fp[2];\n      re = re_mgr0;\n      if (re.test(stem)) {\n        w = stem + step3list[suffix];\n      }\n    }\n\n    // Step 4\n    re = re_4;\n    re2 = re2_4;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      re = re_mgr1;\n      if (re.test(stem)) {\n        w = stem;\n      }\n    } else if (re2.test(w)) {\n      var fp = re2.exec(w);\n      stem = fp[1] + fp[2];\n      re2 = re_mgr1;\n      if (re2.test(stem)) {\n        w = stem;\n      }\n    }\n\n    // Step 5\n    re = re_5;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      re = re_mgr1;\n      re2 = re_meq1;\n      re3 = re3_5;\n      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {\n        w = stem;\n      }\n    }\n\n    re = re_5_1;\n    re2 = re_mgr1;\n    if (re.test(w) && re2.test(w)) {\n      re = re_1b_2;\n      w = w.replace(re,\"\");\n    }\n\n    // and turn initial Y back to y\n\n    if (firstch == \"y\") {\n      w = firstch.toLowerCase() + w.substr(1);\n    }\n\n    return w;\n  };\n\n  return function (token) {\n    return token.update(porterStemmer);\n  }\n})();\n\nlunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')\n/*!\n * lunr.stopWordFilter\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * lunr.generateStopWordFilter builds a stopWordFilter function from the provided\n * list of stop words.\n *\n * The built in lunr.stopWordFilter is built using this generator and can be used\n * to generate custom stopWordFilters for applications or non English languages.\n *\n * @param {Array} token The token to pass through the filter\n * @returns {lunr.PipelineFunction}\n * @see lunr.Pipeline\n * @see lunr.stopWordFilter\n */\nlunr.generateStopWordFilter = function (stopWords) {\n  var words = stopWords.reduce(function (memo, stopWord) {\n    memo[stopWord] = stopWord\n    return memo\n  }, {})\n\n  return function (token) {\n    if (token && words[token.toString()] !== token.toString()) return token\n  }\n}\n\n/**\n * lunr.stopWordFilter is an English language stop word list filter, any words\n * contained in the list will not be passed through the filter.\n *\n * This is intended to be used in the Pipeline. If the token does not pass the\n * filter then undefined will be returned.\n *\n * @implements {lunr.PipelineFunction}\n * @params {lunr.Token} token - A token to check for being a stop word.\n * @returns {lunr.Token}\n * @see {@link lunr.Pipeline}\n */\nlunr.stopWordFilter = lunr.generateStopWordFilter([\n  'a',\n  'able',\n  'about',\n  'across',\n  'after',\n  'all',\n  'almost',\n  'also',\n  'am',\n  'among',\n  'an',\n  'and',\n  'any',\n  'are',\n  'as',\n  'at',\n  'be',\n  'because',\n  'been',\n  'but',\n  'by',\n  'can',\n  'cannot',\n  'could',\n  'dear',\n  'did',\n  'do',\n  'does',\n  'either',\n  'else',\n  'ever',\n  'every',\n  'for',\n  'from',\n  'get',\n  'got',\n  'had',\n  'has',\n  'have',\n  'he',\n  'her',\n  'hers',\n  'him',\n  'his',\n  'how',\n  'however',\n  'i',\n  'if',\n  'in',\n  'into',\n  'is',\n  'it',\n  'its',\n  'just',\n  'least',\n  'let',\n  'like',\n  'likely',\n  'may',\n  'me',\n  'might',\n  'most',\n  'must',\n  'my',\n  'neither',\n  'no',\n  'nor',\n  'not',\n  'of',\n  'off',\n  'often',\n  'on',\n  'only',\n  'or',\n  'other',\n  'our',\n  'own',\n  'rather',\n  'said',\n  'say',\n  'says',\n  'she',\n  'should',\n  'since',\n  'so',\n  'some',\n  'than',\n  'that',\n  'the',\n  'their',\n  'them',\n  'then',\n  'there',\n  'these',\n  'they',\n  'this',\n  'tis',\n  'to',\n  'too',\n  'twas',\n  'us',\n  'wants',\n  'was',\n  'we',\n  'were',\n  'what',\n  'when',\n  'where',\n  'which',\n  'while',\n  'who',\n  'whom',\n  'why',\n  'will',\n  'with',\n  'would',\n  'yet',\n  'you',\n  'your'\n])\n\nlunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')\n/*!\n * lunr.trimmer\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * lunr.trimmer is a pipeline function for trimming non word\n * characters from the beginning and end of tokens before they\n * enter the index.\n *\n * This implementation may not work correctly for non latin\n * characters and should either be removed or adapted for use\n * with languages with non-latin characters.\n *\n * @static\n * @implements {lunr.PipelineFunction}\n * @param {lunr.Token} token The token to pass through the filter\n * @returns {lunr.Token}\n * @see lunr.Pipeline\n */\nlunr.trimmer = function (token) {\n  return token.update(function (s) {\n    return s.replace(/^\\W+/, '').replace(/\\W+$/, '')\n  })\n}\n\nlunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')\n/*!\n * lunr.TokenSet\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * A token set is used to store the unique list of all tokens\n * within an index. Token sets are also used to represent an\n * incoming query to the index, this query token set and index\n * token set are then intersected to find which tokens to look\n * up in the inverted index.\n *\n * A token set can hold multiple tokens, as in the case of the\n * index token set, or it can hold a single token as in the\n * case of a simple query token set.\n *\n * Additionally token sets are used to perform wildcard matching.\n * Leading, contained and trailing wildcards are supported, and\n * from this edit distance matching can also be provided.\n *\n * Token sets are implemented as a minimal finite state automata,\n * where both common prefixes and suffixes are shared between tokens.\n * This helps to reduce the space used for storing the token set.\n *\n * @constructor\n */\nlunr.TokenSet = function () {\n  this.final = false\n  this.edges = {}\n  this.id = lunr.TokenSet._nextId\n  lunr.TokenSet._nextId += 1\n}\n\n/**\n * Keeps track of the next, auto increment, identifier to assign\n * to a new tokenSet.\n *\n * TokenSets require a unique identifier to be correctly minimised.\n *\n * @private\n */\nlunr.TokenSet._nextId = 1\n\n/**\n * Creates a TokenSet instance from the given sorted array of words.\n *\n * @param {String[]} arr - A sorted array of strings to create the set from.\n * @returns {lunr.TokenSet}\n * @throws Will throw an error if the input array is not sorted.\n */\nlunr.TokenSet.fromArray = function (arr) {\n  var builder = new lunr.TokenSet.Builder\n\n  for (var i = 0, len = arr.length; i < len; i++) {\n    builder.insert(arr[i])\n  }\n\n  builder.finish()\n  return builder.root\n}\n\n/**\n * Creates a token set from a query clause.\n *\n * @private\n * @param {Object} clause - A single clause from lunr.Query.\n * @param {string} clause.term - The query clause term.\n * @param {number} [clause.editDistance] - The optional edit distance for the term.\n * @returns {lunr.TokenSet}\n */\nlunr.TokenSet.fromClause = function (clause) {\n  if ('editDistance' in clause) {\n    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)\n  } else {\n    return lunr.TokenSet.fromString(clause.term)\n  }\n}\n\n/**\n * Creates a token set representing a single string with a specified\n * edit distance.\n *\n * Insertions, deletions, substitutions and transpositions are each\n * treated as an edit distance of 1.\n *\n * Increasing the allowed edit distance will have a dramatic impact\n * on the performance of both creating and intersecting these TokenSets.\n * It is advised to keep the edit distance less than 3.\n *\n * @param {string} str - The string to create the token set from.\n * @param {number} editDistance - The allowed edit distance to match.\n * @returns {lunr.Vector}\n */\nlunr.TokenSet.fromFuzzyString = function (str, editDistance) {\n  var root = new lunr.TokenSet\n\n  var stack = [{\n    node: root,\n    editsRemaining: editDistance,\n    str: str\n  }]\n\n  while (stack.length) {\n    var frame = stack.pop()\n\n    // no edit\n    if (frame.str.length > 0) {\n      var char = frame.str.charAt(0),\n          noEditNode\n\n      if (char in frame.node.edges) {\n        noEditNode = frame.node.edges[char]\n      } else {\n        noEditNode = new lunr.TokenSet\n        frame.node.edges[char] = noEditNode\n      }\n\n      if (frame.str.length == 1) {\n        noEditNode.final = true\n      } else {\n        stack.push({\n          node: noEditNode,\n          editsRemaining: frame.editsRemaining,\n          str: frame.str.slice(1)\n        })\n      }\n    }\n\n    // deletion\n    // can only do a deletion if we have enough edits remaining\n    // and if there are characters left to delete in the string\n    if (frame.editsRemaining > 0 && frame.str.length > 1) {\n      var char = frame.str.charAt(1),\n          deletionNode\n\n      if (char in frame.node.edges) {\n        deletionNode = frame.node.edges[char]\n      } else {\n        deletionNode = new lunr.TokenSet\n        frame.node.edges[char] = deletionNode\n      }\n\n      if (frame.str.length <= 2) {\n        deletionNode.final = true\n      } else {\n        stack.push({\n          node: deletionNode,\n          editsRemaining: frame.editsRemaining - 1,\n          str: frame.str.slice(2)\n        })\n      }\n    }\n\n    // deletion\n    // just removing the last character from the str\n    if (frame.editsRemaining > 0 && frame.str.length == 1) {\n      frame.node.final = true\n    }\n\n    // substitution\n    // can only do a substitution if we have enough edits remaining\n    // and if there are characters left to substitute\n    if (frame.editsRemaining > 0 && frame.str.length >= 1) {\n      if (\"*\" in frame.node.edges) {\n        var substitutionNode = frame.node.edges[\"*\"]\n      } else {\n        var substitutionNode = new lunr.TokenSet\n        frame.node.edges[\"*\"] = substitutionNode\n      }\n\n      if (frame.str.length == 1) {\n        substitutionNode.final = true\n      } else {\n        stack.push({\n          node: substitutionNode,\n          editsRemaining: frame.editsRemaining - 1,\n          str: frame.str.slice(1)\n        })\n      }\n    }\n\n    // insertion\n    // can only do insertion if there are edits remaining\n    if (frame.editsRemaining > 0) {\n      if (\"*\" in frame.node.edges) {\n        var insertionNode = frame.node.edges[\"*\"]\n      } else {\n        var insertionNode = new lunr.TokenSet\n        frame.node.edges[\"*\"] = insertionNode\n      }\n\n      if (frame.str.length == 0) {\n        insertionNode.final = true\n      } else {\n        stack.push({\n          node: insertionNode,\n          editsRemaining: frame.editsRemaining - 1,\n          str: frame.str\n        })\n      }\n    }\n\n    // transposition\n    // can only do a transposition if there are edits remaining\n    // and there are enough characters to transpose\n    if (frame.editsRemaining > 0 && frame.str.length > 1) {\n      var charA = frame.str.charAt(0),\n          charB = frame.str.charAt(1),\n          transposeNode\n\n      if (charB in frame.node.edges) {\n        transposeNode = frame.node.edges[charB]\n      } else {\n        transposeNode = new lunr.TokenSet\n        frame.node.edges[charB] = transposeNode\n      }\n\n      if (frame.str.length == 1) {\n        transposeNode.final = true\n      } else {\n        stack.push({\n          node: transposeNode,\n          editsRemaining: frame.editsRemaining - 1,\n          str: charA + frame.str.slice(2)\n        })\n      }\n    }\n  }\n\n  return root\n}\n\n/**\n * Creates a TokenSet from a string.\n *\n * The string may contain one or more wildcard characters (*)\n * that will allow wildcard matching when intersecting with\n * another TokenSet.\n *\n * @param {string} str - The string to create a TokenSet from.\n * @returns {lunr.TokenSet}\n */\nlunr.TokenSet.fromString = function (str) {\n  var node = new lunr.TokenSet,\n      root = node,\n      wildcardFound = false\n\n  /*\n   * Iterates through all characters within the passed string\n   * appending a node for each character.\n   *\n   * As soon as a wildcard character is found then a self\n   * referencing edge is introduced to continually match\n   * any number of any characters.\n   */\n  for (var i = 0, len = str.length; i < len; i++) {\n    var char = str[i],\n        final = (i == len - 1)\n\n    if (char == \"*\") {\n      wildcardFound = true\n      node.edges[char] = node\n      node.final = final\n\n    } else {\n      var next = new lunr.TokenSet\n      next.final = final\n\n      node.edges[char] = next\n      node = next\n\n      // TODO: is this needed anymore?\n      if (wildcardFound) {\n        node.edges[\"*\"] = root\n      }\n    }\n  }\n\n  return root\n}\n\n/**\n * Converts this TokenSet into an array of strings\n * contained within the TokenSet.\n *\n * @returns {string[]}\n */\nlunr.TokenSet.prototype.toArray = function () {\n  var words = []\n\n  var stack = [{\n    prefix: \"\",\n    node: this\n  }]\n\n  while (stack.length) {\n    var frame = stack.pop(),\n        edges = Object.keys(frame.node.edges),\n        len = edges.length\n\n    if (frame.node.final) {\n      words.push(frame.prefix)\n    }\n\n    for (var i = 0; i < len; i++) {\n      var edge = edges[i]\n\n      stack.push({\n        prefix: frame.prefix.concat(edge),\n        node: frame.node.edges[edge]\n      })\n    }\n  }\n\n  return words\n}\n\n/**\n * Generates a string representation of a TokenSet.\n *\n * This is intended to allow TokenSets to be used as keys\n * in objects, largely to aid the construction and minimisation\n * of a TokenSet. As such it is not designed to be a human\n * friendly representation of the TokenSet.\n *\n * @returns {string}\n */\nlunr.TokenSet.prototype.toString = function () {\n  // NOTE: Using Object.keys here as this.edges is very likely\n  // to enter 'hash-mode' with many keys being added\n  //\n  // avoiding a for-in loop here as it leads to the function\n  // being de-optimised (at least in V8). From some simple\n  // benchmarks the performance is comparable, but allowing\n  // V8 to optimize may mean easy performance wins in the future.\n\n  if (this._str) {\n    return this._str\n  }\n\n  var str = this.final ? '1' : '0',\n      labels = Object.keys(this.edges).sort(),\n      len = labels.length\n\n  for (var i = 0; i < len; i++) {\n    var label = labels[i],\n        node = this.edges[label]\n\n    str = str + label + node.id\n  }\n\n  return str\n}\n\n/**\n * Returns a new TokenSet that is the intersection of\n * this TokenSet and the passed TokenSet.\n *\n * This intersection will take into account any wildcards\n * contained within the TokenSet.\n *\n * @param {lunr.TokenSet} b - An other TokenSet to intersect with.\n * @returns {lunr.TokenSet}\n */\nlunr.TokenSet.prototype.intersect = function (b) {\n  var output = new lunr.TokenSet,\n      frame = undefined\n\n  var stack = [{\n    qNode: b,\n    output: output,\n    node: this\n  }]\n\n  while (stack.length) {\n    frame = stack.pop()\n\n    // NOTE: As with the #toString method, we are using\n    // Object.keys and a for loop instead of a for-in loop\n    // as both of these objects enter 'hash' mode, causing\n    // the function to be de-optimised in V8\n    var qEdges = Object.keys(frame.qNode.edges),\n        qLen = qEdges.length,\n        nEdges = Object.keys(frame.node.edges),\n        nLen = nEdges.length\n\n    for (var q = 0; q < qLen; q++) {\n      var qEdge = qEdges[q]\n\n      for (var n = 0; n < nLen; n++) {\n        var nEdge = nEdges[n]\n\n        if (nEdge == qEdge || qEdge == '*') {\n          var node = frame.node.edges[nEdge],\n              qNode = frame.qNode.edges[qEdge],\n              final = node.final && qNode.final,\n              next = undefined\n\n          if (nEdge in frame.output.edges) {\n            // an edge already exists for this character\n            // no need to create a new node, just set the finality\n            // bit unless this node is already final\n            next = frame.output.edges[nEdge]\n            next.final = next.final || final\n\n          } else {\n            // no edge exists yet, must create one\n            // set the finality bit and insert it\n            // into the output\n            next = new lunr.TokenSet\n            next.final = final\n            frame.output.edges[nEdge] = next\n          }\n\n          stack.push({\n            qNode: qNode,\n            output: next,\n            node: node\n          })\n        }\n      }\n    }\n  }\n\n  return output\n}\nlunr.TokenSet.Builder = function () {\n  this.previousWord = \"\"\n  this.root = new lunr.TokenSet\n  this.uncheckedNodes = []\n  this.minimizedNodes = {}\n}\n\nlunr.TokenSet.Builder.prototype.insert = function (word) {\n  var node,\n      commonPrefix = 0\n\n  if (word < this.previousWord) {\n    throw new Error (\"Out of order word insertion\")\n  }\n\n  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {\n    if (word[i] != this.previousWord[i]) break\n    commonPrefix++\n  }\n\n  this.minimize(commonPrefix)\n\n  if (this.uncheckedNodes.length == 0) {\n    node = this.root\n  } else {\n    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child\n  }\n\n  for (var i = commonPrefix; i < word.length; i++) {\n    var nextNode = new lunr.TokenSet,\n        char = word[i]\n\n    node.edges[char] = nextNode\n\n    this.uncheckedNodes.push({\n      parent: node,\n      char: char,\n      child: nextNode\n    })\n\n    node = nextNode\n  }\n\n  node.final = true\n  this.previousWord = word\n}\n\nlunr.TokenSet.Builder.prototype.finish = function () {\n  this.minimize(0)\n}\n\nlunr.TokenSet.Builder.prototype.minimize = function (downTo) {\n  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {\n    var node = this.uncheckedNodes[i],\n        childKey = node.child.toString()\n\n    if (childKey in this.minimizedNodes) {\n      node.parent.edges[node.char] = this.minimizedNodes[childKey]\n    } else {\n      // Cache the key for this node since\n      // we know it can't change anymore\n      node.child._str = childKey\n\n      this.minimizedNodes[childKey] = node.child\n    }\n\n    this.uncheckedNodes.pop()\n  }\n}\n/*!\n * lunr.Index\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * An index contains the built index of all documents and provides a query interface\n * to the index.\n *\n * Usually instances of lunr.Index will not be created using this constructor, instead\n * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be\n * used to load previously built and serialized indexes.\n *\n * @constructor\n * @param {Object} attrs - The attributes of the built search index.\n * @param {Object} attrs.invertedIndex - An index of term/field to document reference.\n * @param {Object<string, lunr.Vector>} attrs.documentVectors - Document vectors keyed by document reference.\n * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.\n * @param {string[]} attrs.fields - The names of indexed document fields.\n * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.\n */\nlunr.Index = function (attrs) {\n  this.invertedIndex = attrs.invertedIndex\n  this.fieldVectors = attrs.fieldVectors\n  this.tokenSet = attrs.tokenSet\n  this.fields = attrs.fields\n  this.pipeline = attrs.pipeline\n}\n\n/**\n * A result contains details of a document matching a search query.\n * @typedef {Object} lunr.Index~Result\n * @property {string} ref - The reference of the document this result represents.\n * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.\n * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.\n */\n\n/**\n * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple\n * query language which itself is parsed into an instance of lunr.Query.\n *\n * For programmatically building queries it is advised to directly use lunr.Query, the query language\n * is best used for human entered text rather than program generated text.\n *\n * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported\n * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'\n * or 'world', though those that contain both will rank higher in the results.\n *\n * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can\n * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding\n * wildcards will increase the number of documents that will be found but can also have a negative\n * impact on query performance, especially with wildcards at the beginning of a term.\n *\n * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term\n * hello in the title field will match this query. Using a field not present in the index will lead\n * to an error being thrown.\n *\n * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term\n * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported\n * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.\n * Avoid large values for edit distance to improve query performance.\n *\n * To escape special characters the backslash character '\\' can be used, this allows searches to include\n * characters that would normally be considered modifiers, e.g. `foo\\~2` will search for a term \"foo~2\" instead\n * of attempting to apply a boost of 2 to the search term \"foo\".\n *\n * @typedef {string} lunr.Index~QueryString\n * @example <caption>Simple single term query</caption>\n * hello\n * @example <caption>Multiple term query</caption>\n * hello world\n * @example <caption>term scoped to a field</caption>\n * title:hello\n * @example <caption>term with a boost of 10</caption>\n * hello^10\n * @example <caption>term with an edit distance of 2</caption>\n * hello~2\n */\n\n/**\n * Performs a search against the index using lunr query syntax.\n *\n * Results will be returned sorted by their score, the most relevant results\n * will be returned first.\n *\n * For more programmatic querying use lunr.Index#query.\n *\n * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.\n * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.\n * @returns {lunr.Index~Result[]}\n */\nlunr.Index.prototype.search = function (queryString) {\n  return this.query(function (query) {\n    var parser = new lunr.QueryParser(queryString, query)\n    parser.parse()\n  })\n}\n\n/**\n * A query builder callback provides a query object to be used to express\n * the query to perform on the index.\n *\n * @callback lunr.Index~queryBuilder\n * @param {lunr.Query} query - The query object to build up.\n * @this lunr.Query\n */\n\n/**\n * Performs a query against the index using the yielded lunr.Query object.\n *\n * If performing programmatic queries against the index, this method is preferred\n * over lunr.Index#search so as to avoid the additional query parsing overhead.\n *\n * A query object is yielded to the supplied function which should be used to\n * express the query to be run against the index.\n *\n * Note that although this function takes a callback parameter it is _not_ an\n * asynchronous operation, the callback is just yielded a query object to be\n * customized.\n *\n * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.\n * @returns {lunr.Index~Result[]}\n */\nlunr.Index.prototype.query = function (fn) {\n  // for each query clause\n  // * process terms\n  // * expand terms from token set\n  // * find matching documents and metadata\n  // * get document vectors\n  // * score documents\n\n  var query = new lunr.Query(this.fields),\n      matchingFields = Object.create(null),\n      queryVectors = Object.create(null),\n      termFieldCache = Object.create(null)\n\n  fn.call(query, query)\n\n  for (var i = 0; i < query.clauses.length; i++) {\n    /*\n     * Unless the pipeline has been disabled for this term, which is\n     * the case for terms with wildcards, we need to pass the clause\n     * term through the search pipeline. A pipeline returns an array\n     * of processed terms. Pipeline functions may expand the passed\n     * term, which means we may end up performing multiple index lookups\n     * for a single query term.\n     */\n    var clause = query.clauses[i],\n        terms = null\n\n    if (clause.usePipeline) {\n      terms = this.pipeline.runString(clause.term)\n    } else {\n      terms = [clause.term]\n    }\n\n    for (var m = 0; m < terms.length; m++) {\n      var term = terms[m]\n\n      /*\n       * Each term returned from the pipeline needs to use the same query\n       * clause object, e.g. the same boost and or edit distance. The\n       * simplest way to do this is to re-use the clause object but mutate\n       * its term property.\n       */\n      clause.term = term\n\n      /*\n       * From the term in the clause we create a token set which will then\n       * be used to intersect the indexes token set to get a list of terms\n       * to lookup in the inverted index\n       */\n      var termTokenSet = lunr.TokenSet.fromClause(clause),\n          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()\n\n      for (var j = 0; j < expandedTerms.length; j++) {\n        /*\n         * For each term get the posting and termIndex, this is required for\n         * building the query vector.\n         */\n        var expandedTerm = expandedTerms[j],\n            posting = this.invertedIndex[expandedTerm],\n            termIndex = posting._index\n\n        for (var k = 0; k < clause.fields.length; k++) {\n          /*\n           * For each field that this query term is scoped by (by default\n           * all fields are in scope) we need to get all the document refs\n           * that have this term in that field.\n           *\n           * The posting is the entry in the invertedIndex for the matching\n           * term from above.\n           */\n          var field = clause.fields[k],\n              fieldPosting = posting[field],\n              matchingDocumentRefs = Object.keys(fieldPosting),\n              termField = expandedTerm + \"/\" + field\n\n          /*\n           * To support field level boosts a query vector is created per\n           * field. This vector is populated using the termIndex found for\n           * the term and a unit value with the appropriate boost applied.\n           *\n           * If the query vector for this field does not exist yet it needs\n           * to be created.\n           */\n          if (queryVectors[field] === undefined) {\n            queryVectors[field] = new lunr.Vector\n          }\n\n          /*\n           * Using upsert because there could already be an entry in the vector\n           * for the term we are working with. In that case we just add the scores\n           * together.\n           */\n          queryVectors[field].upsert(termIndex, 1 * clause.boost, function (a, b) { return a + b })\n\n          /**\n           * If we've already seen this term, field combo then we've already collected\n           * the matching documents and metadata, no need to go through all that again\n           */\n          if (termFieldCache[termField]) {\n            continue\n          }\n\n          for (var l = 0; l < matchingDocumentRefs.length; l++) {\n            /*\n             * All metadata for this term/field/document triple\n             * are then extracted and collected into an instance\n             * of lunr.MatchData ready to be returned in the query\n             * results\n             */\n            var matchingDocumentRef = matchingDocumentRefs[l],\n                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),\n                metadata = fieldPosting[matchingDocumentRef],\n                fieldMatch\n\n            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {\n              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)\n            } else {\n              fieldMatch.add(expandedTerm, field, metadata)\n            }\n\n          }\n\n          termFieldCache[termField] = true\n        }\n      }\n    }\n  }\n\n  var matchingFieldRefs = Object.keys(matchingFields),\n      results = [],\n      matches = Object.create(null)\n\n  for (var i = 0; i < matchingFieldRefs.length; i++) {\n    /*\n     * Currently we have document fields that match the query, but we\n     * need to return documents. The matchData and scores are combined\n     * from multiple fields belonging to the same document.\n     *\n     * Scores are calculated by field, using the query vectors created\n     * above, and combined into a final document score using addition.\n     */\n    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),\n        docRef = fieldRef.docRef,\n        fieldVector = this.fieldVectors[fieldRef],\n        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),\n        docMatch\n\n    if ((docMatch = matches[docRef]) !== undefined) {\n      docMatch.score += score\n      docMatch.matchData.combine(matchingFields[fieldRef])\n    } else {\n      var match = {\n        ref: docRef,\n        score: score,\n        matchData: matchingFields[fieldRef]\n      }\n      matches[docRef] = match\n      results.push(match)\n    }\n  }\n\n  /*\n   * Sort the results objects by score, highest first.\n   */\n  return results.sort(function (a, b) {\n    return b.score - a.score\n  })\n}\n\n/**\n * Prepares the index for JSON serialization.\n *\n * The schema for this JSON blob will be described in a\n * separate JSON schema file.\n *\n * @returns {Object}\n */\nlunr.Index.prototype.toJSON = function () {\n  var invertedIndex = Object.keys(this.invertedIndex)\n    .sort()\n    .map(function (term) {\n      return [term, this.invertedIndex[term]]\n    }, this)\n\n  var fieldVectors = Object.keys(this.fieldVectors)\n    .map(function (ref) {\n      return [ref, this.fieldVectors[ref].toJSON()]\n    }, this)\n\n  return {\n    version: lunr.version,\n    fields: this.fields,\n    fieldVectors: fieldVectors,\n    invertedIndex: invertedIndex,\n    pipeline: this.pipeline.toJSON()\n  }\n}\n\n/**\n * Loads a previously serialized lunr.Index\n *\n * @param {Object} serializedIndex - A previously serialized lunr.Index\n * @returns {lunr.Index}\n */\nlunr.Index.load = function (serializedIndex) {\n  var attrs = {},\n      fieldVectors = {},\n      serializedVectors = serializedIndex.fieldVectors,\n      invertedIndex = {},\n      serializedInvertedIndex = serializedIndex.invertedIndex,\n      tokenSetBuilder = new lunr.TokenSet.Builder,\n      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)\n\n  if (serializedIndex.version != lunr.version) {\n    lunr.utils.warn(\"Version mismatch when loading serialised index. Current version of lunr '\" + lunr.version + \"' does not match serialized index '\" + serializedIndex.version + \"'\")\n  }\n\n  for (var i = 0; i < serializedVectors.length; i++) {\n    var tuple = serializedVectors[i],\n        ref = tuple[0],\n        elements = tuple[1]\n\n    fieldVectors[ref] = new lunr.Vector(elements)\n  }\n\n  for (var i = 0; i < serializedInvertedIndex.length; i++) {\n    var tuple = serializedInvertedIndex[i],\n        term = tuple[0],\n        posting = tuple[1]\n\n    tokenSetBuilder.insert(term)\n    invertedIndex[term] = posting\n  }\n\n  tokenSetBuilder.finish()\n\n  attrs.fields = serializedIndex.fields\n\n  attrs.fieldVectors = fieldVectors\n  attrs.invertedIndex = invertedIndex\n  attrs.tokenSet = tokenSetBuilder.root\n  attrs.pipeline = pipeline\n\n  return new lunr.Index(attrs)\n}\n/*!\n * lunr.Builder\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * lunr.Builder performs indexing on a set of documents and\n * returns instances of lunr.Index ready for querying.\n *\n * All configuration of the index is done via the builder, the\n * fields to index, the document reference, the text processing\n * pipeline and document scoring parameters are all set on the\n * builder before indexing.\n *\n * @constructor\n * @property {string} _ref - Internal reference to the document reference field.\n * @property {string[]} _fields - Internal reference to the document fields to index.\n * @property {object} invertedIndex - The inverted index maps terms to document fields.\n * @property {object} documentTermFrequencies - Keeps track of document term frequencies.\n * @property {object} documentLengths - Keeps track of the length of documents added to the index.\n * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.\n * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.\n * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.\n * @property {number} documentCount - Keeps track of the total number of documents indexed.\n * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.\n * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.\n * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.\n * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.\n */\nlunr.Builder = function () {\n  this._ref = \"id\"\n  this._fields = []\n  this.invertedIndex = Object.create(null)\n  this.fieldTermFrequencies = {}\n  this.fieldLengths = {}\n  this.tokenizer = lunr.tokenizer\n  this.pipeline = new lunr.Pipeline\n  this.searchPipeline = new lunr.Pipeline\n  this.documentCount = 0\n  this._b = 0.75\n  this._k1 = 1.2\n  this.termIndex = 0\n  this.metadataWhitelist = []\n}\n\n/**\n * Sets the document field used as the document reference. Every document must have this field.\n * The type of this field in the document should be a string, if it is not a string it will be\n * coerced into a string by calling toString.\n *\n * The default ref is 'id'.\n *\n * The ref should _not_ be changed during indexing, it should be set before any documents are\n * added to the index. Changing it during indexing can lead to inconsistent results.\n *\n * @param {string} ref - The name of the reference field in the document.\n */\nlunr.Builder.prototype.ref = function (ref) {\n  this._ref = ref\n}\n\n/**\n * Adds a field to the list of document fields that will be indexed. Every document being\n * indexed should have this field. Null values for this field in indexed documents will\n * not cause errors but will limit the chance of that document being retrieved by searches.\n *\n * All fields should be added before adding documents to the index. Adding fields after\n * a document has been indexed will have no effect on already indexed documents.\n *\n * @param {string} field - The name of a field to index in all documents.\n */\nlunr.Builder.prototype.field = function (field) {\n  this._fields.push(field)\n}\n\n/**\n * A parameter to tune the amount of field length normalisation that is applied when\n * calculating relevance scores. A value of 0 will completely disable any normalisation\n * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b\n * will be clamped to the range 0 - 1.\n *\n * @param {number} number - The value to set for this tuning parameter.\n */\nlunr.Builder.prototype.b = function (number) {\n  if (number < 0) {\n    this._b = 0\n  } else if (number > 1) {\n    this._b = 1\n  } else {\n    this._b = number\n  }\n}\n\n/**\n * A parameter that controls the speed at which a rise in term frequency results in term\n * frequency saturation. The default value is 1.2. Setting this to a higher value will give\n * slower saturation levels, a lower value will result in quicker saturation.\n *\n * @param {number} number - The value to set for this tuning parameter.\n */\nlunr.Builder.prototype.k1 = function (number) {\n  this._k1 = number\n}\n\n/**\n * Adds a document to the index.\n *\n * Before adding fields to the index the index should have been fully setup, with the document\n * ref and all fields to index already having been specified.\n *\n * The document must have a field name as specified by the ref (by default this is 'id') and\n * it should have all fields defined for indexing, though null or undefined values will not\n * cause errors.\n *\n * @param {object} doc - The document to add to the index.\n */\nlunr.Builder.prototype.add = function (doc) {\n  var docRef = doc[this._ref]\n\n  this.documentCount += 1\n\n  for (var i = 0; i < this._fields.length; i++) {\n    var fieldName = this._fields[i],\n        field = doc[fieldName],\n        tokens = this.tokenizer(field),\n        terms = this.pipeline.run(tokens),\n        fieldRef = new lunr.FieldRef (docRef, fieldName),\n        fieldTerms = Object.create(null)\n\n    this.fieldTermFrequencies[fieldRef] = fieldTerms\n    this.fieldLengths[fieldRef] = 0\n\n    // store the length of this field for this document\n    this.fieldLengths[fieldRef] += terms.length\n\n    // calculate term frequencies for this field\n    for (var j = 0; j < terms.length; j++) {\n      var term = terms[j]\n\n      if (fieldTerms[term] == undefined) {\n        fieldTerms[term] = 0\n      }\n\n      fieldTerms[term] += 1\n\n      // add to inverted index\n      // create an initial posting if one doesn't exist\n      if (this.invertedIndex[term] == undefined) {\n        var posting = Object.create(null)\n        posting[\"_index\"] = this.termIndex\n        this.termIndex += 1\n\n        for (var k = 0; k < this._fields.length; k++) {\n          posting[this._fields[k]] = Object.create(null)\n        }\n\n        this.invertedIndex[term] = posting\n      }\n\n      // add an entry for this term/fieldName/docRef to the invertedIndex\n      if (this.invertedIndex[term][fieldName][docRef] == undefined) {\n        this.invertedIndex[term][fieldName][docRef] = Object.create(null)\n      }\n\n      // store all whitelisted metadata about this token in the\n      // inverted index\n      for (var l = 0; l < this.metadataWhitelist.length; l++) {\n        var metadataKey = this.metadataWhitelist[l],\n            metadata = term.metadata[metadataKey]\n\n        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {\n          this.invertedIndex[term][fieldName][docRef][metadataKey] = []\n        }\n\n        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)\n      }\n    }\n\n  }\n}\n\n/**\n * Calculates the average document length for this index\n *\n * @private\n */\nlunr.Builder.prototype.calculateAverageFieldLengths = function () {\n\n  var fieldRefs = Object.keys(this.fieldLengths),\n      numberOfFields = fieldRefs.length,\n      accumulator = {},\n      documentsWithField = {}\n\n  for (var i = 0; i < numberOfFields; i++) {\n    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),\n        field = fieldRef.fieldName\n\n    documentsWithField[field] || (documentsWithField[field] = 0)\n    documentsWithField[field] += 1\n\n    accumulator[field] || (accumulator[field] = 0)\n    accumulator[field] += this.fieldLengths[fieldRef]\n  }\n\n  for (var i = 0; i < this._fields.length; i++) {\n    var field = this._fields[i]\n    accumulator[field] = accumulator[field] / documentsWithField[field]\n  }\n\n  this.averageFieldLength = accumulator\n}\n\n/**\n * Builds a vector space model of every document using lunr.Vector\n *\n * @private\n */\nlunr.Builder.prototype.createFieldVectors = function () {\n  var fieldVectors = {},\n      fieldRefs = Object.keys(this.fieldTermFrequencies),\n      fieldRefsLength = fieldRefs.length,\n      termIdfCache = Object.create(null)\n\n  for (var i = 0; i < fieldRefsLength; i++) {\n    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),\n        field = fieldRef.fieldName,\n        fieldLength = this.fieldLengths[fieldRef],\n        fieldVector = new lunr.Vector,\n        termFrequencies = this.fieldTermFrequencies[fieldRef],\n        terms = Object.keys(termFrequencies),\n        termsLength = terms.length\n\n    for (var j = 0; j < termsLength; j++) {\n      var term = terms[j],\n          tf = termFrequencies[term],\n          termIndex = this.invertedIndex[term]._index,\n          idf, score, scoreWithPrecision\n\n      if (termIdfCache[term] === undefined) {\n        idf = lunr.idf(this.invertedIndex[term], this.documentCount)\n        termIdfCache[term] = idf\n      } else {\n        idf = termIdfCache[term]\n      }\n\n      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[field])) + tf)\n      scoreWithPrecision = Math.round(score * 1000) / 1000\n      // Converts 1.23456789 to 1.234.\n      // Reducing the precision so that the vectors take up less\n      // space when serialised. Doing it now so that they behave\n      // the same before and after serialisation. Also, this is\n      // the fastest approach to reducing a number's precision in\n      // JavaScript.\n\n      fieldVector.insert(termIndex, scoreWithPrecision)\n    }\n\n    fieldVectors[fieldRef] = fieldVector\n  }\n\n  this.fieldVectors = fieldVectors\n}\n\n/**\n * Creates a token set of all tokens in the index using lunr.TokenSet\n *\n * @private\n */\nlunr.Builder.prototype.createTokenSet = function () {\n  this.tokenSet = lunr.TokenSet.fromArray(\n    Object.keys(this.invertedIndex).sort()\n  )\n}\n\n/**\n * Builds the index, creating an instance of lunr.Index.\n *\n * This completes the indexing process and should only be called\n * once all documents have been added to the index.\n *\n * @returns {lunr.Index}\n */\nlunr.Builder.prototype.build = function () {\n  this.calculateAverageFieldLengths()\n  this.createFieldVectors()\n  this.createTokenSet()\n\n  return new lunr.Index({\n    invertedIndex: this.invertedIndex,\n    fieldVectors: this.fieldVectors,\n    tokenSet: this.tokenSet,\n    fields: this._fields,\n    pipeline: this.searchPipeline\n  })\n}\n\n/**\n * Applies a plugin to the index builder.\n *\n * A plugin is a function that is called with the index builder as its context.\n * Plugins can be used to customise or extend the behaviour of the index\n * in some way. A plugin is just a function, that encapsulated the custom\n * behaviour that should be applied when building the index.\n *\n * The plugin function will be called with the index builder as its argument, additional\n * arguments can also be passed when calling use. The function will be called\n * with the index builder as its context.\n *\n * @param {Function} plugin The plugin to apply.\n */\nlunr.Builder.prototype.use = function (fn) {\n  var args = Array.prototype.slice.call(arguments, 1)\n  args.unshift(this)\n  fn.apply(this, args)\n}\n/**\n * Contains and collects metadata about a matching document.\n * A single instance of lunr.MatchData is returned as part of every\n * lunr.Index~Result.\n *\n * @constructor\n * @param {string} term - The term this match data is associated with\n * @param {string} field - The field in which the term was found\n * @param {object} metadata - The metadata recorded about this term in this field\n * @property {object} metadata - A cloned collection of metadata associated with this document.\n * @see {@link lunr.Index~Result}\n */\nlunr.MatchData = function (term, field, metadata) {\n  var clonedMetadata = Object.create(null),\n      metadataKeys = Object.keys(metadata)\n\n  // Cloning the metadata to prevent the original\n  // being mutated during match data combination.\n  // Metadata is kept in an array within the inverted\n  // index so cloning the data can be done with\n  // Array#slice\n  for (var i = 0; i < metadataKeys.length; i++) {\n    var key = metadataKeys[i]\n    clonedMetadata[key] = metadata[key].slice()\n  }\n\n  this.metadata = Object.create(null)\n  this.metadata[term] = Object.create(null)\n  this.metadata[term][field] = clonedMetadata\n}\n\n/**\n * An instance of lunr.MatchData will be created for every term that matches a\n * document. However only one instance is required in a lunr.Index~Result. This\n * method combines metadata from another instance of lunr.MatchData with this\n * objects metadata.\n *\n * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.\n * @see {@link lunr.Index~Result}\n */\nlunr.MatchData.prototype.combine = function (otherMatchData) {\n  var terms = Object.keys(otherMatchData.metadata)\n\n  for (var i = 0; i < terms.length; i++) {\n    var term = terms[i],\n        fields = Object.keys(otherMatchData.metadata[term])\n\n    if (this.metadata[term] == undefined) {\n      this.metadata[term] = Object.create(null)\n    }\n\n    for (var j = 0; j < fields.length; j++) {\n      var field = fields[j],\n          keys = Object.keys(otherMatchData.metadata[term][field])\n\n      if (this.metadata[term][field] == undefined) {\n        this.metadata[term][field] = Object.create(null)\n      }\n\n      for (var k = 0; k < keys.length; k++) {\n        var key = keys[k]\n\n        if (this.metadata[term][field][key] == undefined) {\n          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]\n        } else {\n          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])\n        }\n\n      }\n    }\n  }\n}\n\n/**\n * Add metadata for a term/field pair to this instance of match data.\n *\n * @param {string} term - The term this match data is associated with\n * @param {string} field - The field in which the term was found\n * @param {object} metadata - The metadata recorded about this term in this field\n */\nlunr.MatchData.prototype.add = function (term, field, metadata) {\n  if (!(term in this.metadata)) {\n    this.metadata[term] = Object.create(null)\n    this.metadata[term][field] = metadata\n    return\n  }\n\n  if (!(field in this.metadata[term])) {\n    this.metadata[term][field] = metadata\n    return\n  }\n\n  var metadataKeys = Object.keys(metadata)\n\n  for (var i = 0; i < metadataKeys.length; i++) {\n    var key = metadataKeys[i]\n\n    if (key in this.metadata[term][field]) {\n      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])\n    } else {\n      this.metadata[term][field][key] = metadata[key]\n    }\n  }\n}\n/**\n * A lunr.Query provides a programmatic way of defining queries to be performed\n * against a {@link lunr.Index}.\n *\n * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method\n * so the query object is pre-initialized with the right index fields.\n *\n * @constructor\n * @property {lunr.Query~Clause[]} clauses - An array of query clauses.\n * @property {string[]} allFields - An array of all available fields in a lunr.Index.\n */\nlunr.Query = function (allFields) {\n  this.clauses = []\n  this.allFields = allFields\n}\n\n/**\n * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.\n *\n * This allows wildcards to be added to the beginning and end of a term without having to manually do any string\n * concatenation.\n *\n * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.\n *\n * @constant\n * @default\n * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour\n * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists\n * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists\n * @see lunr.Query~Clause\n * @see lunr.Query#clause\n * @see lunr.Query#term\n * @example <caption>query term with trailing wildcard</caption>\n * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })\n * @example <caption>query term with leading and trailing wildcard</caption>\n * query.term('foo', {\n *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING\n * })\n */\nlunr.Query.wildcard = new String (\"*\")\nlunr.Query.wildcard.NONE = 0\nlunr.Query.wildcard.LEADING = 1\nlunr.Query.wildcard.TRAILING = 2\n\n/**\n * A single clause in a {@link lunr.Query} contains a term and details on how to\n * match that term against a {@link lunr.Index}.\n *\n * @typedef {Object} lunr.Query~Clause\n * @property {string[]} fields - The fields in an index this clause should be matched against.\n * @property {number} [boost=1] - Any boost that should be applied when matching this clause.\n * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.\n * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.\n * @property {number} [wildcard=0] - Whether the term should have wildcards appended or prepended.\n */\n\n/**\n * Adds a {@link lunr.Query~Clause} to this query.\n *\n * Unless the clause contains the fields to be matched all fields will be matched. In addition\n * a default boost of 1 is applied to the clause.\n *\n * @param {lunr.Query~Clause} clause - The clause to add to this query.\n * @see lunr.Query~Clause\n * @returns {lunr.Query}\n */\nlunr.Query.prototype.clause = function (clause) {\n  if (!('fields' in clause)) {\n    clause.fields = this.allFields\n  }\n\n  if (!('boost' in clause)) {\n    clause.boost = 1\n  }\n\n  if (!('usePipeline' in clause)) {\n    clause.usePipeline = true\n  }\n\n  if (!('wildcard' in clause)) {\n    clause.wildcard = lunr.Query.wildcard.NONE\n  }\n\n  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {\n    clause.term = \"*\" + clause.term\n  }\n\n  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {\n    clause.term = \"\" + clause.term + \"*\"\n  }\n\n  this.clauses.push(clause)\n\n  return this\n}\n\n/**\n * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}\n * to the list of clauses that make up this query.\n *\n * @param {string} term - The term to add to the query.\n * @param {Object} [options] - Any additional properties to add to the query clause.\n * @returns {lunr.Query}\n * @see lunr.Query#clause\n * @see lunr.Query~Clause\n * @example <caption>adding a single term to a query</caption>\n * query.term(\"foo\")\n * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>\n * query.term(\"foo\", {\n *   fields: [\"title\"],\n *   boost: 10,\n *   wildcard: lunr.Query.wildcard.TRAILING\n * })\n */\nlunr.Query.prototype.term = function (term, options) {\n  var clause = options || {}\n  clause.term = term\n\n  this.clause(clause)\n\n  return this\n}\nlunr.QueryParseError = function (message, start, end) {\n  this.name = \"QueryParseError\"\n  this.message = message\n  this.start = start\n  this.end = end\n}\n\nlunr.QueryParseError.prototype = new Error\nlunr.QueryLexer = function (str) {\n  this.lexemes = []\n  this.str = str\n  this.length = str.length\n  this.pos = 0\n  this.start = 0\n  this.escapeCharPositions = []\n}\n\nlunr.QueryLexer.prototype.run = function () {\n  var state = lunr.QueryLexer.lexText\n\n  while (state) {\n    state = state(this)\n  }\n}\n\nlunr.QueryLexer.prototype.sliceString = function () {\n  var subSlices = [],\n      sliceStart = this.start,\n      sliceEnd = this.pos\n\n  for (var i = 0; i < this.escapeCharPositions.length; i++) {\n    sliceEnd = this.escapeCharPositions[i]\n    subSlices.push(this.str.slice(sliceStart, sliceEnd))\n    sliceStart = sliceEnd + 1\n  }\n\n  subSlices.push(this.str.slice(sliceStart, this.pos))\n  this.escapeCharPositions.length = 0\n\n  return subSlices.join('')\n}\n\nlunr.QueryLexer.prototype.emit = function (type) {\n  this.lexemes.push({\n    type: type,\n    str: this.sliceString(),\n    start: this.start,\n    end: this.pos\n  })\n\n  this.start = this.pos\n}\n\nlunr.QueryLexer.prototype.escapeCharacter = function () {\n  this.escapeCharPositions.push(this.pos - 1)\n  this.pos += 1\n}\n\nlunr.QueryLexer.prototype.next = function () {\n  if (this.pos >= this.length) {\n    return lunr.QueryLexer.EOS\n  }\n\n  var char = this.str.charAt(this.pos)\n  this.pos += 1\n  return char\n}\n\nlunr.QueryLexer.prototype.width = function () {\n  return this.pos - this.start\n}\n\nlunr.QueryLexer.prototype.ignore = function () {\n  if (this.start == this.pos) {\n    this.pos += 1\n  }\n\n  this.start = this.pos\n}\n\nlunr.QueryLexer.prototype.backup = function () {\n  this.pos -= 1\n}\n\nlunr.QueryLexer.prototype.acceptDigitRun = function () {\n  var char, charCode\n\n  do {\n    char = this.next()\n    charCode = char.charCodeAt(0)\n  } while (charCode > 47 && charCode < 58)\n\n  if (char != lunr.QueryLexer.EOS) {\n    this.backup()\n  }\n}\n\nlunr.QueryLexer.prototype.more = function () {\n  return this.pos < this.length\n}\n\nlunr.QueryLexer.EOS = 'EOS'\nlunr.QueryLexer.FIELD = 'FIELD'\nlunr.QueryLexer.TERM = 'TERM'\nlunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'\nlunr.QueryLexer.BOOST = 'BOOST'\n\nlunr.QueryLexer.lexField = function (lexer) {\n  lexer.backup()\n  lexer.emit(lunr.QueryLexer.FIELD)\n  lexer.ignore()\n  return lunr.QueryLexer.lexText\n}\n\nlunr.QueryLexer.lexTerm = function (lexer) {\n  if (lexer.width() > 1) {\n    lexer.backup()\n    lexer.emit(lunr.QueryLexer.TERM)\n  }\n\n  lexer.ignore()\n\n  if (lexer.more()) {\n    return lunr.QueryLexer.lexText\n  }\n}\n\nlunr.QueryLexer.lexEditDistance = function (lexer) {\n  lexer.ignore()\n  lexer.acceptDigitRun()\n  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)\n  return lunr.QueryLexer.lexText\n}\n\nlunr.QueryLexer.lexBoost = function (lexer) {\n  lexer.ignore()\n  lexer.acceptDigitRun()\n  lexer.emit(lunr.QueryLexer.BOOST)\n  return lunr.QueryLexer.lexText\n}\n\nlunr.QueryLexer.lexEOS = function (lexer) {\n  if (lexer.width() > 0) {\n    lexer.emit(lunr.QueryLexer.TERM)\n  }\n}\n\n// This matches the separator used when tokenising fields\n// within a document. These should match otherwise it is\n// not possible to search for some tokens within a document.\n//\n// It is possible for the user to change the separator on the\n// tokenizer so it _might_ clash with any other of the special\n// characters already used within the search string, e.g. :.\n//\n// This means that it is possible to change the separator in\n// such a way that makes some words unsearchable using a search\n// string.\nlunr.QueryLexer.termSeparator = lunr.tokenizer.separator\n\nlunr.QueryLexer.lexText = function (lexer) {\n  while (true) {\n    var char = lexer.next()\n\n    if (char == lunr.QueryLexer.EOS) {\n      return lunr.QueryLexer.lexEOS\n    }\n\n    // Escape character is '\\'\n    if (char.charCodeAt(0) == 92) {\n      lexer.escapeCharacter()\n      continue\n    }\n\n    if (char == \":\") {\n      return lunr.QueryLexer.lexField\n    }\n\n    if (char == \"~\") {\n      lexer.backup()\n      if (lexer.width() > 0) {\n        lexer.emit(lunr.QueryLexer.TERM)\n      }\n      return lunr.QueryLexer.lexEditDistance\n    }\n\n    if (char == \"^\") {\n      lexer.backup()\n      if (lexer.width() > 0) {\n        lexer.emit(lunr.QueryLexer.TERM)\n      }\n      return lunr.QueryLexer.lexBoost\n    }\n\n    if (char.match(lunr.QueryLexer.termSeparator)) {\n      return lunr.QueryLexer.lexTerm\n    }\n  }\n}\n\nlunr.QueryParser = function (str, query) {\n  this.lexer = new lunr.QueryLexer (str)\n  this.query = query\n  this.currentClause = {}\n  this.lexemeIdx = 0\n}\n\nlunr.QueryParser.prototype.parse = function () {\n  this.lexer.run()\n  this.lexemes = this.lexer.lexemes\n\n  var state = lunr.QueryParser.parseFieldOrTerm\n\n  while (state) {\n    state = state(this)\n  }\n\n  return this.query\n}\n\nlunr.QueryParser.prototype.peekLexeme = function () {\n  return this.lexemes[this.lexemeIdx]\n}\n\nlunr.QueryParser.prototype.consumeLexeme = function () {\n  var lexeme = this.peekLexeme()\n  this.lexemeIdx += 1\n  return lexeme\n}\n\nlunr.QueryParser.prototype.nextClause = function () {\n  var completedClause = this.currentClause\n  this.query.clause(completedClause)\n  this.currentClause = {}\n}\n\nlunr.QueryParser.parseFieldOrTerm = function (parser) {\n  var lexeme = parser.peekLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  switch (lexeme.type) {\n    case lunr.QueryLexer.FIELD:\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.TERM:\n      return lunr.QueryParser.parseTerm\n    default:\n      var errorMessage = \"expected either a field or a term, found \" + lexeme.type\n\n      if (lexeme.str.length >= 1) {\n        errorMessage += \" with value '\" + lexeme.str + \"'\"\n      }\n\n      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n}\n\nlunr.QueryParser.parseField = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  if (parser.query.allFields.indexOf(lexeme.str) == -1) {\n    var possibleFields = parser.query.allFields.map(function (f) { return \"'\" + f + \"'\" }).join(', '),\n        errorMessage = \"unrecognised field '\" + lexeme.str + \"', possible fields: \" + possibleFields\n\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  parser.currentClause.fields = [lexeme.str]\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    var errorMessage = \"expecting term, found nothing\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      return lunr.QueryParser.parseTerm\n    default:\n      var errorMessage = \"expecting term, found '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseTerm = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  parser.currentClause.term = lexeme.str.toLowerCase()\n\n  if (lexeme.str.indexOf(\"*\") != -1) {\n    parser.currentClause.usePipeline = false\n  }\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    parser.nextClause()\n    return\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      parser.nextClause()\n      return lunr.QueryParser.parseTerm\n    case lunr.QueryLexer.FIELD:\n      parser.nextClause()\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.EDIT_DISTANCE:\n      return lunr.QueryParser.parseEditDistance\n    case lunr.QueryLexer.BOOST:\n      return lunr.QueryParser.parseBoost\n    default:\n      var errorMessage = \"Unexpected lexeme type '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseEditDistance = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  var editDistance = parseInt(lexeme.str, 10)\n\n  if (isNaN(editDistance)) {\n    var errorMessage = \"edit distance must be numeric\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  parser.currentClause.editDistance = editDistance\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    parser.nextClause()\n    return\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      parser.nextClause()\n      return lunr.QueryParser.parseTerm\n    case lunr.QueryLexer.FIELD:\n      parser.nextClause()\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.EDIT_DISTANCE:\n      return lunr.QueryParser.parseEditDistance\n    case lunr.QueryLexer.BOOST:\n      return lunr.QueryParser.parseBoost\n    default:\n      var errorMessage = \"Unexpected lexeme type '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseBoost = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  var boost = parseInt(lexeme.str, 10)\n\n  if (isNaN(boost)) {\n    var errorMessage = \"boost must be numeric\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  parser.currentClause.boost = boost\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    parser.nextClause()\n    return\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      parser.nextClause()\n      return lunr.QueryParser.parseTerm\n    case lunr.QueryLexer.FIELD:\n      parser.nextClause()\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.EDIT_DISTANCE:\n      return lunr.QueryParser.parseEditDistance\n    case lunr.QueryLexer.BOOST:\n      return lunr.QueryParser.parseBoost\n    default:\n      var errorMessage = \"Unexpected lexeme type '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\n  /**\n   * export the module via AMD, CommonJS or as a browser global\n   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js\n   */\n  ;(function (root, factory) {\n    if (true) {\n      // AMD. Register as an anonymous module.\n      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n    } else if (typeof exports === 'object') {\n      /**\n       * Node. Does not work with strict CommonJS, but\n       * only CommonJS-like enviroments that support module.exports,\n       * like Node.\n       */\n      module.exports = factory()\n    } else {\n      // Browser globals (root is window)\n      root.lunr = factory()\n    }\n  }(this, function () {\n    /**\n     * Just return a value to define the module export.\n     * This example returns an object, but the module\n     * can return a function as the exported value.\n     */\n    return lunr\n  }))\n})();\n\n\n/***/ }),\n\n/***/ \"./node_modules/webpack/buildin/harmony-module.js\":\n/***/ (function(module, exports) {\n\nmodule.exports = function(originalModule) {\r\n\tif(!originalModule.webpackPolyfill) {\r\n\t\tvar module = Object.create(originalModule);\r\n\t\t// module.parent = undefined by default\r\n\t\tif(!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"exports\", {\r\n\t\t\tenumerable: true,\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n\n\n/***/ }),\n\n/***/ \"./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/react-hot-loader/webpack.js!./node_modules/awesome-typescript-loader/dist/entry.js??ref--0-1!./src/services/SearchWorker.worker.ts\":\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\nObject.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__[\"add\"] = add;\n/* harmony export (immutable) */ __webpack_exports__[\"done\"] = done;\n/* harmony export (immutable) */ __webpack_exports__[\"toJS\"] = toJS;\n/* harmony export (immutable) */ __webpack_exports__[\"load\"] = load;\n/* harmony export (immutable) */ __webpack_exports__[\"search\"] = search;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lunr__ = __webpack_require__(\"./node_modules/lunr/lunr.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lunr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lunr__);\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [0, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n/* just for better typings */\r\nvar Worker = /** @class */ (function () {\r\n    function Worker() {\r\n        this.add = add;\r\n        this.done = done;\r\n        this.search = search;\r\n        this.toJS = toJS;\r\n        this.load = load;\r\n    }\r\n    return Worker;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Worker);\r\nvar store = {};\r\nvar resolveIndex;\r\nvar index = new Promise(function (resolve) {\r\n    resolveIndex = resolve;\r\n});\r\nvar builder = new __WEBPACK_IMPORTED_MODULE_0_lunr__[\"Builder\"]();\r\nbuilder.field('title');\r\nbuilder.field('description');\r\nbuilder.ref('id');\r\nbuilder.pipeline.add(__WEBPACK_IMPORTED_MODULE_0_lunr__[\"trimmer\"], __WEBPACK_IMPORTED_MODULE_0_lunr__[\"stopWordFilter\"], __WEBPACK_IMPORTED_MODULE_0_lunr__[\"stemmer\"]);\r\nvar expandTerm = function (term) { return '*' + __WEBPACK_IMPORTED_MODULE_0_lunr__[\"stemmer\"](new __WEBPACK_IMPORTED_MODULE_0_lunr__[\"Token\"](term, {})) + '*'; };\r\nfunction add(title, description, id) {\r\n    var item = { title: title, description: description, id: id };\r\n    builder.add(item);\r\n    store[id] = item;\r\n}\r\nfunction done() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            resolveIndex(builder.build());\r\n            return [2 /*return*/];\r\n        });\r\n    });\r\n}\r\nfunction toJS() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var _a;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0:\r\n                    _a = {\r\n                        store: store\r\n                    };\r\n                    return [4 /*yield*/, index];\r\n                case 1: return [2 /*return*/, (_a.index = (_b.sent()).toJSON(),\r\n                        _a)];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction load(state) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            store = state.store;\r\n            resolveIndex(__WEBPACK_IMPORTED_MODULE_0_lunr__[\"Index\"].load(state.index));\r\n            return [2 /*return*/];\r\n        });\r\n    });\r\n}\r\nfunction search(q) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    if (q.trim().length === 0) {\r\n                        return [2 /*return*/, []];\r\n                    }\r\n                    return [4 /*yield*/, index];\r\n                case 1: return [2 /*return*/, (_a.sent())\r\n                        .query(function (t) {\r\n                        q\r\n                            .trim()\r\n                            .split(/\\s+/)\r\n                            .forEach(function (term) {\r\n                            var exp = expandTerm(term);\r\n                            t.term(exp, {});\r\n                        });\r\n                    })\r\n                        .map(function (res) { return (__assign({}, store[res.ref], { score: res.score })); })];\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', \"/Users/elena/Projects/CARTO/ReDoc/src/services/SearchWorker.worker.ts\"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, \"/Users/elena/Projects/CARTO/ReDoc/src/services/SearchWorker.worker.ts\"); } } })();\naddEventListener('message', function (e) {var ref = e.data;var type = ref.type;var method = ref.method;var id = ref.id;var params = ref.params;var f, p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () { return f.apply(__webpack_exports__, params); });} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}, function (error) {postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});\n/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(\"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n/***/ })\n\n/******/ });\n//# sourceMappingURL=9af9eac801b793197f2d.worker.js.map"])), { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/***/ (function(module, exports) {

function addMethods(worker, methods) {
    var c = 0;
    var callbacks = {};
    worker.addEventListener('message', function (e) {
        var d = e.data;
        if (d.type !== 'RPC') 
            { return; }
        if (d.id) {
            var f = callbacks[d.id];
            if (f) {
                delete callbacks[d.id];
                if (d.error) 
                    { f[1](d.error); }
                 else 
                    { f[0](d.result); }
            }
        } else {
            var evt = document.createEvent('Event');
            evt.initEvent(d.method);
            evt.data = d.params;
            worker.dispatchEvent(evt);
        }
    });
    methods.forEach(function (method) {
        worker[method] = (function () {
            var params = [], len = arguments.length;
            while ( len-- ) params[ len ] = arguments[ len ];

            return new Promise(function (a, b) {
            var id = ++c;
            callbacks[id] = [a,b];
            worker.postMessage({
                type: 'RPC',
                id: id,
                method: method,
                params: params
            });
        });
        });
    });
}

module.exports = addMethods;


/***/ }),

/***/ "./src/common-elements/CopyButtonWrapper.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyButtonWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ClipboardService__ = __webpack_require__("./src/services/ClipboardService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CopyButtonWrapper = /** @class */ (function (_super) {
    __extends(CopyButtonWrapper, _super);
    function CopyButtonWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.copy = function () {
            var content = typeof _this.props.data === 'string'
                ? _this.props.data
                : JSON.stringify(_this.props.data, null, 2);
            __WEBPACK_IMPORTED_MODULE_1__services_ClipboardService__["a" /* ClipboardService */].copyCustom(content);
            _this.showTooltip();
        };
        _this.renderCopyButton = function () {
            return __WEBPACK_IMPORTED_MODULE_1__services_ClipboardService__["a" /* ClipboardService */].isSupported() ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { onClick: _this.copy }, _this.state.tooltipShown ? 'Copied!' : 'Click to Copy')) : null;
        };
        _this.state = {
            tooltipShown: false,
        };
        return _this;
    }
    CopyButtonWrapper.prototype.render = function () {
        return this.props.children({ renderCopyButton: this.renderCopyButton });
    };
    CopyButtonWrapper.prototype.showTooltip = function () {
        var _this = this;
        this.setState({
            tooltipShown: true,
        });
        setTimeout(function () {
            _this.setState({
                tooltipShown: false,
            });
        }, 1500);
    };
    return CopyButtonWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/CopyButtonWrapper.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/CopyButtonWrapper.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/dropdown.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StyledDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SimpleDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MimeLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dropdown__ = __webpack_require__("react-dropdown");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var StyledDropdown = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["g" /* withProps */])(Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(__WEBPACK_IMPORTED_MODULE_0_react_dropdown___default.a))(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 100px;\n  display: inline-block;\n  position: relative;\n  width: auto;\n  font-family: ", ";\n\n  .Dropdown-control  {\n    font-family: ", ";\n    position: relative;\n    font-size: .929em;\n    width: 100%;\n    line-height: 1.5em;\n    vertical-align: middle;\n    cursor: pointer;\n    border-color: rgba(38, 50, 56, 0.5);\n    color: #263238;\n    outline: none;\n    padding: 0.15em 1.5em 0.2em 0.5em;\n    border-radius: 2px;\n    border-width: 1px;\n    border-style: solid;\n    margin-top: 5px;\n    background: white;\n\n    &:hover {\n      border-color: ", ";\n      color: ", ";\n      box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12);\n    }\n  }\n\n  .Dropdown-arrow {\n    border-color: ", " transparent transparent;\n    border-style: solid;\n    border-width: 0.35em 0.35em 0;\n    content: ' ';\n    display: block;\n    height: 0;\n    position: absolute;\n    right: 0.35em;\n    top: 50%;\n    margin-top: -0.125em;\n    width: 0;\n  }\n\n  .Dropdown-menu {\n    position: absolute;\n    margin-top: 2px;\n    left: 0;\n    right: 0;\n\n    z-index: 10;\n    min-width: 100px;\n\n    background: white;\n    border: 1px solid rgba(38, 50, 56, 0.2);\n    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);\n  }\n\n  .Dropdown-option {\n    font-size: 0.9em;\n    color: #263238;\n    cursor: pointer;\n    padding: 0.4em;\n\n    &.is-selected {\n      background-color: rgba(0, 0, 0, 0.05)\n    }\n\n    &:hover {\n      background-color: rgba(38, 50, 56, 0.12)\n    }\n  }\n"], ["\n  min-width: 100px;\n  display: inline-block;\n  position: relative;\n  width: auto;\n  font-family: ", ";\n\n  .Dropdown-control  {\n    font-family: ", ";\n    position: relative;\n    font-size: .929em;\n    width: 100%;\n    line-height: 1.5em;\n    vertical-align: middle;\n    cursor: pointer;\n    border-color: rgba(38, 50, 56, 0.5);\n    color: #263238;\n    outline: none;\n    padding: 0.15em 1.5em 0.2em 0.5em;\n    border-radius: 2px;\n    border-width: 1px;\n    border-style: solid;\n    margin-top: 5px;\n    background: white;\n\n    &:hover {\n      border-color: ", ";\n      color: ", ";\n      box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12);\n    }\n  }\n\n  .Dropdown-arrow {\n    border-color: ", " transparent transparent;\n    border-style: solid;\n    border-width: 0.35em 0.35em 0;\n    content: ' ';\n    display: block;\n    height: 0;\n    position: absolute;\n    right: 0.35em;\n    top: 50%;\n    margin-top: -0.125em;\n    width: 0;\n  }\n\n  .Dropdown-menu {\n    position: absolute;\n    margin-top: 2px;\n    left: 0;\n    right: 0;\n\n    z-index: 10;\n    min-width: 100px;\n\n    background: white;\n    border: 1px solid rgba(38, 50, 56, 0.2);\n    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);\n  }\n\n  .Dropdown-option {\n    font-size: 0.9em;\n    color: #263238;\n    cursor: pointer;\n    padding: 0.4em;\n\n    &.is-selected {\n      background-color: rgba(0, 0, 0, 0.05)\n    }\n\n    &:hover {\n      background-color: rgba(38, 50, 56, 0.12)\n    }\n  }\n"])), function (props) { return props.theme.headingsFont.family; }, function (props) { return props.theme.headingsFont.family; }, function (props) { return props.theme.colors.main; }, function (props) { return props.theme.colors.main; }, function (props) { return props.theme.colors.main; });
var SimpleDropdown = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(StyledDropdown)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n\n  .Dropdown-control  {\n    font-size: 1em;\n    border: none;\n    padding: 0 1.2em 0 0;\n    background: transparent;\n\n    &:hover {\n      color: ", ";\n      box-shadow: none;\n    }\n"], ["\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n\n  .Dropdown-control  {\n    font-size: 1em;\n    border: none;\n    padding: 0 1.2em 0 0;\n    background: transparent;\n\n    &:hover {\n      color: ", ";\n      box-shadow: none;\n    }\n"])), function (props) { return props.theme.colors.main; });
var MimeLabel = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n  color: black;\n"], ["\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n  color: black;\n"])));
var templateObject_1, templateObject_2, templateObject_3;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/dropdown.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/dropdown.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/fields-layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PropertiesTableCaption; });
/* unused harmony export PropertyCell */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PropertyCellWithInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PropertyNameCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PropertyDetailsCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PropertyBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerPropertiesWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PropertiesTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_styled__ = __webpack_require__("./src/utils/styled.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins__ = __webpack_require__("./src/common-elements/mixins.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var PropertiesTableCaption = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].caption(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: right;\n  font-size: 0.9em;\n  font-weight: normal;\n  color: ", ";\n"], ["\n  text-align: right;\n  font-size: 0.9em;\n  font-weight: normal;\n  color: ", ";\n"])), function (props) { return Object(__WEBPACK_IMPORTED_MODULE_1__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.text, 0.4); });
var PropertyCell = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].td(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-left: 1px solid ", ";\n  box-sizing: border-box;\n  position: relative;\n  padding: 10px 10px 10px 0;\n\n  tr:first-of-type > &,\n  tr.last > & {\n    border-left-width: 0;\n    background-position: top left;\n    background-repeat: no-repeat;\n    background-size: 1px 100%;\n  }\n\n  tr:first-of-type > & {\n    background-image: linear-gradient(\n      to bottom,\n      transparent 0%,\n      transparent 21px,\n      ", " 21px,\n      ", " 100%\n    );\n  }\n\n  tr.last > & {\n    background-image: linear-gradient(\n      to bottom,\n      ", " 0%,\n      ", " 21px,\n      transparent 21px,\n      transparent 100%\n    );\n  }\n\n  tr.last + tr > & {\n    border-left-color: transparent;\n  }\n\n  tr:only-child > & {\n    background: none;\n    border-left-color: transparent;\n  }\n"], ["\n  border-left: 1px solid ", ";\n  box-sizing: border-box;\n  position: relative;\n  padding: 10px 10px 10px 0;\n\n  tr:first-of-type > &,\n  tr.last > & {\n    border-left-width: 0;\n    background-position: top left;\n    background-repeat: no-repeat;\n    background-size: 1px 100%;\n  }\n\n  tr:first-of-type > & {\n    background-image: linear-gradient(\n      to bottom,\n      transparent 0%,\n      transparent 21px,\n      ", " 21px,\n      ", " 100%\n    );\n  }\n\n  tr.last > & {\n    background-image: linear-gradient(\n      to bottom,\n      ", " 0%,\n      ", " 21px,\n      transparent 21px,\n      transparent 100%\n    );\n  }\n\n  tr.last + tr > & {\n    border-left-color: transparent;\n  }\n\n  tr:only-child > & {\n    background: none;\n    border-left-color: transparent;\n  }\n"])), function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; });
var PropertyCellWithInner = PropertyCell.extend(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0;\n"], ["\n  padding: 0;\n"])));
var PropertyNameCell = PropertyCell.extend(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  vertical-align: top;\n  line-height: 20px;\n  white-space: nowrap;\n  font-size: 0.929em;\n  font-weight: 300;\n  font-family: ", ";\n\n  &.deprecated {\n    ", ";\n  }\n"], ["\n  vertical-align: top;\n  line-height: 20px;\n  white-space: nowrap;\n  font-size: 0.929em;\n  font-weight: 300;\n  font-family: ", ";\n\n  &.deprecated {\n    ", ";\n  }\n"])), function (props) { return props.theme.headingsFont.family; }, __WEBPACK_IMPORTED_MODULE_2__mixins__["a" /* deprecatedCss */]);
var PropertyDetailsCell = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].td(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-bottom: 1px solid #9fb4be;\n  padding: 10px 0;\n  width: ", ";\n  box-sizing: border-box;\n  vertical-align: top;\n\n  tr.expanded & {\n    border-bottom: none;\n  }\n"], ["\n  border-bottom: 1px solid #9fb4be;\n  padding: 10px 0;\n  width: ", ";\n  box-sizing: border-box;\n  vertical-align: top;\n\n  tr.expanded & {\n    border-bottom: none;\n  }\n"])), function (props) { return props.theme.schemaView.defaultDetailsWidth; });
var PropertyBullet = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  margin-right: 10px;\n\n  &::before {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 10px;\n    height: 1px;\n    background: ", ";\n  }\n\n  &::after {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 1px;\n    background: ", ";\n    height: 7px;\n  }\n"], ["\n  color: ", ";\n  font-family: ", ";\n  margin-right: 10px;\n\n  &::before {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 10px;\n    height: 1px;\n    background: ", ";\n  }\n\n  &::after {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 1px;\n    background: ", ";\n    height: 7px;\n  }\n"])), function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; });
var InnerPropertiesWrap = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 1em;\n"], ["\n  padding: 1em;\n"])));
var PropertiesTable = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].table(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  border-collapse: collapse;\n  border-radius: 3px;\n\n  border-spacing: 0;\n  width: 100%;\n\n  > tr {\n    vertical-align: middle;\n  }\n\n  &\n    ", ",\n    &\n    ", "\n    ", "\n    ", ",\n    &\n    ", "\n    ", "\n    ", "\n    ", "\n    ", " {\n    margin: 1em 0 1em 1em;\n    background: #f0f0f0;\n  }\n\n  &\n    ", "\n    ", ",\n    &\n    ", "\n    ", "\n    ", "\n    ", ",\n    &\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", " {\n    background: #ffffff;\n  }\n"], ["\n  border-collapse: collapse;\n  border-radius: 3px;\n\n  border-spacing: 0;\n  width: 100%;\n\n  > tr {\n    vertical-align: middle;\n  }\n\n  &\n    ", ",\n    &\n    ", "\n    ", "\n    ", ",\n    &\n    ", "\n    ", "\n    ", "\n    ", "\n    ", " {\n    margin: 1em 0 1em 1em;\n    background: #f0f0f0;\n  }\n\n  &\n    ", "\n    ", ",\n    &\n    ", "\n    ", "\n    ", "\n    ", ",\n    &\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", " {\n    background: #ffffff;\n  }\n"])), InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap, InnerPropertiesWrap);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/fields-layout.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/fields-layout.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickablePropertyNameCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FieldLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TypePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TypeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TypeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RequiredLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RecursiveLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NullableLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PatternLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ExampleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConstraintItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_styled__ = __webpack_require__("./src/utils/styled.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fields_layout__ = __webpack_require__("./src/common-elements/fields-layout.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var ClickablePropertyNameCell = __WEBPACK_IMPORTED_MODULE_2__fields_layout__["g" /* PropertyNameCell */].extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var FieldLabel = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  vertical-align: middle;\n  font-size: 0.929em;\n  line-height: 20px;\n"], ["\n  vertical-align: middle;\n  font-size: 0.929em;\n  line-height: 20px;\n"])));
var TypePrefix = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(FieldLabel)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return Object(__WEBPACK_IMPORTED_MODULE_1__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.text, 0.4); });
var TypeName = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(FieldLabel)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return Object(__WEBPACK_IMPORTED_MODULE_1__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.text, 0.8); });
var TypeTitle = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(FieldLabel)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return Object(__WEBPACK_IMPORTED_MODULE_1__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.text, 0.5); });
var TypeFormat = TypeName;
var RequiredLabel = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(FieldLabel.withComponent('div'))(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: #e53935;\n  font-size: 11px;\n  font-weight: normal;\n  margin-left: 20px;\n  line-height: 1;\n  font-weight: normal;\n"], ["\n  color: #e53935;\n  font-size: 11px;\n  font-weight: normal;\n  margin-left: 20px;\n  line-height: 1;\n  font-weight: normal;\n"])));
var RecursiveLabel = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(FieldLabel)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: #dd9900;\n  font-size: 13px;\n"], ["\n  color: #dd9900;\n  font-size: 13px;\n"])));
var NullableLabel = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(FieldLabel)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: #3195a6;\n  font-size: 13px;\n"], ["\n  color: #3195a6;\n  font-size: 13px;\n"])));
var PatternLabel = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(FieldLabel)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: #3195a6;\n  &::before,\n  &::after {\n    content: '/';\n    font-weight: bold;\n  }\n"], ["\n  color: #3195a6;\n  &::before,\n  &::after {\n    content: '/';\n    font-weight: bold;\n  }\n"])));
var ExampleValue = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-family: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  margin: 0 3px;\n  padding: 0.4em 0.2em 0.2em;\n  font-size: 0.8em;\n  border-radius: 2px;\n  color: ", ";\n  display: inline-block;\n  min-width: 20px;\n  text-align: center;\n  line-height: 1;\n  vertical-align: middle;\n"], ["\n  font-family: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  margin: 0 3px;\n  padding: 0.4em 0.2em 0.2em;\n  font-size: 0.8em;\n  border-radius: 2px;\n  color: ", ";\n  display: inline-block;\n  min-width: 20px;\n  text-align: center;\n  line-height: 1;\n  vertical-align: middle;\n"])), function (props) { return props.theme.code.fontFamily; }, function (props) { return Object(__WEBPACK_IMPORTED_MODULE_1__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.text, 0.02); }, function (props) { return Object(__WEBPACK_IMPORTED_MODULE_1__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.text, 0.15); }, function (props) { return Object(__WEBPACK_IMPORTED_MODULE_1__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.text, 0.9); });
var ConstraintItem = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(FieldLabel)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  margin-right: 6px;\n  margin-left: 6px;\n  border-radius: 2px;\n  padding: 0 4px;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  margin-right: 6px;\n  margin-left: 6px;\n  border-radius: 2px;\n  padding: 0 4px;\n"])), function (props) { return Object(__WEBPACK_IMPORTED_MODULE_1__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.main, 0.15); }, function (props) { return Object(__WEBPACK_IMPORTED_MODULE_1__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.main, 0.6); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/fields.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/fields.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/headers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return headerCommonMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return H2; });
/* unused harmony export H3 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return H5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var headerFontSize = {
    1: '32px',
    2: '20px',
    3: '16px',
    5: '12px',
};
var headerCommonMixin = function (level) { return Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["b" /* css */])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-weight: 600;\n  font-size: ", ";\n"], ["\n  font-family: ", ";\n  font-weight: 600;\n  font-size: ", ";\n"])), function (props) { return props.theme.headingsFont.family; }, headerFontSize[level]); };
var H1 = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  color: ", ";\n  text-transform: capitalize;\n"], ["\n  ", ";\n  color: ", ";\n  text-transform: capitalize;\n"])), headerCommonMixin(1), function (props) { return props.theme.colors.main; });
var H2 = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  color: ", ";\n"], ["\n  ", ";\n  color: ", ";\n"])), headerCommonMixin(2), function (props) { return props.theme.colors.main; });
var H3 = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].h2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  color: ", ";\n"], ["\n  ", ";\n  color: ", ";\n"])), headerCommonMixin(3), function (props) { return props.theme.colors.main; });
var H5 = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].h5(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  margin: 0;\n  color: ", ";\n  text-transform: uppercase;\n  line-height: 20px;\n"], ["\n  ", ";\n  margin: 0;\n  color: ", ";\n  text-transform: uppercase;\n  line-height: 20px;\n"])), headerCommonMixin(5), function (props) { return props.theme.colors.main; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/headers.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/headers.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__panels__ = __webpack_require__("./src/common-elements/panels.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__panels__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__panels__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__panels__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__panels__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__headers__ = __webpack_require__("./src/common-elements/headers.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__headers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__headers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__headers__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_1__headers__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkify__ = __webpack_require__("./src/common-elements/linkify.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__linkify__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_2__linkify__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shelfs__ = __webpack_require__("./src/common-elements/shelfs.tsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__shelfs__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__shelfs__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fields_layout__ = __webpack_require__("./src/common-elements/fields-layout.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schema__ = __webpack_require__("./src/common-elements/schema.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__schema__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__schema__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdown__ = __webpack_require__("./src/common-elements/dropdown.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_6__dropdown__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins__ = __webpack_require__("./src/common-elements/mixins.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_7__mixins__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs__ = __webpack_require__("./src/common-elements/tabs.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_8__tabs__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_8__tabs__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_8__tabs__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__tabs__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_8__tabs__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__samples__ = __webpack_require__("./src/common-elements/samples.tsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9__samples__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9__samples__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__perfect_scrollbar__ = __webpack_require__("./src/common-elements/perfect-scrollbar.tsx");
/* unused harmony namespace reexport */













 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/index.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/linkify.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return linkifyMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

// tslint:disable-next-line
var linkifyMixin = function (className) { return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", " {\n    cursor: pointer;\n    margin-left: 20px;\n    padding: 0;\n    line-height: 1;\n    width: 20px;\n    display: inline-block;\n  }\n\n  ", ":after {\n    content: '';\n    width: 16px;\n    height: 16px;\n    background-size: contain;\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5saW5rPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0ibGluayIgZmlsbD0iIzFGQUMwNiIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgICAgICA8cGF0aCBkPSJNOC4wMDA4NzI3MywxMS43MDI5ODE4IEw1LjIyMjk4MTgyLDE0LjQ3OTEyNzMgQzQuMzk5MTI3MjcsMTUuMzAzODU0NSAyLjk2MDg3MjczLDE1LjMwMzg1NDUgMi4xMzcwMTgxOCwxNC40NzkxMjczIEwxLjUyLDEzLjg2MjEwOTEgQzEuMTA4MDcyNzMsMTMuNDUwMTgxOCAwLjg4MjAzNjM2NCwxMi45MDIxMDkxIDAuODgyMDM2MzY0LDEyLjMyIEMwLjg4MjAzNjM2NCwxMS43MzcwMTgyIDEuMTA4OTQ1NDUsMTEuMTg4OTQ1NSAxLjUyLDEwLjc3NzAxODIgTDUuNTMxOTI3MjcsNi43NjUwOTA5MSBDNi4zODI4MzYzNiw1LjkxNDE4MTgyIDcuNzY3ODU0NTUsNS45MTQxODE4MiA4LjYxNzg5MDkxLDYuNzY1MDkwOTEgTDkuMjM0OTA5MDksNy4zODI5ODE4MiBDOS40MDUwOTA5MSw3LjU1MzE2MzY0IDkuNjgxNzQ1NDUsNy41NTMxNjM2NCA5Ljg1MTkyNzI3LDcuMzgyOTgxODIgQzEwLjAyMjEwOTEsNy4yMTI4IDEwLjAyMjEwOTEsNi45MzYxNDU0NSA5Ljg1MTkyNzI3LDYuNzY1MDkwOTEgTDkuMjM0OTA5MDksNi4xNDcyIEM4LjA0NDUwOTA5LDQuOTU1OTI3MjcgNi4xMDUzMDkwOSw0Ljk1NTkyNzI3IDQuOTE0OTA5MDksNi4xNDcyIEwwLjkwMjk4MTgxOCwxMC4xNTkxMjczIEMwLjMyNjEwOTA5MSwxMC43MzUxMjczIDAuMDA5MzA5MDkwOTEsMTEuNTAyMjU0NSAwLjAwOTMwOTA5MDkxLDEyLjMxOTEyNzMgQzAuMDA5MzA5MDkwOTEsMTMuMTM0MjU0NSAwLjMyNjk4MTgxOCwxMy45MDEzODE4IDAuOTAyOTgxODE4LDE0LjQ3ODI1NDUgTDEuNTIsMTUuMDk1MjcyNyBDMi4wOTY4NzI3MywxNS42NzIxNDU1IDIuODY0ODcyNzMsMTUuOTg5ODE4MiAzLjY4MDg3MjczLDE1Ljk4OTgxODIgQzQuNDk2ODcyNzMsMTUuOTg5ODE4MiA1LjI2NCwxNS42NzIxNDU1IDUuODQwODcyNzMsMTUuMDk1MjcyNyBMOC42MTg3NjM2NCwxMi4zMTgyNTQ1IEM4Ljc4ODk0NTQ1LDEyLjE0ODA3MjcgOC43ODg5NDU0NSwxMS44NzE0MTgyIDguNjE4NzYzNjQsMTEuNzAxMjM2NCBDOC40NDc3MDkwOSwxMS41MzE5MjczIDguMTcxMDU0NTUsMTEuNTMxOTI3MyA4LjAwMDg3MjczLDExLjcwMjk4MTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICAgICAgPHBhdGggZD0iTTE1LjA5NzAxODIsMS41MiBMMTQuNDgsMC45MDI5ODE4MTggQzEzLjI4OTYsLTAuMjg3NDE4MTgyIDExLjM1MTI3MjcsLTAuMjg3NDE4MTgyIDEwLjE2MDg3MjcsMC45MDI5ODE4MTggTDcuMzgzODU0NTUsMy42NzkxMjcyNyBDNy4yMTM2NzI3MywzLjg1MDE4MTgyIDcuMjEzNjcyNzMsNC4xMjUwOTA5MSA3LjM4Mzg1NDU1LDQuMjk2MTQ1NDUgQzcuNTU0MDM2MzYsNC40NjYzMjcyNyA3LjgzMDY5MDkxLDQuNDY2MzI3MjcgOC4wMDA4NzI3Myw0LjI5NjE0NTQ1IEwxMC43Nzc4OTA5LDEuNTIgQzExLjYyODgsMC42Njk5NjM2MzYgMTMuMDEyOTQ1NSwwLjY2OTk2MzYzNiAxMy44NjI5ODE4LDEuNTIgTDE0LjQ4LDIuMTM3ODkwOTEgQzE0Ljg5MTkyNzMsMi41NDk4MTgxOCAxNS4xMTg4MzY0LDMuMDk3ODkwOTEgMTUuMTE4ODM2NCwzLjY4IEMxNS4xMTg4MzY0LDQuMjYyOTgxODIgMTQuODkxOTI3Myw0LjgxMTA1NDU1IDE0LjQ4LDUuMjIzODU0NTUgTDEwLjQ2ODk0NTUsOS4yMzQwMzYzNiBDMTAuMDU2MTQ1NSw5LjY0NjgzNjM2IDkuNTA4OTQ1NDUsOS44NzM3NDU0NSA4LjkyNTk2MzY0LDkuODczNzQ1NDUgQzguMzQzODU0NTUsOS44NzM3NDU0NSA3Ljc5NjY1NDU1LDkuNjQ2ODM2MzYgNy4zODQ3MjcyNyw5LjIzNDkwOTA5IEM3LjIxNDU0NTQ1LDkuMDYzODU0NTUgNi45MzcwMTgxOCw5LjA2NDcyNzI3IDYuNzY3NzA5MDksOS4yMzQ5MDkwOSBDNi41OTY2NTQ1NSw5LjQwNTA5MDkxIDYuNTk2NjU0NTUsOS42ODA4NzI3MyA2Ljc2NjgzNjM2LDkuODUxOTI3MjcgQzcuMzQzNzA5MDksMTAuNDMwNTQ1NSA4LjEwOTk2MzY0LDEwLjc0NzM0NTUgOC45MjU5NjM2NCwxMC43NDczNDU1IEM5Ljc0MTk2MzY0LDEwLjc0NzM0NTUgMTAuNTA5MDkwOSwxMC40Mjk2NzI3IDExLjA4NTk2MzYsOS44NTI4IEwxNS4wOTcwMTgyLDUuODQxNzQ1NDUgQzE1LjY3Mzg5MDksNS4yNjU3NDU0NSAxNS45OTE1NjM2LDQuNDk3NzQ1NDUgMTUuOTkxNTYzNiwzLjY4MTc0NTQ1IEMxNS45OTE1NjM2LDIuODY0IDE1LjY3Mzg5MDksMi4wOTY4NzI3MyAxNS4wOTcwMTgyLDEuNTIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  // h1:hover > ", "::before, h2:hover > ", "::before, ", ":hover::before {\n  //   visibility: visible;\n  // }\n"], ["\n  ", " {\n    cursor: pointer;\n    margin-left: 20px;\n    padding: 0;\n    line-height: 1;\n    width: 20px;\n    display: inline-block;\n  }\n\n  ", ":after {\n    content: '';\n    width: 16px;\n    height: 16px;\n    background-size: contain;\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5saW5rPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0ibGluayIgZmlsbD0iIzFGQUMwNiIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgICAgICA8cGF0aCBkPSJNOC4wMDA4NzI3MywxMS43MDI5ODE4IEw1LjIyMjk4MTgyLDE0LjQ3OTEyNzMgQzQuMzk5MTI3MjcsMTUuMzAzODU0NSAyLjk2MDg3MjczLDE1LjMwMzg1NDUgMi4xMzcwMTgxOCwxNC40NzkxMjczIEwxLjUyLDEzLjg2MjEwOTEgQzEuMTA4MDcyNzMsMTMuNDUwMTgxOCAwLjg4MjAzNjM2NCwxMi45MDIxMDkxIDAuODgyMDM2MzY0LDEyLjMyIEMwLjg4MjAzNjM2NCwxMS43MzcwMTgyIDEuMTA4OTQ1NDUsMTEuMTg4OTQ1NSAxLjUyLDEwLjc3NzAxODIgTDUuNTMxOTI3MjcsNi43NjUwOTA5MSBDNi4zODI4MzYzNiw1LjkxNDE4MTgyIDcuNzY3ODU0NTUsNS45MTQxODE4MiA4LjYxNzg5MDkxLDYuNzY1MDkwOTEgTDkuMjM0OTA5MDksNy4zODI5ODE4MiBDOS40MDUwOTA5MSw3LjU1MzE2MzY0IDkuNjgxNzQ1NDUsNy41NTMxNjM2NCA5Ljg1MTkyNzI3LDcuMzgyOTgxODIgQzEwLjAyMjEwOTEsNy4yMTI4IDEwLjAyMjEwOTEsNi45MzYxNDU0NSA5Ljg1MTkyNzI3LDYuNzY1MDkwOTEgTDkuMjM0OTA5MDksNi4xNDcyIEM4LjA0NDUwOTA5LDQuOTU1OTI3MjcgNi4xMDUzMDkwOSw0Ljk1NTkyNzI3IDQuOTE0OTA5MDksNi4xNDcyIEwwLjkwMjk4MTgxOCwxMC4xNTkxMjczIEMwLjMyNjEwOTA5MSwxMC43MzUxMjczIDAuMDA5MzA5MDkwOTEsMTEuNTAyMjU0NSAwLjAwOTMwOTA5MDkxLDEyLjMxOTEyNzMgQzAuMDA5MzA5MDkwOTEsMTMuMTM0MjU0NSAwLjMyNjk4MTgxOCwxMy45MDEzODE4IDAuOTAyOTgxODE4LDE0LjQ3ODI1NDUgTDEuNTIsMTUuMDk1MjcyNyBDMi4wOTY4NzI3MywxNS42NzIxNDU1IDIuODY0ODcyNzMsMTUuOTg5ODE4MiAzLjY4MDg3MjczLDE1Ljk4OTgxODIgQzQuNDk2ODcyNzMsMTUuOTg5ODE4MiA1LjI2NCwxNS42NzIxNDU1IDUuODQwODcyNzMsMTUuMDk1MjcyNyBMOC42MTg3NjM2NCwxMi4zMTgyNTQ1IEM4Ljc4ODk0NTQ1LDEyLjE0ODA3MjcgOC43ODg5NDU0NSwxMS44NzE0MTgyIDguNjE4NzYzNjQsMTEuNzAxMjM2NCBDOC40NDc3MDkwOSwxMS41MzE5MjczIDguMTcxMDU0NTUsMTEuNTMxOTI3MyA4LjAwMDg3MjczLDExLjcwMjk4MTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICAgICAgPHBhdGggZD0iTTE1LjA5NzAxODIsMS41MiBMMTQuNDgsMC45MDI5ODE4MTggQzEzLjI4OTYsLTAuMjg3NDE4MTgyIDExLjM1MTI3MjcsLTAuMjg3NDE4MTgyIDEwLjE2MDg3MjcsMC45MDI5ODE4MTggTDcuMzgzODU0NTUsMy42NzkxMjcyNyBDNy4yMTM2NzI3MywzLjg1MDE4MTgyIDcuMjEzNjcyNzMsNC4xMjUwOTA5MSA3LjM4Mzg1NDU1LDQuMjk2MTQ1NDUgQzcuNTU0MDM2MzYsNC40NjYzMjcyNyA3LjgzMDY5MDkxLDQuNDY2MzI3MjcgOC4wMDA4NzI3Myw0LjI5NjE0NTQ1IEwxMC43Nzc4OTA5LDEuNTIgQzExLjYyODgsMC42Njk5NjM2MzYgMTMuMDEyOTQ1NSwwLjY2OTk2MzYzNiAxMy44NjI5ODE4LDEuNTIgTDE0LjQ4LDIuMTM3ODkwOTEgQzE0Ljg5MTkyNzMsMi41NDk4MTgxOCAxNS4xMTg4MzY0LDMuMDk3ODkwOTEgMTUuMTE4ODM2NCwzLjY4IEMxNS4xMTg4MzY0LDQuMjYyOTgxODIgMTQuODkxOTI3Myw0LjgxMTA1NDU1IDE0LjQ4LDUuMjIzODU0NTUgTDEwLjQ2ODk0NTUsOS4yMzQwMzYzNiBDMTAuMDU2MTQ1NSw5LjY0NjgzNjM2IDkuNTA4OTQ1NDUsOS44NzM3NDU0NSA4LjkyNTk2MzY0LDkuODczNzQ1NDUgQzguMzQzODU0NTUsOS44NzM3NDU0NSA3Ljc5NjY1NDU1LDkuNjQ2ODM2MzYgNy4zODQ3MjcyNyw5LjIzNDkwOTA5IEM3LjIxNDU0NTQ1LDkuMDYzODU0NTUgNi45MzcwMTgxOCw5LjA2NDcyNzI3IDYuNzY3NzA5MDksOS4yMzQ5MDkwOSBDNi41OTY2NTQ1NSw5LjQwNTA5MDkxIDYuNTk2NjU0NTUsOS42ODA4NzI3MyA2Ljc2NjgzNjM2LDkuODUxOTI3MjcgQzcuMzQzNzA5MDksMTAuNDMwNTQ1NSA4LjEwOTk2MzY0LDEwLjc0NzM0NTUgOC45MjU5NjM2NCwxMC43NDczNDU1IEM5Ljc0MTk2MzY0LDEwLjc0NzM0NTUgMTAuNTA5MDkwOSwxMC40Mjk2NzI3IDExLjA4NTk2MzYsOS44NTI4IEwxNS4wOTcwMTgyLDUuODQxNzQ1NDUgQzE1LjY3Mzg5MDksNS4yNjU3NDU0NSAxNS45OTE1NjM2LDQuNDk3NzQ1NDUgMTUuOTkxNTYzNiwzLjY4MTc0NTQ1IEMxNS45OTE1NjM2LDIuODY0IDE1LjY3Mzg5MDksMi4wOTY4NzI3MyAxNS4wOTcwMTgyLDEuNTIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  // h1:hover > ", "::before, h2:hover > ", "::before, ", ":hover::before {\n  //   visibility: visible;\n  // }\n"])), className, className, className, className, className); };
var ShareLink = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), linkifyMixin('&'));
var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/linkify.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/linkify.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/mixins.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deprecatedCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hoverColor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var deprecatedCss = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: line-through;\n  color: #bdccd3;\n"], ["\n  text-decoration: line-through;\n  color: #bdccd3;\n"])));
var hoverColor = function (color) {
    if (!color) {
        return '';
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    &:hover {\n      color: ", ";\n    }\n  "], ["\n    &:hover {\n      color: ", ";\n    }\n  "])), color);
};
var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/mixins.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/mixins.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/panels.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MiddlePanel; });
/* unused harmony export RightPanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarkRightPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EmptyDarkRightPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Row; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var MiddlePanel = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", "px;\n  padding: ", "px;\n  position: relative;\n\n  > div,\n  > table {\n    margin-bottom: 30px;\n  }\n\n  ", ";\n\n  &:after {\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    width: calc(100% - 20px);\n    display: block;\n    content: '';\n    border-bottom: 1px solid #eeeeee;\n    transform: translateX(-50%);\n  }\n"], ["\n  width: ", "px;\n  padding: ", "px;\n  position: relative;\n\n  > div,\n  > table {\n    margin-bottom: 30px;\n  }\n\n  ",
    ";\n\n  &:after {\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    width: calc(100% - 20px);\n    display: block;\n    content: '';\n    border-bottom: 1px solid #eeeeee;\n    transform: translateX(-50%);\n  }\n"])), function (props) { return props.theme.middlePanel.width; }, function (props) { return props.theme.spacingUnit * 2; }, __WEBPACK_IMPORTED_MODULE_0__styled_components__["f" /* media */].lessThan('medium')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n  "], ["\n    width: 100%;\n  "]))));
var RightPanel = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  color: #fafbfc;\n  bckground-color: ", ";\n  padding: ", "px;\n  position: relative;\n\n  ", ";\n\n  &:after {\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    width: calc(100% - 20px);\n    display: block;\n    content: '';\n    border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n    transform: translateX(-50%);\n  }\n"], ["\n  width: ", ";\n  color: #fafbfc;\n  bckground-color: ", ";\n  padding: ", "px;\n  position: relative;\n\n  ",
    ";\n\n  &:after {\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    width: calc(100% - 20px);\n    display: block;\n    content: '';\n    border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n    transform: translateX(-50%);\n  }\n"])), function (props) { return "calc(100% - " + props.theme.middlePanel.width + "px)"; }, function (props) { return props.theme.rightPanel.backgroundColor; }, function (props) { return props.theme.spacingUnit * 2; }, __WEBPACK_IMPORTED_MODULE_0__styled_components__["f" /* media */].lessThan('medium')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 100%;\n  "], ["\n    width: 100%;\n  "]))));
var DarkRightPanel = Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */])(RightPanel)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (props) { return props.theme.rightPanel.backgroundColor; });
var EmptyDarkRightPanel = Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */])(DarkRightPanel)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), __WEBPACK_IMPORTED_MODULE_0__styled_components__["f" /* media */].lessThan('medium')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    padding: 0\n  "], ["\n    padding: 0\n  "]))));
var Row = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n\n  ", ";\n"], ["\n  display: flex;\n  width: 100%;\n\n  ",
    ";\n"])), __WEBPACK_IMPORTED_MODULE_0__styled_components__["f" /* media */].lessThan('medium')(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    flex-direction: column;\n  "], ["\n    flex-direction: column;\n  "]))));
var templateObject_2, templateObject_1, templateObject_4, templateObject_3, templateObject_5, templateObject_7, templateObject_6, templateObject_9, templateObject_8;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/panels.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/panels.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/perfect-scrollbar.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfectScrollbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar__ = __webpack_require__("perfect-scrollbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_perfect_scrollbar_css_perfect_scrollbar_css__ = __webpack_require__("./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_perfect_scrollbar_css_perfect_scrollbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_perfect_scrollbar_css_perfect_scrollbar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




Object(__WEBPACK_IMPORTED_MODULE_3__styled_components__["d" /* injectGlobal */])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), __WEBPACK_IMPORTED_MODULE_2_perfect_scrollbar_css_perfect_scrollbar_css___default.a && __WEBPACK_IMPORTED_MODULE_2_perfect_scrollbar_css_perfect_scrollbar_css___default.a.toString());
var StyledScrollWrapper = __WEBPACK_IMPORTED_MODULE_3__styled_components__["c" /* default */].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var PerfectScrollbar = /** @class */ (function (_super) {
    __extends(PerfectScrollbar, _super);
    function PerfectScrollbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRef = function (ref) {
            _this._container = ref;
        };
        return _this;
    }
    PerfectScrollbar.prototype.componentDidMount = function () {
        this.inst = new __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar___default.a(this._container, this.props.options || {});
    };
    PerfectScrollbar.prototype.componentDidUpdate = function () {
        this.inst.update();
    };
    PerfectScrollbar.prototype.componentWillUnmount = function () {
        this.inst.destroy();
    };
    PerfectScrollbar.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, updateFn = _a.updateFn;
        updateFn(this.componentDidUpdate.bind(this));
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledScrollWrapper, { className: "scrollbar-container " + className, innerRef: this.handleRef }, children));
    };
    return PerfectScrollbar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/perfect-scrollbar.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/perfect-scrollbar.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/samples.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SampleControlsWrap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var SampleControls = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 12px;\n  color: #747d82;\n  text-align: right;\n\n  &:hover {\n    color: #909ba0;\n  }\n\n  > span {\n    display: inline-block;\n    padding: 2px 0;\n    cursor: pointer;\n  }\n"], ["\n  font-family: ", ";\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 12px;\n  color: #747d82;\n  text-align: right;\n\n  &:hover {\n    color: #909ba0;\n  }\n\n  > span {\n    display: inline-block;\n    padding: 2px 0;\n    cursor: pointer;\n  }\n"])), function (props) { return props.theme.headingsFont.family; });
var SampleControlsWrap = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:hover ", " {\n    opacity: 1;\n  }\n"], ["\n  &:hover ", " {\n    opacity: 1;\n  }\n"])), SampleControls);
var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/samples.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/samples.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/schema.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return OneOfList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OneOfLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OneOfButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArrayOpenningLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayClosingLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var OneOfList = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n"])));
var OneOfLabel = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 0.9em;\n  margin-right: 10px;\n  color: ", ";\n  font-family: Montserrat;\n}\n"], ["\n  font-size: 0.9em;\n  margin-right: 10px;\n  color: ", ";\n  font-family: Montserrat;\n}\n"])), function (props) { return props.theme.colors.main; });
var OneOfButton = Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].li)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 0.8em;\n  cursor: pointer;\n  border: 1px solid ", ";\n  padding: 2px 10px;\n\n  ", "\n"], ["\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 0.8em;\n  cursor: pointer;\n  border: 1px solid ", ";\n  padding: 2px 10px;\n\n  ",
    "\n"])), function (props) { return props.theme.colors.main; }, function (props) {
    if (props.active) {
        return "\n      color: white;\n      background-color: " + props.theme.colors.main + ";\n      ";
    }
    else {
        return "\n        color: " + props.theme.colors.main + ";\n        background-color: white;\n      ";
    }
});
var ArrayOpenningLabel = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 0.9em;\n  font-family: ", ";\n  &::after {\n    content: ' [';\n  }\n"], ["\n  font-size: 0.9em;\n  font-family: ", ";\n  &::after {\n    content: ' [';\n  }\n"])), function (props) { return props.theme.code.fontFamily; });
var ArrayClosingLabel = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 0.9em;\n  font-family: ", ";\n  &::after {\n    content: ']';\n  }\n"], ["\n  font-size: 0.9em;\n  font-family: ", ";\n  &::after {\n    content: ']';\n  }\n"])), function (props) { return props.theme.code.fontFamily; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/schema.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/schema.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/shelfs.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShelfIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Badge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var directionMap = {
    left: '90deg',
    right: '-90deg',
    up: '-180deg',
    down: '0',
};
var IntShelfIcon = /** @class */ (function (_super) {
    __extends(IntShelfIcon, _super);
    function IntShelfIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntShelfIcon.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: this.props.className, style: this.props.style, version: "1.1", viewBox: "0 0 24 24", x: "0", xmlns: "http://www.w3.org/2000/svg", y: "0" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("polygon", { points: "17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 " })));
    };
    return IntShelfIcon;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
var ShelfIcon = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(IntShelfIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  float: ", ";\n  transition: transform 0.2s ease-out;\n  transform: rotateZ(", ");\n\n  polygon {\n    fill: ", ";\n  }\n"], ["\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  float: ", ";\n  transition: transform 0.2s ease-out;\n  transform: rotateZ(", ");\n\n  polygon {\n    fill: ", ";\n  }\n"])), function (props) { return props.size || '18px'; }, function (props) { return props.size || '18px'; }, function (props) { return props.float || ''; }, function (props) { return directionMap[props.direction || 'down']; }, function (props) { return (props.color && props.theme.colors[props.color]) || props.color; });
var Badge = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].span)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  padding: 0 5px;\n  margin: 0;\n  background-color: ", ";\n  color: white;\n  font-size: ", ";;\n  vertical-align: text-top;\n"], ["\n  display: inline-block;\n  padding: 0 5px;\n  margin: 0;\n  background-color: ", ";\n  color: white;\n  font-size: ", ";;\n  vertical-align: text-top;\n"])), function (props) { return props.theme.colors[props.type]; }, function (props) { return props.theme.code.fontSize; });
var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/shelfs.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/shelfs.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common-elements/tabs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_tabs__ = __webpack_require__("react-tabs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_react_tabs__, "Tab")) __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0_react_tabs__["Tab"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_react_tabs__, "TabList")) __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0_react_tabs__["TabList"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_react_tabs__, "TabPanel")) __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0_react_tabs__["TabPanel"]; });
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var Tabs = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(__WEBPACK_IMPORTED_MODULE_0_react_tabs__["Tabs"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  > ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-wrap: wrap;\n\n    > li {\n      padding: 5px 0;\n      display: inline-block;\n\n      font-family: ", ";\n      text-transform: uppercase;\n      font-weight: 600;\n      font-size: 12px;\n      color: #fff;\n      opacity: 0.5;\n      cursor: pointer;\n      text-align: center;\n      outline: none;\n      color: #ccc;\n\n      &.react-tabs__tab--selected {\n        opacity: 1;\n      }\n\n      &:only-child {\n        flex: none;\n      }\n\n      // &.tab-success {\n      //   color: ", ";\n      // }\n\n      // &.tab-redirect {\n      //   color: ", ";\n      // }\n\n      // &.tab-info {\n      //   color: ", ";\n      // }\n\n      // &.tab-error {\n      //   color: ", ";\n      // }\n    }\n\n    li + li {\n      margin-left: 24px;\n    }\n  }\n  > .react-tabs__tab-panel {\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\n\n    & > div,\n    & > pre {\n      padding: 20px 0;\n      margin: 0;\n    }\n  }\n"], ["\n  > ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-wrap: wrap;\n\n    > li {\n      padding: 5px 0;\n      display: inline-block;\n\n      font-family: ", ";\n      text-transform: uppercase;\n      font-weight: 600;\n      font-size: 12px;\n      color: #fff;\n      opacity: 0.5;\n      cursor: pointer;\n      text-align: center;\n      outline: none;\n      color: #ccc;\n\n      &.react-tabs__tab--selected {\n        opacity: 1;\n      }\n\n      &:only-child {\n        flex: none;\n      }\n\n      // &.tab-success {\n      //   color: ", ";\n      // }\n\n      // &.tab-redirect {\n      //   color: ", ";\n      // }\n\n      // &.tab-info {\n      //   color: ", ";\n      // }\n\n      // &.tab-error {\n      //   color: ", ";\n      // }\n    }\n\n    li + li {\n      margin-left: 24px;\n    }\n  }\n  > .react-tabs__tab-panel {\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\n\n    & > div,\n    & > pre {\n      padding: 20px 0;\n      margin: 0;\n    }\n  }\n"])), function (props) { return props.theme.headingsFont.family; }, function (props) { return props.theme.colors.success; }, function (props) { return props.theme.colors.redirect; }, function (props) { return props.theme.colors.info; }, function (props) { return props.theme.colors.error; });
var SmallTabs = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(Tabs)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  > ul {\n    display: block;\n    > li {\n      padding: 0;\n      margin-right: 20px;\n      font-size: 12px;\n      padding: 2px 0;\n      border-bottom: 1px dashed;\n      color: #787b7d;\n      backgrond: none;\n\n      &:last-child {\n        margin-right: 0;\n      }\n\n      &.react-tabs__tab--selected {\n        backgrond: none;\n        color: #babcbf;\n      }\n    }\n  }\n  > .react-tabs__tab-panel {\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\n\n    & > div,\n    & > pre {\n      padding: 10px 0;\n      margin: 0;\n    }\n  }\n"], ["\n  > ul {\n    display: block;\n    > li {\n      padding: 0;\n      margin-right: 20px;\n      font-size: 12px;\n      padding: 2px 0;\n      border-bottom: 1px dashed;\n      color: #787b7d;\n      backgrond: none;\n\n      &:last-child {\n        margin-right: 0;\n      }\n\n      &.react-tabs__tab--selected {\n        backgrond: none;\n        color: #babcbf;\n      }\n    }\n  }\n  > .react-tabs__tab-panel {\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\n\n    & > div,\n    & > pre {\n      padding: 10px 0;\n      margin: 0;\n    }\n  }\n"])));
var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/tabs.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/common-elements/tabs.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ApiInfo/ApiInfo.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements___ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Markdown_Markdown__ = __webpack_require__("./src/components/Markdown/Markdown.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SecuritySchemes_SecuritySchemes__ = __webpack_require__("./src/components/SecuritySchemes/SecuritySchemes.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styled_elements__ = __webpack_require__("./src/components/ApiInfo/styled.elements.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ApiInfo = /** @class */ (function (_super) {
    __extends(ApiInfo, _super);
    function ApiInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApiInfo.prototype.render = function () {
        var store = this.props.store;
        var _a = store.spec, info = _a.info, externalDocs = _a.externalDocs;
        var downloadFilename = info.downloadFileName;
        var downloadLink = info.downloadLink;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements___["j" /* Row */], null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements___["i" /* MiddlePanel */], { className: "api-info" },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__styled_elements__["a" /* ApiHeader */], null,
                    info.title,
                    " ",
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null,
                        "(",
                        info.version,
                        ")")),
                downloadLink && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__styled_elements__["b" /* DownloadButton */], { download: downloadFilename, target: "_blank", href: downloadLink }, "Download OpenAPI specification")),
                (info.contact && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__styled_elements__["b" /* DownloadButton */], { target: "_blank", href: info.contact.url }, info.contact.name))) ||
                    null,
                (externalDocs && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", null,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { href: externalDocs.url }, externalDocs.description || externalDocs.url)))) ||
                    null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Markdown_Markdown__["a" /* Markdown */], { source: info.description || '', raw: false, components: {
                            'security-definitions': {
                                component: __WEBPACK_IMPORTED_MODULE_4__SecuritySchemes_SecuritySchemes__["a" /* SecurityDefs */],
                                propsSelector: function (_store) { return ({ securitySchemes: _store.spec.securitySchemes }); },
                            },
                        }, store: store }))),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements___["e" /* EmptyDarkRightPanel */], null)));
    };
    ApiInfo = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], ApiInfo);
    return ApiInfo;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/ApiInfo/ApiInfo.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/ApiInfo/ApiInfo.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ApiInfo/styled.elements.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export ApiInfoWrap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DownloadButton; });
/* unused harmony export InfoSpan */
/* unused harmony export InfoSpanBoxWrap */
/* unused harmony export InfoSpanBox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var delimiterWidth = 15;
var ApiInfoWrap = __WEBPACK_IMPORTED_MODULE_1__common_elements__["i" /* MiddlePanel */];
var ApiHeader = __WEBPACK_IMPORTED_MODULE_1__common_elements__["f" /* H1 */].extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 0;\n  margin-bottom: 0.5em;\n"], ["\n  margin-top: 0;\n  margin-bottom: 0.5em;\n"])));
var DownloadButton = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%227%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3Cpath%20d%3D%22M1.536%207H8v1H1.711l1.975%201.975c.2.2.194.51-.001.705a.504.504%200%200%201-.706.002L.147%207.85a.492.492%200%200%201-.14-.437.492.492%200%200%201%20.14-.438L2.98%204.143a.504.504%200%200%201%20.706.002.494.494%200%200%201%20.001.705L1.536%207z%22%20id%3D%22a%22/%3E%0A%20%20%3C/defs%3E%0A%20%20%3Cuse%20fill%3D%22%231FAC06%22%20transform%3D%22matrix%28-1%200%200%201%208%20-4%29%22%20xlink%3Ahref%3D%22%23a%22%20fill-rule%3D%22evenodd%22/%3E%0A%3C/svg%3E);\n  background-repeat: no-repeat;\n  background-position: center left;\n  font: 600 12px/20px 'Montserrat';\n  text-transform: uppercase;\n  padding: 4px 8px 4px 12px;\n  display: block;\n  text-decoration: none;\n"], ["\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%227%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3Cpath%20d%3D%22M1.536%207H8v1H1.711l1.975%201.975c.2.2.194.51-.001.705a.504.504%200%200%201-.706.002L.147%207.85a.492.492%200%200%201-.14-.437.492.492%200%200%201%20.14-.438L2.98%204.143a.504.504%200%200%201%20.706.002.494.494%200%200%201%20.001.705L1.536%207z%22%20id%3D%22a%22/%3E%0A%20%20%3C/defs%3E%0A%20%20%3Cuse%20fill%3D%22%231FAC06%22%20transform%3D%22matrix%28-1%200%200%201%208%20-4%29%22%20xlink%3Ahref%3D%22%23a%22%20fill-rule%3D%22evenodd%22/%3E%0A%3C/svg%3E);\n  background-repeat: no-repeat;\n  background-position: center left;\n  font: 600 12px/20px 'Montserrat';\n  text-transform: uppercase;\n  padding: 4px 8px 4px 12px;\n  display: block;\n  text-decoration: none;\n"])));
var InfoSpan = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &::before {\n    content: '|';\n    display: inline-block;\n    opacity: 0.5;\n    width: ", "px;\n    text-align: center;\n  }\n\n  &:last-child::after {\n    display: none;\n  }\n"], ["\n  &::before {\n    content: '|';\n    display: inline-block;\n    opacity: 0.5;\n    width: ", "px;\n    text-align: center;\n  }\n\n  &:last-child::after {\n    display: none;\n  }\n"])), delimiterWidth);
var InfoSpanBoxWrap = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
var InfoSpanBox = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888\n  margin-left: -", "px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888\n  margin-left: -", "px;\n"])), delimiterWidth);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/ApiInfo/styled.elements.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/ApiInfo/styled.elements.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ContentItems/ContentItems.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentItems; });
/* unused harmony export ContentItem */
/* unused harmony export TagItem */
/* unused harmony export OperationItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_MenuStore__ = __webpack_require__("./src/services/MenuStore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Markdown_Markdown__ = __webpack_require__("./src/components/Markdown/Markdown.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Operation_Operation__ = __webpack_require__("./src/components/Operation/Operation.tsx");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContentItems = /** @class */ (function (_super) {
    __extends(ContentItems, _super);
    function ContentItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentItems.prototype.render = function () {
        var items = this.props.items;
        if (items.length === 0) {
            return null;
        }
        return items.map(function (item) { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ContentItem, { item: item, key: item.id }); });
    };
    ContentItems = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], ContentItems);
    return ContentItems;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var ContentItem = /** @class */ (function (_super) {
    __extends(ContentItem, _super);
    function ContentItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentItem.prototype.render = function () {
        var item = this.props.item;
        var content;
        var type = item.type;
        switch (type) {
            case 'group':
                content = null;
                break;
            case 'tag':
                content = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](TagItem, { item: item });
                break;
            case 'section':
                return null;
            case 'operation':
                content = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](OperationItem, { item: item });
                break;
            default:
                throw new Error('Unknown item type');
        }
        return [
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __assign({ key: "section" }, (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_2__services_MenuStore__["b" /* SECTION_ATTR */]] = item.id, _a)), content),
            item.items && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ContentItems, { key: "content", items: item.items }),
        ];
        var _a;
    };
    ContentItem = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], ContentItem);
    return ContentItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var TagItem = /** @class */ (function (_super) {
    __extends(TagItem, _super);
    function TagItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TagItem.prototype.render = function () {
        var _a = this.props.item, name = _a.name, description = _a.description;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["j" /* Row */], null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["i" /* MiddlePanel */], { key: "middle" },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["f" /* H1 */], null,
                    name,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["m" /* ShareLink */], { href: '#' + this.props.item.getHash() })),
                description !== undefined && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Markdown_Markdown__["a" /* Markdown */], { source: description })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["e" /* EmptyDarkRightPanel */], { key: "right" })));
    };
    TagItem = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], TagItem);
    return TagItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var OperationItem = /** @class */ (function (_super) {
    __extends(OperationItem, _super);
    function OperationItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationItem.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Operation_Operation__["a" /* Operation */], { operation: this.props.item });
    };
    OperationItem = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], OperationItem);
    return OperationItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/ContentItems/ContentItems.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/ContentItems/ContentItems.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/DropdownOrLabel/DropdownOrLabel.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = DropdownOrLabel;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements_dropdown__ = __webpack_require__("./src/common-elements/dropdown.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function DropdownOrLabel(props) {
    var _a = props.Label, Label = _a === void 0 ? __WEBPACK_IMPORTED_MODULE_1__common_elements_dropdown__["a" /* MimeLabel */] : _a, _b = props.Dropdown, Dropdown = _b === void 0 ? __WEBPACK_IMPORTED_MODULE_1__common_elements_dropdown__["b" /* SimpleDropdown */] : _b;
    if (props.options.length === 1) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, null, props.options[0].label);
    }
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Dropdown, __assign({}, props));
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/DropdownOrLabel/DropdownOrLabel.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/DropdownOrLabel/DropdownOrLabel.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Endpoint/Endpoint.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Endpoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OptionsProvider__ = __webpack_require__("./src/components/OptionsProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectOnClick_SelectOnClick__ = __webpack_require__("./src/components/SelectOnClick/SelectOnClick.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styled_elements__ = __webpack_require__("./src/components/Endpoint/styled.elements.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    function Endpoint(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () {
            _this.setState({ expanded: !_this.state.expanded });
        };
        _this.state = {
            expanded: false,
        };
        return _this;
    }
    Endpoint.prototype.render = function () {
        var _a = this.props, operation = _a.operation, inverted = _a.inverted;
        var expanded = this.state.expanded;
        var hideHostname = this.props.hideHostname || this.options.hideHostname;
        // TODO: highlight server variables, e.g. https://{user}.test.com
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styled_elements__["c" /* OperationEndpointWrap */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styled_elements__["a" /* EndpointInfo */], { onClick: this.toggle, expanded: expanded, inverted: inverted },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styled_elements__["b" /* HttpVerb */], { type: operation.httpVerb },
                    " ",
                    operation.httpVerb),
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styled_elements__["e" /* ServerRelativeURL */], null, operation.path),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements__["n" /* ShelfIcon */], { float: 'right', color: inverted ? 'black' : 'white', size: '20px', direction: expanded ? 'up' : 'down', style: { marginRight: '-25px' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styled_elements__["g" /* ServersOverlay */], { expanded: expanded }, operation.servers.map(function (server) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styled_elements__["d" /* ServerItem */], { key: server.url },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, server.description),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__SelectOnClick_SelectOnClick__["a" /* SelectOnClick */], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styled_elements__["f" /* ServerUrl */], null,
                        !hideHostname && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, server.url),
                        operation.path)))); }))));
    };
    return Endpoint;
}(__WEBPACK_IMPORTED_MODULE_2__OptionsProvider__["a" /* ComponentWithOptions */]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Endpoint/Endpoint.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Endpoint/Endpoint.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Endpoint/styled.elements.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OperationEndpointWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ServerRelativeURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndpointInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpVerb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ServersOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ServerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ServerUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var OperationEndpointWrap = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 5px;\n"], ["\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 5px;\n"])));
var ServerRelativeURL = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: ", ";\n  margin-left: 10px;\n"], ["\n  font-family: ", ";\n  margin-left: 10px;\n"])), function (props) { return props.theme.headingsFont.family; });
var EndpointInfo = Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 10px 30px 10px ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  display: block;\n  font-weight: 300;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  border: ", ";\n  border-bottom: ", ";\n  transition: border-color 0.25s ease;\n\n  ", "\n\n  .", " {\n    color: ", "\n  }\n"], ["\n  padding: 10px 30px 10px ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  display: block;\n  font-weight: 300;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  border: ", ";\n  border-bottom: ", ";\n  transition: border-color 0.25s ease;\n\n  ", "\n\n  .", " {\n    color: ", "\n  }\n"])), function (props) { return (props.inverted ? '10px' : '20px'); }, function (props) { return (props.inverted ? '0' : '4px 4px 0 0'); }, function (props) { return (props.inverted ? 'transparent' : '#222d32'); }, function (props) { return (props.inverted ? '0' : '1px solid transparent'); }, function (props) { return (props.inverted ? '1px solid #ccc' : '0'); }, function (props) { return (props.expanded && !props.inverted && 'border-color: #3c4448;') || ''; }, ServerRelativeURL, function (props) { return (props.inverted ? props.theme.colors.text : '#ffffff'); });
var HttpVerb = Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].span).attrs({
    className: function (props) { return "http-verb " + props.type; },
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 0.929em;\n  line-height: 20px;\n  background-color: ", ";\n  color: #ffffff;\n  padding: 3px 10px;\n  text-transform: uppercase;\n  font-family: ", ";\n  margin: 0;\n"], ["\n  font-size: 0.929em;\n  line-height: 20px;\n  background-color: ", ";\n  color: #ffffff;\n  padding: 3px 10px;\n  text-transform: uppercase;\n  font-family: ", ";\n  margin: 0;\n"])), function (props) { return props.theme.colors.http[props.type] || '#999999'; }, function (props) { return props.theme.headingsFont.family; });
// background: transparent;
// border-bottom: 1px solid #cccccc;
// border-color: transparent;
// border-bottom: 1px solid rgba(0,0,0,0.33);
// padding-left: 10px;
var ServersOverlay = Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  background: #fafafa;\n  color: #263238;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);\n  overflow: hidden;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: all 0.25s ease;\n\n  ", "\n"], ["\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  background: #fafafa;\n  color: #263238;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);\n  overflow: hidden;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: all 0.25s ease;\n\n  ", "\n"])), function (props) { return (props.expanded ? '' : 'transform: translateY(-50%) scaleY(0);'); });
var ServerItem = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 10px;\n"], ["\n  padding: 10px;\n"])));
var ServerUrl = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 5px;\n  border: 1px solid #ccc;\n  background: #fff;\n  word-break: break-all;\n  color: ", ";\n  > span {\n    color: ", ";\n  }\n"], ["\n  padding: 5px;\n  border: 1px solid #ccc;\n  background: #fff;\n  word-break: break-all;\n  color: ", ";\n  > span {\n    color: ", ";\n  }\n"])), function (props) { return props.theme.colors.main; }, function (props) { return props.theme.colors.text; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Endpoint/styled.elements.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Endpoint/styled.elements.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ErrorBoundary.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorBoundary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ErrorWrapper = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  color: red;\n"], ["\n  padding: 20px;\n  color: red;\n"])));
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { error: undefined };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error) {
        this.setState({ error: error });
        return false;
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.error) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ErrorWrapper, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Something went wrong..."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null,
                    " ",
                    this.state.error.message,
                    " "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("details", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("summary", null, "Stack trace"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("pre", null, this.state.error.stack))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null,
                    " ReDoc Version: ",
                    "2.0.0-alpha.12"),
                " ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null,
                    " Commit: ",
                    "56cd936")));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };
    return ErrorBoundary;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/ErrorBoundary.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/ErrorBoundary.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Fields/EnumValues.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumValues; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements_fields__ = __webpack_require__("./src/common-elements/fields.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EnumValues = /** @class */ (function (_super) {
    __extends(EnumValues, _super);
    function EnumValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumValues.prototype.render = function () {
        var _a = this.props, values = _a.values, type = _a.type;
        if (!values.length) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["d" /* FieldLabel */], null,
                type === 'array' ? 'Items' : '',
                " Enum:"),
            values.map(function (value, idx) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["c" /* ExampleValue */], { key: idx },
                JSON.stringify(value),
                " ")); })));
    };
    return EnumValues;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/EnumValues.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/EnumValues.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Fields/Field.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FieldDetails__ = __webpack_require__("./src/components/Fields/FieldDetails.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements_fields__ = __webpack_require__("./src/common-elements/fields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_elements_fields_layout__ = __webpack_require__("./src/common-elements/fields-layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_elements___ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Schema_Schema__ = __webpack_require__("./src/components/Schema/Schema.tsx");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle = function () {
            _this.props.field.toggle();
        };
        return _this;
    }
    Field.prototype.render = function () {
        var _a = this.props, className = _a.className, field = _a.field, isLast = _a.isLast;
        var name = field.name, expanded = field.expanded, deprecated = field.deprecated, required = field.required;
        var withSubSchema = !field.schema.isPrimitive && !field.schema.isCircular;
        var paramName = withSubSchema ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_fields__["a" /* ClickablePropertyNameCell */], { onClick: this.toggle, className: deprecated ? 'deprecated' : '' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements_fields_layout__["d" /* PropertyBullet */], null),
            name,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements___["n" /* ShelfIcon */], { size: '1.2em', direction: expanded ? 'down' : 'right' }),
            required && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_fields__["h" /* RequiredLabel */], null, " required "))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements_fields_layout__["g" /* PropertyNameCell */], { className: deprecated ? 'deprecated' : undefined },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements_fields_layout__["d" /* PropertyBullet */], null),
            name,
            required && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_fields__["h" /* RequiredLabel */], null, " required ")));
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { className: isLast ? 'last ' + className : className },
                paramName,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements_fields_layout__["f" /* PropertyDetailsCell */], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__FieldDetails__["a" /* FieldDetails */], __assign({}, this.props)))),
            field.expanded &&
                withSubSchema && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { key: field.name + 'inner' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements_fields_layout__["e" /* PropertyCellWithInner */], { colSpan: 2 },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements_fields_layout__["a" /* InnerPropertiesWrap */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Schema_Schema__["a" /* Schema */], { schema: field.schema, skipReadOnly: this.props.skipReadOnly, skipWriteOnly: this.props.skipWriteOnly, showTitle: this.props.showTitle })))))));
    };
    return Field;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/Field.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/Field.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Fields/FieldContstraints.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstraintsView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements_fields__ = __webpack_require__("./src/common-elements/fields.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConstraintsView = /** @class */ (function (_super) {
    __extends(ConstraintsView, _super);
    function ConstraintsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConstraintsView.prototype.render = function () {
        if (this.props.constraints.length === 0) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
            ' ',
            this.props.constraints.map(function (constraint) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["b" /* ConstraintItem */], { key: constraint },
                " ",
                constraint,
                " ")); })));
    };
    return ConstraintsView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/FieldContstraints.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/FieldContstraints.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Fields/FieldDetail.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements_fields__ = __webpack_require__("./src/common-elements/fields.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FieldDetail = /** @class */ (function (_super) {
    __extends(FieldDetail, _super);
    function FieldDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldDetail.prototype.render = function () {
        if (this.props.value === undefined) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["d" /* FieldLabel */], null,
                " ",
                this.props.label,
                " "),
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["c" /* ExampleValue */], null,
                " ",
                JSON.stringify(this.props.value),
                " ")));
    };
    return FieldDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/FieldDetail.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/FieldDetail.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Fields/FieldDetails.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements_fields__ = __webpack_require__("./src/common-elements/fields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Markdown_Markdown__ = __webpack_require__("./src/components/Markdown/Markdown.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EnumValues__ = __webpack_require__("./src/components/Fields/EnumValues.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FieldContstraints__ = __webpack_require__("./src/components/Fields/FieldContstraints.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FieldDetail__ = __webpack_require__("./src/components/Fields/FieldDetail.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_elements___ = __webpack_require__("./src/common-elements/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var FieldDetails = /** @class */ (function (_super) {
    __extends(FieldDetails, _super);
    function FieldDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldDetails.prototype.render = function () {
        var _a = this.props, showExamples = _a.showExamples, field = _a.field, renderDiscriminatorSwitch = _a.renderDiscriminatorSwitch;
        var schema = field.schema, description = field.description, example = field.example, deprecated = field.deprecated;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["k" /* TypePrefix */], null, schema.typePrefix),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["j" /* TypeName */], null, schema.displayType),
                schema.format && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["i" /* TypeFormat */], null,
                    ' <',
                    schema.format,
                    ">")),
                schema.title && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["l" /* TypeTitle */], null,
                    " (",
                    schema.title,
                    ") "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__FieldContstraints__["a" /* ConstraintsView */], { constraints: schema.constraints }),
                schema.nullable && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["e" /* NullableLabel */], null, " Nullable "),
                schema.pattern && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["f" /* PatternLabel */], null, schema.pattern),
                schema.isCircular && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields__["g" /* RecursiveLabel */], null, " Recursive ")),
            deprecated && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__common_elements___["c" /* Badge */], { type: "warning" }, " Deprecated "))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__FieldDetail__["a" /* FieldDetail */], { label: 'Default:', value: schema.default }),
            !renderDiscriminatorSwitch && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__EnumValues__["a" /* EnumValues */], { type: schema.type, values: schema.enum }),
            ' ',
            showExamples && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__FieldDetail__["a" /* FieldDetail */], { label: 'Example:', value: example }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Markdown_Markdown__["a" /* Markdown */], { dense: true, source: description })),
            (renderDiscriminatorSwitch && renderDiscriminatorSwitch(this.props)) || null));
    };
    return FieldDetails;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/FieldDetails.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Fields/FieldDetails.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/JsonViewer/JsonViewer.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_elements_CopyButtonWrapper__ = __webpack_require__("./src/common-elements/CopyButtonWrapper.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_jsonToHtml__ = __webpack_require__("./src/utils/jsonToHtml.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style__ = __webpack_require__("./src/components/JsonViewer/style.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var JsonViewerWrap = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:hover > ", " {\n    opacity: 1;\n  }\n"], ["\n  &:hover > ", " {\n    opacity: 1;\n  }\n"])), __WEBPACK_IMPORTED_MODULE_2__common_elements__["k" /* SampleControls */]);
var Json = /** @class */ (function (_super) {
    __extends(Json, _super);
    function Json() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderInner = function (_a) {
            var renderCopyButton = _a.renderCopyButton;
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](JsonViewerWrap, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: _this.props.className, ref: function (node) { return (_this.node = node); }, dangerouslySetInnerHTML: { __html: Object(__WEBPACK_IMPORTED_MODULE_4__utils_jsonToHtml__["a" /* jsonToHTML */])(_this.props.data) } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements__["k" /* SampleControls */], null, renderCopyButton())));
        };
        _this.expandAll = function () {
            var elements = _this.node.getElementsByClassName('collapsible');
            for (var _i = 0, _a = Array.prototype.slice.call(elements); _i < _a.length; _i++) {
                var collapsed = _a[_i];
                collapsed.parentNode.classList.remove('collapsed');
            }
        };
        _this.collapseAll = function () {
            var elements = _this.node.getElementsByClassName('collapsible');
            for (var _i = 0, _a = Array.prototype.slice.call(elements); _i < _a.length; _i++) {
                var expanded = _a[_i];
                // const collapsed = elements[i];
                if (expanded.parentNode.classList.contains('redoc-json')) {
                    continue;
                }
                expanded.parentNode.classList.add('collapsed');
            }
        };
        _this.clickListener = function (event) {
            var collapsed;
            var target = event.target;
            if (target.className === 'collapser') {
                collapsed = target.parentElement.getElementsByClassName('collapsible')[0];
                if (collapsed.parentElement.classList.contains('collapsed')) {
                    collapsed.parentElement.classList.remove('collapsed');
                }
                else {
                    collapsed.parentElement.classList.add('collapsed');
                }
            }
        };
        return _this;
    }
    Json.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements_CopyButtonWrapper__["a" /* CopyButtonWrapper */], { data: this.props.data }, this.renderInner);
    };
    Json.prototype.componentDidMount = function () {
        this.node.addEventListener('click', this.clickListener);
    };
    Json.prototype.componentWillUnmount = function () {
        this.node.removeEventListener('click', this.clickListener);
    };
    return Json;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
var JsonViewer = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(Json)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), __WEBPACK_IMPORTED_MODULE_5__style__["a" /* jsonStyles */]);
var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/JsonViewer/JsonViewer.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/JsonViewer/JsonViewer.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/JsonViewer/style.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jsonStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var jsonStyles = Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["b" /* css */])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .redoc-json > .collapser {\n    display: none;\n  }\n\n  font-family: ", ";\n  font-size: ", ";\n\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n\n  .type-null {\n    color: gray;\n  }\n\n  .type-boolean {\n    color: firebrick;\n  }\n\n  .type-number {\n    color: #4a8bb3;\n  }\n\n  .type-string {\n    color: #66b16e;\n    & + a {\n      color: #66b16e;\n      text-decoration: underline;\n    }\n  }\n\n  .callback-function {\n    color: gray;\n  }\n\n  .collapser:after {\n    content: '-';\n    cursor: pointer;\n  }\n\n  .collapsed > .collapser:after {\n    content: '+';\n    cursor: pointer;\n  }\n\n  .ellipsis:after {\n    content: ' \u2026 ';\n  }\n\n  .collapsible {\n    margin-left: 2em;\n  }\n\n  .hoverable {\n    padding-top: 1px;\n    padding-bottom: 1px;\n    padding-left: 2px;\n    padding-right: 2px;\n    border-radius: 2px;\n  }\n\n  .hovered {\n    background-color: rgba(235, 238, 249, 1);\n  }\n\n  .collapser {\n    padding-right: 6px;\n    padding-left: 6px;\n  }\n\n  ul {\n    list-style-type: none;\n    padding: 0px;\n    margin: 0px 0px 0px 26px;\n  }\n\n  li {\n    position: relative;\n    display: block;\n  }\n\n  .hoverable {\n    display: inline-block;\n  }\n\n  .selected {\n    outline-style: solid;\n    outline-width: 1px;\n    outline-style: dotted;\n  }\n\n  .collapsed > .collapsible {\n    display: none;\n  }\n\n  .ellipsis {\n    display: none;\n  }\n\n  .collapsed > .ellipsis {\n    display: inherit;\n  }\n\n  .collapser {\n    position: absolute;\n    top: 1px;\n    left: -1.5em;\n    cursor: default;\n    user-select: none;\n    -webkit-user-select: none;\n  }\n"], ["\n  .redoc-json > .collapser {\n    display: none;\n  }\n\n  font-family: ", ";\n  font-size: ", ";\n\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n\n  .type-null {\n    color: gray;\n  }\n\n  .type-boolean {\n    color: firebrick;\n  }\n\n  .type-number {\n    color: #4a8bb3;\n  }\n\n  .type-string {\n    color: #66b16e;\n    & + a {\n      color: #66b16e;\n      text-decoration: underline;\n    }\n  }\n\n  .callback-function {\n    color: gray;\n  }\n\n  .collapser:after {\n    content: '-';\n    cursor: pointer;\n  }\n\n  .collapsed > .collapser:after {\n    content: '+';\n    cursor: pointer;\n  }\n\n  .ellipsis:after {\n    content: ' \u2026 ';\n  }\n\n  .collapsible {\n    margin-left: 2em;\n  }\n\n  .hoverable {\n    padding-top: 1px;\n    padding-bottom: 1px;\n    padding-left: 2px;\n    padding-right: 2px;\n    border-radius: 2px;\n  }\n\n  .hovered {\n    background-color: rgba(235, 238, 249, 1);\n  }\n\n  .collapser {\n    padding-right: 6px;\n    padding-left: 6px;\n  }\n\n  ul {\n    list-style-type: none;\n    padding: 0px;\n    margin: 0px 0px 0px 26px;\n  }\n\n  li {\n    position: relative;\n    display: block;\n  }\n\n  .hoverable {\n    display: inline-block;\n  }\n\n  .selected {\n    outline-style: solid;\n    outline-width: 1px;\n    outline-style: dotted;\n  }\n\n  .collapsed > .collapsible {\n    display: none;\n  }\n\n  .ellipsis {\n    display: none;\n  }\n\n  .collapsed > .ellipsis {\n    display: inherit;\n  }\n\n  .collapser {\n    position: absolute;\n    top: 1px;\n    left: -1.5em;\n    cursor: default;\n    user-select: none;\n    -webkit-user-select: none;\n  }\n"])), function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.code.fontSize; });
var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/JsonViewer/style.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/JsonViewer/style.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Loading/Loading.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Spinner_svg__ = __webpack_require__("./src/components/Loading/Spinner.svg.tsx");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var LoadingMessage = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: helvetica, sans;\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n  margin: 30px 0 20px 0;\n  color: ", ";\n"], ["\n  font-family: helvetica, sans;\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n  margin: 30px 0 20px 0;\n  color: ", ";\n"])), function (props) { return props.color; });
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { textAlign: 'center' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](LoadingMessage, { color: this.props.color }, "Loading ..."),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Spinner_svg__["a" /* Spinner */], { color: this.props.color })));
    };
    return Loading;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));

var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Loading/Loading.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Loading/Loading.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Loading/Spinner.svg.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var _Spinner = function (props) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: props.className, version: "1.1", width: "512", height: "512", viewBox: "0 0 512 512" },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z" }))); };
var rotate = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["e" /* keyframes */])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var Spinner = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(_Spinner)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: 2s ", " linear infinite;\n  width: 50px;\n  height: 50px;\n  content: '';\n  display: inline-block;\n  margin-left: -25px;\n\n  path {\n    fill: ", ";\n  }\n"], ["\n  animation: 2s ", " linear infinite;\n  width: 50px;\n  height: 50px;\n  content: '';\n  display: inline-block;\n  margin-left: -25px;\n\n  path {\n    fill: ", ";\n  }\n"])), rotate, function (props) { return props.color; });
var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Loading/Spinner.svg.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Loading/Spinner.svg.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Markdown/Markdown.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Markdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dompurify__ = __webpack_require__("dompurify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dompurify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dompurify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OptionsProvider__ = __webpack_require__("./src/components/OptionsProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles__ = __webpack_require__("./src/components/Markdown/styles.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var InternalMarkdown = /** @class */ (function (_super) {
    __extends(InternalMarkdown, _super);
    function InternalMarkdown(props) {
        var _this = _super.call(this, props) || this;
        if (props.components && props.inline) {
            throw new Error('Markdown Component: "inline" mode doesn\'t support "components"');
        }
        return _this;
    }
    InternalMarkdown.prototype.render = function () {
        var _a = this.props, source = _a.source, raw = _a.raw, className = _a.className, components = _a.components, inline = _a.inline, dense = _a.dense, store = _a.store;
        if (components && !store) {
            throw new Error('When using components with Markdwon in ReDoc, store prop must be provided');
        }
        var sanitize = this.props.sanitize || this.options.untrustedSpec
            ? function (html) { return __WEBPACK_IMPORTED_MODULE_2_dompurify__["sanitize"](html); }
            : function (html) { return html; };
        var renderer = new __WEBPACK_IMPORTED_MODULE_3__services__["j" /* MarkdownRenderer */]();
        var parts = components
            ? renderer.renderMdWithComponents(source, components, raw)
            : [renderer.renderMd(source, raw)];
        if (!parts.length) {
            return null;
        }
        var appendClass = ' redoc-markdown';
        if (dense) {
            appendClass += ' -dense';
        }
        if (inline) {
            appendClass += ' -inline';
        }
        if (inline) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: className + appendClass, dangerouslySetInnerHTML: { __html: sanitize(parts[0]) } }));
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className + appendClass }, parts.map(function (part, idx) {
            return typeof part === 'string' ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: idx, dangerouslySetInnerHTML: { __html: sanitize(part) } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](part.component, __assign({ key: idx }, __assign({}, part.attrs, part.propsSelector(store)))));
        })));
    };
    return InternalMarkdown;
}(__WEBPACK_IMPORTED_MODULE_4__OptionsProvider__["a" /* ComponentWithOptions */]));
var Markdown = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(InternalMarkdown)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), __WEBPACK_IMPORTED_MODULE_5__styles__["a" /* markdownCss */]);
var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Markdown/Markdown.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Markdown/Markdown.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Markdown/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return markdownCss; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var markdownCss = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["b" /* css */])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  p {\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n\n  &.-dense p {\n    margin: 0;\n  }\n\n  &.-inline p {\n    display: inline-block;\n  }\n\n  h1 {\n    ", ";\n    color: ", ";\n    margin-top: 0;\n  }\n\n  code {\n    color: #5300CC;\n    background-color: rgba(80, 0, 204, 0.05);\n    font-family: ", ";\n    border-radius: 4px;\n    /* border: 1px solid rgba(38, 50, 56, 0.1); */\n    padding: 1px 4px;\n    font-size: ", ";\n  }\n\n  pre {\n    font-family: ", ";\n    white-space: pre-wrap;\n    background-color: #263238;\n    color: white;\n    padding: 12px 14px 15px 14px;\n    overflow-x: auto;\n    line-height: normal;\n    border-radius: 0px\n    border: 1px solid rgba(38, 50, 56, 0.1);\n\n    code {\n      background-color: transparent;\n      color: white;\n\n      &:before,\n      &:after {\n        content: none;\n      }\n    }\n  }\n\n  blockquote {\n    margin: 0;\n    margin-bottom: 1em;\n    padding: 0 15px;\n    color: #777;\n    border-left: 4px solid #ddd;\n  }\n\n  img {\n    max-width: 100%;\n    box-sizing: content-box;\n  }\n\n  ul,\n  ol {\n    padding-left: 2em;\n    margin: 0;\n    margin-bottom: 1em;\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    > li {\n      margin: 1em 0;\n    }\n  }\n\n  table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border-collapse: collapse;\n    border-spacing: 0;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n  }\n\n  table tr {\n    background-color: #fff;\n    border-top: 1px solid #ccc;\n\n    &:nth-child(2n) {\n      background-color: #f8f8f8;\n    }\n  }\n\n  table th,\n  table td {\n    padding: 6px 13px;\n    border: 1px solid #ddd;\n  }\n\n  table th {\n    text-align: left;\n    font-weight: bold;\n  }\n\n  ", ";\n"], ["\n  p {\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n\n  &.-dense p {\n    margin: 0;\n  }\n\n  &.-inline p {\n    display: inline-block;\n  }\n\n  h1 {\n    ", ";\n    color: ", ";\n    margin-top: 0;\n  }\n\n  code {\n    color: #5300CC;\n    background-color: rgba(80, 0, 204, 0.05);\n    font-family: ", ";\n    border-radius: 4px;\n    /* border: 1px solid rgba(38, 50, 56, 0.1); */\n    padding: 1px 4px;\n    font-size: ", ";\n  }\n\n  pre {\n    font-family: ", ";\n    white-space: pre-wrap;\n    background-color: #263238;\n    color: white;\n    padding: 12px 14px 15px 14px;\n    overflow-x: auto;\n    line-height: normal;\n    border-radius: 0px\n    border: 1px solid rgba(38, 50, 56, 0.1);\n\n    code {\n      background-color: transparent;\n      color: white;\n\n      &:before,\n      &:after {\n        content: none;\n      }\n    }\n  }\n\n  blockquote {\n    margin: 0;\n    margin-bottom: 1em;\n    padding: 0 15px;\n    color: #777;\n    border-left: 4px solid #ddd;\n  }\n\n  img {\n    max-width: 100%;\n    box-sizing: content-box;\n  }\n\n  ul,\n  ol {\n    padding-left: 2em;\n    margin: 0;\n    margin-bottom: 1em;\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    > li {\n      margin: 1em 0;\n    }\n  }\n\n  table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border-collapse: collapse;\n    border-spacing: 0;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n  }\n\n  table tr {\n    background-color: #fff;\n    border-top: 1px solid #ccc;\n\n    &:nth-child(2n) {\n      background-color: #f8f8f8;\n    }\n  }\n\n  table th,\n  table td {\n    padding: 6px 13px;\n    border: 1px solid #ddd;\n  }\n\n  table th {\n    text-align: left;\n    font-weight: bold;\n  }\n\n  ", ";\n"])), Object(__WEBPACK_IMPORTED_MODULE_0__common_elements__["v" /* headerCommonMixin */])(1), function (props) { return props.theme.colors.main; }, function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.code.fontSize; }, function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.baseFont.family; }, function (props) { return props.theme.baseFont.weight; }, function (props) { return props.theme.baseFont.lineHeight; }, Object(__WEBPACK_IMPORTED_MODULE_0__common_elements__["w" /* linkifyMixin */])('.share-link'));
var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Markdown/styles.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Markdown/styles.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/MediaTypeSwitch/MediaTypesSwitch.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaTypesSwitch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MediaTypesSwitch = /** @class */ (function (_super) {
    __extends(MediaTypesSwitch, _super);
    function MediaTypesSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.switchMedia = function (_a) {
            var value = _a.value;
            if (_this.props.content) {
                _this.props.content.activate(parseInt(value, 10));
            }
        };
        return _this;
    }
    MediaTypesSwitch.prototype.render = function () {
        var content = this.props.content;
        if (!content || !content.mediaTypes || !content.mediaTypes.length) {
            return null;
        }
        var activeMimeIdx = content.activeMimeIdx;
        var options = content.mediaTypes.map(function (mime, idx) {
            return {
                label: mime.name,
                value: idx.toString(),
            };
        });
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            this.props.renderDropdown({
                value: options[activeMimeIdx],
                options: options,
                onChange: this.switchMedia,
            }),
            this.props.children(content.active)));
    };
    MediaTypesSwitch = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], MediaTypesSwitch);
    return MediaTypesSwitch;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/MediaTypeSwitch/MediaTypesSwitch.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/MediaTypeSwitch/MediaTypesSwitch.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Operation/Operation.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Operation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SecurityRequirement_SecuirityRequirement__ = __webpack_require__("./src/components/SecurityRequirement/SecuirityRequirement.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__OptionsProvider__ = __webpack_require__("./src/components/OptionsProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_elements_linkify__ = __webpack_require__("./src/common-elements/linkify.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Endpoint_Endpoint__ = __webpack_require__("./src/components/Endpoint/Endpoint.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Markdown_Markdown__ = __webpack_require__("./src/components/Markdown/Markdown.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Parameters_Parameters__ = __webpack_require__("./src/components/Parameters/Parameters.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__RequestSamples_RequestSamples__ = __webpack_require__("./src/components/RequestSamples/RequestSamples.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Responses_ResponsesList__ = __webpack_require__("./src/components/Responses/ResponsesList.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ResponseSamples_ResponseSamples__ = __webpack_require__("./src/components/ResponseSamples/ResponseSamples.tsx");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var OperationRow = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(__WEBPACK_IMPORTED_MODULE_4__common_elements__["j" /* Row */])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  backface-visibility: hidden;\n  contain: content;\n  overflow: hidden;\n  position: relative;\n"], ["\n  backface-visibility: hidden;\n  contain: content;\n  overflow: hidden;\n  position: relative;\n"])));
var Header = __WEBPACK_IMPORTED_MODULE_4__common_elements__["g" /* H2 */].extend(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 20px 0;\n"], ["\n  margin: 20px 0;\n"])));
var Operation = /** @class */ (function (_super) {
    __extends(Operation, _super);
    function Operation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Operation.prototype.render = function () {
        var operation = this.props.operation;
        var summary = operation.name, description = operation.description, deprecated = operation.deprecated;
        var pathInMiddle = this.options.pathInMiddlePanel;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](OperationRow, null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["i" /* MiddlePanel */], { className: "middlePanel" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Header, null,
                    summary,
                    " ",
                    deprecated && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["c" /* Badge */], { type: "warning" }, " Deprecated "),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__common_elements_linkify__["a" /* ShareLink */], { href: '#' + operation.getHash() })),
                pathInMiddle && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__Endpoint_Endpoint__["a" /* Endpoint */], { operation: operation, inverted: true }),
                description !== undefined && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__Markdown_Markdown__["a" /* Markdown */], { source: description }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__SecurityRequirement_SecuirityRequirement__["a" /* SecurityRequirements */], { securities: operation.security }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__Parameters_Parameters__["a" /* Parameters */], { parameters: operation.parameters, body: operation.requestBody }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__Responses_ResponsesList__["a" /* ResponsesList */], { responses: operation.responses })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["d" /* DarkRightPanel */], { className: "rightPanel" },
                !pathInMiddle && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__Endpoint_Endpoint__["a" /* Endpoint */], { operation: operation }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10__RequestSamples_RequestSamples__["a" /* RequestSamples */], { operation: operation }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12__ResponseSamples_ResponseSamples__["a" /* ResponseSamples */], { operation: operation }))));
    };
    Operation = __decorate([
        __WEBPACK_IMPORTED_MODULE_3_mobx_react__["observer"]
    ], Operation);
    return Operation;
}(__WEBPACK_IMPORTED_MODULE_5__OptionsProvider__["a" /* ComponentWithOptions */]));

var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Operation/Operation.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Operation/Operation.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/OptionsProvider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OptionsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentWithOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var OptionsProvider = /** @class */ (function (_super) {
    __extends(OptionsProvider, _super);
    function OptionsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionsProvider.prototype.getChildContext = function () {
        return {
            redocOptions: this.props.options,
        };
    };
    OptionsProvider.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["Children"].only(this.props.children);
    };
    OptionsProvider.childContextTypes = {
        redocOptions: __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"].isRequired,
    };
    return OptionsProvider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var ComponentWithOptions = /** @class */ (function (_super) {
    __extends(ComponentWithOptions, _super);
    function ComponentWithOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ComponentWithOptions.prototype, "options", {
        get: function () {
            return this.context.redocOptions || {};
        },
        enumerable: true,
        configurable: true
    });
    ComponentWithOptions.contextTypes = {
        redocOptions: __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
    };
    return ComponentWithOptions;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/OptionsProvider.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/OptionsProvider.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Parameters/Parameters.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parameters; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DropdownOrLabel_DropdownOrLabel__ = __webpack_require__("./src/components/DropdownOrLabel/DropdownOrLabel.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ParametersGroup__ = __webpack_require__("./src/components/Parameters/ParametersGroup.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MediaTypeSwitch_MediaTypesSwitch__ = __webpack_require__("./src/components/MediaTypeSwitch/MediaTypesSwitch.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Schema__ = __webpack_require__("./src/components/Schema/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






function safePush(obj, prop, item) {
    if (!obj[prop]) {
        obj[prop] = [];
    }
    obj[prop].push(item);
}
var PARAM_PLACES = ['path', 'query', 'cookie', 'header'];
var Parameters = /** @class */ (function (_super) {
    __extends(Parameters, _super);
    function Parameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parameters.prototype.orderParams = function (params) {
        var res = {};
        params.forEach(function (param) {
            safePush(res, param.in, param);
        });
        return res;
    };
    Parameters.prototype.render = function () {
        var _a = this.props, body = _a.body, _b = _a.parameters, parameters = _b === void 0 ? [] : _b;
        if (body === undefined && parameters === undefined) {
            return null;
        }
        var paramsMap = this.orderParams(parameters);
        var paramsPlaces = parameters.length > 0 ? PARAM_PLACES : [];
        var bodyContent = body && body.content;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            paramsPlaces.map(function (place) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__ParametersGroup__["a" /* ParametersGroup */], { key: place, place: place, parameters: paramsMap[place] })); }),
            bodyContent && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](BodyContent, { content: bodyContent })));
    };
    return Parameters;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));

function DropdownWithinHeader(props) {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements__["h" /* H5 */], { key: "header" },
        "Request Body schema: ",
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__DropdownOrLabel_DropdownOrLabel__["a" /* DropdownOrLabel */], __assign({}, props))));
}
function BodyContent(props) {
    var content = props.content;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__MediaTypeSwitch_MediaTypesSwitch__["a" /* MediaTypesSwitch */], { content: content, renderDropdown: DropdownWithinHeader }, function (_a) {
        var schema = _a.schema;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Schema__["a" /* Schema */], { skipReadOnly: true, key: "schema", schema: schema });
    }));
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Parameters/Parameters.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Parameters/Parameters.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Parameters/ParametersGroup.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements_fields_layout__ = __webpack_require__("./src/common-elements/fields-layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fields_Field__ = __webpack_require__("./src/components/Fields/Field.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__("./src/utils/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ParametersGroup = /** @class */ (function (_super) {
    __extends(ParametersGroup, _super);
    function ParametersGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParametersGroup.prototype.render = function () {
        var _a = this.props, place = _a.place, parameters = _a.parameters;
        if (!parameters || !parameters.length) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: place },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements__["h" /* H5 */], null,
                place,
                " Parameters"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_fields_layout__["b" /* PropertiesTable */], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, Object(__WEBPACK_IMPORTED_MODULE_4__utils__["A" /* mapWithLast */])(parameters, function (field, isLast) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Fields_Field__["a" /* Field */], { key: field.name, isLast: isLast, field: field, showExamples: true })); })))));
    };
    return ParametersGroup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Parameters/ParametersGroup.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Parameters/ParametersGroup.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/PayloadSamples/MediaTypeSamples.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaTypeSamples; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__JsonViewer_JsonViewer__ = __webpack_require__("./src/components/JsonViewer/JsonViewer.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SourceCode_SourceCode__ = __webpack_require__("./src/components/SourceCode/SourceCode.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styled_elements__ = __webpack_require__("./src/components/PayloadSamples/styled.elements.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("./src/utils/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var MediaTypeSamples = /** @class */ (function (_super) {
    __extends(MediaTypeSamples, _super);
    function MediaTypeSamples() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaTypeSamples.prototype.render = function () {
        var examples = this.props.mediaType.examples || {};
        var mimeType = this.props.mediaType.name;
        var noSample = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styled_elements__["c" /* NoSampleLabel */], null, "No sample");
        var sampleView = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["r" /* isJsonLike */])(mimeType)
            ? function (sample) { return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__JsonViewer_JsonViewer__["a" /* JsonViewer */], { data: sample }); }
            : function (sample) {
                return (sample && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__SourceCode_SourceCode__["a" /* SourceCodeWithCopy */], { lang: Object(__WEBPACK_IMPORTED_MODULE_5__utils__["w" /* langFromMime */])(mimeType), source: sample })) || {
                    noSample: noSample,
                };
            };
        var examplesNames = Object.keys(examples);
        if (examplesNames.length === 0) {
            return noSample;
        }
        if (examplesNames.length > 1) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements__["p" /* SmallTabs */], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements__["r" /* TabList */], null, examplesNames.map(function (name) { return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements__["q" /* Tab */], { key: name },
                    " ",
                    examples[name].summary || name,
                    " "); })),
                examplesNames.map(function (name) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements__["s" /* TabPanel */], { key: name }, sampleView(examples[name].value))); })));
        }
        else {
            var name_1 = examplesNames[0];
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, sampleView(examples[name_1].value));
        }
    };
    return MediaTypeSamples;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/PayloadSamples/MediaTypeSamples.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/PayloadSamples/MediaTypeSamples.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/PayloadSamples/PayloadSamples.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayloadSamples; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MediaTypeSamples__ = __webpack_require__("./src/components/PayloadSamples/MediaTypeSamples.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MediaTypeSwitch_MediaTypesSwitch__ = __webpack_require__("./src/components/MediaTypeSwitch/MediaTypesSwitch.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DropdownOrLabel_DropdownOrLabel__ = __webpack_require__("./src/components/DropdownOrLabel/DropdownOrLabel.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styled_elements__ = __webpack_require__("./src/components/PayloadSamples/styled.elements.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PayloadSamples = /** @class */ (function (_super) {
    __extends(PayloadSamples, _super);
    function PayloadSamples() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderDropdown = function (props) {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__DropdownOrLabel_DropdownOrLabel__["a" /* DropdownOrLabel */], __assign({ Label: __WEBPACK_IMPORTED_MODULE_5__styled_elements__["b" /* MimeLabel */], Dropdown: __WEBPACK_IMPORTED_MODULE_5__styled_elements__["a" /* InvertedSimpleDropdown */] }, props));
        };
        return _this;
    }
    PayloadSamples.prototype.render = function () {
        var mimeContent = this.props.content;
        if (mimeContent === undefined) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__MediaTypeSwitch_MediaTypesSwitch__["a" /* MediaTypesSwitch */], { content: mimeContent, renderDropdown: this.renderDropdown }, function (mediaType) { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__MediaTypeSamples__["a" /* MediaTypeSamples */], { key: "samples", mediaType: mediaType }); }));
    };
    PayloadSamples = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], PayloadSamples);
    return PayloadSamples;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/PayloadSamples/PayloadSamples.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/PayloadSamples/PayloadSamples.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/PayloadSamples/styled.elements.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MimeLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvertedSimpleDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NoSampleLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var MimeLabel = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 12px;\n  margin: 0 0 10px 0;\n  display: block;\n  color: #747d82;\n"], ["\n  font-family: ", ";\n  font-size: 12px;\n  margin: 0 0 10px 0;\n  display: block;\n  color: #747d82;\n"])), function (props) { return props.theme.code.fontFamily; });
var InvertedSimpleDropdown = Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */])(__WEBPACK_IMPORTED_MODULE_1__common_elements__["o" /* SimpleDropdown */])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-bottom: 1px solid rgba(255, 255, 255, 0.9);\n  margin: 0 0 10px 0;\n  display: block;\n\n  .Dropdown-control,\n  .Dropdown-control:hover {\n    color: rgba(255, 255, 255, 0.9);\n\n    .Dropdown-arrow {\n      border-top-color: rgba(255, 255, 255, 0.9);\n    }\n  }\n  .Dropdown-menu {\n    margin: 0;\n  }\n"], ["\n  border-bottom: 1px solid rgba(255, 255, 255, 0.9);\n  margin: 0 0 10px 0;\n  display: block;\n\n  .Dropdown-control,\n  .Dropdown-control:hover {\n    color: rgba(255, 255, 255, 0.9);\n\n    .Dropdown-arrow {\n      border-top-color: rgba(255, 255, 255, 0.9);\n    }\n  }\n  .Dropdown-menu {\n    margin: 0;\n  }\n"])));
var NoSampleLabel = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 12px;\n  color: #ee807f;\n"], ["\n  font-family: ", ";\n  font-size: 12px;\n  color: #ee807f;\n"])), function (props) { return props.theme.code.fontFamily; });
var templateObject_1, templateObject_2, templateObject_3;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/PayloadSamples/styled.elements.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/PayloadSamples/styled.elements.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Redoc/Redoc.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Redoc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ApiInfo_ApiInfo__ = __webpack_require__("./src/components/ApiInfo/ApiInfo.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContentItems_ContentItems__ = __webpack_require__("./src/components/ContentItems/ContentItems.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OptionsProvider__ = __webpack_require__("./src/components/OptionsProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SideMenu_SideMenu__ = __webpack_require__("./src/components/SideMenu/SideMenu.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__StickySidebar_StickyResponsiveSidebar__ = __webpack_require__("./src/components/StickySidebar/StickyResponsiveSidebar.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__elements__ = __webpack_require__("./src/components/Redoc/elements.tsx");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var Redoc = /** @class */ (function (_super) {
    __extends(Redoc, _super);
    function Redoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Redoc.prototype.componentDidMount = function () {
        this.props.store.onDidMount();
    };
    Redoc.prototype.componentWillUnmount = function () {
        this.props.store.dispose();
    };
    Redoc.prototype.render = function () {
        // const { store: { spec, menu, options, search, marker } } = this.props;
        var _a = this.props.store, menu = _a.menu, options = _a.options;
        var store = this.props.store;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__styled_components__["a" /* ThemeProvider */], { theme: options.theme },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__OptionsProvider__["b" /* OptionsProvider */], { options: options },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__elements__["c" /* RedocWrap */], { className: "redoc-wrap" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__StickySidebar_StickyResponsiveSidebar__["a" /* StickyResponsiveSidebar */], { menu: menu, className: "menu-content" },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__SideMenu_SideMenu__["a" /* SideMenu */], { menu: menu })),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__elements__["a" /* ApiContent */], { className: "api-content" },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__ApiInfo_ApiInfo__["a" /* ApiInfo */], { store: store }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__ContentItems_ContentItems__["a" /* ContentItems */], { items: menu.items })),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__elements__["b" /* BackgroundStub */], null)))));
    };
    Redoc.propTypes = {
        store: __WEBPACK_IMPORTED_MODULE_0_prop_types__["instanceOf"](__WEBPACK_IMPORTED_MODULE_3__services__["b" /* AppStore */]).isRequired,
    };
    return Redoc;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Redoc/Redoc.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Redoc/Redoc.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Redoc/elements.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RedocWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BackgroundStub; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_elements_mixins__ = __webpack_require__("./src/common-elements/mixins.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var RedocWrap = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";\n  display: flex;\n  position: relative;\n  text-align: left;\n\n  -webkit-font-smoothing: ", ";\n  font-smoothing: ", ";\n  ", ";\n\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  text-size-adjust: 100%;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .redoc-markdown h1 {\n    padding-top: ", "px;\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n    ", ";\n  }\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";\n  display: flex;\n  position: relative;\n  text-align: left;\n\n  -webkit-font-smoothing: ", ";\n  font-smoothing: ", ";\n  ",
    ";\n\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  text-size-adjust: 100%;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .redoc-markdown h1 {\n    padding-top: ", "px;\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n    ", ";\n  }\n"])), function (props) { return props.theme.baseFont.family; }, function (props) { return props.theme.baseFont.size; }, function (props) { return props.theme.baseFont.lineHeight; }, function (props) { return props.theme.colors.text; }, function (props) { return props.theme.baseFont.smoothing; }, function (props) { return props.theme.baseFont.smoothing; }, function (props) {
    return (props.theme.baseFont.optimizeSpeed && 'text-rendering: optimizeSpeed !important') || '';
}, function (props) { return props.theme.spacingUnit * 2; }, function (props) { return props.theme.links.color || props.theme.colors.main; }, function (props) { return Object(__WEBPACK_IMPORTED_MODULE_0__common_elements_mixins__["b" /* hoverColor */])(props.theme.links.hover); });
var ApiContent = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n  width: calc(100% - ", "px);\n  ", ";\n  contain: layout;\n"], ["\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n  width: calc(100% - ", "px);\n  ",
    ";\n  contain: layout;\n"])), function (props) { return props.theme.menu.width; }, __WEBPACK_IMPORTED_MODULE_1__styled_components__["f" /* media */].lessThan('small')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 100%;\n  "], ["\n    width: 100%;\n  "]))));
var BackgroundStub = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: ", ";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: calc((100% - ", ") * 0.4);\n  ", ";\n"], ["\n  background: ", ";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: calc((100% - ", ") * 0.4);\n  ",
    ";\n"])), function (props) { return props.theme.rightPanel.backgroundColor; }, function (props) { return props.theme.menu.width; }, __WEBPACK_IMPORTED_MODULE_1__styled_components__["f" /* media */].lessThan('medium')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: none;\n  "], ["\n    display: none;\n  "]))));
var templateObject_1, templateObject_3, templateObject_2, templateObject_5, templateObject_4;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Redoc/elements.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Redoc/elements.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/RedocStandalone.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedocStandalone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_RedocNormalizedOptions__ = __webpack_require__("./src/services/RedocNormalizedOptions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorBoundary__ = __webpack_require__("./src/components/ErrorBoundary.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Loading_Loading__ = __webpack_require__("./src/components/Loading/Loading.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Redoc_Redoc__ = __webpack_require__("./src/components/Redoc/Redoc.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StoreProvider__ = __webpack_require__("./src/components/StoreProvider.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var RedocStandalone = /** @class */ (function (_super) {
    __extends(RedocStandalone, _super);
    function RedocStandalone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedocStandalone.prototype.render = function () {
        var _a = this.props, spec = _a.spec, specUrl = _a.specUrl, _b = _a.options, options = _b === void 0 ? {} : _b;
        var hideLoading = options.hideLoading !== undefined;
        var normalizedOpts = new __WEBPACK_IMPORTED_MODULE_2__services_RedocNormalizedOptions__["a" /* RedocNormalizedOptions */](options);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__ErrorBoundary__["a" /* ErrorBoundary */], null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__StoreProvider__["a" /* StoreProvider */], { spec: spec, specUrl: specUrl, options: options }, function (_a) {
                var loading = _a.loading, store = _a.store;
                return !loading ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Redoc_Redoc__["a" /* Redoc */], { store: store })) : hideLoading ? null : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Loading_Loading__["a" /* Loading */], { color: normalizedOpts.theme.colors.main }));
            })));
    };
    RedocStandalone.propTypes = {
        spec: function (props, _, componentName) {
            if (!props.spec && !props.specUrl) {
                return new Error("One of props 'spec' or 'specUrl' was not specified in '" + componentName + "'.");
            }
            return null;
        },
        specUrl: function (props, _, componentName) {
            if (!props.spec && !props.specUrl) {
                return new Error("One of props 'spec' or 'specUrl' was not specified in '" + componentName + "'.");
            }
            return null;
        },
        options: __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
    };
    return RedocStandalone;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/RedocStandalone.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/RedocStandalone.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/RequestSamples/RequestSamples.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestSamples; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PayloadSamples_PayloadSamples__ = __webpack_require__("./src/components/PayloadSamples/PayloadSamples.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SourceCode_SourceCode__ = __webpack_require__("./src/components/SourceCode/SourceCode.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RequestHeader = __WEBPACK_IMPORTED_MODULE_4__common_elements__["h" /* H5 */].extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  padding: 10px 0;\n"], ["\n  color: #fff;\n  padding: 10px 0;\n"])));
var RequestSamples = /** @class */ (function (_super) {
    __extends(RequestSamples, _super);
    function RequestSamples() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visited = new Set();
        return _this;
    }
    RequestSamples.prototype.render = function () {
        var operation = this.props.operation;
        var requestBodyContent = operation.requestBody && operation.requestBody.content;
        var hasBodySample = requestBodyContent && requestBodyContent.hasSample;
        var samples = operation.codeSamples;
        var hasSamples = hasBodySample || samples.length > 0;
        return ((hasSamples && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](RequestHeader, null, " Request samples "),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["t" /* Tabs */], { defaultIndex: 0 },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["r" /* TabList */], null,
                    hasBodySample && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["q" /* Tab */], { key: "payload" }, " Payload "),
                    samples.map(function (sample) { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["q" /* Tab */], { key: sample.lang }, sample.lang); })),
                hasBodySample && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["s" /* TabPanel */], { key: "payload" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__PayloadSamples_PayloadSamples__["a" /* PayloadSamples */], { content: requestBodyContent }))),
                samples.map(function (sample) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements__["s" /* TabPanel */], { key: sample.lang },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__SourceCode_SourceCode__["a" /* SourceCodeWithCopy */], { lang: sample.lang, source: sample.source }))); }))))) ||
            null);
    };
    RequestSamples = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], RequestSamples);
    return RequestSamples;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/RequestSamples/RequestSamples.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/RequestSamples/RequestSamples.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ResponseSamples/ResponseSamples.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseSamples; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PayloadSamples_PayloadSamples__ = __webpack_require__("./src/components/PayloadSamples/PayloadSamples.tsx");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ResponseSample = /** @class */ (function (_super) {
    __extends(ResponseSample, _super);
    function ResponseSample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponseSample.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__PayloadSamples_PayloadSamples__["a" /* PayloadSamples */], { content: this.props.content });
    };
    return ResponseSample;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));
var ResponseHeader = __WEBPACK_IMPORTED_MODULE_2__common_elements__["h" /* H5 */].extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  padding: 10px 0;\n"], ["\n  color: #fff;\n  padding: 10px 0;\n"])));
var ResponseSamples = /** @class */ (function (_super) {
    __extends(ResponseSamples, _super);
    function ResponseSamples() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visited = new Set();
        return _this;
    }
    ResponseSamples.prototype.render = function () {
        var operation = this.props.operation;
        var responses = operation.responses.filter(function (response) {
            return response.content && response.content.hasSample;
        });
        return ((responses.length > 0 && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ResponseHeader, null, "Response samples"),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements__["t" /* Tabs */], { defaultIndex: 0 },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements__["r" /* TabList */], null, responses.map(function (response) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements__["q" /* Tab */], { className: 'tab-' + response.type, key: response.code }, response.code)); })),
                responses.map(function (response) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements__["s" /* TabPanel */], { key: response.code },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ResponseSample, { content: response.content }))); }))))) ||
            null);
    };
    ResponseSamples = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], ResponseSamples);
    return ResponseSamples;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/ResponseSamples/ResponseSamples.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/ResponseSamples/ResponseSamples.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Responses/Response.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DropdownOrLabel_DropdownOrLabel__ = __webpack_require__("./src/components/DropdownOrLabel/DropdownOrLabel.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MediaTypeSwitch_MediaTypesSwitch__ = __webpack_require__("./src/components/MediaTypeSwitch/MediaTypesSwitch.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Schema__ = __webpack_require__("./src/components/Schema/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ResponseHeaders__ = __webpack_require__("./src/components/Responses/ResponseHeaders.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_elements__ = __webpack_require__("./src/components/Responses/styled.elements.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ResponseView = /** @class */ (function (_super) {
    __extends(ResponseView, _super);
    function ResponseView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle = function () {
            _this.props.response.toggle();
        };
        _this.renderDropdown = function (props) {
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements__["h" /* H5 */], { key: "header" },
                "Response Schema: ",
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__DropdownOrLabel_DropdownOrLabel__["a" /* DropdownOrLabel */], __assign({}, props))));
        };
        return _this;
    }
    ResponseView.prototype.render = function () {
        var _a = this.props.response, headers = _a.headers, type = _a.type, description = _a.description, code = _a.code, expanded = _a.expanded, content = _a.content;
        var mimes = content === undefined ? [] : content.mediaTypes.filter(function (mime) { return mime.schema !== undefined; });
        var empty = headers.length === 0 && mimes.length === 0;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__styled_elements__["c" /* StyledResponseTitle */], { onClick: this.toggle, type: type, empty: empty, title: description || '', code: code, opened: expanded }),
            expanded &&
                !empty && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__styled_elements__["b" /* ResponseDetailsWrap */], null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__ResponseHeaders__["a" /* ResponseHeaders */], { headers: headers }),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__MediaTypeSwitch_MediaTypesSwitch__["a" /* MediaTypesSwitch */], { content: content, renderDropdown: this.renderDropdown }, function (_a) {
                    var schema = _a.schema;
                    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Schema__["a" /* Schema */], { skipWriteOnly: true, key: "schema", schema: schema });
                })))));
    };
    ResponseView = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], ResponseView);
    return ResponseView;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/Response.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/Response.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Responses/ResponseHeaders.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseHeaders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements_fields_layout__ = __webpack_require__("./src/common-elements/fields-layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fields_Field__ = __webpack_require__("./src/components/Fields/Field.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styled_elements__ = __webpack_require__("./src/components/Responses/styled.elements.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ResponseHeaders = /** @class */ (function (_super) {
    __extends(ResponseHeaders, _super);
    function ResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponseHeaders.prototype.render = function () {
        var headers = this.props.headers;
        if (headers === undefined || headers.length === 0) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements_fields_layout__["b" /* PropertiesTable */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styled_elements__["a" /* HeadersCaption */], null, " Response Headers "),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, Object(__WEBPACK_IMPORTED_MODULE_2__utils__["A" /* mapWithLast */])(headers, function (header, isLast) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Fields_Field__["a" /* Field */], { isLast: isLast, key: header.name, field: header })); }))));
    };
    return ResponseHeaders;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/ResponseHeaders.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/ResponseHeaders.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Responses/ResponseTitle.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Markdown_Markdown__ = __webpack_require__("./src/components/Markdown/Markdown.tsx");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ResponseTitle = /** @class */ (function (_super) {
    __extends(ResponseTitle, _super);
    function ResponseTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponseTitle.prototype.render = function () {
        var _a = this.props, title = _a.title, type = _a.type, empty = _a.empty, code = _a.code, opened = _a.opened, className = _a.className, onClick = _a.onClick;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className, onClick: (!empty && onClick) || undefined },
            !empty && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements__["n" /* ShelfIcon */], { size: '1.5em', color: type, direction: opened ? 'up' : 'down', float: 'left' })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null,
                code,
                " "),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Markdown_Markdown__["a" /* Markdown */], { dense: true, inline: true, source: title })));
    };
    return ResponseTitle;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/ResponseTitle.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/ResponseTitle.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Responses/ResponsesList.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Response__ = __webpack_require__("./src/components/Responses/Response.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements_headers__ = __webpack_require__("./src/common-elements/headers.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ResponsesHeader = __WEBPACK_IMPORTED_MODULE_2__common_elements_headers__["c" /* H5 */].extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 15px;\n"], ["\n  margin-bottom: 15px;\n"])));
var ResponsesList = /** @class */ (function (_super) {
    __extends(ResponsesList, _super);
    function ResponsesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponsesList.prototype.render = function () {
        var responses = this.props.responses;
        if (!responses || responses.length === 0) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ResponsesHeader, null, " Responses "),
            responses.map(function (response) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Response__["a" /* ResponseView */], { key: response.code, response: response });
            })));
    };
    return ResponsesList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));

var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/ResponsesList.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/ResponsesList.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Responses/styled.elements.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StyledResponseTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResponseDetailsWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadersCaption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResponseTitle__ = __webpack_require__("./src/components/Responses/ResponseTitle.tsx");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};




var StyledResponseTitle = Object(__WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */])(__WEBPACK_IMPORTED_MODULE_3__ResponseTitle__["a" /* ResponseTitle */])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px;\n  border-radius: 2px;\n  margin-bottom: 4px;\n  line-height: 1.5em;\n  background-color: #f2f2f2;\n  cursor: pointer;\n\n  color: ", ";\n  background-color: ", ";\n\n  ", ";\n"], ["\n  padding: 10px;\n  border-radius: 2px;\n  margin-bottom: 4px;\n  line-height: 1.5em;\n  background-color: #f2f2f2;\n  cursor: pointer;\n\n  color: ", ";\n  background-color: ", ";\n\n  ",
    ";\n"])), function (props) { return props.theme.colors[props.type]; }, function (props) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["F" /* transparentizeHex */])(props.theme.colors[props.type], 0.08); }, function (props) {
    return (props.empty &&
        "\ncursor: default;\n&::before {\n  content: \"\u2014\";\n  font-weight: bold;\n  width: 1.5em;\n  text-align: center;\n  display: inline-block;\n}\n") ||
        '';
});
var ResponseDetailsWrap = __WEBPACK_IMPORTED_MODULE_0__styled_components__["c" /* default */].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 10px;\n"], ["\n  padding: 10px;\n"])));
var HeadersCaption = __WEBPACK_IMPORTED_MODULE_1__common_elements__["h" /* H5 */].withComponent('caption').extend(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: left;\n  margin-top: 1em;\n"], ["\n  text-align: left;\n  margin-top: 1em;\n"])));
var templateObject_1, templateObject_2, templateObject_3;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/styled.elements.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Responses/styled.elements.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Schema/ArraySchema.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySchema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Schema__ = __webpack_require__("./src/components/Schema/Schema.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var ArraySchema = /** @class */ (function (_super) {
    __extends(ArraySchema, _super);
    function ArraySchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArraySchema.prototype.render = function () {
        var itemsSchema = this.props.schema.items;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements__["b" /* ArrayOpenningLabel */], null, " Array "),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Schema__["a" /* Schema */], __assign({}, this.props, { schema: itemsSchema })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements__["a" /* ArrayClosingLabel */], null)));
    };
    return ArraySchema;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/ArraySchema.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/ArraySchema.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Schema/DiscriminatorDropdown.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscriminatorDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements_dropdown__ = __webpack_require__("./src/common-elements/dropdown.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiscriminatorDropdown = /** @class */ (function (_super) {
    __extends(DiscriminatorDropdown, _super);
    function DiscriminatorDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeActiveChild = function (_a) {
            var value = _a.value;
            var idx = parseInt(value, 10);
            _this.props.parent.activateOneOf(idx);
        };
        return _this;
    }
    DiscriminatorDropdown.prototype.sortOptions = function (options, enumValues) {
        if (enumValues.length === 0) {
            return;
        }
        var enumOrder = {};
        enumValues.forEach(function (enumItem, idx) {
            enumOrder[enumItem] = idx;
        });
        options.sort(function (a, b) {
            return enumOrder[a.label] > enumOrder[b.label] ? 1 : -1;
        });
    };
    DiscriminatorDropdown.prototype.render = function () {
        var _a = this.props, parent = _a.parent, enumValues = _a.enumValues;
        if (parent.oneOf === undefined) {
            return null;
        }
        var options = parent.oneOf.map(function (subSchema, idx) {
            return {
                value: idx.toString(),
                label: subSchema.title,
            };
        });
        var activeItem = options[parent.activeOneOf];
        this.sortOptions(options, enumValues);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_dropdown__["c" /* StyledDropdown */], { value: activeItem, options: options, onChange: this.changeActiveChild }));
    };
    DiscriminatorDropdown = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], DiscriminatorDropdown);
    return DiscriminatorDropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/DiscriminatorDropdown.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/DiscriminatorDropdown.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Schema/ObjectSchema.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectSchema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements_fields_layout__ = __webpack_require__("./src/common-elements/fields-layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fields_Field__ = __webpack_require__("./src/components/Fields/Field.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DiscriminatorDropdown__ = __webpack_require__("./src/components/Schema/DiscriminatorDropdown.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("./src/utils/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ObjectSchema = /** @class */ (function (_super) {
    __extends(ObjectSchema, _super);
    function ObjectSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ObjectSchema.prototype, "parentSchema", {
        get: function () {
            return this.props.discriminator.parentSchema;
        },
        enumerable: true,
        configurable: true
    });
    ObjectSchema.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.schema.fields, fields = _b === void 0 ? [] : _b, showTitle = _a.showTitle, discriminator = _a.discriminator;
        var needFilter = this.props.skipReadOnly || this.props.skipWriteOnly;
        var filteredFields = needFilter
            ? fields.filter(function (item) {
                return ((_this.props.skipReadOnly && !item.schema.readOnly) ||
                    (_this.props.skipWriteOnly && !item.schema.writeOnly));
            })
            : fields;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_fields_layout__["b" /* PropertiesTable */], null,
            showTitle && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_fields_layout__["c" /* PropertiesTableCaption */], null, this.props.schema.title),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tbody", null, Object(__WEBPACK_IMPORTED_MODULE_5__utils__["A" /* mapWithLast */])(filteredFields, function (field, isLast) {
                return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Fields_Field__["a" /* Field */], { key: field.name, isLast: isLast, field: field, renderDiscriminatorSwitch: (discriminator &&
                        discriminator.fieldName === field.name &&
                        (function () { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__DiscriminatorDropdown__["a" /* DiscriminatorDropdown */], { parent: _this.parentSchema, enumValues: field.schema.enum })); })) ||
                        undefined, className: field.expanded ? 'expanded' : undefined, showExamples: false, skipReadOnly: _this.props.skipReadOnly, skipWriteOnly: _this.props.skipWriteOnly, showTitle: _this.props.showTitle }));
            }))));
    };
    ObjectSchema = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], ObjectSchema);
    return ObjectSchema;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/ObjectSchema.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/ObjectSchema.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Schema/OneOfSchema.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export OneOfButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneOfSchema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements_schema__ = __webpack_require__("./src/common-elements/schema.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Schema__ = __webpack_require__("./src/components/Schema/Schema.tsx");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OneOfButton = /** @class */ (function (_super) {
    __extends(OneOfButton, _super);
    function OneOfButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activateOneOf = function () {
            _this.props.schema.activateOneOf(_this.props.idx);
        };
        return _this;
    }
    OneOfButton.prototype.render = function () {
        var _a = this.props, idx = _a.idx, schema = _a.schema, subSchema = _a.subSchema;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_schema__["c" /* OneOfButton */], { active: idx === schema.activeOneOf, onClick: this.activateOneOf }, subSchema.title || subSchema.typePrefix + subSchema.displayType));
    };
    OneOfButton = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], OneOfButton);
    return OneOfButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]));

var OneOfSchema = /** @class */ (function (_super) {
    __extends(OneOfSchema, _super);
    function OneOfSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OneOfSchema.prototype.render = function () {
        var _a = this.props, oneOf = _a.schema.oneOf, schema = _a.schema;
        if (oneOf === undefined) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_schema__["d" /* OneOfLabel */], null,
                " ",
                schema.oneOfType,
                " "),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_schema__["e" /* OneOfList */], null, oneOf.map(function (subSchema, idx) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](OneOfButton, { key: subSchema._$ref, schema: schema, subSchema: subSchema, idx: idx })); })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Schema__["a" /* Schema */], __assign({}, this.props, { schema: oneOf[schema.activeOneOf] }))));
    };
    OneOfSchema = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], OneOfSchema);
    return OneOfSchema;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/OneOfSchema.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/OneOfSchema.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Schema/Schema.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Schema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_elements_fields__ = __webpack_require__("./src/common-elements/fields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fields_FieldDetails__ = __webpack_require__("./src/components/Fields/FieldDetails.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ArraySchema__ = __webpack_require__("./src/components/Schema/ArraySchema.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ObjectSchema__ = __webpack_require__("./src/components/Schema/ObjectSchema.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OneOfSchema__ = __webpack_require__("./src/components/Schema/OneOfSchema.tsx");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Schema = /** @class */ (function (_super) {
    __extends(Schema, _super);
    function Schema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Schema.prototype.render = function () {
        var schema = this.props.schema;
        if (!schema) {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("em", null, " Schema not provided ");
        }
        var type = schema.type, oneOf = schema.oneOf, discriminatorProp = schema.discriminatorProp, isCircular = schema.isCircular;
        if (isCircular) {
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_fields__["j" /* TypeName */], null, schema.displayType),
                schema.title && __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_fields__["l" /* TypeTitle */], null,
                    " ",
                    schema.title,
                    " "),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_elements_fields__["g" /* RecursiveLabel */], null, " Recursive ")));
        }
        if (discriminatorProp !== undefined) {
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__ObjectSchema__["a" /* ObjectSchema */], __assign({}, __assign({}, this.props, { schema: oneOf[schema.activeOneOf] }), { discriminator: {
                    fieldName: discriminatorProp,
                    parentSchema: schema,
                } })));
        }
        if (oneOf !== undefined) {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__OneOfSchema__["a" /* OneOfSchema */], __assign({ schema: schema }, this.props));
        }
        switch (type) {
            case 'object':
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__ObjectSchema__["a" /* ObjectSchema */], __assign({}, this.props));
            case 'array':
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__ArraySchema__["a" /* ArraySchema */], __assign({}, this.props));
        }
        // TODO: maybe adjust FieldDetails to accept schema
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Fields_FieldDetails__["a" /* FieldDetails */], { field: {
                    schema: schema,
                    name: '',
                    required: false,
                    description: schema.description,
                    deprecated: false,
                    toggle: function () { return null; },
                    expanded: false,
                } })));
    };
    Schema = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], Schema);
    return Schema;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/Schema.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/Schema.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Schema/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Schema__ = __webpack_require__("./src/components/Schema/Schema.tsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Schema__["a"]; });



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/Schema/index.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SearchBox/SearchBox.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SideMenu_MenuItem__ = __webpack_require__("./src/components/SideMenu/MenuItem.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements__ = __webpack_require__("./src/components/SearchBox/elements.tsx");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SearchBox = /** @class */ (function (_super) {
    __extends(SearchBox, _super);
    function SearchBox(props) {
        var _this = _super.call(this, props) || this;
        _this.clear = function () {
            _this.setState({
                results: [],
                term: '',
            });
            _this.props.marker.unmark();
        };
        _this.clearIfEsq = function (event) {
            if (event && event.keyCode === 27) {
                _this.clear();
            }
        };
        _this.search = function (event) {
            var q = event.target.value;
            if (q.length < 3) {
                _this.clearResults(q);
                return;
            }
            _this.setState({
                term: q,
            });
            _this.props.search.search(event.target.value).then(function (res) {
                _this.setResults(res, q);
            });
        };
        _this.state = {
            results: [],
            term: '',
        };
        return _this;
    }
    SearchBox.prototype.clearResults = function (term) {
        this.setState({
            results: [],
            term: term,
        });
        this.props.marker.unmark();
    };
    SearchBox.prototype.setResults = function (results, term) {
        this.setState({
            results: results,
            term: term,
        });
        this.props.marker.mark(term);
    };
    SearchBox.prototype.render = function () {
        var _this = this;
        var results = this.state.results.map(function (res) { return ({
            item: _this.props.getItemById(res.id),
            score: res.score,
        }); });
        results.sort(function (a, b) { return b.score - a.score; });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__elements__["e" /* SearchWrap */], null,
            this.state.term && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__elements__["a" /* ClearIcon */], { onClick: this.clear }, "\u00D7"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__elements__["b" /* SearchIcon */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__elements__["c" /* SearchInput */], { value: this.state.term, onKeyDown: this.clearIfEsq, placeholder: "Search...", type: "text", onChange: this.search }),
            results.length > 0 && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__elements__["d" /* SearchResultsBox */], null, results.map(function (res) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__SideMenu_MenuItem__["a" /* MenuItem */], { item: res.item, onActivate: _this.props.onActivate, withoutChildren: true, key: res.item.id })); })))));
    };
    return SearchBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SearchBox/SearchBox.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SearchBox/SearchBox.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SearchBox/elements.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SearchWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SearchResultsBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SideMenu_styled_elements__ = __webpack_require__("./src/components/SideMenu/styled.elements.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var SearchWrap = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 5px 0;\n"], ["\n  padding: 5px 0;\n"])));
var SearchInput = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].input.attrs({
    className: 'search-input',
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: calc(100% - ", "px);\n  box-sizing: border-box;\n  margin: 0 ", "px;\n  padding: 5px ", "px 5px ", "px;\n  border: 0;\n  border-bottom: 1px solid #e1e1e1;\n  font-weight: bold;\n  font-size: 13px;\n  color: ", ";\n  background-color: transparent;\n  outline: none;\n"], ["\n  width: calc(100% - ", "px);\n  box-sizing: border-box;\n  margin: 0 ", "px;\n  padding: 5px ", "px 5px ", "px;\n  border: 0;\n  border-bottom: 1px solid #e1e1e1;\n  font-weight: bold;\n  font-size: 13px;\n  color: ", ";\n  background-color: transparent;\n  outline: none;\n"])), function (props) { return props.theme.spacingUnit * 2; }, function (props) { return props.theme.spacingUnit; }, function (props) { return props.theme.spacingUnit / 2; }, function (props) { return props.theme.spacingUnit; }, function (props) { return props.theme.colors.text; });
var SearchIcon = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(function (props) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: props.className, version: "1.1", viewBox: "0 0 1000 1000", x: "0px", xmlns: "http://www.w3.org/2000/svg", y: "0px" },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z" }))); }).attrs({
    className: 'search-icon',
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  left: ", "px;\n  height: 1.8em;\n  width: 0.9em;\n\n  path {\n    fill: ", ";\n  }\n"], ["\n  position: absolute;\n  left: ", "px;\n  height: 1.8em;\n  width: 0.9em;\n\n  path {\n    fill: ", ";\n  }\n"])), function (props) { return props.theme.spacingUnit; }, function (props) { return props.theme.colors.text; });
var SearchResultsBox = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].div.attrs({
    className: 'search-results',
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: ", "px 0;\n  background-color: #ededed;\n  min-height: 150px;\n  max-height: 250px;\n  border-top: 1px solid #e1e1e1;\n  border-bottom: 1px solid #e1e1e1;\n  margin-top: 10px;\n  line-height: 1.4;\n  font-size: 0.9em;\n  overflow: auto;\n\n  ", " {\n    padding-top: 6px;\n    padding-bottom: 6px;\n\n    &:hover {\n      background-color: #e1e1e1;\n    }\n\n    > svg {\n      display: none;\n    }\n  }\n"], ["\n  padding: ", "px 0;\n  background-color: #ededed;\n  min-height: 150px;\n  max-height: 250px;\n  border-top: 1px solid #e1e1e1;\n  border-bottom: 1px solid #e1e1e1;\n  margin-top: 10px;\n  line-height: 1.4;\n  font-size: 0.9em;\n  overflow: auto;\n\n  ", " {\n    padding-top: 6px;\n    padding-bottom: 6px;\n\n    &:hover {\n      background-color: #e1e1e1;\n    }\n\n    > svg {\n      display: none;\n    }\n  }\n"])), function (props) { return props.theme.spacingUnit / 4; }, __WEBPACK_IMPORTED_MODULE_2__SideMenu_styled_elements__["a" /* MenuItemLabel */]);
var ClearIcon = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].i(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  display: inline-block;\n  width: ", "px;\n  text-align: center;\n  right: ", "px;\n  line-height: 2em;\n  vertical-align: middle;\n  margin-right: 2px;\n  cursor: pointer;\n  font-style: normal;\n  color: '#666';\n"], ["\n  position: absolute;\n  display: inline-block;\n  width: ", "px;\n  text-align: center;\n  right: ", "px;\n  line-height: 2em;\n  vertical-align: middle;\n  margin-right: 2px;\n  cursor: pointer;\n  font-style: normal;\n  color: '#666';\n"])), function (props) { return props.theme.spacingUnit / 2; }, function (props) { return props.theme.spacingUnit; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SearchBox/elements.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SearchBox/elements.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SecurityRequirement/SecuirityRequirement.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export SecurityRequirement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityRequirements; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_styled__ = __webpack_require__("./src/utils/styled.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_elements_headers__ = __webpack_require__("./src/common-elements/headers.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ScopeName = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].code(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: ", ";\n  border: 1px solid ", ";\n  margin: 0 3px;\n  padding: 0.2em;\n  display: inline-block;\n  line-height: 1;\n"], ["\n  font-size: ", ";\n  font-family: ", ";\n  border: 1px solid ", ";\n  margin: 0 3px;\n  padding: 0.2em;\n  display: inline-block;\n  line-height: 1;\n"])), function (props) { return props.theme.code.fontSize; }, function (props) { return props.theme.code.fontFamily; }, function (props) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils_styled__["b" /* transparentizeHex */])(props.theme.colors.text, 0.15); });
var SecurityRequirement = /** @class */ (function (_super) {
    __extends(SecurityRequirement, _super);
    function SecurityRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityRequirement.prototype.render = function () {
        var security = this.props.security;
        return security.schemes.map(function (scheme, idx) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: scheme.id },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: '#' + scheme.sectionId }, scheme.id),
                scheme.scopes.length > 0 && ' (',
                scheme.scopes.map(function (scope) { return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ScopeName, { key: scope }, scope); }),
                scheme.scopes.length > 0 && ') ',
                idx < security.schemes.length - 1 && ' and '));
        });
    };
    return SecurityRequirement;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));

var AuthHeaderColumn = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].td(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  vertical-align: top;\n"], ["\n  vertical-align: top;\n"])));
var SecuritiesColumn = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].td(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n"], ["\n  width: ", ";\n"])), function (props) { return props.theme.schemaView.defaultDetailsWidth; });
var AuthHeader = Object(__WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */])(__WEBPACK_IMPORTED_MODULE_3__common_elements_headers__["c" /* H5 */])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var Table = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].table(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var SecurityRequirements = /** @class */ (function (_super) {
    __extends(SecurityRequirements, _super);
    function SecurityRequirements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityRequirements.prototype.render = function () {
        var securities = this.props.securities;
        if (!securities.length) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Table, null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](AuthHeaderColumn, null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](AuthHeader, null, "Authorizations: ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](SecuritiesColumn, null, securities.map(function (security, idx) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](SecurityRequirement, { key: idx, security: security })); }))))));
    };
    return SecurityRequirements;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SecurityRequirement/SecuirityRequirement.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SecurityRequirement/SecuirityRequirement.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SecuritySchemes/SecuritySchemes.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export OAuthFlow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityDefs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Markdown_Markdown__ = __webpack_require__("./src/components/Markdown/Markdown.tsx");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var AUTH_TYPES = {
    oauth2: 'OAuth2',
    apiKey: 'API Key',
    http: 'HTTP',
    openIdConnect: 'Open ID Connect',
};
var AuthTable = __WEBPACK_IMPORTED_MODULE_2__styled_components__["c" /* default */].table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-collapse: separate;\n\n  tr td,\n  tr th {\n    background-color: #fff;\n  }\n\n  tr:first-child td,\n  tr:first-child th {\n    background-color: #f9f9f9;\n  }\n\n  ul > li {\n    margin: 0.5em 0 !important;\n  }\n\n  th {\n    text-transform: capitalize;\n  }\n"], ["\n  border-collapse: separate;\n\n  tr td,\n  tr th {\n    background-color: #fff;\n  }\n\n  tr:first-child td,\n  tr:first-child th {\n    background-color: #f9f9f9;\n  }\n\n  ul > li {\n    margin: 0.5em 0 !important;\n  }\n\n  th {\n    text-transform: capitalize;\n  }\n"])));
var Header = __WEBPACK_IMPORTED_MODULE_1__common_elements__["g" /* H2 */].extend(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 20px 0;\n"], ["\n  margin: 20px 0;\n"])));
var OAuthFlow = /** @class */ (function (_super) {
    __extends(OAuthFlow, _super);
    function OAuthFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OAuthFlow.prototype.render = function () {
        var _a = this.props, type = _a.type, flow = _a.flow;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null,
                " ",
                type,
                " OAuth Flow "),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                type === 'implicit' || type === 'authorizationCode' ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, " Authorization URL: "),
                    flow.authorizationUrl)) : null,
                type === 'password' || type === 'clientCredentials' || type === 'authorizationCode' ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, " Token URL: "),
                    flow.tokenUrl)) : null,
                flow.refreshUrl && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, " Refresh URL: "),
                    flow.refreshUrl)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, " Scopes: ")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, Object.keys(flow.scopes).map(function (scope) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { key: scope },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("code", null, scope),
                    " - ",
                    flow.scopes[scope])); })))));
    };
    return OAuthFlow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));

var SecurityDefs = /** @class */ (function (_super) {
    __extends(SecurityDefs, _super);
    function SecurityDefs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDefs.prototype.render = function () {
        if (!this.props.securitySchemes) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.props.securitySchemes.schemes.map(function (scheme) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-section-id": scheme.sectionId, key: scheme.id },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Header, null,
                scheme.id,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_elements__["m" /* ShareLink */], { href: '#' + scheme.sectionId })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Markdown_Markdown__["a" /* Markdown */], { source: scheme.description || '' }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](AuthTable, { className: "security-details" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, " Security scheme type: "),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            " ",
                            AUTH_TYPES[scheme.type] || scheme.type,
                            " ")),
                    scheme.apiKey ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null,
                            " ",
                            scheme.apiKey.in,
                            " parameter name:"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            " ",
                            scheme.apiKey.name,
                            " "))) : scheme.http ? ([
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { key: "scheme" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, " HTTP Authorization Scheme "),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                                " ",
                                scheme.http.scheme,
                                " ")),
                        scheme.http.scheme === 'bearer' &&
                            scheme.http.bearerFormat && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { key: "bearer" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, " Bearer format "),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                                " \"",
                                scheme.http.bearerFormat,
                                "\" "))),
                    ]) : scheme.openId ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, " Connect URL "),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { target: "_blank", href: scheme.openId.connectUrl }, scheme.openId.connectUrl)))) : scheme.flows ? (Object.keys(scheme.flows).map(function (type) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](OAuthFlow, { key: type, type: type, flow: scheme.flows[type] })); })) : null)))); })));
    };
    return SecurityDefs;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));

var templateObject_1, templateObject_2;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SecuritySchemes/SecuritySchemes.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SecuritySchemes/SecuritySchemes.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SelectOnClick/SelectOnClick.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectOnClick; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/services/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SelectOnClick = /** @class */ (function (_super) {
    __extends(SelectOnClick, _super);
    function SelectOnClick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            __WEBPACK_IMPORTED_MODULE_1__services__["d" /* ClipboardService */].selectElement(_this.child);
        };
        return _this;
    }
    SelectOnClick.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { ref: function (el) { return (_this.child = el); }, onClick: this.handleClick }, children));
    };
    return SelectOnClick;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SelectOnClick/SelectOnClick.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SelectOnClick/SelectOnClick.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SideMenu/MenuItem.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuItems__ = __webpack_require__("./src/components/SideMenu/MenuItems.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styled_elements__ = __webpack_require__("./src/components/SideMenu/styled.elements.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activate = function (evt) {
            _this.props.onActivate(_this.props.item);
            evt.stopPropagation();
        };
        return _this;
    }
    MenuItem.prototype.render = function () {
        var _a = this.props, item = _a.item, withoutChildren = _a.withoutChildren;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styled_elements__["b" /* MenuItemLi */], { onClick: this.activate, depth: item.depth },
            item.type === 'operation' ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](OperationMenuItemContent, { item: item })) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styled_elements__["a" /* MenuItemLabel */], { depth: item.depth, active: item.active },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styled_elements__["c" /* MenuItemTitle */], { title: item.name }, item.name))),
            !withoutChildren &&
                item.items &&
                item.items.length > 0 && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__MenuItems__["a" /* MenuItems */], { active: item.active, items: item.items, onActivate: this.props.onActivate }))));
    };
    MenuItem = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], MenuItem);
    return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var OperationMenuItemContent = /** @class */ (function (_super) {
    __extends(OperationMenuItemContent, _super);
    function OperationMenuItemContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationMenuItemContent.prototype.render = function () {
        var _a = this.props, item = _a.item, className = _a.className;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styled_elements__["a" /* MenuItemLabel */], { className: className, depth: item.depth, active: item.active, deprecated: item.deprecated },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styled_elements__["c" /* MenuItemTitle */], { width: "calc(100% - 32px)" }, item.name)));
    };
    OperationMenuItemContent = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], OperationMenuItemContent);
    return OperationMenuItemContent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SideMenu/MenuItem.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SideMenu/MenuItem.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SideMenu/MenuItems.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuItem__ = __webpack_require__("./src/components/SideMenu/MenuItem.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styled_elements__ = __webpack_require__("./src/components/SideMenu/styled.elements.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuItems = /** @class */ (function (_super) {
    __extends(MenuItems, _super);
    function MenuItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItems.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        var active = this.props.active == null ? true : this.props.active;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styled_elements__["d" /* MenuItemUl */], { style: this.props.style, active: active }, items.map(function (item, idx) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__MenuItem__["a" /* MenuItem */], { key: idx, item: item, onActivate: _this.props.onActivate })); })));
    };
    MenuItems = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], MenuItems);
    return MenuItems;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SideMenu/MenuItems.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SideMenu/MenuItems.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SideMenu/SideMenu.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OptionsProvider__ = __webpack_require__("./src/components/OptionsProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MenuItems__ = __webpack_require__("./src/components/SideMenu/MenuItems.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_elements_perfect_scrollbar__ = __webpack_require__("./src/common-elements/perfect-scrollbar.tsx");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SideMenu = /** @class */ (function (_super) {
    __extends(SideMenu, _super);
    function SideMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activate = function (item) {
            _this.props.menu.activateAndScroll(item, true);
            setTimeout(function () {
                if (_this._updateScroll) {
                    _this._updateScroll();
                }
            });
        };
        _this.saveScrollUpdate = function (upd) {
            _this._updateScroll = upd;
        };
        return _this;
    }
    SideMenu.prototype.render = function () {
        var store = this.props.menu;
        var nativeScrollbars = this.options.nativeScrollbars;
        return nativeScrollbars ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__MenuItems__["a" /* MenuItems */], { style: {
                overflow: 'auto',
                msOverflowStyle: '-ms-autohiding-scrollbar',
            }, items: store.items, onActivate: this.activate })) : (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements_perfect_scrollbar__["a" /* PerfectScrollbar */], { updateFn: this.saveScrollUpdate },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__MenuItems__["a" /* MenuItems */], { items: store.items, onActivate: this.activate })));
    };
    SideMenu = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], SideMenu);
    return SideMenu;
}(__WEBPACK_IMPORTED_MODULE_2__OptionsProvider__["a" /* ComponentWithOptions */]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SideMenu/SideMenu.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SideMenu/SideMenu.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SideMenu/styled.elements.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export OperationBadge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MenuItemUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuItemLi; });
/* unused harmony export menuItemDepth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MenuItemTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var OperationBadge = Object(__WEBPACK_IMPORTED_MODULE_2__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_2__styled_components__["c" /* default */].span).attrs({
    className: function (props) { return "operation-type " + props.type; },
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 26px;\n  display: inline-block;\n  height: ", ";;\n  background-color: #333;\n  border-radius: 3px;\n  vertical-align: top;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAACgCAYAAADuDlcXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNjQ5N0JDQUE3OTYxMUU0ODNGMUE0RUM3NjRDRTQyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNjQ5N0JDQkE3OTYxMUU0ODNGMUE0RUM3NjRDRTQyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2NDk3QkM4QTc5NjExRTQ4M0YxQTRFQzc2NENFNDI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2NDk3QkM5QTc5NjExRTQ4M0YxQTRFQzc2NENFNDI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mIrGwQAAAZ9JREFUeNrsmtuOwyAMRBmU//9lbx9208ayjQ1EarSDVFW56ARIGGZIIK/S3gWvX3X7LN3a6WxDHdPnnDBpcZHEOe3wrmLUMg2zatKykPOq1/5fK71tLIQR9jjYsaJfWdWAAcRsM2W1z9LNGcFkRlmtPhvpf7qmHAGEESZqLFr/qbHaCy4Is6oxLdvT+nWr0lLPCCPsFn+mA5e2UjLycL1o6qLMiapqRGoifVCDinrgU2mRyJthzZg3CSPs+2HhIM4YGq0a4oDgiGjYTKw20/OwUzAEuXz73YSqtdsV+F1a3eZpweFEGGG7Y3ULbJRk4nYPlEHbUi86wpNtbz4oB37PICOrLEdC9DKzFv7EkQ8tYY8Nr8tuyJrRsdpMrIJ0n4GPBmGEEUbYzRMKnFwug1B7rppmbCiyBjBrQ1vC8KW/CxrF7osNrRbxMjofWsIIuwU2vapnZfTRq4/wFXl3hG9bMzP6ZWV47LoB+Gym1/EyUleKI2GEPW8pQpu80bHLvsifSWFVAVEzo2VDTxxb9T16eO7sF0vmxPNPxPFHgAEA/rGUMXq/uWcAAAAASUVORK5CYII=\");\n  background-repeat: no-repeat;\n  background-position: 6px 4px;\n  text-indent: -9000px;\n  margin-right: 6px;\n  margin-top: 2px;\n\n  &.get {\n    background-position: 8px -12px;\n    background-color: ", ";\n  }\n\n  &.post {\n    background-position: 6px 4px;\n    background-color: ", ";\n  }\n\n  &.put {\n    background-position: 8px -28px;\n    background-color: ", ";\n  }\n\n  &.options {\n    background-position: 4px -148px;\n    background-color: ", ";\n  }\n\n  &.patch {\n    background-position: 4px -114px;\n    background-color: ", ";\n  }\n\n  &.delete {\n    background-position: 4px -44px;\n    background-color: ", ";\n  }\n\n  &.basic {\n    background-position: 5px -79px;\n    background-color: ", ";\n  }\n\n  &.link {\n    background-position: 4px -131px;\n    background-color: ", ";\n  }\n"], ["\n  width: 26px;\n  display: inline-block;\n  height: ", ";;\n  background-color: #333;\n  border-radius: 3px;\n  vertical-align: top;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAACgCAYAAADuDlcXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNjQ5N0JDQUE3OTYxMUU0ODNGMUE0RUM3NjRDRTQyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNjQ5N0JDQkE3OTYxMUU0ODNGMUE0RUM3NjRDRTQyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2NDk3QkM4QTc5NjExRTQ4M0YxQTRFQzc2NENFNDI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2NDk3QkM5QTc5NjExRTQ4M0YxQTRFQzc2NENFNDI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mIrGwQAAAZ9JREFUeNrsmtuOwyAMRBmU//9lbx9208ayjQ1EarSDVFW56ARIGGZIIK/S3gWvX3X7LN3a6WxDHdPnnDBpcZHEOe3wrmLUMg2zatKykPOq1/5fK71tLIQR9jjYsaJfWdWAAcRsM2W1z9LNGcFkRlmtPhvpf7qmHAGEESZqLFr/qbHaCy4Is6oxLdvT+nWr0lLPCCPsFn+mA5e2UjLycL1o6qLMiapqRGoifVCDinrgU2mRyJthzZg3CSPs+2HhIM4YGq0a4oDgiGjYTKw20/OwUzAEuXz73YSqtdsV+F1a3eZpweFEGGG7Y3ULbJRk4nYPlEHbUi86wpNtbz4oB37PICOrLEdC9DKzFv7EkQ8tYY8Nr8tuyJrRsdpMrIJ0n4GPBmGEEUbYzRMKnFwug1B7rppmbCiyBjBrQ1vC8KW/CxrF7osNrRbxMjofWsIIuwU2vapnZfTRq4/wFXl3hG9bMzP6ZWV47LoB+Gym1/EyUleKI2GEPW8pQpu80bHLvsifSWFVAVEzo2VDTxxb9T16eO7sF0vmxPNPxPFHgAEA/rGUMXq/uWcAAAAASUVORK5CYII=\");\n  background-repeat: no-repeat;\n  background-position: 6px 4px;\n  text-indent: -9000px;\n  margin-right: 6px;\n  margin-top: 2px;\n\n  &.get {\n    background-position: 8px -12px;\n    background-color: ", ";\n  }\n\n  &.post {\n    background-position: 6px 4px;\n    background-color: ", ";\n  }\n\n  &.put {\n    background-position: 8px -28px;\n    background-color: ", ";\n  }\n\n  &.options {\n    background-position: 4px -148px;\n    background-color: ", ";\n  }\n\n  &.patch {\n    background-position: 4px -114px;\n    background-color: ", ";\n  }\n\n  &.delete {\n    background-position: 4px -44px;\n    background-color: ", ";\n  }\n\n  &.basic {\n    background-position: 5px -79px;\n    background-color: ", ";\n  }\n\n  &.link {\n    background-position: 4px -131px;\n    background-color: ", ";\n  }\n"])), function (props) { return props.theme.code.fontSize; }, function (props) { return props.theme.colors.http.get; }, function (props) { return props.theme.colors.http.post; }, function (props) { return props.theme.colors.http.put; }, function (props) { return props.theme.colors.http.options; }, function (props) { return props.theme.colors.http.patch; }, function (props) { return props.theme.colors.http.delete; }, function (props) { return props.theme.colors.http.basic; }, function (props) { return props.theme.colors.http.link; });
var MenuItemUl = Object(__WEBPACK_IMPORTED_MODULE_2__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_2__styled_components__["c" /* default */].ul)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n\n  & ul {\n    padding-left: 12px;\n    padding-top: 12px;\n  }\n\n  // To collapse menu when no active\n  /* ", "; */\n"], ["\n  margin: 0;\n  padding: 0;\n\n  & ul {\n    padding-left: 12px;\n    padding-top: 12px;\n  }\n\n  // To collapse menu when no active\n  /* ", "; */\n"])), function (props) { return (props.active ? '' : 'display: none;'); });
var MenuItemLi = Object(__WEBPACK_IMPORTED_MODULE_2__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_2__styled_components__["c" /* default */].li)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  list-style: none inside none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0;\n  margin-bottom: 12px;\n  ", ";\n"], ["\n  list-style: none inside none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0;\n  margin-bottom: 12px;\n  ", ";\n"])), function (props) { return (props.depth === 0 ? 'margin-top: 15px' : ''); });
var menuItemDepth = {
    0: Object(__WEBPACK_IMPORTED_MODULE_2__styled_components__["b" /* css */])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    opacity: 0.7;\n    text-transform: uppercase;\n    font-size: 12px;\n    padding-bottom: 0;\n    cursor: default;\n    color: ", ";\n  "], ["\n    opacity: 0.7;\n    text-transform: uppercase;\n    font-size: 12px;\n    padding-bottom: 0;\n    cursor: default;\n    color: ", ";\n  "])), function (props) { return props.theme.colors.main; }),
    1: Object(__WEBPACK_IMPORTED_MODULE_2__styled_components__["b" /* css */])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font: 600 12px/16px 'Montserrat';\n    color: ", ";\n  "], ["\n    font: 600 12px/16px 'Montserrat';\n    color: ", ";\n  "])), function (props) { return props.theme.colors.main; }),
    2: Object(__WEBPACK_IMPORTED_MODULE_2__styled_components__["b" /* css */])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font: 400 12px/16px 'Open Sans';\n    color: ", ";\n  "], ["\n    font: 400 12px/16px 'Open Sans';\n    color: ", ";\n  "])), function (props) { return props.theme.colors.main; }),
};
var MenuItemLabel = Object(__WEBPACK_IMPORTED_MODULE_2__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_2__styled_components__["c" /* default */].label).attrs({
    className: function (props) {
        return __WEBPACK_IMPORTED_MODULE_0_classnames__('menu-item', '-depth' + props.depth, {
            active: props.active,
        });
    },
})(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  cursor: pointer;\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  font-family: ", ";\n  ", ";\n  font-weight: ", ";\n  color: ", ";\n\n  ", ";\n"], ["\n  cursor: pointer;\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  font-family: ", ";\n  ", ";\n  font-weight: ", ";\n  color: ", ";\n\n  ", ";\n"])), function (props) { return props.theme.headingsFont.family; }, function (props) { return menuItemDepth[props.depth]; }, function (props) { return (props.active ? 600 : 400); }, function (props) { return (props.active ? props.theme.colors.highlight : props.theme.colors.main); }, function (props) { return (props.deprecated && __WEBPACK_IMPORTED_MODULE_1__common_elements__["u" /* deprecatedCss */]) || ''; });
var MenuItemTitle = Object(__WEBPACK_IMPORTED_MODULE_2__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_2__styled_components__["c" /* default */].span).attrs({
    className: 'menu-item-title',
})(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: middle;\n  width: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n  width: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])), function (props) { return (props.width ? props.width : 'auto'); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SideMenu/styled.elements.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SideMenu/styled.elements.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SourceCode/SourceCode.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export SourceCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourceCodeWithCopy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_elements__ = __webpack_require__("./src/common-elements/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_elements_CopyButtonWrapper__ = __webpack_require__("./src/common-elements/CopyButtonWrapper.tsx");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var StyledPre = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].pre(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  overflow-x: auto;\n  margin: 0;\n\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  overflow-x: auto;\n  margin: 0;\n\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n"])), function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.code.fontSize; });
var SourceCode = /** @class */ (function (_super) {
    __extends(SourceCode, _super);
    function SourceCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SourceCode.prototype.render = function () {
        var _a = this.props, source = _a.source, lang = _a.lang;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledPre, { dangerouslySetInnerHTML: { __html: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["m" /* highlight */])(source, lang) } });
    };
    return SourceCode;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));

var SourceCodeWithCopy = /** @class */ (function (_super) {
    __extends(SourceCodeWithCopy, _super);
    function SourceCodeWithCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SourceCodeWithCopy.prototype.render = function () {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_elements_CopyButtonWrapper__["a" /* CopyButtonWrapper */], { data: this.props.source }, function (_a) {
            var renderCopyButton = _a.renderCopyButton;
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements__["l" /* SampleControlsWrap */], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](SourceCode, { lang: _this.props.lang, source: _this.props.source }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_elements__["k" /* SampleControls */], null, renderCopyButton())));
        }));
    };
    return SourceCodeWithCopy;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));

var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/SourceCode/SourceCode.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/SourceCode/SourceCode.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/StickySidebar/ChevronSvg.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimatedChevronButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled_components__ = __webpack_require__("./src/styled-components.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var AnimatedChevronButton = function (_a) {
    var open = _a.open;
    var iconOffset = open ? 8 : -4;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ChevronContainer, null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ChevronSvg, { size: 15, style: {
                transform: "translate(2px, " + iconOffset + "px) rotate(180deg)",
                transition: 'transform 0.2s ease',
            } }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ChevronSvg, { size: 15, style: {
                transform: "translate(2px, " + (0 - iconOffset) + "px)",
                transition: 'transform 0.2s ease',
            } })));
};
// adapted from reactjs.org
var ChevronSvg = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 10 : _b, _c = _a.className, className = _c === void 0 ? '' : _c, style = _a.style;
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: className, style: style || {}, viewBox: "0 0 926.23699 573.74994", version: "1.1", x: "0px", y: "0px", width: size, height: size },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("g", { transform: "translate(904.92214,-879.1482)" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ", fill: "currentColor" }))));
};
var ChevronContainer = __WEBPACK_IMPORTED_MODULE_1__styled_components__["c" /* default */].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n  width: 20px;\n  height: 20px;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n"], ["\n  user-select: none;\n  width: 20px;\n  height: 20px;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n"])), function (props) { return props.theme.colors.main; });
var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/StickySidebar/ChevronSvg.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/StickySidebar/ChevronSvg.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/StickySidebar/StickyResponsiveSidebar.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyResponsiveSidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_RedocNormalizedOptions__ = __webpack_require__("./src/services/RedocNormalizedOptions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OptionsProvider__ = __webpack_require__("./src/components/OptionsProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ChevronSvg__ = __webpack_require__("./src/components/StickySidebar/ChevronSvg.tsx");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Stickyfill;
if (typeof window !== 'undefined') {
    Stickyfill = __webpack_require__("stickyfill").default;
}
var stickyfill = Stickyfill && Stickyfill();
var StyledStickySidebar = Object(__WEBPACK_IMPORTED_MODULE_3__styled_components__["g" /* withProps */])(__WEBPACK_IMPORTED_MODULE_3__styled_components__["c" /* default */].div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", "px;\n  background-color: ", ";\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  backface-visibility: hidden;\n  contain: strict;\n\n  height: 100vh;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n\n  padding: 36px 16px;\n\n  ", ";\n"], ["\n  width: ", "px;\n  background-color: ", ";\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  backface-visibility: hidden;\n  contain: strict;\n\n  height: 100vh;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n\n  padding: 36px 16px;\n\n  ",
    ";\n"])), function (props) { return props.theme.menu.width; }, function (props) { return props.theme.menu.backgroundColor; }, __WEBPACK_IMPORTED_MODULE_3__styled_components__["f" /* media */].lessThan('small')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: fixed;\n    z-index: 20;\n    width: 100%;\n    background: #ffffff;\n    display: ", ";\n  "], ["\n    position: fixed;\n    z-index: 20;\n    width: 100%;\n    background: #ffffff;\n    display: ", ";\n  "])), function (props) { return (props.open ? 'flex' : 'none'); }));
var FloatingButton = __WEBPACK_IMPORTED_MODULE_3__styled_components__["c" /* default */].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  outline: none;\n  user-select: none;\n  background-color: #f2f2f2;\n  color: ", ";\n  display: none;\n  cursor: pointer;\n  position: fixed;\n  right: 20px;\n  z-index: 100;\n  border-radius: 50%;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  ", ";\n  bottom: 44px;\n\n  width: 60px;\n  height: 60px;\n  padding: 0 20px;\n"], ["\n  outline: none;\n  user-select: none;\n  background-color: #f2f2f2;\n  color: ", ";\n  display: none;\n  cursor: pointer;\n  position: fixed;\n  right: 20px;\n  z-index: 100;\n  border-radius: 50%;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  ",
    ";\n  bottom: 44px;\n\n  width: 60px;\n  height: 60px;\n  padding: 0 20px;\n"])), function (props) { return props.theme.colors.main; }, __WEBPACK_IMPORTED_MODULE_3__styled_components__["f" /* media */].lessThan('small')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n  "], ["\n    display: flex;\n  "]))));
var StickyResponsiveSidebar = /** @class */ (function (_super) {
    __extends(StickyResponsiveSidebar, _super);
    function StickyResponsiveSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleNavMenu = function () {
            _this.props.menu.toggleSidebar();
        };
        return _this;
        // private closeNavMenu = () => {
        //   this.setState({ open: false });
        // };
    }
    StickyResponsiveSidebar.prototype.componentDidMount = function () {
        if (stickyfill) {
            stickyfill.add(this.stickyElement);
        }
    };
    StickyResponsiveSidebar.prototype.componentWillUnmount = function () {
        if (stickyfill) {
            stickyfill.remove(this.stickyElement);
        }
    };
    Object.defineProperty(StickyResponsiveSidebar.prototype, "scrollYOffset", {
        get: function () {
            var top;
            if (this.props.scrollYOffset !== undefined) {
                top = __WEBPACK_IMPORTED_MODULE_2__services_RedocNormalizedOptions__["a" /* RedocNormalizedOptions */].normalizeScrollYOffset(this.props.scrollYOffset)();
            }
            else {
                top = this.options.scrollYOffset();
            }
            return top + 'px';
        },
        enumerable: true,
        configurable: true
    });
    StickyResponsiveSidebar.prototype.render = function () {
        var _this = this;
        var top = this.scrollYOffset;
        var open = this.props.menu.sideBarOpened;
        var height = "calc(100vh - " + top + ")";
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](StyledStickySidebar, { open: open, className: this.props.className, style: { top: top, height: height }, 
                // tslint:disable-next-line
                innerRef: function (el) {
                    _this.stickyElement = el;
                } }, this.props.children),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](FloatingButton, { onClick: this.toggleNavMenu },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__ChevronSvg__["a" /* AnimatedChevronButton */], { open: open }))));
    };
    StickyResponsiveSidebar = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_react__["observer"]
    ], StickyResponsiveSidebar);
    return StickyResponsiveSidebar;
}(__WEBPACK_IMPORTED_MODULE_4__OptionsProvider__["a" /* ComponentWithOptions */]));

var templateObject_2, templateObject_1, templateObject_4, templateObject_3;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/StickySidebar/StickyResponsiveSidebar.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/StickySidebar/StickyResponsiveSidebar.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/StoreProvider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services___ = __webpack_require__("./src/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./src/utils/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var StoreProvider = /** @class */ (function (_super) {
    __extends(StoreProvider, _super);
    function StoreProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: true,
        };
        return _this;
    }
    StoreProvider.prototype.componentDidMount = function () {
        this.load();
    };
    StoreProvider.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, specUrl, spec, options, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, specUrl = _a.specUrl, spec = _a.spec, options = _a.options;
                        this.setState({
                            loading: true,
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = this;
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_2__utils__["x" /* loadAndBundleSpec */])(spec || specUrl)];
                    case 2:
                        _b._resolvedSpec = _c.sent();
                        this.updateStore(this._resolvedSpec, specUrl, options);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        this.setState({
                            error: e_1,
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StoreProvider.prototype.updateStore = function (resolvedSpec, specUrl, options) {
        try {
            this.setState({
                loading: false,
                store: new __WEBPACK_IMPORTED_MODULE_1__services___["b" /* AppStore */](resolvedSpec, specUrl, options),
                error: undefined,
            });
        }
        catch (e) {
            this.setState({
                error: e,
            });
        }
    };
    StoreProvider.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.props.specUrl !== nextProps.specUrl || this.props.spec !== nextProps.spec) {
            setTimeout(function () { return _this.load(); }, 0);
            return;
        }
        if (this.props.options !== nextProps.options && this._resolvedSpec) {
            this.updateStore(this._resolvedSpec, nextProps.specUrl, nextProps.options);
        }
    };
    StoreProvider.prototype.setError = function (e) {
        this.setState({
            error: e,
        });
    };
    StoreProvider.prototype.render = function () {
        if (this.state.error) {
            throw this.state.error;
        }
        return this.props.children(this.state);
    };
    return StoreProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/StoreProvider.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/StoreProvider.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RedocStandalone__ = __webpack_require__("./src/components/RedocStandalone.tsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__RedocStandalone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Redoc_Redoc__ = __webpack_require__("./src/components/Redoc/Redoc.tsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Redoc_Redoc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Schema___ = __webpack_require__("./src/components/Schema/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__Schema___["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SearchBox_SearchBox__ = __webpack_require__("./src/components/SearchBox/SearchBox.tsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__SearchBox_SearchBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Operation_Operation__ = __webpack_require__("./src/components/Operation/Operation.tsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__Operation_Operation__["a"]; });
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ErrorBoundary__ = __webpack_require__("./src/components/ErrorBoundary.tsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__ErrorBoundary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StoreProvider__ = __webpack_require__("./src/components/StoreProvider.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__StoreProvider__["a"]; });


// export * from './Redoc/elements';






// re-export the rest of components


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/components/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/components/index.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("./src/components/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RedocStandalone", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Redoc", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/services/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AppStore", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "OpenAPIParser", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_REGEXP", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "buildComponentComment", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MarkdownRenderer", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SECTION_ATTR", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MenuStore", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SpecStore", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ApiInfoModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SecuritySchemeModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SecuritySchemesModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RedocNormalizedOptions", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GROUP_DEPTH", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MenuBuilder", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SearchStore", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MarkerService", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GroupModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "OperationModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RequestBodyModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ExampleModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MediaContentModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MediaTypeModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResponseModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SchemaModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FieldModel", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonPointer", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transparentizeHex", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getStatusCodeType", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isOperationName", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getOperationSummary", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "detectType", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPrimitiveType", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isJsonLike", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "langFromMime", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNamedDefinition", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "humanizeConstraints", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sortByRequired", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SECURITY_SCHEMES_SECTION", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mapWithLast", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mapValues", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flattenByProp", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stripTrailingSlash", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAbsolutePath", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "appendToMdHeading", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mergeObjects", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mapLang", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "highlight", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "loadAndBundleSpec", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "convertSwagger2OpenAPI", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "querySelector", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "html2Str", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Throttle", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "debugTime", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "debugTimeEnd", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["g"]; });





 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/index.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/AppStore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_loadAndBundleSpec__ = __webpack_require__("./src/utils/loadAndBundleSpec.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MarkerService__ = __webpack_require__("./src/services/MarkerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MenuStore__ = __webpack_require__("./src/services/MenuStore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__("./src/services/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RedocNormalizedOptions__ = __webpack_require__("./src/services/RedocNormalizedOptions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ScrollService__ = __webpack_require__("./src/services/ScrollService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SearchStore__ = __webpack_require__("./src/services/SearchStore.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








function createStore(spec, specUrl, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var resolvedSpec;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1__utils_loadAndBundleSpec__["b" /* loadAndBundleSpec */])(spec || specUrl)];
                case 1:
                    resolvedSpec = _a.sent();
                    return [2 /*return*/, new AppStore(resolvedSpec, specUrl, options)];
            }
        });
    });
}
var AppStore = /** @class */ (function () {
    function AppStore(spec, specUrl, options, createSearchIndex) {
        if (options === void 0) { options = {}; }
        if (createSearchIndex === void 0) { createSearchIndex = true; }
        var _this = this;
        this.marker = new __WEBPACK_IMPORTED_MODULE_2__MarkerService__["a" /* MarkerService */]();
        this.rawOptions = options;
        this.options = new __WEBPACK_IMPORTED_MODULE_5__RedocNormalizedOptions__["a" /* RedocNormalizedOptions */](options);
        this.scroll = new __WEBPACK_IMPORTED_MODULE_6__ScrollService__["a" /* ScrollService */](this.options);
        this.spec = new __WEBPACK_IMPORTED_MODULE_4__models__["m" /* SpecStore */](spec, specUrl, this.options);
        this.menu = new __WEBPACK_IMPORTED_MODULE_3__MenuStore__["a" /* MenuStore */](this.spec, this.scroll);
        this.search = new __WEBPACK_IMPORTED_MODULE_7__SearchStore__["a" /* SearchStore */]();
        if (createSearchIndex) {
            this.search.indexItems(this.menu.items);
        }
        this.disposer = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observe"])(this.menu, 'activeItemIdx', function (change) {
            _this.updateMarkOnMenu(change.newValue);
        });
    }
    /**
     * deserialize store
     * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
     */
    // TODO:
    AppStore.fromJS = function (state) {
        var inst = new AppStore(state.spec.data, state.spec.url, state.options, false);
        inst.menu.activeItemIdx = state.menu.activeItemIdx || 0;
        inst.menu.activate(inst.menu.flatItems[inst.menu.activeItemIdx]);
        inst.search.load(state.searchIndex);
        return inst;
    };
    AppStore.prototype.onDidMount = function () {
        this.menu.updateOnHash();
        this.updateMarkOnMenu(this.menu.activeItemIdx);
    };
    AppStore.prototype.updateMarkOnMenu = function (idx) {
        var start = Math.max(0, idx);
        var end = Math.min(this.menu.flatItems.length, start + 5);
        var elements = [];
        for (var i = start; i < end; i++) {
            var elem = this.menu.getElementAt(i);
            if (!elem) {
                continue;
            }
            if (this.menu.flatItems[i].type === 'section') {
                elem = elem.parentElement.parentElement;
            }
            if (elem) {
                elements.push(elem);
            }
        }
        this.marker.addOnly(elements);
        this.marker.mark();
    };
    AppStore.prototype.dispose = function () {
        this.scroll.dispose();
        this.menu.dispose();
        this.disposer();
    };
    /**
     * serializes store
     * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
     */
    // TODO:
    AppStore.prototype.toJS = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {
                            menu: {
                                activeItemIdx: this.menu.activeItemIdx,
                            },
                            spec: {
                                url: this.spec.parser.specUrl,
                                data: this.spec.parser.spec,
                            }
                        };
                        return [4 /*yield*/, this.search.toJS()];
                    case 1: return [2 /*return*/, (_a.searchIndex = _b.sent(),
                            _a.options = this.rawOptions,
                            _a)];
                }
            });
        });
    };
    return AppStore;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/AppStore.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/AppStore.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/ClipboardService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipboardService; });
var isSupported = typeof document !== 'undefined' &&
    document.queryCommandSupported &&
    document.queryCommandSupported('copy');
var ClipboardService = /** @class */ (function () {
    function ClipboardService() {
    }
    ClipboardService.isSupported = function () {
        return isSupported;
    };
    ClipboardService.selectElement = function (element) {
        var range;
        var selection;
        if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        }
        else if (document.createRange && window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    ClipboardService.deselect = function () {
        if (document.selection) {
            document.selection.empty();
        }
        else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    };
    ClipboardService.copySelected = function () {
        var result;
        try {
            result = document.execCommand('copy');
        }
        catch (err) {
            result = false;
        }
        return result;
    };
    ClipboardService.copyElement = function (element) {
        ClipboardService.selectElement(element);
        var res = ClipboardService.copySelected();
        if (res) {
            ClipboardService.deselect();
        }
        return res;
    };
    ClipboardService.copyCustom = function (text) {
        var textArea = document.createElement('textarea');
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        // We don't need padding, reducing the size if it does flash render.
        textArea.style.padding = '0';
        // Clean up any borders.
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        // Avoid flash of white box if rendered for any reason.
        textArea.style.background = 'transparent';
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        var res = ClipboardService.copySelected();
        document.body.removeChild(textArea);
        return res;
    };
    return ClipboardService;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/ClipboardService.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/ClipboardService.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/HistoryService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decko__ = __webpack_require__("decko");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_eventemitter3__ = __webpack_require__("eventemitter3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_eventemitter3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils___ = __webpack_require__("./src/utils/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EVENT = 'hashchange';
function isSameHash(a, b) {
    return a === b || '#' + a === b || a === '#' + b;
}
var IntHistoryService = /** @class */ (function () {
    function IntHistoryService() {
        var _this = this;
        this.causedHashChange = false;
        this.emit = function () {
            if (_this.causedHashChange) {
                _this.causedHashChange = false;
                return;
            }
            _this._emiter.emit(EVENT, _this.hash);
        };
        this._emiter = new __WEBPACK_IMPORTED_MODULE_1_eventemitter3__["EventEmitter"]();
        this.bind();
    }
    Object.defineProperty(IntHistoryService.prototype, "hash", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__utils___["q" /* isBrowser */] ? window.location.hash : '';
        },
        enumerable: true,
        configurable: true
    });
    IntHistoryService.prototype.subscribe = function (cb) {
        var emmiter = this._emiter.addListener(EVENT, cb);
        return function () { return emmiter.removeListener(EVENT, cb); };
    };
    IntHistoryService.prototype.bind = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__utils___["q" /* isBrowser */]) {
            window.addEventListener('hashchange', this.emit, false);
        }
    };
    IntHistoryService.prototype.dispose = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__utils___["q" /* isBrowser */]) {
            window.removeEventListener('hashchange', this.emit);
        }
        this.causedHashChange = false;
    };
    IntHistoryService.prototype.update = function (hash, rewriteHistory) {
        if (rewriteHistory === void 0) { rewriteHistory = false; }
        if (hash == null || isSameHash(hash, this.hash)) {
            return;
        }
        if (rewriteHistory) {
            if (__WEBPACK_IMPORTED_MODULE_2__utils___["q" /* isBrowser */]) {
                window.history.replaceState(null, '', window.location.href.split('#')[0] + '#' + hash);
            }
            return;
        }
        this.causedHashChange = true;
        if (__WEBPACK_IMPORTED_MODULE_2__utils___["q" /* isBrowser */]) {
            window.location.hash = hash;
        }
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_decko__["bind"],
        __WEBPACK_IMPORTED_MODULE_0_decko__["debounce"]
    ], IntHistoryService.prototype, "update", null);
    return IntHistoryService;
}());
var HistoryService = new IntHistoryService();
if (false) {
    module.hot.dispose(function () {
        HistoryService.dispose();
    });
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/HistoryService.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/HistoryService.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/MarkdownRenderer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENT_REGEXP; });
/* harmony export (immutable) */ __webpack_exports__["c"] = buildComponentComment;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MarkdownRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__("marked");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MenuStore__ = __webpack_require__("./src/services/MenuStore.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var renderer = new __WEBPACK_IMPORTED_MODULE_0_marked__["Renderer"]();
__WEBPACK_IMPORTED_MODULE_0_marked__["setOptions"]({
    renderer: renderer,
    highlight: function (str, lang) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["m" /* highlight */])(str, lang);
    },
});
var COMPONENT_REGEXP = '^\\s*<!-- ReDoc-Inject:\\s+?{component}\\s+?-->\\s*$';
function buildComponentComment(name) {
    return "<!-- ReDoc-Inject: <" + name + "> -->";
}
var MarkdownRenderer = /** @class */ (function () {
    function MarkdownRenderer() {
        var _this = this;
        this.headings = [];
        this.headingRule = function (text, level, raw) {
            if (level === 1) {
                _this.currentTopHeading = _this.saveHeading(text);
                var id = _this.currentTopHeading.id;
                return ("<a name=\"" + id + "\"></a>" +
                    ("<h" + level + " " + __WEBPACK_IMPORTED_MODULE_3__MenuStore__["b" /* SECTION_ATTR */] + "=\"" + id + "\" id=\"" + id + "\">") +
                    (text + "<a class=\"share-link\" href=\"#" + id + "\"></a></h" + level + ">"));
            }
            else if (level === 2) {
                var id = _this.saveHeading(text, _this.currentTopHeading && _this.currentTopHeading.items).id;
                return ("<a name=\"" + id + "\"></a>" +
                    ("<h" + level + " " + __WEBPACK_IMPORTED_MODULE_3__MenuStore__["b" /* SECTION_ATTR */] + "=\"" + id + "\" id=\"" + id + "\">") +
                    (text + "<a class=\"share-link\" href=\"#" + id + "\"></a></h" + level + ">"));
            }
            else {
                return _this.originalHeadingRule(text, level, raw);
            }
        };
        this.headingEnhanceRenderer = new __WEBPACK_IMPORTED_MODULE_0_marked__["Renderer"]();
        this.originalHeadingRule = this.headingEnhanceRenderer.heading.bind(this.headingEnhanceRenderer);
        this.headingEnhanceRenderer.heading = this.headingRule;
    }
    MarkdownRenderer.prototype.saveHeading = function (name, container) {
        if (container === void 0) { container = this.headings; }
        var item = {
            id: 'section' + '/' + __WEBPACK_IMPORTED_MODULE_1_slugify___default()(name),
            name: name,
            items: [],
        };
        container.push(item);
        return item;
    };
    MarkdownRenderer.prototype.flattenHeadings = function (container) {
        if (container === undefined) {
            return [];
        }
        var res = [];
        for (var _i = 0, container_1 = container; _i < container_1.length; _i++) {
            var heading = container_1[_i];
            res.push(heading);
            res.push.apply(res, this.flattenHeadings(heading.items));
        }
        return res;
    };
    MarkdownRenderer.prototype.attachHeadingsDescriptions = function (rawText) {
        var buildRegexp = function (heading) {
            return new RegExp("<h\\d " + __WEBPACK_IMPORTED_MODULE_3__MenuStore__["b" /* SECTION_ATTR */] + "=\"" + heading.id + "\" id=\"" + heading.id + "\">");
        };
        var flatHeadings = this.flattenHeadings(this.headings);
        if (flatHeadings.length < 1) {
            return;
        }
        var prevHeading = flatHeadings[0];
        var prevPos = rawText.search(buildRegexp(prevHeading));
        for (var i = 1; i < flatHeadings.length; i++) {
            var heading = flatHeadings[i];
            var currentPos = rawText.substr(prevPos + 1).search(buildRegexp(heading)) + prevPos + 1;
            prevHeading.description = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["n" /* html2Str */])(rawText.substring(prevPos, currentPos));
            prevHeading = heading;
            prevPos = currentPos;
        }
        prevHeading.description = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["n" /* html2Str */])(rawText.substring(prevPos));
    };
    MarkdownRenderer.prototype.renderMd = function (rawText, raw) {
        if (raw === void 0) { raw = true; }
        var opts = raw ? undefined : { renderer: this.headingEnhanceRenderer };
        var res = __WEBPACK_IMPORTED_MODULE_0_marked__(rawText.toString(), opts);
        return res;
    };
    MarkdownRenderer.prototype.extractHeadings = function (rawText) {
        var text = this.renderMd(rawText, false);
        this.attachHeadingsDescriptions(text);
        var res = this.headings;
        this.headings = [];
        return res;
    };
    MarkdownRenderer.prototype.renderMdWithComponents = function (rawText, components, raw) {
        if (raw === void 0) { raw = true; }
        var componentDefs = [];
        var anyCompRegexp = new RegExp(COMPONENT_REGEXP.replace('{component}', '(.*?)'), 'gmi');
        var match = anyCompRegexp.exec(rawText);
        while (match) {
            componentDefs.push(match[1]);
            match = anyCompRegexp.exec(rawText);
        }
        var splitCompRegexp = new RegExp(COMPONENT_REGEXP.replace('{component}', '.*?'), 'mi');
        var htmlParts = rawText.split(splitCompRegexp);
        var res = [];
        for (var i = 0; i < htmlParts.length; i++) {
            var htmlPart = htmlParts[i];
            if (htmlPart) {
                res.push(this.renderMd(htmlPart, raw));
            }
            if (componentDefs[i]) {
                var _a = parseComponent(componentDefs[i]), componentName = _a.componentName, attrs = _a.attrs;
                if (!componentName) {
                    continue;
                }
                res.push(__assign({}, components[componentName], { attrs: attrs }));
            }
        }
        return res;
    };
    return MarkdownRenderer;
}());

function parseComponent(htmlTag) {
    var match = /<([\w_-]+).*?>/.exec(htmlTag);
    if (match === null || match.length <= 1) {
        return { componentName: undefined, attrs: {} };
    }
    var componentName = match[1];
    return {
        componentName: componentName,
        attrs: {},
    };
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/MarkdownRenderer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/MarkdownRenderer.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/MarkerService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mark_js__ = __webpack_require__("mark.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mark_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mark_js__);

var MarkerService = /** @class */ (function () {
    function MarkerService() {
        this.map = new Map();
        this.prevTerm = '';
    }
    MarkerService.prototype.add = function (el) {
        this.map.set(el, new __WEBPACK_IMPORTED_MODULE_0_mark_js__(el));
    };
    MarkerService.prototype.delete = function (el) {
        this.map.delete(el);
    };
    MarkerService.prototype.addOnly = function (elements) {
        var _this = this;
        this.map.forEach(function (inst, elem) {
            if (elements.indexOf(elem) === -1) {
                inst.unmark();
                _this.map.delete(elem);
            }
        });
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var el = elements_1[_i];
            if (!this.map.has(el)) {
                this.map.set(el, new __WEBPACK_IMPORTED_MODULE_0_mark_js__(el));
            }
        }
    };
    MarkerService.prototype.clearAll = function () {
        this.unmark();
        this.map.clear();
    };
    MarkerService.prototype.mark = function (term) {
        var _this = this;
        if (!term && !this.prevTerm) {
            return;
        }
        this.map.forEach(function (val) {
            val.unmark();
            val.mark(term || _this.prevTerm);
        });
        this.prevTerm = term || this.prevTerm || '';
    };
    MarkerService.prototype.unmark = function () {
        this.map.forEach(function (val) { return val.unmark(); });
        this.prevTerm = '';
    };
    return MarkerService;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/MarkerService.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/MarkerService.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/MenuBuilder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GROUP_DEPTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MarkdownRenderer__ = __webpack_require__("./src/services/MarkdownRenderer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("./src/services/models/index.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var GROUP_DEPTH = 0;
var MenuBuilder = /** @class */ (function () {
    function MenuBuilder() {
    }
    /**
     * Builds page content structure based on tags
     */
    MenuBuilder.buildStructure = function (parser, options) {
        var spec = parser.spec;
        var items = [];
        var tagsMap = MenuBuilder.getTagsWithOperations(spec);
        items.push.apply(items, MenuBuilder.addMarkdownItems(spec.info.description || ''));
        if (spec['x-tagGroups']) {
            items.push.apply(items, MenuBuilder.getTagGroupsItems(parser, undefined, spec['x-tagGroups'], tagsMap, options));
        }
        else {
            items.push.apply(items, MenuBuilder.getTagsItems(parser, tagsMap, undefined, undefined, options));
        }
        return items;
    };
    /**
     * extracts items from markdown description
     * @param description - markdown source
     */
    MenuBuilder.addMarkdownItems = function (description) {
        var renderer = new __WEBPACK_IMPORTED_MODULE_1__MarkdownRenderer__["b" /* MarkdownRenderer */]();
        var headings = renderer.extractHeadings(description || '');
        var mapHeadingsDeep = function (parent, items, depth) {
            if (depth === void 0) { depth = 1; }
            return items.map(function (heading) {
                var group = new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* GroupModel */]('section', heading, parent);
                group.depth = depth;
                if (heading.items) {
                    group.items = mapHeadingsDeep(group, group.items, depth + 1);
                }
                return group;
            });
        };
        return mapHeadingsDeep(undefined, headings);
    };
    /**
     * Returns array of OperationsGroup items for the tag groups (x-tagGroups vendor extenstion)
     * @param tags value of `x-tagGroups` vendor extension
     */
    MenuBuilder.getTagGroupsItems = function (parser, parent, groups, tags, options) {
        var res = [];
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            var item = new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* GroupModel */]('group', group, parent);
            item.depth = GROUP_DEPTH;
            item.items = MenuBuilder.getTagsItems(parser, tags, item, group, options);
            res.push(item);
        }
        // TODO checkAllTagsUsedInGroups
        return res;
    };
    /**
     * Returns array of OperationsGroup items for the tags of the group or for all tags
     * @param tagsMap tags info returned from `getTagsWithOperations`
     * @param parent parent item
     * @param group group which this tag belongs to. if not provided gets all tags
     */
    MenuBuilder.getTagsItems = function (parser, tagsMap, parent, group, options) {
        var tagNames;
        if (group === undefined) {
            tagNames = Object.keys(tagsMap); // all tags
        }
        else {
            tagNames = group.tags;
        }
        var tags = tagNames.map(function (tagName) {
            if (!tagsMap[tagName]) {
                console.warn("Non-existing tag \"" + tagName + "\" is added to the group \"" + group.name + "\"");
                return null;
            }
            tagsMap[tagName].used = true;
            return tagsMap[tagName];
        });
        var res = [];
        for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
            var tag = tags_1[_i];
            if (!tag) {
                continue;
            }
            var item = new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* GroupModel */]('tag', tag, parent);
            item.depth = GROUP_DEPTH + 1;
            item.items = this.getOperationsItems(parser, item, tag, item.depth + 1, options);
            // don't put empty tag into content, instead put its operations
            if (tag.name === '') {
                var items = this.getOperationsItems(parser, undefined, tag, item.depth + 1, options);
                res.push.apply(res, items);
                continue;
            }
            res.push(item);
        }
        return res;
    };
    /**
     * Returns array of Operation items for the tag
     * @param parent parent OperationsGroup
     * @param tag tag info returned from `getTagsWithOperations`
     * @param depth items depth
     */
    MenuBuilder.getOperationsItems = function (parser, parent, tag, depth, options) {
        if (tag.operations.length === 0) {
            return [];
        }
        var res = [];
        for (var _i = 0, _a = tag.operations; _i < _a.length; _i++) {
            var operationInfo = _a[_i];
            var operation = new __WEBPACK_IMPORTED_MODULE_2__models__["g" /* OperationModel */](parser, operationInfo, parent, options);
            operation.depth = depth;
            res.push(operation);
        }
        return res;
    };
    /**
     * collects tags and maps each tag to list of operations belonging to this tag
     */
    MenuBuilder.getTagsWithOperations = function (spec) {
        var tags = {};
        for (var _i = 0, _a = spec.tags || []; _i < _a.length; _i++) {
            var tag = _a[_i];
            tags[tag.name] = __assign({}, tag, { operations: [] });
        }
        var paths = spec.paths;
        for (var _b = 0, _c = Object.keys(paths); _b < _c.length; _b++) {
            var pathName = _c[_b];
            var path = paths[pathName];
            var operations = Object.keys(path).filter(__WEBPACK_IMPORTED_MODULE_0__utils__["u" /* isOperationName */]);
            for (var _d = 0, operations_1 = operations; _d < operations_1.length; _d++) {
                var operationName = operations_1[_d];
                var operationInfo = path[operationName];
                var operationTags = operationInfo.tags;
                if (!operationTags || !operationTags.length) {
                    // empty tag
                    operationTags = [''];
                }
                var operationPointer = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* JsonPointer */].compile(['paths', pathName, operationName]);
                for (var _e = 0, operationTags_1 = operationTags; _e < operationTags_1.length; _e++) {
                    var tagName = operationTags_1[_e];
                    var tag = tags[tagName];
                    if (tag === undefined) {
                        tag = {
                            name: tagName,
                            operations: [],
                        };
                        tags[tagName] = tag;
                    }
                    if (tag['x-traitTag']) {
                        continue;
                    }
                    tag.operations.push(__assign({}, operationInfo, { _$ref: operationPointer, httpVerb: operationName, pathParameters: path.parameters || [] }));
                }
            }
        }
        return tags;
    };
    return MenuBuilder;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/MenuBuilder.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/MenuBuilder.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/MenuStore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SECTION_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__("./src/utils/dom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HistoryService__ = __webpack_require__("./src/services/HistoryService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MenuBuilder__ = __webpack_require__("./src/services/MenuBuilder.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SECTION_ATTR = 'data-section-id';
/**
 * Stores all side-menu related information
 */
var MenuStore = /** @class */ (function () {
    /**
     *
     * @param spec [SpecStore](#SpecStore) which contains page content structure
     * @param _scrollService scroll service instance used by this menu
     */
    function MenuStore(spec, _scrollService) {
        var _this = this;
        this.spec = spec;
        this._scrollService = _scrollService;
        /**
         * active item absolute index (when flattened). -1 means nothing is selected
         */
        this.activeItemIdx = -1;
        /**
         * whether sidebar with menu is opened or not
         */
        this.sideBarOpened = false;
        this.getItemById = function (id) {
            return _this.flatItems.find(function (item) { return item.id === id; });
        };
        this._unsubscribe = _scrollService.subscribe(this.updateOnScroll);
        this._hashUnsubscribe = __WEBPACK_IMPORTED_MODULE_2__HistoryService__["a" /* HistoryService */].subscribe(this.updateOnHash);
    }
    MenuStore.prototype.toggleSidebar = function () {
        this.sideBarOpened = this.sideBarOpened ? false : true;
    };
    MenuStore.prototype.closeSidebar = function () {
        this.sideBarOpened = false;
    };
    Object.defineProperty(MenuStore.prototype, "items", {
        /**
         * top level menu items (not flattened)
         */
        get: function () {
            if (!this._items) {
                this._items = this.spec.operationGroups;
            }
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * update active items on scroll
     * @param isScrolledDown whether last scroll was downside
     */
    MenuStore.prototype.updateOnScroll = function (isScrolledDown) {
        var step = isScrolledDown ? 1 : -1;
        var itemIdx = this.activeItemIdx;
        while (true) {
            if (itemIdx === -1 && !isScrolledDown) {
                break;
            }
            if (itemIdx >= this.flatItems.length - 1 && isScrolledDown) {
                break;
            }
            if (isScrolledDown) {
                var el = this.getElementAt(itemIdx + 1);
                if (this._scrollService.isElementBellow(el)) {
                    break;
                }
            }
            else {
                var el = this.getElementAt(itemIdx);
                if (this._scrollService.isElementAbove(el)) {
                    break;
                }
            }
            itemIdx += step;
        }
        this.activate(this.flatItems[itemIdx], true, true);
    };
    /**
     * update active items on hash change
     * @param hash current hash
     */
    MenuStore.prototype.updateOnHash = function (hash) {
        if (hash === void 0) { hash = __WEBPACK_IMPORTED_MODULE_2__HistoryService__["a" /* HistoryService */].hash; }
        if (!hash) {
            return false;
        }
        var item;
        hash = hash.substr(1);
        var namespace = hash.split('/')[0];
        var ptr = decodeURIComponent(hash.substr(namespace.length + 1));
        if (namespace === 'section' || namespace === 'tag') {
            var sectionId = ptr.split('/')[0];
            ptr = ptr.substr(sectionId.length);
            var searchId_1;
            if (namespace === 'section') {
                searchId_1 = hash;
            }
            else {
                searchId_1 = ptr || namespace + '/' + sectionId;
            }
            item = this.flatItems.find(function (i) { return i.id === searchId_1; });
            if (item === undefined) {
                this._scrollService.scrollIntoViewBySelector("[" + SECTION_ATTR + "=\"" + searchId_1 + "\"]");
                return false;
            }
        }
        else if (namespace === 'operation') {
            item = this.flatItems.find(function (i) {
                return i.operationId === ptr;
            });
        }
        if (item) {
            this.activateAndScroll(item, false);
        }
        return item !== undefined;
    };
    /**
     * get section/operation DOM Node related to the item or null if it doesn't exist
     * @param idx item absolute index
     */
    MenuStore.prototype.getElementAt = function (idx) {
        var item = this.flatItems[idx];
        return (item && Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["c" /* querySelector */])("[" + SECTION_ATTR + "=\"" + item.id + "\"]")) || null;
    };
    Object.defineProperty(MenuStore.prototype, "activeItem", {
        /**
         * current active item
         */
        get: function () {
            return this.flatItems[this.activeItemIdx] || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuStore.prototype, "flatItems", {
        /**
         * flattened items as they appear in the tree depth-first (top to bottom in the view)
         */
        get: function () {
            var flatItems = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* flattenByProp */])(this._items || [], 'items');
            flatItems.forEach(function (item, idx) { return (item.absoluteIdx = idx); });
            return flatItems;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * activate menu item
     * @param item item to activate
     * @param updateHash [true] whether to update location hash
     * @param rewriteHistory [false] whether to rewrite browser history (do not create new enrty)
     */
    MenuStore.prototype.activate = function (item, updateHash, rewriteHistory) {
        if (updateHash === void 0) { updateHash = true; }
        if (rewriteHistory === void 0) { rewriteHistory = false; }
        if ((this.activeItem && this.activeItem.id) === (item && item.id)) {
            return;
        }
        this.deactivate(this.activeItem);
        if (!item) {
            __WEBPACK_IMPORTED_MODULE_2__HistoryService__["a" /* HistoryService */].update('', rewriteHistory);
            return;
        }
        // do not allow activating group items
        // TODO: control over options
        if (item.depth <= __WEBPACK_IMPORTED_MODULE_4__MenuBuilder__["a" /* GROUP_DEPTH */]) {
            return;
        }
        this.activeItemIdx = item.absoluteIdx;
        if (updateHash) {
            __WEBPACK_IMPORTED_MODULE_2__HistoryService__["a" /* HistoryService */].update(item.getHash(), rewriteHistory);
        }
        while (item !== undefined) {
            item.activate();
            item = item.parent;
        }
    };
    /**
     * makes item and all the parents not active
     * @param item item to deactivate
     */
    MenuStore.prototype.deactivate = function (item) {
        while (item !== undefined) {
            item.deactivate();
            item = item.parent;
        }
    };
    /**
     * activate menu item and scroll to it
     * @see MenuStore.activate
     */
    MenuStore.prototype.activateAndScroll = function (item, updateHash, rewriteHistory) {
        this.activate(item, updateHash, rewriteHistory);
        this.scrollToActive();
        if (!item || !item.items.length) {
            this.closeSidebar();
        }
    };
    /**
     * scrolls to active section
     */
    MenuStore.prototype.scrollToActive = function () {
        this._scrollService.scrollIntoView(this.getElementAt(this.activeItemIdx));
    };
    MenuStore.prototype.dispose = function () {
        this._unsubscribe();
        this._hashUnsubscribe();
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], MenuStore.prototype, "activeItemIdx", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], MenuStore.prototype, "sideBarOpened", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], MenuStore.prototype, "toggleSidebar", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], MenuStore.prototype, "closeSidebar", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], MenuStore.prototype, "items", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound
    ], MenuStore.prototype, "updateOnScroll", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound
    ], MenuStore.prototype, "updateOnHash", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], MenuStore.prototype, "flatItems", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], MenuStore.prototype, "activate", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound
    ], MenuStore.prototype, "activateAndScroll", null);
    return MenuStore;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/MenuStore.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/MenuStore.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/OpenAPIParser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenAPIParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils___ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_JsonPointer__ = __webpack_require__("./src/utils/JsonPointer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_openapi__ = __webpack_require__("./src/utils/openapi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MarkdownRenderer__ = __webpack_require__("./src/services/MarkdownRenderer.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Helper class to keep track of visited references to avoid
 * endless recursion because of circular refs
 */
var RefCounter = /** @class */ (function () {
    function RefCounter() {
        this._counter = {};
    }
    RefCounter.prototype.reset = function () {
        this._counter = {};
    };
    RefCounter.prototype.visit = function (ref) {
        this._counter[ref] = this._counter[ref] ? this._counter[ref] + 1 : 1;
    };
    RefCounter.prototype.exit = function (ref) {
        this._counter[ref] = this._counter[ref] && this._counter[ref] - 1;
    };
    RefCounter.prototype.visited = function (ref) {
        return !!this._counter[ref];
    };
    return RefCounter;
}());
/**
 * Loads and keeps spec. Provides raw spec operations
 */
var OpenAPIParser = /** @class */ (function () {
    function OpenAPIParser(spec, specUrl, options) {
        var _this = this;
        this.options = options;
        this._refCounter = new RefCounter();
        /**
         * get spec part by JsonPointer ($ref)
         */
        this.byRef = function (ref) {
            var res;
            if (!_this.spec) {
                return;
            }
            if (ref.charAt(0) !== '#') {
                ref = '#' + ref;
            }
            ref = decodeURIComponent(ref);
            try {
                res = __WEBPACK_IMPORTED_MODULE_3__utils_JsonPointer__["a" /* JsonPointer */].get(_this.spec, ref);
            }
            catch (e) {
                // do nothing
            }
            return res || {};
        };
        this.validate(spec);
        this.preprocess(spec);
        this.spec = spec;
        var href = __WEBPACK_IMPORTED_MODULE_2__utils___["q" /* isBrowser */] ? window.location.href : '';
        if (typeof specUrl === 'string') {
            this.specUrl = Object(__WEBPACK_IMPORTED_MODULE_1_url__["resolve"])(href, specUrl);
        }
        else {
            this.specUrl = href;
        }
    }
    OpenAPIParser.prototype.validate = function (spec) {
        if (spec.openapi === undefined) {
            throw new Error('Document must be valid OpenAPI 3.0.0 definition');
        }
    };
    OpenAPIParser.prototype.preprocess = function (spec) {
        if (!this.options.noAutoAuth &&
            spec.info &&
            spec.components &&
            spec.components.securitySchemes) {
            // Automatically inject Authentication section with SecurityDefinitions component
            var description = spec.info.description || '';
            var securityRegexp = new RegExp(__WEBPACK_IMPORTED_MODULE_5__MarkdownRenderer__["a" /* COMPONENT_REGEXP */].replace('{component}', '<security-definitions>'), 'gmi');
            if (!securityRegexp.test(description)) {
                var comment = Object(__WEBPACK_IMPORTED_MODULE_5__MarkdownRenderer__["c" /* buildComponentComment */])('security-definitions');
                spec.info.description = Object(__WEBPACK_IMPORTED_MODULE_2__utils___["d" /* appendToMdHeading */])(description, 'Authentication', comment);
            }
        }
    };
    /**
     * checks if the objectt is OpenAPI reference (containts $ref property)
     */
    OpenAPIParser.prototype.isRef = function (obj) {
        if (!obj) {
            return false;
        }
        return obj.$ref !== undefined && obj.$ref !== null;
    };
    /**
     * resets visited enpoints. should be run after
     */
    OpenAPIParser.prototype.resetVisited = function () {
        if (true) {
            // check in dev mode
            for (var k in this._refCounter._counter) {
                if (this._refCounter._counter[k] > 0) {
                    console.warn('Not exited reference: ' + k);
                }
            }
        }
        this._refCounter = new RefCounter();
    };
    OpenAPIParser.prototype.exitRef = function (ref) {
        if (!this.isRef(ref)) {
            return;
        }
        this._refCounter.exit(ref.$ref);
    };
    /**
     * Resolve given reference object or return as is if it is not a reference
     * @param obj object to dereference
     * @param forceCircular whether to dereference even if it is cirular ref
     */
    OpenAPIParser.prototype.deref = function (obj, forceCircular) {
        if (forceCircular === void 0) { forceCircular = false; }
        if (this.isRef(obj)) {
            var resolved = this.byRef(obj.$ref);
            var visited = this._refCounter.visited(obj.$ref);
            this._refCounter.visit(obj.$ref);
            if (visited && !forceCircular) {
                // circular reference detected
                // tslint:disable-next-line
                return Object.assign({}, resolved, { 'x-circular-ref': true });
            }
            // deref again in case one more $ref is here
            if (this.isRef(resolved)) {
                var res = this.deref(resolved);
                this.exitRef(resolved);
                return res;
            }
            return resolved;
        }
        return obj;
    };
    /**
     * Merge allOf contsraints.
     * @param schema schema with allOF
     * @param $ref pointer of the schema
     * @param forceCircular whether to dereference children even if it is a cirular ref
     */
    OpenAPIParser.prototype.mergeAllOf = function (schema, $ref, forceCircular) {
        var _this = this;
        if (forceCircular === void 0) { forceCircular = false; }
        if (schema.allOf === undefined) {
            return schema;
        }
        var receiver = __assign({}, schema, { allOf: undefined, parentRefs: [] });
        var allOfSchemas = schema.allOf.map(function (subSchema) {
            var resolved = _this.deref(subSchema, forceCircular);
            var subRef = subSchema.$ref || undefined;
            var subMerged = _this.mergeAllOf(resolved, subRef, forceCircular);
            (_a = receiver.parentRefs).push.apply(_a, (subMerged.parentRefs || []));
            return {
                $ref: subRef,
                schema: subMerged,
            };
            var _a;
        });
        for (var _i = 0, allOfSchemas_1 = allOfSchemas; _i < allOfSchemas_1.length; _i++) {
            var _a = allOfSchemas_1[_i], subSchemaRef = _a.$ref, subSchema = _a.schema;
            if (receiver.type !== subSchema.type &&
                receiver.type !== undefined &&
                subSchema.type !== undefined) {
                throw new Error("Uncopatible types in allOf at \"" + $ref + "\"");
            }
            if (subSchema.type !== undefined) {
                receiver.type = subSchema.type;
            }
            if (subSchema.properties !== undefined) {
                receiver.properties = receiver.properties || {};
                for (var prop in subSchema.properties) {
                    if (!receiver.properties[prop]) {
                        receiver.properties[prop] = subSchema.properties[prop];
                    }
                    else {
                        // merge inner properties
                        receiver.properties[prop] = this.mergeAllOf({ allOf: [receiver.properties[prop], subSchema.properties[prop]] }, $ref + '/properties/' + prop);
                    }
                }
            }
            if (subSchema.required !== undefined) {
                receiver.required = (receiver.required || []).concat(subSchema.required);
            }
            // merge rest of constraints
            // TODO: do more intelegent merge
            receiver = __assign({}, subSchema, receiver);
            if (subSchemaRef) {
                receiver.parentRefs.push(subSchemaRef);
                if (receiver.title === undefined && Object(__WEBPACK_IMPORTED_MODULE_4__utils_openapi__["g" /* isNamedDefinition */])(subSchemaRef)) {
                    receiver.title = __WEBPACK_IMPORTED_MODULE_3__utils_JsonPointer__["a" /* JsonPointer */].baseName(subSchemaRef);
                }
            }
        }
        // name of definition or title on top level
        if (schema.title === undefined && Object(__WEBPACK_IMPORTED_MODULE_4__utils_openapi__["g" /* isNamedDefinition */])($ref)) {
            receiver.title = __WEBPACK_IMPORTED_MODULE_3__utils_JsonPointer__["a" /* JsonPointer */].baseName($ref);
        }
        return receiver;
    };
    /**
     * Find all derived definitions among #/components/schemas from any of $refs
     * returns map of definition pointer to definition name
     * @param $refs array of references to find derived from
     */
    OpenAPIParser.prototype.findDerived = function ($refs) {
        var res = {};
        var schemas = (this.spec.components && this.spec.components.schemas) || {};
        for (var defName in schemas) {
            var def = this.deref(schemas[defName]);
            if (def.allOf !== undefined &&
                def.allOf.find(function (obj) { return obj.$ref !== undefined && $refs.indexOf(obj.$ref) > -1; })) {
                res['#/components/schemas/' + defName] = defName;
            }
        }
        return res;
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], OpenAPIParser.prototype, "specUrl", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].ref
    ], OpenAPIParser.prototype, "spec", void 0);
    return OpenAPIParser;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/OpenAPIParser.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/OpenAPIParser.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/RedocNormalizedOptions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedocNormalizedOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__theme__ = __webpack_require__("./src/theme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__("./src/utils/dom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_helpers__ = __webpack_require__("./src/utils/helpers.ts");



function argValueToBoolean(val) {
    if (val === undefined) {
        return false;
    }
    if (typeof val === 'string') {
        return true;
    }
    return val;
}
var RedocNormalizedOptions = /** @class */ (function () {
    function RedocNormalizedOptions(raw) {
        this.theme = Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["g" /* mergeObjects */])({}, __WEBPACK_IMPORTED_MODULE_0__theme__["a" /* default */], raw.theme || {});
        this.scrollYOffset = RedocNormalizedOptions.normalizeScrollYOffset(raw.scrollYOffset);
        this.hideHostname = RedocNormalizedOptions.normalizeHideHostname(raw.hideHostname);
        this.expandResponses = RedocNormalizedOptions.normalizeExpandResponses(raw.expandResponses);
        this.requiredPropsFirst = argValueToBoolean(raw.requiredPropsFirst);
        this.noAutoAuth = argValueToBoolean(raw.noAutoAuth);
        this.nativeScrollbars = argValueToBoolean(raw.nativeScrollbars);
        this.pathInMiddlePanel = argValueToBoolean(raw.pathInMiddlePanel);
        this.untrustedSpec = argValueToBoolean(raw.untrustedSpec);
        this.hideDownloadButton = argValueToBoolean(raw.hideDownloadButton);
    }
    RedocNormalizedOptions.normalizeExpandResponses = function (value) {
        if (value === 'all') {
            return 'all';
        }
        if (typeof value === 'string') {
            var res_1 = {};
            value.split(',').forEach(function (code) {
                res_1[code.trim()] = true;
            });
            return res_1;
        }
        else if (value !== undefined) {
            console.warn("expandResponses must be a string but received value \"" + value + "\" of type " + typeof value);
        }
        return {};
    };
    RedocNormalizedOptions.normalizeHideHostname = function (value) {
        return !!value;
    };
    RedocNormalizedOptions.normalizeScrollYOffset = function (value) {
        // just number is not valid selector and leads to crash so checking if isNumeric here
        if (typeof value === 'string' && !Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["d" /* isNumeric */])(value)) {
            var el = Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["c" /* querySelector */])(value);
            if (!el) {
                console.warn('scrollYOffset value is a selector to non-existing element. Using offset 0 by default');
            }
            var bottom_1 = (el && el.getBoundingClientRect().bottom) || 0;
            return function () { return bottom_1; };
        }
        else if (typeof value === 'number' || Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["d" /* isNumeric */])(value)) {
            return function () { return (typeof value === 'number' ? value : parseFloat(value)); };
        }
        else if (typeof value === 'function') {
            return function () {
                var res = value();
                if (typeof res !== 'number') {
                    console.warn("scrollYOffset should return number but returned value \"" + res + "\" of type " + typeof res);
                }
                return res;
            };
        }
        else if (value !== undefined) {
            console.warn('Wrong value for scrollYOffset ReDoc option: should be string, number or function');
        }
        return function () { return 0; };
    };
    return RedocNormalizedOptions;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/RedocNormalizedOptions.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/RedocNormalizedOptions.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/ScrollService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decko__ = __webpack_require__("decko");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_decko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_eventemitter3__ = __webpack_require__("eventemitter3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_eventemitter3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./src/utils/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EVENT = 'scroll';
var ScrollService = /** @class */ (function () {
    function ScrollService(options) {
        this.options = options;
        this._prevOffsetY = 0;
        this._scrollParent = __WEBPACK_IMPORTED_MODULE_2__utils__["q" /* isBrowser */] ? window : undefined;
        this._emiter = new __WEBPACK_IMPORTED_MODULE_1_eventemitter3__();
        this.bind();
    }
    ScrollService.prototype.bind = function () {
        this._prevOffsetY = this.scrollY();
        if (this._scrollParent) {
            this._scrollParent.addEventListener('scroll', this.handleScroll);
        }
    };
    ScrollService.prototype.dispose = function () {
        if (this._scrollParent) {
            this._scrollParent.removeEventListener('scroll', this.handleScroll);
        }
        this._emiter.removeAllListeners(EVENT);
    };
    ScrollService.prototype.scrollY = function () {
        if (typeof HTMLElement !== 'undefined' && this._scrollParent instanceof HTMLElement) {
            return this._scrollParent.scrollTop;
        }
        else if (this._scrollParent !== undefined) {
            return this._scrollParent.pageYOffset;
        }
        else {
            return 0;
        }
    };
    ScrollService.prototype.isElementBellow = function (el) {
        if (el === null) {
            return;
        }
        return el.getBoundingClientRect().top > this.options.scrollYOffset();
    };
    ScrollService.prototype.isElementAbove = function (el) {
        if (el === null) {
            return;
        }
        return Math.trunc(el.getBoundingClientRect().top) <= this.options.scrollYOffset();
    };
    ScrollService.prototype.subscribe = function (cb) {
        var emmiter = this._emiter.addListener(EVENT, cb);
        return function () { return emmiter.removeListener(EVENT, cb); };
    };
    ScrollService.prototype.scrollIntoView = function (element) {
        if (element === null) {
            return;
        }
        element.scrollIntoView();
        if (this._scrollParent && this._scrollParent.scrollBy) {
            this._scrollParent.scrollBy(0, -this.options.scrollYOffset());
        }
    };
    ScrollService.prototype.scrollIntoViewBySelector = function (selector) {
        var element = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["C" /* querySelector */])(selector);
        this.scrollIntoView(element);
    };
    ScrollService.prototype.handleScroll = function () {
        var scrollY = this.scrollY();
        var isScrolledDown = scrollY - this._prevOffsetY > 0;
        this._prevOffsetY = this.scrollY();
        this._emiter.emit(EVENT, isScrolledDown);
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_decko__["bind"],
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* Throttle */])(100)
    ], ScrollService.prototype, "handleScroll", null);
    return ScrollService;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/ScrollService.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/ScrollService.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/SearchStore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchStore; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var worker;
if (typeof URL !== 'undefined') {
    try {
        // tslint:disable-next-line
        worker = __webpack_require__("./node_modules/workerize-loader/dist/index.js?inline&fallback=false!./src/services/SearchWorker.worker.ts");
    }
    catch (e) {
        worker = __webpack_require__("./src/services/SearchWorker.worker.ts").default;
    }
}
else {
    worker = __webpack_require__("./src/services/SearchWorker.worker.ts").default;
}
var SearchStore = /** @class */ (function () {
    function SearchStore() {
        this.searchWorker = new worker();
    }
    SearchStore.prototype.indexItems = function (groups) {
        var _this = this;
        var recurse = function (items) {
            items.forEach(function (group) {
                if (group.type !== 'group') {
                    _this.add(group.name, group.description || '', group.id);
                }
                recurse(group.items);
            });
        };
        recurse(groups);
        this.searchWorker.done();
    };
    SearchStore.prototype.add = function (title, body, ref) {
        this.searchWorker.add(title, body, ref);
    };
    SearchStore.prototype.search = function (q) {
        return this.searchWorker.search(q);
    };
    SearchStore.prototype.toJS = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.searchWorker.toJS()];
            });
        });
    };
    SearchStore.prototype.load = function (state) {
        this.searchWorker.load(state);
    };
    return SearchStore;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/SearchStore.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/SearchStore.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/SearchWorker.worker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["done"] = done;
/* harmony export (immutable) */ __webpack_exports__["toJS"] = toJS;
/* harmony export (immutable) */ __webpack_exports__["load"] = load;
/* harmony export (immutable) */ __webpack_exports__["search"] = search;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lunr__ = __webpack_require__("lunr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lunr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lunr__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/* just for better typings */
var Worker = /** @class */ (function () {
    function Worker() {
        this.add = add;
        this.done = done;
        this.search = search;
        this.toJS = toJS;
        this.load = load;
    }
    return Worker;
}());
/* harmony default export */ __webpack_exports__["default"] = (Worker);
var store = {};
var resolveIndex;
var index = new Promise(function (resolve) {
    resolveIndex = resolve;
});
var builder = new __WEBPACK_IMPORTED_MODULE_0_lunr__["Builder"]();
builder.field('title');
builder.field('description');
builder.ref('id');
builder.pipeline.add(__WEBPACK_IMPORTED_MODULE_0_lunr__["trimmer"], __WEBPACK_IMPORTED_MODULE_0_lunr__["stopWordFilter"], __WEBPACK_IMPORTED_MODULE_0_lunr__["stemmer"]);
var expandTerm = function (term) { return '*' + __WEBPACK_IMPORTED_MODULE_0_lunr__["stemmer"](new __WEBPACK_IMPORTED_MODULE_0_lunr__["Token"](term, {})) + '*'; };
function add(title, description, id) {
    var item = { title: title, description: description, id: id };
    builder.add(item);
    store[id] = item;
}
function done() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            resolveIndex(builder.build());
            return [2 /*return*/];
        });
    });
}
function toJS() {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = {
                        store: store
                    };
                    return [4 /*yield*/, index];
                case 1: return [2 /*return*/, (_a.index = (_b.sent()).toJSON(),
                        _a)];
            }
        });
    });
}
function load(state) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            store = state.store;
            resolveIndex(__WEBPACK_IMPORTED_MODULE_0_lunr__["Index"].load(state.index));
            return [2 /*return*/];
        });
    });
}
function search(q) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (q.trim().length === 0) {
                        return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, index];
                case 1: return [2 /*return*/, (_a.sent())
                        .query(function (t) {
                        q
                            .trim()
                            .split(/\s+/)
                            .forEach(function (term) {
                            var exp = expandTerm(term);
                            t.term(exp, {});
                        });
                    })
                        .map(function (res) { return (__assign({}, store[res.ref], { score: res.score })); })];
            }
        });
    });
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/SearchWorker.worker.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/SearchWorker.worker.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/SpecStore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MenuBuilder__ = __webpack_require__("./src/services/MenuBuilder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ApiInfo__ = __webpack_require__("./src/services/models/ApiInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_SecuritySchemes__ = __webpack_require__("./src/services/models/SecuritySchemes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OpenAPIParser__ = __webpack_require__("./src/services/OpenAPIParser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { OpenAPIExternalDocumentation, OpenAPIInfo } from '../types';




/**
 * Store that containts all the specification related information in the form of tree
 */
var SpecStore = /** @class */ (function () {
    function SpecStore(spec, specUrl, options) {
        this.options = options;
        this.parser = new __WEBPACK_IMPORTED_MODULE_4__OpenAPIParser__["a" /* OpenAPIParser */](spec, specUrl, options);
    }
    Object.defineProperty(SpecStore.prototype, "info", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_2__models_ApiInfo__["a" /* ApiInfoModel */](this.parser, this.options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecStore.prototype, "externalDocs", {
        get: function () {
            return this.parser.spec.externalDocs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecStore.prototype, "operationGroups", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__MenuBuilder__["b" /* MenuBuilder */].buildStructure(this.parser, this.options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecStore.prototype, "securitySchemes", {
        get: function () {
            var schemes = this.parser.spec.components && this.parser.spec.components.securitySchemes;
            return schemes && new __WEBPACK_IMPORTED_MODULE_3__models_SecuritySchemes__["b" /* SecuritySchemesModel */](this.parser);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].ref
    ], SpecStore.prototype, "parser", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], SpecStore.prototype, "info", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], SpecStore.prototype, "externalDocs", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], SpecStore.prototype, "operationGroups", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], SpecStore.prototype, "securitySchemes", null);
    return SpecStore;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/SpecStore.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/SpecStore.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppStore__ = __webpack_require__("./src/services/AppStore.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__AppStore__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_0__AppStore__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OpenAPIParser__ = __webpack_require__("./src/services/OpenAPIParser.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_1__OpenAPIParser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MarkdownRenderer__ = __webpack_require__("./src/services/MarkdownRenderer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__MarkdownRenderer__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__MarkdownRenderer__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_2__MarkdownRenderer__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MenuStore__ = __webpack_require__("./src/services/MenuStore.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__MenuStore__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_3__MenuStore__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ScrollService__ = __webpack_require__("./src/services/ScrollService.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_4__ScrollService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SpecStore__ = __webpack_require__("./src/services/SpecStore.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_5__SpecStore__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ClipboardService__ = __webpack_require__("./src/services/ClipboardService.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__ClipboardService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HistoryService__ = __webpack_require__("./src/services/HistoryService.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__HistoryService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models__ = __webpack_require__("./src/services/models/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_8__models__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RedocNormalizedOptions__ = __webpack_require__("./src/services/RedocNormalizedOptions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_9__RedocNormalizedOptions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MenuBuilder__ = __webpack_require__("./src/services/MenuBuilder.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__MenuBuilder__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_10__MenuBuilder__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SearchStore__ = __webpack_require__("./src/services/SearchStore.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_11__SearchStore__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__MarkerService__ = __webpack_require__("./src/services/MarkerService.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_12__MarkerService__["a"]; });















 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/index.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/ApiInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiInfoModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___ = __webpack_require__("./src/utils/index.ts");

var ApiInfoModel = /** @class */ (function () {
    function ApiInfoModel(parser, options) {
        this.parser = parser;
        this.options = options;
        Object.assign(this, parser.spec.info);
    }
    Object.defineProperty(ApiInfoModel.prototype, "downloadLink", {
        get: function () {
            if (this.options.hideDownloadButton) {
                return undefined;
            }
            if (this.parser.specUrl) {
                return this.parser.specUrl;
            }
            if (__WEBPACK_IMPORTED_MODULE_0__utils___["q" /* isBrowser */] && window.Blob && window.URL) {
                var blob = new Blob([JSON.stringify(this.parser.spec, null, 2)], {
                    type: 'application/json',
                });
                return window.URL.createObjectURL(blob);
            }
            else if (!__WEBPACK_IMPORTED_MODULE_0__utils___["q" /* isBrowser */]) {
                return ('data:application/octet-stream;base64,' +
                    new Buffer(JSON.stringify(this.parser.spec, null, 2)).toString('base64'));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiInfoModel.prototype, "downloadFileName", {
        get: function () {
            if (!this.parser.specUrl) {
                return 'swagger.json';
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return ApiInfoModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/ApiInfo.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/ApiInfo.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/Example.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleModel; });
var ExampleModel = /** @class */ (function () {
    function ExampleModel(parser, infoOrRef) {
        Object.assign(this, parser.deref(infoOrRef));
        parser.exitRef(infoOrRef);
    }
    return ExampleModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Example.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Example.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/Field.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Schema__ = __webpack_require__("./src/services/models/Schema.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Field or Parameter model ready to be used by components
 */
var FieldModel = /** @class */ (function () {
    function FieldModel(parser, infoOrRef, pointer, options) {
        this.expanded = false;
        var info = parser.deref(infoOrRef);
        this.name = infoOrRef.name || info.name;
        this.in = info.in;
        this.required = !!info.required;
        var schemaPointer = (parser.isRef(infoOrRef) ? infoOrRef.$ref : pointer) + '/schema';
        this.schema = new __WEBPACK_IMPORTED_MODULE_1__Schema__["a" /* SchemaModel */](parser, info.schema || {}, schemaPointer, options);
        this.description =
            info.description === undefined ? this.schema.description || '' : info.description;
        this.example = info.example || this.schema.example;
        this.deprecated = info.deprecated === undefined ? !!this.schema.deprecated : info.deprecated;
        parser.exitRef(infoOrRef);
    }
    FieldModel.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], FieldModel.prototype, "expanded", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], FieldModel.prototype, "toggle", null);
    return FieldModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Field.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Field.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/Group.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slugify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Operations Group model ready to be used by components
 */
var GroupModel = /** @class */ (function () {
    //#endregion
    function GroupModel(type, tagOrGroup, parent) {
        this.items = [];
        this.active = false;
        this.id = type + '/' + __WEBPACK_IMPORTED_MODULE_1_slugify___default()(tagOrGroup.name);
        this.type = type;
        this.name = tagOrGroup['x-displayName'] || tagOrGroup.name;
        this.description = tagOrGroup.description || '';
        this.parent = parent;
        this.externalDocs = tagOrGroup.externalDocs;
        // groups are active (expanded) by default
        if (this.type === 'group') {
            this.active = true;
        }
    }
    GroupModel.prototype.activate = function () {
        this.active = true;
    };
    GroupModel.prototype.deactivate = function () {
        // disallow deactivating groups
        if (this.type === 'group') {
            return;
        }
        this.active = false;
    };
    GroupModel.prototype.getHash = function () {
        return this.id;
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], GroupModel.prototype, "active", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], GroupModel.prototype, "activate", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], GroupModel.prototype, "deactivate", null);
    return GroupModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Group.model.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Group.model.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/MediaContent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaContentModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MediaType__ = __webpack_require__("./src/services/models/MediaType.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * MediaContent model ready to be sued by React components
 * Contains multiple MediaTypes and keeps track of the currently active on
 */
var MediaContentModel = /** @class */ (function () {
    /**
     * @param isRequestType needed to know if skipe RO/RW fields in objects
     */
    function MediaContentModel(parser, info, isRequestType, options) {
        this.parser = parser;
        this.isRequestType = isRequestType;
        this.activeMimeIdx = 0;
        this.mediaTypes = Object.keys(info).map(function (name) {
            var mime = info[name];
            // reset deref cache just in case something is left there
            parser.resetVisited();
            return new __WEBPACK_IMPORTED_MODULE_1__MediaType__["a" /* MediaTypeModel */](parser, name, isRequestType, mime, options);
        });
    }
    /**
     * Set active media type by index
     * @param idx media type index
     */
    MediaContentModel.prototype.activate = function (idx) {
        this.activeMimeIdx = idx;
    };
    Object.defineProperty(MediaContentModel.prototype, "active", {
        get: function () {
            return this.mediaTypes[this.activeMimeIdx];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaContentModel.prototype, "hasSample", {
        get: function () {
            return this.mediaTypes.filter(function (mime) { return !!mime.examples; }).length > 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], MediaContentModel.prototype, "activeMimeIdx", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], MediaContentModel.prototype, "activate", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], MediaContentModel.prototype, "active", null);
    return MediaContentModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/MediaContent.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/MediaContent.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/MediaType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaTypeModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_openapi_sampler__ = __webpack_require__("openapi-sampler");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_openapi_sampler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_openapi_sampler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Schema__ = __webpack_require__("./src/services/models/Schema.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Example__ = __webpack_require__("./src/services/models/Example.ts");




var MediaTypeModel = /** @class */ (function () {
    /**
     * @param isRequestType needed to know if skipe RO/RW fields in objects
     */
    function MediaTypeModel(parser, name, isRequestType, info, options) {
        this.name = name;
        this.isRequestType = isRequestType;
        this.schema = info.schema && new __WEBPACK_IMPORTED_MODULE_1__Schema__["a" /* SchemaModel */](parser, info.schema, '', options);
        if (info.examples !== undefined) {
            this.examples = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["z" /* mapValues */])(info.examples, function (example) { return new __WEBPACK_IMPORTED_MODULE_3__Example__["a" /* ExampleModel */](parser, example); });
        }
        else if (info.example !== undefined) {
            this.examples = {
                default: new __WEBPACK_IMPORTED_MODULE_3__Example__["a" /* ExampleModel */](parser, { value: info.example }),
            };
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["r" /* isJsonLike */])(name)) {
            this.generateExample(parser, info);
        }
    }
    MediaTypeModel.prototype.generateExample = function (parser, info) {
        if (this.schema && this.schema.oneOf) {
            this.examples = {};
            for (var _i = 0, _a = this.schema.oneOf; _i < _a.length; _i++) {
                var subSchema = _a[_i];
                this.examples[subSchema.title] = {
                    value: __WEBPACK_IMPORTED_MODULE_0_openapi_sampler__["sample"](subSchema.rawSchema, { skipReadOnly: this.isRequestType, skipWriteOnly: !this.isRequestType }, parser.spec),
                };
            }
        }
        else {
            this.examples = {
                default: new __WEBPACK_IMPORTED_MODULE_3__Example__["a" /* ExampleModel */](parser, {
                    value: __WEBPACK_IMPORTED_MODULE_0_openapi_sampler__["sample"](info.schema, { skipReadOnly: this.isRequestType, skipWriteOnly: !this.isRequestType }, parser.spec),
                }),
            };
        }
    };
    return MediaTypeModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/MediaType.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/MediaType.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/Operation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__("./node_modules/path-browserify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SecurityRequirement__ = __webpack_require__("./src/services/models/SecurityRequirement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Field__ = __webpack_require__("./src/services/models/Field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RequestBody__ = __webpack_require__("./src/services/models/RequestBody.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Response__ = __webpack_require__("./src/services/models/Response.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Operation model ready to be used by components
 */
var OperationModel = /** @class */ (function () {
    function OperationModel(parser, operationSpec, parent, options) {
        var _this = this;
        this.type = 'operation';
        this.items = [];
        this.ready = true;
        this.active = false;
        this.id = operationSpec._$ref;
        this.name = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["j" /* getOperationSummary */])(operationSpec);
        this.description = operationSpec.description;
        this.parent = parent;
        this.externalDocs = operationSpec.externalDocs;
        this._$ref = operationSpec._$ref;
        this.deprecated = !!operationSpec.deprecated;
        this.httpVerb = operationSpec.httpVerb;
        this.deprecated = !!operationSpec.deprecated;
        this.operationId = operationSpec.operationId;
        this.requestBody =
            operationSpec.requestBody && new __WEBPACK_IMPORTED_MODULE_6__RequestBody__["a" /* RequestBodyModel */](parser, operationSpec.requestBody, options);
        this.codeSamples = operationSpec['x-code-samples'] || [];
        this.path = __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* JsonPointer */].baseName(this._$ref, 2);
        this.parameters = operationSpec.pathParameters
            .concat(operationSpec.parameters || [])
            .map(function (paramOrRef) { return new __WEBPACK_IMPORTED_MODULE_5__Field__["a" /* FieldModel */](parser, paramOrRef, _this._$ref, options); });
        if (options.requiredPropsFirst) {
            Object(__WEBPACK_IMPORTED_MODULE_4__utils__["D" /* sortByRequired */])(this.parameters);
        }
        var hasSuccessResponses = false;
        this.responses = Object.keys(operationSpec.responses || [])
            .filter(function (code) {
            if (parseInt(code, 10) >= 100 && parseInt(code, 10) <= 399) {
                hasSuccessResponses = true;
            }
            return isNumeric(code) || code === 'default';
        }) // filter out other props (e.g. x-props)
            .map(function (code) {
            return new __WEBPACK_IMPORTED_MODULE_7__Response__["a" /* ResponseModel */](parser, code, hasSuccessResponses, operationSpec.responses[code], options);
        });
        this.servers = normalizeServers(parser.specUrl, operationSpec.servers || parser.spec.servers || []);
        this.security = (operationSpec.security || parser.spec.security || []).map(function (security) { return new __WEBPACK_IMPORTED_MODULE_3__SecurityRequirement__["a" /* SecurityRequirementModel */](security, parser); });
    }
    /**
     * set operation as active (used by side menu)
     */
    OperationModel.prototype.activate = function () {
        this.active = true;
    };
    /**
     * set operation as inactive (used by side menu)
     */
    OperationModel.prototype.deactivate = function () {
        this.active = false;
    };
    OperationModel.prototype.getHash = function () {
        return this.operationId !== undefined
            ? 'operation/' + this.operationId
            : this.parent !== undefined ? this.parent.id + this.id : this.id;
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], OperationModel.prototype, "ready", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], OperationModel.prototype, "active", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], OperationModel.prototype, "activate", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], OperationModel.prototype, "deactivate", null);
    return OperationModel;
}());

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function normalizeServers(specUrl, servers) {
    if (servers.length === 0) {
        return [
            {
                url: specUrl,
            },
        ];
    }
    function normalizeUrl(url) {
        url = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["p" /* isAbsolutePath */])(url) ? url : Object(__WEBPACK_IMPORTED_MODULE_1_path__["join"])(specUrl, url);
        return Object(__WEBPACK_IMPORTED_MODULE_4__utils__["E" /* stripTrailingSlash */])(url.startsWith('//') ? "" + specProtocol + url : url);
    }
    var specProtocol = Object(__WEBPACK_IMPORTED_MODULE_2_url__["parse"])(specUrl).protocol;
    return servers.map(function (server) {
        return __assign({}, server, { url: normalizeUrl(server.url), description: server.description || '' });
    });
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Operation.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Operation.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/RequestBody.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MediaContent__ = __webpack_require__("./src/services/models/MediaContent.ts");

var RequestBodyModel = /** @class */ (function () {
    function RequestBodyModel(parser, infoOrRef, options) {
        var info = parser.deref(infoOrRef);
        this.description = info.description || '';
        this.required = !!info.required;
        parser.exitRef(infoOrRef);
        if (info.content !== undefined) {
            this.content = new __WEBPACK_IMPORTED_MODULE_0__MediaContent__["a" /* MediaContentModel */](parser, info.content, true, options);
        }
    }
    return RequestBodyModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/RequestBody.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/RequestBody.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/Response.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./src/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Field__ = __webpack_require__("./src/services/models/Field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MediaContent__ = __webpack_require__("./src/services/models/MediaContent.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ResponseModel = /** @class */ (function () {
    function ResponseModel(parser, code, defaultAsError, infoOrRef, options) {
        this.headers = [];
        this.expanded = options.expandResponses === 'all' || options.expandResponses[code];
        var info = parser.deref(infoOrRef);
        parser.exitRef(infoOrRef);
        this.code = code;
        if (info.content !== undefined) {
            this.content = new __WEBPACK_IMPORTED_MODULE_3__MediaContent__["a" /* MediaContentModel */](parser, info.content, false, options);
        }
        this.description = info.description || '';
        this.type = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["k" /* getStatusCodeType */])(code, defaultAsError);
        var headers = info.headers;
        if (headers !== undefined) {
            this.headers = Object.keys(headers).map(function (name) {
                var header = headers[name];
                return new __WEBPACK_IMPORTED_MODULE_2__Field__["a" /* FieldModel */](parser, __assign({}, header, { name: name }), '', options);
            });
        }
    }
    ResponseModel.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], ResponseModel.prototype, "expanded", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], ResponseModel.prototype, "toggle", null);
    return ResponseModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Response.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Response.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/Schema.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Field__ = __webpack_require__("./src/services/models/Field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils___ = __webpack_require__("./src/utils/index.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// TODO: refactor this model, maybe use getters instead of copying all the values
var SchemaModel = /** @class */ (function () {
    /**
     * @param isChild if schema discriminator Child
     * When true forces dereferencing in allOfs even if circular
     */
    function SchemaModel(parser, schemaOrRef, $ref, options, isChild) {
        if (isChild === void 0) { isChild = false; }
        this.options = options;
        this.typePrefix = '';
        this.isCircular = false;
        this.activeOneOf = 0;
        this._$ref = schemaOrRef.$ref || $ref || '';
        this.rawSchema = parser.deref(schemaOrRef);
        this.schema = parser.mergeAllOf(this.rawSchema, this._$ref, isChild);
        this.init(parser, isChild);
        parser.exitRef(schemaOrRef);
        for (var _i = 0, _a = this.schema.parentRefs || []; _i < _a.length; _i++) {
            var parent$ref = _a[_i];
            // exit all the refs visited during allOf traverse
            parser.exitRef({ $ref: parent$ref });
        }
    }
    /**
     * Set specified alternative schema as active
     * @param idx oneOf index
     */
    SchemaModel.prototype.activateOneOf = function (idx) {
        this.activeOneOf = idx;
    };
    SchemaModel.prototype.init = function (parser, isChild) {
        var schema = this.schema;
        this.isCircular = schema['x-circular-ref'];
        this.title =
            schema.title || (Object(__WEBPACK_IMPORTED_MODULE_2__utils___["s" /* isNamedDefinition */])(this._$ref) && __WEBPACK_IMPORTED_MODULE_2__utils___["a" /* JsonPointer */].baseName(this._$ref)) || '';
        this.description = schema.description || '';
        this.type = schema.type || Object(__WEBPACK_IMPORTED_MODULE_2__utils___["h" /* detectType */])(schema);
        this.format = schema.format;
        this.nullable = !!schema.nullable;
        this.enum = schema.enum || [];
        this.example = schema.example;
        this.deprecated = !!schema.deprecated;
        this.pattern = schema.pattern;
        this.constraints = Object(__WEBPACK_IMPORTED_MODULE_2__utils___["o" /* humanizeConstraints */])(schema);
        this.displayType = this.type;
        this.isPrimitive = Object(__WEBPACK_IMPORTED_MODULE_2__utils___["v" /* isPrimitiveType */])(schema);
        this.default = schema.default;
        this.readOnly = !!schema.readOnly;
        this.writeOnly = !!schema.writeOnly;
        if (this.isCircular) {
            return;
        }
        if (!isChild && schema.discriminator !== undefined) {
            this.initDiscriminator(schema, parser);
            return;
        }
        if (schema.oneOf !== undefined) {
            this.initOneOf(schema.oneOf, parser);
            this.oneOfType = 'One of';
            if (schema.anyOf !== undefined) {
                console.warn("oneOf and anyOf are not supported on the same level. Skipping anyOf at " + this._$ref);
            }
            return;
        }
        if (schema.anyOf !== undefined) {
            this.initOneOf(schema.anyOf, parser);
            this.oneOfType = 'Any of';
            return;
        }
        if (this.type === 'object') {
            this.fields = buildFields(parser, schema, this._$ref, this.options);
        }
        else if (this.type === 'array' && schema.items) {
            this.items = new SchemaModel(parser, schema.items, this._$ref + '/items', this.options);
            this.displayType = this.items.displayType;
            this.typePrefix = this.items.typePrefix + 'Array of ';
            this.isPrimitive = this.items.isPrimitive;
            if (this.example === undefined && this.items.example !== undefined) {
                this.example = [this.items.example];
            }
            if (this.items.isPrimitive) {
                this.enum = this.items.enum;
            }
        }
    };
    SchemaModel.prototype.initOneOf = function (oneOf, parser) {
        var _this = this;
        this.oneOf = oneOf.map(function (variant, idx) {
            return new SchemaModel(parser, {
                // merge base schema into each of oneOf's subschemas
                allOf: [variant, __assign({}, _this.schema, { oneOf: undefined, anyOf: undefined })],
            }, _this._$ref + '/oneOf/' + idx, _this.options);
        });
        this.displayType = this.oneOf.map(function (schema) { return schema.displayType; }).join(' or ');
    };
    SchemaModel.prototype.initDiscriminator = function (schema, parser) {
        var _this = this;
        this.discriminatorProp = schema.discriminator.propertyName;
        var derived = parser.findDerived((schema.parentRefs || []).concat([this._$ref]));
        if (schema.oneOf) {
            for (var _i = 0, _a = schema.oneOf; _i < _a.length; _i++) {
                var variant = _a[_i];
                if (variant.$ref === undefined) {
                    continue;
                }
                var name_1 = __WEBPACK_IMPORTED_MODULE_2__utils___["a" /* JsonPointer */].dirName(variant.$ref);
                derived[variant.$ref] = name_1;
            }
        }
        var mapping = schema.discriminator.mapping || {};
        for (var name_2 in mapping) {
            derived[mapping[name_2]] = name_2;
        }
        var refs = Object.keys(derived);
        this.oneOf = refs.map(function (ref) {
            var innerSchema = new SchemaModel(parser, parser.byRef(ref), ref, _this.options, true);
            innerSchema.title = derived[ref];
            return innerSchema;
        });
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], SchemaModel.prototype, "activeOneOf", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], SchemaModel.prototype, "activateOneOf", null);
    return SchemaModel;
}());

function buildFields(parser, schema, $ref, options) {
    var props = schema.properties || {};
    var additionalProps = schema.additionalProperties;
    var defaults = schema.default || {};
    var fields = Object.keys(props || []).map(function (fieldName) {
        var field = props[fieldName];
        if (!field) {
            console.warn("Field \"" + fieldName + "\" is invalid, skipping.\n Field must be an object but got " + typeof field + " at \"" + $ref + "\"");
            field = {};
        }
        var required = schema.required === undefined ? false : schema.required.indexOf(fieldName) > -1;
        return new __WEBPACK_IMPORTED_MODULE_1__Field__["a" /* FieldModel */](parser, {
            name: fieldName,
            required: required,
            schema: __assign({}, field, { default: field.default || defaults[fieldName] }),
        }, $ref + '/properties/' + fieldName, options);
    });
    if (options.requiredPropsFirst) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils___["D" /* sortByRequired */])(fields, schema.required);
    }
    if (typeof additionalProps === 'object') {
        fields.push(new __WEBPACK_IMPORTED_MODULE_1__Field__["a" /* FieldModel */](parser, {
            name: '[property name] *',
            required: false,
            schema: additionalProps,
        }, $ref + '/additionalProperties', options));
    }
    return fields;
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Schema.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/Schema.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/SecurityRequirement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityRequirementModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_openapi__ = __webpack_require__("./src/utils/openapi.ts");

var SecurityRequirementModel = /** @class */ (function () {
    function SecurityRequirementModel(requirement, parser) {
        var schemes = (parser.spec.components && parser.spec.components.securitySchemes) || {};
        this.schemes = Object.keys(requirement || {})
            .map(function (id) {
            var scheme = parser.deref(schemes[id]);
            var scopes = requirement[id] || [];
            if (!scheme) {
                console.warn("Non existing security scheme referenced: " + id + ". Skipping");
                return undefined;
            }
            return {
                id: id,
                sectionId: __WEBPACK_IMPORTED_MODULE_0__utils_openapi__["a" /* SECURITY_SCHEMES_SECTION */] + id,
                type: scheme.type,
                scopes: scopes,
            };
        })
            .filter(function (scheme) { return scheme !== undefined; });
    }
    return SecurityRequirementModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/SecurityRequirement.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/SecurityRequirement.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/SecuritySchemes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecuritySchemeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SecuritySchemesModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_openapi__ = __webpack_require__("./src/utils/openapi.ts");

var SecuritySchemeModel = /** @class */ (function () {
    function SecuritySchemeModel(parser, id, scheme) {
        var info = parser.deref(scheme);
        this.id = id;
        this.sectionId = __WEBPACK_IMPORTED_MODULE_0__utils_openapi__["a" /* SECURITY_SCHEMES_SECTION */] + id;
        this.type = info.type;
        this.description = info.description || '';
        if (info.type === 'apiKey') {
            this.apiKey = {
                name: info.name,
                in: info.in,
            };
        }
        if (info.type === 'http') {
            this.http = {
                scheme: info.scheme,
                bearerFormat: info.bearerFormat,
            };
        }
        if (info.type === 'openIdConnect') {
            this.openId = {
                connectUrl: info.openIdConnectUrl,
            };
        }
        if (info.type === 'oauth2' && info.flows) {
            this.flows = info.flows;
        }
    }
    return SecuritySchemeModel;
}());

var SecuritySchemesModel = /** @class */ (function () {
    function SecuritySchemesModel(parser) {
        var schemes = (parser.spec.components && parser.spec.components.securitySchemes) || {};
        this.schemes = Object.keys(schemes).map(function (name) { return new SecuritySchemeModel(parser, name, schemes[name]); });
    }
    return SecuritySchemesModel;
}());



 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/SecuritySchemes.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/SecuritySchemes.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpecStore__ = __webpack_require__("./src/services/SpecStore.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__SpecStore__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Group_model__ = __webpack_require__("./src/services/models/Group.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__Group_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Operation__ = __webpack_require__("./src/services/models/Operation.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__Operation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RequestBody__ = __webpack_require__("./src/services/models/RequestBody.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__RequestBody__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Example__ = __webpack_require__("./src/services/models/Example.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__Example__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MediaContent__ = __webpack_require__("./src/services/models/MediaContent.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__MediaContent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MediaType__ = __webpack_require__("./src/services/models/MediaType.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__MediaType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Response__ = __webpack_require__("./src/services/models/Response.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__Response__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Schema__ = __webpack_require__("./src/services/models/Schema.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__Schema__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Field__ = __webpack_require__("./src/services/models/Field.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__Field__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ApiInfo__ = __webpack_require__("./src/services/models/ApiInfo.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__ApiInfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SecuritySchemes__ = __webpack_require__("./src/services/models/SecuritySchemes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__SecuritySchemes__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__SecuritySchemes__["b"]; });














 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/services/models/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/services/models/index.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/styled-components.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* unused harmony export withTheme */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return withProps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function withProps(styledFunction) {
    return styledFunction;
}
var _a = __WEBPACK_IMPORTED_MODULE_0_styled_components__, styled = _a.default, css = _a.css, injectGlobal = _a.injectGlobal, keyframes = _a.keyframes, ThemeProvider = _a.ThemeProvider, withTheme = _a.withTheme;
var media = {
    lessThan: function (breakpoint) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @media (max-width: ", ") {\n        ", ";\n      }\n    "], ["\n      @media (max-width: ", ") {\n        ", ";\n      }\n    "])), function (props) { return props.theme.breakpoints[breakpoint]; }, css.apply(void 0, args));
        };
    },
    greaterThan: function (breakpoint) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      @media (min-width: ", ") {\n        ", ";\n      }\n    "], ["\n      @media (min-width: ", ") {\n        ", ";\n      }\n    "])), function (props) { return props.theme.breakpoints[breakpoint]; }, css.apply(void 0, args));
        };
    },
    between: function (firstBreakpoint, secondBreakpoint) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      @media (min-width: ", ") and (max-width: ", ") {\n        ", ";\n      }\n    "], ["\n      @media (min-width: ", ") and (max-width: ",
                ") {\n        ", ";\n      }\n    "])), function (props) { return props.theme.breakpoints[firstBreakpoint]; }, function (props) { return props.theme.breakpoints[secondBreakpoint]; }, css.apply(void 0, args));
        };
    },
};

/* harmony default export */ __webpack_exports__["c"] = (styled);
var templateObject_1, templateObject_2, templateObject_3;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/styled-components.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/styled-components.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var theme = {
    spacingUnit: 20,
    breakpoints: {
        small: '50rem',
        medium: '85rem',
        large: '105rem',
    },
    colors: {
        main: '#2E3C43',
        highlight: '#5300CC',
        success: '#00aa13',
        redirect: 'orange',
        error: '#e53935',
        info: 'skyblue',
        text: '#263238',
        warning: '#f1c400',
        http: {
            get: '#6bbd5b',
            post: '#248fb2',
            put: '#9b708b',
            options: '#d3ca12',
            patch: '#e09d43',
            delete: '#e27a7a',
            basic: '#999',
            link: '#31bbb6',
        },
    },
    schemaView: {
        linesColor: '#7f99cf',
        defaultDetailsWidth: '75%',
    },
    baseFont: {
        size: '16px',
        lineHeight: '24px',
        weight: '400',
        family: 'Open Sans, sans-serif',
        smoothing: 'antialiased',
        optimizeSpeed: true,
    },
    headingsFont: {
        family: 'Montserrat, sans-serif',
    },
    code: {
        fontSize: '16px',
        fontFamily: 'Overpass Mono',
        fontWeight: '600',
    },
    links: {
        color: '#1FAC06',
        visited: '#1FAC06',
        hover: '#188B04',
    },
    menu: {
        width: 218,
        backgroundColor: '#F9F9F9',
    },
    logo: {
        maxHeight: 'none',
        width: '100%',
    },
    rightPanel: {
        backgroundColor: '#263238',
        width: 40,
    },
    middlePanel: {
        width: 628,
    },
};
/* harmony default export */ __webpack_exports__["a"] = (theme);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/theme.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/theme.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/JsonPointer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonPointer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json_pointer__ = __webpack_require__("json-pointer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json_pointer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_json_pointer__);


var origParse = __WEBPACK_IMPORTED_MODULE_0_json_pointer__["parse"];
/**
 * Wrapper for JsonPointer. Provides common operations
 */
var JsonPointer = /** @class */ (function () {
    function JsonPointer() {
    }
    /**
     * returns last JsonPointer token
     * if level > 1 returns levels last (second last/third last)
     * @example
     * // returns subpath
     * JsonPointerHelper.baseName('/path/0/subpath')
     * // returns foo
     * JsonPointerHelper.baseName('/path/foo/subpath', 2)
     */
    JsonPointer.baseName = function (pointer, level) {
        if (level === void 0) { level = 1; }
        var tokens = JsonPointer.parse(pointer);
        return tokens[tokens.length - level];
    };
    /**
     * returns dirname of pointer
     * if level > 1 returns corresponding dirname in the hierarchy
     * @example
     * // returns /path/0
     * JsonPointerHelper.dirName('/path/0/subpath')
     * // returns /path
     * JsonPointerHelper.dirName('/path/foo/subpath', 2)
     */
    JsonPointer.dirName = function (pointer, level) {
        if (level === void 0) { level = 1; }
        var tokens = JsonPointer.parse(pointer);
        return __WEBPACK_IMPORTED_MODULE_0_json_pointer__["compile"](tokens.slice(0, tokens.length - level));
    };
    /**
     * returns relative path tokens
     * @example
     * // returns ['subpath']
     * JsonPointerHelper.relative('/path/0', '/path/0/subpath')
     * // returns ['foo', 'subpath']
     * JsonPointerHelper.relative('/path', '/path/foo/subpath')
     */
    JsonPointer.relative = function (from, to) {
        var fromTokens = JsonPointer.parse(from);
        var toTokens = JsonPointer.parse(to);
        return toTokens.slice(fromTokens.length);
    };
    /**
     * overridden JsonPointer original parse to take care of prefixing '#' symbol
     * that is not valid JsonPointer
     */
    JsonPointer.parse = function (pointer) {
        var ptr = pointer;
        if (ptr.charAt(0) === '#') {
            ptr = ptr.substring(1);
        }
        return origParse(ptr);
    };
    /**
     * Creates a JSON pointer path, by joining one or more tokens to a base path.
     *
     * @param {string} base - The base path
     * @param {string|string[]} tokens - The token(s) to append (e.g. ["name", "first"])
     * @returns {string}
     */
    JsonPointer.join = function (base, tokens) {
        // TODO: optimize
        var baseTokens = JsonPointer.parse(base);
        var resTokens = baseTokens.concat(tokens);
        return __WEBPACK_IMPORTED_MODULE_0_json_pointer__["compile"](resTokens);
    };
    JsonPointer.get = function (object, pointer) {
        return __WEBPACK_IMPORTED_MODULE_0_json_pointer__["get"](object, pointer);
    };
    JsonPointer.compile = function (tokens) {
        return __WEBPACK_IMPORTED_MODULE_0_json_pointer__["compile"](tokens);
    };
    JsonPointer.escape = function (pointer) {
        return __WEBPACK_IMPORTED_MODULE_0_json_pointer__["escape"](pointer);
    };
    return JsonPointer;
}());

__WEBPACK_IMPORTED_MODULE_0_json_pointer__["parse"] = JsonPointer.parse;
Object.assign(JsonPointer, __WEBPACK_IMPORTED_MODULE_0_json_pointer__);
/* unused harmony default export */ var _unused_webpack_default_export = (JsonPointer);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/JsonPointer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/JsonPointer.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/debug.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = debugTime;
/* harmony export (immutable) */ __webpack_exports__["b"] = debugTimeEnd;
function debugTime(label) {
    if (true) {
        console.time(label);
    }
}
function debugTimeEnd(label) {
    if (true) {
        console.timeEnd(label);
    }
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/debug.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/debug.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/decorators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = Throttle;
function throttle(func, wait) {
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    var later = function () {
        previous = new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) {
            context = args = null;
        }
    };
    return function () {
        var now = new Date().getTime();
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) {
                context = args = null;
            }
        }
        else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
function Throttle(delay) {
    return function (_, _2, desc) {
        desc.value = throttle(desc.value, delay);
    };
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/decorators.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/decorators.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/dom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isBrowser; });
/* harmony export (immutable) */ __webpack_exports__["c"] = querySelector;
/* harmony export (immutable) */ __webpack_exports__["a"] = html2Str;
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
function querySelector(selector) {
    if (typeof document !== 'undefined') {
        return document.querySelector(selector);
    }
    return null;
}
/**
 * Drop everything inside <...> (i.e., tags/elements), and keep the text.
 * Unlike browser innerText, this removes newlines; it also doesn't handle
 * un-encoded `<` or `>` characters very well, so don't feed it malformed HTML
 */
function html2Str(html) {
    return html
        .split(/<[^>]+>/)
        .map(function (chunk) {
        return chunk.trim();
    })
        .filter(function (trimmedChunk) {
        return trimmedChunk.length > 0;
    })
        .join(' ');
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/dom.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/dom.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["f"] = mapWithLast;
/* harmony export (immutable) */ __webpack_exports__["e"] = mapValues;
/* harmony export (immutable) */ __webpack_exports__["b"] = flattenByProp;
/* harmony export (immutable) */ __webpack_exports__["h"] = stripTrailingSlash;
/* harmony export (immutable) */ __webpack_exports__["c"] = isAbsolutePath;
/* harmony export (immutable) */ __webpack_exports__["d"] = isNumeric;
/* harmony export (immutable) */ __webpack_exports__["a"] = appendToMdHeading;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mergeObjects; });
/**
 * Maps over array passing `isLast` bool to iterator as the second arguemnt
 */
function mapWithLast(array, iteratee) {
    var res = [];
    for (var i = 0; i < array.length - 1; i++) {
        res.push(iteratee(array[i], false));
    }
    if (array.length !== 0) {
        res.push(iteratee(array[array.length - 1], true));
    }
    return res;
}
/**
 * Creates an object with the same keys as object and values generated by running each
 * own enumerable string keyed property of object thru iteratee.
 * The iteratee is invoked with three arguments: (value, key, object).
 *
 * @param object the object to iterate over
 * @param iteratee the function invoked per iteration.
 */
function mapValues(object, iteratee) {
    var res = {};
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            res[key] = iteratee(object[key], key, object);
        }
    }
    return res;
}
/**
 * flattens collection using `prop` field as a children
 * @param collectionItems collection items
 * @param prop item property with child elements
 */
function flattenByProp(collectionItems, prop) {
    var res = [];
    var iterate = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            res.push(item);
            if (item[prop]) {
                iterate(item[prop]);
            }
        }
    };
    iterate(collectionItems);
    return res;
}
function stripTrailingSlash(path) {
    if (path.endsWith('/')) {
        return path.substring(0, path.length - 1);
    }
    return path;
}
function isAbsolutePath(path) {
    return /^(?:[a-z]+:)?/i.test(path);
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function appendToMdHeading(md, heading, content) {
    // if  heading is already in md and append to the end of it
    var testRegex = new RegExp("(^|\\n)#\\s?" + heading + "\\s*\\n", 'i');
    var replaceRegex = new RegExp("((\\n|^)#\\s*" + heading + "\\s*(\\n|$)(?:.|\\n)*?)(\\n#|$)", 'i');
    if (testRegex.test(md)) {
        return md.replace(replaceRegex, "$1\n\n" + content + "\n$4");
    }
    else {
        // else append heading itself
        var br = md === '' || md.endsWith('\n\n') ? '' : md.endsWith('\n') ? '\n' : '\n\n';
        return "" + md + br + "# " + heading + "\n\n" + content;
    }
}
// credits https://stackoverflow.com/a/46973278/1749888
var mergeObjects = function (target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length) {
        return target;
    }
    var source = sources.shift();
    if (source === undefined) {
        return target;
    }
    if (isMergebleObject(target) && isMergebleObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isMergebleObject(source[key])) {
                if (!target[key]) {
                    target[key] = {};
                }
                mergeObjects(target[key], source[key]);
            }
            else {
                target[key] = source[key];
            }
        });
    }
    return mergeObjects.apply(void 0, [target].concat(sources));
};
var isObject = function (item) {
    return item !== null && typeof item === 'object';
};
var isMergebleObject = function (item) {
    return isObject(item) && !Array.isArray(item);
};


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/helpers.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/helpers.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/highlight.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["b"] = mapLang;
/* harmony export (immutable) */ __webpack_exports__["a"] = highlight;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__("prismjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_actionscript_js__ = __webpack_require__("prismjs/components/prism-actionscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_actionscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_actionscript_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_bash_js__ = __webpack_require__("prismjs/components/prism-bash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_bash_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_bash_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_c_js__ = __webpack_require__("prismjs/components/prism-c.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_c_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_c_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_coffeescript_js__ = __webpack_require__("prismjs/components/prism-coffeescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_coffeescript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_coffeescript_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_cpp_js__ = __webpack_require__("prismjs/components/prism-cpp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_cpp_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_cpp_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_csharp_js__ = __webpack_require__("prismjs/components/prism-csharp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_csharp_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_csharp_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_go_js__ = __webpack_require__("prismjs/components/prism-go.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_go_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_go_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_haskell_js__ = __webpack_require__("prismjs/components/prism-haskell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_haskell_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_haskell_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_java_js__ = __webpack_require__("prismjs/components/prism-java.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_java_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_java_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_lua_js__ = __webpack_require__("prismjs/components/prism-lua.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_lua_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_lua_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_markup_js__ = __webpack_require__("prismjs/components/prism-markup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_markup_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_markup_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_matlab_js__ = __webpack_require__("prismjs/components/prism-matlab.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_matlab_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_matlab_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prismjs_components_prism_objectivec_js__ = __webpack_require__("prismjs/components/prism-objectivec.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prismjs_components_prism_objectivec_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_prismjs_components_prism_objectivec_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prismjs_components_prism_perl_js__ = __webpack_require__("prismjs/components/prism-perl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prismjs_components_prism_perl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_prismjs_components_prism_perl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prismjs_components_prism_php_js__ = __webpack_require__("prismjs/components/prism-php.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prismjs_components_prism_php_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_prismjs_components_prism_php_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_prismjs_components_prism_python_js__ = __webpack_require__("prismjs/components/prism-python.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_prismjs_components_prism_python_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_prismjs_components_prism_python_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_prismjs_components_prism_r_js__ = __webpack_require__("prismjs/components/prism-r.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_prismjs_components_prism_r_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_prismjs_components_prism_r_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_prismjs_components_prism_ruby_js__ = __webpack_require__("prismjs/components/prism-ruby.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_prismjs_components_prism_ruby_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_prismjs_components_prism_ruby_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_prismjs_components_prism_scala_js__ = __webpack_require__("prismjs/components/prism-scala.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_prismjs_components_prism_scala_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_prismjs_components_prism_scala_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_prismjs_components_prism_swift_js__ = __webpack_require__("prismjs/components/prism-swift.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_prismjs_components_prism_swift_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_prismjs_components_prism_swift_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__styled_components__ = __webpack_require__("./src/styled-components.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_prismjs_themes_prism_dark_css__ = __webpack_require__("./node_modules/prismjs/themes/prism-dark.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_prismjs_themes_prism_dark_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_prismjs_themes_prism_dark_css__);
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};











 // xml










 // dark theme
Object(__WEBPACK_IMPORTED_MODULE_21__styled_components__["d" /* injectGlobal */])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), __WEBPACK_IMPORTED_MODULE_22_prismjs_themes_prism_dark_css___default.a);
var DEFAULT_LANG = 'clike';
/**
 * map language names to Prism.js names
 */
function mapLang(lang) {
    return ({
        json: 'js',
        'c++': 'cpp',
        'c#': 'csharp',
        'objective-c': 'objectivec',
        shell: 'bash',
        viml: 'vim',
    }[lang] || DEFAULT_LANG);
}
/**
 * Highlight source code string using Prism.js
 * @param source source code to highlight
 * @param lang highlight language
 * @return highlighted souce code as **html string**
 */
function highlight(source, lang) {
    var grammar = __WEBPACK_IMPORTED_MODULE_0_prismjs__["languages"][lang];
    if (!grammar) {
        grammar = __WEBPACK_IMPORTED_MODULE_0_prismjs__["languages"][mapLang(lang)];
    }
    return __WEBPACK_IMPORTED_MODULE_0_prismjs__["highlight"](source, grammar);
}
var templateObject_1;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/highlight.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/highlight.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__JsonPointer__ = __webpack_require__("./src/utils/JsonPointer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__JsonPointer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled__ = __webpack_require__("./src/utils/styled.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__styled__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_1__styled__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__openapi__ = __webpack_require__("./src/utils/openapi.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_2__openapi__["k"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/utils/helpers.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__highlight__ = __webpack_require__("./src/utils/highlight.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__highlight__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_4__highlight__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loadAndBundleSpec__ = __webpack_require__("./src/utils/loadAndBundleSpec.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__loadAndBundleSpec__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_5__loadAndBundleSpec__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom__ = __webpack_require__("./src/utils/dom.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__decorators__ = __webpack_require__("./src/utils/decorators.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__decorators__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__debug__ = __webpack_require__("./src/utils/debug.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__debug__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__debug__["b"]; });











 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/index.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/jsonToHtml.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = jsonToHTML;
var level = 1;
var COLLAPSE_LEVEL = 2;
function jsonToHTML(json) {
    level = 1;
    var output = '';
    output += '<div class="redoc-json">';
    output += valueToHTML(json);
    output += '</div>';
    return output;
}
function htmlEncode(t) {
    return t !== undefined
        ? t
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
        : '';
}
function decorateWithSpan(value, className) {
    return '<span class="' + className + '">' + htmlEncode(value) + '</span>';
}
function valueToHTML(value) {
    var valueType = typeof value;
    var output = '';
    if (value === undefined || value === null) {
        output += decorateWithSpan('null', 'type-null');
    }
    else if (value && value.constructor === Array) {
        level++;
        output += arrayToHTML(value);
        level--;
    }
    else if (value && value.constructor === Date) {
        output += decorateWithSpan('"' + value.toISOString() + '"', 'type-string');
    }
    else if (valueType === 'object') {
        level++;
        output += objectToHTML(value);
        level--;
    }
    else if (valueType === 'number') {
        output += decorateWithSpan(value, 'type-number');
    }
    else if (valueType === 'string') {
        if (/^(http|https):\/\/[^\s]+$/.test(value)) {
            output +=
                decorateWithSpan('"', 'type-string') +
                    '<a href="' +
                    value +
                    '">' +
                    htmlEncode(value) +
                    '</a>' +
                    decorateWithSpan('"', 'type-string');
        }
        else {
            output += decorateWithSpan('"' + value + '"', 'type-string');
        }
    }
    else if (valueType === 'boolean') {
        output += decorateWithSpan(value, 'type-boolean');
    }
    return output;
}
function arrayToHTML(json) {
    var collapsed = level > COLLAPSE_LEVEL ? 'collapsed' : '';
    var output = '<div class="collapser"></div>[<span class="ellipsis"></span><ul class="array collapsible">';
    var hasContents = false;
    var length = json.length;
    for (var i = 0; i < length; i++) {
        hasContents = true;
        output += '<li><div class="hoverable ' + collapsed + '">';
        output += valueToHTML(json[i]);
        if (i < length - 1) {
            output += ',';
        }
        output += '</div></li>';
    }
    output += '</ul>]';
    if (!hasContents) {
        output = '[ ]';
    }
    return output;
}
function objectToHTML(json) {
    var collapsed = level > COLLAPSE_LEVEL ? 'collapsed' : '';
    var keys = Object.keys(json);
    var length = keys.length;
    var output = '<div class="collapser"></div>{<span class="ellipsis"></span><ul class="obj collapsible">';
    var hasContents = false;
    for (var i = 0; i < length; i++) {
        var key = keys[i];
        hasContents = true;
        output += '<li><div class="hoverable ' + collapsed + '">';
        output += '<span class="property">"' + htmlEncode(key) + '"</span>: ';
        output += valueToHTML(json[key]);
        if (i < length - 1) {
            output += ',';
        }
        output += '</div></li>';
    }
    output += '</ul>}';
    if (!hasContents) {
        output = '{ }';
    }
    return output;
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/jsonToHtml.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/jsonToHtml.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/loadAndBundleSpec.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["b"] = loadAndBundleSpec;
/* harmony export (immutable) */ __webpack_exports__["a"] = convertSwagger2OpenAPI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json_schema_ref_parser__ = __webpack_require__("json-schema-ref-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json_schema_ref_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_json_schema_ref_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swagger2openapi__ = __webpack_require__("./node_modules/swagger2openapi/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swagger2openapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_swagger2openapi__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


function loadAndBundleSpec(specUrlOrObject) {
    return __awaiter(this, void 0, void 0, function () {
        var parser, spec;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parser = new __WEBPACK_IMPORTED_MODULE_0_json_schema_ref_parser__();
                    return [4 /*yield*/, parser.bundle(specUrlOrObject, {
                            resolve: { http: { withCredentials: false } },
                        })];
                case 1:
                    spec = _a.sent();
                    if (spec.swagger !== undefined) {
                        return [2 /*return*/, convertSwagger2OpenAPI(spec)];
                    }
                    else {
                        return [2 /*return*/, spec];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function convertSwagger2OpenAPI(spec) {
    console.warn('[ReDoc Compatibility mode]: Converting OpenAPI 2.0 to OpenAPI 3.0');
    return new Promise(function (resolve, reject) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_swagger2openapi__["convertObj"])(spec, { patch: true, warnOnly: true }, function (err, res) {
            // TODO: log any warnings
            if (err) {
                return reject(err);
            }
            resolve(res && res.openapi);
        });
    });
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/loadAndBundleSpec.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/loadAndBundleSpec.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/openapi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["d"] = getStatusCodeType;
/* harmony export (immutable) */ __webpack_exports__["h"] = isOperationName;
/* harmony export (immutable) */ __webpack_exports__["c"] = getOperationSummary;
/* harmony export (immutable) */ __webpack_exports__["b"] = detectType;
/* harmony export (immutable) */ __webpack_exports__["i"] = isPrimitiveType;
/* harmony export (immutable) */ __webpack_exports__["f"] = isJsonLike;
/* harmony export (immutable) */ __webpack_exports__["j"] = langFromMime;
/* harmony export (immutable) */ __webpack_exports__["g"] = isNamedDefinition;
/* harmony export (immutable) */ __webpack_exports__["e"] = humanizeConstraints;
/* harmony export (immutable) */ __webpack_exports__["k"] = sortByRequired;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECURITY_SCHEMES_SECTION; });
function getStatusCodeType(statusCode, defaultAsError) {
    if (defaultAsError === void 0) { defaultAsError = false; }
    if (statusCode === 'default') {
        return defaultAsError ? 'error' : 'success';
    }
    if (statusCode < 100 || statusCode > 599) {
        throw new Error('invalid HTTP code');
    }
    var res = 'success';
    if (statusCode >= 300 && statusCode < 400) {
        res = 'redirect';
    }
    else if (statusCode >= 400) {
        res = 'error';
    }
    else if (statusCode < 200) {
        res = 'info';
    }
    return res;
}
var operationNames = {
    get: true,
    post: true,
    put: true,
    head: true,
    patch: true,
    delete: true,
    options: true,
};
function isOperationName(key) {
    return key in operationNames;
}
function getOperationSummary(operation) {
    return (operation.summary ||
        operation.operationId ||
        (operation.description && operation.description.substring(0, 50)) ||
        '<no summary>');
}
var schemaKeywordTypes = {
    multipleOf: 'number',
    maximum: 'number',
    exclusiveMaximum: 'number',
    minimum: 'number',
    exclusiveMinimum: 'number',
    maxLength: 'string',
    minLength: 'string',
    pattern: 'string',
    items: 'array',
    maxItems: 'array',
    minItems: 'array',
    uniqueItems: 'array',
    maxProperties: 'object',
    minProperties: 'object',
    required: 'object',
    additionalProperties: 'object',
    properties: 'object',
};
function detectType(schema) {
    if (schema.type !== undefined) {
        return schema.type;
    }
    var keywords = Object.keys(schemaKeywordTypes);
    for (var _i = 0, keywords_1 = keywords; _i < keywords_1.length; _i++) {
        var keyword = keywords_1[_i];
        var type = schemaKeywordTypes[keyword];
        if (schema[keyword] !== undefined) {
            return type;
        }
    }
    return 'any';
}
function isPrimitiveType(schema) {
    if (schema.oneOf !== undefined || schema.anyOf !== undefined) {
        return false;
    }
    if (schema.type === 'object') {
        return schema.properties !== undefined
            ? Object.keys(schema.properties).length === 0
            : schema.additionalProperties === undefined;
    }
    if (schema.type === 'array') {
        if (schema.items === undefined) {
            return true;
        }
        return false;
    }
    return true;
}
function isJsonLike(contentType) {
    return contentType.search(/json/i) !== -1;
}
function langFromMime(contentType) {
    if (contentType.search(/xml/i) !== -1) {
        return 'xml';
    }
    return 'clike';
}
function isNamedDefinition(pointer) {
    return /^#\/components\/schemas\/[^\/]+$/.test(pointer || '');
}
function humanizeConstraints(schema) {
    var res = [];
    var stringRange;
    if (schema.minLength !== undefined && schema.maxLength !== undefined) {
        if (schema.minLength === schema.maxLength) {
            stringRange = schema.minLength + " characters";
        }
        else {
            stringRange = "[ " + schema.minLength + " .. " + schema.maxLength + " ] characters";
        }
    }
    else if (schema.maxLength !== undefined) {
        stringRange = "<= " + schema.maxLength + " characters";
    }
    else if (schema.minLength !== undefined) {
        if (schema.minLength === 1) {
            stringRange = 'non-empty';
        }
        else {
            stringRange = ">= " + schema.minLength + " characters";
        }
    }
    if (stringRange !== undefined) {
        res.push(stringRange);
    }
    var numberRange;
    if (schema.minimum !== undefined && schema.maximum !== undefined) {
        numberRange = schema.exclusiveMinimum ? '( ' : '[ ';
        numberRange += schema.minimum;
        numberRange += ' .. ';
        numberRange += schema.maximum;
        numberRange += schema.exclusiveMaximum ? ' )' : ' ]';
    }
    else if (schema.maximum !== undefined) {
        numberRange = schema.exclusiveMaximum ? '< ' : '<= ';
        numberRange += schema.maximum;
    }
    else if (schema.minimum !== undefined) {
        numberRange = schema.exclusiveMinimum ? '> ' : '>= ';
        numberRange += schema.minimum;
    }
    if (numberRange !== undefined) {
        res.push(numberRange);
    }
    return res;
}
function sortByRequired(fields, order) {
    if (order === void 0) { order = []; }
    fields.sort(function (a, b) {
        if (!a.required && b.required) {
            return 1;
        }
        else if (a.required && !b.required) {
            return -1;
        }
        else if (a.required && b.required) {
            return order.indexOf(a.name) > order.indexOf(b.name) ? 1 : -1;
        }
        else {
            return 0;
        }
    });
}
var SECURITY_SCHEMES_SECTION = 'section/Authentication/';


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/openapi.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/openapi.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/styled.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = hexToRgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = transparentizeHex;
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    var r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    var g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    var b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
    return { r: r, g: g, b: b };
}
function transparentizeHex(hex, alpha) {
    var _a = hexToRgb(hex), r = _a.r, g = _a.g, b = _a.b;
    if (alpha !== undefined) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    }
    else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elena/Projects/CARTO/ReDoc/src/utils/styled.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elena/Projects/CARTO/ReDoc/src/utils/styled.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "base64-js":
/***/ (function(module, exports) {

module.exports = require("base64-js");

/***/ }),

/***/ "call-me-maybe":
/***/ (function(module, exports) {

module.exports = require("call-me-maybe");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "co":
/***/ (function(module, exports) {

module.exports = require("co");

/***/ }),

/***/ "decko":
/***/ (function(module, exports) {

module.exports = require("decko");

/***/ }),

/***/ "dompurify":
/***/ (function(module, exports) {

module.exports = require("dompurify");

/***/ }),

/***/ "eventemitter3":
/***/ (function(module, exports) {

module.exports = require("eventemitter3");

/***/ }),

/***/ "ieee754":
/***/ (function(module, exports) {

module.exports = require("ieee754");

/***/ }),

/***/ "isarray":
/***/ (function(module, exports) {

module.exports = require("isarray");

/***/ }),

/***/ "js-yaml":
/***/ (function(module, exports) {

module.exports = require("js-yaml");

/***/ }),

/***/ "json-pointer":
/***/ (function(module, exports) {

module.exports = require("json-pointer");

/***/ }),

/***/ "json-schema-ref-parser":
/***/ (function(module, exports) {

module.exports = require("json-schema-ref-parser");

/***/ }),

/***/ "lunr":
/***/ (function(module, exports) {

module.exports = require("lunr");

/***/ }),

/***/ "mark.js":
/***/ (function(module, exports) {

module.exports = require("mark.js");

/***/ }),

/***/ "marked":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "mobx":
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "node-fetch":
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),

/***/ "openapi-sampler":
/***/ (function(module, exports) {

module.exports = require("openapi-sampler");

/***/ }),

/***/ "perfect-scrollbar":
/***/ (function(module, exports) {

module.exports = require("perfect-scrollbar");

/***/ }),

/***/ "prismjs":
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "prismjs/components/prism-actionscript.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-actionscript.js");

/***/ }),

/***/ "prismjs/components/prism-bash.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-bash.js");

/***/ }),

/***/ "prismjs/components/prism-c.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-c.js");

/***/ }),

/***/ "prismjs/components/prism-coffeescript.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-coffeescript.js");

/***/ }),

/***/ "prismjs/components/prism-cpp.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-cpp.js");

/***/ }),

/***/ "prismjs/components/prism-csharp.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-csharp.js");

/***/ }),

/***/ "prismjs/components/prism-go.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-go.js");

/***/ }),

/***/ "prismjs/components/prism-haskell.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-haskell.js");

/***/ }),

/***/ "prismjs/components/prism-java.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-java.js");

/***/ }),

/***/ "prismjs/components/prism-lua.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-lua.js");

/***/ }),

/***/ "prismjs/components/prism-markup.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-markup.js");

/***/ }),

/***/ "prismjs/components/prism-matlab.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-matlab.js");

/***/ }),

/***/ "prismjs/components/prism-objectivec.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-objectivec.js");

/***/ }),

/***/ "prismjs/components/prism-perl.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-perl.js");

/***/ }),

/***/ "prismjs/components/prism-php.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-php.js");

/***/ }),

/***/ "prismjs/components/prism-python.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-python.js");

/***/ }),

/***/ "prismjs/components/prism-r.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-r.js");

/***/ }),

/***/ "prismjs/components/prism-ruby.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-ruby.js");

/***/ }),

/***/ "prismjs/components/prism-scala.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-scala.js");

/***/ }),

/***/ "prismjs/components/prism-swift.js":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-swift.js");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropdown":
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),

/***/ "react-tabs":
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "slugify":
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),

/***/ "stickyfill":
/***/ (function(module, exports) {

module.exports = require("stickyfill");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
});
//# sourceMappingURL=redoc.lib.js.map