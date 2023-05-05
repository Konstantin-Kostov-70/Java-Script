import { useState, useRef, useEffect } from "react"
import "./App.css";

function App() {
    const infoRef = useRef()

    const [values, setValues] = useState({
        username: '',
        password: '',
        age: '',
        bio: '',
        gender: 'f',
        userType: 'individual',
        tac: false,
        egn: '',
        eik: '',
    })

    useEffect(() => {
        if(values.username && values.age) {
            infoRef.current.value = `${values.username} - ${values.age}`
        }
    },[values.username, values.age])

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [age, setAge] = useState("");
    // const [bio, setBio] = useState("");
    // const [gender, setGender] = useState("m");
    // const [userType, setUserType] = useState("corporate");
    // const [tac, setTac] = useState(false);

    const submitHandler = (ev) => {
        ev.preventDefault();
        console.log(values);
    }


    const changeHandler = (ev) => {
        setValues(values => ({
            ...values,
            [ev.target.name]: ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
        }))


    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age: </label>
                        <input
                            id="age"
                            type="number"
                            name="age"
                            value={values.age}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="bio">Biography: </label>
                        <textarea
                            name="bio"
                            id="bio"
                            cols="30"
                            rows="10"
                            value={values.bio}
                            onChange={changeHandler}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="gender">Gender: </label>
                        <select
                            name="gender"
                            id="gender"
                            value={values.gender}
                            onChange={changeHandler}
                        >
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="individual-user-type">Individual: </label>
                        <input
                            id="individual-user-type"
                            type="radio"
                            name="userType"
                            value={"individual"}
                            onChange={changeHandler}
                            checked={values.userType === "individual"}
                        />
                        <label htmlFor="corporate-user-type">Corporate: </label>
                        <input
                            id="corporate-user-type"
                            type="radio"
                            name="userType"
                            value={"corporate"}
                            onChange={changeHandler}
                            checked={values.userType === "corporate"}
                        />
                    </div>
                    <div>
                        <label htmlFor="identifier">{values.userType === "corporate" ? 'EIK' : 'EGN'}</label>
                        {values.userType === "corporate"
                            ? <input type="text" name="eik" id="identifier" value={values.eik} onChange={changeHandler}/>
                            : <input type="text" name="egn" id="identifier" value={values.egn} onChange={changeHandler}/>
                        }
                    </div>
                    <div>
                        <label htmlFor="tac">Term and Conditions: </label>
                        <input
                            id="tac"
                            type="checkbox"
                            name="tac"
                            checked={values.tac}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Login" disabled={!values.tac}/>
                    </div>
                    <div>
                        <label htmlFor="uncontrolled-input">Uncontrolled Input: </label>
                        <input type="text" name="uncontrolled" id="uncontrolled-input" ref={infoRef}/>
                    </div>
                </form>
            </header>
        </div>
    );
}
export default App;
