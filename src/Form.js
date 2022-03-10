import React from "react"

export default function Form() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true
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
                type="checkbox"
                onChange={handleChange}
                name="isFriendly"
                checked={formData.isFriendly}
            />
        </form>
    )
}