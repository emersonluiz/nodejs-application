import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from './person.service';

@Component({
    selector:'person-register',
    templateUrl: 'app/person/person-register.component.html',
    styleUrls: ['app/person/person.component.css']
})
export class PersonRegisterComponent {

    private person: any = {firstName: '', lastName:'', email:''};

    constructor(private router: Router, private personService: PersonService) {}

    public gotoHome() {
        this.router.navigate(["/"]);
    }

    public gotoList() {
        this.router.navigate(["/persons"]);
    }

    public save() {
        this.personService.post(this.person).subscribe(
            ret => this.gotoList(),
            error => console.log("error")
        )
    }

}