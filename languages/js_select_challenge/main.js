document.addEventListener("DOMContentLoaded", () => {
  let selectAll = document.getElementById("select-all");
  let checkBoxes = document.querySelectorAll(".city");
  console.log(checkBoxes)

  selectAll.addEventListener("click", (e) => {
    console.log(selectAll.getAttribute("checked"))
    checkBoxes.forEach(checkBox => {
      checkBox.setAttribute("checked", true);
    });
  });
})