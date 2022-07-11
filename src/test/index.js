import Form from './components/form'
import OS from './components/overageShow'
import Login from './components/login';
import Storage from './components/storage';
import AccounList from './components/accountList'
import HomePage from './components/home'

import { useState } from 'react';

const Home=()=>{

    //註冊

    const[sur,setSur]=useState("");
    function surChange(e){
        setSur(e.target.value);
    }
    const[name,setName]=useState("");
    function nameChange(e){
        setName(e.target.value);
    }
    const[userName,setUserName]=useState("");
    function userNameChange(e){
        setUserName(e.target.value);
    }
    const[PWD,setPWD]=useState("");
    function PWDChange(e){
        setPWD(e.target.value);
    }
    const[rePWD,setRePWD]=useState("");
    function rePWDChange(e){
        setRePWD(e.target.value);
    }
        //button
    const[accounts,createAccount]=useState( [
        {   
            sur:"c1Sur",
            name:"c1name",
            userName:"c1UserName",
            PWD:"c1PWD",
            overage: 0,
        }
    ]);    
    function formSubmit (e){
        //判斷錯誤
        if(false){
            //skip
        }else{//正確
            createAccount(function(prev){
                // console.log(prev);
                let newAccount = {
                    sur:sur,
                    name:name,
                    userName:userName,
                    PWD:PWD
                };
                {prev.push(newAccount)}
                return prev;
            });
        }
        
    }

    //儲值
    const[storage,setStorage] = useState(0);
    function storageChange(e){
        setStorage(e.target.value);
    }

    const[overage,setOverage]=useState(0);
    function storageButton(e){
        setOverage(function(prev){
            return parseInt(prev) + parseInt(storage);
        });
    }

    //登入
    const[loginN,setLoginN]=useState("");
    function inputName(e){
        setLoginN(e.target.value);
    }

    const[loginP,setLoginP]=useState("");
    function inputPWD(e){
        setLoginP(e.target.value);
    }
    const[auth,setAuth]=useState("cus");    
    // const[listenLoginB,loginClick]=useState("");
    function loginClick(){

        accounts.map((itme,index)=>{
            // console.log(itme);
            // console.log(loginN);
            // console.log(loginP);
            if(itme.userName == loginN && itme.PWD==loginP){
                setAuth(loginN);
            }else{
                console.log("登入失敗");
            }
        });
    }
    
    return (
        <div >
            
            <HomePage/>
            <AccounList accounts={accounts}/>
            <Form title = "註冊" 
                sur={sur}name={name}userName={userName}
                PWD={PWD}rePWD={rePWD}
                surChange={surChange}nameChange={nameChange}
                userNameChange={userNameChange}
                PWDChange={PWDChange}rePWDChange={rePWDChange}
                formSubmit={formSubmit}
            />
            <Login title = "登入" name={loginN} PWD={loginP}
                inputName={inputName} inputPWD={inputPWD}
                loginClick={loginClick}
            />
            <OS overage = {overage} auth={auth}/>    
            <Storage 
                storage={storage} storageChange={storageChange}
                storageButton={storageButton}
            />
        </div>

    );
        
}

export default Home