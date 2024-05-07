// Button click listener
document.getElementById("btn1").addEventListener("click", finalGrade);

function finalGrade() {
  //Input

  //Proccess

  // Output

  if (avg >= 90) {
    alert("your average is really good");
  } else if (avg >= 80) {
    alert("your average is good");
  } else if (avg >= 70) {
    alert("Better luck next time");
  } else if (avg >= 60) {
    alert("Study better ");
  } else if (avg >= 50) {
    alert("gotta do your work");
  }
}
