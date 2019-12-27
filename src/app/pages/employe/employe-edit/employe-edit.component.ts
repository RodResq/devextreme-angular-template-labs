import {Component} from '@angular/core';
import {EmployeService} from '../../../service/employe.service';
import DevExpress from 'devextreme';
import DataSource = DevExpress.data.DataSource;
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employe-component',
  templateUrl: './employe-edit.component.html',
  styleUrls: ['./employe-edit.component.scss']
})
export class EmployeEditComponent {
  employeDataSource: DataSource
  private id: number;

  checkoutForm: any;

  constructor(
    private employeeService: EmployeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployById(this.id).subscribe((data) => {
      this.employeDataSource = data || [];
    });
    this.checkoutForm = this.formBuilder.group({
      // firsName: this.employeDataSource;
    });
  }

  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true
  }

  onSubmitEmploye(value: any) {
    console.log(value);
  }
}
