const socketClient = io()

const cards = document.getElementById("cards");

socketClient.on('products', (prods)=>{
    cards.innerHTML = ""
    console.log(prods)
    prods.forEach(prod => {
        cards.innerHTML += `
        <div class="card" style="width: 20%; margin-left: 20px; margin-bottom: 20px; border-style: dotted;border-color: black; padding: 20px;">
    <img src=${prod.thumbnail} style="width: 40%;" class="card-img-top" alt="imagen">
    <div class="card-body">
        <h5 class="card-title">${prod.title}</h5>
        <p class="card-text">${prod.description}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Price: ${prod.price}</li>
        <li class="list-group-item">Stock: ${prod.stock}</li>
        <li class="list-group-item">Category: ${prod.category}</li>
    </ul>
</div>
        `
    });
})
