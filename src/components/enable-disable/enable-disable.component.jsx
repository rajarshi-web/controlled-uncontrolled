import { useEffect, useState, useRef } from 'react';
function EnableDisable() {
    let enableDOM = useRef(true);
  const [enable, setEnable] = useState(true);
  useEffect(() => {
    window.setInterval(() => {
      if (enableDOM.current) {
        setEnable(false);
        enableDOM.current = false;
      } else {
        setEnable(true);
        enableDOM.current = true;
      }
    }, 2000);
  }, []);
  return (
    <div>
        {enable && (<button>Click me</button>)}
      {!enable && (<button className="disabled">Click me</button>)}
    </div>
  )
}

export default EnableDisable