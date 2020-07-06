import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {AdminService} from '../shared/admin.service';
import {ProductTypeItem, ProductTypeResponse, ProductTypesDataSource} from './product-type-datasource';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.scss']
})
export class ProductTypesComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductTypeItem>;
  dataSource: ProductTypesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'eng', 'ita', 'actions'];

  constructor(private adminService: AdminService) {
    this.dataSource = new ProductTypesDataSource();
    this.dataSource.data = [];
    adminService.fetchAllProductTypes().toPromise().then((resp: ProductTypeResponse[]) => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      for (const respElement of resp) {
        // tslint:disable-next-line:one-variable-per-declaration
        let engMaterial, itaMaterial;
        for (const matResponseValue of respElement.value) {
          if (matResponseValue.language === 'en') {
            engMaterial = matResponseValue.productType;
            continue;
          }
          itaMaterial = matResponseValue.productType;
        }
        this.dataSource.data.push({eng: engMaterial, id: respElement.id, ita: itaMaterial});
      }
    });
  }


  deleteProductType(id: number): void {
    this.adminService.deleteProductType(id).toPromise().then((resp) => {
      window.location.reload();
    });
  }
}
