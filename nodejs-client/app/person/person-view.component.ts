import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PersonService } from './person.service';

@Component({
    selector: 'person--view',
    templateUrl: 'app/person/person-view.component.html',
    styleUrls: ['app/person/person.component.css']
})
export class PersonViewComponent implements OnInit {

    private person: any;

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

    public gotoEdit() {
        this.router.navigate(["/persons", this.person.id, "edit"]);
    }

    public get(id: string){
      this.personService.get(id).subscribe(
            ret => this.person = ret,
            error => console.log("error")
        )
    }
}