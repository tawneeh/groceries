$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();

    let groceryItemNames = ["#itemOne", "#itemTwo", "#itemThree", "#itemFour", "#itemFive"]  

    let groceryList = [];

    groceryItemNames.forEach(function(groceryItemName) {
    let userItems = $("input" + groceryItemName).val();
    groceryList.push(userItems);
    });

    let upper = (groceryList.map(a => a.toUpperCase()));
    upper.sort();
    upper.toString();


    upper.forEach(function(upper) {
      $("#list").append("<li>" + upper + "</li>");

    $("#show-list").show();
    $("#groceries").hide();
    })

  });
});