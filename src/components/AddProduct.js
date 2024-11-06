import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, price });
        setName("");
        setPrice("");
        navigate("/");
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Thêm sản phẩm mới</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Tên sản phẩm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="number"
                        placeholder="Giá tiền"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="button-group">
                    <button className="submit-button" type="submit">
                        Thêm sản phẩm
                    </button>
                    <Link to="/" className="back-button">
                        Quay lại
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
