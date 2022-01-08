// fetch('./header/header.html').then((response) => response.json()).then((data) => console.log(data, 1))

// fetch("./header/header.html")
//     .then(res => res.json())
//     .then(data => console.log(data));

$.ajax({
    url: "./header/header.html",
    data: {
        zipcode: 97201
    },
    success: function (result) {
        $("#header").html(result);
    }
});

$.ajax({
    url: "./footer/footer.html",
    data: {
        zipcode: 97201
    },
    success: function (result) {
        $("#foot").html(result);
    }
});