import { Component, OnInit } from '@angular/core';
import { JobDetail } from '../jobs.interface';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-interested-jobs-board',
  standalone: false,
  templateUrl: './interested-jobs-board.component.html',
  styleUrl: './interested-jobs-board.component.scss'
})
export class InterestedJobsBoardComponent implements OnInit {
  displayInterestedJobs: JobDetail[] =[];


  constructor(private jobservice: JobsService) {}
  ngOnInit(): void {
    this.jobservice.interestedJobs.subscribe(jobs => {
      this.displayInterestedJobs = jobs;
    });
  }

  removeInterested(jobId:number):void{
    this.jobservice.removeFromInterestedJobs(jobId);
  }


}
