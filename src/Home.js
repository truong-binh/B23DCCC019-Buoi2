import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ products, onAdd, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="home-container">
            <div className="home-header">
                <h1>Quản lý sản phẩm</h1>
                <Link to="/add-product" className="nav-link">
                    Thêm sản phẩm
                </Link>
            </div>
            <input
                className="search-input"
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ProductList
                products={products.filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                )}
                onEdit={(index) => navigate(`/edit-product/${index}`)}
                onDelete={onDelete}
            />
        </div>
    );
};

export default Home;
