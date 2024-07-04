const apiEndPoint =
  "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

const display = document.querySelector(".pro-container");

// Category for men

function menFunc() {
  // button customize
  document.getElementById("menButton").classList.add("clicked");
  document.getElementById("womenButton").classList.remove("clicked");
  document.getElementById("kidsButton").classList.remove("clicked");

  const getData = async () => {
    const res = await fetch(apiEndPoint);
    const data = await res.json();
    console.log(data.categories[0].category_products);
    return data;
  };

  const displayUsers = async () => {
    const payload = await getData();

    let dataDisplay = payload.categories[0].category_products.map((object) => {
      let shortTitle = limitCharacters(object.title, 10);

      // Badge condition check
      let badge = "";
      if (object.badge_text != null) {
        badge = object.badge_text;
      } else {
        badge = "Offer";
      }

      return `
          <div class="pro">
         <span class="badge">${badge}</span>
          <img src=${object.image} alt="">
          <div class="des">
            <h5 style="display:inline-block;">${shortTitle}..</h5>
            <span style="font-size: 50px;padding-left:6px;">.</span>
           <span style="font-size: 15px;">${object.vendor}</span>
           <div className="rate">
         <h4>Rs ${object.price}.00</h4>
          <span style="color:grey;text-decoration: line-through; padding-left:7px;"> Rs ${object.compare_at_price}.00</span>
          <span id="offer" style="padding-left: 10px; color: #FF3737;">50% off</span>
          </div>
          </div>
      <button id="addtocart">Add to cart</button>
        </div>
      `;
    });
    display.innerHTML = dataDisplay;
  };

  displayUsers();
}
// category for women
function womenFunc() {
  // button customize
  document.getElementById("womenButton").classList.add("clicked");
  document.getElementById("menButton").classList.remove("clicked");
  document.getElementById("kidsButton").classList.remove("clicked");

  const getData = async () => {
    const res = await fetch(apiEndPoint);
    const data = await res.json();
    console.log(data.categories[0].category_products);
    return data;
  };

  const displayUsers = async () => {
    const payload = await getData();

    let dataDisplay = payload.categories[1].category_products.map((object) => {
      let shortTitle = limitCharacters(object.title, 10);

      // badge condition check
      let badge = "";
      if (object.badge_text != null) {
        badge = object.badge_text;
      } else {
        badge = "Offer";
      }

      return `
          <div class="pro">
  <span class="badge badge1" style="display:inline-block; margin: 10px; background:black; font-style: bold; position:absolute; padding:3px 6px; color: black; background-color: #FFFFFF;">${badge}</span>
          <img src=${object.image} alt="">
          <div class="des">
            <h5 style="display:inline-block;">${shortTitle}..</h5>
            <span style="font-size: 50px;padding-left:6px;">.</span>
           <span style="font-size: 15px;">${object.vendor}</span>
           <div className="rate">
         <h4>Rs ${object.price}.00</h4>
          <span style="color:grey;text-decoration: line-through; padding-left:7px;"> Rs ${object.compare_at_price}.00</span>
          <span id="offer" style="padding-left: 10px; color: #FF3737;">50% off</span>
          </div>
          </div>
          <button id="addtocart">Add to cart</button>
        </div>
      `;
    });
    display.innerHTML = dataDisplay;
  };

  displayUsers();
}
// category for kids
function kidsFunc() {
  // button customize
  document.getElementById("kidsButton").classList.add("clicked");
  document.getElementById("menButton").classList.remove("clicked");
  document.getElementById("womenButton").classList.remove("clicked");

  const getData = async () => {
    const res = await fetch(apiEndPoint);
    const data = await res.json();
    console.log(data.categories[0].category_products);
    return data;
  };

  const displayUsers = async () => {
    const payload = await getData();

    let dataDisplay = payload.categories[2].category_products.map((object) => {
      let shortTitle = limitCharacters(object.title, 10);

      // badge condition
      let badge = "";
      if (object.badge_text != null) {
        badge = object.badge_text;
      } else {
        badge = "Offer";
      }

      return `
          <div class="pro">
          <span class="badge badge1" style="display:inline-block; margin: 10px; background:black; font-style: bold; position:absolute; padding:3px 6px; color: black; background-color: #FFFFFF;">${badge}</span>
          <img src=${object.image} alt="">
          <div class="des">
            <h5 style="display:inline-block;">${shortTitle}..</h5>
            <span style="font-size: 50px;padding-left:6px;">.</span>
           <span style="font-size: 15px;">${object.vendor}</span>
           <div className="rate">
         <h4>Rs ${object.price}.00</h4>
          <span style="color:grey;text-decoration: line-through; padding-left:7px;"> Rs ${object.compare_at_price}.00</span>
          <span id="offer" style="padding-left: 10px; color: #FF3737;">50% off</span>
          </div>
          </div>
     <button id="addtocart">Add to cart</button>
        </div>
      `;
    });
    display.innerHTML = dataDisplay;
  };

  displayUsers();
}

//title-shorter function
function limitCharacters(text, limit) {
  return text.substring(0, limit);
}
