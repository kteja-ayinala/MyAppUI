import { Component, OnInit } from '@angular/core';
import { IEmployee } from "src/app/components/employees/models/employee.model"
import { EmployeesService } from "../../../services/employees.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  addEmployeeRequest: IEmployee = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    startDate: '',
    endDate: '',
    status:0
  };
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void { }

  addEmployee() {
    this.employeesService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {
        console.log(employee);
      }
    })
  }
}
