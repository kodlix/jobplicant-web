import moment from 'moment';

export const formatter = {
  toMoney: (input) =>
    "₦" +
    input
      .toLocaleString("en-US", {
        style: "currency",
        currency: "NGN",
      })
      .replace("NGN", ""),
  toDate: (date) => moment(date).format('DD-MM-YYYY'),
  capitalizeFirstLetter: (name) => {
    if (name) {
      return name[0].toUpperCase() + name.slice(1);
    }
  }
};

