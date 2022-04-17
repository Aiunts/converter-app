import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  @Input() UAHtoEUR: number = 0
  @Input() UAHtoUSD: number = 0

  outputValue: number | undefined = undefined

  currencies: (string)[] = ['UAH', 'USD', 'EUR']

  selected1 = this.currencies[0]
  selected2 = this.currencies[1]

  converterHandler(inputValue: any, from: string, to: string) {
    switch (from + '/' + to) {
      case 'UAH/USD':
        inputValue /= this.UAHtoUSD
        break
      case 'UAH/EUR':
        inputValue /= this.UAHtoEUR
        break
      case 'USD/UAH':
        inputValue *= this.UAHtoUSD
        break
      case 'USD/EUR':
        inputValue *= this.UAHtoUSD / this.UAHtoEUR
        break
      case 'EUR/UAH':
        inputValue *= this.UAHtoUSD
        break
      case 'EUR/USD':
        inputValue *= this.UAHtoEUR / this.UAHtoUSD
        break
    }

    return this.outputValue = parseFloat(Number(inputValue).toFixed(2))
  }

  selectOnChange(selected1: string, selected2: string, inputedValue: string) {
    if (selected1 != this.selected1) {
      this.selected1 = selected1
      this.converterHandler(inputedValue, selected1, this.selected2)
    } else if (selected2 != this.selected2) {
      this.selected2 = selected2
      this.converterHandler(inputedValue, this.selected1, selected2)
    }
  }
}