import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import ControlAutocompleteViewModel from "../../models/control-autocomplete-view-model/control-autocomplete-view-model";
import { getCountryByName } from "../../api/apiService";
import styles from './control-autocomplete.module.css';

const ControlAutocomplete = observer(({ viewModel }: {viewModel: ControlAutocompleteViewModel}) => {
    const [isShowList, setIsShowList] = useState(false);
    useEffect(() => {
        const setAutocompleteList = async () => {
            const list = await getCountryByName(viewModel.model.value);
            viewModel.setAutocompleteList(list);
        };

        setAutocompleteList();
    })
    return (
        <div
            className={`${styles.wrapper}`}
        >
            <input
                value={viewModel.model.value}
                onChange={(e) => viewModel.setValue(e.target.value)}
                onFocus={() => setIsShowList(true)}
                onBlur={() => setTimeout(() => setIsShowList(false), 150)}
            />
            {!!viewModel.model.list.length && isShowList && (
                <div
                    className={`${styles.listWrapper}`}
                >
                    {viewModel.model.list.slice(0, viewModel.model.itemsCount).map((item) => (
                        <div
                            className={`${styles.countryWrapper}`}
                            onClick={() => {
                                viewModel.setValue(item.name);
                                setIsShowList(false);
                            }}
                        >
                            <img
                                className={`${styles.flag}`}
                                src={item.flag}
                                alt="flag"
                            />
                            <div>
                                {`${item.name} - ${item.fullName}`}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

export default ControlAutocomplete;