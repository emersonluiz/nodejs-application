import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from './person.service';

@Component({
    selector: 'person-list',
    templateUrl: 'app/person/person-list.component.html',
    styleUrls: ['app/person/person.component.css']
})
export class PersonListComponent {

    private persons = [];

    constructor(private router: Router, private personService: PersonService) {
        this.list();
    }

    public gotoHome() {
        this.router.navigate(["/"]);
    }

    public gotoView(id: string) {
        this.router.navigate(["/persons/"+id]);
    }

    public gotoRegister() {
        this.router.navigate(["/persons-register"]);
    }

    public list(){
      this.personService.list().subscribe(
            ret => this.persons = ret,
            error => console.log("error")
        )
    }

}