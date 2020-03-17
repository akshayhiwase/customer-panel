import React from 'react';
import classes from './Account.module.css';



class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: []
        }
    }
    onAddNewProductClick = () => {

        const path = `addneworder`;
        this.props.history.push(path);
    }
    onListSelect = () => {
        console.log("clicked")
        return (classes.selectIcon)

    }
    render() {
        // const productsInfo = this.state.products.map((list) => {
        //     return (
        //         <div className={classes.infoList}>


        //             <tr className={classes.infoTr}>
        //                 <td><div className={classes.selectList}><input type="checkbox" /></div></td>
        //                 <td>{list.name}</td>
        //                 <td>{list.unitSold}</td>
        //                 <td>{list.stock}</td>
        //                 <td>{list.expireDate}</td>
        //                 <td><div className={classes.deletIcon}><i className="far fa-trash-alt"></i></div></td>
        //             </tr>
        //         </div>
        //     )
        // })
        // const categoriesInfo = this.state.categories.map((list) => {
        //     return (
        //         <div className={classes.categoriList}>
        //             <p>{list}</p>
        //             <div className={classes.deletIcon}><i className="far fa-trash-alt"></i></div>

        //         </div>
        //     )
        // })
        return (

            <div className={classes.productsSection}>

                <div className={classes.productInfoWrapper}>
                    <div className={classes.productInfoDetails}>
                        <div className={classes.infoHead}>
                            <thead>
                                <td></td>
                                <td>PRODUCT NAME</td>
                                <td>UNIT SOLD</td>
                                <td>IN STOCK</td>
                                <td>EXPIRE DATE</td>
                                <td></td>

                            </thead>
                        </div>
                        {/* 
                        {productsInfo} */}
                    </div>
                    <div className={classes.productBtnSection}><button onClick={this.onAddNewProductClick}>Add New Product</button></div>
                    <div className={classes.productBtnSection}><button>Delete Selected Product</button></div>
                </div>
                <div className={classes.productCategoriesWrapper}>
                    <div className={classes.categoriesHead}>
                        <h3>Product Categories</h3>
                    </div>
                    <div className={classes.categoriListWrapper}>
                        {/* {categoriesInfo} */}
                    </div>
                    <div className={classes.categoryAddBtn}><button>Add New Category</button></div>
                </div>


            </div>
        );
    }
}

export default Account;