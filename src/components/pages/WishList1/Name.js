// import React, { useState } from "react";
// import { useSelector, useDispatch, connect } from "react-redux";
// import {
//   addToWishlist,
//   removeFromWishList,
// } from "../../../redux/actions/actions";

// // const EnhancedComponent=(OriginalComponent)=>{
// //     class NewComponent extends React.Component{
// //         render(){
// //             return <OriginalComponent name="Lakshmi" />
// //         }
// //     }
// //     return EnhancedComponent;
// // }

// // export default EnhancedComponent;

// function withCounter(WrappedComponent) {
//   const mapStateToProps = (state) => ({
//     wishlist: state.productdata,
//   });

//   const mapDispatchToProps = (dispatch) => ({
//     addToWishlist: (item) => dispatch(addToWishlist(item)),
//     removeFromWishList: (id) => dispatch(removeFromWishList(id)),
//   });

//   //    const  WithCounter=connect(mapStateToProps,mapDispatchToProps)((props) =>(
//   //     const [count, setCount] = useState(0);
//   //     function incrementCount() {
//   //       setCount(count + 1);
//   //     }
//   //     return (
//   //       <WrappedComponent
//   //         {...props}
//   //         count={count}
//   //         incrementCount={incrementCount}
//   //       />
//   //     );
//   //    );
//   //    );
//   {
//     console.log("In name:", this.state.wishlist);
//   }
//   const WithCounter = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )((props) => (
//     <WrappedComponent
//       {...props}
//       addToWishlist={props.addToWishlist}
//       removeFromWishlist={props.removeFromWishlist}
//       wishlist={props.wishlist}
//     />
//   ));

//   return WithCounter;
// }

// export default withCounter;
