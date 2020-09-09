import React, { Component } from 'react';
import './Results.css';
import Confetti from 'react-confetti'
export default class Results extends Component {
    
    state = {
        winner : {}
    }

    componentDidMount() {
        this.setState({
            winner:this.props.participants.sort((a,b) => (a.votes > b.votes) ? -1: 1)[0]
        })
    }
    render() {
        const { winner } = this.state;
        console.log(winner,'wins')
        return (
            <>
                <Confetti width={window.outerWidth} height={window.outerHeight}/>
                <div className='row container'>
                    <div className='card text-dark sty'>
                        <div className='card-header'><h4> Winner </h4></div>
                        <img src={winner.image} alt='Participant' className='card-img-top' style={{width:'175px'}}/>
                        <div className='card-title'>
                            <h5>{winner.name}</h5>
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}
