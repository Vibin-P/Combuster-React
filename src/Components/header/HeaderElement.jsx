import React, {Component} from 'react';
import '../../Stylesheet/vendor/bootstrap/css/bootstrap.min.css';
import '../../Stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import '../../Stylesheet/css/font.css';
import '../../Stylesheet/css/style.default.css';
import '../../Stylesheet/css/style.default.css';

class HeaderElement extends Component {
    render() {
        return(
            <header class="header">
            <nav class="navbar navbar-expand-lg">
              <div class="search-panel">
                <div class="search-inner d-flex align-items-center justify-content-center">
                  <div class="close-btn">Close <i class="fa fa-close"></i></div>
                  <form id="searchForm" action="#">
                    <div class="form-group">
                      <input type="search" name="search" placeholder="What are you searching for..." />
                      <button type="submit" class="submit">Search</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="container-fluid d-flex align-items-center justify-content-between">
                <div class="navbar-header">
                  {/* <!-- Navbar Header--> */}
                  <a href="index.html" class="navbar-brand">
                    <div class="brand-text brand-big visible text-uppercase"><strong class="text-primary">EnerTek</strong><strong>Combustor</strong></div>
                    <div class="brand-text brand-sm"><strong class="text-primary">E</strong><strong>C</strong></div></a>
                  {/* <!-- Sidebar Toggle Btn--> */}
                  <button class="sidebar-toggle"><i class="fa fa-bars"></i></button>
                </div>
                <div class="right-menu list-inline no-margin-bottom">    
                  {/* <!-- Log out --> */}
                  <div class="list-inline-item logout">
                    <a id="logout" href="login.html" class="nav-link"> <span class="d-none d-sm-inline">Logout </span><i class="icon-logout"></i></a></div>
                </div>
              </div>
            </nav>
          </header>
        )
    }
}
export default HeaderElement;