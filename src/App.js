import logo from './logo.svg';
import './App.css';
import '../src/Stylesheet/vendor/bootstrap/css/bootstrap.min.css';
import '../src/Stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import '../src/Stylesheet/css/font.css';
// import '../../Stylesheet/css/style.default.css';
import HeaderElement from './Components/header/HeaderElement';
import SiderElement from './Components/sider/SiderElement';
import ContentElement from './Components/content/ContentElement';
import $ from 'jquery';

$(document).ready(function(){
$('.sidebar-toggle').on('click', function () {
    $(this).toggleClass('active');

    $('#sidebar').toggleClass('shrinked');
    $('.page-content').toggleClass('active');
    $(document).trigger('sidebarChanged');

    if ($('.sidebar-toggle').hasClass('active')) {
        $('.navbar-brand .brand-sm').addClass('visible');
        $('.navbar-brand .brand-big').removeClass('visible');
    } else {
        $('.navbar-brand .brand-sm').removeClass('visible');
        $('.navbar-brand .brand-big').addClass('visible');
    }
});
});

function App() {
  return (
    <div>
      <HeaderElement />
      <div class="d-flex align-items-stretch">
      <SiderElement />
      <ContentElement />
      </div>
    </div>
  );
}

export default App;
