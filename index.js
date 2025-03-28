// input field selection 

const inputFeild=document.querySelector('input');
console.log(inputFeild);

console.log(inputFeild.value);

//button selector 
const button =document.querySelector('.add-btn');
console.log(button );

//unordered list selection
const ul=document.querySelector('ul')



button.addEventListener('click',()=>{
    

    //input value storing

    const todoValue=inputFeild.value.trim();
    console.log(todoValue);

    if(todoValue===''){
        return;
    }

    else{
        
        const listItem=document.createElement('li');
        //creating a container for text value and line through button

        const div=document.createElement('div');
        div.classList.add('show-task')

        //container for edit delete button
        const buttonContainer=document.createElement('div');

        //added new task
        buttonContainer.classList.add('btn-container');
        const p=document.createElement('p');
        const completeBtn=document.createElement('button');
        const deleteBtn=document.createElement('button');

        p.textContent=todoValue;
        completeBtn.textContent='Complete';
        deleteBtn.textContent='Delete';



        buttonContainer.append(completeBtn,deleteBtn)
        ul.appendChild(listItem);
        listItem.appendChild(div);
        div.append(p,buttonContainer);

       
        

        //line through button event listener

completeBtn.addEventListener('click',()=>{
    
    p.style.textDecoration=p.style.textDecoration==='line-through'?'none':'line-through';
})



deleteBtn.addEventListener('click',()=>{
    listItem.remove();
})
        
        
        
    }
})





