import { Dayjs } from "dayjs";
import { Slot } from "../../../shared/model/types";

type PropsSlotList = {
  date: Dayjs;
};
const slots: Slot[] = [];
export const SlotList = ({ date }: PropsSlotList) => {
  if (slots.length === 0) {
    return <div>Нет слотов текущую дату</div>;
  }
  return (
    <div>
      {slots.map((item: Slot) => (
        <Slotitem key={item.slot_id} slot={item} />
      ))}
    </div>
  );
};
