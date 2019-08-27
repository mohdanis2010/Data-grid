import React from "react";
import DataGrid, {
  Column,
  Editing,
  Summary,
  TotalItem,
  ColumnFixing,
} from "devextreme-react/data-grid";
import gridData from "./data.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.orders = gridData.getOrders();
  }
  calculatePLValue(data) {
    return data.LivePL + data.NBPL;
  }
  calculateCloseValue(data) {
    return data.Close + data.LiveRisk;
  }
  calculateLiveValue(data) {
    return data.Live + data.Close;
  }
  calculateMoveValue(data) {
    return data.NBPL + data.LiveRisk;
  }

  render() {
    return (
      <React.Fragment>
        <DataGrid
          id={"gridContainer"}
          dataSource={this.orders}
          keyExpr={"SortKey"}
          width={1280}
          alignment="center"
          repaintChangesOnly={true}
          showBorders={true}>
          allowColumnResizing={true}
          <ColumnFixing enabled={true} />
          <Editing mode={"batch"} allowUpdating={true}></Editing>
          <Column dataField={""} width={60} fixed={true} />
          <Column
            dataField={"SortKey"}
            width={130}
            fixed={true}
            caption={"Sort Key"}
          />
          <Column dataField={"Random"} width={150} dataType={"number"} />
          <Column dataField={"Risk"} width={120} />
          <Column dataField={"NBRisk"} width={100} caption={"NB Risk"} />
          <Column dataField={"LiveRisk"} width={100} caption={"Live Risk"} />
          <Column
            dataField={"Close"}
            width={110}
            calculateCellValue={this.calculateCloseValue}
            caption={"Close(%)"}
          />
          <Column
            dataField={"Live"}
            width={110}
            calculateCellValue={this.calculateLiveValue}
            alignment={"right"}
            caption={"Live(%)"}
          />
          <Column
            dataField={"Move"}
            width={110}
            calculateCellValue={this.calculateMoveValue}
            alignment={"right"}
            caption={"Move(BP)"}
          />
          <Column
            dataField={"LivePL"}
            width={120}
            alignment={"right"}
            caption={"Live PL"}
          />
          <Column
            dataField={"NBPL"}
            width={120}
            alignment={"right"}
            caption={"NB PL"}
          />
          <Column
            dataField={"PL"}
            calculateCellValue={this.calculatePLValue}
            width={160}
            alignment={"right"}
            caption={"PL"}
          />
          <Summary recalculateWhileEditing={true}>
            <TotalItem column={""} displayFormat={"Total"} />
            <TotalItem
              column={"Risk"}
              summaryType={"sum"}
              displayFormat={"{0}"}
            />

            <TotalItem
              column={"NBRisk"}
              summaryType={"sum"}
              displayFormat={"{0}"}
              cssClass={"sumColor"}
            />
            <TotalItem
              column={"LiveRisk"}
              summaryType={"sum"}
              displayFormat={"{0}"}
            />
            <TotalItem
              column={"Close"}
              summaryType={"sum"}
              displayFormat={"{0}"}
            />
            <TotalItem
              column={"Live"}
              summaryType={"sum"}
              displayFormat={"{0}"}
            />
            <TotalItem
              column={"Move(BP)"}
              summaryType={"sum"}
              displayFormat={"{0}"}
            />
            <TotalItem
              column={"LivePL"}
              summaryType={"sum"}
              displayFormat={"{0}"}
              cssClass={"sumColor"}
            />
            <TotalItem
              column={"NBPL"}
              summaryType={"sum"}
              displayFormat={"{0}"}
            />
            <TotalItem
              column={"PL"}
              summaryType={"sum"}
              displayFormat={"{0}"}
              cssClass={"sumColor"}
            />
          </Summary>
        </DataGrid>
        <div className="note">
          <strong>Note</strong> This data grid is vertical scrollable
        </div>
      </React.Fragment>
    );
  }
}

export default App;
