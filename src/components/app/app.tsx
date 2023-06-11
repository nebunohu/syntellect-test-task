import React from "react";
import "./app.module.css";
import ControlWithButtons from "../control-with-buttons/control-with-buttons";
import { ControlWithButtonsViewModel } from "../../view-models/control-with-buttons-view-model/control-with-buttons-view-model";
import ButtonModel from "../../models/button/button-model";
import ControlAutocomplete from "../control-autocomplete/control-autocomplete";
import ControlAutocompleteViewModel from "../../models/control-autocomplete-view-model/control-autocomplete-view-model";
import styles from './app.module.css';

function App() {
  const viewModel1 = new ControlWithButtonsViewModel({
    rightButtons: [
      new ButtonModel(
        'Очистить',
        ({ setInputValue }) => {
          setInputValue('');
        }
      ),
      new ButtonModel(
        'Заполнить',
        ({ setInputValue }) => {
          setInputValue('Hello World!');
        }
      )
    ],
  });
  const viewModel2 = new ControlWithButtonsViewModel({
    leftButtons: [
      new ButtonModel(
        'Num Alert',
        ({ value }) => {
          if(!Number.isNaN(+value) && value !== '') alert(value);
        }
      ),
    ],
    rightButtons: [
      new ButtonModel(
        'Alert',
        ({ value }) => {
          alert(value);
        }
      )
    ],
  });

  const viewModel3 = new ControlAutocompleteViewModel(3);
  const viewModel4 = new ControlAutocompleteViewModel(10);
  
  return (
    <div
      className={`${styles.wrapper}`}
    >
      <ControlWithButtons
        viewModel={viewModel1}
      />
      <ControlWithButtons
        viewModel={viewModel2}
      />
      <ControlAutocomplete
        viewModel={viewModel3}
      />
      <ControlAutocomplete
        viewModel={viewModel4}
      />
    </div>
  );
}

export default App;
