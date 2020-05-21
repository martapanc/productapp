import React, {Component} from 'react';

class ProductTableRow extends Component {
    render() {
        let product = this.props.product;
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td className="text-right">£{Number(product.price).toFixed(2)}</td>
                <td>
                    <button className="btn btn-sm btn-warning m-1" onClick={() => this.props.editCallback(product)}>
                        Edit
                    </button>
                    <button className="btn btn-sm btn-danger m-1" onClick={() => this.props.deleteCallback(product)}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductTableRow;
