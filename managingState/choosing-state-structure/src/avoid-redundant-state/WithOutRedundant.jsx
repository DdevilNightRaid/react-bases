import {useState} from 'react'
export default function WithRedundant(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    // !Redundant
    const fullname = `${firstname} ${lastname}`

    function handleFirstnameChange(name){
        setFirstname(name.target.value);
    }
    function handleLastnameChange(name){
        setLastname(name.target.value);
    }
    return (
        <>
            <p>Without Redundant</p>
            <h1>Let&apos;s check you in: </h1>
            <form action="">
                <label htmlFor="firstname">First Name</label>
                <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={e=>{handleFirstnameChange(e)}}
                />
                <br />
                <label htmlFor="lastname">Last Name</label>
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={e=>{handleLastnameChange(e)}}
                />
                <br />
                <strong>Your ticket will be issued to: {fullname}</strong>
            </form>
        </>
    )
}