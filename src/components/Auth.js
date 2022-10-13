import {useState} from 'react'
// import { useForm } from 'react-hook-form'
import { useFileUpload} from 'use-file-upload'

function Auth(props){

    const [signup, setSignup] = useState(false)
    const [password, setPassword] = useState("")
    const [profilePhoto, setprofilePhoto] = useFileUpload()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")

    // const toggleSignup = () => setSignup(!signup)
    
    // const handleSubmit = (e) => {
    //   e.preventDefault()
    //   signup ? props.setSignup({ profilePhoto, username, email, bio, passward }) 

    // }
   
    const defaultSrc =
    "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";

    return <>
    <form onChange={handleSubmit}>
    <div id="app">
      <img src={profilePhoto?.source || defaultSrc} alt="preview"/>
      <button
        onClick={() =>
          setprofilePhoto({ accept: "image/*" }, ({ name, size, source, profilePhoto}) => {
            console.log("Files Selected", { name, size, source, profilePhoto });
          })
        }
      >
        Upload Profile Picture
      </button><br/>
    </div><br/>
    <label>
     Username:
     <input type="text" name="username" placeholder='Enter Username' value={username}  onChange={(e) => setUsername(e.target.value)}/><br/>
     </label><br/>
     <label>
       Email:
     <input type="email" name="email" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/><br/>
     </label><br/>
    <i><label>
        Bio:
         <textarea type="text" name="name" placeholder='Tell people about yourself!' value={bio} onChange={(e) => setBio(e.target.value)}/><br/>
     </label></i><br/>
     <label>
        Password:
         <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
       </label>
       <input type="submit" value="Submit"/>
    </form>
    </>


}

export default Auth;