$(() => {
    let div = $("#proddiv");
    div.empty();
    var response = [{ title: "Sports zzShoes", rating: 1, price: 6.6 }, { title: "Sports Shoes", rating: 3, price: 5.6 }, { title: "Sports Shfdfdoes", rating: 5, price: 7.6 }]
        //ajax response
    response.forEach((data) => {
        console.log(data);
        let ratingDiv = "";
        div.append(` <div class="product text-center col-lg-3 col-md-4 col-12" onclick="window.location.href='product.html';">
        <img class="img-fluid mb-3" src="./img/shop/1.jpg" alt="">
        <div class="star">

            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <h5 class="p-name">${data.title}</h5>
        <h4 class="p-price">$${data.price}</h4>
        <button class="buy-btn">Buy Now</button>
    </div>`)
    })
})