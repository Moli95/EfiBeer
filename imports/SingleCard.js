import React, { Component } from 'react';
import classnames from 'classnames';

export default class extends Component {

    constructor(props) {
        super(props);

        this.toggleClicked = this.toggleClicked.bind(this);
        this.state = {
            clicked: false,
        };
    }

    toggleClicked() {
        this.setState({
            clicked: !this.state.clicked,
        });
    }

    render() {
        return (
            <div className="singleCardComponent">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8">
                            <div className="singleCard">
                                
                                <div 
                                    className={classnames('singleCardflipper', {
                                        rotate: this.state.clicked,
                                    })}
                                    onClick={this.toggleClicked}
                                >
                                <div className="singleCardFront">
                                    <div className="singleCardDescription">
                                        <h1 className="singleCardTitle">singleCardTitle</h1>
                                        <p>To jest przykładowa treść</p>
                                    </div>

                                    <div className="singleCardTrueFalse">
                                        <button type="submit" className="btn-success">
                                            Prawda <i className="fas fa-thumbs-up"></i>
                                        </button>
                                        <button type="submit" className="btn-danger" >
                                            Fałsz <i className="fas fa-thumbs-down"></i>
                                        </button>
                                    </div>

                                    <div className="singleCardABCD">
                                        <button type="submit" className="btn">
                                            (A) Odpowiedź A
                                        </button>
                                        <button type="submit" className="btn" >
                                            (B) Odpowiedź B
                                        </button>
                                        <br />
                                        <button type="submit" className="btn">
                                            (C) Odpowiedź C
                                        </button>
                                        <button type="submit" className="btn">
                                            (D) Odpowiedź D
                                        </button>
                                    </div>
                                </div>

                                <div className="singleCardBack">
                                    BACK_CARD
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
};
