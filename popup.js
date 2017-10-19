
function insertPrimitive(primitive) {
  var script = 'var scene = document.querySelector("a-scene"); if (scene) { var node = document.createElement("'+primitive+'"); scene.appendChild(node); }';
  // See https://developer.chrome.com/extensions/tabs#method-executeScript.
  // chrome.tabs.executeScript allows us to programmatically inject JavaScript
  // into a page. Since we omit the optional first argument "tabId", the script
  // is inserted into the active tab of the current window, which serves as the
  // default.
  chrome.tabs.executeScript({
    code: script
  });
}

document.addEventListener('DOMContentLoaded', () => {
  var dropdown = document.getElementById('dropdown');
  dropdown.addEventListener('change', () => {
    insertPrimitive(dropdown.value);
  });
});
