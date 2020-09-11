export const IsPC = () => {
  const userAgentInfo = window.navigator.userAgent;
  const Agents = new Array(['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']);
  let flag = true;
  for (let v = 0; v < Agents.length; v += 1) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
  }
  return flag;
};

export const codeTime = (dom) => {
  if (!dom) return;
  const time = 10;
  let t = 0;
  const timeInterval = setInterval(() => {
    if (time - t <= 0) {
      dom.innerText = '重新获取';
      clearInterval(timeInterval);
    }
    if (time - t > 0) dom.innerText = `重新获取 ${time - t < 10 ? '0' : ''}${time - t} s`;
    t += 1;
  }, 1000);
};

export const getRandomIndex = arr => Math.floor((Math.random() * arr.length));


export const $$ = (selector, context) => {
  context = context || document;
  const elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
};

export const uuid = (len, radix) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const uuid = []; let
    i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    // eslint-disable-next-line
    for (i = 0; i < len; i += 1) uuid[i] = chars[0 | Math.random() * radix];
  } else {
    // rfc4122, version 4 form
    let r;

    // rfc4122 requires these characters
    // eslint-disable-next-line
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i += 1) {
      if (!uuid[i]) {
        // eslint-disable-next-line
        r = 0 | Math.random() * 16;
        // eslint-disable-next-line
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
};

uuid(16,"0123456789")