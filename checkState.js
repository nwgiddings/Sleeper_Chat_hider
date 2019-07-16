chrome.storage.local.get(['toggled'], function(result) {
    if (result.toggled == true) {
        document.getElementById('switch').checked = true;
        document.getElementById('switch').value = "on";
        
    } else {
        document.getElementById('switch').checked = false;
        document.getElementById('switch').value = "off";
    }
  });