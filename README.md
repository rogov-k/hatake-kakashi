# hatake kakashi

## Todo
-   add fabric lice:
    ```javascript
    // src/example1.js
    export function example1(handler) {
      return async (req, res) => {
          // todo something
        return handler(req, res);
      };
    }
    
    // src/example2.js
    export function example2(handler) {
      return async (req, res) => {
          // todo something
        return handler(req, res);
      };
    }
    
    // src/main.js
    import { example1 } from './example1.js';
    import { example2 } from './example2.js';
    
    example1(example2((req, res) => {
        res.status(200).json({ ok: true, data: "You are authorized!" });
    }));
    // run example1 -> example2 -> <your_code>
    ```
  - Third party auth