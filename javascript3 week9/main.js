(function(){
    let _log = console.log;
    let _error = console.error;

console.error = function(errmessage){
    document.getElementById('console').innerHTML = 'Error: ' + errMessage;
_error.apply(console,arguments)
};
    console.log = function(logMessage){
        document.getElementById('console').innerHTML = logMessage;
    _log.apply(console, arguments);
    };
    
})();

console.log('giving my things');

const sourceBtn = document.getElementById('viewSource');
const runBtn = document.getElementById('runCode');
// const consl = document.getElementById('console');
let xhr;

sourceBtn.addEventListener('click', displayCode);
runBtn.addEventListener('click', runCode);

function displayCode(){
    xhr = new XMLHttpRequest();
    // open
    xhr.open("GET", './room.js', true);
    // send
    xhr.responseType = 'text';
    xhr.send();
    // listen change state
    xhr.onreadystatechange = processRequest;
};

function processRequest(e){
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    };
};

function runCode() {
    let inpt = document.getElementsByTagName('input')[0];
    
    try{
        eval(inpt.value);
    }catch(err) {
        console.log(err);
    }
    inpt.value = '';
}