import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Clients } from "../../services/content";
import { ContentService } from "../../services/content.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
    $clients: Observable<Clients[]>;

    constructor(private contentService: ContentService) {
    }

    ngOnInit() {
        this.getClients();
    }


    getClients(): void {
        this.$clients = this.contentService.getClients();
    }
}
