import React, { useState } from "react";
import "./ClientRegistration.css";
import { client } from "../../../../http-common";
 
export default function ClientRegistration() {
  const [clientId, setClientId] = useState("");
  const [date, setDate] = useState("");
  const [clientName, setClientName] = useState("");
  const [webSite, setWebSite] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [whoInvolved, setWhoInvolved] = useState("");
  const [remark, setRemark] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      clientId,
      date,
      clientName,
      webSite,
      contactPerson,
      contactNo,
      emailId,
      meetingTime,
      whoInvolved,
      remark,
      successMessage,
      errorMessage,
    };
 
    try {
      // Using the clientDetails function from http-common.js
      await client(
        formData,
        setSuccessMessage,
        resetFormFields,
        setErrorMessage
      );
    } catch (error) {
      setErrorMessage(
        error.response?.data.message ||
          "Failed to connect to the server. Please try again later."
      );
    }
  };
 
  const resetFormFields = () => {
    setClientId("");
    setDate("");
    setClientName("");
    setWebSite("");
    setContactPerson("");
    setContactNo("");
    setEmailId("");
    setMeetingTime("");
    setWhoInvolved("");
    setRemark("");
  };
 
  return (
    <div className="clientmain">
      <h4 className="heading">Client Registration</h4>
 
      {/* Section: Registration */}
      <div className="form-section">
        <form onSubmit={handleFormSubmit}>
          {/* ... (existing code for form inputs) */}
<div className="firstsix">
 
<div className="leftcol">
          <label htmlFor="clientId">Client ID</label>
          <input
            type="text"
            name="clientId"
            id="clientId"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            pattern="[0-9]*"
            title="client ID must contain only numbers"
            required
           
          />
           {clientId && !/^[0-9]*$/.test(clientId) && (
                <p className="error-message">Please enter numbers only</p>
              )}
         
         
 
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            pattern="[0-9]*"
            title="date must contain only numbers"
            required
          />
         
  

 
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            name="clientName"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            pattern="[A-Za-z\s]+"
            title="Client Name must contain only letters"
            required
          />
          {clientName && !/^[A-Za-z\s]+$/.test(clientName) && (
  <p className="error-message">Please enter letters only</p>
)}
         
 
           <label htmlFor="webSite">Website</label>
           <input
             type="text"
             name="webSite"
             id="webSite"
             value={webSite}
             onChange={(e) => setWebSite(e.target.value)}
             pattern="https?://.+"
             title="Please enter a valid website URL starting with http:// or https://"
  required
         />
{webSite && !/^https?:\/\/.*/.test(webSite) && (
    <p className="error-message">Please enter a valid website URL starting with http:// or https://</p>
  )}
 
 
           <label htmlFor="contactPerson">Contact Person</label>
           <input
             type="text"
             name="contactPerson"
             id="contactPerson"
             value={contactPerson}
             onChange={(e) => setContactPerson(e.target.value)}
             pattern="[A-Za-z\s]+"
            title="contact person must contain only letters"
            required
           />
           {contactPerson && !/^[A-Za-z\s]+$/.test(contactPerson) && (
    <p className="error-message">Contact person must contain only letters</p>
  )}
 
 
          </div>
 
          <div className="rightcol">
          <label htmlFor="contactNo">Contact No</label>
            <input
              type="number"
              name="contactNo"
              id="contactNo"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}" // Example pattern for xxx-xxx-xxxx format
              title="Please enter a valid contact number in the format xxxxxxxxxx"
              required
            />
            {contactNo && !/^[0-9]{10}$/.test(contactNo) && (
    <p className="error-message">Please enter a valid contact number in the format xxxxxxxxxx</p>
  )}
 
              <label htmlFor="emailId">Email ID</label>
              <input
                type="text"
                name="emailId"
                id="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" // Basic email pattern
  title="Please enter a valid email address"
  required
                />
                {emailId && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailId) && (
  <p className="error-message">Please enter a valid email address</p>
)}
 
              <label htmlFor="meetingTime">Meeting Time</label>
              <input
                type="time"
                name="meetingTime"
                id="meetingTime"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
                pattern="[0-9]*"
            title="meeting time must contain only numbers"
            required
               />
              
               <label htmlFor="whoInvolved">Who Involved</label>
               <input
                 type="text"
                 name="whoInvolved"
                 id="whoInvolved"
                 value={whoInvolved}
                 onChange={(e) => setWhoInvolved(e.target.value)}
                 pattern="[A-Za-z\s]+"
            title="whoInvolved must contain only letters"
            required
               />
               {whoInvolved && !/^[A-Za-z\s]+$/.test(whoInvolved) && (
  <p className="error-message">Who Involved must contain only letters</p>
)}
 
               <label htmlFor="remark">Remark</label>
               <input
                 type="text"
                 name="remark"
                 id="remark"
                 value={remark}
                onChange={(e) => setRemark(e.target.value)}
                pattern="[A-Za-z0-9]+"
                title="remark must contain only letters and numbers"
                required
              />
              {remark && !/^[A-Za-z0-9]+$/.test(remark) && (
  <p className="error-message">Remark must contain only letters and numbers</p>
)}
 
          </div>
</div>
         
 
       
 
           
 
          <button type="submit" className="clientsubmit">Submit</button>
        </form>
      </div>
      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}