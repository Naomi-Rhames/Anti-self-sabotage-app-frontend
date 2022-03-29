import {useState} from 'react'


function Auth(props){

    // const [signup, setSignup] = useState(false)
    const [password, setPassword] = useState("")
    const [profilePhoto, setprofilePhoto] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")

    const handleSubmit = (e) => {
        e.preventDefualt()
    }
    function handleUpload(e){
        console.log(e)
        setprofilePhoto(e.target.profilePhoto[0]);
    }
    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} />;
      };

    return <>
    <form onChange={handleSubmit}>
     <label>
      Profile Photo:
        <div id="upload-box">
        <input type="file" onChange={handleUpload}/>
        {profilePhoto && <ImageThumb image={profilePhoto} />}
        </div>
    </label><br></br>
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