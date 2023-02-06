import moment from "moment";

export const formatDate = (date, format = "MMMM D, YYYY") =>
  date ? moment(date).format(format) : date;

export const formatDateTime = (date, format = "MMMM D, YYYY, h:mm A") =>
  date ? moment(date).format(format) : date;

export const formatDateTimeForAPI = date =>
  date ? moment(date).format() : date;

export const formatDateTimeConversational = date =>
  date
    ? moment(date)
        .subtract(5, "hours")
        .fromNow()
    : date;
