import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {DataGrid} from '@mui/x-data-grid'

import './App.css'

const initialEmployeesList = [
  {
    id: uuidv4(),
    EmployeeId: 1,
    name: 'Ram',
    Designation: 'Developer',
    mobileNo: 987654321,
    Salary: 25000,
  },
]
const columns = [
  {field: 'EmployeeId', headerName: 'ID', width: 100},
  {field: 'name', headerName: 'name', width: 180},
  {field: 'Designation', headerName: 'Designation', width: 160},
  {field: 'mobileNo', headerName: 'mobileNo', width: 160},
  {field: 'Salary', headerName: 'Salary', width: 160},
]

class App extends Component {
  state = {
    EmployeesList: initialEmployeesList,
    EmployeeId: '',
    name: '',
    Designation: '',
    mobileNo: '',
    Salary: '',
  }

  onAddEmployee = event => {
    event.preventDefault()
    const {EmployeeId, name, Designation, mobileNo, Salary} = this.state
    const newEmployee = {
      id: uuidv4(),
      EmployeeId,
      name,
      Designation,
      mobileNo,
      Salary,
    }

    this.setState(prevState => ({
      EmployeesList: [...prevState.EmployeesList, newEmployee],
      EmployeeId: '',
      name: '',
      Designation: '',
      mobileNo: '',
      Salary: '',
    }))
  }

  onChangeEmployeeId = event => {
    this.setState({EmployeeId: event.target.value})
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeDesignation = event => {
    this.setState({Designation: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeSalary = event => {
    this.setState({Salary: event.target.value})
  }

  render() {
    const {EmployeeId, name, Designation, mobileNo, Salary} = this.state
    const {EmployeesList} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Employees Registration</h1>
          <form
            className="Employee-form-container"
            onSubmit={this.onAddEmployee}
          >
            <input
              value={EmployeeId}
              onChange={this.onChangeEmployeeId}
              className="input"
              placeholder="Employee-Id"
              id="employeeId"
              name="EmployeeId"
            />
            <br />
            <input
              value={name}
              onChange={this.onChangeName}
              className="input capitalize"
              placeholder="Name"
              name="Name"
              type="text"
              pattern="[A-za-z\\s]*"
            />
            <br />
            <input
              value={Designation}
              onChange={this.onChangeDesignation}
              className="input capitalize"
              placeholder="Designation"
              name="Designation"
            />
            <br />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
              name="Mobile Number"
              type="text"
              maxLength="10"
              pattern="\d{10}"
            />
            <br />
            <input
              value={Salary}
              onChange={this.onChangeSalary}
              className="input"
              placeholder="Salary"
              name="Salary"
              type="number"
              pattern="\d{10}"
            />
            <br />
            <button type="submit" className="button">
              Save
            </button>
          </form>
          <div style={{height: 400, width: '100%'}}>
            <DataGrid
              rows={EmployeesList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 15, 20]}
              checkboxSelection={false}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
