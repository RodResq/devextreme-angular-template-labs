import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: Object;

  constructor() {
    this.employee = {
      ID: 7,
      firstName: 'Sandra',
      lastName: 'Johnson',
      prefix: 'Mrs.',
      position: 'Controller',
      Picture: 'images/employees/06.png',
      birthDate: new Date('1974/11/15'),
      hireDate: new Date('2005/05/11'),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
      address: '4600 N Virginia Rd.'
    };
  }
}
