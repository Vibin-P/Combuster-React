import React, { Component } from "react";

class FooterElement extends Component {
  render(){
    return(
      <footer class="footer">
      <div class="footer__block block no-margin-bottom">
        <div class="container-fluid text-center">
          {/* <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)--> */}
          <p class="no-margin-bottom">2019 &copy; Powered By <a href="#">Vaigunth EnerTek (Pvt.) Ltd.</a>.</p>
        </div>
      </div>
    </footer>
    )
  }
}
export default FooterElement;