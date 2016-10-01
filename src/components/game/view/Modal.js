import React, {Component} from 'react'
import ReactDOM from 'react-dom'


export default class Modal extends Component {

    handleBlur(event){
        if(event.target.value.length > 0){
            this.props.addNameToNewCreature(event.target.value)
        } else {
            this.props.notifyError()
        }
    }

    handleSubmit(){
        if(this.props.creatures[this.props.creatures.length -1 ]['name'].length > 0){
            this.props.hideModal()
            ReactDOM.findDOMNode(this.refs.inputName).value = ''
        } else {
            this.props.notifyError()
        }
    }

    renderErrorMessage(){
           return this.props.view.nameError ?<div className="form-control-feedback">You forgot to name your creature</div>: null
    }



    render(){
    const nameInputClass = this.props.view.nameError ?  "form-group row has-danger" : "form-group row"
    const newCreature = this.props.creatures[this.props.creatures.length -1]
    const style = this.props.view.displayModal ? {display: 'block', backgroundColor: 'rgba(89,89,89,0.5)'} : null

     return(
        <div className="modal" style={style}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form>
                                <div className={nameInputClass}>
                                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputName" ref="inputName"placeholder="Fido" onBlur={this.handleBlur.bind(this)}/>
                                        {this.renderErrorMessage()}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Age</label>
                                    <div className="col-sm-10">
                                        <p className="form-control-static">{newCreature.age}</p>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Mana</label>
                                    <div className="col-sm-10">
                                        <p className="form-control-static">{newCreature.mana}</p>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Type</label>
                                    <div className="col-sm-10">
                                        <p className="form-control-static">{newCreature.type}</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Capture your new creature</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}