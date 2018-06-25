function book() {
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=search+terms", function (data) {
        var affiche = data.items[1].volumeInfo.imageLinks.thumbnail;
        $("#afficher").html("<img src='" + affiche + "'>");
        console.log(affiche);
    });
};
