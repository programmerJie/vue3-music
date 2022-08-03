import {defineStore} from "pinia";

export const storeApi = defineStore("store", {
    state: () => {
        return {
            ifTrue: true,
            ifFalse: false
        };
    },
    actions: {
        btn1() {
            this.ifTrue = false
            this.ifFalse = true
        },
        btn2() {
            this.ifTrue = true
            this.ifFalse = false
        }
    }
});
