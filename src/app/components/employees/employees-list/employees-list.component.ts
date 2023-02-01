import { Component, OnInit } from '@angular/core';
import { IEmployee } from "src/app/components/employees/models/employee.model"
import {EmployeesService} from "../../../services/employees.service";

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.css"]
})
export class EmployeesListComponent implements OnInit{
  employees: IEmployee[] = [];
    //{
    //  id: 1,
    //  name: 'Teja',
    //  address: 'teja@email.com',
    //  phone: 123,
    //  startDate:'01/10/2022',
    //  endDate:'01/15/2022',
    //  status: 1
    //},
    //{
    //  id: 2,
    //  name: 'KT',
    //  address: 'kt@email.com',
    //  phone: 113,
    //  startDate:'01/10/2022',
    //  endDate:'01/20/2022',
    //  status:0
    //}


  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (respose) => {
        console.log(respose);
      }
    })
  }
}
