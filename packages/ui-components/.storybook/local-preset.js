/**
 * to load the built addon in this test Storybook
 */
function previewAnnotations(entry = []) {
    return [...entry, require.resolve("../src/juno-addon/preview.js")];
  }
  
  function managerEntries(entry = []) {
    return [...entry, require.resolve("../src/juno-addon/manager.js")];
  }
  
  module.exports = {
    managerEntries,
    previewAnnotations,
  };