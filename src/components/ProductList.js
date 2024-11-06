import React, { useState } from "react";
import "./ProductList.css";

const ProductList = ({ products, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (products.length === 0) {
        return <div className="empty-message">Không có sản phẩm nào</div>;
    }

    return (
        <>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product, index) => (
                        <tr key={index}>
                            <td>{indexOfFirstProduct + index + 1}</td>
                            <td>{product.name}</td>
                            <td>
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(product.price)}
                            </td>
                            <td>
                                <div className="action-buttons">
                                    <button
                                        className="edit-button"
                                        onClick={() =>
                                            onEdit(indexOfFirstProduct + index)
                                        }
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            onDelete(
                                                indexOfFirstProduct + index
                                            )
                                        }
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Trước
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={
                                currentPage === index + 1 ? "active" : ""
                            }
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Sau
                    </button>
                </div>
            )}

            <div className="pagination-info">
                Hiển thị {indexOfFirstProduct + 1}-
                {Math.min(indexOfLastProduct, products.length)} trên tổng số{" "}
                {products.length} sản phẩm
            </div>
        </>
    );
};

export default ProductList;
