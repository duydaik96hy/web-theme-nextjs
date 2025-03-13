import dayjs from "dayjs";

export const getLocaleTime = (date?: string, format = "DD/MM/YYYY" ) => {
  return date ? dayjs(date).format(format) : dayjs().format(format);
}

export const getLocaleDateTime = (date?: string, format = "DD-MM-YYYY HH:MM" ) => {
  return date ? dayjs(date).format(format) : dayjs().format(format);
}

export const convertStringToDate = (date: string) => {
  return dayjs(date).toDate();
}