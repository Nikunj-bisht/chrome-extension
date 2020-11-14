var contextMenus = {};

contextMenus.createpopup = chrome.contextMenus.create({"title":"Save data for this site"
},
function(){

if(chrome.runtime.lastError){

    alert("Cant access the local storage for this site");
    console.error(chrome.runtime.lastError.message);
}

});

contextMenus.creategetsaved = chrome.contextMenus.create({"title":"Get data of this site"
},
function(){

if(chrome.runtime.lastError){
    console.error(chrome.runtime.lastError.message);
}

});


chrome.contextMenus.onClicked.addListener(actionperform)
function actionperform(info,tab){

if(info.menuItemId === contextMenus.createpopup){
    chrome.tabs.executeScript({
        file: 'js/my.js'
      });


}

else if(info.menuItemId === contextMenus.creategetsaved){
    console.log(window.location.href);
    chrome.tabs.executeScript({
        file: 'js/saved.js'
      });



}

}



