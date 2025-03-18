import "./ProductCard.css";

const ProductCard = (props) => {
  // Discount price calculation function
  const calculateDiscountPrice = (price, discount) => {
    if (!discount) return null;
    return price - (price * discount / 100);
  };
   
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={props.image} alt={props.name} className="product-image" />
        {props.discount && (
          <div className="discount-badge">{props.discount}% OFF</div>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{props.name}</h3>
        
        <div className="product-price">
          {props.discount ? (
            <>
              <span className="original-price">${props.price}</span>
              <span className="discount-price">${calculateDiscountPrice(props.price, props.discount)}</span>
            </>
          ) : (
            <span className="regular-price">${props.price}</span>
          )}
        </div>
        
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={index < (props.rating || 0) ? "star filled" : "star"}>★</span>
          ))}
          {props.reviews && <span className="review-count">({props.reviews})</span>}
        </div>
        
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
