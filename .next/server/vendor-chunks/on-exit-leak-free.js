"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/on-exit-leak-free";
exports.ids = ["vendor-chunks/on-exit-leak-free"];
exports.modules = {

/***/ "(ssr)/./node_modules/on-exit-leak-free/index.js":
/*!*************************************************!*\
  !*** ./node_modules/on-exit-leak-free/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\nconst refs = {\n  exit: [],\n  beforeExit: []\n}\nconst functions = {\n  exit: onExit,\n  beforeExit: onBeforeExit\n}\n\nlet registry\n\nfunction ensureRegistry () {\n  if (registry === undefined) {\n    registry = new FinalizationRegistry(clear)\n  }\n}\n\nfunction install (event) {\n  if (refs[event].length > 0) {\n    return\n  }\n\n  process.on(event, functions[event])\n}\n\nfunction uninstall (event) {\n  if (refs[event].length > 0) {\n    return\n  }\n  process.removeListener(event, functions[event])\n  if (refs.exit.length === 0 && refs.beforeExit.length === 0) {\n    registry = undefined\n  }\n}\n\nfunction onExit () {\n  callRefs('exit')\n}\n\nfunction onBeforeExit () {\n  callRefs('beforeExit')\n}\n\nfunction callRefs (event) {\n  for (const ref of refs[event]) {\n    const obj = ref.deref()\n    const fn = ref.fn\n\n    // This should always happen, however GC is\n    // undeterministic so it might not happen.\n    /* istanbul ignore else */\n    if (obj !== undefined) {\n      fn(obj, event)\n    }\n  }\n  refs[event] = []\n}\n\nfunction clear (ref) {\n  for (const event of ['exit', 'beforeExit']) {\n    const index = refs[event].indexOf(ref)\n    refs[event].splice(index, index + 1)\n    uninstall(event)\n  }\n}\n\nfunction _register (event, obj, fn) {\n  if (obj === undefined) {\n    throw new Error('the object can\\'t be undefined')\n  }\n  install(event)\n  const ref = new WeakRef(obj)\n  ref.fn = fn\n\n  ensureRegistry()\n  registry.register(obj, ref)\n  refs[event].push(ref)\n}\n\nfunction register (obj, fn) {\n  _register('exit', obj, fn)\n}\n\nfunction registerBeforeExit (obj, fn) {\n  _register('beforeExit', obj, fn)\n}\n\nfunction unregister (obj) {\n  if (registry === undefined) {\n    return\n  }\n  registry.unregister(obj)\n  for (const event of ['exit', 'beforeExit']) {\n    refs[event] = refs[event].filter((ref) => {\n      const _obj = ref.deref()\n      return _obj && _obj !== obj\n    })\n    uninstall(event)\n  }\n}\n\nmodule.exports = {\n  register,\n  registerBeforeExit,\n  unregister\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb24tZXhpdC1sZWFrLWZyZWUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvb24tZXhpdC1sZWFrLWZyZWUvaW5kZXguanM/NWFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgcmVmcyA9IHtcbiAgZXhpdDogW10sXG4gIGJlZm9yZUV4aXQ6IFtdXG59XG5jb25zdCBmdW5jdGlvbnMgPSB7XG4gIGV4aXQ6IG9uRXhpdCxcbiAgYmVmb3JlRXhpdDogb25CZWZvcmVFeGl0XG59XG5cbmxldCByZWdpc3RyeVxuXG5mdW5jdGlvbiBlbnN1cmVSZWdpc3RyeSAoKSB7XG4gIGlmIChyZWdpc3RyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVnaXN0cnkgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoY2xlYXIpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbCAoZXZlbnQpIHtcbiAgaWYgKHJlZnNbZXZlbnRdLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHByb2Nlc3Mub24oZXZlbnQsIGZ1bmN0aW9uc1tldmVudF0pXG59XG5cbmZ1bmN0aW9uIHVuaW5zdGFsbCAoZXZlbnQpIHtcbiAgaWYgKHJlZnNbZXZlbnRdLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbnNbZXZlbnRdKVxuICBpZiAocmVmcy5leGl0Lmxlbmd0aCA9PT0gMCAmJiByZWZzLmJlZm9yZUV4aXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmVnaXN0cnkgPSB1bmRlZmluZWRcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkV4aXQgKCkge1xuICBjYWxsUmVmcygnZXhpdCcpXG59XG5cbmZ1bmN0aW9uIG9uQmVmb3JlRXhpdCAoKSB7XG4gIGNhbGxSZWZzKCdiZWZvcmVFeGl0Jylcbn1cblxuZnVuY3Rpb24gY2FsbFJlZnMgKGV2ZW50KSB7XG4gIGZvciAoY29uc3QgcmVmIG9mIHJlZnNbZXZlbnRdKSB7XG4gICAgY29uc3Qgb2JqID0gcmVmLmRlcmVmKClcbiAgICBjb25zdCBmbiA9IHJlZi5mblxuXG4gICAgLy8gVGhpcyBzaG91bGQgYWx3YXlzIGhhcHBlbiwgaG93ZXZlciBHQyBpc1xuICAgIC8vIHVuZGV0ZXJtaW5pc3RpYyBzbyBpdCBtaWdodCBub3QgaGFwcGVuLlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmbihvYmosIGV2ZW50KVxuICAgIH1cbiAgfVxuICByZWZzW2V2ZW50XSA9IFtdXG59XG5cbmZ1bmN0aW9uIGNsZWFyIChyZWYpIHtcbiAgZm9yIChjb25zdCBldmVudCBvZiBbJ2V4aXQnLCAnYmVmb3JlRXhpdCddKSB7XG4gICAgY29uc3QgaW5kZXggPSByZWZzW2V2ZW50XS5pbmRleE9mKHJlZilcbiAgICByZWZzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIGluZGV4ICsgMSlcbiAgICB1bmluc3RhbGwoZXZlbnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3JlZ2lzdGVyIChldmVudCwgb2JqLCBmbikge1xuICBpZiAob2JqID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBvYmplY3QgY2FuXFwndCBiZSB1bmRlZmluZWQnKVxuICB9XG4gIGluc3RhbGwoZXZlbnQpXG4gIGNvbnN0IHJlZiA9IG5ldyBXZWFrUmVmKG9iailcbiAgcmVmLmZuID0gZm5cblxuICBlbnN1cmVSZWdpc3RyeSgpXG4gIHJlZ2lzdHJ5LnJlZ2lzdGVyKG9iaiwgcmVmKVxuICByZWZzW2V2ZW50XS5wdXNoKHJlZilcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXIgKG9iaiwgZm4pIHtcbiAgX3JlZ2lzdGVyKCdleGl0Jywgb2JqLCBmbilcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJCZWZvcmVFeGl0IChvYmosIGZuKSB7XG4gIF9yZWdpc3RlcignYmVmb3JlRXhpdCcsIG9iaiwgZm4pXG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXIgKG9iaikge1xuICBpZiAocmVnaXN0cnkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG4gIHJlZ2lzdHJ5LnVucmVnaXN0ZXIob2JqKVxuICBmb3IgKGNvbnN0IGV2ZW50IG9mIFsnZXhpdCcsICdiZWZvcmVFeGl0J10pIHtcbiAgICByZWZzW2V2ZW50XSA9IHJlZnNbZXZlbnRdLmZpbHRlcigocmVmKSA9PiB7XG4gICAgICBjb25zdCBfb2JqID0gcmVmLmRlcmVmKClcbiAgICAgIHJldHVybiBfb2JqICYmIF9vYmogIT09IG9ialxuICAgIH0pXG4gICAgdW5pbnN0YWxsKGV2ZW50KVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWdpc3RlcixcbiAgcmVnaXN0ZXJCZWZvcmVFeGl0LFxuICB1bnJlZ2lzdGVyXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/on-exit-leak-free/index.js\n");

/***/ })

};
;