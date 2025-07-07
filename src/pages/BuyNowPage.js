import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BuyNowPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5 py-5">
        <h2 className="text-center section-title">Place Your Order</h2>
        <div className="row justify-content-center">
          <div className="col-md-7">
            <form className="p-4 border rounded shadow-sm bg-white">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="+1 (123) 456-7890" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Shipping Address</label>
                <textarea className="form-control" id="address" rows="3" placeholder="123 Ice Cream Lane, Sweetville"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="flavor" className="form-label">Select Flavor</label>
                <select className="form-select" id="flavor">
                  <option>Midnight Chocolate</option>
                  <option>Madagascar Vanilla</option>
                  <option>Summer Strawberry</option>
                  <option>Mint Chip</option>
                  <option>Cookie Dough</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="number" className="form-control" id="quantity" defaultValue="1" min="1" />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">Confirm Order</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyNowPage;