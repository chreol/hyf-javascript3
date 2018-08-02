// 2
let theUrl = 'https://api.github.com/orgs/HackYourFuture/repos';



let button2 = document.getElementById('getclick');
button2.addEventListener('click', function(event){
    console.log('you clicked me!,This is what i have!!!');
let xhr = new XMLHttpRequest;
xhr.open('GET', theUrl, false );
xhr.send();
if (xhr.readyState != 4 && xhr.status != 200){
    let onMyScreen = JSON.parse(xhr.responseText);
    throw new Error('something\'s Going wrong');
    console.log(xhr.responseText);
}

document.getElementById("fullResult").innerHTML = 
`<h3>Full Result of Search: 
        </h3>${xhr.responseText}`;
})

// ==============================
let button = document.getElementById("butonId");

let search = button.addEventListener('click', function(event){
    console.log("search in action");
    let theUrl1 = 'https://api.github.com/repos/HackYourFuture/';
    console.log(theUrl1);
    let usersInput = document.getElementById("input").value;
    theUrl1 = theUrl1 + usersInput;
    console.log(usersInput);
    console.log(theUrl1);
    let xhr= new XMLHttpRequest;
    xhr.open('GET', theUrl1, true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    function processRequest(e){
    if (xhr.readyState == 4 && xhr.status == 200){
        console.log('ok');
        console.log(xhr.responseText);
     let onMyScreen = JSON.parse(xhr.responseText);
    let print = document.getElementById("usersDetail");
        print.innerHTML =    `<h2> 
        Name:</h2>${onMyScreen.name}:
        <h3>User Id:</h3>${onMyScreen.id}
        <h3>Login:</h3>${onMyScreen.owner.login}
        <h3>Node Id:</h3>${onMyScreen.node_id}
        <h3>Full Name:</h3>${onMyScreen.full_name}
        <h3>Owner</h3>${onMyScreen.owner.avatar_url}
        <h3>Description</h3>${onMyScreen.description}`;   
    }
    
    }
    
});