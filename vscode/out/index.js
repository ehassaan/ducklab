/******/ var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/css-loader@4.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@4.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css ***!
  \****************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_4_3_0_webpack_5_93_0_webpack_cli_4_10_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@4.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@4.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_4_3_0_webpack_5_93_0_webpack_cli_4_10_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_4_3_0_webpack_5_93_0_webpack_cli_4_10_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_4_3_0_webpack_5_93_0_webpack_cli_4_10_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".uUKK\\+nJBASaehvZN0VsWHQ\\=\\= {\r\n  width: 100px;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd","sourcesContent":[".issues-list {\r\n  width: 100px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"issues-list": "uUKK+nJBASaehvZN0VsWHQ=="
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@4.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/css-loader/dist/runtime/api.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@4.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/css-loader/dist/runtime/api.js ***!
  \****************************************************************************************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/.pnpm/preact@10.23.1/node_modules/preact/dist/preact.module.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/preact@10.23.1/node_modules/preact/dist/preact.module.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: function() { return /* binding */ b; },
/* harmony export */   Fragment: function() { return /* binding */ k; },
/* harmony export */   cloneElement: function() { return /* binding */ E; },
/* harmony export */   createContext: function() { return /* binding */ G; },
/* harmony export */   createElement: function() { return /* binding */ _; },
/* harmony export */   createRef: function() { return /* binding */ m; },
/* harmony export */   h: function() { return /* binding */ _; },
/* harmony export */   hydrate: function() { return /* binding */ D; },
/* harmony export */   isValidElement: function() { return /* binding */ t; },
/* harmony export */   options: function() { return /* binding */ l; },
/* harmony export */   render: function() { return /* binding */ B; },
/* harmony export */   toChildArray: function() { return /* binding */ H; }
/* harmony export */ });
var n,l,u,t,i,o,r,f,e,c,s,a,h={},p=[],v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function w(n){var l=n.parentNode;l&&l.removeChild(n)}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u:r,__i:-1,__u:0};return null==r&&null!=l.vnode&&l.vnode(f),f}function m(){return{current:null}}function k(n){return n.children}function b(n,l){this.props=n,this.context=l}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?x(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!P.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(P)}function P(){var n,u,t,o,r,e,c,s;for(i.sort(f);n=i.shift();)n.__d&&(u=i.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d({},r)).__v=r.__v+1,l.vnode&&l.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j(c,o,s),o.__e!=e&&C(o)),i.length>u&&i.sort(f));P.__r=0}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h:_[y.__i]||h,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y(i)?g(k,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a=f-r:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&a++,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o))}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(y(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++}}return-1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v.test(l)?u:u+"px"}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e,n.addEventListener(l,o?s:c,o)):n.removeEventListener(l,o?s:c,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b(m,M),h.constructor=T,h.render=q),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u)}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_)})}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y(L=null!=a&&a.type===k&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e}else u.__e=t.__e,u.__k=t.__k;l.__e(n,u,t)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z(t.__e,u,t,i,o,r,f,c,s);(a=l.diffed)&&a(u)}function j(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function z(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1}if(null===b)m===k||e&&l.data===k||(l.data=k);else{if(r=r&&n.call(l.childNodes),m=t.props||h,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A(l,s,null,d,o)}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A(l,s,g,m[s],o))}return l}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){l.__e(n,t)}}function V(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(u,t,i){var o,r,f,e;l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k,null,[u]),r||h,h,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j(f,u,e)}function D(n,l){B(n,l,D)}function E(l,u,t){var i,o,r,f,e=d({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),g(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,M(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=p.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this))},b.prototype.render=k,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e=0,c=F(!1),s=F(!0),a=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@1.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@1.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/.pnpm/css-loader@4.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ "./node_modules/.pnpm/css-loader@4.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@1.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@1.3.0_webpack@5.93.0_webpack-cli@4.10.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/render.ts":
/*!***********************!*\
  !*** ./src/render.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
// We've set up this sample using CSS modules, which lets you import class
// names into JavaScript: https://github.com/css-modules/css-modules
// You can configure or change this in the webpack.config.js file.

// This function is called to render your contents.
function render({ container, value }) {
    // Format the JSON and insert it as <pre><code>{ ... }</code></pre>
    // Replace this with your custom code!
    const pre = document.createElement('pre');
    pre.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0__.json);
    // Create a simple table with issue titles and links
    const table = document.createElement('table');
    table.className = 'issues-list';
    const headerRow = document.createElement('tr');
    const tableHeaders = ['Issue', 'Description'];
    tableHeaders.forEach(label => {
        const header = document.createElement('th');
        header.textContent = label;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    value.forEach(item => {
        const row = document.createElement('tr');
        const title = document.createElement('td');
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.title;
        title.appendChild(link);
        row.appendChild(title);
        const body = document.createElement('td');
        body.textContent = item.body;
        row.appendChild(body);
        table.appendChild(row);
    });
    pre.appendChild(table);
    container.appendChild(pre);
}


/***/ }),

/***/ "./node_modules/.pnpm/vscode-notebook-error-overlay@1.0.1/node_modules/vscode-notebook-error-overlay/dist/index.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-notebook-error-overlay@1.0.1/node_modules/vscode-notebook-error-overlay/dist/index.js ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay */ "./node_modules/.pnpm/vscode-notebook-error-overlay@1.0.1/node_modules/vscode-notebook-error-overlay/dist/overlay.js");
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

let manager;
// This conditional will be checked by webpack so the error overlay isn't
// included in the production build:
if (true) {
    manager = new _overlay__WEBPACK_IMPORTED_MODULE_0__.ErrorOverlayManager();
}
else {}
/* harmony default export */ __webpack_exports__["default"] = (manager);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/vscode-notebook-error-overlay@1.0.1/node_modules/vscode-notebook-error-overlay/dist/overlay.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-notebook-error-overlay@1.0.1/node_modules/vscode-notebook-error-overlay/dist/overlay.js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorOverlayManager: function() { return /* binding */ ErrorOverlayManager; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/.pnpm/preact@10.23.1/node_modules/preact/dist/preact.module.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./node_modules/.pnpm/vscode-notebook-error-overlay@1.0.1/node_modules/vscode-notebook-error-overlay/dist/ui.js");
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/


const isPromiseLike = (x) => typeof x === 'object' && !!x && typeof x.then === 'function';
/**
 * Implementation of the error overlay manager.
 */
class ErrorOverlayManager {
    constructor() {
        this.containers = [];
        this.unmountOverlay = new Map();
        this.isInstalledGlobally = false;
        this.listener = (rawEvent) => {
            if (rawEvent.data.type === 'webpackErrors') {
                for (const container of this.containers) {
                    this.displayErrorIn(container, rawEvent.data.data, 1 /* Compilation */);
                }
            }
        };
    }
    /**
     * @inheritdoc
     */
    install(container) {
        if (!this.isInstalledGlobally) {
            this.isInstalledGlobally = true;
            window.addEventListener('message', this.listener);
        }
        const containers = this.containers.filter((c) => document.body.contains(c));
        containers.push(container);
        this.containers = containers;
    }
    wrap(container, fn) {
        if (!container) {
            return;
        }
        this.hideErrorIn(container, false);
        this.install(container);
        const retry = () => this.wrap(container, fn);
        try {
            const ret = fn();
            if (ret && isPromiseLike(ret)) {
                return ret.then((v) => v, (err) => {
                    this.displayErrorIn(container, [err], 0 /* Runtime */, retry);
                    return undefined;
                });
            }
        }
        catch (err) {
            this.displayErrorIn(container, [err], 0 /* Runtime */, retry);
        }
        return undefined;
    }
    /**
     * @inheritdoc
     */
    uninstall() {
        for (const unmount of this.unmountOverlay.values()) {
            unmount(false);
        }
        this.unmountOverlay.clear();
        window.removeEventListener('message', this.listener);
    }
    displayErrorIn(container, errors, source, retry) {
        if (!container) {
            return;
        }
        this.hideErrorIn(container, false); // make sure we don't ovewrite and get confused
        const errorStrs = errors.map((e) => typeof e === 'string' ? e : e.stack || e.message || String(e));
        const elem = ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui__WEBPACK_IMPORTED_MODULE_1__.Overlay, { source: source, close: () => this.hideErrorIn(container, true), errors: errorStrs }));
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(elem, container);
        this.unmountOverlay.set(container, (allowRetry) => {
            const overlay = container.querySelector('.notebook-error-overlay');
            if (overlay) {
                container.removeChild(overlay);
            }
            if (allowRetry && retry) {
                retry();
            }
        });
    }
    hideErrorIn(container, allowRetry) {
        const unmountFn = this.unmountOverlay.get(container);
        if (unmountFn) {
            unmountFn(allowRetry);
            this.unmountOverlay.delete(container);
        }
    }
}
//# sourceMappingURL=overlay.js.map

/***/ }),

/***/ "./node_modules/.pnpm/vscode-notebook-error-overlay@1.0.1/node_modules/vscode-notebook-error-overlay/dist/ui.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-notebook-error-overlay@1.0.1/node_modules/vscode-notebook-error-overlay/dist/ui.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Overlay: function() { return /* binding */ Overlay; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/.pnpm/preact@10.23.1/node_modules/preact/dist/preact.module.js");
/* harmony import */ var vscode_webview_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode-webview-tools */ "./node_modules/.pnpm/vscode-webview-tools@0.1.1/node_modules/vscode-webview-tools/dist/pkg/parse-colors.js");
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/


