import './step.css'

function Step1({ nextPage }) {
    return (
        <div>
            <h3 className="heading">SignUp Info</h3>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button onClick={nextPage}>Next</button>
        </div>
    );
}

export default Step1;