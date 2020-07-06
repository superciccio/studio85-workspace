import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DiscountTableDataSource, DiscountTableItem } from './discount-table-datasource';

@Component({
  selector: 'app-discount-table',
  templateUrl: './discount-table.component.html',
  styleUrls: ['./discount-table.component.scss']
})
export class DiscountTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DiscountTableItem>;
  dataSource: DiscountTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'started', 'will end on', 'discount', 'action'];

  ngOnInit(): void {
    this.dataSource = new DiscountTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
