import classes from './Counter.module.css';
import { Component } from 'react';
import { counterActions } from '../store/counter';
import { useSelector,useDispatch ,connect } from 'react-redux';


const Counter = () => {
  const dispatch = useDispatch();
const counter = useSelector(state=>state.counter.counter);
const show =useSelector(state=>state.counter.showCounter);
const incrementHandler = ()=>{
  // dispatch({type:'increment'});
  dispatch(counterActions.increment())
};
const increaseHandler = ()=>{
  dispatch(counterActions.increase(10))
};

const decrementHandler =()=>{
  // dispatch({type:'decrement'});
  dispatch(counterActions.decrement())
};

  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>
          Increment
        </button>
        <button onClick={increaseHandler}>
          Increment by 5
        </button>
        <button onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
//  class Counter extends Component {
//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){

//     this.props.decrement();
//   }
//   toggleCounterHandler(){}
//   render(){
//     (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>
//             Increment
//           </button>
//           <button onClick={this.decrementHandler.bind(this)}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );


//   }
//  }
//  const mapStatetProps = state=>{
//   return{
//  counter:state.counter
//   };
//  }
//  mapDispatchToProps = dispatch =>{
//   return {
//     increment:() => dispatch({type:'increment'}),
//     decrement:() => dispatch({type:'decrement'})

//   }
//  };

// export default connect(mapStateProps,mapDispatchToProps)(Counter);
