
function button () {
    return (
        <button type="submit" className="button is-text">
            {isSignup ? "Sign Up" : "Log In"}
        </button>
    )
}