function Step3({ previousPage }) {
    return (
        <div>
            <h3>Professional Info</h3>
            <input type="text" placeholder="Current Company" />
            <input type="text" placeholder="Total Experience" />
            <input type="text" placeholder="Designation" />
            <button onClick={previousPage}>Back</button>
            <button>Submit</button>
        </div>
    )
}

export default Step3;