import { computed, ref } from "vue";

import { defineStore } from "pinia";
import { isNumber } from "@/utils/validators";

export interface IProduct {
  id: number;
  name: string;
  count: number;
  color: "green" | "blue" | "peru";
  cellId?: number;
}

export const useProductStore = defineStore("product", () => {
  const mode = ref<boolean>(false);
  const zoom = ref<number>(1);
  const products = ref<IProduct[]>([
    {
      id: 1,
      name: "Product 1",
      count: 4,
      color: "green",
      cellId: 1,
    },
    {
      id: 2,
      name: "Product 2",
      count: 2,
      color: "peru",
      cellId: 2,
    },
    {
      id: 3,
      name: "Product 3",
      count: 5,
      color: "blue",
      cellId: 3,
    },
  ]);

  const modeTitle = computed(() => {
    if (mode.value) {
      return "Включить темный режим";
    }
    return "Включить светлый режим";
  });

  const changeZoom = (value: number) => {
    zoom.value = value;
    const container = document.querySelector(".container");
    if (container) {
      (container as HTMLElement).style.transform = `scale(${zoom.value})`;
    }
  };

  const changeMode = () => {
    mode.value = !mode.value;
    if (mode.value) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    saveModeToLocalStorage();
  };
  function saveModeToLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(mode.value));
  }

  function loadModeFromLocalStorage() {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      mode.value = JSON.parse(storedMode);
    } else {
      saveModeToLocalStorage();
    }
  }
  const saveProductsToLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(products.value));
  };

  const loadProductsFromLocalStorage = () => {
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
    saveProductsToLocalStorage();
  };

  const editCount = (id: number, count: number) => {
    if (isNumber(count)) {
      products.value = products.value.map((p) => {
        if (p.id === id) {
          return { ...p, count: count };
        }
        return p;
      });
      saveProductsToLocalStorage();
    }
  };

  return {
    products,
    mode,
    modeTitle,
    zoom,
    changeZoom,
    changeMode,
    updateCellId,
    saveProductsToLocalStorage,
    loadProductsFromLocalStorage,
    removeProduct,
    editCount,
    saveModeToLocalStorage,
    loadModeFromLocalStorage,
  };
});
