// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "JD",
    "full name": "Jay Dev Das",
    [mySym]: "mykey1",
    age: 18,
    location: "Bhubaneswar",
    email: "jd@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Friday", "Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "jd@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "jd@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());