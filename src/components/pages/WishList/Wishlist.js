import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { removeFromWishList } from '../../../redux/actions/actions';

const Wishlist = () => {
    const dispatch=useDispatch();
    const wishlist=useSelector((state)=>state.productdata.wishlist);
    
  return (
    <div>
      
    </div>
  );
}

export default Wishlist;
