//notes to push to git
//used code from :  https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del
import React from "react";
import { GoogleLogin } from "react-google-login";
import { GlobalCtx } from "../App";

const clientId = "922823180277-b7390ud8bf19i9b3s7a3ji1km2g1h1lo.apps.googleusercontent.com";

function Login() {
    const {gState, setgState} = React.useContext(GlobalCtx)
    const onSuccess = (res) => {
        setgState({...gState, loggedIn: true})
        console.log("[Login Success] currentUser:", res.profileObj);
    };
    const onFailure = (res) => {
        setgState({...gState, loggedIn: false})
        console.log("[Login Failed] res:", res);
    };
    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
            />
        </div>
    );
};

export default Login;