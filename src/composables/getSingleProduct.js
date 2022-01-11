import {
    doc,
    getDoc
} from 'firebase/firestore';
import {
    ref
} from 'vue';
import {
    db
} from '../firebase/config';

function getSingleProduct(id) {
    let product = ref(null);

    let getItem = async () => {
        let res = await getDoc(doc(db, 'products', id));
        product.value = {
            id: res.id,
            ...res.data()
        }

    }
    return {
        product,
        getItem
    }
}
export {
    getSingleProduct
}