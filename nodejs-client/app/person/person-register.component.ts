import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PersonService } from './person.service';

@Component({
    selector:'person-register',
    templateUrl: 'app/person/person-register.component.html',
    styleUrls: ['app/person/person.component.css']
})
export class PersonRegisterComponent implements OnInit {

    private person: any = {firstName: '', lastName:'', email:''};

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private personService: PersonService) {}

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params['id'];
            if (id) {
                this.get(id);
            }
        })
    }

    public gotoHome() {
        this.router.navigate(["/"]);
    }

    public gotoList() {
        this.router.navigate(["/persons"]);
    }

    public save() {
        if (this.person.id) {
            this.personService.put(this.person).subscribe(
                ret => this.gotoList(),
                error => console.log("error")
            )
        } else {
            this.personService.post(this.person).subscribe(
                ret => this.gotoList(),
                error => console.log("error")
            )
        }
    }

    public get(id: string) {
        this.personService.get(id).subscribe(
            ret => this.person = ret,
            error => console.log("error")
        )
    }

}