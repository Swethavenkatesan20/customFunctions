custom-js-utils/
│
├── array/
│   ├── map.js
│   ├── filter.js
│   ├── reduce.js
│   ├── forEach.js
│   ├── find.js
│   ├── some.js
│   ├── every.js
│   └── flatMap.js
│
├── string/
│   ├── customTrim.js
│   ├── reverseString.js
│   ├── capitalize.js
│   └── slugify.js
│
├── number/
│   ├── isPrime.js
│   ├── factorial.js
│   ├── debounce.js
│   └── throttle.js
│
├── object/
│   ├── deepClone.js
│   ├── deepEqual.js
│   ├── flattenObject.js
│   └── mergeObjects.js
│
├── promise/
│   ├── customPromise.js
│   ├── promiseAll.js
│   ├── promiseRace.js
│   └── asyncQueue.js
│
├── utils/
│   ├── curry.js
│   ├── compose.js
│   ├── memoize.js
│   ├── pipe.js
│   └── sleep.js
│
│
├── function/
│   ├── call.js
│   ├── apply.js
│   ├── bind.js
│   ├── curry.js
│   ├── partial.js
│   └── once.js
│
├── closure/
│   ├── counter.js           # Classic closure example
│   ├── privateState.js      # Encapsulation via closure
│   ├── closureInLoops.js    # `var` vs `let` in loops
│   └── memoizeWithClosure.js
│
├── scope/
│   ├── lexicalScope.js
│   ├── hoisting.js
│   ├── temporalDeadZone.js
│   └── blockScope.js
│
├── this/
│   ├── globalThis.js
│   ├── implicitBinding.js
│   ├── explicitBinding.js
│   ├── newBinding.js
│   └── arrowVsRegular.js
└── README.md





What to Learn & Implement
Here’s a curated list of concepts you can build from scratch:

✅ Array Methods
map, filter, reduce, forEach, find, some, every, flat, flatMap

✅ String Utilities
trim, padStart, padEnd, split, replace, slugify, camelCase, snake_case

✅ Number Utilities
debounce, throttle, isPrime, factorial, fibonacci, roundToDecimal

✅ Object Utilities
deepClone, deepEqual, flattenObject, merge, omit, pick, getNestedValue

✅ Promise & Async
Custom Promise class

promiseAll, promiseRace, promiseAny

retry, timeout, asyncQueue, sequentialExecution

✅ Functional Programming
curry, compose, pipe, memoize, once, bind


Other Must-Learn Concepts to Add
These don’t fit neatly into utility categories but are crucial for mastery:

✅ Execution & Memory
Event loop

Microtask vs macrotask

Call stack & memory heap

Garbage collection

✅ Error Handling
try/catch/finally

Custom error classes

Async error propagation

✅ ES6+ Features
Destructuring

Spread/rest operators

Optional chaining

Nullish coalescing

✅ Advanced Patterns
Module pattern

Revealing module pattern

Factory functions

Singleton pattern

🧭 How to Segregate & Learn
Since you prefer incremental mastery:

Start with function/ and closure/ — they unlock understanding of this, async, and memory.

Document each file with:

> What it does

> Why it matters

> Edge cases

> Real-world use

Write tests to validate behavior (especially for bind, memoize, etc.)

Link concepts together — e.g., closures + currying, or this + call/apply.