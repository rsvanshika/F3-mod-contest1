
// get element by their ID
const tableContainer = document.getElementById('table-container');

const header =document.getElementById('header');

// Function to fetch data from API endpoint 1
function promiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            const posts = data.posts; // get the posts array
            createPostsCard(posts);
          resolve(true); // Resolve the promise
        })
        .catch(error => reject(error));
    }, 1000); // Simulate a delay of 1 second
  });
}

// API1 table
function createPostsCard(posts) {
    
  const postHeading = document.createElement('h1');
postHeading.innerText = "POSTS API";
tableContainer.appendChild(postHeading);

// Create container div
const container = document.createElement('div');
container.classList.add('card-container');

 // Loop through the array of posts and create a card for each one
 posts.forEach(post => {
  // Create card div
  const card = document.createElement('div');
  card.classList.add('card');

  // Create card header
  const header = document.createElement('div');
  header.classList.add('card-header');
  header.innerText = `Title:: ${post.title}`;

  // Create card body
  const body = document.createElement('div');
  body.classList.add('card-body');
  body.innerText = `Content:: ${post.body}`;
  
  const userId = document.createElement('div');
  userId.classList.add('userId');
  userId.innerText = `User_ID:: ${post.userId}`;
 
  const tags = document.createElement('div');
  tags.classList.add('tags');
  tags.innerText = `Tags:: ${post.tags}`;
 
  const reactions  = document.createElement('div');
  reactions.classList.add('reactions');
  reactions.innerText = `Reaction:: ${post.reactions}`;

  

  

  // Append header and body to card
  card.appendChild(header);
  card.appendChild(body);
  card.appendChild(userId);
  card.appendChild(tags);
  card.appendChild(reactions);

  // Append card to container
  container.appendChild(card);
});

// Add container to container element
tableContainer.appendChild(container);
}





// Function to fetch data from API endpoint 2
function promiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
          // Display data on the UI
          const products = data.products; // get the posts array
          createProductsCards(products);
          resolve(true);
        })
        .catch(error => reject(error));
    }, 2000); // Simulate a delay of 2 seconds
  });
}

function createProductsCards(products) {
  const productHeading = document.createElement('h1');
  productHeading.innerText = "PRODUCTS API";
  tableContainer.appendChild(productHeading);

  // Create container div
  const container = document.createElement('div');
  container.classList.add('card-container');

  // Loop through the array of products and create a card for each one
  products.forEach(product => {
  
    // Create card div
    const card = document.createElement('div');
    card.classList.add('card');

    // Create card header
    const header = document.createElement('div');
    header.classList.add('card-header');
    header.innerText = `Product Name:: ${product.title}`;

     // Create card body
     const body = document.createElement('div');
     body.classList.add('card-body');

    // Create image element
    const image = document.createElement('img');
    image.src = product.thumbnail;

    // Create description element
    const description = document.createElement('p');
    description.innerText = `Description:: ${product.description}`;

    // Create price element
    const price = document.createElement('p');
    price.innerText = `Price:: ${product.price}`;

    // Append image, description, and price to body
    body.appendChild(image);
    body.appendChild(description);
    body.appendChild(price);

    // Append header and body to card
    card.appendChild(header);
    card.appendChild(body);

    // Append card to container
    container.appendChild(card);
  });

  // Add container to container element
  tableContainer.appendChild(container);
}



// Function to fetch data from API endpoint 3
function promiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/todos')
        .then(response => response.json())
        .then(data => {
          const todos = data.todos; // get the todos array
          createTodosCards(todos);
          resolve(true);
        })
        .catch(error => reject(error));
    }, 3000); // Simulate a delay of 3 seconds
  });
}


// Function to create cards for each todo in the todos array
function createTodosCards(todos) {
    
  const postHeading = document.createElement('h1');
  postHeading.innerText = "TODOS API";
  
  const container = document.createElement('div');
  container.classList.add('card-container');
  
  postHeading.appendChild(container);
  tableContainer.appendChild(postHeading);

  // Loop through the array of todos and create a card for each one
  todos.forEach(todo => {

    // Create card div
    const card = document.createElement('div');
    card.classList.add('card');

    // Create card header
    const todoHeader = document.createElement('div');
    todoHeader.classList.add('card-header');
    todoHeader.innerText = `ToDo: ${todo.todo}`;

    // Create card body
    const complete = document.createElement('div');
    complete.classList.add('card-body');
    complete.innerText = `Completed: ${todo.completed}`;

    const userId = document.createElement('div');
    userId.classList.add('userId');
    userId.innerText = `User Id: ${todo.userId}`;

    card.appendChild(todoHeader);
    card.appendChild(complete);
    card.appendChild(userId);

    // Append card to container
    container.appendChild(card);
  });

  // Add container to tableContainer element
  tableContainer.appendChild(container);
}


// Get the button element from the DOM

const button = document.getElementById('fetch-data-button');

// Add click event listener to the button
button.addEventListener('click', () => {
  // Call the promise chain
  promiseAPI1()
    .then(result => {
      if (result) {
        return promiseAPI2(); // Call the next promise function
      }
    })
    .then(result => {
      if (result) {
        return promiseAPI3(); // Call the next promise function
      }
    })
    .then(result => {
      if (result) {
        console.log('All promises resolved successfully!');
      }
    })
    .catch(error => console.error(error));
});


  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }