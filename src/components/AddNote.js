import { useState } from "react";

const AddNote =({handleAddNote})=>{
    // Before the note can be saved, we need to know what the user has typed. useState hook is used to save the value 
    // When user types into text area, state value is updated using onchange property
    const [noteText, setNoteText] = useState("");

    const handleChange = (event)=>{
        setNoteText(event.target.value) //State is updated everytime the value of the text area changes  
    }

    const handleSaveClick = ()=>{
        //Checking if the value the user has added is valid before saving it to state
        if(noteText.trim().length > 0){
            // State to be updated with new note
            handleAddNote(noteText)
            setNoteText("")
        }
        
    }
    return(
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Type to add a note..." 
                value={noteText} //So we can have control over what the textarea value is 
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;