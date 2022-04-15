

const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    
    cashRegister: 200
   }

  // 1
  const getCandy = (candyStore, id) => {
    let value = "value not found";
    candyStore.candies.forEach((index) => {
      if (index.id === id) {
        value  = index.name;
      }
    });
    return value ;
  };
  
  console.log(getCandy(candyStore, "as12f"));
  
  // 2
  const getPrice = (candyStore, price) => {
    let value = "value not found";
    candyStore.candies.forEach((index) => {
      if (index.price === price) {
        value  = index.price;
      }
    });
    return value ;
  };
  
  
  console.log(getPrice(candyStore, "as12f"));
  
  // 3
  const addCandy = (candyStore, id, name, price) => {
    candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
  };
  
  addCandy(candyStore, "123fg", "chips", 2);
  console.log(candyStore.candies);
  
  //4
  const buy = (candyStore, id) => {
    let value = "value not found";;
    candyStore.candies.forEach((index) => {
      if (index.id === id) {
        if (candy.amount > 0) {
          candy.amount -= 1;
          candyStore.cashRegister += candy.price;
          value = " candies Bought!";
        } else {
           value  = "No pieces to sell anymore! amount is: 0";
        }
      }
    });
    console.log(value);
  };
  
  buy(candyStore, "notfoundtest");
  buy(candyStore, "as12f");
  buy(candyStore, "123fg");
