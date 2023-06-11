import { makeAutoObservable } from "mobx";
import ControlAutocompleteModel from "../control-autocomplete-model/control-autocomplete-model";

export default class ControlAutocompleteViewModel {
    model = new ControlAutocompleteModel();

    constructor(itemsCount?: number) {
        makeAutoObservable(this);
        this.model.itemsCount = itemsCount ? itemsCount : 3;
    };

    setValue(value: string) {
        this.model.value = value;
    };

    setAutocompleteList(list: Array<any>) {
        this.model.list = list;
    }
}