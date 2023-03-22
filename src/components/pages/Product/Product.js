import React, {
  useState,
  useEffect,
  useRef,
  Suspense,
  createContext,
  compose,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
import "./Product.scss";
import {
  addToCart,
  getTotals,
  loadOrdersStart,
} from "../../../redux/actions/actions";
import { ToastContainer, toast } from "react-toastify";
// import EnhancedComponent from "../WishList1/Name";
// import withWishlist from "../WishList1/withWishlist";
// import withCounter from "../WishList1/Name";

function Product(props) {
  const { products, loading, cart } = useSelector((state) => state.productdata);

  // const { product, addToWishlist, removeFromWishlist, wishlist } = props;
  // const { name } = props;
  // console.log("name:", name);
  // const { product, addToWishlist, removeFromWishlist, wishlist } = props;
  // const handleAddToWishlist = () => {
  //   addToWishlist(product);
  // };

  // const handleRemoveFromWishlist = () => {
  //   removeFromWishlist(product.id);
  // };

  // const isInWishlist = wishlist.find((item) => item.id === product.id);

  // function Button(props) {
  //   return (
  //     // <button onClick={props.incrementCount}>Clicked {props.count} times</button>
  //     <button
  //       onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
  //     >
  //       {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
  //     </button>
  //   );
  // }

  // const ButtonWithCounter = withCounter(Button);

  const id = useParams();
  const [sliderIndex, setSliderIndex] = useState(1);

  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleAddToWishlist = (product) => {
  //   addToWishlist(product);
  // };

  // const handleRemoveFromWishlist = (product) => {
  //   removeFromWishlist(product.id);
  // };
  // console.log('wishlist:',wishlist);
  // const isInWishlist = wishlist.some((item) => item.id === product.id);

  useEffect(() => {
    dispatch(loadOrdersStart());
  }, []);

  const addProduct = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
    toast.success("item added to cart", { autoClose: 500 });
    sessionStorage.setItem("cartItems", JSON.stringify(cart));
  };

  var displayProduct = products.filter((item) =>
    item.id == id.id ? true : false
  );
  displayProduct = displayProduct[0];

  const plusSlides = (n) => {
    setSliderIndex((prev) => prev + n);
    slideShow(sliderIndex + n);
  };

  const slideRef = useRef();
  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childrenElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);
  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft =
      sliderIndex > numOfThumb ? (sliderIndex - 1) * width : 0;
  }, [width, sliderIndex]);
  const dragStart = (e) => {
    setStart(e.clientX);
  };

  const dragEnd = (e) => {
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  };
  const dragOver = (e) => {
    let touch = e.clientX;
    setChange(start - touch);
  };

  const slideShow = (n) => {
    if (n > displayProduct.slider.length) {
      setSliderIndex(1);
    }

    if (n < 1) {
      setSliderIndex(displayProduct.slider.length);
    }
  };
  //   console.log("In product:", id);

  //   const Loading = () => {
  //     return (
  //       <>
  //         <div className="col-md-6">
  //           <Skeleton height={400} />
  //         </div>
  //         <div className="col-md-6">
  //           <Skeleton height={50} width={300} />
  //         </div>
  //       </>
  //     );
  //   };

  const ShowProduct = () => {
    return (
      <>
        {/* <div className="col-md-6">
          <img src={displayProduct.thumbnail} height="400px" width="350px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {displayProduct.category}
          </h4>
          <h1 className="display-5">{displayProduct.title}</h1>
          <p className="rating fw-bolder">
            Rating {displayProduct.rating}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {displayProduct.price}</h3>
          <p className="description">{displayProduct.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => {
              addProduct(displayProduct);
            }}
          >
            Add to Cart
          </button>
          <NavLink
            to="/cart"
            className="btn btn-dark ms-2 px-4 py-2"
            style={{ textDecoration: "none" }}
          >
            Go to Cart
          </NavLink>
        </div> */}
        <div className="product-details">
          <div className="product-page-img">
            <div className="big-images">
              {displayProduct.slider.map((image, index) => (
                <div
                  key={index}
                  className="mySlides"
                  style={{
                    display: index + 1 === sliderIndex ? "block" : "none",
                  }}
                >
                  <img src={image} />
                </div>
              ))}
              <a href="#" className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </a>
              <a href="#" className="next" onClick={() => plusSlides(1)}>
                &#10095;
              </a>
            </div>

            <div
              className="slider-img"
              draggable={true}
              ref={slideRef}
              onDragStart={dragStart}
              onDragOver={dragOver}
              onDragEnd={dragEnd}
            >
              {displayProduct.slider.map((image, index) => (
                <div
                  key={index}
                  className={`slider-box ${
                    index + 1 === sliderIndex && "active"
                  }`}
                  onClick={() => setSliderIndex(index + 1)}
                >
                  <img src={image} />
                </div>
              ))}
            </div>
          </div>
          <div className="product-page-details ">
            <strong>{displayProduct.title}</strong>
            <p className="product-category">
              {displayProduct.brand}-{displayProduct.category}
            </p>
            <p className="product-price">
              $
              {Math.round(
                displayProduct.price -
                  (displayProduct.price * displayProduct.discountPercentage) /
                    100
              )}{" "}
              <del>{displayProduct.price}</del>
            </p>
            <p className="small-desc">{displayProduct.description}</p>
            <div className="product-page-offer">
              <i className="fa fas-solid fa-tag" />
              {displayProduct.discountPercentage}% Discount
            </div>
            <div className="cart-buttons">
              <button
                className="btn btn-outline-dark px-4 py-2 add-cart"
                onClick={() => {
                  addProduct(displayProduct);
                }}
              >
                Add to Cart
              </button>
              {/* <button
                onClick={
                  isInWishlist
                    ? handleRemoveFromWishlist(displayProduct)
                    : handleAddToWishlist(displayProduct)
                }
              >
                {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
              </button> */}
              <NavLink
                to="/cart"
                className="btn btn-dark ms-2 px-4 py-2 go-to-cart"
                style={{ textDecoration: "none" }}
              >
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div>
          <button
            className="btn btn-outline-dark button1"
            onClick={() => navigate("/products")}
          >
            Go Back
          </button>
        </div>
        <div className="row py-3">
          <ShowProduct />
        </div>
        {/* <ButtonWithCounter /> */}
        <ToastContainer />
      </div>
      {/* {console.log("slider:",displayProduct.slider)}
          {displayProduct.slider.map((image, index) => {
            <div key={index} >
              {console.log("image:",image)}
              <Suspense fallback={<h1>loading...</h1>}>
              <img src={String(image)} />
              </Suspense>
              
            </div>;
          })} */}
    </div>
  );
}
export default Product;
