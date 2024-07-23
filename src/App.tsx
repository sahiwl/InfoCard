import { ChangeEvent, useState } from 'react'
import './App.css'
import { Card } from './Components/Card'
export const MultiInputForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      {/* Submit button and other inputs */}

      <button type="submit" style={{ margin: '8px 0', padding: '10px' }}>
        Submit
      </button>
    </form>

  );
}


function App() {
  return (
    <Card/>
    // <MultiInputForm />
  )
}

export default App
