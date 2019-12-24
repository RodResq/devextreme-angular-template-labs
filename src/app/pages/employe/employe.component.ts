import {Component} from '@angular/core';
import {Employee} from '../../domain/employee';
import {State} from '../../domain/state';
import {EmployeService} from '../../service/employe.service';
import DevExpress from 'devextreme';
import DataSource = DevExpress.data.DataSource;

@Component({
  selector: 'app-row-editing',
  templateUrl: './employe.component.html'
})
export class EmployeComponent {

  public employesDataSource: DataSource;
  public states: State[];
  private emPloyeeNovo: Employee = new Employee();

  constructor( private employeService: EmployeService) {

    this.employeService.getEmployee().subscribe((data) => {
      this.employesDataSource = data || [];

      console.log(this.employesDataSource);
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
