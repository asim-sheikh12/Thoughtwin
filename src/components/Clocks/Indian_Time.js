import React from 'react';
export const Indian_Time = () => {
  setInterval(() => {
    const d = new Date(); //object of date()
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const hr_rotation = 30 * hr + min / 2; //converting current time
    const min_rotation = 6 * min;
    const sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
  }, 1000);
  return (
    <div id='clockContainer'>
      <div id='hour'></div>
      <div id='minute'></div>
      <div id='second'></div>
    </div>
  );
};
