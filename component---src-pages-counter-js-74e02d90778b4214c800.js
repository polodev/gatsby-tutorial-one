webpackJsonp([96596616492619],{193:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=n(6),a=o(l),i=n(98),f=o(i),s=function(t){function e(){r(this,e);var n=u(this,t.call(this));return n.state={count:0},n}return c(e,t),e.prototype.render=function(){var t=this;return a.default.createElement("div",null,a.default.createElement("h1",{style:{textAlign:"center"}},"Counter"),a.default.createElement("h2",null,"Current count: ",this.state.count),a.default.createElement("p",null,a.default.createElement(f.default,{to:"/"},"Home")),a.default.createElement("button",{onClick:function(){return t.setState({count:t.state.count+1})}},"plus"),a.default.createElement("button",{onClick:function(){return t.setState({count:t.state.count-1})}},"minus"))},e}(l.Component);e.default=s,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-counter-js-74e02d90778b4214c800.js.map