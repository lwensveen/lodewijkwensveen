import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Content } from "../../services/content";
import { ContentService } from "../../services/content.service";

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
    $content: Observable<Content[]>;

    constructor(private contentService: ContentService) {
    }

    ngOnInit() {
        this.getContent();
    }


    getContent(): void {
        this.$content = this.contentService.getContent();
    }

    public byId(index, content) {
        if(!content) return null;
        return content.id
    }

}
