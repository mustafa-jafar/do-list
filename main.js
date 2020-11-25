/*globale let*/
let input = document.querySelector(".add-task input");
let addbottun = document.querySelector(".add-task .plus");
let taskcont = document.querySelector(".all-task span");
let completed =document.querySelector(".task-completed span");
let taskcontent = document.querySelector(".task-content");
// add foucs
window.onload = function () {
    input.focus();
};
// add input contorol
addbottun.onclick = function(){
    if (input.value === "") {
        
     
 
        swal("bad" ,"no task");
    }else{
        
        let nomsg = document.querySelector(".no-task");
        if(document.body.contains(document.querySelector(".no-task"))){
            nomsg.remove();

        }
    
        
        let mainSpan = document.createElement("span");
        let deleteBottun = document.createElement("span");
        let text = document.createTextNode(input.value);
        let deleteText = document.createTextNode("delete");
        mainSpan.appendChild(text);
        mainSpan.className = "task-box";
        deleteBottun.appendChild(deleteText);
        deleteBottun.className = "delete";
        mainSpan.appendChild(deleteBottun);
        taskcontent.appendChild(mainSpan);
        input.value = "";
        input.focus();
        calcutask();
        let local ;
        localStorage.local = "taskcontent";
        


        
        


    };
};

document.addEventListener("click" , function(e){
    if(e.target.className == "delete"){
        e.target.parentNode.remove();
        if(taskcontent.childElementCount == 0){
            createNotask();
        

        }

    }
    if(e.target.classList.contains("task-box")){
        e.target.classList.toggle("finthed");

    }
    calcutask();


});
function createNotask (){
    let msgSpn = document.createElement("span");
    let textmsg = document.createTextNode("No task to show");
    msgSpn.appendChild(textmsg);
    msgSpn.className = "no-task";
    taskcontent.appendChild(msgSpn);
};
function calcutask() {
    taskcont.innerHTML = document.querySelectorAll(".task-content .task-box").length;

    completed.innerHTML = document.querySelectorAll(".task-content .finthed").length;
}
localStorage.setItem(taskcontent,"good");
