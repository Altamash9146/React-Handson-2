import React,{useState} from "react";

export function Form(){
const [formData, setformData]= useState({name:"",Department:"",Rating:""})
const [formSubmissions, setFormSubmissions] = useState([]);
const [dataShow, setdataShow]=useState(false)

const handleChange =(event)=>{
    const {name, value } = event.target;
    setformData({...formData, [name]:value})

}

const handleSubmit =(event)=>{
    event.preventDefault();
    setFormSubmissions([...formSubmissions, formData]);
    setformData({name:"",Department:"",Rating:""});
    setdataShow(true)
}


return(

<div>
<h1 className="Heading">Employee Feedback Form</h1>

<hr></hr>

<form onSubmit={handleSubmit}>

<label className="Modifyform">
Name:
    <input type="text" name="name" value={formData.name} onChange={handleChange} className="box box1"/>
</label>
<br></br> <br></br> <br></br> <br></br> 

<label className="Modifyform">
Department:
    <input type="text" name="Department" value={formData.Department} onChange={handleChange} className="box"/>
</label>
<br></br> <br></br> <br></br> <br></br> 

<label className="Modifyform">
Rating:
    <input type="text" name="Rating" value={formData.Rating} onChange={handleChange} className="box box1"/>
</label>
<br></br> <br></br> <br></br> <br></br> 

<button type="submit" className="Submit">Submit</button>

</form>

<div className="Value-Container">
{dataShow && formSubmissions.map((submission,index) => (
<div key={index}  className="Value-Box">
<p> Name: {submission.name} | Department: {submission.Department}| Rating: {submission.Rating}</p>
</div>
))}
</div>

</div>
)
}
