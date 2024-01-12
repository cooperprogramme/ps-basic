import { useState } from 'react';
import FontSizeMenu from '@/components/FontSizeMenu';
import ChangeColorMenu from '@/components/ChangeColorMenu';
import InfoDetails from '@/components/InfoDetails';
import LoopText from '@/components/LoopText';
import AlternativeToggle from '@/components/AlternativeToggle';

const App = () => {
  const defaulText = `Google, Nike, 
Youtube, Apple, 
Netflix, Nintendo, 
McDonald's...
↓

Hello there, 
Let's play :) ...
↓
  
You can start
typing to edit this
text and change
the colour above.
↓

Change the font
style, and edit the
size, kerning and
leading using the
range sliders^

3,2,1 = Go!

P.S.
Keep in touch =
@portalstudio.uk

<3`;

  let [changeBgColor, setChangeColor] = useState('#E24523');
  let [changeTextColor, setChangeTextColor] = useState('#000');
  let [changeDeepColor, setDropdownColor] = useState('');
  let [dropDownCircle, setDropDownCircle] = useState('black');
  const [textValue, setTextValue] = useState(defaulText);
  let [size, setChangeSize] = useState(200);
  let [spacing, setLetterSpacing] = useState(-18);
  let [leading, setLineHeight] = useState(80);
  let [height, setHeight] = useState(480);
  let [weight, setWeight] = useState('');
  let [counter, setCounter] = useState(0);
  const [enabled, setAlternative] = useState(false);

  const clickCounter = () => {
    setCounter(counter + 1);
    if (counter == 0) {
      let newValue = `Dieter Rams, 
Emil Ruder,
Karl Gerstner,
Massimo Vignelli,
Armin Hofmann,
Adrian Frutiger,
Max Huber,
Piet Mondrian,
Ettore Sottsass,
Josef Albers,
Le Corbusier,
Max Bill...`;
      setTextValue(newValue);
    } else if (counter == 1) {
      let newValue = `AaBbCcDdEe
FfGgHhIiJjKk
LlMmNnOoPp
QqRrSsTtUu
VvWwXxYyZz
+0123456789`;
      setTextValue(newValue);
    } else if (counter == 2) {
      let newValue = `Basel +
Zurich =
Basic`;
      setTextValue(newValue);
    } else if (counter == 3) {
      let newValue = defaulText;
      setTextValue(newValue);
      setCounter(0);
    }
  };

  const handleBgColor = (value) => {
    changeBgColor = value.bg;
    changeTextColor = value.text;
    setChangeColor(changeBgColor);
    setChangeTextColor(changeTextColor);
    // console.log('bg:', changeBgColor, 'text:', changeTextColor);
    // Colors combination available
    if (changeBgColor === '#000') {
      // bg is black
      if (changeTextColor === '#fff') {
        // text is white
        changeDeepColor = 'black-white';
        dropDownCircle = 'white';
      } else {
        // text is red
        changeDeepColor = 'black-red';
        dropDownCircle = 'red';
      }
    } else if (changeBgColor === '#E24523') {
      // bg is red
      if (changeTextColor === '#fff') {
        // text is white
        changeDeepColor = 'red-white';
        dropDownCircle = 'white';
      } else {
        // text is black
        changeDeepColor = 'red-black';
        dropDownCircle = 'black';
      }
    } else if (changeBgColor === '#4B4E54') {
      // bg is grey
      if (changeTextColor === '#fff') {
        // text is white
        changeDeepColor = 'grey-white';
        dropDownCircle = 'white';
      } else {
        // text is black
        changeDeepColor = 'grey-black';
        dropDownCircle = 'black';
      }
    } else {
      // bg is white
      if (changeTextColor === '#000') {
        // text is black
        changeDeepColor = 'white-black';
        dropDownCircle = 'black';
      } else {
        // text is red
        changeDeepColor = 'white-red';
        dropDownCircle = 'red';
      }
    }
    setDropdownColor(changeDeepColor);
    setDropDownCircle(dropDownCircle);
  };

  const injectDetailsText = () => {
    weight = 'PSBasic1200-660Regular';
    size = 74;
    spacing = -6;
    leading = 84;
    dropDownCircle = 'black';
    changeBgColor = '#4b4e54';
    changeTextColor = '#000';
    changeDeepColor = 'grey-black';
    let newValue = `PS Basic; is a structural type system drawn on a rigid grid of twelve hundred square units, divided into twenty three vertical paths (12 columns and 11 intervals). Consisting of 60 styles, 5 widths and 6 weights, from light to bold, narrow to wide, including italics, diacritics for language support, and containing alternative character sets.

The name is derived from its conceptual meaning, the purpose is to produce an experiment that aims to align two subtly different modernist approaches circa 1957 in Switzerland. The release of Univers by Adrian Frutiger gained popularity in Basel, while Helvetica was preferred as the primary font in Zurich.

The letters ‘Bas’ from ‘Basil’, and ‘ic’ from ‘Zurich’, the name ‘Basic’ contains ethos and mantras of both similar, yet subtly different approaches. Oldstyle characters such as the lowercase ‘g’, the tail on the lowercase ‘l’ etc. give reference to the pre-and-post war era, while appearing classical yet enhancing readability through their difference in form.

PS Basic is the first project by studio PSfD® ('Programme Studio for Design'), an experimental visual design studio founded in 2020, existing to study programmatic design systems in visual communication.

©2023 portal studio™
portalstudio.uk
talk@portalstudio.uk
@portalstudio.uk`;
    setTextValue(newValue);
    setChangeSize(size);
    setLetterSpacing(spacing);
    setLineHeight(leading);
    setChangeColor(changeBgColor);
    setChangeTextColor(changeTextColor);
    setDropdownColor(changeDeepColor);
    setDropDownCircle(dropDownCircle);
  };

  const toggleWeight = (value) => {
    weight = value;
    setWeight(weight);
  };

  const onInputSize = (value) => {
    let newHeight = Math.round(parseInt(value) * 10);
    height = newHeight;
    // console.log(height);
    setHeight(height);
  };

  const onChangeSize = (value) => {
    size = value;
    setChangeSize(parseInt(size));
  };

  const letterSpacingChange = (e) => {
    // console.log('setting letter spacing', e.target.value);
    setLetterSpacing(parseInt(e.target.value));
  };

  const lineHeightChange = (e) => {
    // console.log('setting line height', e.target.value);
    setLineHeight(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col h-screen">
      <nav
        style={{
          backgroundColor: changeBgColor,
          color: changeTextColor,
        }}
        className="w-full py-1 sticky top-0"
      >
        <div
          style={{
            backgroundColor: changeBgColor,
            color: changeTextColor,
          }}
          className="mx-5 flex flex-wrap justify-start xl:justify-between items-center text-white"
        >
          <a href="/">PS Basic</a>
          <div className="ml-20 xl:ml-5">
            <FontSizeMenu className={changeDeepColor} weight={weight} toggleWeight={toggleWeight} />
          </div>
          <div
            style={{
              backgroundColor: changeBgColor,
              color: changeTextColor,
            }}
            className="flex w-full xl:w-auto"
          >
            <ul
              style={{
                backgroundColor: changeBgColor,
                color: changeTextColor,
              }}
              className="flex flex-col xl:flex-row w-full px-4 py-2 xl:px-0 fixed bottom-0 left-0 xl:left-10 xl:relative xl:top-0 bg-black"
            >
              <li className="xl:!pl-0 flex">
                <label
                  htmlFor="size"
                  className="flex w-full max-w-[85px] min-w-[125px] xl:min-w-[95px] xl:max-w-full"
                >
                  Size: {size + 'px'}
                </label>
                <input
                  className={changeDeepColor}
                  value={size}
                  onChange={(e) => onChangeSize(e.target.value)}
                  onInput={(e) => onInputSize(e.target.value)}
                  type="range"
                  id="size"
                  name="size"
                  min="16"
                  max="900"
                />
              </li>
              <li className="flex ml-0 xl:ml-7">
                <label
                  htmlFor="kern"
                  className="flex w-full max-w-[80px] min-w-[125px] xl:min-w-[90px]"
                >
                  Kern {Math.round(spacing) + 'px'}
                </label>
                <input
                  className={changeDeepColor}
                  value={spacing}
                  onChange={letterSpacingChange}
                  type="range"
                  id="kern"
                  name="kern"
                  min="-72"
                  max="12"
                />
              </li>
              <li className="flex ml-0 xl:ml-7">
                <label
                  htmlFor="leading"
                  className="flex w-full max-w-[110px] min-w-[125px] xl:min-w-[120px]"
                >
                  Leading {leading + 'px'}
                </label>
                <input
                  className={changeDeepColor}
                  value={leading}
                  onChange={lineHeightChange}
                  type="range"
                  id="leading"
                  name="leading"
                  min="72"
                  max="120"
                />
              </li>
            </ul>
          </div>
          <div className="flex absolute right-5 xl:right-0 xl:relative">
            <LoopText className={changeDeepColor} clickCounter={clickCounter} />
            <AlternativeToggle className={changeDeepColor} setAlternative={setAlternative} />
            <ChangeColorMenu
              handleBgColor={handleBgColor}
              changeBgColor={changeBgColor}
              dropDownCircle={dropDownCircle}
            />
            <InfoDetails injectDetailsText={injectDetailsText} />
          </div>
        </div>
      </nav>
      <main
        style={{
          backgroundColor: changeBgColor,
          color: changeTextColor,
        }}
        className="text-white flex-1 overflow-y-scroll"
      >
        <textarea
          spellCheck="false"
          className={`w-full max-w-[320px] min-h-full xs:max-w-full px-4 ${changeDeepColor} ${weight} ${
            enabled ? 'ligatures' : ''
          }`}
          style={{
            fontSize: size + 'px',
            letterSpacing: spacing + 'px',
            lineHeight: leading + '%',
            height: height + 'px',
          }}
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Type here..."
          value={textValue}
          onChange={({ target }) => setTextValue(target.textValue)}
        ></textarea>
      </main>
    </div>
  );
};

export default App;
