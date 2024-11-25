# Dynamic import of JSON in TS

1. `pnpm i`
2. `pnpm build`

    - observe errors due to @ts-expect-error where I expect to see errors.

3. `pnpm runMjs` (I set noEmitOnError: false, so this will work)

    - node fails at runtime, `ERR_IMPORT_ASSERTION_TYPE_MISSING`, [expected due to how node handles json imports](https://nodejs.org/api/esm.html#json-modules).

4. `pnpm runCjs`
    - node also fails at runtime, `ERR_IMPORT_ASSERTION_TYPE_MISSING`!
    This is because [`import()` is available in commonjs modules in node](https://nodejs.org/api/esm.html#import-expressions), and has the same semantics there as the ESM import. So, this runtime error is also expected.

Because of the errors in steps 3 and 4, I expect TS to report the errors noted in step 2.
