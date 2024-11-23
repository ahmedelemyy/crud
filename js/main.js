

var entername= document.getElementById("username")
var enterurl= document.getElementById("userurl")
var exitmsg=document.getElementById("msg")
var alldata=[]
var write;

if(localStorage.getItem("clintdata")!=null){
    alldata= JSON.parse(localStorage.getItem("clintdata"))

    displaydata();
}

function enter(){

   if( validname() && validurl() ){

    var clint={
         clintname: entername.value,
         clinturl: enterurl.value,
     }
     alldata.push(clint)
 
   localStorage.setItem("clintdata",JSON.stringify(alldata))


   displaydata();

cleardata();
 
     exitmsg.classList.remove("d-block");
    exitmsg.classList.add("d-none");
   
   }
   
   else{
    exitmsg.classList.add("d-block");
    exitmsg.classList.remove("d-none");
    entername.classList.add("is-invalid")
    enterurl.classList.add("is-invalid")
   }

   
   
}


function cleardata(){

    entername.value="",
    enterurl.value="";

    entername.classList.remove("is-valid")
    
    enterurl.classList.remove("is-valid")
    

}


function displaydata() {
    var data=""

    for(var i=0;i<alldata.length;i++){

        data+=`
         <tr>
          <th>${i}</th>
          <th>${alldata[i].clintname}</th>
          <th><button onclick="visitdata(${i})"  class="btn visit  "><i class="fa-solid fa-eye"></i> visit</button></th>
          <th><button onclick="deletedata(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i>
           Delete</button></th>
          
        </tr>
        `
    }
    document.getElementById("show").innerHTML=data
    
}


function deletedata(index){

    alldata.splice(index,1);
    localStorage.setItem("clintdata",JSON.stringify(alldata))


    displaydata();



}

function visitdata(index){
   var url= alldata[index].clinturl

   window.open(url,'_blank')

  
  
}

function exitdata(){
    
    exitmsg.classList.add("d-none");

    
  
}


function validname(){
   
    var text= entername.value

    var regexname= /^[A-Za-z1-9]{3,10}$/i

    if(regexname.test(text)){
        entername.classList.remove("is-invalid")
        entername.classList.add("is-valid")
        return true;
        
       
    }
    else{
       
        entername.classList.add("is-invalid")
        entername.classList.remove("is-valid")
        return false;
        
    }




}
function validurl(){
   
    var text= enterurl.value

    var regexurl= /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/+)*$/
    

    if(regexurl.test(text)){
        enterurl.classList.remove("is-invalid")
        enterurl.classList.add("is-valid")
        return true;
       
    }
    else{
       
        enterurl.classList.add("is-invalid")
        enterurl.classList.remove("is-valid")
        return false;
    }



}

