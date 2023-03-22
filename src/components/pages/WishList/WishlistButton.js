import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWishlist,
  removeFromWishList,
} from "../../../redux/actions/actions";

const WishlistButton = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.productdata.wishlist);

  const isProductInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };
  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishList(product.id));
  };
  return (
    <button
      onClick={
        isProductInWishlist ? handleRemoveFromWishlist : handleAddToWishlist
      }
    >
      {isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    </button>
  );
};

export default WishlistButton;
