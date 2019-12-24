import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../domain/employee';
import {EmployeService} from '../../../service/employe.service';
import DevExpress from 'devextreme';
import DataSource = DevExpress.data.DataSource;
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-row-editing',
  templateUrl: './employe-list.component.html'
})
export class EmployeListComponent implements OnInit {
  public employesDataSource: DataSource;

  private emPloyeeNovo: Employee = new Employee();
  constructor(
    private employeService: EmployeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employeService.getEmployee().subscribe((data) => {
      this.employesDataSource = data || [];
    });

  }

  detail(id: number) {
    this.router.navigate([id], {relativeTo: this.activatedRoute});
    console.log('test');
  }

  addNewEmploye() {
    console.log();
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
