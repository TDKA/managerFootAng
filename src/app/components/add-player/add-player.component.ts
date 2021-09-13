import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  createShort(firstName: string, lastName: string, poste: string) {
    this.http.post('https://secret-shore-74426.herokuapp.com/footapi/create', {
      firstName: firstName,
      lastName: lastName,
      poste: poste

    }).subscribe(data => {
      console.log(data);
      this.router.navigate([''])
    })

  }

}
