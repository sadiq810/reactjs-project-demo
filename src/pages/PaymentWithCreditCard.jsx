import React, {useState} from "react";
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {getProgramById} from "../redux/selectors/ProgramSelector";
import TextBoxComponent from "../components/TextBoxComponent";
import {processPaymentForProgram} from "../redux/actions";

const PaymentWithCreditCard = ({history, match, programs, processPayment}) => {
    const [card, setCard] = useState({card_number: '', expiry: '', cvv: ''});

    const setState = (field, value) => {
        setCard({...card, [field]: value});
    }

    const program = () => {
        return getProgramById(match.params.id, programs)
    }

    let p = program();

    const doPayment = (e) => {
        e.preventDefault();
        processPayment(p.id);
        history.push('/payment-success')
    }

    return (
        <div className="container-fluid mWidth95percent bg-white">
            <div className="container pt-5 pb-5">
                <div className="col-lg-12 col-md-12 col-sm-12 program--main-box">
                    <div className="row program--wrapper">
                        <div className="col-lg-6 m-auto">
                            <h3 className={'font-weight-bold mb-2 text-center'}>Your Payment</h3>
                            <div className="row mt-40">
                                <div className="col-lg-6 mb-20 font-weight--bold ">Total Bill</div>
                                <div className="col-lg-6 mb-20 font-weight--bold" >USD {p.fee.toLocaleString()}</div>

                                <div className="col-lg-12 col-sm-12 col-md-12">
                                    <form action="#" onSubmit={doPayment}>
                                        <div className="row">
                                            <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                                                <TextBoxComponent setState={setState} label={'Card Number'} value={card.card_number} field={'card_number'} key={'card_number'} placeholder={"Card number..."}/>
                                            </div>
                                            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                                <TextBoxComponent setState={setState} label={'Expiry'} value={card.expiry} field={'expiry'} key={'expiry'}/>
                                            </div>
                                            <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                                <TextBoxComponent setState={setState} label={'Security'} value={card.cvv} field={'cvv'} key={'cv code'}/>
                                            </div>
                                        </div>
                                        <div className="row mt-40">
                                            <button type={'submit'} className={'btn btn-primary btn-large btn-medium m-auto'}>Deposit</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="row text-center mt-40 back--link">
                                    <Link to={'/payment-options/'+match.params.id}><i className={'icofont-curved-left font-weight--bold'}></i>Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        processPayment: (payload) => dispatch(processPaymentForProgram(payload)),
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    programs: state.programs.user_programs,
    loading: state.programs.loading,
    error: state.programs.error
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaymentWithCreditCard));
