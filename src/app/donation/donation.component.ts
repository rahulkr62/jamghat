import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {
   totalAmount: any = 0;
  homelessQty: any = 0;
  GeneralQty: any = 0;
  corpusQty: any = 0;

  noOfQty(name: any, fundName: any) {

    if (fundName == 'homeless') {
      if (name == 'homelessAdd') {
        this.homelessQty++;
        this.totalAmount += 2000
      }
      else {
        if (this.homelessQty > 0) {
          this.homelessQty--
          this.totalAmount -= 2000
        }
      }
    } else if (fundName == 'general') {
      if (name == 'generalAdd') {
        this.GeneralQty++;
        this.totalAmount += 250
      }
      else {
        if (this.GeneralQty > 0) {
          this.GeneralQty--
        this.totalAmount -= 250
        }
      }
    }
    else {
      if (name == 'corpusAdd') {
        this.corpusQty++;
        this.totalAmount += 500
      }
      else {
        if (this.corpusQty > 0) {
          this.corpusQty--;
        this.totalAmount -= 500
        }
      }
    }
  }
  onSubmit() {

  } 
  
  @ViewChild('infoDialog') infoDialog!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  openInfoModal() {
    this.dialog.open(this.infoDialog, {
      width: '400px',
      panelClass: 'custom-info-dialog'
    });
  }
}