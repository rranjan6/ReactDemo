import React from "react"

export default function Form() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor:""
    })
    console.log(formData)

    function handleChange(event) {
        const {name,value,type,checked} = event.target
        setFormData(preData=>{
            return {
                ...preData,
                [name] : type === "checkbox"? checked: value
            }
        })
    }
    return(
        <form>

            <input
                type="text" 
                placeholder="FirstName"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />

            <input
                type="text" 
                placeholder="LastName"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />

            <input
                type="email" 
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <textarea
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />

            <input
                id="check"
                type="checkbox"
                onChange={handleChange}
                name="isFriendly"
                checked={formData.isFriendly}
            />
            <label htmlFor="check">Are you friendly?</label>
            <br/>
            <br/>

            <fieldset>

                <legend>Current Employment status</legend>

                <input
                    type="radio"
                    name="employment"
                    id="unemployed"
                    value="unemployed"
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br/>

                <input
                    type="radio"
                    name="employment"
                    id="part-time"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br/>

                <input
                    type="radio"
                    name="employment"
                    id="full-time"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>

            </fieldset>

            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

        </form>
    )
}