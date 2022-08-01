import { defineStore } from "pinia";

export const store = defineStore("store", {
  state: () => {
    return {
      name: "杨富杰",
      age: 18,
      sex: "男",
    };
  },
});
