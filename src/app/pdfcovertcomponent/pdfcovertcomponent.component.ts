import { Component, ElementRef, ViewChild } from '@angular/core';
// import jsPDF from 'jspdf';
// import * as jsPDF from 'jspdf';
import JSPDF from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable'
import {jsPDF} from 'jspdf';


// interface jsPDFwithPlugin extends JSPDF{
// autotable :(options :UserOptions) => JSPDF;
// }
@Component({
  selector: 'app-pdfcovertcomponent',
  templateUrl: './pdfcovertcomponent.component.html',
  styleUrls: ['./pdfcovertcomponent.component.css']
})
export class PdfcovertcomponentComponent {
  name = 'Angular Html To Pdf ';

  // @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


  @ViewChild('content') content: ElementRef;

  makePdf() { 
    let doc = new jsPDF();
    // doc.addHTML(this.content.nativeElement, function() {
    //    doc.save("obrz.pdf");
    // });
  }
}

