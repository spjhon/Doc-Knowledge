---
sidebar_position: 3
---

# Controlled Inputs

## Handling Text Inputs

![Guia de 5 pasos de grider](../../src/images/018%20como%20manejar%20INPUTS.jpg)

***

## Text Input

In functional components in React, controlled inputs refer to form elements whose values are controlled by the state of the component. This means that the input's value is not only determined by the user's interaction but is also tied to a piece of state managed by the component.

Here's an example of a controlled input in a functional React component:

```jsx
import React, { useState } from 'react';

const ControlledInputExample = () => {
  // State to hold the value of the input
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the state when the input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Controlled input */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Display the current input value */}
      <p>Current input value: {inputValue}</p>
    </div>
  );
};

export default ControlledInputExample;
```

In this example:

1. We use the `useState` hook to create a piece of state (`inputValue`) that will hold the value of the input.

2. The `input` element is a controlled input because its `value` attribute is set to the `inputValue` state. This means the input's value is controlled by the state.

3. The `onChange` event handler (`handleInputChange`) is triggered whenever the user types in the input field. It updates the `inputValue` state with the current value of the input.

4. The current value of the input is displayed below the input field.

By using controlled inputs, you can easily manage and manipulate the state of your form elements in a React functional component.

***

## Select Input

Certainly! The approach for handling a controlled `<select>` element is similar to that of an `<input>` element. Here's an example of a functional React component with a controlled `<select>`:

```jsx
import React, { useState } from 'react';

const ControlledSelectExample = () => {
  // State to hold the selected value of the <select>
  const [selectedValue, setSelectedValue] = useState('');

  // Event handler to update the state when the <select> changes
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {/* Controlled select */}
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {/* Display the current selected value */}
      <p>Selected value: {selectedValue}</p>
    </div>
  );
};

export default ControlledSelectExample;
```

In this example:

1. We use the `useState` hook to create a piece of state (`selectedValue`) that will hold the selected value of the `<select>`.

2. The `<select>` element is a controlled select because its `value` attribute is set to the `selectedValue` state.

3. The `<option>` elements within the `<select>` define the available options. The `value` attribute of each option is what will be set in the `selectedValue` state when an option is selected.

4. The `onChange` event handler (`handleSelectChange`) is triggered whenever the user selects a different option. It updates the `selectedValue` state with the current selected value.

5. The current selected value is displayed below the `<select>` element.

This way, the state of the `<select>` element is controlled by the React component, making it a controlled input.

***

## Checkbox input

Certainly! Here's an example of a functional React component with a controlled checkbox:

```jsx
import React, { useState } from 'react';

const ControlledCheckboxExample = () => {
  // State to hold the checked status of the checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Event handler to update the state when the checkbox changes
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checked status
  };

  return (
    <div>
      {/* Controlled checkbox */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      {/* Display the current checked status */}
      <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
};

export default ControlledCheckboxExample;
```

In this example:

1. We use the `useState` hook to create a piece of state (`isChecked`) that will hold the checked status of the checkbox.

2. The `<input>` element with `type="checkbox"` is a controlled checkbox because its `checked` attribute is set to the `isChecked` state.

3. The `onChange` event handler (`handleCheckboxChange`) is triggered whenever the user clicks the checkbox. It toggles the `isChecked` state (changes it from `true` to `false` or vice versa).

4. The current checked status is displayed below the checkbox.

This approach allows you to control and manage the state of the checkbox in your React functional component.

***

## Slider Input

For a controlled slider input, you can follow a similar approach as the other controlled inputs. Here's an example of a functional React component with a controlled slider:

```jsx
import React, { useState } from 'react';

const ControlledSliderExample = () => {
  // State to hold the value of the slider
  const [sliderValue, setSliderValue] = useState(50);

  // Event handler to update the state when the slider changes
  const handleSliderChange = (event) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div>
      {/* Controlled slider */}
      <input
        type="range"
        value={sliderValue}
        onChange={handleSliderChange}
        min="0"
        max="100"
      />

      {/* Display the current slider value */}
      <p>Slider value: {sliderValue}</p>
    </div>
  );
};

export default ControlledSliderExample;
```

In this example:

1. We use the `useState` hook to create a piece of state (`sliderValue`) that will hold the value of the slider.

2. The `<input>` element with `type="range"` is a controlled slider because its `value` attribute is set to the `sliderValue` state.

3. The `onChange` event handler (`handleSliderChange`) is triggered whenever the user moves the slider. It updates the `sliderValue` state with the current value of the slider.

4. The current value of the slider is displayed below the slider input.

***

## Radio Button Input

For a controlled radio button input, you can use a similar approach. Here's an example:

```jsx
import React, { useState } from 'react';

const ControlledRadioButtonExample = () => {
  // State to hold the selected value of the radio button
  const [selectedOption, setSelectedOption] = useState('option1');

  // Event handler to update the state when a radio button is selected
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {/* Controlled radio buttons */}
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleRadioChange}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleRadioChange}
        />
        Option 3
      </label>

      {/* Display the current selected value */}
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default ControlledRadioButtonExample;
```

In this example:

1. We use the `useState` hook to create a piece of state (`selectedOption`) that will hold the selected value of the radio button.

2. Each `<input>` element with `type="radio"` is a controlled radio button because its `checked` attribute is set based on the comparison of `selectedOption` with the specific option value.

3. The `onChange` event handler (`handleRadioChange`) is triggered whenever the user selects a different radio button. It updates the `selectedOption` state with the current selected value.

4. The current selected value is displayed below the radio buttons.

***

- Donde poner los eventHandlers
![eventHandlers](../../src/images/040%20where%20to%20put%20eventHandler.jpg)

- Long vs Short Event Handlers
![eventHandlerslongvsshort](../../src/images/044%20long%20vs%20short%20eventHandlers.jpg)
