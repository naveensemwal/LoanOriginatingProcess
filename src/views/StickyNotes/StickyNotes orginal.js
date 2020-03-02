import React, { Component } from 'react';
import ReactStickies from 'react-stickies';
import "antd/dist/antd.css";

export default class StickyNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
        this.onChange = this.onChange.bind(this)
        this.onSave = this.onSave.bind(this)
    }
    onSave () {
        // Make sure to delete the editorState before saving to backend
        const notes = this.state.notes;
        notes.map(note => {
          delete note.editorState;
        })
        // Make service call to save notes
        // Code goes here...
      }
      onChange (notes) {
        this.setState({ // Update the notes state
          notes
        })
      }
    render() {

        return (
            <div>
                <ReactStickies
                    notes={this.state.notes}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
