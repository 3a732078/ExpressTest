import { useState } from "react";

const Storage=({storage,storageChange,storageButton})=>{


    
    return(
        <div>
            <h1>儲值金額</h1>

            <p>
                儲值金額:
            </p>
            <input type="text" value={storage} onChange={storageChange}/>
            <button onClick={storageButton}>儲值</button>
        </div>
    );
}

export default Storage