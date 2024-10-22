import { useCalendar } from "../../../entities/calendar/lib/useCalendar";
import { Slot } from "../../../shared/model/types";

const slots: Slot[] = [];
export const SlotList = () => {
  const { date } = useCalendar();
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
