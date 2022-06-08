// const appManagerObj = window.oipfObjectFactory.createApplicationManagerObject();
const appManagerObj = document.getElementById('oipf-app-manager');

for(const key in appManagerObj) {
    console.log(key);
}

console.log('----------------------------');

const appClass = appManagerObj.getOwnerApplication(document);
console.log(appManagerObj.getOwnerApplication);
console.log(appClass);
for(const key in appClass) {
    console.log(key);
}