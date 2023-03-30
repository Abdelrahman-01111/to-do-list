let task=document.querySelector("input[type='text']");
let add=document.querySelector('input[type="submit"]');
let addedTasks=document.querySelector(".added");

/*  for(let i=0;i<localStorage.length-6;i++){
    
    
    
      let newTask=document.createElement("div");
  let deleteIt=document.createElement("input");
  
  deleteIt.setAttribute("type","checkbox")
  deleteIt.className="done";
  deleteIt.style.cssText="position: absolute; background:#588157; color:white; right:5px; top:50%; transform: translateY(-50%); border-radius:5px; display:block; padding:2px";
 

  deleteIt.addEventListener("click",function(){
    deleteIt.parentElement.style.cssText="transform:translateX(150%); transition:.3s;";
  
    setTimeout(function(){
          deleteIt.parentElement.remove()
    },300)

  })
  newTask.innerHTML=task.value;
  localStorage.setItem(`item${localStorage.length-6}`,task.value)
  addedTasks.append(newTask);
      newTask.append(deleteIt);
      
  }*/
  
  
add.onclick=function(){

  if(task.value!==""){
  let newTask=document.createElement("div");
  let deleteIt=document.createElement("input");
  
  deleteIt.setAttribute("type","checkbox")
  deleteIt.className="done";
  deleteIt.style.cssText="position: absolute; background:#588157; color:white; right:5px; top:50%; transform: translateY(-50%); border-radius:5px; display:block; padding:2px";
 

  deleteIt.addEventListener("click",function(){
    deleteIt.parentElement.style.cssText="transform:translateX(150%); transition:.3s;";
  
    setTimeout(function(){
          deleteIt.parentElement.remove()
    },300)

  })
  newTask.innerHTML=task.value;
  localStorage.setItem(`item${localStorage.length-6}`,task.value)
  addedTasks.append(newTask);
      newTask.append(deleteIt);
      
      
  }      
    
};  
