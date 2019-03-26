$("button").click(function() {
    var username = $(".name").val();
    var chicken = $(".chicken").val();
    var showers = $(".showers").val();
    var shoes = $(".shoes").val();
    var clothes = $(".clothes").val();
    var food = $(".food").val();
    var hair = $(".hair").val();
    var eat = $(".eat").val();





    $(".answername").text("your name is "+username );
     $(".answerchicken").text("you eat this amount a chicken per week" +chicken);
      $(".answershower").text("you take showers  this amount of times=" +showers);
       $(".answershoes").text("you get new shoes this amount of times=" +shoes);
        $(".answerclothes").text("you get this amount of cloths this per week=" +clothes);
         $(".answereat").text("you cook this much times in a week="+eat);
          $(".answerhair").text("you gwt your hair done this many times=" +hair);
             $(".answerfood").text("you eat this amount a food per week=" +food);
});






