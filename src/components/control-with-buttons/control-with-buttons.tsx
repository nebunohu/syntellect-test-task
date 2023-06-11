import { observer } from "mobx-react-lite";
import { ControlWithButtonsViewModel } from "../../view-models/control-with-buttons-view-model/control-with-buttons-view-model";
import ControlWithButtonsView from "../control-with-buttons-view/control-with-buttons-view";

const ControlWithButtons = observer(({ viewModel }: { viewModel: ControlWithButtonsViewModel }) => {
    const {
        value,
        leftButtons,
        rightButtons,
     } = viewModel.model;
    return (
        <ControlWithButtonsView
            value={value}
            leftButtons={leftButtons}
            rightButtons={rightButtons}
            setInputValue={viewModel.setInputValue.bind(viewModel)}      
        />
    );
});

export default ControlWithButtons;