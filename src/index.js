import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let input1 = "ui_dev_guide";
let input2 = "contact_details";

const replace = (str) => {
  let splitInput = str.split("_");
  for (let index = 0; index < splitInput.length; index++) {
    splitInput[index] =
      splitInput[index].charAt(0).toUpperCase() + splitInput[index].slice(1);
  }
  console.log(splitInput.join(" "));
};

replace(input1);
replace(input2);
