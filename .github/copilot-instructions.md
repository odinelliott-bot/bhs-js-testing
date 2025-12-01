<!-- .github/copilot-instructions.md -->
# Copilot / AI agent instructions for bhs-js-testing

Purpose
- This repo is a lightweight browser-based exercise runner for small JavaScript
  functions. Students edit `script.js` and the page (index.html + testing.js)
  fetches test cases and invokes any global functions you define.

Big picture / architecture
- index.html is a static page that loads `script.js` (student code) and
  `testing.js` (test harness). `testing.js` fetches test cases from
  `TEST_CASES_URL` and then looks for functions on the global `window` by
  name. If a function named `fib` exists in `script.js`, testing.js will call
  `window['fib'](...)` with test inputs.
- test-data is kept in `data/data.json` (the tests are fetched from the raw
  GitHub URL in `testing.js`). The harness compares results using
  JSON.stringify(got) === JSON.stringify(expected) — so outputs must be
  JSON-serializable and match structure exactly.

Where to edit
- Only edit `script.js`. The README explicitly states this and the UI/tests
  expect student functions to be defined there.

Key patterns & conventions for AI edits
- Function names must exactly match the test-case names (e.g. `string_bits`,
  `caughtSpeeding`) and be defined on the global scope (plain function
  declarations or attaching to `window` are fine). The harness uses
  `window[fn].apply(null, args)`.
- Avoid changing `testing.js` or `index.html`. They implement the test flow and
  UI. Modifying them will break the expected student workflow.
- Do not mutate the provided test inputs — `testing.js` already clones inputs
  via JSON.parse(JSON.stringify(...)) before calling student code.
- Return values must be deterministic and JSON-serializable (numbers, strings,
  arrays, plain objects). Arrays/objects must match shape and order expected by
  the test cases because comparisons are stringified.
- Prefer function declarations (function name(...) { ... }) rather than module
  systems or exports — this is a static browser environment, no bundler.

Developer workflows / running locally
- The page is static. In Repl.it (or similar) use the Run button to re-evaluate
  `script.js`. Locally you can serve the folder with a static server, for
  example:

```bash
# from repo root
python -m http.server 8000
# then open http://localhost:8000 in a browser
```

Testing notes the AI must know
- `testing.js` fetches tests from the remote `TEST_CASES_URL`. PREVENT_CACHING
  is available to force fresh fetches. If tests appear stale, toggle that.
- When writing fixes, ensure your function signatures match the expected
  positional parameters in test cases (no extra optional parameters unless
  harmless).
- Example patterns in this repo: `script.js` uses simple `if`/loops and
  `substring`/index access for string problems. Keep changes small and focused.

Examples (from codebase)
- `string_bits(str)` should return characters at even indices: implement with a
  for loop or array filter and return a string.
- `caughtSpeeding(speed, is_birthday)` must follow the specific thresholds used
  by tests — ensure logic accounts for the `is_birthday` adjustment.

Merge guidance
- No existing `.github/copilot-instructions.md` found — create or replace only
  if you confirm there is an existing file to merge with.

If anything above is unclear or you want me to include additional examples
from a particular problem set (e.g. HL Recursion), tell me which ones and I
will iterate.
