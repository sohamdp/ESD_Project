import React, {useEffect, useState} from 'react'
import axios from 'axios'
import EmployeeDetails from './EmployeeDetails'

const Main = () => {
// console.log('venky:  ',reply)
const [employees, setEmployee] = useState([])

// -------------------------employee fetch
const loginBaseURL = `http://localhost:8080/api/employee/employee_details`
const employeeFetch = async() => {
      await axios.get(loginBaseURL)
      .then(function (response) {
          console.log("employee details",response.data);
          setEmployee(response.data)
      })
      .catch(function (error) {
          console.log(error);
      });
  }

  // ----------------------------------------------------------------

  useEffect(()=>{
    employeeFetch();
  },[])



  return (
      <div className='bg-dark'>
        <center className='text-light display-6'>Employee Salary Details</center>
        <table className="table table-hover table-bordered " style={{
                        textAlign:"center",alignContent:"center"
                      }}>
          <thead className='table-primary'>
            <tr>
              
              <th>
                <div className="form-check">
                  <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="" 
                  id="flexCheckDefault" 
                  checked
                  />
                </div>
              </th>
              <th scope='row'>Employee_Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Salary</th>
              <th>Modify_Salary</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody className='table-success'> 
          {
            employees.map( e =>
              <EmployeeDetails
              {...e}
              key={e.employee_id}
              />
            )
            
          }
          
          </tbody>
         

        </table>

        
      </div>
    )
  }
  export default Main
