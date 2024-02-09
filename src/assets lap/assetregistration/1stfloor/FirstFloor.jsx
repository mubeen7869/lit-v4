import React, { useState } from "react";
import "./1stFloor.css";
import { AssetRegister } from "../../../http-common";

export default function FirstFloor() {

  const [accordionState, setAccordionState] = useState({
    Chairs: {
      isOpen: false,
      normalChairs: "",
      wheelChairs: "",
    },
    Remote: {
      isOpen: false,
      acRemotes: "",
      fanRemotes: "",
    },
    Pedestals: {
      isOpen: false,
      pedestals: "", // add other fields as needed
    },
    AirConditioners: {
      isOpen: false,
      airConditioners: "", // add other fields as needed
    },
    OtherAssets: {
      isOpen: false,
      laptops: "",
      mouses: "",
      chargers: "",
      bags: "",
    },
    Fans: {
      isOpen: false,
      fans: "",
    },
    Dustbins: {
      isOpen: false,
      dustbins: "",
    },
    Tables: {
      isOpen: false,
      tables: "",
    },
  });
 

  

  const [successMessage, setSuccessMessage] = useState("");

  const resetFormFields = () => {
    setAccordionState((prevState) => ({
      ...prevState,
      Chairs: { isOpen: false, normalChairs: "", wheelChairs: "" },
      Remote: { isOpen: false, acRemotes: "", fanRemotes: "" },
      Pedestals: { isOpen: false, pedestals: "" },
      AirConditioners: { isOpen: false, airConditioners: "" },
      OtherAssets: { isOpen: false, laptops: "", mouses: "", chargers: "", bags: "" },
      Fans: { isOpen: false, fans: "" },
      Dustbins: { isOpen: false, dustbins: "" },
      Tables: { isOpen: false, tables: "" },
    }));
  };

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        isOpen: !prevState[section].isOpen,
      },
    }));
  };

// section1: Chairs
const handleNormalChairsChange = (value) =>{
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) => ({
    ...prevState,
    Chairs:{
      ...prevState.Chairs,
      normalChairs:value,
    },
  }));
};
}
const handleWheelChairsChange = (value) => {
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) => ({
    ...prevState,
    Chairs:{
      ...prevState.Chairs,
      wheelChairs:value,
    },
}));
};
}
//section2: Remote
const handleACRemotesChange = (value)=> {
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) =>({
    ...prevState,
    Remote:{
      ...prevState.Remote,
      acRemotes:value,
    },
  }));
};
}
  const handleFanRemotesChange = (value) =>{
    if (/^\d*$/.test(value) || value === "") {
    setAccordionState((prevState)=> ({
      ...prevState,
      Remote:{
        ...prevState.Remote,
        fanRemotes:value,
      },
  }));
};
  }
