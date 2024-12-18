import classnames from "classnames";
import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MultiRangeSlider = ({ min, max, onChange }) => {    
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);
  // Calculate step based on the min/max range
  const step = Math.floor((max - min) / 100);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number
      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <SliderContainer>
      <input
        type="range"
        min={min}
        max={max}
        step={100}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": minVal > max - 100,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={100}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
      </div>
      <div className="slider-count">
        <div className="slider__left-value">${minVal}</div>
        <div>to</div>
        <div className="slider__right-value">${maxVal}</div>
      </div>
    </SliderContainer>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;

const SliderContainer = styled.div`
  padding-top: 17px;
  margin-bottom: 15px;
  position: relative;
  .slider-count {
    display: flex;
    position: relative;
    padding-top: 34px;
    font-size: 18.51px;
    font-weight: 400;
    line-height: 25.95px;
    gap: 18px;
  }
  .slider {
    position: relative;
    width:100%;
    &::after {
      content: "";
      width: 18px;
      height: 18px;
      position: absolute;
      background-color: #b3b3b3;
      border-radius: 50%;
      z-index: 1;
      top: -7px;
      left: 0;
    }
    &::before {
      content: "";
      width: 18px;
      height: 18px;
      position: absolute;
      background-color: #b3b3b3;
      border-radius: 50%;
      z-index: 1;
      top: -7px;
      right: 0;
    }
  }

  .slider__track,
  .slider__range {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: 5px;
  }

  .slider__track {
    background-color: #b3b3b3;
    width: 100%;
    z-index: 1;
  }

  .slider__range {
    background-color: #0b223c;
    z-index: 2;
  }

  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 100%;
    outline: none;
  }

  .thumb--zindex-3 {
    z-index: 3;
  }

  .thumb--zindex-4 {
    z-index: 4;
  }

  .thumb--zindex-5 {
    z-index: 5;
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    background-color: #0b223c;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #b3b3b3;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    background-color: #0b223c;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #b3b3b3;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;
