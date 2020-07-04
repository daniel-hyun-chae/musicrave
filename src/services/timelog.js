import axios from "axios";
const baseUrl = "/api/timelogs";

const createTimelog = (start, end, duration, category) => {
  axios.post(`${baseUrl}`, {
    start,
    end,
    duration,
    category,
  });
};

export default { createTimelog };