const colors = (0,vscode_webview_tools__WEBPACK_IMPORTED_MODULE_1__.parseColors)();
const Overlay = ({ errors, source, close }) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: "notebook-error-overlay", style: { minHeight: 500 } },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: 'auto',
            fontFamily: colors["font-family" /* FontFamily */],
            fontSize: colors["font-size" /* FontSize */],
            fontWeight: colors["font-weight" /* FontWeight */],
            background: colors["inputValidation-errorBackground" /* InputValidationErrorBackground */],
            border: `1px solid ${colors["inputValidation-errorBorder" /* InputValidationErrorBorder */]}`,
            color: colors["inputValidation-errorForeground" /* InputValidationErrorForeground */],
            padding: 5,
        } },
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", { style: { fontSize: '1.5em', margin: '0 0 0.25em', fontWeight: 'normal' } },
            "Errors occurred when ",
            source === 1 /* Compilation */ ? 'compiling' : 'rendering',
            ":"),
        errors.map((err, i) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(ErrorMessage, { error: err, key: i })))),
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(CloseButton, { onClick: close, source: source })));
const CloseButton = ({ source, onClick, }) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: onClick, title: source === 1 /* Compilation */ ? 'Dismiss' : 'Retry', style: {
        position: 'absolute',
        top: 3,
        right: 3,
        border: 0,
        background: 'none',
        padding: 0,
        margin: 0,
        outline: 0,
        cursor: 'pointer',
    } }, source === 1 /* Compilation */ ? ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.00001 8.70711L11.6465 12.3536L12.3536 11.6465L8.70711 8.00001L12.3536 4.35356L11.6465 3.64645L8.00001 7.2929L4.35356 3.64645L3.64645 4.35356L7.2929 8.00001L3.64645 11.6465L4.35356 12.3536L8.00001 8.70711Z", fill: "#C5C5C5" }))) : ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.00583 8.26691L0.78 9.50003L0 8.73003L2.09 6.66003L2.85 6.67003L4.94 8.79003L4.18 9.55003L3.01348 8.36995C3.20279 10.9587 5.363 13 8 13C9.91063 13 11.571 11.9283 12.4127 10.3533L13.226 10.95C12.1959 12.771 10.2415 14 8 14C4.77573 14 2.14547 11.4568 2.00583 8.26691ZM12.9961 7.80051L11.76 6.55005L11 7.31005L13.09 9.42005L13.85 9.43005L15.94 7.36005L15.19 6.60005L13.996 7.78004C13.8803 4.56822 11.2401 2 8 2C5.83726 2 3.94178 3.14429 2.88597 4.86047L3.69562 5.45435C4.56645 3.98499 6.16818 3 8 3C10.6946 3 12.8914 5.13152 12.9961 7.80051Z", fill: "#C5C5C5" })))));
const ErrorMessage = ({ error }) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("pre", { style: {
        fontFamily: colors["editor-font-family" /* EditorFontFamily */],
        fontSize: colors["editor-font-size" /* EditorFontSize */],
        fontWeight: colors["editor-font-weight" /* EditorFontWeight */],
        width: '100%',
        overflowX: 'auto',
        lineHeight: '1.5em'
    } }, error.split('\n').map((line, i) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("code", { key: i, style: {
        padding: '0.1em 0.3em',
        background: i % 2 ? 'rgba(0, 0, 0, 0.2)' : 'none',
        display: 'table-row',
        whitespace: 'no-wrap',
    } }, line)))));
//# sourceMappingURL=ui.js.map

/***/ }),

/***/ "./node_modules/.pnpm/vscode-webview-tools@0.1.1/node_modules/vscode-webview-tools/dist/pkg/parse-colors.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-webview-tools@0.1.1/node_modules/vscode-webview-tools/dist/pkg/parse-colors.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeColors: function() { return /* binding */ observeColors; },
/* harmony export */   parseColors: function() { return /* binding */ parseColors; }
/* harmony export */ });
/**
 * Parses the vscode CSS variables from the document, and returns them.
 */
const parseColors = () => {
    const rawVars = String(document.documentElement.getAttribute('style'));
    const re = new RegExp('--vscode-(.*?):(.*?)(;|$)', 'g');
    const vars = {};
    let match;
    while ((match = re.exec(rawVars)) !== null) {
        const [, key, value] = match;
        vars[key] = value;
    }
    return vars;
};
/**
 * Watches the body and calls the callback function when the colors change.
 * This can very easily be wrapped into a react or preact hook, for example:
 *
 * ```
 * import { useState, useEffect } from 'preact/hooks';
 *
 * const useCssVariables = () => {
 *   const [vars, setVars] = useState<{ [key: string]: string }>({});
 *   useEffect(() => observeColors(setVars), []);
 *   return vars;
 * }
 * ```
 */
const observeColors = (onChange) => {
    onChange(parseColors());
    const observer = new MutationObserver(() => {
        onChange(parseColors());
    });
    observer.observe(document.documentElement, {
        attributeFilter: ['style'],
        childList: false,
        subtree: false,
    });
    return () => observer.disconnect();
};
//# sourceMappingURL=parse-colors.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ !function() {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function() { return module['default']; } :
/******/ 			function() { return module; };
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ !function() {
/******/ 	__webpack_require__.p = "";
/******/ }();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ !function() {
/******/ 	__webpack_require__.nc = undefined;
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activate: function() { return /* binding */ activate; }
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.ts");
/* harmony import */ var vscode_notebook_error_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode-notebook-error-overlay */ "./node_modules/.pnpm/vscode-notebook-error-overlay@1.0.1/node_modules/vscode-notebook-error-overlay/dist/index.js");


