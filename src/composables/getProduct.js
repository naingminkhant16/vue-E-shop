import {
    collection,
    getDoc,
    getDocs,
    orderBy,
    query
} from "firebase/firestore";
import {
    ref
} from "vue";
import {
    db
} from "../firebase/config"

function getProduct() {
    let products = ref([]);
    let getDB = async () => {
        let res = await getDocs(query(collection(db, 'products'), orderBy('img', "asc")));
        products.value = res.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            };
        })
    }
    return {
        products,
        getDB
    }
}
export {
    getProduct
}