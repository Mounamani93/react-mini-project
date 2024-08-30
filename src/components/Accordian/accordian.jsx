import { useState } from "react";
import data from "./data";
import "./style.css";
function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);
  function handleSingleselection(getCurrentid) {
    setSelected(getCurrentid === selected ? null : getCurrentid);
  }
  function handleMultipleselection(getCurrentid) {
    let cpyMultiSelected = [...multiSelected];
    const findCurrentIndex = cpyMultiSelected.indexOf(getCurrentid);
    console.log(findCurrentIndex);
    if (findCurrentIndex === -1) {
      cpyMultiSelected.push(getCurrentid);
    } else {
      cpyMultiSelected.splice(findCurrentIndex, 1);
    }
    setMultiSelected(cpyMultiSelected);
  }
  return (
    <>
      <div className="acc-wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable Multi Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  className="title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleselection(dataItem.id)
                      : () => handleSingleselection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  {enableMultiSelection ? (
                    multiSelected.indexOf(dataItem.id) !== -1 ? (
                      <span>-</span>
                    ) : (
                      <span>+</span>
                    )
                  ) : selected === dataItem.id ? (
                    <span>-</span>
                  ) : (
                    <span>+</span>
                  )}
                </div>
                {enableMultiSelection
                  ? multiSelected.indexOf(dataItem.id) !== -1 && (
                      <div className="acc-content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="acc-content">{dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordian;
