import { Box, Stack } from "@mui/material";
import { BaseButton, BaseTypography } from "../../../shared/ui";
import { Link } from "react-router-dom";
import pictureMain from "../../../assets/192cc1c0909911efab591690387607a1 1.png";
export const HomePage = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      gap="30px"
      margin={{ xs: "0", sm: "0 5rem" }}
    >
      <div>
        <BaseTypography>
          <p>
            Добро пожаловать в P2P-Review – сервис для взаимной помощи и
            профессионального роста!
          </p>
          <p>
            P2P-Review создан, чтобы упростить обмен знаниями и улучшить навыки
            через встречи формата "один на один". Наш сервис помогает
            организовать онлайн и офлайн встречи для консультаций и ревью кода,
            документов, навыков и других материалов.
          </p>
          <p>Что мы предлагаем: </p>
          <p>
            Поиск экспертов: найдите специалиста по нужной области или
            компетенции.{" "}
          </p>
          <p>
            Гибкое планирование: выбирайте удобные временные слоты, созданные
            экспертами.
          </p>
          <p>
            {" "}
            Встречи и обмен материалами: планируйте встречи, делитесь файлами и
            ссылками, обсуждайте вопросы в чате.{" "}
          </p>
          <p>
            Оценка и отзывы: оценивайте качество консультации и помогайте
            улучшать профили экспертов.
          </p>
          Присоединяйтесь к P2P-Review и развивайтесь вместе с профессиональным
          сообществом!
        </BaseTypography>
        <Stack
          direction="row"
          justifyContent="center"
          gap="1rem"
          marginTop="30px"
        >
          <Link to="/calendar">
            <BaseButton text="Найти эксперта" />
          </Link>
          <BaseButton text=" Хочу помогать" />
        </Stack>
      </div>
      <img
        src={pictureMain}
        alt=""
        style={{ width: "400px", height: "400px" }}
      />
    </Stack>
  );
};
