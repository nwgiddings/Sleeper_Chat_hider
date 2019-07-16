let toggle = document.getElementById('switch');
toggle.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 
                "if (document.getElementsByClassName('dual-content-panel')[0].style.display == 'block') { \n" +
                    "document.getElementsByClassName('dual-content-panel')[0].style.display = 'flex' \n" +
                "} else { \n" +
                    "document.getElementsByClassName('dual-content-panel')[0].style.display = 'block' \n" +
                "}"
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