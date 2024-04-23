import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import { toast} from "react-toastify";
import Layout from "../components/layout/layout.jsx";
import { useAuth } from "../context/auth.jsx";
import { useCart } from "../context/cart.jsx";
import "react-toastify/dist/ReactToastify.css";
import "../styles/productcard.css";
import "../styles/filter.css";
import "../styles/cartTable.css";

function HomePage() {
  const initialState = {
    products: [],
    categories: [],
    selectedCategory: "",
    subcategories: [],
    selectedSubcategory: "",
    filteredProducts: [],
    cartItems: [],
  };
  
  const [state, setState] = useState(initialState);
  const [auth,setAuth]= useAuth()
  const [cart, setCart]= useCart()
  const {
    products,
    categories,
    selectedCategory,
    subcategories,
    selectedSubcategory,
    filteredProducts,
    cartItems,
  } = state;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/products");
        setState((prevState) => ({
          ...prevState,
          products: response.data[0],
          categories: [
            ...new Set(response.data[0].map((product) => product.category)),
          ],
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filteredProductsByCategory = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : [];
    setState((prevState) => ({
      ...prevState,
      filteredProducts: filteredProductsByCategory,
      subcategories: [
        ...new Set(
          filteredProductsByCategory.map((product) => product.subcategory)
        ),
      ],
      selectedSubcategory: "",
    }));
  }, [selectedCategory, products]);

  useEffect(() => {
    let updatedFilteredProducts = products;
    if (selectedCategory) {
      updatedFilteredProducts = updatedFilteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
    if (selectedSubcategory) {
      updatedFilteredProducts = updatedFilteredProducts.filter(
        (product) => product.subcategory === selectedSubcategory
      );
    }
    setState((prevState) => ({
      ...prevState,
      filteredProducts: updatedFilteredProducts,
    }));
  }, [selectedSubcategory, selectedCategory, products]);

  const handleCategoryChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      selectedCategory: e.target.value,
    }));
  };

  const handleSubcategoryChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      selectedSubcategory: e.target.value,
    }));
  };

  // const addToCart = (product) => {
  //   const existingItem = cartItems.find((item) => item._id === product._id);
  //   if (existingItem) {
  //     // Increase quantity if item already exists in cart
  //     setState((prevState) => ({
  //       ...prevState,
  //       cartItems: prevState.cartItems.map((item) =>
  //         item._id === product._id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       ),
  //     }));
  //   } else {
  //     // Add new item to cart
  //     setState((prevState) => ({
  //       ...prevState,
  //       cartItems: [...prevState.cartItems, { ...product, quantity: 1 }],
  //     }));
  //   }
  //   toast.success(`${product.subcategory} added to cart!`, {
  //     position: "top-right",
  //   });
  // };

  // const removeFromCart = (itemId) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     cartItems: prevState.cartItems.filter((item) => item._id !== itemId),
  //   }));
  // };

  // const increaseQuantity = (itemId) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     cartItems: prevState.cartItems.map((item) =>
  //       item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
  //     ),
  //   }));
  // };

  // const decreaseQuantity = (itemId) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     cartItems: prevState.cartItems.map((item) =>
  //       item._id === itemId && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     ),
  //   }));
  // };

  // const calculateTotalPrice = () => {
  //   return cartItems.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );
  // };

  return (
    <Layout>
      <div className="center-container">
        <div className="categories">
          <select
            id="category"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option>Available categories</option>
            {categories.map((category, index) => (
              <option id="catgory-option" key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {selectedCategory && (
          <div className="categories">
            <select
              id="subcategory"
              onChange={handleSubcategoryChange}
              value={selectedSubcategory}
            >
              <option>Available subcategories</option>
              {subcategories.map((subcategory, index) => (
                <option key={index} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="Grid">
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4}>
              <div className="Card">
                <Card>
                  <CardMedia
                    style={{ objectFit: "contain" }}
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {product.subcategory}
                    </Typography>
                    <Typography variant="body2">
                      Price: ₹{product.price}
                    </Typography>
                    <Typography variant="body2">
                      Description: {product.description}
                    </Typography>
                    <div className="addtocart">
                    <Typography variant="body2">
                        <button onClick={() => {setCart([...cart,product])
                        localStorage.setItem('cart',JSON.stringify([...cart,product]))
                        toast.success(`${product.subcategory} added to cart!`, {
                          position: "top-right",
                        })}}>
                          ADD <i className="fa fa-shopping-cart"></i>
                        </button>
                    </Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      {/* <div>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <h3>Your cart is empty.</h3>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>{item.subcategory}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price}</td>
                    <td>₹{item.price * item.quantity}</td>
                    <td>
                      <IconButton onClick={() => increaseQuantity(item._id)}>
                        <AddIcon />
                      </IconButton>
                      <IconButton onClick={() => decreaseQuantity(item._id)}>
                        <RemoveIcon />
                      </IconButton>
                      <IconButton onClick={() => removeFromCart(item._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <h3>Total Price: ₹{calculateTotalPrice()}</h3>
          </div>
        )}
        <pre>{JSON.stringify(auth,null,4)}</pre>
        <ToastContainer />
      </div> */}
    </Layout>
  );
}

export default HomePage;
