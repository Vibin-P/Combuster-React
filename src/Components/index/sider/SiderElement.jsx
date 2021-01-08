import React, {Component} from 'react';

class SiderElement extends Component {
    render() {
        return(
            // <!-- Sidebar Navigation-->
            <nav id="sidebar">
              {/* <!-- Sidebar Navidation Menus--> */}
              <ul class="list-unstyled">
                <li class="active"><a href="index.html"> <i class="icon-home"></i>Dashboard </a></li>
                <li><a href="tables.html"> <i class="icon-grid"></i>Tables </a></li>
                {/* <!-- <li><a href="charts.html"> <i class="fa fa-bar-chart"></i>Charts </a></li>
                <li><a href="forms.html"> <i class="icon-padnote"></i>Forms </a></li> --> */}
                <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-windows"></i>Example dropdown </a>
                  <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
         // <!-- Sidebar Navigation end-->
        )
    }
}
export default SiderElement;