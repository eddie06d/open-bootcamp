const today = new Date();

const birthDay = new Date(1999, 0, 6);

const band = today > birthDay;

const day = birthDay.getDate();

const month = birthDay.getMonth() + 1;

const year = birthDay.getFullYear();