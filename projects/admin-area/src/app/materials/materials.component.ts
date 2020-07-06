import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {AdminService} from '../shared/admin.service';
import {MaterialResponse, MaterialsDataSource, MaterialsItem} from './materials-datasource';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MaterialsItem>;
  dataSource: MaterialsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'eng', 'ita', 'actions'];

  constructor(private adminService: AdminService) {
    this.dataSource = new MaterialsDataSource();
    this.dataSource.data = [];
    adminService.fetchAllMaterial().toPromise().then((resp: MaterialResponse[]) => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      for (const respElement of resp) {
        // tslint:disable-next-line:one-variable-per-declaration
        let engMaterial, itaMaterial;
        for (const matResponseValue of respElement.value) {
          if (matResponseValue.language === 'en') {
            engMaterial = matResponseValue.material;
            continue;
          }
          itaMaterial = matResponseValue.material;
        }
        this.dataSource.data.push({eng: engMaterial, id: respElement.id, ita: itaMaterial});
      }
    });
  }


  deleteMaterial(id: number): void {
    this.adminService.deleteMaterial(id).toPromise().then((resp) => {
      window.location.reload();
    });
  }
}
