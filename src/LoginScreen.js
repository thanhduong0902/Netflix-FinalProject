import React from 'react';
import "./LoginScreen.css";
function LoginScreen() {
     const [emaillog, setEmaillog] = useState("");
     function handleLogin(e) { 
       e.preventDefault();
       let mail = localStorage.getItem("Email").replace(/"/g,"");


     }
    const [signIn, setSignIn ] = useState(false);
  return              (
    <div className="loginScreen">
<div className="loginScreen_background">  <img 
className="loginScreen_logo"
src="https://cdn.tgdd.vn/2020/04/content/1.thumb1-800x450-5.jpg "> </img> 
       
<button className="loginScreen_button" onClick={() => setSignIn(true)}>          
Sign In </button>
<div className="loginScreen_gradient">            </div>
<div className="loginScreen_body"> 
{signIn ? (
<SignInScreen/>) : ( 
    <> 
<h1> Unlimited films, TV programes and more. </h1>
<h2> Watch anywhere. Cancel at any time.          </h2>
<h3> Ready to watch? Enter your email to create or restart your membership. </h3>
<div className="loginScreen_input"> 
<form> <input type="email" placeholder="Email Address"/>
<button onClick={() => setSignIn(true)} className="loginScreen_getStarted">  GET STARTED      </button>          </form>
               </div>
</>

)

}
<> 
<h1> Unlimited films, TV programes and more. </h1>
<h2> Watch anywhere. Cancel at any time.          </h2>
<h3> Ready to watch? Enter your email to create or restart your membership. </h3>
<div className="loginScreen_input"> 
<form> <input type="email" placeholder="Email Address"/>
<button onClick={() => setSignIn(true)} className="loginScreen_getStarted">  GET STARTED      </button>          </form>
               </div>
</>


         </div>

      
</div>
    </div>
  )
}

export default LoginScreen