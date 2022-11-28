import React, { useState } from 'react'
import axios from 'axios'

const EmployeeDetails = ({ employee_id, fname, lname, email, title, salary, status }) => {


    //---------modify employee salary details---------//
    var reply = JSON.parse(window.localStorage.getItem('loginuser')) 
//   console.log("from local storage at app js", reply)

    const [modifiedsalary, setSalary] = useState('')
    const loginBaseURL = `http://localhost:8080/api/employee/Modify_salary_details`
    const modify = (event) => {
        event.preventDefault();
        modifySalary();
    }
    const parameters={
        employee_id, salary: parseFloat(modifiedsalary)
    }
    const modifySalary = async() => {
        console.log(parameters)
        await axios.post(loginBaseURL, parameters)
        .then(function (response) {
            console.log(response.data);
            window.localStorage.setItem('usersalary',JSON.stringify(response.data))
            window.location.reload(true)
            // var reply = JSON.parse(window.localStorage.getItem('loginuser'))
            // console.log("from local storage", reply)
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    //--------------------------------------------------//

    //--------------disburseSalary details--------------//

    const [employee_details ,setEmployeeDetails]=useState({})

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const description=`Salary of the${current.getMonth()} month suceessfully credited to your account`;

    const collectinfo = (event) =>
    {
        const info={
            employee_id,date,salary,description
        }
        setEmployeeDetails(info)
        console.log(info)

    }
    // console.log("from local storage at employeeDetails js", reply.employee_id)  
    if(employee_id===reply.employee_id){
        return null;
    }
    else{
    return (

        <tr>
            <td>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={collectinfo}
                    />
                </div>
            </td>
            <td>{employee_id}</td>
            <td>{fname} {lname}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{salary}</td>
            <td>    
                <div>
                <input  className="form-control" id="ex1" placeholder="Salary" type="text" style={{width:"150px"}} onChange={event => setSalary(event.target.value)}/>
                </div>
            </td>
            <td>
                <button type="button" className="btn btn-secondary" onClick={modify}>modify</button>
            </td>
        </tr>

    )
    }
}
export default EmployeeDetails