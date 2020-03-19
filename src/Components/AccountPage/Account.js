import React from 'react';
import classes from './Account.module.css';
import { responseData } from '../JsonData/ResponseData';



class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ordelList: responseData,
            editedOrder: {},
            popUp: true
        }
    }
    onAddNewProductClick = () => {

        const path = `addneworder`;
        this.props.history.push(path);
    }
    onOrderEditClicked = (order) => {
        console.log(order);
        this.setState({
            editedOrder: order
        })
        this.onEditedOrderSubmit()
    }
    onEditedOrderSubmit = () => {
        this.setState({
            popUp: !this.state.popUp,
        })
        console.log("yes")
    }
    deleteNotes(key) {

        console.log(key)
        const filterList = this.state.ordelList.filter(item => item.id !== key);
        this.setState({
            ordelList: filterList
        })
    }
    render() {
        const popUP = this.state.popUp ? null : (
            <div className={classes.editOrderPopUp}>
                <form action="">
                    <input type="text" value={this.state.editedOrder.id} />
                    <input type="text" value={this.state.editedOrder.customer_name} />
                    <input type="text" value={this.state.editedOrder.customer_email} />
                    <select className={classes.userSelectMenu} name="product">
                        <option value="">{this.state.editedOrder.product}</option>
                        <option value="Product 1">Product 1</option>
                        <option value="Product 2">Product 2</option>
                        <option value="Product 3">Product 3</option>

                    </select>
                    <input type="text" value={this.state.editedOrder.quantity} />
                    <input type="submit" value="Ok" onClick={this.onEditedOrderSubmit} />
                </form>
            </div>)


        const orderInfo = (<tbody>
            {this.state.ordelList.map((list) => {
                return <tr className={classes.infoList}>
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
                <div className={classes.productCategoriesWrapper}>
                    <div className={classes.categoriesHead}>
                        <h3>Product Categories</h3>
                        {popUP}
                    </div>
                    <div className={classes.categoriListWrapper}>
                    </div>
                    <div className={classes.categoryAddBtn}><button>Add New Category</button></div>
                </div>




            </div>
        );
    }
}

export default Account;