import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import JsBarcode from 'jsbarcode';
@Component({
  selector: 'app-bar-code',
  templateUrl: './bar-code.component.html',
  styleUrls: ['./bar-code.component.css']
})
export class BarCodeComponent {
  @ViewChild('barcode') barcodeImage: ElementRef;

  barcodeData: string = '123456789'; // Your barcode data
  barcodeType: string = 'CODE128'; // Type of barcode, e.g., 'CODE128', 'EAN13', etc.

  ngOnInit() {
    // Generate the barcode
    console.log("hello")
    JsBarcode(this.barcodeImage.nativeElement, this.barcodeData, {
      format: this.barcodeType,
      width: 2,
      height: 100
    });
  }
}
