let cart = [];

const modalBody = document.getElementById("addqty");

function klik(produk) {
    let produkSudahAda = cart.find(data => data.nama == produk.nama);

    if (produkSudahAda) {
        produkSudahAda.qty += 1;
    }

    else {
        produk["qty"] = 1;
        cart.push(produk);
    }


    updateCart();
}

function updateCart() {
    console.log(cart);

    modalBody.innerHTML = "";

    cart.forEach(produk => {
        let div = document.createElement("div");
        div.innerHTML = `
            <h1>${produk.nama}</h1>
            <p>${produk.harga.toLocaleString()} x ${produk.qty}</p>
            <p>Total : ${(produk.harga * produk.qty).toLocaleString()}  </p>
        `;
        modalBody.append(div);
    });

    let div2 = document.createElement ("div2");
     div2.innerHTML = `
    <p> Total belanjaan : ${cart.reduce((sum, item) => sum + (item.harga * item.qty), 0).toLocaleString()} </p>`

    modalBody.append(div2);

}

function buttonwa(wa) {
    let pesan = "Saya Pesan \n";

    cart.forEach((produk, index) => {
        pesan += `${index}. ${produk.nama} x ${produk.qty} \n`;
    });

    window.open (`https://wa.me/089695203795?text=${pesan}`);
}
