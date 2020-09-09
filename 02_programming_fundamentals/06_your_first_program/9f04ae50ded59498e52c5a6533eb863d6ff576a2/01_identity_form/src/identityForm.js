const identityForm = (reader) => {
  reader.question("What's your first Name ? \n> ", (firstName) => {
    reader.question("What's your last Name ? \n> ", (lastName) => {
      reader.question("What your age ? \n> ", (age) => {
        reader.close();
        console.log ( "Your name is "+firstName +" "+ lastName +" and you are "+ age+" .");
      });
    });
  });
};
// Code here
// Leave line below for tests to work
module.exports = identityForm;