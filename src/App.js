import logo from './logo.svg';
import './App.css';
import '../src/Stylesheet/vendor/bootstrap/css/bootstrap.min.css';
import '../src/Stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import '../src/Stylesheet/css/font.css';
import '../src/Stylesheet/css/style.default.css';
import DashboardElement from './Components/index/content/DashboardElement';
import TableElement from './Components/tables/content/TableElement';
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
      <DashboardElement />
      {/* <TableElement /> */}
    </div>
  );
}

export default App;