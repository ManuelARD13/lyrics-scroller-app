// import { useState } from "react";
import LyricsScroller from "./components/LyricsScroller";

function App() {

  const lyrics = `I was so high I did not recognize
  The fire burning in her eyes
  The chaos that controlled my mind
  Whispered goodbye as she got on a plane
  Never to return again
  But always in my heart
  Oh
  
  This love has taken its toll on me
  She said goodbye too many times before
  And her heart is breaking in front of me
  And I have no choice
  'Cause I won't say goodbye anymore
  
  Whoa-oh-oh
  Whoa-oh-oh
  Whoa-oh-oh-ooh
  
  I tried my best to feed her appetite
  Keep her coming every night
  So hard to keep her satisfied
  Oh, kept playing love like it was just a game
  Pretending to feel the same
  Then turn around and leave again
  But I know
  
  This love has taken its toll on me
  She said goodbye too many times before
  And her heart is breaking in front of me
  And I have no choice
  'Cause I won't say goodbye anymore
  
  Whoa-oh-oh
  Whoa-oh-oh
  Whoa-oh-oh-ooh
  
  I'll fix these broken things
  Repair your broken wings
  And make sure everything's alright (it's alright, it's alright)
  My pressure on your hips
  Sinking my fingertips
  Every inch of you
  Because I know that's what you want me to do
  
  This love has taken its toll on me
  She said goodbye too many times before (oh)
  And her heart is breaking in front of me
  And I have no choice
  'Cause I won't say goodbye anymore
  
  This love has taken its toll on me
  She said goodbye too many times before (oh)
  And my heart is breaking in front of me
  She said goodbye too many times before
  
  This love has taken its toll on me (oh, yeah, yeah)
  She said goodbye too many times before (yeah, oh)
  And her heart is breaking in front of me (yeah)
  I have no choice
  'Cause I won't say goodbye anymore
   `
  
  

  

  return (
    <>
      <LyricsScroller lyrics={lyrics} />
    </>
  );
}

export default App;
