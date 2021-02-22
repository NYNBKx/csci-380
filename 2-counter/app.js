
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const companies = ["Uber", "Lyft", "Google", "Apple", "SpaceX", "Tinder"]
const animals = ["Aardvark", "Blue Footed Booby", "Flying Dragon", "Giraffe Weevil", "Hammerhead Slug", "Komodo Dragon", "Naked Mole Rat", "Okapi", "Red Panda"]
const vowels = ["A", "E", "I", "O", "U"]

function addInfor(){
  value.innerHTML = "";//rest the content,each time before the new content add
  for (let i = 0; i < 5; i++) {
    const companyName = companies[Math.floor(Math.random() * companies.length)]

    const firstLetter = companyName.charAt(0)
    const companyString = "My company is a" + ((vowels.indexOf(firstLetter) > -1) ? "n " : " ") + companyName + " for " + animals[Math.floor(Math.random() * animals.length)] + "s!<br />"
    //add infor string to value <span>
    value.innerHTML += companyString
  }
}


// for (let i = 0; i < btns.length; i++) {
//   // btn.addEventListener()
// }


btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count *= 2;
      // count = count * 2
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "purple";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
