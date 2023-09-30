import React, { useState, useEffect } from 'react'

export const Textform = (props) => {
    const [text, setText] = useState("Enter text here");
    const [num, setnum] = useState([]);

    //use effect
    useEffect(()=>{

        const asyncF = async()=>{
            const data = await fetch();
            // console.log(data)
            const response = await data.json();
           
            setnum(response)
           

        }

       // asyncF();
       
    },[])
    //Uppercase
    const uppercase = () => {
      let newText= text.toUpperCase();
      setText(newText);
      props.showalert("Converted to uppercase", "Sucessfully :  ");
    }

    //Lowercase
    const lowercase = () => {
        let newText= text.toLowerCase();
      setText(newText);
      props.showalert("Converted to Lowercase", "Sucessfully :  ");


    }

    //clear function
    const clear = () => {
        let newText=" ";
        setText(newText);
        props.showalert("Cleared text box", "Sucessfully :  ");
    }

    //onchange
    const handleonchange = (event) => {
        setText(event.target.value);
    }

    //Copy function
    const copy= ()=>{
     var text= document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(Text.value);
    props.showalert("Copied text", "Sucessfully :  ");
}
 // remove spaces using split
 const spaces= ()=>{
    let sap=text.split(/[ ]+/);
    setText(sap.join(" "));
    props.showalert("Remove the extra spaces", "Sucessfully :  ");
 }
    return (
        <>
            <div>
                <h3>Enter text here to analize</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8" />

                </div>
            </div>
            <div className="my-3">
                <button type="button" className="btn btn-primary my-1  mx-1" onClick={uppercase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary  my-1  mx-1" onClick={lowercase}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary  my-1  mx-1" onClick={clear}>Clear</button>
                <button type="button" className="btn btn-primary  my-1  mx-1" onClick={copy}>Copy</button>
                <button type="button" className="btn btn-primary  my-1 mx-1" onClick={spaces}>Remove spaces</button>
            </div>
            <div className='container'>
                <h3>Your text summery</h3>
                <p>{text.split(" ").length} Words and {text.length} Charaters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length}Minutes to read</p>
                <h2>Text-Preview</h2>
                <p>{text}</p>
                
                
            <div>
                {
                    num.map((value, index, num)=>{
                        return <div >
                         <div style={{width:"300px", height:"300px", backgroundColor:"yellow" , display:"flex", alignItems:"center"}}>
                        
                        <p>{value.userId}</p>
                        <p> {value.title}</p>
                        <p>{value.completed ? "true" : "false"}</p>

                        </div>
                        <br/>
                        </div>
                    })
                    }
                </div>
            </div>
        </>
    )
}
