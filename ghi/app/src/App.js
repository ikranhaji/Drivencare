import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Features/MainPage/MainPage';
import Nav from './Features/Nav/Nav';
import TechnicianForm from './Features/Technician/TechnicianForm';
import TechnicianList from './Features/Technician/TechnicianList';
import ManufacturerList from './Features/Manufacturer/ManufacturerList'
import ManufacturerForm from './Features/Manufacturer/ManufacturerForm';
import AppointmentForm from './Features/Appointments/AppointmentForm';
import AppointmentList from './Features/Appointments/AppointmentList';
import ServiceHistory from './Features/Service/ServiceHistory';
import SalesPersonForm from './Features/Salespeople/salesPersonForm';
import SalesPeopleList from './Features/Salespeople/salesPeopleList';
import CustomerForm from './Features/Customers/customerForm';
import CustomerList from './Features/Customers/customerList';
import SaleList from './Features/Sales/salesList';
import SaleHistory from './Features/Sales/salesHistory';
import VehicleModelForm from './Features/Models/vehicleModelForm';
import ModelList from './Features/Models/ModelList';
import CarList from './Features/Automobiles/CarList';
import CarForm from './Features/Automobiles/CarForm';
import NewSale from './Features/Sales/newSale';




function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />} />
            <Route path='' element={<TechnicianList />} />
          </Route>
          <Route path="manufacturers">
            <Route path='' element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="appointments">
            <Route path="new" element={<AppointmentForm />} />
            <Route path='' element={<AppointmentList />} />
          </Route>
          <Route path="/service" element={<ServiceHistory />} />
          <Route path="salespeople">
            <Route path='' element={<SalesPeopleList />} />
            <Route path="new" element={<SalesPersonForm />} />
          </Route>
          <Route path="customers">
            <Route path='' element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="sales">
            <Route path='' element={<SaleList />} />
            <Route path="new" element={<NewSale />} />
            <Route path="history" element={<SaleHistory />} />
          </Route>
          <Route path="models">
            <Route path='' element={<ModelList />} />
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route path='' element={<CarList />} />
            <Route path="new" element={<CarForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
