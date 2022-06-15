import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  IgxExcelExporterOptions,
  IgxExcelExporterService,
  IgxGridComponent,
  IRowExportingEventArgs,
  SortingDirection,
} from 'igniteui-angular';
import { ColumnType } from 'src/app/data/assetTableColumnConfig';
import { DATA } from 'src/app/data/data';
import { CustomEventSortingStrategy } from './custom-event-sorting-strategy';

@Component({
  selector: 'app-igx-sample',
  styleUrls: [`igx-sample.component.scss`],
  templateUrl: 'igx-sample.component.html',
})
export class IgxSampleComponent implements AfterViewInit, OnInit {
  constructor(private excelExportService: IgxExcelExporterService) {}

  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid!: IgxGridComponent;
  public cdRef: ChangeDetectorRef;
  public data: any;

  public ngOnInit(): void {
    this.data = DATA;

    this.grid.sort({
      fieldName: 'ProductName',
      dir: SortingDirection.Asc,
      ignoreCase: true,
      strategy: new CustomEventSortingStrategy(),
    });
  }

  ngAfterViewInit() {

    // this.grid.getColumnByName(ColumnType[ColumnType.ProductName]).sortStrategy =
    //   new CustomEventSortingStrategy();

    
    //   this.grid.sort({
    //   fieldName: 'ProductName',
    //   dir: SortingDirection.Asc,
    //   ignoreCase: true,
    //   strategy: new CustomEventSortingStrategy(),
    // });

    // this.cdRef.detectChanges();
  }
}
