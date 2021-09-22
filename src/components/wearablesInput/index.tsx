import { Fragment } from "react";
import { itemTypes, SlotPosition } from "../../vars";

interface Props {
  onChange: (value: number) => void;
  slot: SlotPosition;
  value: number;
}

export const WearableInput = (props: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>)=> {
    const value = e.target.value;
    props.onChange(Number(value));
  }

  const isMatch = (slot: SlotPosition) => {
    if (slot === "hands") {
      return props.slot === "handLeft" || props.slot === "handRight" || props.slot === "hands"
    } else {
      return slot === props.slot;
    }
  }

  return (
    <>
      <label htmlFor={props.slot}>{props.slot.toUpperCase()}:</label>
      <select
        name={props.slot}
        onChange={handleChange}
      >
        <option value={0}>
          None (0)
        </option>
        {Object.keys(itemTypes).map((id, i) => {
          const item = itemTypes[Number(id)];
          if (isMatch(item.slotPositions)) {
            return (
              <option value={item.svgId} key={i}>
                {item.name} ({item.svgId})
              </option>
            );
          }
        })}
      </select>
      <input type="number" value={props.value} onChange={handleChange}></input>
    </>
  )
}