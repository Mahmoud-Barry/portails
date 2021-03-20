import React, {Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

    constructor(props) {
        super(props)

        this.popUpContainer = document.createElement('div');
        
        document.body.appendChild(this.popUpContainer);
    }

    componentWillUnmount() {
        document.body.removeChild(this.popUpContainer);
    }
    
    
    render() {
        return ReactDOM.createPortal(
            <div className="modal" onClick={this.props.close}>
                <div>
                    <p>lorem ipsum dolor , djfsdk fdsfjsd flsdfjsdlk fsldfj sdlf lsdfjsdkf dslfjsd lf sdlkfjsd lkfsdjf sdlfjsd flsdjq fks dsd</p>
                    <button>Fermer</button>
                </div>
            </div>,
           this.popUpContainer
        )
    }
}

export default Modal;