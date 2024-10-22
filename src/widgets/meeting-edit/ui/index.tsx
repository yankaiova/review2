import { DeleteMeeting } from "../../../features/delete-meeting";
import { useParams } from "react-router";
import { Rate } from "../../../features/rate";
import { Button, Typography } from "@mui/material";
export const MeetingEdit = () => {
  const { id } = useParams();
  const meetingId = Number(id);
  return (
    <div key={"edit-meet" + id}>
      <Typography variant="body2" color="text.secondary">
        18.11.2024 12:30 - 13:30
      </Typography>
      <div>
        <Button>Перенести встречу (не работает)</Button>
      </div>
      <div>
        <Button>Продлить встречу (не работает)</Button>
      </div>
      <Typography variant="body2" color="text.secondary">
        запланировано
      </Typography>
      <Typography variant="body2" color="text.secondary">
        оффлайн: какой то адрес
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Материалы для встречи
      </Typography>
      <Rate id={meetingId} />
      <div>
        После нажатия 'завершить' вылезает модалка с оценкой встречи - эксперта
        (до 5) и меняется meeting_status на "завершено"
      </div>
      {/* Завершить встречу - вылезает поп-ап с оценкой и
      потом отправляется на бэк и запрос на смену meeting_status */}
      <DeleteMeeting meeting_id={meetingId} />
    </div>
  );
};
