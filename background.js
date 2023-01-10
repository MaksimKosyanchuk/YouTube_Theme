chrome.rutime.OnInstalled.addListener(function(){
    chrome.storage.sync.set({color: '#111111'}, function(){
        
    });
});
