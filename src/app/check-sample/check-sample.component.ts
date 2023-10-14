import { Component,
OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
 } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent 
implements OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit
{

constructor(){}  




  ngAfterViewInit(): void {
    console.log('Method not implemented ngAfterViewInit.');
  }
  ngAfterViewChecked(): void {
    console.log('Method not implemented. ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('Method not implemented.ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Method not implemented.ngAfterContentChecked');
  }

ngDoCheck(): void {
  console.log('ngDocheck')
}

ngOnInit(): void {
  console.log("NgInit")
}

}
