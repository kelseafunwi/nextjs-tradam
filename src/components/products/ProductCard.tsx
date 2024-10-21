const ProductCard = ({ product } : { product: any}) => {
    return (
        <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-lg">${product.price}</p>
        </div>
    );
};

export default ProductCard;