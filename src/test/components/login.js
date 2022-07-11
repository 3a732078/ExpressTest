

const Login =(props,{name,inputName,PWD,inputPWD,loginClick})=>{
    // console.log(inputPWD);

    function testBtn(){
        console.log(props);
    }
    return(
        
        <div>
            
            <h1>{props.title}</h1>

               
                <p>使用者名稱:</p>
                <input type="text" value={name} onChange={props.inputName}/>
                <p>密碼:</p>
                <input type="password" value={PWD} onChange={props.inputPWD}/>

                <button onClick={props.loginClick}>
                    送出
                </button>

        </div>
        
    );
}

export default Login