//section3: Pedestals
const handlePedestalsChange = (value)=> {
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) =>({
    ...prevState,
    Pedestals:{
      ...prevState.Pedestals,
      pedestals:value,
    },
  }));
}
};
//section4: AirConditioners
const handleAirConditionersChange = (value)=> {
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) =>({
    ...prevState,
    AirConditioners:{
      ...prevState.AirConditioners,
      airConditioners:value,
    },
  }));
}
};
// section5: OtherAssets
const handleLaptopsChange = (value) =>{
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) => ({
    ...prevState,
    OtherAssets:{
      ...prevState.OtherAssets,
      laptops:value,
    },
  }));
}
};
const handleMousesChange = (value) =>{
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) => ({
    ...prevState,
    OtherAssets:{
      ...prevState.OtherAssets,
      mouses:value,
    },
  }));
}
};
const handleChargersChange = (value) =>{
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) => ({
    ...prevState,
    OtherAssets:{
      ...prevState.OtherAssets,
      chargers:value,
    },
  }));
}
};
const handleBagsChange = (value) =>{
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) => ({
    ...prevState,
    OtherAssets:{
      ...prevState.OtherAssets,
      bags:value,
    },
  }));
}
};
//section3: Fans
const handleFansChange = (value)=> {
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) =>({
    ...prevState,
    Fans:{
      ...prevState.Fans,
      fans:value,
    },
  }));
};
}
const handleDustbinsChange = (value)=> {
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) =>({
    ...prevState,
    Dustbins:{
      ...prevState.Dustbins,
      dustbins:value,
    },
  }));
};
}
const handleTablesChange = (value)=> {
  if (/^\d*$/.test(value) || value === "") {
  setAccordionState((prevState) =>({
    ...prevState,
    Tables:{
      ...prevState.Tables,
      tables:value,
    },
  }));
};
}
const handleSubmit = async () => {
  try {
    const requiredFields = [
      accordionState.Chairs.normalChairs,
      accordionState.Chairs.wheelChairs,
      accordionState.Remote.acRemotes,
      accordionState.Remote.fanRemotes,
      accordionState.Pedestals.pedestals,
      accordionState.AirConditioners.airConditioners,
      accordionState.OtherAssets.laptops,
      accordionState.OtherAssets.mouses,
      accordionState.OtherAssets.chargers,
      accordionState.OtherAssets.bags,
      accordionState.Fans.fans,
      accordionState.Dustbins.dustbins,
      accordionState.Tables.tables,
    ];

    if (requiredFields.some(field => field.trim() === "")) {
      throw new Error("All fields are required");
    }
    // Extract data without nested properties
    const dataToSend = {
      ...accordionState.Chairs,
      ...accordionState.Remote,
      ...accordionState.Pedestals,
      ...accordionState.AirConditioners,
      ...accordionState.OtherAssets,
      ...accordionState.Fans,
      ...accordionState.Dustbins,
      ...accordionState.Tables,
    };

    // Send the extracted data to the server
    await AssetRegister(dataToSend,resetFormFields);

    console.log(dataToSend);
    setSuccessMessage("Data posted successfully!");
    resetFormFields();
    // Perform any additional actions after successful submission
  } catch (error) {
    console.error("Error submitting form data:", error.message);
    // Handle errors, display error messages, etc.
  }
};




  
  return (
    <div className="firstfloormain">
      <h4 className="firstfloorheading">1st Floor Assets</h4>
      {/* Section 1: chairs */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Chairs")}>
          {accordionState.Chairs.isOpen ? "1. Chairs  -" : "1. Chairs +"}
        </h6>
        {accordionState.Chairs.isOpen && (
          <table>
            <tr>
              <td>Normal Chairs</td>
              <td>
              <input
                  type="text"
                  value={accordionState.Chairs.normalChairs}
                  onChange={(e) => handleNormalChairsChange(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Wheel Chairs:</td>
              <td>
              <input
                  type="text"
                  value={accordionState.Chairs.wheelChairs}
                  onChange={(e) => handleWheelChairsChange(e.target.value)}
                />
              </td>
            </tr>
          </table>
        )}
      </div>

      {/* Section 2: Remote */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Remote")}>
          {accordionState.Remote.isOpen ? "2. Remotes  -" : "2. Remotes +"}
        </h6>
        {accordionState.Remote.isOpen && (
          <table>
            <tr>
              <td>AC Remotes:</td>
              <td>
              <input
                  type="text"
                  value={accordionState.Remote.acRemotes}
                  onChange={(e) => handleACRemotesChange(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Fan Remotes:</td>
              <td>
              <input
                  type="text"
                  value={accordionState.Remote.fanRemotes}
                  onChange={(e) => handleFanRemotesChange(e.target.value)}
                />
              </td>
            </tr>
          </table>
        )}
      </div>

      {/* Section 3: Pedestals */}
      <div className="form-section">
        <h6>
         3. Pedestals 
        </h6>
        
          <table>
            <tr>
              <td>
            <input
              type="text"
              value={accordionState.Pedestals.Pedestals}
              onChange={(e) => handlePedestalsChange(e.target.value)}
            />
            </td>
            </tr>
         </table>
        
      </div>
      {/* Section 4: AirConditioners */}
      <div className="form-section">
        <h6 >
         
             4. AirConditioners
           
        </h6>
       
        <table>
            <tr>
              <td>
            <input
              type="text"
              value={accordionState.Pedestals.Pedestals}
              onChange={(e) => handleAirConditionersChange(e.target.value)}
            />
            </td>
            </tr>
         </table>
        
         
        
      </div>
      {/* Section 5: OtherAssets */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("OtherAssets")}>
          {accordionState.OtherAssets.isOpen
            ? "5. OtherAssets  -"
            : "5. OtherAssets +"}
        </h6>
        {accordionState.OtherAssets.isOpen && (
          <table>
            <tr>
              <td>Laptops</td>
              <td>
              <input
                  type="text"
                  value={accordionState.OtherAssets.laptops}
                  onChange={(e) => handleLaptopsChange(e.target.value)}
                />
              </td> 
            </tr>
            <tr>
              <td>Mouses:</td>
              <td>
              <input
                  type="text"
                  value={accordionState.OtherAssets.mouses}
                  onChange={(e) => handleMousesChange(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Chargers</td>
              <td>
              <input
                  type="text"
                  value={accordionState.OtherAssets.chargers}
                  onChange={(e) => handleChargersChange(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Bags</td>
              <td>
              <input
                  type="text"
                  value={accordionState.OtherAssets.bags}
                  onChange={(e) => handleBagsChange(e.target.value)}
                />
              </td>
            </tr>
          </table>
        )}
      </div>
      {/* Section 6: Fans */}
      <div className="form-section">
        <h6 >
        6. Fans 
        </h6>
        
           <table>
           <tr>
             <td>
           <input
             type="text"
             value={accordionState.Pedestals.Pedestals}
             onChange={(e) => handleFansChange(e.target.value)}
           />
           </td>
           </tr>
        </table>
       
        
      </div>
      {/* Section 7: Dustbins */}
      <div className="form-section">
        <h6 >
         7. Dustbins 
        </h6>
       
         <table>
         <tr>
           <td>
         <input
           type="text"
           value={accordionState.Pedestals.Pedestals}
           onChange={(e) =>handleDustbinsChange(e.target.value)}
         />
         </td>
         </tr>
      </table>
     
      </div>
      {/* Section 8: Tables */}
      <div className="form-section">
        <h6 >
        8. Tables
        </h6>
       
          <table>
          <tr>
            <td>
          <input
            type="text"
            value={accordionState.Pedestals.Pedestals}
            onChange={(e) =>handleTablesChange(e.target.value)}
          />
          </td>
          </tr>
       </table>
      
      </div>
      <div className="addsubmit">
      {/* <button onClick={handleReset}>Reset</button> */}
      <button onClick={handleSubmit}>Submit</button>
      {successMessage && <div className="success-message">{successMessage}</div>}
      </div>

      </div>
      
    
  );
}
