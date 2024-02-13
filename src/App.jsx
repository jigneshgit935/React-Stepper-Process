
import './App.css'
import Checkout from './Components/Checkout'

const Checkout_steps=[
  {
    name:"Customer Info",
    Component:()=><div>Provide your contact details</div>
  },
  {
    name:"Shipping Info",
    Component:()=><div>Enter your shipping address</div>
  },
  {
    name:"Payment",
    Component:()=><div>Complete payment for your order</div>
  },
  {
    name:"Delivered",
    Component:()=><div>Your order has been delivered</div>
  }

]

function App() {

  return (
    <div>
    <h2>Checkout Stepper</h2>
    <Checkout stepsConfig={Checkout_steps}/>
    </div>
  )
}

export default App
