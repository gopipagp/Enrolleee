import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EnrolleesService } from '../services/enrollees.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.sass']
})

export class UserComponent implements OnInit {

    editableUser: User;
    @Input() user: User;
    constructor(private modalService: NgbModal, private enrolleeService: EnrolleesService) {}

    ngOnInit(): void {
        this.editableUser = this.user;
    }

    open(content) {
        this.modalService.open(content).result.then((value) => {
        })
    }

    changeName(event) {
        this.editableUser.name = event.target.value;
    }

    changeActive(event) {
        this.editableUser.active = event.target.checked;
    }

    saveUser(modal){
        this.enrolleeService.updateEnrollee(this.editableUser).subscribe(data => {
            this.modalService.dismissAll();
        });
        modal.close();
    }
}
