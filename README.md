# HiBob Calendar Chrome Extension

## Setup the extension
Run the following commands to update the `dist` folder:
```
yarn
yarn build
```
In Chrome, go to: `chrome://extensions`

Ensure the "Developer mode" toggle is enabled in the top right corner

Click the "Load unpacked" button and navigate to the dist folder in this repo.

## Setup Dev Environment
Follow the above steps first ^^

Run `yarn watch` for changes to build on save

Install the [Extensions Reloader extension](https://chromewebstore.google.com/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) _(ironic)_

Navigate to [HiBob time off page](https://app.hibob.com/time-off/my-time-off)

Whenever you make a change to the extension you need to press `SHIFT + OPTION + R` followed by `CMD + R` to reload the extension code and the page
