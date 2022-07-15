import React from "react";
import "./Keyboard.css";
import Button from "./Button";

function Keyboard(props) {

  const keyboard = (
    <table>
      <tr>
        <td colSpan="2">
          <Button
            makegray="makegray"
            colspan="colspan"
            value="C"
            name="clear"
            onClick={props.clearSentence}
          />
        </td>
        <td>
          <Button
            makeorange="makeorange"
            value="÷"
            name="operator"
            onClick={props.updateSentence}
          />
        </td>
        <td>
          <Button
            makeorange="makeorange"
            value="-"
            name="operator"
            onClick={props.updateSentence}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Button value="1" name="number" onClick={props.updateSentence} />
        </td>
        <td>
          <Button value="2" name="number" onClick={props.updateSentence} />
        </td>
        <td>
          <Button value="3" name="number" onClick={props.updateSentence} />
        </td>
        <td>
          <Button
            makeorange="makeorange"
            value="+"
            name="operator"
            onClick={props.updateSentence}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Button value="4" name="number" onClick={props.updateSentence} />
        </td>
        <td>
          <Button value="5" name="number" onClick={props.updateSentence} />
        </td>
        <td>
          <Button value="6" name="number" onClick={props.updateSentence} />
        </td>
        <td>
          <Button
            makeorange="makeorange"
            value="×"
            name="operator"
            onClick={props.updateSentence}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Button value="7" name="number" onClick={props.updateSentence} />
        </td>
        <td>
          <Button value="8" name="number" onClick={props.updateSentence} />
        </td>
        <td>
          <Button value="9" name="number" onClick={props.updateSentence} />
        </td>
        <td rowSpan={2}>
          <Button
            makeorange="makeorange"
            rowspan="rowspan2"
            value="="
            name="equal"
            onClick={props.equalClicked}
          />
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <Button
            colspan="colspan2"
            value="0"
            name="number"
            onClick={props.updateSentence}
          />
        </td>
        <td>
          <Button value="." name="dot" onClick={props.updateSentence} />
        </td>
      </tr>
    </table>
  );
  return <div>{keyboard}</div>;
}

export default Keyboard;
