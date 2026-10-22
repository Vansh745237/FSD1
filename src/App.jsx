import React from 'react'

const App = () => {
  const[formData,setformData]=useState({
    name:"",
    email:"",
    password:""
  })
  useEffect(()=>{
    console.log("form Data update", formData);
  },[formData])

  const handlechange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    alert("registration sucessfully");
    console.log( formData)
  }
  return (
    <div>
      <form action="" on>
        <input type="text" name='name' placeholder='enter name' value={formData.name} onChange={handlechange}/>
        <br />
        <input type="email" name='email' placeholder='enter email' value={formData.email} onChange={handlechange}/>
        <br />
        <input type="password" name="password" placeholder='enter password' value={formData.password} onChange={handlechange}/>
        <br />
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default App