__webpack_require__.p = new URL(import.meta.url.replace(/[^/]+$/, '') + "").toString();
// ----------------------------------------------------------------------------
// This is the entrypoint to the notebook renderer's webview client-side code.
// This contains some boilerplate that calls the `render()` function when new
// output is available. You probably don't need to change this code; put your
// rendering logic inside of the `render()` function.
// ----------------------------------------------------------------------------
const activate = context => {
    return {
        renderOutputItem(outputItem, element) {
            let shadow = element.shadowRoot;
            if (!shadow) {
                shadow = element.attachShadow({ mode: 'open' });
                const root = document.createElement('div');
                root.id = 'root';
                shadow.append(root);
            }
            const root = shadow.querySelector('#root');
            vscode_notebook_error_overlay__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(root, () => {
                root.innerHTML = '';
                const node = document.createElement('div');
                root.appendChild(node);
                (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)({ container: node, mime: outputItem.mime, value: outputItem.json(), context });
            });
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        disposeOutputItem(outputId) {
            // Do any teardown here. outputId is the cell output being deleted, or
            // undefined if we're clearing all outputs.
        }
    };
};

var __webpack_exports__activate = __webpack_exports__.activate;
export { __webpack_exports__activate as activate };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSztBQUNoSyw4QkFBOEIsd0pBQTJCO0FBQ3pEO0FBQ0EsMkVBQTJFLG1CQUFtQixLQUFLLFdBQVcsOEVBQThFLFVBQVUsdUNBQXVDLG1CQUFtQixLQUFLLHVCQUF1QjtBQUM1UjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1QxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQSxnQ0FBZ0MsNEZBQTRGLGdCQUFnQix5QkFBeUIsU0FBUyxjQUFjLG1CQUFtQixvQkFBb0Isa0JBQWtCLGVBQWUscURBQXFELHdMQUF3TCx1QkFBdUIsc0JBQXNCLE9BQU8sa0lBQWtJLDRDQUE0QyxhQUFhLE9BQU8sY0FBYyxjQUFjLGtCQUFrQixnQkFBZ0IsNEJBQTRCLGdCQUFnQiw0Q0FBNEMsVUFBVSxlQUFlLG9EQUFvRCwwQ0FBMEMsY0FBYyxRQUFRLGdDQUFnQyw4QkFBOEIsZUFBZSx3Q0FBd0MsdUJBQXVCLE1BQU0sYUFBYSxjQUFjLG9HQUFvRyxhQUFhLG9CQUFvQixjQUFjLFlBQVksMEVBQTBFLDJNQUEyTSxRQUFRLGtDQUFrQyx1Q0FBdUMsaUNBQWlDLElBQUksK1dBQStXLGdCQUFnQixrQkFBa0IsNENBQTRDLGlCQUFpQixJQUFJLGdOQUFnTixXQUFXLHdjQUF3YyxhQUFhLElBQUksMkVBQTJFLGtCQUFrQixRQUFRLDhCQUE4QixnQkFBZ0IsY0FBYyxvQ0FBb0MsU0FBUyxzRkFBc0YsR0FBRyxtQkFBbUIsK0JBQStCLFNBQVMsZ0JBQWdCLHNFQUFzRSxPQUFPLGVBQWUsb0JBQW9CLHdDQUF3QyxpRUFBaUUsMkNBQTJDLGlCQUFpQixFQUFFLFNBQVMsOERBQThELElBQUksZUFBZSw4REFBOEQsS0FBSyxTQUFTLGtCQUFrQixnR0FBZ0csc0JBQXNCLE1BQU0seURBQXlELEtBQUssc0ZBQXNGLGtEQUFrRCxnTUFBZ00sZ0dBQWdHLEtBQUssd0ZBQXdGLGdLQUFnSyxrQkFBa0IsUUFBUSxVQUFVLG9IQUFvSCxjQUFjLG1CQUFtQixXQUFXLHVCQUF1QixxQkFBcUIsdUJBQXVCLGlDQUFpQyxnQ0FBZ0MsNkNBQTZDLHNDQUFzQyw4REFBOEQsOEJBQThCLDZQQUE2UCxxSkFBcUosMk9BQTJPLEtBQUssb05BQW9OLHdHQUF3RyxZQUFZLE1BQU0sZUFBZSx5QkFBeUIsaUNBQWlDLFFBQVEsbUhBQW1ILDRCQUE0QixFQUFFLHlEQUF5RCw2RUFBNkUsZUFBZSx5QkFBeUIsU0FBUyxRQUFRLHFFQUFxRSxxQkFBcUIsZ0RBQWdELGlRQUFpUSxTQUFTLDBCQUEwQixvQkFBb0IsaUNBQWlDLGlCQUFpQiw2QkFBNkIsNkJBQTZCLGFBQWEscUZBQXFGLG1CQUFtQixrQkFBa0IsYUFBYSxZQUFZLFdBQVcsMEJBQTBCLHFDQUFxQyxJQUFJLG9DQUFvQyxVQUFVLEVBQUUsU0FBUyxnQkFBZ0IsRUFBRSw4QkFBOEIsK0NBQStDLG9KQUFvSixXQUFXLDhFQUE4RSxjQUFjLE1BQU0sWUFBWSw4Q0FBOEMsb0RBQW9ELDZDQUE2QyxLQUFLLDhEQUE4RCxLQUFLLHNCQUFzQix3Q0FBd0Msb0NBQW9DLHlDQUF5Qyw4QkFBOEIsK0VBQStFLGdCQUFnQixtS0FBbUssMEZBQTBGLDJKQUEySixJQUFJLHFCQUFxQixxSkFBcUosU0FBUyxrQkFBa0IsSUFBSSx5QkFBeUIsK0JBQStCLG9DQUFvQyxpQkFBaUIsU0FBUyxZQUFZLGtCQUFrQixRQUFRLG1HQUFtRyw4QkFBOEIseUJBQXlCLFNBQVMsV0FBVyxrQkFBa0IsbUJBQW1CLFdBQVcsaURBQWlELHVEQUF1RCxrQkFBa0IsNkJBQTZCLGtCQUFrQixZQUFZLHdPQUF3TyxnQkFBZ0IsU0FBUyxrQkFBa0Isa0JBQWtCLFVBQVUseUlBQXlJLG9IQUFvSCxnQkFBZ0IsT0FBTyw2Q0FBNkMscUJBQXFCLHNCQUFzQixRQUFRLHdDQUF3QywwQ0FBMEMsU0FBUyxzQ0FBc0MsT0FBTyx3Q0FBd0MsK0NBQStDLGNBQWMsRUFBRSxzQkFBc0IsVUFBVSw2QkFBNkIsa0NBQWtDLDBDQUEwQyxlQUFlLDhDQUE4QyxhQUFhLHNCQUFzQixjQUFjLE9BQU8seUJBQXlCLG1LQUFtSyw0QkFBNEIsU0FBUyxJQUFJLFNBQVMsbUJBQW1CLG9DQUFvQyxvQ0FBb0MsTUFBTSw4REFBOEQsNENBQTRDLDRFQUE0RSxxQ0FBcUMsb0RBQW9ELGtJQUFrSSwyQkFBMkIsaUNBQWdPO0FBQzl3Vzs7Ozs7Ozs7Ozs7QUNEQSxVQUFVLG1CQUFPLENBQUMsc1NBQWlKO0FBQ25LLDBCQUEwQixtQkFBTyxDQUFDLHlUQUF5Sjs7QUFFM0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7Ozs7Ozs7OztBQ2xCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixjQUFjOztBQUV4Rzs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNVFBLDBFQUEwRTtBQUMxRSxvRUFBb0U7QUFDcEUsa0VBQWtFO0FBQzdCO0FBZXJDLG1EQUFtRDtBQUM1QyxTQUFTLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWU7SUFDdkQsbUVBQW1FO0lBQ25FLHNDQUFzQztJQUN0QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDRDQUFVLENBQUMsQ0FBQztJQUU5QixvREFBb0Q7SUFDcEQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxLQUFLLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztJQUNoQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLE1BQU0sWUFBWSxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDNUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMzQixTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU3QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUREO0FBQ0E7QUFDQTtBQUNnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQXNDO0FBQzFDLGtCQUFrQix5REFBbUI7QUFDckM7QUFDQSxLQUFLLEVBTUo7QUFDRCwrREFBZSxPQUFPLEVBQUM7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ21DO0FBQ0o7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLHNCQUFzQix5Q0FBQyxDQUFDLHdDQUFPLElBQUksbUZBQW1GO0FBQ3RILFFBQVEsOENBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUMyQjtBQUN3QjtBQUNuRCxlQUFlLGlFQUFXO0FBQ25CLG1CQUFtQix1QkFBdUIsTUFBTSx5Q0FBQyxVQUFVLDhDQUE4QyxrQkFBa0I7QUFDbEksSUFBSSx5Q0FBQyxVQUFVO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUVBQXVFO0FBQ3hHO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsUUFBUSx5Q0FBQyxTQUFTLFNBQVMsaUVBQWlFO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5Q0FBQyxpQkFBaUIsb0JBQW9CO0FBQ3RFLElBQUkseUNBQUMsZ0JBQWdCLGdDQUFnQztBQUNyRCx1QkFBdUIsa0JBQWtCLE1BQU0seUNBQUMsYUFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQyx5Q0FBQyxVQUFVLG9HQUFvRztBQUMxSixJQUFJLHlDQUFDLFdBQVcsaVJBQWlSLE9BQU8seUNBQUMsVUFBVSxvR0FBb0c7QUFDdlosSUFBSSx5Q0FBQyxXQUFXLDhsQkFBOGxCO0FBQzltQix3QkFBd0IsT0FBTyxNQUFNLHlDQUFDLFVBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzQ0FBc0MseUNBQUMsV0FBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNCQUFzQjtBQUNsQztBQUNBO0FBQ0Esd0NBQXdDLHVCQUF1QixJQUFJO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7OztTQ3hDQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQSxlQUFlLDRCQUE0QjtVQUMzQyxlQUFlO1VBQ2YsaUNBQWlDLFdBQVc7VUFDNUM7VUFDQTs7Ozs7VUNQQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBLDhDQUE4Qzs7Ozs7VUNBOUM7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7OztVQ05BOzs7OztVQ0FBOzs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUN1QjtBQVF6RCxxQkFBdUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxlQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUF1QyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFeEgsK0VBQStFO0FBQy9FLDhFQUE4RTtBQUM5RSw2RUFBNkU7QUFDN0UsNkVBQTZFO0FBQzdFLHFEQUFxRDtBQUNyRCwrRUFBK0U7QUFFeEUsTUFBTSxRQUFRLEdBQXVCLE9BQU8sQ0FBQyxFQUFFO0lBQ3JELE9BQU87UUFDTixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsT0FBTztZQUNuQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDYixNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztnQkFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBYyxPQUFPLENBQUUsQ0FBQztZQUN6RCxxRUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdkIsK0NBQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUNELDZEQUE2RDtRQUM3RCxpQkFBaUIsQ0FBQyxRQUFRO1lBQ3pCLHNFQUFzRTtZQUN0RSwyQ0FBMkM7UUFDNUMsQ0FBQztLQUNELENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3RlYm9vay1yZW5kZXJlci1zYW1wbGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25vdGVib29rLXJlbmRlcmVyLXNhbXBsZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDQuMy4wX3dlYnBhY2tANS45My4wX3dlYnBhY2stY2xpQDQuMTAuMF8vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3RlYm9vay1yZW5kZXJlci1zYW1wbGUvLi9ub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjIzLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stcmVuZGVyZXItc2FtcGxlLy4vc3JjL3N0eWxlLmNzcz82NDUyIiwid2VicGFjazovL25vdGVib29rLXJlbmRlcmVyLXNhbXBsZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMS4zLjBfd2VicGFja0A1LjkzLjBfd2VicGFjay1jbGlANC4xMC4wXy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stcmVuZGVyZXItc2FtcGxlLy4vc3JjL3JlbmRlci50cyIsIndlYnBhY2s6Ly9ub3RlYm9vay1yZW5kZXJlci1zYW1wbGUvLi9ub2RlX21vZHVsZXMvLnBucG0vdnNjb2RlLW5vdGVib29rLWVycm9yLW92ZXJsYXlAMS4wLjEvbm9kZV9tb2R1bGVzL3ZzY29kZS1ub3RlYm9vay1lcnJvci1vdmVybGF5L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stcmVuZGVyZXItc2FtcGxlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ZzY29kZS1ub3RlYm9vay1lcnJvci1vdmVybGF5QDEuMC4xL25vZGVfbW9kdWxlcy92c2NvZGUtbm90ZWJvb2stZXJyb3Itb3ZlcmxheS9kaXN0L292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stcmVuZGVyZXItc2FtcGxlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ZzY29kZS1ub3RlYm9vay1lcnJvci1vdmVybGF5QDEuMC4xL25vZGVfbW9kdWxlcy92c2NvZGUtbm90ZWJvb2stZXJyb3Itb3ZlcmxheS9kaXN0L3VpLmpzIiwid2VicGFjazovL25vdGVib29rLXJlbmRlcmVyLXNhbXBsZS8uL25vZGVfbW9kdWxlcy8ucG5wbS92c2NvZGUtd2Vidmlldy10b29sc0AwLjEuMS9ub2RlX21vZHVsZXMvdnNjb2RlLXdlYnZpZXctdG9vbHMvZGlzdC9wa2cvcGFyc2UtY29sb3JzLmpzIiwid2VicGFjazovL25vdGVib29rLXJlbmRlcmVyLXNhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ub3RlYm9vay1yZW5kZXJlci1zYW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stcmVuZGVyZXItc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub3RlYm9vay1yZW5kZXJlci1zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub3RlYm9vay1yZW5kZXJlci1zYW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub3RlYm9vay1yZW5kZXJlci1zYW1wbGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stcmVuZGVyZXItc2FtcGxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub3RlYm9vay1yZW5kZXJlci1zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANC4zLjBfd2VicGFja0A1LjkzLjBfd2VicGFjay1jbGlANC4xMC4wXy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudVVLS1xcXFwrbkpCQVNhZWh2Wk4wVnNXSFFcXFxcPVxcXFw9IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmlzc3Vlcy1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaXNzdWVzLWxpc3RcIjogXCJ1VUtLK25KQkFTYWVodlpOMFZzV0hRPT1cIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIG4sbCx1LHQsaSxvLHIsZixlLGMscyxhLGg9e30scD1bXSx2PS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2kseT1BcnJheS5pc0FycmF5O2Z1bmN0aW9uIGQobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gdyhuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBfKGwsdSx0KXt2YXIgaSxvLHIsZj17fTtmb3IociBpbiB1KVwia2V5XCI9PXI/aT11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOnQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihyIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbcl0mJihmW3JdPWwuZGVmYXVsdFByb3BzW3JdKTtyZXR1cm4gZyhsLGYsaSxvLG51bGwpfWZ1bmN0aW9uIGcobix0LGksbyxyKXt2YXIgZj17dHlwZTpuLHByb3BzOnQsa2V5OmkscmVmOm8sX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09cj8rK3U6cixfX2k6LTEsX191OjB9O3JldHVybiBudWxsPT1yJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gbSgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGsobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gYihuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiB4KG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz94KG4uX18sbi5fX2krMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT94KG4pOm51bGx9ZnVuY3Rpb24gQyhuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIEMobil9fWZ1bmN0aW9uIE0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmaS5wdXNoKG4pJiYhUC5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKFApfWZ1bmN0aW9uIFAoKXt2YXIgbix1LHQsbyxyLGUsYyxzO2ZvcihpLnNvcnQoZik7bj1pLnNoaWZ0KCk7KW4uX19kJiYodT1pLmxlbmd0aCxvPXZvaWQgMCxlPShyPSh0PW4pLl9fdikuX19lLGM9W10scz1bXSx0Ll9fUCYmKChvPWQoe30scikpLl9fdj1yLl9fdisxLGwudm5vZGUmJmwudm5vZGUobyksTyh0Ll9fUCxvLHIsdC5fX24sdC5fX1AubmFtZXNwYWNlVVJJLDMyJnIuX191P1tlXTpudWxsLGMsbnVsbD09ZT94KHIpOmUsISEoMzImci5fX3UpLHMpLG8uX192PXIuX192LG8uX18uX19rW28uX19pXT1vLGooYyxvLHMpLG8uX19lIT1lJiZDKG8pKSxpLmxlbmd0aD51JiZpLnNvcnQoZikpO1AuX19yPTB9ZnVuY3Rpb24gUyhuLGwsdSx0LGksbyxyLGYsZSxjLHMpe3ZhciBhLHYseSxkLHcsXz10JiZ0Ll9fa3x8cCxnPWwubGVuZ3RoO2Zvcih1Ll9fZD1lLCQodSxsLF8pLGU9dS5fX2QsYT0wO2E8ZzthKyspbnVsbCE9KHk9dS5fX2tbYV0pJiZcImJvb2xlYW5cIiE9dHlwZW9mIHkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHkmJih2PS0xPT09eS5fX2k/aDpfW3kuX19pXXx8aCx5Ll9faT1hLE8obix5LHYsaSxvLHIsZixlLGMscyksZD15Ll9fZSx5LnJlZiYmdi5yZWYhPXkucmVmJiYodi5yZWYmJk4odi5yZWYsbnVsbCx5KSxzLnB1c2goeS5yZWYseS5fX2N8fGQseSkpLG51bGw9PXcmJm51bGwhPWQmJih3PWQpLDY1NTM2JnkuX191fHx2Ll9faz09PXkuX19rP2U9SSh5LGUsbik6XCJmdW5jdGlvblwiPT10eXBlb2YgeS50eXBlJiZ2b2lkIDAhPT15Ll9fZD9lPXkuX19kOmQmJihlPWQubmV4dFNpYmxpbmcpLHkuX19kPXZvaWQgMCx5Ll9fdSY9LTE5NjYwOSk7dS5fX2Q9ZSx1Ll9fZT13fWZ1bmN0aW9uICQobixsLHUpe3ZhciB0LGksbyxyLGYsZT1sLmxlbmd0aCxjPXUubGVuZ3RoLHM9YyxhPTA7Zm9yKG4uX19rPVtdLHQ9MDt0PGU7dCsrKXI9dCthLG51bGwhPShpPW4uX19rW3RdPW51bGw9PShpPWxbdF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIGl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGk/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgaXx8XCJudW1iZXJcIj09dHlwZW9mIGl8fFwiYmlnaW50XCI9PXR5cGVvZiBpfHxpLmNvbnN0cnVjdG9yPT1TdHJpbmc/ZyhudWxsLGksbnVsbCxudWxsLG51bGwpOnkoaSk/ZyhrLHtjaGlsZHJlbjppfSxudWxsLG51bGwsbnVsbCk6dm9pZCAwPT09aS5jb25zdHJ1Y3RvciYmaS5fX2I+MD9nKGkudHlwZSxpLnByb3BzLGkua2V5LGkucmVmP2kucmVmOm51bGwsaS5fX3YpOmkpPyhpLl9fPW4saS5fX2I9bi5fX2IrMSxmPUwoaSx1LHIscyksaS5fX2k9ZixvPW51bGwsLTEhPT1mJiYocy0tLChvPXVbZl0pJiYoby5fX3V8PTEzMTA3MikpLG51bGw9PW98fG51bGw9PT1vLl9fdj8oLTE9PWYmJmEtLSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBpLnR5cGUmJihpLl9fdXw9NjU1MzYpKTpmIT09ciYmKGY9PXItMT9hPWYtcjpmPT1yKzE/YSsrOmY+cj9zPmUtcj9hKz1mLXI6YS0tOmY8ciYmYSsrLGYhPT10K2EmJihpLl9fdXw9NjU1MzYpKSk6KG89dVtyXSkmJm51bGw9PW8ua2V5JiZvLl9fZSYmMD09KDEzMTA3MiZvLl9fdSkmJihvLl9fZT09bi5fX2QmJihuLl9fZD14KG8pKSxWKG8sbywhMSksdVtyXT1udWxsLHMtLSk7aWYocylmb3IodD0wO3Q8Yzt0KyspbnVsbCE9KG89dVt0XSkmJjA9PSgxMzEwNzImby5fX3UpJiYoby5fX2U9PW4uX19kJiYobi5fX2Q9eChvKSksVihvLG8pKX1mdW5jdGlvbiBJKG4sbCx1KXt2YXIgdCxpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZSl7Zm9yKHQ9bi5fX2ssaT0wO3QmJmk8dC5sZW5ndGg7aSsrKXRbaV0mJih0W2ldLl9fPW4sbD1JKHRbaV0sbCx1KSk7cmV0dXJuIGx9bi5fX2UhPWwmJihsJiZuLnR5cGUmJiF1LmNvbnRhaW5zKGwpJiYobD14KG4pKSx1Lmluc2VydEJlZm9yZShuLl9fZSxsfHxudWxsKSxsPW4uX19lKTtkb3tsPWwmJmwubmV4dFNpYmxpbmd9d2hpbGUobnVsbCE9bCYmOD09PWwubm9kZVR5cGUpO3JldHVybiBsfWZ1bmN0aW9uIEgobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fCh5KG4pP24uc29tZShmdW5jdGlvbihuKXtIKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gTChuLGwsdSx0KXt2YXIgaT1uLmtleSxvPW4udHlwZSxyPXUtMSxmPXUrMSxlPWxbdV07aWYobnVsbD09PWV8fGUmJmk9PWUua2V5JiZvPT09ZS50eXBlJiYwPT0oMTMxMDcyJmUuX191KSlyZXR1cm4gdTtpZih0PihudWxsIT1lJiYwPT0oMTMxMDcyJmUuX191KT8xOjApKWZvcig7cj49MHx8ZjxsLmxlbmd0aDspe2lmKHI+PTApe2lmKChlPWxbcl0pJiYwPT0oMTMxMDcyJmUuX191KSYmaT09ZS5rZXkmJm89PT1lLnR5cGUpcmV0dXJuIHI7ci0tfWlmKGY8bC5sZW5ndGgpe2lmKChlPWxbZl0pJiYwPT0oMTMxMDcyJmUuX191KSYmaT09ZS5rZXkmJm89PT1lLnR5cGUpcmV0dXJuIGY7ZisrfX1yZXR1cm4tMX1mdW5jdGlvbiBUKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLG51bGw9PXU/XCJcIjp1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8di50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gQShuLGwsdSx0LGkpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobi5zdHlsZS5jc3NUZXh0PXQ9XCJcIiksdClmb3IobCBpbiB0KXUmJmwgaW4gdXx8VChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KXQmJnVbbF09PT10W2xdfHxUKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvKFBvaW50ZXJDYXB0dXJlKSR8Q2FwdHVyZSQvaSxcIiQxXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG58fFwib25Gb2N1c091dFwiPT09bHx8XCJvbkZvY3VzSW5cIj09PWw/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/dD91LnU9dC51Oih1LnU9ZSxuLmFkZEV2ZW50TGlzdGVuZXIobCxvP3M6YyxvKSk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9zOmMsbyk7ZWxzZXtpZihcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PWkpbD1sLnJlcGxhY2UoL3hsaW5rKEh8OmgpLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcIndpZHRoXCIhPWwmJlwiaGVpZ2h0XCIhPWwmJlwiaHJlZlwiIT1sJiZcImxpc3RcIiE9bCYmXCJmb3JtXCIhPWwmJlwidGFiSW5kZXhcIiE9bCYmXCJkb3dubG9hZFwiIT1sJiZcInJvd1NwYW5cIiE9bCYmXCJjb2xTcGFuXCIhPWwmJlwicm9sZVwiIT1sJiZcInBvcG92ZXJcIiE9bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsPT11fHwhMT09PXUmJlwiLVwiIT09bFs0XT9uLnJlbW92ZUF0dHJpYnV0ZShsKTpuLnNldEF0dHJpYnV0ZShsLFwicG9wb3ZlclwiPT1sJiYxPT11P1wiXCI6dSkpfX1mdW5jdGlvbiBGKG4pe3JldHVybiBmdW5jdGlvbih1KXtpZih0aGlzLmwpe3ZhciB0PXRoaXMubFt1LnR5cGUrbl07aWYobnVsbD09dS50KXUudD1lKys7ZWxzZSBpZih1LnQ8dC51KXJldHVybjtyZXR1cm4gdChsLmV2ZW50P2wuZXZlbnQodSk6dSl9fX1mdW5jdGlvbiBPKG4sdSx0LGksbyxyLGYsZSxjLHMpe3ZhciBhLGgscCx2LHcsXyxnLG0seCxDLE0sUCwkLEksSCxMLFQ9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7MTI4JnQuX191JiYoYz0hISgzMiZ0Ll9fdSkscj1bZT11Ll9fZT10Ll9fZV0pLChhPWwuX19iKSYmYSh1KTtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFQpdHJ5e2lmKG09dS5wcm9wcyx4PVwicHJvdG90eXBlXCJpbiBUJiZULnByb3RvdHlwZS5yZW5kZXIsQz0oYT1ULmNvbnRleHRUeXBlKSYmaVthLl9fY10sTT1hP0M/Qy5wcm9wcy52YWx1ZTphLl9fOmksdC5fX2M/Zz0oaD11Ll9fYz10Ll9fYykuX189aC5fX0U6KHg/dS5fX2M9aD1uZXcgVChtLE0pOih1Ll9fYz1oPW5ldyBiKG0sTSksaC5jb25zdHJ1Y3Rvcj1ULGgucmVuZGVyPXEpLEMmJkMuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PU0saC5fX249aSxwPWguX19kPSEwLGguX19oPVtdLGguX3NiPVtdKSx4JiZudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLHgmJm51bGwhPVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1kKHt9LGguX19zKSksZChoLl9fcyxULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHY9aC5wcm9wcyx3PWguc3RhdGUsaC5fX3Y9dSxwKXgmJm51bGw9PVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSx4JiZudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYoeCYmbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT12JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLE0pLCFoLl9fZSYmKG51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MsTSl8fHUuX192PT09dC5fX3YpKXtmb3IodS5fX3YhPT10Ll9fdiYmKGgucHJvcHM9bSxoLnN0YXRlPWguX19zLGguX19kPSExKSx1Ll9fZT10Ll9fZSx1Ll9faz10Ll9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksUD0wO1A8aC5fc2IubGVuZ3RoO1ArKyloLl9faC5wdXNoKGguX3NiW1BdKTtoLl9zYj1bXSxoLl9faC5sZW5ndGgmJmYucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKG0saC5fX3MsTSkseCYmbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh2LHcsXyl9KX1pZihoLmNvbnRleHQ9TSxoLnByb3BzPW0saC5fX1A9bixoLl9fZT0hMSwkPWwuX19yLEk9MCx4KXtmb3IoaC5zdGF0ZT1oLl9fcyxoLl9fZD0hMSwkJiYkKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksSD0wO0g8aC5fc2IubGVuZ3RoO0grKyloLl9faC5wdXNoKGguX3NiW0hdKTtoLl9zYj1bXX1lbHNlIGRve2guX19kPSExLCQmJiQodSksYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zfXdoaWxlKGguX19kJiYrK0k8MjUpO2guc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJihpPWQoZCh7fSxpKSxoLmdldENoaWxkQ29udGV4dCgpKSkseCYmIXAmJm51bGwhPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUmJihfPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUodix3KSksUyhuLHkoTD1udWxsIT1hJiZhLnR5cGU9PT1rJiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEpP0w6W0xdLHUsdCxpLG8scixmLGUsYyxzKSxoLmJhc2U9dS5fX2UsdS5fX3UmPS0xNjEsaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksZyYmKGguX19FPWguX189bnVsbCl9Y2F0Y2gobil7aWYodS5fX3Y9bnVsbCxjfHxudWxsIT1yKXtmb3IodS5fX3V8PWM/MTYwOjMyO2UmJjg9PT1lLm5vZGVUeXBlJiZlLm5leHRTaWJsaW5nOyllPWUubmV4dFNpYmxpbmc7cltyLmluZGV4T2YoZSldPW51bGwsdS5fX2U9ZX1lbHNlIHUuX19lPXQuX19lLHUuX19rPXQuX19rO2wuX19lKG4sdSx0KX1lbHNlIG51bGw9PXImJnUuX192PT09dC5fX3Y/KHUuX19rPXQuX19rLHUuX19lPXQuX19lKTp1Ll9fZT16KHQuX19lLHUsdCxpLG8scixmLGMscyk7KGE9bC5kaWZmZWQpJiZhKHUpfWZ1bmN0aW9uIGoobix1LHQpe3UuX19kPXZvaWQgMDtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKylOKHRbaV0sdFsrK2ldLHRbKytpXSk7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiB6KGwsdSx0LGksbyxyLGYsZSxjKXt2YXIgcyxhLHAsdixkLF8sZyxtPXQucHJvcHMsaz11LnByb3BzLGI9dS50eXBlO2lmKFwic3ZnXCI9PT1iP289XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiOlwibWF0aFwiPT09Yj9vPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiOm98fChvPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKSxudWxsIT1yKWZvcihzPTA7czxyLmxlbmd0aDtzKyspaWYoKGQ9cltzXSkmJlwic2V0QXR0cmlidXRlXCJpbiBkPT0hIWImJihiP2QubG9jYWxOYW1lPT09YjozPT09ZC5ub2RlVHlwZSkpe2w9ZCxyW3NdPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWIpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGspO2w9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG8sYixrLmlzJiZrKSxyPW51bGwsZT0hMX1pZihudWxsPT09YiltPT09a3x8ZSYmbC5kYXRhPT09a3x8KGwuZGF0YT1rKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksbT10LnByb3BzfHxoLCFlJiZudWxsIT1yKWZvcihtPXt9LHM9MDtzPGwuYXR0cmlidXRlcy5sZW5ndGg7cysrKW1bKGQ9bC5hdHRyaWJ1dGVzW3NdKS5uYW1lXT1kLnZhbHVlO2ZvcihzIGluIG0paWYoZD1tW3NdLFwiY2hpbGRyZW5cIj09cyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PXMpcD1kO2Vsc2UgaWYoXCJrZXlcIiE9PXMmJiEocyBpbiBrKSl7aWYoXCJ2YWx1ZVwiPT1zJiZcImRlZmF1bHRWYWx1ZVwiaW4ga3x8XCJjaGVja2VkXCI9PXMmJlwiZGVmYXVsdENoZWNrZWRcImluIGspY29udGludWU7QShsLHMsbnVsbCxkLG8pfWZvcihzIGluIGspZD1rW3NdLFwiY2hpbGRyZW5cIj09cz92PWQ6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT1zP2E9ZDpcInZhbHVlXCI9PXM/Xz1kOlwiY2hlY2tlZFwiPT1zP2c9ZDpcImtleVwiPT09c3x8ZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZHx8bVtzXT09PWR8fEEobCxzLGQsbVtzXSxvKTtpZihhKWV8fHAmJihhLl9faHRtbD09PXAuX19odG1sfHxhLl9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPWEuX19odG1sKSx1Ll9faz1bXTtlbHNlIGlmKHAmJihsLmlubmVySFRNTD1cIlwiKSxTKGwseSh2KT92Olt2XSx1LHQsaSxcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6byxyLGYscj9yWzBdOnQuX19rJiZ4KHQsMCksZSxjKSxudWxsIT1yKWZvcihzPXIubGVuZ3RoO3MtLTspbnVsbCE9cltzXSYmdyhyW3NdKTtlfHwocz1cInZhbHVlXCIsdm9pZCAwIT09XyYmKF8hPT1sW3NdfHxcInByb2dyZXNzXCI9PT1iJiYhX3x8XCJvcHRpb25cIj09PWImJl8hPT1tW3NdKSYmQShsLHMsXyxtW3NdLG8pLHM9XCJjaGVja2VkXCIsdm9pZCAwIT09ZyYmZyE9PWxbc10mJkEobCxzLGcsbVtzXSxvKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTihuLHUsdCl7dHJ5e2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pe3ZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4uX191O2kmJm4uX191KCksaSYmbnVsbD09dXx8KG4uX191PW4odSkpfWVsc2Ugbi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2Uobix0KX19ZnVuY3Rpb24gVihuLHUsdCl7dmFyIGksbztpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwoaT1uLnJlZikmJihpLmN1cnJlbnQmJmkuY3VycmVudCE9PW4uX19lfHxOKGksbnVsbCx1KSksbnVsbCE9KGk9bi5fX2MpKXtpZihpLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtpLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX1pLmJhc2U9aS5fX1A9bnVsbH1pZihpPW4uX19rKWZvcihvPTA7bzxpLmxlbmd0aDtvKyspaVtvXSYmVihpW29dLHUsdHx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTt0fHxudWxsPT1uLl9fZXx8dyhuLl9fZSksbi5fX2M9bi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gcShuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBCKHUsdCxpKXt2YXIgbyxyLGYsZTtsLl9fJiZsLl9fKHUsdCkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpKT9udWxsOmkmJmkuX19rfHx0Ll9fayxmPVtdLGU9W10sTyh0LHU9KCFvJiZpfHx0KS5fX2s9XyhrLG51bGwsW3VdKSxyfHxoLGgsdC5uYW1lc3BhY2VVUkksIW8mJmk/W2ldOnI/bnVsbDp0LmZpcnN0Q2hpbGQ/bi5jYWxsKHQuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZpP2k6cj9yLl9fZTp0LmZpcnN0Q2hpbGQsbyxlKSxqKGYsdSxlKX1mdW5jdGlvbiBEKG4sbCl7QihuLGwsRCl9ZnVuY3Rpb24gRShsLHUsdCl7dmFyIGksbyxyLGYsZT1kKHt9LGwucHJvcHMpO2ZvcihyIGluIGwudHlwZSYmbC50eXBlLmRlZmF1bHRQcm9wcyYmKGY9bC50eXBlLmRlZmF1bHRQcm9wcyksdSlcImtleVwiPT1yP2k9dVtyXTpcInJlZlwiPT1yP289dVtyXTplW3JdPXZvaWQgMD09PXVbcl0mJnZvaWQgMCE9PWY/ZltyXTp1W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihlLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOnQpLGcobC50eXBlLGUsaXx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRyhuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIithKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSx0O3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKHQ9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdH0sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3U9bnVsbH0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShmdW5jdGlvbihuKXtuLl9fZT0hMCxNKG4pfSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1JiZ1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1wLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwsdSx0KXtmb3IodmFyIGksbyxyO2w9bC5fXzspaWYoKGk9bC5fX2MpJiYhaS5fXyl0cnl7aWYoKG89aS5jb25zdHJ1Y3RvcikmJm51bGwhPW8uZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYoaS5zZXRTdGF0ZShvLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkscj1pLl9fZCksbnVsbCE9aS5jb21wb25lbnREaWRDYXRjaCYmKGkuY29tcG9uZW50RGlkQ2F0Y2gobix0fHx7fSkscj1pLl9fZCkscilyZXR1cm4gaS5fX0U9aX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCx0PWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZudWxsPT1uLmNvbnN0cnVjdG9yfSxiLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1kKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oZCh7fSx1KSx0aGlzLnByb3BzKSksbiYmZCh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fc2IucHVzaChsKSxNKHRoaXMpKX0sYi5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLE0odGhpcykpfSxiLnByb3RvdHlwZS5yZW5kZXI9ayxpPVtdLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZj1mdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSxQLl9fcj0wLGU9MCxjPUYoITEpLHM9RighMCksYT0wO2V4cG9ydHtiIGFzIENvbXBvbmVudCxrIGFzIEZyYWdtZW50LEUgYXMgY2xvbmVFbGVtZW50LEcgYXMgY3JlYXRlQ29udGV4dCxfIGFzIGNyZWF0ZUVsZW1lbnQsbSBhcyBjcmVhdGVSZWYsXyBhcyBoLEQgYXMgaHlkcmF0ZSx0IGFzIGlzVmFsaWRFbGVtZW50LGwgYXMgb3B0aW9ucyxCIGFzIHJlbmRlcixIIGFzIHRvQ2hpbGRBcnJheX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckAxLjMuMF93ZWJwYWNrQDUuOTMuMF93ZWJwYWNrLWNsaUA0LjEwLjBfL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANC4zLjBfd2VicGFja0A1LjkzLjBfd2VicGFjay1jbGlANC4xMC4wXy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gV2UndmUgc2V0IHVwIHRoaXMgc2FtcGxlIHVzaW5nIENTUyBtb2R1bGVzLCB3aGljaCBsZXRzIHlvdSBpbXBvcnQgY2xhc3NcclxuLy8gbmFtZXMgaW50byBKYXZhU2NyaXB0OiBodHRwczovL2dpdGh1Yi5jb20vY3NzLW1vZHVsZXMvY3NzLW1vZHVsZXNcclxuLy8gWW91IGNhbiBjb25maWd1cmUgb3IgY2hhbmdlIHRoaXMgaW4gdGhlIHdlYnBhY2suY29uZmlnLmpzIGZpbGUuXHJcbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHR5cGUgeyBSZW5kZXJlckNvbnRleHQgfSBmcm9tICd2c2NvZGUtbm90ZWJvb2stcmVuZGVyZXInO1xyXG5cclxuaW50ZXJmYWNlIElSZW5kZXJJbmZvIHtcclxuXHRjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cdG1pbWU6IHN0cmluZztcclxuXHR2YWx1ZTogR2l0SHViSXNzdWVzVmFsdWVbXTtcclxuXHRjb250ZXh0OiBSZW5kZXJlckNvbnRleHQ8dW5rbm93bj47XHJcbn1cclxuaW50ZXJmYWNlIEdpdEh1Yklzc3Vlc1ZhbHVlIHtcclxuXHR0aXRsZTogc3RyaW5nO1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdGJvZHk6IHN0cmluZztcclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gcmVuZGVyIHlvdXIgY29udGVudHMuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoeyBjb250YWluZXIsIHZhbHVlIH06IElSZW5kZXJJbmZvKSB7XHJcblx0Ly8gRm9ybWF0IHRoZSBKU09OIGFuZCBpbnNlcnQgaXQgYXMgPHByZT48Y29kZT57IC4uLiB9PC9jb2RlPjwvcHJlPlxyXG5cdC8vIFJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgY3VzdG9tIGNvZGUhXHJcblx0Y29uc3QgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcblx0cHJlLmNsYXNzTGlzdC5hZGQoc3R5bGUuanNvbik7XHJcblxyXG5cdC8vIENyZWF0ZSBhIHNpbXBsZSB0YWJsZSB3aXRoIGlzc3VlIHRpdGxlcyBhbmQgbGlua3NcclxuXHRjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcblx0dGFibGUuY2xhc3NOYW1lID0gJ2lzc3Vlcy1saXN0JztcclxuXHRjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cdGNvbnN0IHRhYmxlSGVhZGVycyA9IFsnSXNzdWUnLCAnRGVzY3JpcHRpb24nXTtcclxuXHJcblx0dGFibGVIZWFkZXJzLmZvckVhY2gobGFiZWwgPT4ge1xyXG5cdFx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuXHRcdGhlYWRlci50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG5cdFx0aGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblx0fSk7XHJcblxyXG5cdHRhYmxlLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XHJcblxyXG5cdHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0XHRsaW5rLmhyZWYgPSBpdGVtLnVybDtcclxuXHRcdGxpbmsudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xyXG5cdFx0dGl0bGUuYXBwZW5kQ2hpbGQobGluayk7XHJcblx0XHRyb3cuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG5cdFx0Ym9keS50ZXh0Q29udGVudCA9IGl0ZW0uYm9keTtcclxuXHRcdHJvdy5hcHBlbmRDaGlsZChib2R5KTtcclxuXHJcblx0XHR0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG5cdH0pO1xyXG5cclxuXHRwcmUuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmUpO1xyXG59XHJcblxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb3B5cmlnaHQgKEMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmltcG9ydCB7IEVycm9yT3ZlcmxheU1hbmFnZXIgfSBmcm9tICcuL292ZXJsYXknO1xyXG5sZXQgbWFuYWdlcjtcclxuLy8gVGhpcyBjb25kaXRpb25hbCB3aWxsIGJlIGNoZWNrZWQgYnkgd2VicGFjayBzbyB0aGUgZXJyb3Igb3ZlcmxheSBpc24ndFxyXG4vLyBpbmNsdWRlZCBpbiB0aGUgcHJvZHVjdGlvbiBidWlsZDpcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICBtYW5hZ2VyID0gbmV3IEVycm9yT3ZlcmxheU1hbmFnZXIoKTtcclxufVxyXG5lbHNlIHtcclxuICAgIG1hbmFnZXIgPSB7XHJcbiAgICAgICAgaW5zdGFsbDogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgICAgIHdyYXA6IChfLCB0KSA9PiB0KCksXHJcbiAgICAgICAgdW5pbnN0YWxsOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG1hbmFnZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvcHlyaWdodCAoQykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuaW1wb3J0IHsgcmVuZGVyLCBoIH0gZnJvbSAncHJlYWN0JztcclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4vdWknO1xyXG5jb25zdCBpc1Byb21pc2VMaWtlID0gKHgpID0+IHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiAhIXggJiYgdHlwZW9mIHgudGhlbiA9PT0gJ2Z1bmN0aW9uJztcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBlcnJvciBvdmVybGF5IG1hbmFnZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXJyb3JPdmVybGF5TWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnVubW91bnRPdmVybGF5ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaXNJbnN0YWxsZWRHbG9iYWxseSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSAocmF3RXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJhd0V2ZW50LmRhdGEudHlwZSA9PT0gJ3dlYnBhY2tFcnJvcnMnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiB0aGlzLmNvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvckluKGNvbnRhaW5lciwgcmF3RXZlbnQuZGF0YS5kYXRhLCAxIC8qIENvbXBpbGF0aW9uICovKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBpbmhlcml0ZG9jXHJcbiAgICAgKi9cclxuICAgIGluc3RhbGwoY29udGFpbmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5zdGFsbGVkR2xvYmFsbHkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0luc3RhbGxlZEdsb2JhbGx5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycy5maWx0ZXIoKGMpID0+IGRvY3VtZW50LmJvZHkuY29udGFpbnMoYykpO1xyXG4gICAgICAgIGNvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVycyA9IGNvbnRhaW5lcnM7XHJcbiAgICB9XHJcbiAgICB3cmFwKGNvbnRhaW5lciwgZm4pIHtcclxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGlkZUVycm9ySW4oY29udGFpbmVyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5pbnN0YWxsKGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgcmV0cnkgPSAoKSA9PiB0aGlzLndyYXAoY29udGFpbmVyLCBmbik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gZm4oKTtcclxuICAgICAgICAgICAgaWYgKHJldCAmJiBpc1Byb21pc2VMaWtlKHJldCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXQudGhlbigodikgPT4gdiwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9ySW4oY29udGFpbmVyLCBbZXJyXSwgMCAvKiBSdW50aW1lICovLCByZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3JJbihjb250YWluZXIsIFtlcnJdLCAwIC8qIFJ1bnRpbWUgKi8sIHJldHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGluaGVyaXRkb2NcclxuICAgICAqL1xyXG4gICAgdW5pbnN0YWxsKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdW5tb3VudCBvZiB0aGlzLnVubW91bnRPdmVybGF5LnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIHVubW91bnQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVubW91bnRPdmVybGF5LmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGRpc3BsYXlFcnJvckluKGNvbnRhaW5lciwgZXJyb3JzLCBzb3VyY2UsIHJldHJ5KSB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGVFcnJvckluKGNvbnRhaW5lciwgZmFsc2UpOyAvLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgb3Zld3JpdGUgYW5kIGdldCBjb25mdXNlZFxyXG4gICAgICAgIGNvbnN0IGVycm9yU3RycyA9IGVycm9ycy5tYXAoKGUpID0+IHR5cGVvZiBlID09PSAnc3RyaW5nJyA/IGUgOiBlLnN0YWNrIHx8IGUubWVzc2FnZSB8fCBTdHJpbmcoZSkpO1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSAoaChPdmVybGF5LCB7IHNvdXJjZTogc291cmNlLCBjbG9zZTogKCkgPT4gdGhpcy5oaWRlRXJyb3JJbihjb250YWluZXIsIHRydWUpLCBlcnJvcnM6IGVycm9yU3RycyB9KSk7XHJcbiAgICAgICAgcmVuZGVyKGVsZW0sIGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy51bm1vdW50T3ZlcmxheS5zZXQoY29udGFpbmVyLCAoYWxsb3dSZXRyeSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlYm9vay1lcnJvci1vdmVybGF5Jyk7XHJcbiAgICAgICAgICAgIGlmIChvdmVybGF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQob3ZlcmxheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFsbG93UmV0cnkgJiYgcmV0cnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHJ5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhpZGVFcnJvckluKGNvbnRhaW5lciwgYWxsb3dSZXRyeSkge1xyXG4gICAgICAgIGNvbnN0IHVubW91bnRGbiA9IHRoaXMudW5tb3VudE92ZXJsYXkuZ2V0KGNvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKHVubW91bnRGbikge1xyXG4gICAgICAgICAgICB1bm1vdW50Rm4oYWxsb3dSZXRyeSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5tb3VudE92ZXJsYXkuZGVsZXRlKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW92ZXJsYXkuanMubWFwIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29weXJpZ2h0IChDKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5pbXBvcnQgeyBoIH0gZnJvbSAncHJlYWN0JztcclxuaW1wb3J0IHsgcGFyc2VDb2xvcnMgfSBmcm9tICd2c2NvZGUtd2Vidmlldy10b29scyc7XHJcbmNvbnN0IGNvbG9ycyA9IHBhcnNlQ29sb3JzKCk7XHJcbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gKHsgZXJyb3JzLCBzb3VyY2UsIGNsb3NlIH0pID0+IChoKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm5vdGVib29rLWVycm9yLW92ZXJsYXlcIiwgc3R5bGU6IHsgbWluSGVpZ2h0OiA1MDAgfSB9LFxyXG4gICAgaChcImRpdlwiLCB7IHN0eWxlOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBjb2xvcnNbXCJmb250LWZhbWlseVwiIC8qIEZvbnRGYW1pbHkgKi9dLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogY29sb3JzW1wiZm9udC1zaXplXCIgLyogRm9udFNpemUgKi9dLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBjb2xvcnNbXCJmb250LXdlaWdodFwiIC8qIEZvbnRXZWlnaHQgKi9dLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnNbXCJpbnB1dFZhbGlkYXRpb24tZXJyb3JCYWNrZ3JvdW5kXCIgLyogSW5wdXRWYWxpZGF0aW9uRXJyb3JCYWNrZ3JvdW5kICovXSxcclxuICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzW1wiaW5wdXRWYWxpZGF0aW9uLWVycm9yQm9yZGVyXCIgLyogSW5wdXRWYWxpZGF0aW9uRXJyb3JCb3JkZXIgKi9dfWAsXHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbXCJpbnB1dFZhbGlkYXRpb24tZXJyb3JGb3JlZ3JvdW5kXCIgLyogSW5wdXRWYWxpZGF0aW9uRXJyb3JGb3JlZ3JvdW5kICovXSxcclxuICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICB9IH0sXHJcbiAgICAgICAgaChcImgxXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6ICcxLjVlbScsIG1hcmdpbjogJzAgMCAwLjI1ZW0nLCBmb250V2VpZ2h0OiAnbm9ybWFsJyB9IH0sXHJcbiAgICAgICAgICAgIFwiRXJyb3JzIG9jY3VycmVkIHdoZW4gXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZSA9PT0gMSAvKiBDb21waWxhdGlvbiAqLyA/ICdjb21waWxpbmcnIDogJ3JlbmRlcmluZycsXHJcbiAgICAgICAgICAgIFwiOlwiKSxcclxuICAgICAgICBlcnJvcnMubWFwKChlcnIsIGkpID0+IChoKEVycm9yTWVzc2FnZSwgeyBlcnJvcjogZXJyLCBrZXk6IGkgfSkpKSksXHJcbiAgICBoKENsb3NlQnV0dG9uLCB7IG9uQ2xpY2s6IGNsb3NlLCBzb3VyY2U6IHNvdXJjZSB9KSkpO1xyXG5jb25zdCBDbG9zZUJ1dHRvbiA9ICh7IHNvdXJjZSwgb25DbGljaywgfSkgPT4gKGgoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBvbkNsaWNrLCB0aXRsZTogc291cmNlID09PSAxIC8qIENvbXBpbGF0aW9uICovID8gJ0Rpc21pc3MnIDogJ1JldHJ5Jywgc3R5bGU6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6IDMsXHJcbiAgICAgICAgcmlnaHQ6IDMsXHJcbiAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgfSB9LCBzb3VyY2UgPT09IDEgLyogQ29tcGlsYXRpb24gKi8gPyAoaChcInN2Z1wiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLCBmaWxsOiBcIm5vbmVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LFxyXG4gICAgaChcInBhdGhcIiwgeyBmaWxsUnVsZTogXCJldmVub2RkXCIsIGNsaXBSdWxlOiBcImV2ZW5vZGRcIiwgZDogXCJNOC4wMDAwMSA4LjcwNzExTDExLjY0NjUgMTIuMzUzNkwxMi4zNTM2IDExLjY0NjVMOC43MDcxMSA4LjAwMDAxTDEyLjM1MzYgNC4zNTM1NkwxMS42NDY1IDMuNjQ2NDVMOC4wMDAwMSA3LjI5MjlMNC4zNTM1NiAzLjY0NjQ1TDMuNjQ2NDUgNC4zNTM1Nkw3LjI5MjkgOC4wMDAwMUwzLjY0NjQ1IDExLjY0NjVMNC4zNTM1NiAxMi4zNTM2TDguMDAwMDEgOC43MDcxMVpcIiwgZmlsbDogXCIjQzVDNUM1XCIgfSkpKSA6IChoKFwic3ZnXCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsIGZpbGw6IFwibm9uZVwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sXHJcbiAgICBoKFwicGF0aFwiLCB7IGZpbGxSdWxlOiBcImV2ZW5vZGRcIiwgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiLCBkOiBcIk0yLjAwNTgzIDguMjY2OTFMMC43OCA5LjUwMDAzTDAgOC43MzAwM0wyLjA5IDYuNjYwMDNMMi44NSA2LjY3MDAzTDQuOTQgOC43OTAwM0w0LjE4IDkuNTUwMDNMMy4wMTM0OCA4LjM2OTk1QzMuMjAyNzkgMTAuOTU4NyA1LjM2MyAxMyA4IDEzQzkuOTEwNjMgMTMgMTEuNTcxIDExLjkyODMgMTIuNDEyNyAxMC4zNTMzTDEzLjIyNiAxMC45NUMxMi4xOTU5IDEyLjc3MSAxMC4yNDE1IDE0IDggMTRDNC43NzU3MyAxNCAyLjE0NTQ3IDExLjQ1NjggMi4wMDU4MyA4LjI2NjkxWk0xMi45OTYxIDcuODAwNTFMMTEuNzYgNi41NTAwNUwxMSA3LjMxMDA1TDEzLjA5IDkuNDIwMDVMMTMuODUgOS40MzAwNUwxNS45NCA3LjM2MDA1TDE1LjE5IDYuNjAwMDVMMTMuOTk2IDcuNzgwMDRDMTMuODgwMyA0LjU2ODIyIDExLjI0MDEgMiA4IDJDNS44MzcyNiAyIDMuOTQxNzggMy4xNDQyOSAyLjg4NTk3IDQuODYwNDdMMy42OTU2MiA1LjQ1NDM1QzQuNTY2NDUgMy45ODQ5OSA2LjE2ODE4IDMgOCAzQzEwLjY5NDYgMyAxMi44OTE0IDUuMTMxNTIgMTIuOTk2MSA3LjgwMDUxWlwiLCBmaWxsOiBcIiNDNUM1QzVcIiB9KSkpKSk7XHJcbmNvbnN0IEVycm9yTWVzc2FnZSA9ICh7IGVycm9yIH0pID0+IChoKFwicHJlXCIsIHsgc3R5bGU6IHtcclxuICAgICAgICBmb250RmFtaWx5OiBjb2xvcnNbXCJlZGl0b3ItZm9udC1mYW1pbHlcIiAvKiBFZGl0b3JGb250RmFtaWx5ICovXSxcclxuICAgICAgICBmb250U2l6ZTogY29sb3JzW1wiZWRpdG9yLWZvbnQtc2l6ZVwiIC8qIEVkaXRvckZvbnRTaXplICovXSxcclxuICAgICAgICBmb250V2VpZ2h0OiBjb2xvcnNbXCJlZGl0b3ItZm9udC13ZWlnaHRcIiAvKiBFZGl0b3JGb250V2VpZ2h0ICovXSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93WDogJ2F1dG8nLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjVlbSdcclxuICAgIH0gfSwgZXJyb3Iuc3BsaXQoJ1xcbicpLm1hcCgobGluZSwgaSkgPT4gKGgoXCJjb2RlXCIsIHsga2V5OiBpLCBzdHlsZToge1xyXG4gICAgICAgIHBhZGRpbmc6ICcwLjFlbSAwLjNlbScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogaSAlIDIgPyAncmdiYSgwLCAwLCAwLCAwLjIpJyA6ICdub25lJyxcclxuICAgICAgICBkaXNwbGF5OiAndGFibGUtcm93JyxcclxuICAgICAgICB3aGl0ZXNwYWNlOiAnbm8td3JhcCcsXHJcbiAgICB9IH0sIGxpbmUpKSkpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dWkuanMubWFwIiwiLyoqXHJcbiAqIFBhcnNlcyB0aGUgdnNjb2RlIENTUyB2YXJpYWJsZXMgZnJvbSB0aGUgZG9jdW1lbnQsIGFuZCByZXR1cm5zIHRoZW0uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFyc2VDb2xvcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByYXdWYXJzID0gU3RyaW5nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykpO1xyXG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCctLXZzY29kZS0oLio/KTooLio/KSg7fCQpJywgJ2cnKTtcclxuICAgIGNvbnN0IHZhcnMgPSB7fTtcclxuICAgIGxldCBtYXRjaDtcclxuICAgIHdoaWxlICgobWF0Y2ggPSByZS5leGVjKHJhd1ZhcnMpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IFssIGtleSwgdmFsdWVdID0gbWF0Y2g7XHJcbiAgICAgICAgdmFyc1trZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFycztcclxufTtcclxuLyoqXHJcbiAqIFdhdGNoZXMgdGhlIGJvZHkgYW5kIGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSBjb2xvcnMgY2hhbmdlLlxyXG4gKiBUaGlzIGNhbiB2ZXJ5IGVhc2lseSBiZSB3cmFwcGVkIGludG8gYSByZWFjdCBvciBwcmVhY3QgaG9vaywgZm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncHJlYWN0L2hvb2tzJztcclxuICpcclxuICogY29uc3QgdXNlQ3NzVmFyaWFibGVzID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IFt2YXJzLCBzZXRWYXJzXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+KHt9KTtcclxuICogICB1c2VFZmZlY3QoKCkgPT4gb2JzZXJ2ZUNvbG9ycyhzZXRWYXJzKSwgW10pO1xyXG4gKiAgIHJldHVybiB2YXJzO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG9ic2VydmVDb2xvcnMgPSAob25DaGFuZ2UpID0+IHtcclxuICAgIG9uQ2hhbmdlKHBhcnNlQ29sb3JzKCkpO1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UocGFyc2VDb2xvcnMoKSk7XHJcbiAgICB9KTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XHJcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ10sXHJcbiAgICAgICAgY2hpbGRMaXN0OiBmYWxzZSxcclxuICAgICAgICBzdWJ0cmVlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtY29sb3JzLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9yZW5kZXInO1xyXG5pbXBvcnQgZXJyb3JPdmVybGF5IGZyb20gJ3ZzY29kZS1ub3RlYm9vay1lcnJvci1vdmVybGF5JztcclxuaW1wb3J0IHR5cGUgeyBBY3RpdmF0aW9uRnVuY3Rpb24gfSBmcm9tICd2c2NvZGUtbm90ZWJvb2stcmVuZGVyZXInO1xyXG5cclxuLy8gRml4IHRoZSBwdWJsaWMgcGF0aCBzbyB0aGF0IGFueSBhc3luYyBpbXBvcnQoKSdzIHdvcmsgYXMgZXhwZWN0ZWQuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZGVjbGFyZSBjb25zdCBfX3dlYnBhY2tfcmVsYXRpdmVfZW50cnlwb2ludF90b19yb290X186IHN0cmluZztcclxuZGVjbGFyZSBjb25zdCBzY3JpcHRVcmw6IHN0cmluZztcclxuXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gbmV3IFVSTChzY3JpcHRVcmwucmVwbGFjZSgvW14vXSskLywgJycpICsgX193ZWJwYWNrX3JlbGF0aXZlX2VudHJ5cG9pbnRfdG9fcm9vdF9fKS50b1N0cmluZygpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUaGlzIGlzIHRoZSBlbnRyeXBvaW50IHRvIHRoZSBub3RlYm9vayByZW5kZXJlcidzIHdlYnZpZXcgY2xpZW50LXNpZGUgY29kZS5cclxuLy8gVGhpcyBjb250YWlucyBzb21lIGJvaWxlcnBsYXRlIHRoYXQgY2FsbHMgdGhlIGByZW5kZXIoKWAgZnVuY3Rpb24gd2hlbiBuZXdcclxuLy8gb3V0cHV0IGlzIGF2YWlsYWJsZS4gWW91IHByb2JhYmx5IGRvbid0IG5lZWQgdG8gY2hhbmdlIHRoaXMgY29kZTsgcHV0IHlvdXJcclxuLy8gcmVuZGVyaW5nIGxvZ2ljIGluc2lkZSBvZiB0aGUgYHJlbmRlcigpYCBmdW5jdGlvbi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSBjb250ZXh0ID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVuZGVyT3V0cHV0SXRlbShvdXRwdXRJdGVtLCBlbGVtZW50KSB7XHJcblx0XHRcdGxldCBzaGFkb3cgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XHJcblx0XHRcdGlmICghc2hhZG93KSB7XHJcblx0XHRcdFx0c2hhZG93ID0gZWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XHJcblx0XHRcdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdHJvb3QuaWQgPSAncm9vdCc7XHJcblx0XHRcdFx0c2hhZG93LmFwcGVuZChyb290KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCByb290ID0gc2hhZG93LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjcm9vdCcpITtcclxuXHRcdFx0ZXJyb3JPdmVybGF5LndyYXAocm9vdCwgKCkgPT4ge1xyXG5cdFx0XHRcdHJvb3QuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdHJvb3QuYXBwZW5kQ2hpbGQobm9kZSk7XHJcblxyXG5cdFx0XHRcdHJlbmRlcih7IGNvbnRhaW5lcjogbm9kZSwgbWltZTogb3V0cHV0SXRlbS5taW1lLCB2YWx1ZTogb3V0cHV0SXRlbS5qc29uKCksIGNvbnRleHQgfSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuXHRcdGRpc3Bvc2VPdXRwdXRJdGVtKG91dHB1dElkKSB7XHJcblx0XHRcdC8vIERvIGFueSB0ZWFyZG93biBoZXJlLiBvdXRwdXRJZCBpcyB0aGUgY2VsbCBvdXRwdXQgYmVpbmcgZGVsZXRlZCwgb3JcclxuXHRcdFx0Ly8gdW5kZWZpbmVkIGlmIHdlJ3JlIGNsZWFyaW5nIGFsbCBvdXRwdXRzLlxyXG5cdFx0fVxyXG5cdH07XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==