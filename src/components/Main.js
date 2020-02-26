import React, { Component } from 'react';
import Logo from './000.png';
import App from './App.css';

class Main extends Component {

  render() {
    return (

      <div id="content">
      <div className="card">

      <img src={Logo} className="c_img" height="300" width="400">
      </img>

        <h1 className="lol">Submit for Benefitial scheme</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.createProduct(name, price)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Land"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Request</button>
        </form>
        <p>&nbsp;</p>
        </div>
      <div className="card">
        <h2 className="lol" >FUND DISTRIBUTION DASHBOARD</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Land</th>
              <th scope="col">Farmer ID</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Acres</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                      className="btn btn-primary"
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Approve Fund
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
            </div>
    );
  }
}

export default Main;
