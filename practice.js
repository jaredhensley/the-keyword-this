//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?
/*the this keyword is used as a reference to the object that contains the invoked function.  this creates a reference a that stores that value of the object and also allows you to point to that object without calling it by name, directly. */
//Answer

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

/*will refer to the global object if not defined within a function that uses strict or is within an object, that is within the window object.  the this reference can be altered with methods such as .call, .apply and .bind. */

//Answer

// 3) What is the difference between call and apply?

/*applys parameter argument is a single array like object, while call uses individual arguments.*/

//Answer

// 4) What does .bind do?

/*.bind creates a new copy and lets you curry the function with preset parameters.  */

//Answer


//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

//Code Here

var user = {
  username: 'jared',
  email: 'test@123.com',
  getUsername: function () {
    return this.username;
  }
};

console.log(user.getUsername());

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

//Function Invocations Here

function Car(company, model, year) {
  this.company = company;
  this.model = model;
  this.year = year;
  this.move = 0;
}


Car.prototype.moveCar = function () {
  this.move = this.move + 10;
};


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function () {
  return this.year;
};

console.log(getYear.call(prius));
console.log(getYear.call(mustang));

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Code Here



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function () {
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

//Answer Here this will point to the window object and will be undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs? window object

//Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com',
  /* setTimeOut: function() {setTimeout.call(this, getUsername, 5000);}*/
  getUsername: function (last) {

    console.log(this.username);
  }
};


setTimeout(user.getUsername.bind(user), 5000, 'turner');
/*setTimeout.call(user, getUsername, 5000;)*/


//example of currying with bind 


function myMathfunc(x, y) {
  return x * y;
}

var double = myMathfunc.bind(myMathfunc, 2);
double(5); // 10