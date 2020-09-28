## Using Jest

1. Create a new folder (or use an existing one) 
2. We will be using the `jest` framework to run our tests, so we need to install it.

    `npm i jest`

3. We need to setup your folder for using `jest` . To do that, initialize your project

    `npm init -y` 

4. Create a file for your solutions to this section. Call it `main.js`.
5. Create a file for the tests. Call it `main.test.js`. The word `test` in the filename is important; Jest will only run files with `test` in the filename.
6. First tell your test file to include the file that will have your solutions:

    ```jsx
    const fn = require('./main.js')
    ```

We're now ready to start writing functions. We'll do the first one step-by-step as an example.

## Example

1. In the `main.js` file, set up the object that will be exported to the test file and write your solution.

    ```jsx
    const allFuns = {}

    const removeCharX = ( ... ) => {
      // Your code goes here
    }

    allFuns.removeCharX = removeCharX

    module.exports = allFuns
    ```

## Testing

1. Run the test with `jest main.test.js`.
    - If you have problems running jest

        Run it directly from the library: `node_modules/jest/bin/jest.js` 

        If that doesn't work:

        - Try installing jest globally: `npm i -g jest`, and run it again: `jest`
            - If you get an `EACCES` error, then you need to run it with sudo:
                - `sudo npm i -g jest`

2. To have your tests automatically re-run as you edit the code or add new tests, run jest with the `--watch` option in one terminal and leave it running. As you change your code in your editor (VS Code, vim, etc.) your tests will run automatically. Press `q` to exit when you're done.

    `jest --watch main.test.js`

3. For each new exercise, click the Tests toggle and add the tests to your `main.test.js` file. Then add your solution to the `main.js` file and re-run the tests (or leave them running with `--watch`).