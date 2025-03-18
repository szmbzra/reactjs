import React,{forwardRef, useRef, useImperativeHandle} from 'react'

 function ChildrenComponent(props, ref) {
    // eg 2
    const childRef = useRef();
    const handleChildBUttonClick = () =>{
        console.log("child button clicked");
    };
    useImperativeHandle(ref, ()=>({
        handleChildBUttonClick,
    }));
  return (
<>
{/* eg 1 */}
    <input type="text" ref ={ref} />
   {/* eg2 */}
    <button ref={childRef}>Click Me</button></>
  )
}
export default forwardRef(ChildrenComponent);