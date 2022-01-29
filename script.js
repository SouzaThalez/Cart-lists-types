// SELECTORS
let shoppingList= document.getElementById('shopping-list')
let buttonOne = document.getElementById('button-1');
let buttonTwo =  document.getElementById('button-2')
let totalItems = document.getElementById('total-items');
let count = 0 ;
var max = 6;
//the span element that holds de totalItem value
let newSpan = document.createElement('span');
updateTotal();
// SELECTORS
let listItems = document.querySelectorAll('#list-items li');
const userText = document.getElementById('user-text');
let submitBtn = document.getElementById('submit-btn');
let clearBtn =  document.getElementById('clear-btn');
let selectOp = document.querySelector('.select-op');

// FUNCITON
function clickButton(){
  if (count >= max) {
    alert('YOU HAVE REACH THE LIMIT OF INTEMS!');
  }
  else {

    let newItem = document.createElement('li');
    let para =  document.createElement('p');
    para.innerText = 'Item Added!';
    newItem.appendChild(para);
    shoppingList.append(newItem);
    count++;
    updateTotal();
  }

}
function deleteContent(){
  let itemList = document.querySelectorAll('#shopping-list li');
  itemList[0].remove();
  count--
  updateTotal();
}
function updateTotal (){
   //creating variable to store 5 and than subtract
   var numberItems = max - count;
   newSpan.textContent = numberItems;
   totalItems.appendChild(newSpan);
}
function submitContent(){
  let seOp =selectOp.value;
  seOp = seOp - 1;

  if(seOp <= listItems.length){
    const text = document.createElement('text');
    text.innerHTML = userText.value;
    listItems[seOp].append(text);
  }
}

// triger event 
buttonOne.addEventListener('click', clickButton);
buttonTwo.addEventListener('click',deleteContent);
submitBtn.addEventListener('click',submitContent);
clearBtn.addEventListener('click',clearContent);


function clearContent(){
debugger
  for (let index = 0; index < listItems.length; index++) {
    const element = listItems[index];
    
      if(!element.innerHTML == ''){
          element.innerHTML = '';
      }
      else{
        break;
      }
  }
 
}

  
  

