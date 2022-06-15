export interface IAssetTableColumnConfig {
  cellEditorTemplate?: string;
  cellTemplate?: string;
  dataType: string;
  editable: boolean;
  field: string;
  fieldType?: ColumnType;
  filterable: boolean;
  formatDate?: boolean;
  formatSerialNo?: boolean;
  header: string;
  headerClasses?: string;
  indexIgAndSt?: number;
  indexOnlyIg?: number;
  indexOnlySt?: number;
  resizable: boolean;
  sortable: boolean;
  title?: string;
}

export enum ColumnType {
  ProductName,
  Map,
  SerialNo,
}

export const AssetsTableColumnConfig: IAssetTableColumnConfig[] = [
  {
    cellTemplate: 'eventsCellTemplate',
    dataType: 'string',
    editable: false,
    field: 'ProductName',
    fieldType: ColumnType.ProductName,
    filterable: false,
    header: 'ASSETS_TABLE_EVENTS_HEADER',
    indexIgAndSt: 0,
    indexOnlyIg: 0,
    indexOnlySt: 0,
    resizable: true,
    sortable: true,
    title: 'Some title',
  },
];
