import React from 'react'
import './slide.styles.scss'
import logo from '../../user.png';
import quote from '../../left-quote.png';
import {connect} from 'react-redux';
import {getTestimonials} from '../../redux/slide/slide.reducer';
import fetchTestimonials from '../../redux/slide/fetchTestimonials';


class Slider extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getTestimonials();
    
  }
  render(){
    
    if (this.props.test != null) {
      const {title, reviews} = this.props.test;
      return (
          <div className='testimonial'>
              <h1>{title}</h1>
              <div className='container'>
                <div className='slider'>
                  {
                    reviews.map((item, index) => {
                      return (
                        <div className={`slide slide${index+1}`} key={index}>
                          <div className='box'>
                            <div className='photo'>
                              <img src={logo} alt="imagen" height='200'/>
                            </div>
                            <div className='details'>
                              <h4>{item.name} <br /> <span>{item.position}</span></h4>
                              <p>{item.comment}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  </div>
              </div>
            </div>  
      )
    }else{
      return null
    }
}}

const mapStateToProps = (state) => ({
    test: getTestimonials(state)
  })
  
  const mapDispatchToProps = (dispatch) => ({
    getTestimonials:()=>dispatch(fetchTestimonials())
  });

export default connect(mapStateToProps,mapDispatchToProps)(Slider);