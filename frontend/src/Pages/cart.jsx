// // import React from "react";
// // import { IconButton } from "@mui/material";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import AddIcon from "@mui/icons-material/Add";
// // import RemoveIcon from "@mui/icons-material/Remove";
// // import Layout from "../components/Layout/layout";

// // const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart, calculateTotalPrice }) => {
// //   return (
// //     <Layout>
// //       <div>
// //         <h2>Cart</h2>
// //         <div className="table-container">
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Category</th>
// //                 <th>Quantity</th>
// //                 <th>Price</th>
// //                 <th>Total</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {cartItems.map((item) => (
// //                 <tr key={item._id}>
// //                   <td>{item.subcategory}</td>
// //                   <td>{item.quantity}</td>
// //                   <td>₹{item.price}</td>
// //                   <td>₹{item.price * item.quantity}</td>
// //                   <td>
// //                     <IconButton onClick={() => increaseQuantity(item._id)}>
// //                       <AddIcon />
// //                     </IconButton>
// //                     <IconButton onClick={() => decreaseQuantity(item._id)}>
// //                       <RemoveIcon />
// //                     </IconButton>
// //                     <IconButton onClick={() => removeFromCart(item._id)}>
// //                       <DeleteIcon />
// //                     </IconButton>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         <h3>Total Price: ₹{calculateTotalPrice()}</h3>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default Cart;

// import React from "react";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { ToastContainer } from "react-toastify";
// import Layout from "../components/Layout/layout";
// import "../styles/cartTable.css";

// function CartPage({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotalPrice }) {
//   return (
//     <Layout>
//       <div>
//         <h2>Cart</h2>
//         {cartItems.length === 0 ? (
//           <h3>Your cart is empty.</h3>
//         ) : (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Category</th>
//                   <th>Quantity</th>
//                   <th>Price</th>
//                   <th>Total</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item._id}>
//                     <td>{item.subcategory}</td>
//                     <td>{item.quantity}</td>
//                     <td>₹{item.price}</td>
//                     <td>₹{item.price * item.quantity}</td>
//                     <td>
//                       <IconButton onClick={() => increaseQuantity(item._id)}>
//                         <AddIcon />
//                       </IconButton>
//                       <IconButton onClick={() => decreaseQuantity(item._id)}>
//                         <RemoveIcon />
//                       </IconButton>
//                       <IconButton onClick={() => removeFromCart(item._id)}>
//                         <DeleteIcon />
//                       </IconButton>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//         {cartItems.length > 0 && (
//           <div>
//             <h3>Total Price: ₹{calculateTotalPrice()}</h3>
//           </div>
//         )}
//         <ToastContainer />
//       </div>
//     </Layout>
//   );
// }

// export default CartPage;
