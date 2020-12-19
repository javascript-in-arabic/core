/*****/ 
/*****/ 
/*****/ import "./__arabi__global_translator__.js";
/*****/ 
/*****/ 


// ############ -----------------------------------------
// ############ -----------------------------------------
// THE ORIGINAL TRANSLATED CODE -------------------------

import دائرة, { لوحتي, سياق } from "./دائرة.جس";
import { صحيح_عشو, عشو } from "./مساعدات.جس";
let دوائر = [];
اعد();

function اعد() {
  for (let أ of (new مصفوفة(10))) دوائر.ادفع(احضر_دائرة_عشو());
}


function احضر_دائرة_عشو() {
  let ك = رياضيات.عشوائي() * 10;
  let نق = رياضيات.جزر(ك) * 50;
  let س = عشو(نق, لوحتي.عرض_العميل - نق);
  let ص = عشو(نق, لوحتي.طول_العميل - نق);
  let رسم = {شكل_الخط: "black", };
  let د = new دائرة({س, ص, نق, ك, رسم, جوفاء: true, });
  return  د;
}

onresize = () => {
  لوحتي.طول = لوحتي.طول_العميل;
  لوحتي.عرض = لوحتي.عرض_العميل;
  for (let د of دوائر) د.ارسم();
}
;
onresize();
