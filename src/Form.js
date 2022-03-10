import React from "react"

export default function Form() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: ""
    })
    console.log(formData)

    function handleChange(event) {
        setFormData(preData=>{
            return {
                ...preData,
                [event.target.name] : event.target.value
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
            />
            <input
                type="text" 
                placeholder="LastName"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}