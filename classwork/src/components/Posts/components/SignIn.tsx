const SignIn = () => {
    return (
        <div style={{ width: 500, marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius:10, padding: 20}}>
            <h2>Sign In</h2>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <label>Login</label>
                <input />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 20}}>
                <label>Password</label>
                <input />
            </div>
            <button>
                SignIn
            </button>
        </div>
    )
}

export { SignIn };
