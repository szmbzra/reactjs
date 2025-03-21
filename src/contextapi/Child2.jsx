import React from 'react'
import { MyContext, myContextNew } from './App';

export default function Child2() {
  // const sharedData = useContext(MyContext);
  // console.log(sharedData);
  return (
    <>
    <h3>Child2 Cmponents</h3>
    <MyContext.Consumer>
      {
      (sharedData) => {
      return (
        <myContextNew>
          {
            (sharedDataNew) =>{
              return (<p>
                {sharedData} = {sharedData}
              </p>
              )
            }
          }

        </myContextNew>
      )
      }
      }

    </MyContext.Consumer>

    </>
  )
}
