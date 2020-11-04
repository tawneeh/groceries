function makeList() {
  let groceryItemNames = ["#itemOne", "#itemTwo", "#itemThree", "#itemFour", "#itemFive"]  
  let groceryList = [];
  for (let i= 0; i < groceryItemNames.length; i++) {
    groceryList.push(getItemValue(groceryItemNames[i]));
  }
  return groceryList.sort();
}


function getItemValue(itemName) {
  let itemValue = $(itemName).val();
  itemValue = itemValue.toUpperCase();
  return itemValue;
}

$(document).ready(function() {
  $("#groceries").submit(function(event) {
  event.preventDefault();
  $("#show-list").show();
  $("#groceries").hide();
  $("#list").append(`<li>${makeList()}</li>`);


  });
});



//groceryList.forEach(makeList()) {}
// when the user submits the form, hide the form and display the list items
// make a new array w/ the list alphabetical w/ .sort(), uppercased inside a <ul>