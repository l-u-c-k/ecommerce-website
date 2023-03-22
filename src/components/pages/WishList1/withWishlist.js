// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import {
//   addToWishlist,
//   removeFromWishList,
// } from "../../../redux/actions/actions";

// const withWishlist = (WrappedComponent) => {
//     const wishlist = useSelector((state) => state.productdata.wishlist);
//     const dispatch = useDispatch();
   

//     const handleAddToWishlist = (product) => {
//       dispatch(addToWishlist(product));
//     };
//     const handleRemoveFromWishlist = (id) => {
//       dispatch(removeFromWishList(id));
//     };
// //   const mapStateToProps = (state) => ({
// //     wishlist: state.productdata.wishlist,
// //   }
// //   );
 

// //   const mapDispatchToProps = (dispatch) => ({
// //     addToWishlist: (item) => dispatch(addToWishlist(item)),
// //     removeFromWishlist: (id) => dispatch(removeFromWishList(id)),
// //   });
// //   const EnhancedComponent = connect(
// //     mapStateToProps,
// //     mapDispatchToProps
// //   )((props) => (
// //     <WrappedComponent
// //       {...props}
// //       addToWishlist={props.addToWishlist}
// //       removeFromWishlist={props.removeFromWishlist}
// //       wishlist={props.wishlist}
// //     />
// //   ));
// const EnhancedComponent = (props) => (
//     <WrappedComponent
//       {...props}
//       addToWishlist={handleAddToWishlist}
//       removeFromWishlist={handleRemoveFromWishlist}
//       wishlist={wishlist}
//     />
//   );
//   return EnhancedComponent;
// };

// export default withWishlist;
