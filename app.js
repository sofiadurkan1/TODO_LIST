
//select the element

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
// const element =  document.getElementById("element");

//classes name
const CHECK = "fas fa-check-circle ";
const UNCHECK ="far fa-circle";
const LINE_THROUGH = "lineThrough";

//Variable
let LIST= []
, id = 0;















function addToDo(toDo,id, done, trash){
    if (trash){return;}
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
const item = `<li class="item">
              <i class="far ${DONE} co" job ="complete" id="${id}"></i>
              <p class="text ${LINE}">${toDo}</p>
              <i class="far fa-trash-alt" job="delete" id="${id}"></i>
             </li>`;

const position = "beforeend";

list.insertAdjacentHTML(position,item);
}

// addToDo("Drink coffe")(deneme)


//add an item to the list

document.addEventListener("keyup",function(even){
if(event.keyCode == 13){
    const Todo = input.value;
    

    //if input isn't empty
    if(toDo){
        addToDo(toDo, id,false,false);

        LIST.push({
            name : toDo,
            id : id,
            done : false,
            trash : false
        });
        id++;
    }
    input.value = "";


}
});

//complete to do

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;



}

//remove to do 
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

//target the items dynamically
list.addEventListener





