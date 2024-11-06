import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import "./App.css";

const App = () => {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("products");
        return savedProducts ? JSON.parse(savedProducts) : [];
    });

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const deleteProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    const updateProduct = (index, updatedProduct) => {
        const newProducts = products.map((product, i) =>
            i === parseInt(index) ? updatedProduct : product
        );
        setProducts(newProducts);
    };

    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                products={products}
                                onAdd={addProduct}
                                onDelete={deleteProduct}
                            />
                        }
                    />
                    <Route
                        path="/add-product"
                        element={<AddProduct onAdd={addProduct} />}
                    />
                    <Route
                        path="/edit-product/:index"
                        element={
                            <EditProduct
                                products={products}
                                onUpdate={updateProduct}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
