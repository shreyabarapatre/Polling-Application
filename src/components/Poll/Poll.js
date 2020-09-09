import React, { Component } from 'react'
import Results from '../Results/Results'
import './Poll.css';
export default class Poll extends Component {
    constructor(props){
        super(props)
        this.state={
            participants : [
                {
                    'name':'Rachel Zane',
                    'image':'https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png',
                    'votes':0
                },
                {
                    'name':'Harvey Spectre',
                    'image':'https://www.signivis.com/img/custom/avatars/member-avatar-01.png',
                    'votes':0
                },
                {
                    'name':'Micheal Ross',
                    'image':'https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png',
                    'votes':0
                },
                {
                    'name':'Donna Paulson',
                    'image':'https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1609/yupiramos160912725.jpg',
                    'votes':0
                },
                {
                    'name':'Louis Litt',
                    'image':'https://pickaface.net/gallery/avatar/Sonofston52b9c7f9e3662.png',
                    'votes':0
                }
            ],
            voters : this.props.voters
        }
    }
    submitVote = (participant, voters, participants) => {
        participant.votes = participant.votes + 1;
        this.setState({
            voters: voters -1 
        })
    }
    render() {
        let  {participants , voters } = this.state;
        return (
                <div className='row'>
                    { 
                        voters > 0 ? (
                            participants.map(participant => (
                                <div className='card text-dark col-md-2 mar' key = {participant.name} >
                                    <img className='card-img-top img' src={participant.image} alt='participant' style={{height:'250px'}}/>
                                    <h5 className='card-title'>{ participant.name }</h5>
                                    <button className='btn btn-primary' onClick={() => {this.submitVote(participant,voters,participants)}}>
                                        Vote
                                    </button>
                                    {console.log(voters,'vaters')}
                                </div>         
                            ))
                        ) : <Results participants={participants}/>
                    } 
                </div>  
                        
            
            
        )
    }
}
