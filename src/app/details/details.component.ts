import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
password = "Secret Password = Tuna"
revealed = false
clicks: any[] = []
logItem = 0



  ngOnInit(): void {
  }

  onToggleDetails() {
    this.revealed = !this.revealed
    this.clicks.push(this.clicks.length + 1)
  }
}
