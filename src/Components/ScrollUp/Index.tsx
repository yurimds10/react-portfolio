import React, { useState } from "react";
import { ScrollUp } from "./style";



export default function ScrollUpButton() {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const scrollY: number = window.scrollY;

  function showScrollUp() {
    if(scrollY >= 560) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  }

  showScrollUp();

  return(
    <ScrollUp showScroll={showScroll}>
      <i className="uil uil-arrow-up"></i>
    </ScrollUp>
  ) 
}
