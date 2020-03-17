import React from 'react'
import classes from './NewOrder.module.css';

class NewOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    selectImage = (e) => {
        console.log(e.target.files[0].name)
    }
    onUploadImageClicked = () => {

    }
    onFormSubmit = (e) => {
        e.preventDefault()
        const productData = {
            productName: e.target.pdtName.value,
            decription: e.target.dec.value,
            category: e.target.category.value,
            expirydate: e.target.expDate.value,
            stock: e.target.stock.value
        }
        console.log(productData)
        alert("Your Product Added Successfully")
        const path = `products`;
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
                                    <input type="text" required name="stock" />
                                </div>
                                <div className={classes.inputFill}>
                                    <label>Customer Name</label>
                                    <input type="text" required name="pdtName" />
                                </div>
                                <div className={classes.inputFill} >
                                    <label>Email</label>
                                    <input type="email" required name="email" />
                                </div>
                                <div className={classes.inputFill}>
                                    <p>Accounts</p>
                                    <select className={classes.userSelectMenu} name="category">
                                        <option value="Select Product">Select Product</option>
                                        <option value="Product 1">Product 1</option>
                                        <option value="Product 2">Product 2</option>
                                        <option value="Product 3">Product 3</option>

                                    </select>
                                </div>
                                <div className={classes.inputFill}>
                                    <label>Quantity</label>
                                    <input type="text" required name="stock" />
                                </div>


                                <div className={classes.inputFill}>
                                    <button onSubmit={this.onFormSubmit}>Add Product Now</button>
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