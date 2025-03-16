export default function ProductDetailPage({ params }: { params: { productId: string } }) {
    return (
        <div>
            <h1>Product Detail - Tanzo Gifts</h1>
            <p>This is the Product Detail page for product ID: {params.productId}</p>
        </div>
    );
} 