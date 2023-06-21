import { useEffect, useState, useRef } from 'react';
function ShowHide() {
    let showDOM = useRef(true);
  const [show, setShow] = useState(true);
  useEffect(() => {
    window.setInterval(() => {
      if (showDOM.current) {
        setShow(false);
        showDOM.current = false;
      } else {
        setShow(true);
        showDOM.current = true;
      }
    }, 2000);
  }, []);
  return (
    <div>
        {show && (<p >This paragraph will blink in every 2 seconds</p>)}
      {!show && (<p className="hidden">This paragraph will blink in every 2 seconds</p>)}
    </div>
  )
}

export default ShowHide