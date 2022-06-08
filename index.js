const appManagerObj = window.oipfObjectFactory.createApplicationManagerObject();

dispatchEvent(new Event('lowmemory'));
dispatchEvent(new Event('LowMemory'));

console.log(appManagerObj.onlowmemory);
console.log(appManagerObj.onLowMemory);

appManagerObj.onlowmemory = function() {
    console.log('onlowmemory() called');
}

appManagerObj.onLowMemory = function() {
    console.log('onLowMemory() called');
}
