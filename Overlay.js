import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    class="scroll">
    <div style={{ height: "400vh" }}>
      <div class="dot">
        <h1>Fomo Lab: Welcome To The Metaverse</h1>
        Virtual reality (VR) is the gateway to whole new world of creation.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>New Era of Sound</h1>
        Changing the rules of music ownership and distribution forever.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Lift Off</h1> The next leap forward for mankind. Digital worlds will be the native platform for our youth. Take part in building that future. $FOMO will support all
        creators of decentralized blockchain integrated digital applications built on web3 and 3js.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Data is the New Energy.</h1>A new energy economy is being built before our very eyes.. Data is the biggest and most powerful resources on the planet today. Learn how
        Fomo Lab harnesses data and blockchain to create new and interesting user experiences.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Take Your Seat At The Table.</h1>Fomo Lab is a community project and believes in community governance. we will be providing governance smart contracts on eth and bsc to
        give you a vote in the future direction of the company.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>The age of screens is almost complete.</h1>Soon screened devices will seem as obsolete as VHS Casette tapes. Learn how VR/AR is changing the technology landscape
        forever.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Openzeppelin</h1>Fomo Lab is powered by Open Zeppelin Smart contracts.
      </div>
    </div>
    <span class="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default Overlay
