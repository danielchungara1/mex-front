import { useEffect, useState } from "react";

function useFilter(filter) {

    const [value, setValue] = useState('');

    const handleValueChange = (e) => {
        setValue(e)
    }

    useEffect(() => {
        setValue(filter);
    }, [filter])

    return [value, handleValueChange];

}

export default useFilter
