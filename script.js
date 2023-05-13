const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  try {
    await PromiseAPI1();
    await PromiseAPI2();
    await PromiseAPI3();
  } catch (error) {
    console.error(error);
  }
});

function PromiseAPI1() {
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      const resultDiv = document.getElementById('container_1');
      
      console.log(data.posts);
      data.posts.forEach(el => {
       
        
        let tr = document.createElement('tr')
       let td = document.createElement('td');
       td.innerHTML = el.id
       let td2 = document.createElement('td');
       td2.innerHTML = el.title;
     
      let td3 = document.createElement('td');
       td3.innerHTML = el.body;
       resultDiv.append(tr,td,td2,td3)
      });
     
  
      resolve(true);
    }, 1000);
  });
}

function PromiseAPI2() {
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
   
    const resultDiv = document.getElementById('container_2');
    let h = document.getElementById("h2")
   
    console.log(data.products)
    data.products.forEach(el => {
       
        
        let tr = document.createElement('tr')
       
       let td = document.createElement('td');
       td.innerHTML = el.id
       let td2 = document.createElement('td');
       td2.innerHTML = el.title;
     
      let td3 = document.createElement('td');
       td3.innerHTML = el.description;
       let td4 = document.createElement('td');
       td4.src = el.thumbnail;
       resultDiv.append(tr,td,td2,td3,td4)
      });
      resolve(true);
    
    }, 2000);
  });
}

function PromiseAPI3() {
  return new Promise(resolve => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
   
    console.log(data)
    const resultDiv = document.getElementById('container_3');
   
    data.todos.forEach(el => {
       
        
        let tr = document.createElement('tr')
       let td = document.createElement('td');
       td.innerHTML = el.id
       let td2 = document.createElement('td');
       td2.innerHTML = el.todo;
     
      let td3 = document.createElement('td');
       td3.innerHTML = el.completed;
       let td4 = document.createElement('td');
       td4.innerHTML = el.userId;
       resultDiv.append(tr,td,td2,td3,td4)
      });
      resolve(true);
    }, 3000);
  });
}