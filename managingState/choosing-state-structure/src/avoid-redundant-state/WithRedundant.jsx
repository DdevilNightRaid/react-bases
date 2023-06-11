import {useState} from 'react'
export default function WithRedundant(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    // Redundant
    const [fullname, setFullName] = useState('');

    function handleFirstnameChange(name){
        setFirstname(name.target.value);
        setFullName(name.target.value + ' ' + lastname);
    }
    function handleLastnameChange(name){
        setLastname(name.target.value);
        setFullName(firstname + ' ' + name.target.value);
    }
    return (
        <>
            <p>With Redundant</p>
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