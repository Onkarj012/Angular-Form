import { Component } from '@angular/core';
@Component({
  selector: 'app-tdf',
  standalone: false,
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
name: any;

  save(formData:any){
    console.log(formData);
  }

}