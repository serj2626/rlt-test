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

  return { products };
});
