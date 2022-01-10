import { numberWithCommas } from './number.js';

var selected = 0;

$('#confirm').click(() => {
    var payments = document.getElementsByName('pay');

    console.log(payments);
    for (let index = 0; index < payments.length; index++) {
        if (payments[index].checked) {
            selected = Number(payments[index].value);
        }
    }
    switch (selected) {
        case 1:

            break;
        case 2:
            window.location.href = 'TrangThanhToanATM1.html';
            break;
        case 3:
            window.location.href = 'TrangThanhToanCreditCard.html';
            break;

        default:
            break;
    }
})


window.addEventListener('DOMContentLoaded', () => {

    const carts = JSON.parse(window.localStorage.getItem('cart'));

    const SP = Object.values(carts).map((item) => {
        return ` <div class="flex items-center w-full p-2">
                    <div class="rounded-lg bg-white border p-2" style="border-color: black;">
                        <img src="Images/allProducts/01.png" alt="" style="width: 120px;">
                    </div>
                    <div class="pl-4">
                        <p class="text-lg">${item.name}</p>
                        <p class="text-lg">${numberWithCommas(item.price)} đ</p>
                        <p class="text-lg">x${item.number}</p>
                    </div>
                </div>`;
    }).join(" ");

    const total = Object.values(carts).reduce((pre, cur) => {
        return Number(pre) + Number(cur.price * cur.number)
    }, 0)

    $("#cart").html(SP);
    $("#money").html(`${numberWithCommas(total)}đ`);
    $("#total").html(`${numberWithCommas(total + 20000)}đ`);

})