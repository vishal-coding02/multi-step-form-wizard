function Step2({ nextPage, previousPage }) {
    return (
        <div>
            <h3>Personal Info</h3>
            <input type="text" placeholder="User Name" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <button onClick={previousPage}>Back</button>
            <button onClick={nextPage}>Next</button>
        </div>
    );
}

export default Step2;