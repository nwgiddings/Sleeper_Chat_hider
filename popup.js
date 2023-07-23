let toggle = document.getElementById('switch');
toggle.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript(
            {
                target: {tabId: tabs[0].id},
                files: ['toggleView.js'],
            });
        saveChanges();
        getStateOfToggle();
        }
    );
};

function getStateOfToggle() {
    isChecked = document.getElementById('switch').checked;
    chrome.storage.local.get(['toggled'], function(result) {
        if (result.toggled == true) {
            document.getElementById('switch').checked = true;
            document.getElementById('switch').value = "on";
            
        } else {
            document.getElementById('switch').checked = false;
            document.getElementById('switch').value = "off";
        }
      });
}
function saveChanges() {
    // Get a value saved in a form.
    var toggled = document.getElementById('switch').checked;
    // Check that there's some code there.
    chrome.storage.local.set({'toggled': toggled}, function() {});
    window.close()
  }