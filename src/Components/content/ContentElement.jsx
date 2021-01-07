import React, { Component } from "react";
import HeaderElement from '../header/HeaderElement';
import SiderElement from '../sider/SiderElement';

class ContentElement extends Component {
    render() {
        return(
          <div>
            <HeaderElement />
          <div class="d-flex align-items-stretch">
            <SiderElement />
          <div class="page-content">
            {/* <!-- Breadcrumb--> */}
            <div class="container-fluid">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">EnerTek</li>
                  <li class="breadcrumb-item active">Dashboard</li>
                </ul>
              </div>
            <section class="no-padding-top no-padding-bottom">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-3 col-sm-6">
                    <div class="statistic-block block">
                      <div class="progress-details d-flex align-items-end justify-content-between">
                        <div class="title">
                          <div class="icon"><i class="icon-user-1"></i></div><strong>RPM</strong>
                        </div>
                        <div class="number dashtext-1">27</div>
                      </div>
                      <div class="progress progress-template">
                        <div role="progressbar" style={{width: '30%',ariavaluenow: '30', ariavaluemin: '0', ariavaluemax: '100'}} class="progress-bar progress-bar-template dashbg-1"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="statistic-block block">
                      <div class="progress-details d-flex align-items-end justify-content-between">
                        <div class="title">
                          <div class="icon"><i class="icon-contract"></i></div><strong>Turbine Temp</strong>
                        </div>
                        <div class="number dashtext-2">375</div>
                      </div>
                      <div class="progress progress-template">
                        <div role="progressbar" style={{width: '70%',ariavaluenow: '70', ariavaluemin: '0', ariavaluemax: '100'}} class="progress-bar progress-bar-template dashbg-2"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="statistic-block block">
                      <div class="progress-details d-flex align-items-end justify-content-between">
                        <div class="title">
                          <div class="icon"><i class="icon-paper-and-pencil"></i></div><strong>Oil Temp</strong>
                        </div>
                        <div class="number dashtext-3">140</div>
                      </div>
                      <div class="progress progress-template">
                        <div role="progressbar" style={{width: '55%',ariavaluenow: '55', ariavaluemin: '0', ariavaluemax: '100'}} class="progress-bar progress-bar-template dashbg-3"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="statistic-block block">
                      <div class="progress-details d-flex align-items-end justify-content-between">
                        <div class="title">
                          <div class="icon"><i class="icon-writing-whiteboard"></i></div><strong>Status</strong>
                        </div>
                        <div class="number dashtext-4">41</div>
                      </div>
                      <div class="progress progress-template">
                        <div role="progressbar" style={{width: '35%',ariavaluenow: '35', ariavaluemin: '0', ariavaluemax: '100'}} class="progress-bar progress-bar-template dashbg-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="margin-bottom-sm">
              <div class="container-fluid">
                <div class="row d-flex align-items-stretch">
                  <div class="col-lg-4">
                    <div class="stats-with-chart-1 block">
                        <div class="row d-flex align-items-end justify-content-between">
                          <div class="col-7">
                              <div class="title"> <strong class="d-block">Oil Temperature</strong></div>
                          </div>
                          <div class="col-5">
                              <div class="title"><strong class="d-block dashtext-3">240 deg</strong></div>
                          </div>
                        </div>                                 
                        <div class="bar-chart chart">
                          <canvas id="salesBarChart1"></canvas>
                        </div>                   
                    </div>
                  </div>
                  <div class="col-lg-4">   
                    <div class="stats-with-chart-1 block">
                      <div class="title"> <strong class="d-block">Visit Statistics</strong><span class="d-block">Lorem ipsum dolor sit</span></div>
                      <div class="row d-flex align-items-end justify-content-between">
                        <div class="col-4">
                          <div class="text"><strong class="d-block dashtext-1">$457</strong><span class="d-block">May 2017</span><small class="d-block">210 Sales</small></div>
                        </div>
                        <div class="col-8">
                          <div class="bar-chart chart">
                            <canvas id="visitPieChart"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="stats-with-chart-1 block">
                      <div class="title"> <strong class="d-block">Sales Activities</strong><span class="d-block">Lorem ipsum dolor sit</span></div>
                      <div class="row d-flex align-items-end justify-content-between">
                        <div class="col-5">
                          <div class="text"><strong class="d-block dashtext-2">80%</strong><span class="d-block">May 2017</span><small class="d-block">+35 Sales</small></div>
                        </div>
                        <div class="col-7">
                          <div class="bar-chart chart">
                            <canvas id="salesBarChart2"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="stats-with-chart-2 block">
                      <div class="title"><strong class="d-block">Credit Sales</strong><span class="d-block">Lorem ipsum dolor sit</span></div>
                      <div class="piechart chart">
                        <canvas id="pieChartHome1"></canvas>
                        <div class="text"><strong class="d-block">$2.145</strong><span class="d-block">Sales</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="stats-with-chart-2 block">
                      <div class="title"><strong class="d-block">Channel Sales</strong><span class="d-block">Lorem ipsum dolor sit</span></div>
                      <div class="piechart chart">
                        <canvas id="pieChartHome2"></canvas>
                        <div class="text"><strong class="d-block">$7.784</strong><span class="d-block">Sales</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="stats-with-chart-2 block">
                      <div class="title"><strong class="d-block">Direct Sales</strong><span class="d-block">Lorem ipsum dolor sit</span></div>
                      <div class="piechart chart">
                        <canvas id="pieChartHome3"></canvas>
                        <div class="text"><strong class="d-block">$4.957</strong><span class="d-block">Sales</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer class="footer">
              <div class="footer__block block no-margin-bottom">
                <div class="container-fluid text-center">
                  {/* <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)--> */}
                  <p class="no-margin-bottom">2019 &copy; Powered By <a href="#">Vaigunth EnerTek (Pvt.) Ltd.</a>.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
        )
    }
}
export default ContentElement;