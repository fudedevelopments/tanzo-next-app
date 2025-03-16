const ProductPage = ({ params }: { params: { productId: string } }) => {
    return (
        <div>
            <h1>Product ID: {params.productId}</h1>
        </div>
    );
};

export default ProductPage;
