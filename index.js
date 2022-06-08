const appManagerObj = window.oipfObjectFactory.createApplicationManagerObject();

for(const key in appManagerObj) {
    console.log(key)
}

console.log('----------------------------');

const appClass = appManagerObj.getOwnerApplication(window.document);
for(const key in appManagerObj) {
    console.log(key)
}