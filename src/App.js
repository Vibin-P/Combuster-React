import logo from './logo.svg';
import './App.css';
import '../src/Stylesheet/vendor/bootstrap/css/bootstrap.min.css';
import '../src/Stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import '../src/Stylesheet/css/font.css';
import '../src/Stylesheet/css/style.default.css';
import '../src/Stylesheet/js/front';
import DashboardElement from './Components/index/content/DashboardElement';
import TableElement from './Components/tables/content/TableElement';

function App() {
  return (
    <div>
      <DashboardElement />
      {/* <TableElement /> */}
    </div>
  );
}
export default App;