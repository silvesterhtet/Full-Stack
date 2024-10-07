/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      // Close the sidebar
      sidebar.classList.remove("opened");

      // Changes button's text to > when open
      sidebarButton.textContext = ">";
    } else {
      // Open the sidebar
      sidebar.classList.add("opened");

      // Changes button's text to < when closed
      sidebarButton.textContext = "<";
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  addTodoButton.addEventListener("click", () => {
    const taskInput = taskName.value.trim(); 

    // Check if input is empty
    if (taskInput !== "") {
      // Create a new element in todo list
      const newTodo = document.createElement("li");
      newTodo.textContent = taskInput; 
      todoListUl.append(newTodo);

      // Clear the input
      taskName.value = "";
    }
  });
};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");

  const updateMessage = () => {
      const firstName = firstNameInput.value.trim(); 
      const lastName = lastNameInput.value.trim(); 
      // Check if input is empty
      if (firstName !== "" && lastName !== "") {
        // Create a new element in todo list
        message.textContent = 'Hello ' + firstName + ' ' + lastName + '!'; 
      } else if (firstName !== "" && lastName === "") {
        message.textContent = 'Hello ' + firstName + ' !'; 
      } else if (firstName === "" && lastName !== "") {
        message.textContent = 'Hello ' + firstName + ' !'; 
      } else {
        message.textContent = 'Type your name to see a message!'
      }
  }
  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);
};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
