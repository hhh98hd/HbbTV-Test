const appManagerObj = window.oipfObjectFactory.createApplicationManagerObject();

for(const key in appManagerObj) {
    console.log(key);
}

console.log('----------------------------');

const appClass = appManagerObj.getOwnerApplication(document);
console.log(appManagerObj.getOwnerApplication());

for(const key in appClass) {
    console.log(key);
}