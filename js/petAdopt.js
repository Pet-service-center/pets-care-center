
// create card for each object type
function render(divSet, typeSet) {
    for (let i = 0; i < Animals.all.length; i++) {
      if (Animals.all[i].type === typeSet) {
        let div = document.createElement('div');
        divSet.appendChild(div);
        let img = document.createElement('img');
        img.src = Animals.all[i].img;
        div.appendChild(img);
        let h1 = document.createElement('h1');
        h1.textContent = Animals.all[i].name;
        div.appendChild(h1);
        let p1 = document.createElement('p');
        p1.textContent = `${Animals.all[i].age} week`;
        div.appendChild(p1);
        let p2 = document.createElement('p');
        p2.textContent = Animals.all[i].city;
        div.appendChild(p2);
        let p3 = document.createElement('p');
        p3.textContent = Animals.all[i].phone;
        div.appendChild(p3);
        let h5 = document.createElement('h5');
        h5.textContent = Animals.all[i].description;
        div.appendChild(h5);
        let p4 = document.createElement('p');
        div.appendChild(p4);
        let button = document.createElement('button');
        button.textContent = 'Adoption';
        p4.appendChild(button);
        button.setAttribute('id', Animals.all[i].id);
  
      }
  
    }
  }
  
  
  
  function renderAll() {
  
    render(hamstor, 'hamster');
    render(cat, 'cat');
    render(dog, 'dog');
    render(fish, 'fish');
    render(bird, 'parrot');
    render(turtle, 'turtle');
  
  }
  renderAll();
  
  // to remove the elemntes from html page
  function cleadDiv() {
  
    hamstor.innerHTML='';
    cat.innerHTML='';
    dog.innerHTML='';
    fish.innerHTML='';
    bird.innerHTML='';
    turtle.innerHTML='';
  
  }
  
  
  // add event
  mainDiv.addEventListener('click', removeAnimals);
  let surediv=document.getElementById('sure');
  
  
  function removeAnimals(event) {
  
    // add the the event for button only
    if (event.target.textContent === 'Adoption') {
      for (let i = 0; i < Animals.all.length; i++) {
        // get obj using the ID
        if (Animals.all[i].id == event.target.id) {
         // surediv.style.display='block';
         localStorage.setItem('adopt',Animals.all[i].id);
         window.location.href='adoptUser.html';
         // Animals.all.splice(i, 1);
          // re store in local
          setData();
          // clear html page
          cleadDiv();
          // re-drow the html page with new edit in local
          renderAll();
        }
  
      }
  
    }
  }
  
  
  function catlist(){
    cleadDiv();
    render(cat, 'cat');
  }
  
  
  function doglist(){
    cleadDiv();
    render(dog, 'dog');
  }
  
  function fishlist(){
    cleadDiv();
    render(fish,'fish')
  }
  function turtlelist(){
    cleadDiv();
    render(turtle, 'turtle');
  }
  
  function parrotlist(){
    cleadDiv();
    render(bird, 'parrot');
  }
  
  function hamsterlist(){
    cleadDiv();
    render(hamstor, 'hamster');
  }


  
// form
function openForm() {
    document.getElementById('myForm').style.display = 'block';
  }
  
  function closeForm() {
    document.getElementById('myForm').style.display = 'none';
  }
  
  let form = document.getElementById('formPits');
  
  
  function formSubmission(event) {
    event.preventDefault();
    let type = event.target.type.value.toLowerCase();
    let name= event.target.name.value;
    let age = event.target.age.value;
    let img = event.target.img.value;
    let des = event.target.des.value;
    let city = event.target.city.value;
    let phone = event.target.phone.value;
  
    new Animals(type,name, des, age, city, phone,img);
    // re store in local
    setData();
    // clear html page
    cleadDiv();
    // re-drow the html page with new edit in local
    renderAll();
    window.location.href = `#${type}Div`;
    console.log(`#${type}`);
    document.getElementById('myForm').style.display = 'none';
  }
 