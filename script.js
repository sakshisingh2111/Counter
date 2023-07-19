let spanEl= document.getElementById("span");
let count =0


function dec(){
    count -=1
  spanEl.innerHTML = count
}

function res(){
    count=0
    spanEl.innerText=count;

}

function inc(){
    count +=1;
    spanEl.innerText = count;
}

