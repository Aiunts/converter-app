import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  public UAHtoEUR: number = 0
  public UAHtoUSD: number = 0

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get('http://api.exchangeratesapi.io/v1/latest?access_key=421633ae9cd3fc2a1bb995d97df4aef3&symbols=USD,UAH')
      .subscribe((data: any) => {
        this.UAHtoEUR = data.rates.UAH
        this.UAHtoUSD = data.rates.UAH / data.rates.USD
      })
  }
}
