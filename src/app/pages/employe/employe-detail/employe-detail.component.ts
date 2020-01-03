import {Component, OnInit} from '@angular/core';
import {EmployeService} from '../../../service/employe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../../../domain/employee';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class  EmployeDetailComponent implements OnInit {

  employe: Employee = new Employee();
  private id: any;

  constructor(
    private employeService: EmployeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getEmployeByID(this.id);
  }

  getEmployeByID(id: number) {
    return this.employeService.getEmployById(id).subscribe((data) => {
      this.employe = data;
    });
  }

  back() {
    this.router.navigateByUrl('/employes');
  }

  edit() {
    this.router.navigateByUrl('/employes/edit/' + this.id);
  }


}
