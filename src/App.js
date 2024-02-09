// import Hr from "./Hr_Home/Hr_Home";
import Main from "./main/Main";
import Forget_Password from "./Forget_Password/Forget_Password"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hr_Home from "./Hr_Home/Hr_Home";
import Timesheet from "./SideBar/Timesheet/Timesheet";
import TimeTracker from "./SideBar/TimeTracker/TimeTracker";
import EmployeeProfile from "./SideBar/EmployeeProfile/EmployeeProfile";
import RaiseTicket from "./SideBar/RaiseTicket/RaiseTicket";
import Settings from "./SideBar/Settings/Settings";
import Support from "./SideBar/Support/Support";
import ClientRegistration from "./Hr_lap/Client lap/ClientRegistration/Registration/ClientRegistration";
import UserInfo from "./UserInfo/UserInfo";
import Vender_registration from "./Hr_lap/Client lap/Vender lap/Registration/Vender_registration";
import Vendor_Search from "./Hr_lap/Client lap/Vender lap/Registration/Search/Vendor_Search";
import Vender_management from "./Hr_lap/Client lap/Vender lap/Registration/Management/Vender_management";
import ClientSearch from "./Hr_lap/Client lap/ClientRegistration/Search/ClientSearch";
import ITRegistration from "./it_lap/it_lap_registration/ITRegistration";
import FirstFloor from "./assets lap/assetregistration/1stfloor/FirstFloor";
import SecondFloor from "./assets lap/assetregistration/2ndfloor/SecondFloor";
import Add_Requirement from "./Requirement/AddRequirement/Add_Requirement";
import ClientManagement from "./Hr_lap/Client lap/ClientRegistration/Management/ClientManagement";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signUp" element={<Main/>}/>
        <Route path="/home" element={<Hr_Home/>}>

          <Route path="/home/clientRegistration" element={<ClientRegistration/>}/>
          <Route path="/home/clientSearch" element={<ClientSearch/>}/>
          <Route path="/home/clientMangement" element={<ClientManagement/>}/>
         


          <Route path="/home/venderRegistration" element={<Vender_registration/>}/>
          <Route path="/home/venderSearch" element={<Vendor_Search/>}/>
          <Route path="/home/venderManagement" element={<Vender_management/>}/>


          <Route path="/home/assetsRegistration1stFloor" element={<FirstFloor/>}/>
          <Route path="/home/assetsRegistration2stFloor" element={<SecondFloor/>}/>

          <Route path="/home/itlapregister" element={<ITRegistration/>}/>


          <Route path="/home/addRequirement" element={<Add_Requirement/>}/>

          <Route path="/home/timetracker" element={<TimeTracker/>}/>
          <Route path="/home/employeeprofile" element={<EmployeeProfile/>}/>
          <Route path="/home/raiseticket" element={<RaiseTicket/>}/>
          <Route path="/home/timesheet" element={<Timesheet/>}/>
          <Route path="/home/settings" element={<Settings/>}/>
          <Route path="/home/support" element={<Support/>}/>

          <Route path="/home/userinfo" element={<UserInfo/>}/>

           </Route>
        {/* <Route path="/Forget_Password" element={<Forget_Password/>}/> */}

      </Routes>
    </BrowserRouter>
  );
}
export default App;
