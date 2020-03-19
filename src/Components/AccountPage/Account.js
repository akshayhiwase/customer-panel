import React from 'react';
import classes from './Account.module.css';
import { responseData } from '../JsonData/ResponseData';


class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ordelList: responseData,
            editedOrder: {},
            popUp: true,
            userLogin: JSON.parse(localStorage.getItem("userAdmin"))

        }
    }
    onAddNewProductClick = () => {
        const path = `addneworder`;
        this.props.history.push(path);
    }
    onOrderEditClicked = (order) => {
        console.log(order);
        this.setState({
            editedOrder: order,
            popUp: !this.state.popUp,
        })
    }
    onEditedOrderSubmit = (e) => {
        console.log(e.target)
        this.setState({
            popUp: !this.state.popUp,
        })
        const editedOrder = {
            orderID: e.target.orderID.value,
            customerName: e.target.customerName.value,
            customerEmail: e.target.email.value,
            product: e.target.product.value,
            quantity: e.target.quantity.value
        }
        sessionStorage.setItem("editedOrder", JSON.stringify(editedOrder))

    }

    deleteNotes(key) {
        console.log(key)
        const filterList = this.state.ordelList.filter(item => item.id !== key);
        this.setState({
            ordelList: filterList
        })
    }
    render() {
        const userAdmin = <div className={classes.admin}>
            <h1>Welcome Admin</h1>
            <img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt="User" />
            <h3>{this.state.userLogin.username}</h3>
        </div>
        const popUP = this.state.popUp ? null : (
            <div className={classes.editOrderSection} >
                <div className={classes.editOrderPopUp}>
                    <div className={classes.orderInfo}>
                        <h2>Order Information</h2>
                        <p>OrderID <br /> {this.state.editedOrder.id}</p>
                        <p>Customer Name <br />{this.state.editedOrder.customer_name}</p>
                        <p>Customer Email <br /> {this.state.editedOrder.customer_name}</p>
                        <p>Product <br /> {this.state.editedOrder.product}</p>
                        <p>Quantity <br /> {this.state.editedOrder.quantity}</p>
                    </div>
                    <form action="" onSubmit={this.onEditedOrderSubmit}>
                        <div className={classes.editOrderContainer}>
                            <h2>Edit Order </h2>
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
                                <button onSubmit={this.onEditedOrderSubmit} >Conform Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>)


        const orderInfo = (<tbody>
            {this.state.ordelList.map((list) => {
                return <tr className={classes.infoList} key={list.id}>
                    <td><div className={classes.selectList} onClick={() => this.onOrderEditClicked(list)}><i class="far fa-edit"></i></div></td>
                    <td>{list.id}</td>
                    <td>{list.customer_name}</td>
                    <td>{list.customer_email}</td>
                    <td>{list.product}</td>
                    <td>{list.quantity}</td>
                    <td><div className={classes.deletIcon} onClick={() => this.deleteNotes(list.id)}><i className="far fa-trash-alt"></i></div></td>
                </tr>
            })}

        </tbody>)


        return (

            <div className={classes.productsSection} >

                <div className={classes.productInfoWrapper}>
                    <h1>Orders</h1>
                    <div className={classes.productInfoDetails}>
                        <div className={classes.infoHead}>
                            <thead>
                                <td></td>
                                <td>Customer ID</td>
                                <td>Customer Name</td>
                                <td>Customer Email</td>
                                <td>Product</td>
                                <td>Quantity</td>

                            </thead>
                            {orderInfo}
                        </div>
                    </div>
                    <div className={classes.productBtnSection}><button onClick={this.onAddNewProductClick}>Add New Order</button></div>
                </div>
                {popUP}

                {userAdmin}





            </div>
        );
    }
}

export default Account;