import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // btnSelected(selectedRadio: HTMLInputElement){
    //   if(selectedRadio.id==='multi-city'){
    //     //create a new textbox element
    //     const newTextbox1=document.createElement('input');
    //     const newTextbox2=document.createElement('input');
    //     newTextbox1.type='text';
    //     newTextbox1.className='form-control';
    //     newTextbox1.placeholder='city or airport';
    //     newTextbox2.type='text';
    //     newTextbox2.className='form-control';
    //     newTextbox2.placeholder='city or airport';
    //     // append the new textbox below the "flying from" textbox
    //     const flyingFromTextbox1=document.getElementById('flyingFrom');
    //     const flyingFromTextbox2=document.getElementById('flyingTo');
    //     if(flyingFromTextbox1&&flyingFromTextbox2){
    //       flyingFromTextbox1.parentNode?.appendChild(newTextbox1);
    //        flyingFromTextbox2.parentNode?.appendChild(newTextbox2);
    //     }
    //   }
    // }

    multiCityEntries: { from: string, to: string }[] = [];

    multiCitySelected: boolean = false;
  
    btnSelected(selectedRadio: HTMLInputElement) {
      if (selectedRadio.id === 'multi-city') {
        this.multiCityEntries = [];
        this.multiCitySelected = true;
      } else {
        this.multiCitySelected = false;
      }
    }
  
    addMultiCityEntry() {
      this.multiCityEntries.push({ from: '', to: '' });
    }
  
    removeMultiCityEntry(index: number) {
      this.multiCityEntries.splice(index, 1);
    }
    
  constructor() { }

  ngOnInit(): void {
  }

}
