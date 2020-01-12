import React from 'react';


class Header extends React.Component{
    render(){
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img src={this.props.src.urlPerfil} alt="foto do usuario" />
                    <figcaption className="foto-usuario">
                        <a href="#">
                        {this.props.src.loginUsuario}
                        </a>  
                    </figcaption>
                </figure>
        <time className="foto-data">{this.props.src.horario}</time>
            </header>
        );
    }
}

class Info extends React.Component{
    render(){
        return (
            <div className="foto-info">
                <div className="foto-info-likes">
                    {this.props.src.likers.map(liker => {
                        return (
                            <a href="#" key={liker.login}>{liker.login}, </a> 
                        );
                    })}
                     curtiram
                </div>

                <p className="foto-info-legenda">
                <a className="foto-info-autor">{this.props.src.loginUsuario} </a>
                {this.props.src.comentario}
                </p>

                <ul className="foto-info-comentarios">
                    {
                        this.props.src.comentarios.map(comentario => (
                            <li className="comentario" key={comentario.id}>
                                <a className="foto-info-autor">{comentario.login} </a>
                                {comentario.texto}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

class Atualizacoes extends React.Component{
    render(){
        return (
            <section className="fotoAtualizacoes">
                <a href="#" className="fotoAtualizacoes-like">Likar</a>
                <form className="fotoAtualizacoes-form">
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>
            </section>
        );
    }
}


export default class Foto extends React.Component{


    render(){
        return (
            <div className="foto">
                <Header src={this.props.src} />

                <img alt="foto" className="foto-src" src={this.props.src.urlFoto} />

                <Info src={this.props.src} />

                <Atualizacoes />

            </div>
        );
    }

}