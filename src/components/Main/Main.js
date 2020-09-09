import React, { Component } from 'react'
import './Main.css';
import Poll from '../Poll/Poll';
export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            voters:0,
            valid :false
        }
    }

    onChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = e =>{
        e.preventDefault()
        this.setState({
            valid:true
        })
    }

    render() {
       let { voters, valid } = this.state;
        return (
            <div className="card bg-dark text-white card-1">
                <div className="card-header">
                   <h1>Polling Application</h1>
                </div>
                <div className="card-body">
                    {
                        valid ? (
                            <Poll voters = {voters} />
                        ) : (
                            <>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="voters">Enter No of Voters</label>
                                    </div>
                                    <div className='col-md-6'>
                                        <input
                                            type="text"
                                            name="voters"
                                            className='form-control'
                                            placeholder="eg. 10"
                                            defaultValue={voters}
                                            onChange={this.onChange}                               
                                        />
                                    </div>
                                </div> 
                                <br/><br/>
                                <button
                                    className="btn btn-secondary"
                                    onClick={this.onSubmit}
                                >
                                    Proceed
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        )
    }
}
