import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DownloadsService } from '../services/downloads.service';
import {Downloads} from '../model/downloads.model';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.html'
})
export class DownloadsComponent implements OnInit {
  os: string;
  downloads: Downloads[];

  constructor(private route: ActivatedRoute, private downloadsService: DownloadsService) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      this.os = fragment || 'windows';
    });

    this.downloadsService.getDownloads().subscribe((downloads: Downloads[]) => {
      this.downloads = downloads;
      //console.log(this.downloads);
    });
  }

}
