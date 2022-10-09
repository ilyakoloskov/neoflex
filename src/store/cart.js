import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => {
    return { products: {} };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    add(product) {
      if (this.products[product.id]) {
        this.products[product.id].count++;
      } else {
        this.products[product.id] = { count: 1, product };
      }
      this.save()
    },
    remove(product) {
      if (this.products[product.id]) {
        this.products[product.id].count--;
        if (this.products[product.id].count <= 0) {
          delete this.products[product.id];
        }
      }
      this.save()
    },
    count() {
      let count = 0;
      for (const id in this.products) {
        count += this.products[id].count;
      }
      return count;
    },
    total() {
      let total = 0;
      for (const id in this.products) {
        total += this.products[id].product.price * this.products[id].count;
      }
      return total;
    },
    removeProduct(product){
        delete this.products[product.id]
        this.save()
    },
    save(){
        localStorage['cart'] = JSON.stringify(this.products)
    },
    load(){
        this.products = JSON.parse(localStorage['cart'])
    }
  },
});
