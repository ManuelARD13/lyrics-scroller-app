import { useCallback, useEffect, useState } from "react";

const SCROLLBEHAVIOUR: ScrollBehavior = "smooth";
const BPMCEIL = 400;
const BPMFLOOR = 30;

function LyricsScroller({ lyrics }: { lyrics: string }) {
  const [bpm, setBpm] = useState(80);
  const [isPlaying, setIsPlaying] = useState(false);

  const getMovementRatio = useCallback((): number => {
    let movementRatio = 0;
    if (bpm < 30) {
      movementRatio = 1;
    }
    movementRatio = Math.floor(bpm / 30);

    return movementRatio;
  }, [bpm]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTouch = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const lyricsContainer = document.querySelector(".lyrics-container");
    const interval = setInterval(() => {
      if (lyricsContainer && isPlaying) {
        const scrollThumbSizeRate = 890 / lyricsContainer.scrollHeight;
        const totalScrollPathSize =
          lyricsContainer.scrollHeight * (1 - scrollThumbSizeRate);
        lyricsContainer.scrollBy({
          top: getMovementRatio(),
          behavior: SCROLLBEHAVIOUR,
        });
        if (lyricsContainer.scrollTop >= totalScrollPathSize) {
          setIsPlaying(!isPlaying);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, getMovementRatio]);

  const handleBpmChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    //TODO: While Pressing keep updating
    event.preventDefault();
    if (Number(event.currentTarget.id) === 0 && bpm < BPMCEIL) {
      setBpm(bpm + 1);
    } else if (bpm > BPMFLOOR) {
      setBpm(bpm - 1);
    }
  };

  return (
    <>
      <div className="lyrics-container" onTouchStart={handleTouch}>
        {lyrics}
      </div>
      <button className="play-button" onClick={handlePlay}>
        {">"}
      </button>
      <div className="controls">
        <div className="controls__btn-container">
          <button className="controls-button" id="0" onClick={handleBpmChange}>
            +
          </button>
          <button className="controls-button" id="1" onClick={handleBpmChange}>
            -
          </button>
        </div>
        <p>BPM: {bpm}</p>
      </div>
    </>
  );
}

export default LyricsScroller;
