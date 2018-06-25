
$.getJSON("https://www.googleapis.com/books/v1/volumes?q=search+terms", function (data) {
    var affiche = data.items[1].volumeInfo.imageLinks.thumbnail;
    var titre = data.items[1].volumeInfo.title;
    var desc = data.items[1].volumeInfo.description;
    $("#affiche0").html("<img src='" + affiche + "'>");
    $("#titre0").html(titre);
    $("#desc0").html(desc);
    console.log(desc);
});

$.getJSON("https://www.googleapis.com/books/v1/volumes?q=search+terms", function (data) {
    var affiche = data.items[2].volumeInfo.imageLinks.thumbnail;
    var titre = data.items[2].volumeInfo.title;
    var desc = data.items[2].volumeInfo.description;
    $("#affiche1").html("<img src='" + affiche + "'>");
    $("#titre1").html(titre);
    $("#desc1").html(desc);
    console.log(desc);
});
