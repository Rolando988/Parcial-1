import { Component, OnInit } from '@angular/core';
import { FormsModule }from '@angular/forms'
import {BrowserModule}from '@angular/platform-browser'

@Component({
  selector: 'app-parcial1',
  templateUrl: './parcial1.component.html',
  styleUrls: ['./parcial1.component.css']
})
export class Parcial1Component implements OnInit {
  registro=[];
  cliente:any;
  nombre:string;
  duicliente:number;
  codigoproducto1:number;
  codigoproducto2:number;
  codigoproducto3:number;
  codigoproducto4:number;
  codigoproducto5:number;
  precio1:number;
  precio2:number;
  precio3:number;
  precio4:number;
  precio5:number;
  contador:number;
  descripcion:string;
  descripcion2:string;
  descripcion3:string
  descripcion4:string
  descripcion5:string
  codigo1:number;
  codigo2:number;
  codigo3:number;
  codigo4:number;
  codigo5:number;

  constructor() { }

  ngOnInit(){
    this.nombre=""
    this.duicliente=0
    this.codigoproducto1=1
    this.descripcion="Refrigeradora"
    this.precio1=900;
    this.codigo1=111111
    this.codigoproducto2=2
    this.descripcion2="Lavadora"
    this.precio2=700;
    this.codigo2=222222
    this.codigoproducto3=3
    this.descripcion3="Secadora"
    this.precio3=650;
    this.codigo3=333333
    this.codigoproducto4=4
    this.descripcion4="Cocina"
    this.precio4=500;
    this.codigo4=444444
    this.codigoproducto5=5
    this.descripcion5="Tostadora"
    this.precio5=90;
    this.codigo5=555555
    
    

  }
  compra1(){
    this.cliente={"nombre":this.nombre,"duicliente":this.duicliente,"descripcionproducto":this.descripcion,"precio":this.precio1,"codigoproducto":this.codigo1};
    this.registro.push(this.cliente)
    this.contador++;
  }
  compra2(){
    this.cliente={"nombre":this.nombre,"duicliente":this.duicliente,"descripcionproducto":this.descripcion2,"precio":this.precio2,"codigoproducto":this.codigo2};
    this.registro.push(this.cliente)
    this.contador++;
  }
  compra3(){
    this.cliente={"nombre":this.nombre,"duicliente":this.duicliente,"descripcionproducto":this.descripcion3,"precio":this.precio3,"codigoproducto":this.codigo3};
    this.registro.push(this.cliente)
    this.contador++;
  }
  compra4(){
    this.cliente={"nombre":this.nombre,"duicliente":this.duicliente,"descripcionproducto":this.descripcion4,"precio":this.precio4,"codigoproducto":this.codigo4};
    this.registro.push(this.cliente)
    this.contador++;
  }
  compra5(){
    this.cliente={"nombre":this.nombre,"duicliente":this.duicliente,"descripcionproducto":this.descripcion5,"precio":this.precio5,"codigoproducto":this.codigo5};
    this.registro.push(this.cliente)
    this.contador++;
  }

}
