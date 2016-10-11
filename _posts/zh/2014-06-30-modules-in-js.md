---
layout: post
title: JS的模块化编程
categories: zh technology program web
language: zh
tags: module web js 探源

description: JS模块介绍.
---

{:toc}

From this article, we can know the basic ideas of module and some detail specifications, and also we'll try to give a demo module library as practice at last. Let's start.

## What is module and why use module<a id="what-is-module"></a>

Generally speaking, module is a piece of cohesive codes within same name space and exports something to be called outside. The most common module level we use is `Class`.

It's a pity to say that it's a little later to bring in Javascript than other languages. Modularity development was proposed many years ago. Fortunately, it comes!

Nowadays, the web applications become bigger and more complex, the traditional way to write all in one or several JS files is not quite proper, instead, to divide the whole APP codes into different clear modules like other languages, is much more effective to manage, test and maintain .

Since the characteristic of JavaScript language, it doesn't support modularity natively, we need to think out the way by ourselves. In fact, some JS libraries(Dojo, YUI, ...) do this work by their own in early time, however, there is no common specifications until stated by [CommonJS][1], and other popular variations go well, such as '[Asynchronous Module Definition, abbr. AMD][2]' defined by [RequireJS][3], and the [one][4] implemented by [NodeJS][5].


## What factors there for a module<a id="what-factors-for-module"></a>

These are main factors inclusively.

- First of all, each module should have an **identifier** by itself to distinguish other modules.

- One module may rely on the exports of other modules, these relationships are called the **dependencies** of module.

- Module should have its own **definition**.

- Each module should **export** APIs which are the things other caller used.

Take a very simple example.

```js
    // module m1
    var m1 = {
        fn: function() {}
    };

    // module m2
    var m2 = (function(dep) {
        return {
            fn: function() {
                var v = dep.fn.call(this, arguments);
                // deal with v
                return 'hi ' + v;
            }
        }
    })(m1);
```

In this example, we can simply take 'm1' and 'm2' as the identifiers of 2 modules, and 'm2' module depends on 'm1' module, both of them are assigned with an object as their definitions, and export a function named 'fn'.

### How to resolve the problem of assigning different modules with same name<a id="why-identifier"></a>

Imitate the 'name space' concept from other languages, the module identifier can support the string delimited by forward slashed, and included with '.' and '..', like file path string.

For example, even we have multiple 'test' modules, but we can put them into different name space, giving identifiers such as './test' and '../util/test' to represent different modules.

### How to indicate the dependencies of one module?<a id="how-about-dependencies"></a>

There are several ways can satisfy us.

-   The most simplest way is to write dependencies explicitly on somewhere by the module creator. Something like `define('myModule', ['dep1', 'dep2', ...], function(dep1, dep2, ...) { ... })` or `myModule.$inject = ['dep1', 'dep2', ...]`, separately used by RequireJS and AngularJS actually.

-   Or make the same names within the arguments of module definition function and the dependent modules. For example, if myModule depends on the other 2 modules 'test1' and 'test2', so we can write the definition like this `function myModule(test1, test2, ...)`.

    However, it may lead some problems when using this implicit way. First, we can not set the complex relative or absolute format of module identifier in argument names; Moreover, if using JS compress tool in deployment, the function argument names may be simplified, which means breaking the dependencies chain. So that this way is not recommended. Nevertheless, some libraries like 'AngularJS' can still support this way.

-   We can also get the dependencies via parsing the definition body to check what module names are required based on the code like `require('dep1')`. This is the way supported by most of libraries.

    It's obviously complex for the environment need to load all dependent modules before execution, because of one more function string parsing step required.

    But on the other hand, it can provide more flexibility, module creator can write `require` function anywhere when he needs the functionalities from another module. Even more, we can load the dependent modules until runtime execution if supported, for NodeJS, the codes `require(flag ? 'dep1' : 'dep2')` can work well.

### How to define a module<a id="how-to-define-module"></a>

Usually, we put one module in one js file, this is the module definition itself.

Alternatively, on the browser environment, to avoid naming pollution and execute the module definition codes once after loaded, a wrapper function named 'define' is applied, `define(function(dep1, dep2) { ... })`. Within this way, we can also put multiple modules into one file, using `define('module1', function(dep1, dep2) { ... })`.

