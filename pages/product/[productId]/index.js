import { useRouter } from 'next/router'
function ProductDetail() {
    const router = useRouter()

    //The productId same naming convention as the file name
    const ProductId = router.query.productId
    return <h1>Details about product {ProductId }</h1>
}

export default ProductDetail