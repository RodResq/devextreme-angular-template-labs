import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../domain/employee';
import {State} from '../../../domain/state';
import {EmployeService} from '../../../service/employe.service';
import DevExpress from 'devextreme';
import DataSource = DevExpress.data.DataSource;

@Component({
  selector: 'app-row-editing',
  templateUrl: './employe-list.component.html'
})
export class EmployeListComponent implements OnInit{
  public employesDataSource: DataSource;

  private emPloyeeNovo: Employee = new Employee();
  constructor( private employeService: EmployeService) {
  }

  ngOnInit(): void {
    this.employeService.getEmployee().subscribe((data) => {
      this.employesDataSource = data || [];
    });

  }

  addNewEmploye() {
    console.log('new employee adding');
  }

  insertingNewEmployee() {
    console.log('new employee inserting now');
  }

  insertedEmployee(e: Employee) {
    this.emPloyeeNovo = e;
  }

  startEditing() {
    console.log('start editing');
  }

  updatingRow() {
    console.log('updating row');
  }

  updatedRow(e) {
    console.log(e);
  }
}
