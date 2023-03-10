import inquirer from "inquirer";

const questions = [

  {
  type: "input",
  name: "firstName",
  message: "What's your first name?",
  validate: answer => { 
  if (answer === "") {
    return "Please enter your first name.";
  }
  return true;
  },
  },

  {
  type: "input",
  name: "emailAddress",
  message: 
  function (answer){
  return `Hello, ${answer.firstName} what is your email address?`},
  validate: function (input) {
  if (input.indexOf("@")!=-1 && input.indexOf(".")!=-1){
    return true;
  } else {
    return 'Please enter valid email.'}
  },
  },

  {
  type: "list",
  name: "experienceDeveloper",
  message: "Are you an experience developer?",
  choices: ["Yes", "No"],
  validate: answer => {
  if (answer) {
    return "Please choose one of the answer."
  }
  return true;
  },
  },

  {
  type: "list",
  name: "experienceYears",
  message: "How many years of experience you have with JavaScript?",
  choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
  validate: answer => {
  if (answer) {
    return "Please choose one of the answer."
  }
  return true;
  },
  when: ({ experienceDeveloper }) => experienceDeveloper === "Yes",
  },

  {
  type: "checkbox",
  name: "javascriptLibrary",
  message: "What JavaScript library do you know?",
  choices: ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"],
  validate: answer => {
  if (answer < 1) {
    return "Please choose the answers"
  }
  return true;
  },
  when: ({ experienceDeveloper }) => experienceDeveloper === "Yes",
  },

  {
  type: "number",
  name: "salary",
  message: "What is your desired salary?",
  validate: answer => {
  if (answer) {
    return "Please enter the amount"
  } 
  return true;
  },

  validate: answer => {
  if ((isNaN).answer) {
    return "Please enter the valid amount"
  }
  return true;
  },
  when: ({ experienceDeveloper }) => experienceDeveloper === "Yes",
  }
];

// run your command
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });
