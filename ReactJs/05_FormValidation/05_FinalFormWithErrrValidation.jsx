import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [errors, setErrors] = useState({});

  // Handles all input fields
  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits";
    }

    // Address validation
    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    // City validation
    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    // State validation
    if (!form.state) {
      newErrors.state = "Please select a state";
    }

    // PIN code validation
    if (!form.pincode.trim()) {
      newErrors.pincode = "PIN code is required";
    } else if (!/^\d{6}$/.test(form.pincode)) {
      newErrors.pincode = "PIN code must contain exactly 6 digits";
    }

    // Store all validation errors
    setErrors(newErrors);

    // Stop submission if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Form is valid
    console.log("Form submitted:", form);

    alert("Address saved successfully!");
  }

  return (
    <div>
      <h1>Address Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && <p>{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter 10-digit phone number"
          />

          {errors.phone && <p>{errors.phone}</p>}
        </div>

        {/* Address */}
        <div>
          <label>Address</label>

          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />

          {errors.address && <p>{errors.address}</p>}
        </div>

        {/* City */}
        <div>
          <label>City</label>

          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />

          {errors.city && <p>{errors.city}</p>}
        </div>

        {/* State */}
        <div>
          <label>State</label>

          <select
            name="state"
            value={form.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="Assam">Assam</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Tripura">Tripura</option>
            <option value="West Bengal">West Bengal</option>
          </select>

          {errors.state && <p>{errors.state}</p>}
        </div>

        {/* PIN Code */}
        <div>
          <label>PIN Code</label>

          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Enter 6-digit PIN code"
          />

          {errors.pincode && <p>{errors.pincode}</p>}
        </div>

        <button type="submit">
          Save Address
        </button>
      </form>
    </div>
  );
}

export default App;