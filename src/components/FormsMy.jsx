import { useState } from "react";

function FormsMy() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Submitted:", formData);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" />
      {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
      
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />
      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormsMy;
