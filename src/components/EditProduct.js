import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddProduct.css";

const EditProduct = ({ products, onUpdate }) => {
    const { index } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        price: "",
    });

    useEffect(() => {
        const productIndex = parseInt(index);
        if (products[productIndex]) {
            setFormData({
                name: products[productIndex].name,
                price: products[productIndex].price,
            });
        } else {
            navigate("/");
        }
    }, [index, products, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(parseInt(index), formData);
        navigate("/");
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Chỉnh sửa sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Tên sản phẩm"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-input"
                        type="number"
                        placeholder="Giá tiền"
                        value={formData.price}
                        onChange={(e) =>
                            setFormData({ ...formData, price: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="button-group">
                    <button className="submit-button" type="submit">
                        Cập nhật sản phẩm
                    </button>
                    <Link to="/" className="back-button">
                        Quay lại
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;
