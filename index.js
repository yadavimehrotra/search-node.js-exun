// // Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.

const readline = require("readline");
const fs = require("fs");

const takinginput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const example = (input) => {
  fs.writeFile("string.txt", `${input}`, (err) => {
    if (err) {
      console.log("error try again");
    }
  });
};

takinginput.question(
  "ENTER A STRING TO CHECK IF IT IS IN OUR DOCUMENT: ",
  (input) => {
    takinginput.close();
    example(input);
    const text = fs.readFileSync("eample.txt");
    // const text1 = Buffer.form(example.txt);
    console.log(text.includes(`${input}`));
  }
);
