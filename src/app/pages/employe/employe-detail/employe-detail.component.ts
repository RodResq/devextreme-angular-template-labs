import {Component, OnInit} from '@angular/core';
import {EmployeService} from '../../../service/employe.service';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../../../domain/employee';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html'
})
export class  EmployeDetailComponent implements OnInit {

  employe: Employee = new Employee();
  private id: any;

  constructor(
    private employeService: EmployeService,
    private activatedRoute: ActivatedRoute) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getEmployeByID(this.id);
  }

  getEmployeByID(id: number) {
    return this.employeService.getEmployById(id).subscribe((data) => {
      this.employe = data;
    });
  }

}
