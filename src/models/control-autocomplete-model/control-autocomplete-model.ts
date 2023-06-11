import { makeAutoObservable } from "mobx";

export default class ControlAutocompleteModel {
    itemsCount = 3;
    value = '';
    list = [] as Array<any>;

    constructor() {
        makeAutoObservable(this);
    };
}