import React from 'react';
import Foto from './Foto';

export default class TimeLine extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fotos: []
        }
    }

    componentDidMount(){
        fetch(`https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
        .then(response => response.json())
        .then(fotos => {
            this.setState({fotos: fotos});
        })
        .catch(err => {
            this.setState({fotos: []});
        });
    }

    render(){
        return(
            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <Foto key={foto.id} src={foto} />)
                }
            </div>
        );
    }
}