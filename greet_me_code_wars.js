/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

const greet = (name) => {
  name = name.toLowerCase();
  const innerFunc = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let final = innerFunc(name);

  return 'Hello ' + final + '!';

};