### How to export APIs<a id="how-to-define-module"></a>

'exports' is the keyword for module to export, the module sets everything to be exported on this predefined variable, like `exports.fn = ...`. This is also what returned by `require` function.


## Specification ##

Generally, the server-based and browser-based libraries have different specifications, even some libraries may have their own definitions.

- [CommonJS Modules 1.1.1 proposal][1]
- [AMD][2]
- [NodeJS][4]

### Module Identifier

Quoted from [CommonJS Modules 1.1.1 proposal][1], all browser-based libraries are compliant with these rules. And the server-based library NodeJS has its own [extension](http://nodejs.org/api/modules.html#modules_all_together).

>  - A module identifier is a String of "terms" delimited by forward slashes.
>  - A term must be a camelCase identifier, ".", or "..".
>  - Module identifiers may not have file-name extensions like ".js".
>  - Module identifiers may be "relative" or "top-level". A module identifier is "relative" if the first term is "." or "..".
>  - Top-level identifiers are resolved off the conceptual module name space root.
>  - Relative identifiers are resolved relative to the identifier of the module in which "require" is written and called.

### Dependencies

Mentioned above, some libraries use the explicit way to indicate the dependencies, like the famous RequireJS, it gives the implementation of the [Modules/AsynchronousDefinitio Proposal](http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition), using the format `define(id?, dependencies?, factory)`.

On the other hand, the specifications, declared by CommonJS or NodeJS, rely on the free `require` variable to make dependencies relationship.

>  In a module, there is a free variable "require"
>
>    1. The "require" function accepts a module identifier.
>    2. "require" returns the exported API of the foreign module.
>    3. If there is a dependency cycle, the foreign module may not have finished executing at the time it is required by one of its transitive dependencies; in this case, the object returned by "require" must contain at least the exports that the foreign module has prepared before the call to require that led to the current module's execution.
>    4. If the requested module cannot be returned, "require" must throw an error.

### Exports

Export specification is same for all as below.

>  In a module, there is a free variable called "exports", that is an object that the module may add its API to as it executes.
>
>    1. modules must use the "exports" object as the only means of exporting.

### Context

We already know there are 2 free variables, `require` and `exports`

> In a module, there must be a free variable "module", that is an Object.
>
>   1. The "module" object must have a "id" property that is the top-level "id" of the module. The "id" property must be such that require(module.id) will return the exports object from which the module.id originated. (That is to say module.id can be passed to another module, and requiring that must return the original module). When feasible this property should be read-only, don't delete.
>   2. The "module" object may have a "uri" String that is the fully-qualified URI to the resource from which the module was created. The "uri" property must not exist in a sandbox.


## Workout ##

In this section, we will try to work out a browser-based module library step by step. Let us start from the analysis.

### Life cycle

Since the browser native feature, it has different status for module in different timing, the whole life cycle would be.

```
                    | parse
                    V
            +---------------+
            | Uninitialized |
            +---------------+
                    | load
                    V
               +---------+
               | Loading |
               +---------+
          error /       \ success
               /         \
         +--------+    +--------+
         | Failed |    | Loaded |
         +--------+    +--------+
                            | all dependent modules loaded
                            V
                     +-------------+
                     | Interactive |
                     +-------------+
                            | execute
                            V
                       +----------+
                       | Complete |
                       +----------+
```

1. *'Uninitialized'*
    The first state of a module once `require(module)` executed on the first time.

2. *'Loading'*
    The module file is under loading. Obviously, we need a resource loader here.

3. *'Loaded'* or *'Failed'*
    Load process done, load successfully or failed.

4. *'Interactive'*
    The difference between 'Loaded' and 'Interactive' is, 'Loaded' module only has its own module file loaded, not all dependent module files, but 'interactive' has all required modules loaded.

5. *'Complete'*
    The definition function has be executed, return cache result directly when next time.

### Prerequisite modules

Based on what we know currently, these individual modules are prepared first for our library. We won't go further for the details of these in this article, and may write other regarding articles later.

- Text parser, to get the dependencies from definition function body if not set explicitly by users.
- URI resolver, in order to get the regarding module fully-qualified URI based on the set 'relative' id argument.
- Resource loader

### Interfaces

`define` is the only global variable added in this library.

- **define(definition)**

    This is the module register function, and it takes the module definition function or object as only argument by default.

```js
    define(function(require, exports, module) {
        // module definition
    });

    // or
    define({
        version: 1,
        // ...
    });
```

As we can see, the definition function takes 3 arguments, `require`, `exports` and `module` in that order, which are following the specifications above.

By this way, each module has its own js file, and we will take the module id from that file path based on the module root path. For example, the id of module defined in '/home/op/util/uri.js' file should be *'util/uri'* with root path '/home/op/'. And get the dependencies by parsing the definition text to see which modules required.

To be compliant with server-based specification, we can write the module definition codes directly in the file without `define` wrapper function, and use compile tool to generate wrap codes for each one.

- **define(id, dependencies, definition)**

    And we also support another format with more arguments, module creator can give id or dependencies explicitly within the `define` function, actually, it's also the format applied on the merged file generated by compile tool.

```js
    define('util/test', ['base/assert', 'base/console'], function(require, exports, module) {
        // module definition
    });
```

- **define.main(factory)**

    This is used as the main access point for all codes.

```js
    define.main(function(require, exports, module) {
        // main logic
    })
```

- **require(id)**

    Returns the exports of responding module based on the passed 'id', or throws exception if error.

```js
    define(function(require, exports, module) {
        var test = require('util/test');
        //...
    });
```

- **require(ids, callback)**

    Load the module asynchronously, and execute the callback when complete, it may load and execute different modules depend on the runtime situation. Within this, we can write the codes like below.

```js
    define(function(require, exports, module) {
        // ...
        if (single) {
            require('../vendors/module1', function(m1) {
                // ...
            });
        } else {
            require(['../vendors/module2', '../vendors/module3'], function(m2, m3) {
                // ...
            })
        }
        //...
    });
```

- **require.main**

    This attribute, when feasible, should be read-only, don't delete. The "main" property must either be undefined or be identical to the "module" object in the context of one loaded module.

- **exports**

    The `exports` argument used as the only export point of module, in deed, it's the shortcut of `module.exports`. So we can have 2 ways to export in one module.

```js
    define(function(require, exports, module) {
        // normal way
        exports.a = 1;
        exports.fn = function() {};
        // if too much assignments, we may use the alternate way
        module.exports = {
            a  : 1,
            fn : function() {},
            // ...
        };
    });
```

- **module.id**

    This is exact the id of originated module.

- **module.uri**

    It's the fully-qualified URI of module, for example, the uri of the module with id 'util/uri', should be '/home/op/util/uri.js' if root path is '/home/op/'.

- **module.exports**

    Mentioned above.

- - -
The following ones are private interfaces or properties used internally.

- **define.parse(def)**

    Parse the 'def' string to check the `require` function calls, and extract dependency array based on it. To be noticed, this function returns all module ids appeared in 'def', even some won't be executed at runtime.

- **define.resolve(id, base)**

    Simply, it convert both top-level or relative id to the full-qualified one.

- **define.load(uri, callback)**

    Load the file specified by 'uri', and execute callback function when complete.

- **define.onLoad(uri)**

    The default callback function set to `define.load`.

- **define.getCurrentURI()**

    Returns the URI of current running file.

- **define.notify(module)**

    Notify the parent modules to check whether they can be interactive or not.

- **define.execute(module)**

    Execute the module definition function.

- **module.parents**

    The object of modules that required this one.

- **module.children**

    The array of modules that required by this one.

- **module.status**

    One of the status defined in [life cycle](#life-cycle) section.

### Tests

We can use the full CommonJS [tests](https://github.com/commonjs/commonjs/tree/master/tests/modules).

### Prototype

Since these functions are provided by other individual modules, they are excluded from the following codes.

- `define.parse(def)`
- `define.resolve(id, base)`
- `define.load(uri, callback)`
- `define.getCurrentURI()`

First of all, let us implement the 2 access functions, `define` and `define.main`.

```js
    function define(id, deps, def) {
        var uri, module, m, p;
        if (typeof id === 'function') { // define(definition)
            def = id;
            id = define.getId(uri = define.getCurrentURI());
            deps = define.parse(def);
        }

        // register module
        module = module.hasOwnProperty(id) ? modules[id] : (modules[id] = { id: id, uri: uri, parents: {}, children: deps, definition: def, status: status.LOADED });

        if (typeof deps !== 'function') {
            m = module.exports = {};
            for (p in def) {
                if (def.hasOwnProperty(p)) {
                    m[p] = def[p];
                }
            }
        }

        // check dependent module status
        if (checkDependencies(module)) {
            // notify to parent module
            define.notify(module);
        }
    }

    define.main = function(def) {
        var uri = define.getCurrentURI(), module = main = modules[id] = { id: define.getId(uri), uri: uri, children: define.parse(def), definition: def, status: status.LOADED });
        // check dependent module status
        if (checkDependencies(module)) {
            define.execute(module);
        }
    };
```

The `checkDependencies` function is used to check the status of all modules required, if no such dependent module, create one and load it, if all children modules required are interactive, then set the parent module to interactive.

```js
    checkDependencies = function(module) {
        for (var i = 0, deps = module.children, l = deps.length, dep, m, all; i < l; i += 1) {
            m = modules[dep = deps[i]];
            if (!m) {
                m = {};
                m[id] = module.id;
                modules[dep] = { id: dep, parents: m, status: status.UNINITIALIZED };
                define.load(define.getURI(dep), define.onLoad);
                all = false;
            } else {
                if (m.status < status.INTERACTIVE) {
                    all = false;
                }
                m.parents[module.id] = false;
            }
        }
        if (all) {
            module.status = status.INTERACTIVE;
        }
        return all;
    };
```

In order to change the status of parent modules after the dependent module status change correspondingly, `define.notify` function checks the status of all parent modules one by one, and notifies the interactive parent module iteratively if has.

```js
    define.notify = function(module) {
        var parents = module.parents, p, m, all;
        for (p in parents) {
            m = modules[p];
            // if main access point, then execute the module
            if (m === main && m.status === status.INTERACTIVE) {
                define.execute(m);
            } else if (m.status === status.LOADED && define.checkDependencies(m)) {
                define.notify(m);
            }
        }
    };
```

`define.execute` is last step to change module to the final complete state, by module definition execution.

```js
    define.execute = function(module) {
        var def = module.def, m, p;
        if (typeof def === 'function') {
            m = require.main = {id: module.id, uri: module.uri, exports: {}};
            def.call(global, require, m.exports, m);
            module.exports = m.exports;
            delete require.main;
        }
        module.status = status.COMPLETE;
    };
```

The free variable `require` function supports both 'sync' and 'async' ways according to the set arguments.

```js
    function require(id, callback) {
        var mid = require.main.id, m, deps, i, l, exports;
        if (typeof callback === 'function') {
            if (id instanceof Array) {
                for (deps = [], i = 0, l = deps.length; i < l; i += 1) {
                    deps[i] = define.resolve(deps[i], mid);
                }
            } else {
                deps = [define.resolve(id, mid)];
            }
            define(mid + '#' + id, deps, function(require) {
                for (var i = 0, l = deps.length, args = []; i < l; i += 1) {
                    args[i] = require(deps[i]);
                }
                callback.apply(global, args);
            });
            return;
        }

        id = define.resolve(id, mid);
        m = modules[id];
        if (m) {
            if (m.status !== status.COMPLETE) {
                define.execute(m);
            }
            // clone exports to avoid malicious changes
            exports = {};
            m = m.exports;
            for (p in m) {
                if (m.hasOwnProperty(p)) {
                    exports[p] = m[p];
                }
            }
            return exports;
        }
        throw new Exception('module ' + id + ' not found');
    }
```

Put them all together.

```js
    (function(global) {
        if (global.define) return;

        var modules = {}, status = {
            UNINITIALIZED : 0,
            LOADING : 1,
            LOADED : 2,
            INTERACTIVE : 3,
            COMPLETE : 4,
            FAILED : -1
        }, main;

        function define(id, deps, def) {
            var uri, module, m, p;
            if (typeof id === 'function') { // define(definition)
                def = id;
                id = define.getId(uri = define.getCurrentURI());
                deps = define.parse(def);
            }

            // register module
            module = module.hasOwnProperty(id) ? modules[id] : (modules[id] = { id: id, uri: uri, parents: {}, children: deps, definition: def, status: status.LOADED });

            if (typeof deps !== 'function') {
                m = module.exports = {};
                for (p in def) {
                    if (def.hasOwnProperty(p)) {
                        m[p] = def[p];
                    }
                }
            }

            // check dependent module status
            if (checkDependencies(module)) {
                // notify to parent module
                define.notify(module);
            }
        }

        define.main = function(def) {
            var uri = define.getCurrentURI(), module = main = modules[id] = { id: define.getId(uri), uri: uri, children: define.parse(def), definition: def, status: status.LOADED });
            // check dependent module status
            if (checkDependencies(module)) {
                define.execute(module);
            }
        };

        // set the module status according to dependent modules status
        checkDependencies = function(module) {
            for (var i = 0, deps = module.children, l = deps.length, dep, m, all; i < l; i += 1) {
                m = modules[dep = deps[i]];
                if (!m) {
                    m = {};
                    m[id] = module.id;
                    modules[dep] = { id: dep, parents: m, status: status.UNINITIALIZED };
                    define.load(define.getURI(dep), define.onLoad);
                    all = false;
                } else {
                    if (m.status < status.INTERACTIVE) {
                        all = false;
                    }
                    m.parents[module.id] = false;
                }
            }
            if (all) {
                module.status = status.INTERACTIVE;
            }
            return all;
        };

        // notify the parent modules to check the status
        define.notify = function(module) {
            var parents = module.parents, p, m, all;
            for (p in parents) {
                m = modules[p];
                // if main access point, then execute the module
                if (m === main && m.status === status.INTERACTIVE) {
                    define.execute(m);
                } else if (m.status === status.LOADED && define.checkDependencies(m)) {
                    define.notify(m);
                }
            }
        };

        // execute the interactive module to the final complete state
        define.execute = function(module) {
            var def = module.def, m, p;
            if (typeof def === 'function') {
                m = require.main = {id: module.id, uri: module.uri, exports: {}};
                def.call(global, require, m.exports, m);
                module.exports = m.exports;
                delete require.main;
            }
            module.status = status.COMPLETE;
        };

        define.getURI = function(id) {
            return id.indexOf('://') > 0 ? id : define.root + id;
        };

        define.getId = function(uri) {
            return uri.indexOf(define.root) === 0 ? uri.replace(define.root, '') : uri;
        };

        define.status = status;

        define.onLoad = function(uri) {};

        function require(id, callback) {
            var mid = require.main.id, m, deps, i, l, exports;
            if (typeof callback === 'function') {
                if (id instanceof Array) {
                    for (deps = [], i = 0, l = deps.length; i < l; i += 1) {
                        deps[i] = define.resolve(deps[i], mid);
                    }
                } else {
                    deps = [define.resolve(id, mid)];
                }
                define(mid + '#' + id, deps, function(require) {
                    for (var i = 0, l = deps.length, args = []; i < l; i += 1) {
                        args[i] = require(deps[i]);
                    }
                    callback.apply(global, args);
                });
                return;
            }

            id = define.resolve(id, mid);
            m = modules[id];
            if (m) {
                if (m.status !== status.COMPLETE) {
                    define.execute(m);
                }
                // clone exports to avoid malicious changes
                exports = {};
                m = m.exports;
                for (p in m) {
                    if (m.hasOwnProperty(p)) {
                        exports[p] = m[p];
                    }
                }
                return exports;
            }
            throw new Exception('module ' + id + ' not found');
        }

        global.define = define;
    })(window);
```

### More

Actually, more things need to be considered for robust codes. For example, the dependency cyclic problem, or how to deal with the error when definition function execution, etc. The codes above is a demo to help understanding and thinking, more than a practice library to be used.

For actual usage, you can choose one of the well known libraries, like [RequireJS][3], or you can also take a try with the one written by my own, [One Piece](https://github.com/nozer0/one-piece), appreciate your advises ; ).

- - -
[1]: http://wiki.commonjs.org/wiki/Modules/1.1.1
[2]: https://github.com/amdjs/amdjs-api/wiki/AMD
[3]: http://www.requirejs.org
[4]: http://nodejs.org/api/modules.html
[5]: http://nodejs.org