import { useState } from "react"

function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    const [subjects, setSubjects] = useState({
                                            english : true,
                                            maths : false,
                                            physics : false,});
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
    };

    const handleSubjectChange = (sub) => {
        setSubjects((s) => ({...s, [sub] : !s[sub]}));
    }


    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };
    

    return(
        <div className="Form-Container">
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label for = "firstname">
                        First Name*
                    </label>
                    <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                    required
                    />

                    <label for="lastname">
                        Last Name*
                    </label>
                    <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                    required
                    />

                    <label for="email">
                        Email*
                    </label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    required
                    />

                    <label for="contact">
                        Mobile Number*
                    </label>
                    <input 
                    type="tel"
                    name="contact"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Enter Mobile Number"
                    required
                    />

                    <label for="gender">
                        Gender*
                    </label>
                    <input 
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    checked = {gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
        
                    /> Male

                    
                    <input 
                    type="radio"
                    name="gender"
                    value= "female"
                    id="female"
                    checked = {gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                    
                    /> Female

                    <input 
                    type="radio"
                    name="gender"
                    value="other"
                    id="other"
                    checked = {gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                   
                    /> Other

                    <label for="lang">
                        Your best Subject
                    </label>
                    <input 
                    type="checkbox"
                    name="lang"
                    id="english"
                    checked = {subjects.english === true}
                    onChange={(e) => 
                        handleSubjectChange("English")
                    }
                    />
                    English

                    <input 
                    type="checkbox"
                    name="lang"
                    id="maths"
                    checked = {subjects.maths === true}
                    onChange={(e) => 
                        handleSubjectChange("maths")
                    }
                    />
                    Maths

                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics === true}
                        onChange={(e) =>
                            handleSubjectChange("physics")
                        }
                    />
                    Physics

                    <label for="file">
                        Upload Resume
                    </label>
                        <input 
                        type="file"
                        name="file"
                        id="file"

                        onChange={(e) => setResume(e.target.files[0])
                        }
                        required
                        />
                    
                    <label for = "url">
                        Enter URL*
                    </label>
                    <input type="url"
                    name="url"
                    id="url"
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter url"
                    required
                    />

                    <label>
                        Select your choice
                    </label>
                    <select 
                    name="select"
                    id="select"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option 
                        value=""
                        disabled
                        selected = {selectedOption === ""}
                        >Select your Ans</option>

                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                        </optgroup>

                    </select>

                    <label for = "about">
                        About
                    </label>
                    <textarea 
                    name="about"
                    id="about"
                    cols= "30"
                    rows= "10"
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="About your self"
                    required
                    ></textarea>

                    <button
                    className="submitBtn"
                    type="submit"
                    value="submit"
                    onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>

                    <button 
                    className="resetBtn"
                    type="reset"
                    value="reset"
                    onClick={() => handleReset()}
                    >Reset</button>

                    
                    

                </form>
            </fieldset>

        </div>);
}

export default Form