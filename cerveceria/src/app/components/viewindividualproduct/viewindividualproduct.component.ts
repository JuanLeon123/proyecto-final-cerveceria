import { SlicePipe } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DescriocionIndividualService } from 'src/app/services/descriocion-individual.service';

@Component({
  selector: 'app-viewindividualproduct',
  templateUrl: './viewindividualproduct.component.html',
  styleUrls: ['./viewindividualproduct.component.css']
})
export class ViewindividualproductComponent implements OnInit {

  public products : any = [];

  constructor(private descIndividualProducto : DescriocionIndividualService) { }

  ngOnInit(): void {
    this.descIndividualProducto.envioDatoDesdePaksDescripion.subscribe( item =>{
      console.log('recibiendo data....', item);
      this.products.push(item)
    })
  }

}
