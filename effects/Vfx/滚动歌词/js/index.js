/**
 * @description: 获取歌词时间
 * @return {*}
 */
function getLrcTime(timeStr) {
  const timeArr = timeStr.slice(1).split(':');
  return timeArr[0] * 60 + Number(timeArr[1]);
}
/**
 * @description: 获取歌词数组
 * @return {Array}
 */
function getLrcs() {
  const lrcLines = lrc.split('\n');
  return lrcLines.map(item => {
    const lines = item.split(']');
    return {
      time: getLrcTime(lines[0]),
      words: lines[1]
    }
  })
}

const lrcData = getLrcs();

const doms = {
  audio: document.querySelector('audio'),
  container: document.querySelector('.container'),
  ul: document.querySelector('.container ul')
}
/**
 * @description: 初始化页面数据
 * @return {*}
 */
function init() {
  const target = document.createDocumentFragment();
  lrcData.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item.words;
    target.appendChild(li);
  })

  doms.ul.appendChild(target);
}

init();

const con_height = doms.container.clientHeight;
const li_height = doms.ul.children[0].clientHeight;
const max_top = li_height * (lrcData.length - 1) - con_height / 2 + li_height / 2;
function setActiveLi() {
  const currentTime = doms.audio.currentTime;
  // 去除放大class
  let li = document.querySelector('.container ul li.active');
  if (li) {
    li.classList.remove('active');
  }
  let _index = lrcData.findIndex(item => item.time > currentTime);
  _index--;
  // 添加class
  li = doms.ul.children[_index];
  if (li) {
    li.classList.add('active');
  }
  let _top = li_height * _index - con_height / 2 + li_height / 2;

  if (_top < 0) {
    _top = 0;
  } else if (_top > max_top) {
    _top = max_top;
  }
  doms.ul.style = `transform: translateY(-${_top}px)`
}

doms.audio.addEventListener('timeupdate', setActiveLi)