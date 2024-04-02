

export type Item = {
    id: string;
    required?: boolean;
};

export type CheckItemType = Record<string, boolean>;



const UseCheckBoxes = (items : Item[]) => {
    //check 상태 초기화
    const initializeChecks = useCallback(() => {
        const initialChecks: CheckItemType = {};
        items.forEach(item => {
            initialChecks[item.id] = false;
        });
        return initialChecks;
    },[items]);

    const initialChecks = useMemo(() => initializeChecks(), [items]);

    const [checkedItems, setCheckedItems] = useState<CheckItemType>(initialChecks);

    const handleCheckChange = (id: string, checked: boolean) => {
        setCheckedItems(prev => ({ ...prev, [id]: checked }));
    };

    const allChecked = items.length > 0 && items.every(item => checkedItems[item.id]);

    const allRequiredChecked = items.every(item => !item.required || checkedItems[item.id]);


    const handleAllCheck = () => {
        if (!items.length) return;

        const newCheckedItems: CheckItemType = {};
        items.forEach(item => {
            newCheckedItems[item.id] = !allChecked;
        });
        setCheckedItems(newCheckedItems);
    };

    return { checkedItems, handleCheckChange, allChecked, allRequiredChecked, handleAllCheck };
};


export default UseCheckBoxes;