import { useCalendar } from "../../../entities/calendar";
import { Slot } from "../../../shared/model/types";
import { SlotItem } from "../../../entities/slot";

const slots: Slot[] = [];
export const SlotList = () => {
  const { date } = useCalendar();
  if (slots.length === 0) {
    return <div style={{ marginBottom: "20px" }}>Нет слотов текущую дату</div>;
  }
  return (
    <div>
      {slots.map((item: Slot) => (
        <SlotItem key={item.slot_id} slot={item} />
      ))}
    </div>
  );
};
