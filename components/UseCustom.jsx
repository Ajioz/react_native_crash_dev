import React, {useState} from 'react'
import CustomSwitch from './CustomSwitch'
import items from './data';


const UseCustom = () => {
    const [statuses, setStatuses] = useState(items);

    const toggleSwitch = (id) => {
       const findItem = statuses.map((item) => {
            if(item.id === id){
                item.status = !item.status;
            }
            return item
       })
       setStatuses(prev => prev = findItem);
    }

    return (
        <>
            {
                statuses.map((itemPick) => {
                    const {id, item, status, trackColor } = itemPick;
                    return(
                        <CustomSwitch  key={id} id={id}  status={status} item={item} 
                        trackColor={trackColor}
                        toggleSwitch={toggleSwitch} />
                    )
                })
            }
        </>
    )
}

export default UseCustom