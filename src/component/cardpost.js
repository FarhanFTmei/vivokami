import React, { Component } from 'react'
import img from './pipo.png'
import './cardstyle.css'
 
class cardpost extends Component {
    render() {
        return (
            <div>
                <div className="column">
                    <div className="card">
                        <img src={img} />
                        <div className="card-title">
                            <h4>{this.props.title}</h4>
                        </div>
                        <div className="card-conten">
                            {this.props.conten}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default cardpost;