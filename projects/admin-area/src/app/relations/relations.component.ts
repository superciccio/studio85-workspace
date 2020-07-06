import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {RelationResponse, RelationsDataSource, RelationsItem} from './relations-datasource';
import {AdminService} from '../shared/admin.service';
import {ConfigService} from '../../../../artisan-area/src/app/shared/config.service';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss']
})
export class RelationsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<RelationsItem>;
  dataSource: RelationsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'category', 'product-type', 'material', 'shape', 'color', 'actions'];

  constructor(private adminService: AdminService, private configService: ConfigService) {
    this.dataSource = new RelationsDataSource();
    this.dataSource.data = [];
    this.configService.getConfig().then((config) => {
      adminService.fetchAllRelation().toPromise().then((resp: RelationResponse[]) => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        const categories = config.categories;
        const materials = config.materials;
        const productTypes = config.productTypes;
        const shapes = config.shapes;
        const colors = config.colors;
        for (const respElement of resp) {
          let mDesc = '';
          if (respElement.materialId !== null && respElement.materialId !== undefined ){
            for (const material of materials) {
              for (const n of respElement.materialId) {
                if (material.id === n){
                  mDesc += material.value[0].material;
                }
              }
            }
          }
          let cDesc = '';
          if (respElement.colorId !== null && respElement.colorId !== undefined ){
            for (const color of colors) {
              for (const c of respElement.colorId) {
                if (color.id === c){
                  cDesc += color.value[0].color;
                }
              }
            }
          }
          let catDesc = '';
          if (respElement.categoryId !== null && respElement.categoryId !== undefined ){
            for (const cat of categories) {
              for (const c of respElement.categoryId) {
                if (cat.id === c){
                  catDesc += cat.value[0].category;
                }
              }
            }
          }
          let sDesc = '';
          if (respElement.shapeId !== null && respElement.shapeId !== undefined ){
            for (const shape of shapes) {
              for (const s of respElement.shapeId) {
                if (shape.id === s){
                  sDesc += shape.value[0].shape;
                }
              }
            }
          }
          let pTypeDesc = '';
          if (respElement.productTypeId !== null && respElement.productTypeId !== undefined ){
            for (const pt of productTypes) {
              for (const c of respElement.productTypeId) {
                if (pt.id === c){
                  pTypeDesc += pt.value[0].productType;
                }
              }
            }
          }
          this.dataSource.data.push({material: mDesc, color: cDesc, category: catDesc, shape: sDesc,
            product: pTypeDesc, id: respElement.id
          });
        }
      });
    });

  }


  deleteRelation(id: number): void {
    this.adminService.deleteRelation(id).toPromise().then((resp) => {
      window.location.reload();
    });
  }
}
