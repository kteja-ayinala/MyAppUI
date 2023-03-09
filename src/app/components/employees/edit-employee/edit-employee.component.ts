import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';
import { IEmployee } from '../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{


  employeeDetails: IEmployee = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    startDate: '',
    endDate: '',
    status: 0
  };
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeService.getEmployee(id)
            .subscribe({
              next: (response) => {
                this.employeeDetails = response;
              }
            });
        }
      }
    })
  }


}
