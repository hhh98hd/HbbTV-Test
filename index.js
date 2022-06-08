const appManager = document.getElementById('oipf-app-manager');
const appManagerObj = window.oipfObjectFactory.createApplicationManagerObject();

for(const key in appManagerObj) {
    console.log(key)
}
