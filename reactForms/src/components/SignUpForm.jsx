import {useState} from "react";



export default function SignUpForm() {
  
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handleSubmit(event) {
  event.preventDefault();
  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
      method: 'POST', // Specify the method
      headers: {
        'Content-Type': 'application/json' }, // Specify the content type
      body: JSON.stringify({
        username: username, // Send the username and password to the body
        password: password
      })
    });
    const result = await response.json(); // Parse the JSON response
    console.log(result); // Log the result
  } catch (error) {
    setError("Error signing up. Please try again."); // Set the error message
  }
}
  return (
    
    <>
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>Username:
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </label>
      <label>Password: 
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </label>
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}

    </form>
    </>
  );
}