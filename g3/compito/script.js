const CART_KEY = "cart";

const cards = (book) => {
  const card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
  
    <div class="card shadow">
        <div class="row h-100 align-items-middle">
            <div class="col-md-4 ">
                <img src="${book.img}" class="img-thumbnail p-3 shadow">
            </div>
            <div class="col-md-8">
                <div class="card-body d-flex flex-column justify-content-between h-100">
                    <div>
                        <h5 class="card-title">${book.title}</h5>
                        <hr>
                        <p class="card-text mb-4 pt-4"><small class="text-muted">Prezzo:</small><strong> ${book.price}€</strong></p>
                        <p class="card-text mb-4"><small class="text-muted">Categoria:</small><strong> ${book.category}</strong></p>
                        <p class="card-text mb-4"><small class="text-muted">ASIN:</small><strong> ${book.asin}</strong></p>
                    </div>
                    <hr>
                    <div>
                        <button id="delete" class="btn btn-danger">Scarta</button>
                        <button id="buy" class="btn btn-success">Compra ora</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

  card.querySelector("#delete").addEventListener("click", (e) => {
    card.remove();
  });
  card.querySelector("#buy").addEventListener("click", (e) => {
    cartStorage(book, shopCart);
    let p = document.createElement('p')
    p.textContent = 'aggiunto al carrello!';
    p.classList.add('text-white', 'fw-bold', 'pt-4')
    card.appendChild(p);
  });

  return card;
};

const cartItem = (book) => {
  const item = document.createElement("li");
  item.dataset.asin = book.asin;
  item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");

  item.innerHTML = `
        <div class="ms-2 me-auto">
            <div class="fw-bold">${book.title}</div>
            ${book.price}€
        </div>
        <button class="remove-cart-item bg-danger rounded-circle border-0"><i class="bi bi-trash3"></i></button>
`;

  item.querySelector("button").addEventListener("click", (e) => {
    cartStorage(item.dataset.asin, shopCart, true);
  });

  return item;
};

const cartStorage = (item, render = false, remove = false) => {
  let cart = sessionStorage.getItem(CART_KEY);
  cart = cart ? JSON.parse(cart) : [];

  if (!remove) {
    cart.push(item);
  } else if (cart.length) {
    cart = cart.filter((book) => book.asin != item);
  } else {
    console.log("no item to remove");
  }
  sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
  if (render) {
    render(cart);
  }
};

const shopCart = (cart) => {
  const cartCont = document.getElementById("cart");
  cartCont.innerHTML = "";

  if (cart.length) {
    for (const item of cart) {
      cartCont.appendChild(cartItem(item));
    }
  } else {
    let empty = document.createElement("li");
    empty.innerText = "Cart empty";
    cartCont.appendChild(empty);
  }
};

fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => res.json())
  .then((books) => {
    const library = document.getElementById("library");
    library.innerHTML = "";
    for (const book of books) {
      library.appendChild(cards(book));
    }
  })
  .catch((error) => console.log("errore", error));


document.addEventListener("DOMContentLoaded", () => {
  let cart = sessionStorage.getItem(CART_KEY);
  cart = cart ? JSON.parse(cart) : [];
  shopCart(cart);
});
