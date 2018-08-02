////////1
document.getElementById('btn')
.addEventListener('click',()=>{
    console.log("You clicked me");
});
let url='https://api.github.com/orgs/HackYourFuture/repos';
let xhr=new XMLHttpRequest();
xhr.open('GET',url,true);
xhr.onreadystatechange= function(){
    if(xhr.readyState===4 && xhr.status===200){
        let info=JSON.parse(xhr.responseText);
        
        let repos = info.map(linkName=>`${linkName.name}`);
        document.getElementById('btn')
        .addEventListener('click',myFunction);
        function myFunction(){
            console.log(info);
            document.getElementById('btn').innerHTML=`<h3>Repository Name: </h3>${repos}`;
        
        }
    }
};
xhr.send();
/////////////////2

let endPoint = 'https://api.github.com/repos/HackYourFuture/';
// let xhr;
let response;
let  searchbutton = document.getElementById("buttonId")
.addEventListener('click', function search(){
    console.log("You clicked me");
    let usersInput = document.getElementById("inputId").value;
    console.log(usersInput);
    xhr = new XMLHttpRequest();
    let theUrl =  endPoint + usersInput;
    console.log(theUrl);
    xhr.open('GET', theUrl, true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
        console.log("ok");
        let answer = JSON.parse(xhr.responseText);
        console.log(answer);
        // let  = answer;
        let showMyData = document.getElementById("output");
        showMyData.innerHTML = `<h2> 
        Name:</h2>${usersInput}:
        <h3>User Id:</h3>${answer.id}
        <h3>Login:</h3>${answer.owner.login}
        <h3>Node Id:</h3>${answer.node_id}
        <h3>Full Name:</h3>${answer.full_name}
        <h3>Owner</h3>${answer.owner.avatar_url}
        <h3>Description</h3>${answer.description}
        <h3>Full Result of Search: 
        </h3>${xhr.responseText}`;
        
        }
        
    } 
    
});
