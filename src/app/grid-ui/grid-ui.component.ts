import {Component, OnInit, Input, Output} from '@angular/core';

@Component({selector: 'app-grid-ui', templateUrl: './grid-ui.component.html', styleUrls: ['./grid-ui.component.css']})
export class GridUiComponent implements OnInit {

  constructor() {}
  //Inputs
  gridColumns : Array < Object > = new Array < Object > ();
  //Inputs
  gridData : Array < Object > = new Array < Object > ();
  @Input("grid-entity-name")
  EntityName : string = "";
  @Input("grid-data")
  set gridDataSet(_gridData : Array < Object >)
  {
    if (_gridData) {
      //Fill the column names in gridcolumns
      if(this.gridColumns.length == 0)
        this.gridColumns = new Array<Object>();
        
      var columnNames = Object.keys(_gridData[0]);

      for (var index in columnNames) {
        this
          .gridColumns
          .push(columnNames[index]);
      }
      this.gridData = _gridData;
    }
  }

  ngOnInit() {}

}
