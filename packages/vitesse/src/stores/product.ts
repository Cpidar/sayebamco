import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3500/'
})

// export const useProductStore = defineStore('product', {
//     state: () => ({
//         products: [{}] as any,
//     }),
//     actions: {
//         async fetch3LatesProducts() {
//             const res = await api.get('products?_sort=id:DESC&_limit=3')
//             this.products =await res.data
//         }
//     },
//     getters: {
//         getProducts: store => store.products
//     }
// } )

// if (import.meta.hot)
//   import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))

