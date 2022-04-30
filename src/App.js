
import './App.css';
import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './firebaseConfig';


const App = () => {
    let auth=getAuth(app);
    const [email, setEmail] = React.useState("");//Another Way of importing React Hooks without importing in top by using React.useState()
    const [pass, setpass] = React.useState("");//Another Way of importing React Hooks without importing in top by using React.useState()
    const [data, setdata] = React.useState([]);//Another Way of importing React Hooks without importing in top by using React.useState()
    
    const submitForm = (e) => {
        e.preventDefault();
        if(email&&pass){
         
          const newdata = { email, pass};
       
        setdata([...data, newdata]);
        // console.log(data);
       
        setEmail("");
        setpass("");
    }
    else
    alert("Please fill all the fields");
}
      const Submitted = () => {
        createUserWithEmailAndPassword(auth,data.email,data.pass).then(() => {
          console.log("User Created");
        })
        .catch(err => {
          alert(err.message);
        });
      };

    return (
      <>
      <h1>Need to check if this is reflecting or not </h1>
  <form action='' onSubmit={submitForm}>
  <div>
      <label htmlFor='email'>Email</label>
      <input type="Text" name='email' id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div>
      <label htmlFor='password'>Password</label>
      <input type="Text" name='password' id='password' value={pass} onChange={(e) =>setpass(e.target.value)}/>
  </div>
    <button type='submit' onClick={Submitted}>Login</button>
  </form>
  <div>
    {data.map((item) => {
        return (
            <div key={item.id}>
                <p>{item.email}</p>
                <p>{item.pass}</p>
            </div>
        )
    })}
  </div>
  </>
  )
};

export default App