import React from "react";
import "./ProductDescription.scss";
import CustomBox from "../../../components/CustomBox/CustomBox";

const ProductDescription = () => {
  return (
    <div className="productDescription">
      <div className="row">
        <div className="col-md-6">
          <div className="showCaseImage">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdna.lystit.com%2Fphotos%2Fjdsports%2F6a783766%2Fchampion-Grey-Tape-Full-Zip-Hoodie.jpeg&f=1&nofb=1"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="productInformation">
            <div className="productName">
              <h1>
                New Apple iPhone 12 Pro (128GB, Graphite) [Locked] + Carrier
                Subscription
              </h1>
              <hr />
              <br />
            </div>
            <div className="productSlugs">
              <div className="row">
                <div className="col-md-3">
                  <div className="alert alert-danger">1 in Stock</div>
                </div>
                <div className="col-md-3">
                  <div className="alert alert-success">New Product</div>
                </div>
                <div className="col-md-3">
                  <div className="alert alert-primary">Cheaper</div>
                </div>
                <div className="col-md-3">
                  <div className="alert alert-danger">Available in all sizes</div>
                </div>
              </div>
            </div>
            <div className="productDetails">
              <h4>Product Details</h4>
              <p>
                This is an auto-renewed stored value card subscription. A stored
                value card is what Amazon uses to transmit your monthly service
                payment to Cricket Wireless. Each month, Amazon automatically
                charges your preferred payment method to a stored value card,
                which is then used by Cricket to pay for your wireless service
                plan. Cancel any time by visiting Your Memberships &
                Subscriptions. The Cricket Wireless LLC SIM Card Kit and stored
                value card subscription are offered and sold by Cricket Wireless
                LLC and the SIM Card Kit is fulfilled by Amazon. See full
                Cricket Wireless Terms and Conditions.
              </p>
            </div>

            <div className="buttons">
              <button className="primaryButton">Shop Now</button>
              <button className="primaryButton">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
