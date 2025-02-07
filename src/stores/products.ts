import { computed, ref } from "vue";

import { defineStore } from "pinia";

export interface IProduct {
  id: number;
  name: string;
  count: number;
  color: "green" | "blue" | "peru";
  status: string;
  cellId?: number;
}

export const useProductStore = defineStore("product", () => {
  const products = ref<IProduct[]>([
    {
      id: 1,
      name: "Product 1",
      count: 4,
      color: "green",
      status: "",
      cellId: 1,
    },
    {
      id: 2,
      name: "Product 2",
      count: 2,
      color: "peru",
      status: "",
      cellId: 2,
    },
    {
      id: 3,
      name: "Product 3",
      count: 5,
      color: "blue",
      status: "",
      cellId: 3,
    },
  ]);

  const saveProductsToLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(products.value));
  };

  const loadProductsFromLocalStorage = () => {
    console.log("Данные из локального хранилища загружены");
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      products.value = JSON.parse(storedProducts);
    } else {
      saveProductsToLocalStorage();
    }
  };

  const updateCellId = (itemId: number, cellId: number) => {
    products.value = products.value.map((p) => {
      if (p.id === itemId) {
        return { ...p, cellId };
      }
      return p;
    });
  };

  const removeProduct = (id: number) => {
    products.value = products.value.filter((p) => p.id !== id);
  };

  return {
    products,
    updateCellId,
    saveProductsToLocalStorage,
    loadProductsFromLocalStorage,
    removeProduct,
  };
});
