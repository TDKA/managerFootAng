import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.component.html',
  styleUrls: ['./footballer.component.css']
})
export class FootballerComponent implements OnInit {

  players: any = [];

  constructor(private http: HttpClient) { }

  findAll() {
    this.http.get('https://secret-shore-74426.herokuapp.com/footapi/')
      .subscribe(playersData => {
        this.players = playersData;
      });
  }

  deletePlayer(id: number) {
    this.http.delete('https://secret-shore-74426.herokuapp.com/footapi/delete/' + id).subscribe(data => {
      console.log(data);
      this.findAll();
    });
  }


  ngOnInit(): void {
    this.findAll()
  }

}
