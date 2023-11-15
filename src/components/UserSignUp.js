import React from "react";

const UserSignUp = () => {
  // initialize user sign up fields using state management
  const [userData, setUserData] = React.useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  // code to process the entire form when the submit button is clicked
  function processSubmit(e) {
    e.preventDefault();
    console.log(userData);
  }

  // code to update the userData fields (all but those within the address object)
  function processUserDataUpdate(e) {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  }

  return (
    <div>
      <h1>Sign Up Now</h1>
      <form onSubmit={processSubmit}>
        {/* Full name input */}
        <label htmlFor="fullNameInput">Enter your full name: </label>
        <input
          className="textInput"
          id="fullNameInput"
          type="text"
          placeholder="e.g. John Doe"
          name="fullName"
          value={userData.fullName}
          onChange={processUserDataUpdate}
        />

        <br />

        {/* Username input */}
        <label htmlFor="usernameInput">Enter your desired username: </label>
        <input
          className="textInput"
          id="usernameInput"
          type="text"
          placeholder="e.g. jdoe"
          name="username"
          value={userData.username}
          onChange={processUserDataUpdate}
        />

        <br />

        {/* Email input */}
        <label htmlFor="emailInput">Enter your email: </label>
        <input
          className="textInput"
          id="emailInput"
          type="email"
          placeholder="e.g. johndoe@email.com"
          name="email"
          value={userData.email}
          onChange={processUserDataUpdate}
        />

        <br />

        {/* Address input */}

        <label htmlFor="addressInput">Enter your address: </label>
        <input
          className="textInput"
          id="addressInput"
          type="text"
          placeholder="e.g. 123 Street, City, State Zipcode"
          name="address"
          value={userData.address}
          onChange={processUserDataUpdate}
        />

        <br />

        {/* Phone number input */}
        <label htmlFor="phoneNumberInput">Enter your phone number: </label>
        <input
          className="textInput"
          id="phoneNumberInput"
          type="text"
          placeholder="e.g. 123-456-7890"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={processUserDataUpdate}
        />

        <br />
        <br />
        {/* Submit button for the form */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserSignUp;
