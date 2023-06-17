let employeeArray=[];
function employee(id,name,profession,age){
  this.id=id;
  this.name=name;
  this.profession=profession;
  this.age=age;
}
function addEmployee(){
  const name = document.getElementById('name');
  const profession = document.getElementById('profession');
  const age = document.getElementById('age');
  const error = document.getElementById('error');
  const success= document.getElementById('success');
  if(name.value ==='' || profession.value ==='' || age.value ===''){
    error.textContent='Error :Please make sure all fields are filled before adding an employee!';
    return;
  }
   const id = Date.now();
   const person = new employee(id,name.value,profession.value,age.value);
   employeeArray.push(person);
   name.value='';
   profession.value='';
   age.value='';
   error.textContent='';
   success.textContent='Success : Employee Added!';
   employeeList()
}
function deleteEmployee(id){
  const index = employeeArray.findIndex(employee=>employee.id===id);
  employeeArray.splice(index,1);
  employeeList();
}
function employeeList(){
  const employeeList=document.getElementById('employeeList');
  
  employeeList.innerHTML='';
  const p = document.createElement('p');
   p.innerText=`You Have Added ${employeeArray.length} Employee`;
   employeeList.appendChild(p);
  employeeArray.forEach(employee =>{
    
    const div= document.createElement('div');
    div.classList.add('employee');
    const deleteButton =document.createElement('button');
    const id = document.createElement('div');
    id.textContent=`ID: ${employee.id} `;
    const name = document.createElement('div');
    name.textContent=`Name: ${employee.name} `;
    const profession = document.createElement('div');
    profession.textContent=`Profession: ${employee.profession} `;
    const age= document.createElement('div');
    age.textContent=`ID: ${employee.age} `;
   
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteEmployee(employee.id));
    div.appendChild(id);
    div.appendChild(name);
    div.appendChild(profession);
    div.appendChild(age);

    div.appendChild(deleteButton);
    employeeList.appendChild(div);

  });
}
document.getElementById('submit').addEventListener('click',addEmployee);