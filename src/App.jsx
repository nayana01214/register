import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    address: '',
    fathername: '',
    mothername: '',
    city: '',
    state: '',
    country: '',
    college: '',
    sem: '',
    skill: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Name:</label><br />
          <input name="name" value={formData.name} onChange={handleChange} style={{ width: '100%' }} />
        </div>

        <div>
          <label>Gender:</label><br />
          <select name="gender" value={formData.gender} onChange={handleChange} style={{ width: '100%' }}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label>Age:</label><br />
          <input type="number" name="age" value={formData.age} onChange={handleChange} style={{ width: '100%' }} />
        </div>

        <div>
          <label>Father's Name:</label><br />
          <input name="fathername" value={formData.fathername} onChange={handleChange} style={{ width: '100%' }} />
        </div>

        <div>
          <label>Mother's Name:</label><br />
          <input name="mothername" value={formData.mothername} onChange={handleChange} style={{ width: '100%' }} />
        </div>

        <div>
          <label>City:</label><br />
          <select name="city" value={formData.city} onChange={handleChange} style={{ width: '100%' }}>
            <option value="">Select</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </select>
        </div>

        <div>
          <label>State:</label><br />
          <select name="state" value={formData.state} onChange={handleChange} style={{ width: '100%' }}>
            <option value="">Select</option>
            <option>Tamil Nadu</option>
            <option>West Bengal</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
          </select>
        </div>

        <div>
          <label>Country:</label><br />
          <select name="country" value={formData.country} onChange={handleChange} style={{ width: '100%' }}>
            <option value="">Select</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div>

        <div>
          <label>College:</label><br />
          <select name="college" value={formData.college} onChange={handleChange} style={{ width: '100%' }}>
            <option value="">Select</option>
            <option>IIT Delhi</option>
            <option>IIT Pune</option>
            <option>IIT Tiruchirappalli</option>
            <option>GAT</option>
            <option>NITK</option>
          </select>
        </div>

        <div>
          <label>Semester:</label><br />
          <select name="sem" value={formData.sem} onChange={handleChange} style={{ width: '100%' }}>
            <option value="">Select</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num}>{num}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Skill:</label><br />
          <select name="skill" value={formData.skill} onChange={handleChange} style={{ width: '100%' }}>
            <option value="">Select</option>
            <option>Python</option>
            <option>Java</option>
            <option>C++</option>
            <option>C</option>
            <option>DBMS</option>
            <option>Full Stack</option>
            <option>Cloud Computing</option>
            <option>Machine Learning</option>
          </select>
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
