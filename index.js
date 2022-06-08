const appManagerObj = window.oipfObjectFactory.createApplicationManagerObject();

dispatchEvent(new Event('lowmemory'));
dispatchEvent(new Event('LowMemory'));

appManagerObj.onlowmemory = function() {
    console.log('onlowmemory() called');
}

appManagerObj.onLowMemory = function() {
    console.log('onLowMemory() called');
}
