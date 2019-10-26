import React from 'react'
import './configurator.styles.scss'

import {connect} from 'react-redux';
import {getFull, getMonth, getTotal, getCalculator} from '../../redux/configurator/configurator.reducer';
import {setFull,setMonth, setConfiguration} from '../../redux/configurator/configurator.actions';
import fetchConfigurators from '../../redux/configurator/fetchConfigurator';

class ConfiguratorComponent extends React.Component{
    constructor(props){
        super(props)
      }
    
      componentDidMount(){
        this.props.setConfiguration();        
      }
    render(){
        
    return (
        <div className='configurator'>
            <div className='left'>
                <h2>{this.props.info != null ? this.props.info.title : null}</h2>
                <p>{this.props.info != null ? this.props.info.description : null}</p>
            </div>
            <div className='options'>
                <div className='option-item'>
                    
                    <div className='item-header'>
                    <h4>Montly ingredient spending</h4>
                        <span>{this.props.month}</span>
                    </div>
                    <input type="range" min='10' max='100' value={this.props.month} onChange={event => this.props.setMonth(event)}/>
                </div>
                <div className='option-item'>
                    <div className='item-header'>
                        <h4>Full-Time Employees...</h4>
                        <span>{this.props.full}</span>
                    </div>
                    <input type="range" min='1' max='10' value={this.props.full} onChange={event => this.props.setFull(event)} />
                    <div className='item-header-right'>
                        <h4>Estimed Food Cost Saving</h4>
                        <span>{(this.props.full* 0.3).toFixed(1)}</span>
                    </div>
                </div>
                <hr />
                <div className='option-item'>
                    <div className='item-header total'>
                        <h4>Your estimated annual savings</h4>
                        <p>{this.props.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}}

const mapStateToProps = (state) => ({
    total: getTotal(state),
    full: getFull(state),
    month: getMonth(state),
    info: getCalculator(state),
  })
  
  const mapDispatchToProps = (dispatch) => ({
    setFull: e => dispatch(setFull(e.target.value)),
    setMonth: e => dispatch(setMonth(e.target.value)),
    setConfiguration: () => dispatch(fetchConfigurators())
  });

//export default ConfiguratorComponent;
export default connect(mapStateToProps,mapDispatchToProps)(ConfiguratorComponent);