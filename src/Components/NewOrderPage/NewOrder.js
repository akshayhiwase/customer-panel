import React from 'react'
import classes from './NewOrder.module.css';

class NewOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        const productData = {
            orderID: e.target.orderID.value,
            customerName: e.target.customerName.value,
            customerEmail: e.target.email.value,
            product: e.target.product.value,
            quantity: e.target.quantity.value
        }
        console.log(productData)
        alert("Your Order Added Successfully")
        const path = `account`;
        this.props.history.push(path);
    }
    render() {
        return (
            <div className={classes.addNewOrderSection}>
                <div className={classes.newOrderWrapper}>
                    <div className={classes.newOrderHead}> <h3>Add Order</h3></div>
                    <div className={classes.orderForm}>
                        <form action="" onSubmit={this.onFormSubmit}>
                            <div className={classes.newOrderContainer}>
                                <div className={classes.inputFill}>
                                    <label>Order ID</label>
                                    <input type="text" required name="orderID" />
                                </div>
                                <div className={classes.inputFill}>
                                    <label>Customer Name</label>
                                    <input type="text" required name="customerName" />
                                </div>
                                <div className={classes.inputFill} >
                                    <label>Email</label>
                                    <input type="email" required name="email" />
                                </div>
                                <div className={classes.inputFill}>
                                    <p>Products</p>
                                    <select className={classes.userSelectMenu} name="product">
                                        <option value="Select Product">Select Product</option>
                                        <option value="Product 1">Product 1</option>
                                        <option value="Product 2">Product 2</option>
                                        <option value="Product 3">Product 3</option>

                                    </select>
                                </div>
                                <div className={classes.inputFill}>
                                    <label>Quantity</label>
                                    <input type="text" required name="quantity" pattern="^[1-9][0-9]*$" />
                                </div>


                                <div className={classes.inputFill}>
                                    <button onSubmit={this.onFormSubmit}>Add Order Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default NewOrder;