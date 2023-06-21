import { useEffect, useState } from "react";
import "./controlled-uncontrolled.style.css";
function ControlledUncontrolled() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const submitControlledForm = (event)=>{
        event.preventDefault();
        console.log(`value from form 1 is ${name}, ${password}`)
    }
    const submitUncontrolledForm = (event)=>{
        event.preventDefault();
        console.log(`value from form 2 is ${window.username.value}, ${window.password.value}`)
    }
    useEffect(()=>{
        console.log('component is modified');
    });
  return (
    <>
    <table>
        <thead>
            <tr>
                <th> Controlled Form</th>
                <th> Uncontrolled Form</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <form>
                        <p><label>Enater name</label><input onChange={(e)=>setName(e.target.value)} type="text"/></p>
                        <p><label>Enater password</label><input onChange={(e)=>setPassword(e.target.value)} type="password"/></p>
                        <p><button onClick={submitControlledForm}>Click me to submit</button></p>
                    </form>
                </td>
                <td>
                    <form>
                    <p><label>Enater name</label><input id="username" type="text"/></p>
                    <p><label>Enater password</label><input id="password" type="password"/></p>
                    <button onClick={submitUncontrolledForm}>Click me to submit</button>
                    </form>
                </td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default ControlledUncontrolled