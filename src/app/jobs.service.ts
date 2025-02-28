import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { JobDetail } from './jobs.interface';


@Injectable({
  providedIn: 'root'
})
export class JobsService {
  // get url  https://hacker-news.firebaseio.com/v0/jobstories.json
  private joburl = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
  private jobdetail = 'https://hacker-news.firebaseio.com/v0/item/35908337.json'
  public interestedJobsSubject =  new BehaviorSubject<JobDetail[]>([]);
  interestedJobs = this.interestedJobsSubject.asObservable();


  constructor(
    private http: HttpClient
  ) { }
  // get job id
  fetchJobsIds(): Observable<string[]> {
    return this.http.get<string[]>(this.joburl)
  }


  fetchJos(jobsId:string): Observable<JobDetail> {
    return this.http.get<JobDetail>(`https://hacker-news.firebaseio.com/v0/item/${jobsId}.json`)
  }

  sendJobsToInterested(job:JobDetail){
    this.interestedJobsSubject.next(this.interestedJobsSubject.value.concat(job));
  }

  removeFromInterestedJobs(jobsId:number){
    this.interestedJobsSubject.next(this.interestedJobsSubject.getValue().filter(job => job.id !== jobsId));
  }

  
}
