import { useState } from "react"


const AccountList=({accounts})=>{
    // console.log(accounts);
    
    return(
        <div>
            <h2>帳號列表</h2>
            <ul>                
                {
                    accounts.map((item,index)=>{
                        return(
                            <li>
                                <p>
                                    surName:{item.sur}
                                </p>
                                <p>
                                    name:{item.name}
                                </p>
                                <p>
                                    userName:{item.userName}
                                </p>
                                <p>
                                    password:{item.PWD}
                                </p>
                            </li>
                        )          
                    })
                    
                }
            </ul>
        </div>
    );
    
}

export default AccountList