import { Component, OnInit } from '@angular/core';
import { Category, SubCategory } from './customer';
import { CustomerService } from './customerservice';
import { Table } from 'primeng/table';
interface City {
  name: string;
  id: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customers: SubCategory[];
  cities: City[];
  selectedCity2: City;
  customers1: SubCategory[] = [];
  clonedCars: { [s: string]: SubCategory } = {};
  jsnvalue: any;
  editCategory: boolean = false;
  editSubCategory: boolean = false;
  categoryvalue: City;
  constructor(private customerService: CustomerService) {
    this.cities = [
      { name: 'New York', id: 'NY' },
      { name: 'Rome', id: 'RM' },
      { name: 'London', id: 'LDN' },
      { name: 'Istanbul', id: 'IST' },
      { name: 'Paris', id: 'PRS' },
    ];
  }

  ngOnInit() {
    this.customerService.getCustomersMedium().then((data) => {
      this.customers = data;
    });
    this.customerService.getCustomersall().then((data) => {
      this.customers1 = data;
    });
  }

  newRow() {
    return {
      sub_category_id: 0,
      sub_category_value: '',
      category: {
        value: '',
        id: 0,
      },
    };
  }

  onRowEditInit(subcat: SubCategory) {
    this.editCategory = false;
    this.editSubCategory = true;
    this.clonedCars[subcat.category.value] = { ...subcat };
  }
  onRowEditInitCategory(subcat: SubCategory) {
    this.editCategory = true;
    this.editSubCategory = false;
  }
  onRowEditSave(car: SubCategory, dt: Table) {
    console.log(this.categoryvalue);
    this.jsnvalue = dt.value;
    const cat: any = this.categoryvalue;
    this.jsnvalue = this.jsnvalue.filter(function (sub) {
      if (cat.code) {
        sub.category.value = cat.name;
        sub.category.id = cat.is;
        return true;
      } else {
        sub.category.value = cat;
        return true;
      }
    });
    this.customers1 = this.jsnvalue;
    dt.value = [];
  }

  onRowEditSave1(car: SubCategory, dt: Table) {
    console.log(car);
  }

  onRowEditCancel(car: SubCategory, index: number, dt: Table) {
    dt.value.splice(index, 1);
    /* dt.initRowEdit({
      sub_category_id: 1,
      sub_category_value: 'sub category',
      category: {
        value: 'Catgeory',
        id: '1',
      },
    }); */
    //this.customers[index] = this.clonedCars[car.sub_category_id];
    //delete this.clonedCars[car.sub_category_id];
  }
}
