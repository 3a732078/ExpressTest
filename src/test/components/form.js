

const Form =(props)=>{
    return(
        <div>
            
            <h1>{props.title}</h1>

                <p>姓氏:</p>
                <input type="text" value={props.sur} onChange={props.surChange}/>
                <p>名字:</p>
                <input type="text" value={props.name} onChange={props.nameChange}/>
                <p>使用者名稱:</p>
                <input type="text" value={props.userName} onChange={props.userNameChange}/>
                <p>密碼:</p>
                <input type="password" value={props.PWD} onChange={props.PWDChange}/>
                <p>確認密碼:</p>
                <input type="password" value={props.rePWD} onChange={props.rePWDChange}/>
                

                <button onClick={props.formSubmit}>
                    送出
                </button>

        </div>
        
    );
}

export default Form