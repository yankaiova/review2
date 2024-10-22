import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getDate } from "../model/selectors";
import { setDate } from "../model/slice";
import { Dayjs } from "dayjs";

export const useCalendar = () => {
  const dispatch = useDispatch();
  const date = useSelector(getDate);

  const setNewDate = useCallback(
    (newDate: Dayjs) => {
      dispatch(setDate(newDate));
    },
    [dispatch, date]
  );

  return { date, setNewDate };
};