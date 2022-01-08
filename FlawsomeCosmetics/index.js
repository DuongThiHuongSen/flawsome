import { data, newProduct, allProduct } from './data.js';

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

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

window.addEventListener('DOMContentLoaded', () => {
    const sanPhamNoiBat = data.map((item, index) => {
        let star = '';
        for (let index = 0; index < 5; index++) {
            if (index <= item.vote) {
                star += `<i class="fa fa-star"></i> `;
            } else {
                star += `<i class="fa fa-star-o" aria-hidden="true"></i> `;
            }
        }
        return `<div class="col-3">
                        <img src='${item.image}' />
                        <h4>
                            ${item.name}
                        </h4>
                        <div class="rating">
                            ${star}
                        </div>
                        <p>${item.price}đ</p>
                </div>`;
    }).join(" ");

    const sanPhamMoi = newProduct.map((item, index) => {
        let star = '';
        for (let index = 0; index < 5; index++) {
            if (index <= item.vote) {
                star += `<i class="fa fa-star"></i> `;
            } else {
                star += `<i class="fa fa-star-o" aria-hidden="true"></i> `;
            }
        }
        return `<div class="col-3">
                        <img src='${item.image}' />
                        <h4>
                            ${item.name}
                        </h4>
                        <div class="rating">
                            ${star}
                        </div>
                        <p>${item.price}đ</p>
                </div>`;
    }).join(" ");

    const tatCaSanPham = allProduct.map((item, index) => {
        let star = '';
        for (let index = 0; index < 5; index++) {
            if (index <= item.vote) {
                star += `<i class="fa fa-star"></i> `;
            } else {
                star += `<i class="fa fa-star-o" aria-hidden="true"></i> `;
            }
        }
        return `<div class="product-item transform-col">
                        <img class="" src='${item.image}' />
                        <div class="self-end ">
                            <div class="px-4 py-2">
                                <p class="pt-2 pb-1 text-black font-bold text-lg">${item.name}</p>
                                <div class="rating">
                                ${star}
                            </div>
                            <p>${item.price}đ</p>
                            </div>
                        </div>
                </div>`;
    }).join(" ");

    $("#product1").html(sanPhamNoiBat)
    $("#product2").html(sanPhamMoi)
    $("#allProduct").html(tatCaSanPham)

})