import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  // viewUserGrp: FormGroup;
  usersData: User[] = [
    { employeeId: '1', lastName: 'Hydrogen', firstName: 'H' },
    { employeeId: '2', lastName: 'Helium', firstName: 'He' },
    { employeeId: '3', lastName: 'Lithium', firstName: 'Li' },
    { employeeId: '4', lastName: 'Beryllium', firstName: 'Be' },
    { employeeId: '5', lastName: 'Boron', firstName: 'B' },
    { employeeId: '6', lastName: 'Carbon', firstName: 'C' },
    { employeeId: '7', lastName: 'Nitrogen', firstName: 'N' },
    { employeeId: '8', lastName: 'Oxygen', firstName: 'O' },
    { employeeId: '9', lastName: 'Fluorine', firstName: 'F' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
