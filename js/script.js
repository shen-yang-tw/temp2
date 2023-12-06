//Check all exist
function allExist(el) {
  var exist = true
  k = document.querySelectorAll(el)
  for (var i = 0;i < k.length;i++) {
    if (k[i] == null) {
      exist = false
      return exist
    } else {
      // exist = true
      return exist
    }
  }
}

//Check one exist
function oneExist(el) {
  var exist = true
  k = document.querySelectorAll(el)
  for (var i = 0;i < k.length;i++) {
    if (k[i] != null) {
      return exist
    } else {
      exist = false
      return exist
    }
  }
}

//Show
function show(el) {
  var target = document.querySelector(el)
  // target.style.display = "block";
  target.style.setProperty('display', 'block', 'important')
}

//Hide
function hide(el) {
  var target = document.querySelector(el)
  // target.style.display = "none";
  target.style.setProperty('display', 'none', 'important')
}

//Add Class to all
function AddClass(el, className) {
  var _el = document.querySelectorAll(el)
  for (var i = 0;i < _el.length;i++) {
    _el[i].classList.add(className)
  }
}

//Remove Class to all
function RemoveClass(el, className) {
  var _el = document.querySelectorAll(el)
  for (var i = 0;i < _el.length;i++) {
    _el[i].classList.remove(className)
  }
}

//Remove & Add Class to all by selector
function RemoveAddClass(el, classRemove, classAdd) {
  var _el = document.querySelectorAll(el)
  for (var i = 0;i < _el.length;i++) {
    if (classRemove != '') {
      _el[i].classList.remove(classRemove)
    }
    if (classAdd != '') {
      _el[i].classList.add(classAdd)
    }
  }
}

//Remove & Add Class to all by element
function RemoveAddClassByElement(el, classRemove, classAdd) {
  // var _el = document.querySelectorAll(el)
  for (var i = 0;i < el.length;i++) {
    if (classRemove != '') {
      el[i].classList.remove(classRemove)
    }
    if (classAdd != '') {
      el[i].classList.add(classAdd)
    }
  }
}

//Remove & Add Class to all by element, only works on selector not object
function RemoveAddClassByArray(el, classRemove, classAdd) {
  // var _el = document.querySelectorAll(el)
  for (var i = 0;i < el.length;i++) {
    if (classRemove != '') {
      el[i].classList.remove(classRemove)
    }
    if (classAdd != '') {
      el[i].classList.add(classAdd)
    }
  }
}

//Remove all by selector
// function removeAll(sel) {
//   var target = document.querySelectorAll(sel)
//   for (var i = 0;i < target.length;i++) {
//     target[i].parentNode.removeChild(target[i])
//   }
// }

//Toggle Show/Hide by attribute - onclick="toggleShow(findChildren(findParent(this, 'LI', ''), '.page'), 'hidden')"
//Or using "event.currentTarget" relpace the "thisElement": findParent(event, 'LI', '')
function toggleShow(event) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  if (event.currentTarget.hasAttribute('hidden')) {
    event.currentTarget.removeAttribute('hidden')
  } else {
    event.currentTarget.setAttribute('hidden', true)
  }
}

//Toggle Show/Hide by attribute - onclick="toggleAllShow(findChildren(this, '.sort'));"
function toggleAllShow(allChildren) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  console.log(allChildren.length)
  for (var i = 0;i < allChildren.length;i++) {
    if (allChildren[i].hasAttribute('hidden')) {
      allChildren[i].removeAttribute('hidden')
    } else {
      allChildren[i].setAttribute('hidden', true)
    }
  }
}

//toggle all class by selector
function toggleClass(el, cls) {
  var all = document.querySelectorAll(el)
  for (var i = 0;i < all.length;i++) {
    all[i].classList.toggle(cls)
  }
}

//toggle all class by array - onclick="toggleAllClass(findChildren(findParent(this, 'LI', ''), '.page'), 'hidden'); return false;"
//return false - avoid the page jumping straight to the top"
function toggleAllClass(allChildren, cls1, cls2) {
  for (var i = 0;i < allChildren.length;i++) {
    allChildren[i].classList.toggle(cls1)
    if (cls2 != null) {
      allChildren[i].classList.toggle(cls2)
    }
  }
  // return false; //not working
}
//toggle two classes - onmouseover="removeAddClasses(findChildren(findParent(this, 'LI', ''), 'p'), 'uk-text-truncate', 'flex-wrap')" onmouseout="removeAddClasses(findChildren(findParent(this, 'LI', ''), 'p'), 'flex-wrap', 'uk-text-truncate')"
function removeAddClasses(allChildren, classRemove, classAdd) {
  for (var i = 0;i < allChildren.length;i++) {
    allChildren[i].classList.remove(classRemove)
    allChildren[i].classList.add(classAdd)
  }
}

// ***** Just use 'closest()' to find parent *****
//findParent(this, thisParentTagName, ''), the last variable is necessary
//Or using "event.currentTarget" relpace the "thisElement": findParent(event, 'LI', '')??
function findParent(thisElement, parentTagName, className) {
  if (className != '') {
    while (
      (thisElement = thisElement.parentElement) && !thisElement.classList.contains(className)
    );
    return thisElement
  } else {
    while (
      (thisElement = thisElement.parentElement) &&
      thisElement.tagName != parentTagName
    );
    //Searching loop only stop while parent is founded
    return thisElement //if searching no one will return null
  }
}

function findChildren(parentEL, sl) {
  return parentEL.querySelectorAll(sl)
}

function findFirstChild(parentEL) {
  return parentEL.firstElementChild
}

function findLastChild(parentEL) {
  return parentEL.lastElementChild
}

function findAll(sl) {
  return document.querySelectorAll(sl)
}

function findChild(parentEL, sl) {
  return parentEL.querySelector(sl)
  // return parentEL.querySelector(sl).tagName;
}

function findChildClass(parentEL, sl) {
  return parentEL.querySelector(sl).className
}

//get this year - <p onload="thisYear(this)"></p>
// function thisYear(thisSelector) {
//   var d = new Date()
//   var y = d.getFullYear()
//   document.querySelector(thisSelector).innerHTML = y
// }

// onclick="plusHeight('.uk-table', findChild(findParent(this, 'DIV', ''), '[uk-dropdown]'))"
function plusHeight(sel, plusSelector) {
  var el1 = document.querySelector(sel)
  plusSelector.style.display = 'block'
  if (
    plusSelector.getBoundingClientRect().bottom >
    el1.getBoundingClientRect().bottom
  ) {
    var h = el1.getBoundingClientRect().height + plusSelector.getBoundingClientRect().bottom - el1.getBoundingClientRect().bottom
  } else {
    var h = el1.getBoundingClientRect().height
  }
  // var h = el1.clientHeight + plusSelector.getBoundingClientRect().bottom - el1.getBoundingClientRect().bottom;
  // console.log(el1.getBoundingClientRect().height)
  el1.style.height = h + 'px'
  plusSelector.style.display = 'inherit'
}

//onmouseover="viewHeight('[uk-dropdown]', 'nav.bg_primary')"
function viewMaxHeight(sel) {
  if (allExist(sel, upperSelector)) {
    var target = document.querySelectorAll(sel)
    // var alltops = document.querySelectorAll(sel).getBoundingClientRect().top
    for (var i = 0;i < target.length;i++) {
      target[i].style.maxHeight = window.innerHeight - target[i].getBoundingClientRect().top + 'px'
    }
  }
}

//onmouseover="viewHeight('[uk-dropdown]', 'nav.bg_primary')"
function viewHeight(sel, upperSelector) {
  if (allExist(sel, upperSelector)) {
    var topHeight =
      document.querySelector(upperSelector).getBoundingClientRect().top +
      document.querySelector(upperSelector).getBoundingClientRect().height
    var target = document.querySelectorAll(sel)
    for (var i = 0;i < target.length;i++) {
      target[i].style.maxHeight = window.innerHeight - topHeight + 'px'
    }
  }
}

//viewHeightMiddle(".uk-slideshow-items", "header", ".bg_bar") - uk-slideshow height, working with CSS: #slideshow .uk-slideshow-items {min-height: auto !important;}
//Subtracts the height of preceding and following element
function viewHeightMiddle(sel, upperSelector, lowerSelector) {
  if (allExist(sel, upperSelector, lowerSelector)) {
    var topHeight =
      document.querySelector(upperSelector).clientTop +
      document.querySelector(upperSelector).clientHeight
    var lowerHeight = document.querySelector(lowerSelector).clientHeight
    document.querySelector(sel).style.height =
      window.innerHeight - topHeight - lowerHeight + 'px' //CANNOT use "px !important"
  }
}

function sameHeight(sel, target1, target2) {
  if (allExist(sel, target1, target2)) {
    document.querySelector(sel).style.height =
      document.querySelector(target1).clientHeight +
      document.querySelector(target2).clientHeight +
      'px' //CANNOT use "px !important"
  }
}

//Triger Click event
function OnClick(el) {
  document.querySelector(el).click()
}

//------------- font resize ------------------------------------------------//
function fontResize(
  classFontM,
  classFontL,
  classButtonFont,
  classButtonFontS,
  classButtonFontM,
  classButtonFontL,
  classActive
) {
  if (
    document
      .querySelector('.' + classButtonFontS)
      .classList.contains(classActive)
  ) {
    document.querySelector('html').classList.remove(classFontM)
    document.querySelector('html').classList.remove(classFontL)
  }
  if (
    document
      .querySelector('.' + classButtonFontM)
      .classList.contains(classActive)
  ) {
    document.querySelector('html').classList.remove(classFontL)
    document.querySelector('html').classList.add(classFontM)
  }
  if (
    document
      .querySelector('.' + classButtonFontL)
      .classList.contains(classActive)
  ) {
    document.querySelector('html').classList.remove(classFontM)
    document.querySelector('html').classList.add(classFontL)
  }
  var btnFont = document.querySelectorAll('.' + classButtonFont)
  for (var i = 0;i < btnFont.length;i++) {
    btnFont[i].onclick = function () {
      RemoveClass('.' + classButtonFont, classActive) //Outer function
      this.classList.add(classActive) //Error: Cannot use 'btnFont[i]' to replace 'this'
      if (this.classList.contains(classButtonFontS)) {
        //Error: Cannot use 'buttonFontS' (it's a selector not the class name)
        document.querySelector('html').classList.remove(classFontM)
        document.querySelector('html').classList.remove(classFontL)
      }
      if (this.classList.contains(classButtonFontM)) {
        document.querySelector('html').classList.remove(classFontL)
        document.querySelector('html').classList.add(classFontM)
      }
      if (this.classList.contains(classButtonFontL)) {
        document.querySelector('html').classList.remove(classFontM)
        document.querySelector('html').classList.add(classFontL)
      }
    }
  }
}
//------------- End font resize ------------------------------------------------//

//------------- Form ------------------------------------------------//

//select onchange Event - <select onchange="showOption()">
// function showOption(event, index, sl) {
//   var showEl = document.querySelectorAll(sl)
//   var i
//   if (event.currentTarget.selectedIndex == index) {
//     for (i = 0;i < showEl.length;i++) {
//       showEl[i].style.setProperty('display', 'block', 'important')
//     }
//   } else {
//     for (i = 0;i < showEl.length;i++) {
//       showEl[i].style.setProperty('display', 'none', 'important')
//     }
//   }
// }

//--Checkbox toggle check all - <input type="checkbox" onchange="toggleCheckAll(this, '.listCheck', '.checkAll', 'false')"> or <button onclick="toggleCheckAll(this, '.listCheck')">
// function toggleCheckAll(thisClick, inputCheck, checkAll, ifAddChecked) {
//   //thisClick means the "owner" and CANNOT use "this" that means the Global object "Window"
//   thisClick.classList.toggle('checked')
//   var inputCheck = document.querySelectorAll(inputCheck)
//   var checkAll = document.querySelectorAll(checkAll)
//   var ifAddChecked = ifAddChecked //ifAddChecked is boolean
//   //--set all input checked & unchecked--
//   if (thisClick.classList.contains('checked')) {
//     //if 'select all' checked
//     if (checkAll != null | checkAll != undefined) {
//       for (var i = 0;i < checkAll.length;i++) {
//         checkAll[i].checked = true
//         checkAll[i].classList.add('checked')
//       }
//     }
//     for (var i = 0;i < inputCheck.length;i++) {
//       inputCheck[i].checked = true
//       if (ifAddChecked == true) {
//         inputCheck[i].offsetParent.classList.add('checked')
//         //parent inputCheck<li> add class "checked" when input checked
//       }
//     }
//   } else {
//     //if 'select all' unchecked
//     if (checkAll != null | checkAll != undefined) {
//       for (var i = 0;i < checkAll.length;i++) {
//         checkAll[i].checked = false
//         checkAll[i].classList.remove('checked')
//       }
//     }
//     for (var i = 0;i < inputCheck.length;i++) {
//       inputCheck[i].checked = false
//       if (ifAddChecked == true) {
//         inputCheck[i].offsetParent.classList.remove('checked')
//         //parent inputCheck<li> remove class "checked" when input unchecked
//       }
//     }
//   }
// }

// checkedSum(".listCheck", ".checkAll", ".uncheckAll", ".checkedNumber")
// function checkedSum(inputCheck, checkAll, resetButton, textSum) {
//   var inputCheck = document.querySelectorAll(inputCheck)
//   var checkAll = document.querySelectorAll(checkAll)
//   var resetButton = document.querySelectorAll(resetButton)
//   var textSum = document.querySelectorAll(textSum)
//   var sum = 0
//   textSum.innerHTML = sum

//   for (var i = 0;i < inputCheck.length;i++) {
//     inputCheck[i].addEventListener('change', (event) => {
//       if (event.target.checked) {
//         sum = sum + 1
//         for (var j = 0;j < textSum.length;j++) {
//           textSum[j].innerHTML = sum
//         }
//       } else {
//         sum = sum - 1
//         for (var k = 0;k < textSum.length;k++) {
//           textSum[k].innerHTML = sum
//         }
//       }
//     })
//   }
//   for (var i = 0;i < checkAll.length;i++) {
//     if (checkAll[i].getAttribute('type') == 'checkbox') {
//       checkAll[i].addEventListener('change', (event) => {
//         if (event.target.checked) {
//           for (var i = 0;i < checkAll.length;i++) {
//             checkAll[i].checked = true
//           }
//           for (var j = 0;j < inputCheck.length;j++) {
//             inputCheck[j].checked = true
//             // sum = sum + 1
//           }
//           sum = inputCheck.length
//           for (var k = 0;k < textSum.length;k++) {
//             textSum[k].innerHTML = sum
//           }
//         } else {
//           for (var i = 0;i < checkAll.length;i++) {
//             checkAll[i].checked = false
//           }
//           for (var j = 0;j < inputCheck.length;j++) {
//             inputCheck[j].checked = false
//             // sum = sum - 1
//           }
//           sum = 0
//           for (var k = 0;k < textSum.length;k++) {
//             textSum[k].innerHTML = sum
//           }
//         }
//       })
//     }
//     if (checkAll[i].getAttribute('type') == 'button') {
//       checkAll[i].onclick = function () {
//         if (checkAll[i].classList.contains('checked')) {
//           for (var i = 0;i < checkAll.length;i++) {
//             checkAll[i].classList.toggle('checked')
//           }
//           for (var j = 0;j < inputCheck.length;j++) {
//             inputCheck[j].checked = true
//             // sum = sum + 1
//           }
//           sum = inputCheck.length
//           for (var k = 0;k < textSum.length;k++) {
//             textSum[k].innerHTML = sum
//           }
//         } else {
//           for (var i = 0;i < checkAll.length;i++) {
//             checkAll[i].classList.toggle('checked')
//           }
//           for (var j = 0;j < inputCheck.length;j++) {
//             inputCheck[j].checked = false
//             // sum = sum - 1
//           }
//           sum = 0
//           for (var k = 0;k < textSum.length;k++) {
//             textSum[k].innerHTML = sum
//           }
//         }
//       }
//     }
//   }
//   for (var i = 0;i < resetButton.length;i++) {
//     resetButton[i].onclick = function () {
//       for (var j = 0;j < checkAll.length;j++) {
//         checkAll[j].checked = false
//       }
//       for (var k = 0;k < inputCheck.length;k++) {
//         inputCheck[k].checked = false
//       }
//       sum = 0
//       for (var l = 0;l < textSum.length;l++) {
//         textSum[l].innerHTML = sum
//       }
//     }
//   }
// }
// if (allExist([".listCheck", ".checkAll", ".uncheckAll", ".checkedNumber"]) == true) {
//   checkedSum(".listCheck", ".checkAll", ".uncheckAll", ".checkedNumber")
// }
//------------- End Form ------------------------------------------------//

//------------- Table in editor ------------------------------------------------//
//Table width in editor
function tableWidth(el) {
  var target = document.querySelectorAll(el)
  if (window.innerWidth <= 959 || document.documentElement.clientWidth <= 959) {
    for (var i = 0;i < target.length;i++) {
      target[i].style.setProperty('width', '100%', 'important')
      if (target[i].getAttribute('width') != null) {
        target[i].setAttribute('width', 'auto')
      }
      var th = target[i].querySelectorAll('th')
      var td = target[i].querySelectorAll('td')
      for (var j = 0;j < th.length;j++) {
        if (th[j].style.width != null) {
          th[j].style.setProperty('width', 'auto', 'important')
        }
        if (th[j].getAttribute('width') != null) {
          th[j].setAttribute('width', 'auto')
        }
      }
      for (var k = 0;k < td.length;k++) {
        if (td[k].style.width != null) {
          td[k].style.setProperty('width', 'auto')
        }
        if (td[k].getAttribute('width') != null) {
          td[k].setAttribute('width', 'auto')
        }
      }
    }
    for (var i = 0;i < target.length;i++) {
      var columns = target[i].querySelector('thead tr').childElementCount
      // IF the columns of table is 6 or greater than 6, add the parent <div class="uk-overflow-auto">
      if (columns >= 6) {
        var parent = target[i].parentNode //Parent of the target
        var wrapper = document.createElement('div') // It's a method not element
        // set the wrapper as child (instead of the element)
        parent.replaceChild(wrapper, target[i])
        wrapper.classList.add('uk-overflow-auto')
        // set element as child of wrapper
        wrapper.appendChild(target[i])
        target[i].classList.add('scroll_table', 'min_width-600', 'min_width-700@s', 'min_width-1000@m')
      }
    }
  } else {
    for (var i = 0;i < target.length;i++) {
      if (target[i].getAttribute('width') >= target[i].parentElement.offsetWidth) {
        target[i].setAttribute('width', 'auto')
      }
    }
  }
}
// if (oneExist('.ckeditor table')) {
//   tableWidth('.ckeditor table')
// }
//------------- End Table in editor ------------------------------------------------//

//------------- Uikit ------------------------------------------------//
// //Slideshow tab focus
// // Set <a href="https://www.google.com.tw/" onfocus="slideShowFocus('#slideshow', '#slideshow .uk-dotnav a', event)" onkeydown="enterOpenUrl('_blank', event)">Banner1</a> on <ul class="uk-dotnav">
// function slideShowFocus(slideshow, tabsArray, event) {
//   var slideshow = document.querySelector(slideshow)
//   var tabs = document.querySelectorAll(tabsArray)
//   for (var i = 0;i < tabs.length;i++) {
//     // tabs[i] = UIkit.slideshow(slideshow).show(i)
//     if (event.currentTarget == tabs[i]) {
//       UIkit.slideshow(slideshow).show(i)
//     }
//   }
// }
// //Click 'Enter' to open window by the attribute 'href'
// //Or using "event.currentTarget" relpace the "thisKeyDown"
// function enterOpenUrl(targetWindow, event) {
//   if (event.keyCode === 13) {
//     window.open(event.currentTarget.getAttribute('href'), targetWindow)
//   }
// }
// Set <a href="https://www.google.com.tw/" onfocus="slideShowFocus('#slideshow', '#slideshow .uk-dotnav a', this)" onkeydown="enterOpenUrl('_blank', this, event)">Banner1</a> on <ul class="uk-dotnav">
// function slideShowFocus(slideshow, tabsArray, thisFocus) {
//   var slideshow = document.querySelector(slideshow)
//   var tabs = document.querySelectorAll(tabsArray)
//   for (var i = 0;i < tabs.length;i++) {
//     // tabs[i] = UIkit.slideshow(slideshow).show(i)
//     if (thisFocus == tabs[i]) {
//       UIkit.slideshow(slideshow).show(i)
//     }
//   }
// }
// function enterOpenUrl(targetWindow, thisKeyDown, event) {
//   if (event.keyCode === 13) {
//     window.open(thisKeyDown.getAttribute('href'), targetWindow)
//   }
// }

//Uikit 3 load active tab (or with switcher) from url [[for another page]]. Usage: page.html#3
//https://www.w3schools.com/JSREF/prop_loc_hash.asp
function urlShowTab(ukTab) {
  var hash = document.location.hash
  if (hash && oneExist(ukTab) == true) {
    var index = hash.slice(1) - 1 //Extract string from the second position and to the end
    UIkit.tab(ukTab).show(index)
    // urlShowTab("#patinfo_tab")
    // console.log('li' + hash + '>a')
  }
}
//Click a link to show a uk-tab [[in the same page]] by the 'index'
function listShowTab(link, ukTab) {
  var links = document.querySelectorAll(link)
  for (var i = 0;i < links.length;i++) {
    links[i].onclick = function () {
      // const list = this.parentElement.parentElement.children
      // const index = list.indexOf(this.parentElement) //It got error
      //With ES6 destructuring you can do as below:
      var index = [...this.parentElement.parentElement.children].indexOf(this.parentElement)
      UIkit.tab(ukTab).show(index)
    }
  }
}
//The two functions below must be togther
// urlShowTab(".border2.uk-tab")
// listShowTab(".nav_bar .uk-dropdown .uk-nav-sub>li>a", ".border2.uk-tab")

// function uikitSvg(logoSvg) {
//   var logo = document.querySelector(logoSvg)
//   UIkit.svg(logo).svg.then(function (svg) {
//     svg.setAttribute("preserveAspectRatio", "xMinYMid")
//     // svg.querySelector('path').style.stroke = 'red'
//   })
// }
// window.onload = function () {
//   if (oneExist('.logo>img') == true) {
//     // console.log("The logo exists")
//     uikitSvg(".logo>img")
//   }
// }
//------------- End Uikit ------------------------------------------------//

//<a class="fontSize1 pb-1 uk-accordion-title" href="#" onclick="toggleAttr(event, '', 'title', '展開', '縮起')">
function toggleAttr(event, el, attr, val1, val2) {
  if (event.currentTarget.getAttribute(attr) == val1) {
    event.currentTarget.setAttribute(attr, val2)
    // console.log(event.currentTarget.getAttribute(attr))
  } else {
    event.currentTarget.setAttribute(attr, val1)
  }
  if (el != '') {
    var el = document.querySelectorAll(el)
    for (var i = 0;i < el.length;i++) {
      if (el.getAttribute(attr) == val1) {
        el.setAttribute(attr, val2)
      } else {
        el.setAttribute(attr, val1)
      }
    }
  }
}
function setAttr(el, attr) {
  var el = document.querySelectorAll(el)
  // var attrs = []
  for (var i = 0;i < el.length;i++) {
    el[i].setAttribute(attr[0], attr[1])
    console.log(el.length)
  }
}
// setAttr('[class*=fa-]', ["title", ""])

// Loading script
function loadScript(src, loading) {
  let script = document.createElement('script')
  script.src = src
  if (loading == 'async') {
    script.async = true
  }
  if (loading == 'defer') {
    script.defer = true
  }
  document.body.append(script)
}
// loadScript("/long.js");
// loadScript("/small.js");

//go to top
// function gotoTop(sl, classFadeName) {
//   var el = document.querySelector(sl)
//   // el.style.opacity = "0";
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     el.classList.add(classFadeName)
//   } else {
//     el.classList.remove(classFadeName)
//   }
// }
// if (oneExist("#gototop") == true) {
//   gotoTop("#gototop", "tw-opacity-100")
//   window.onscroll = function () {
//     gotoTop("#gototop", "tw-opacity-100")
//   }
// }
//------------- End Functions ------------------------------------------------//

//------------- ES5/6 -------------//
//--------------------------------------------------------------------------------------------------------------------------//

// Regular functions
x = function () { return "Hello World!" }

// Arrow functions
x = () => { return "Hello World!" }
x = () => "Hello"
x = (v1, v2) => "Hello" + v1 + v2
x = (v) => "Hello" + v
x = v => "Hello" + v

// Wait for some time: setTimeout() function
setTimeout(() => {
  // some code
}, 300)

//Click Event for Multiple Elements
document.querySelectorAll('.some-class').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
})
// [document.querySelector('.a-class'), document.querySelector('.another-class')].forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })

// Event
// item.addEventListener('click', () => { })
// window.addEventListener('scroll', () => { })

/* https://jsfiddle.net/shen_yang_work/cu9834fr/ */
// function $$(elem) {
//   if (!(this instanceof $$)) {
//     return (new $$(elem))
//   } else {
//     this.elem = elem
//   }
// }
// $$.prototype = {
//   set: function (prop, value) {
//     this.elem[prop] = value
//     return (this)
//   }
// }
// $$(document.getElementById("example-element")).set("innerHTML", "xxxx").set("className", "test")

//------------- Start -------------//
//------------------------------------------------------------------------------------------------

/* https://jsfiddle.net/shen_yang_work/0489wdn7/ */
const $$ = (el) => document.querySelector(el)
const $$all = (el) => document.querySelectorAll(el)
let count = 0

//Check all exist
const allPresent = (el) => {
  var present = true
  $$all(el).forEach(item => {
    if (item == null) {
      return present = false
    }
  })
  return present
}

//Check one exist
const onePresent = (el) => {
  var present = false
  $$all(el).forEach(item => {
    if (item != null) {
      return present = true
    }
  })
  return present
}

//Remove all by selector
function removeAll(el) {
  // var target = document.querySelectorAll(sel)
  $$all(el).forEach(item => {
    item.parentNode.removeChild(item)
  })
  // for (var i = 0;i < target.length;i++) {
  //   target[i].parentNode.removeChild(target[i])
  // }
}

// Increase the font size - https://stackoverflow.com/a/43513385
// Get Iframe Elements - https://www.w3schools.com/howto/howto_js_element_iframe.asp
// The toFixed() method rounds the string to a specified number of decimals - https://www.w3schools.com/jsref/jsref_tofixed.asp
// A frame with external domain will be 'Blocked' from accessing a cross-origin frame
const increaseFontSize = (el, btns, activeClass, plus, minu, reset, increase, fontSize) => {
  // let iframe = $$('iframe')
  // $$('body').onload = () => {}
  const baseSize = 16
  if (onePresent(plus)) {
    $$(plus).onclick = (event) => {
      // let frameSize = onePresent('iframe') && parseFloat(window.getComputedStyle(iframe.contentWindow.document.querySelector(el), null).getPropertyValue('font-size'))
      let size = parseFloat(window.getComputedStyle($$(el), null).getPropertyValue('font-size'))
      // console.log(size + '/' + bodySize)
      $$(el).style.fontSize = ((size / baseSize + increase).toFixed(2)) + 'rem'
      $$all(btns).forEach(item => {
        item.classList.remove(activeClass)
      })
      event.target.classList.add(activeClass)
      // if (onePresent('iframe')) {
      //   iframe.contentWindow.document.querySelector(el).style.fontSize = ((frameSize/baseSize + increase).toFixed(2)) + 'rem'
      // }
    }
  }
  if (onePresent(minu)) {
    $$(minu).onclick = (event) => {
      // let frameSize = onePresent('iframe') && parseFloat(window.getComputedStyle(iframe.contentWindow.document.querySelector(el), null).getPropertyValue('font-size'))
      let size = parseFloat(window.getComputedStyle($$(el), null).getPropertyValue('font-size'))
      $$(el).style.fontSize = ((size / baseSize - increase).toFixed(2)) + 'rem'
      $$all(btns).forEach(item => {
        item.classList.remove(activeClass)
      })
      event.target.classList.add(activeClass)
      // if (onePresent('iframe')) {
      //   iframe.contentWindow.document.querySelector(el).style.fontSize = ((frameSize/baseSize - increase).toFixed(2)) + 'rem'
      // }
    }
  }
  if (onePresent(reset)) {
    $$(reset).onclick = (event) => {
      $$(el).style.fontSize = 'calc(' + fontSize + 'rem/16)'
      $$all(btns).forEach(item => {
        item.classList.remove(activeClass)
      })
      event.target.classList.add(activeClass)
      // if (onePresent('iframe')) {
      //   iframe.contentWindow.document.querySelector(el).style.fontSize = '1rem'
      // }
    }
  }
}

const thisYear = (el) => {
  // let d = new Date()
  // let y = d.getFullYear()
  if (onePresent(el)) {
    $$(el).innerHTML = new Date().getFullYear()
  }
}

/* https://gomakethings.com/how-to-get-all-of-an-elements-siblings-with-vanilla-js/ */
const getSiblings = (el) => {
  el = document.querySelector(el)
  // for collecting siblings
  let siblings = []

  // first child of the parent node
  let sibling = el.parentNode.firstChild

  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== el) { // If the node is an element node, the nodeType property will return 1
      siblings.push(sibling)
    }
    sibling = sibling.nextSibling
  }
  return siblings
}
// getSiblings(el); // retrun array

// const toggleClasses = (el, ...cls) => cls.map(cl => el.classList.toggle(cl)) // '...cls': Rest parameter must be last formal parameter
const toggleClasses = (el, classArray) => classArray.map(cl => el.classList.toggle(cl))

const eventToggle = (eventTarget, event, attr, el, elParent, findChildren, toggleClassArray, checkedToggleClassByValue, valueToggleClassByAttr, checkedToggleClassByAttr, uncheckHideAll, uncheckHideAllAttr, toggleClassByChecked, toggleClassByCheckedEl, checkedToggleInputType, checkedToggleInputTypeEl, toggleClassByValue) => {
  // let val = attrVal // value of attrVal cannot be get in addEventListener
  $$all(eventTarget).forEach(item => {
    if (checkedToggleClassByValue) {
      item.addEventListener(event, event => {
        if (event.currentTarget.checked == true) {
          if (elParent != '') {
            item.closest(elParent).querySelectorAll(el).forEach(item => {
              if (item.classList.contains(event.currentTarget.value)) {
                item.classList.remove(toggleClassArray)
              }
            })
          } else {
            $$all(el).forEach(item => {
              if (item.classList.contains(event.currentTarget.value)) {
                item.classList.remove(toggleClassArray)
              }
            })
          }
        } else {
          if (elParent != '') {
            item.closest(elParent).querySelectorAll(el).forEach(item => {
              if (item.classList.contains(event.currentTarget.value)) {
                item.classList.add(toggleClassArray)
              }
            })
          } else {
            $$all(el).forEach(item => {
              if (item.classList.contains(event.currentTarget.value)) {
                item.classList.add(toggleClassArray)
              }
            })
          }

        }
      })
    }
    if (attr != '') {
      item.addEventListener(event, event => {
        // event.preventDefault() // prevent a href refresh - https://www.w3schools.com/jsref/event_preventdefault.asp
        if (valueToggleClassByAttr) {
          if (event.currentTarget.value == item.getAttribute(attr)) {
            if (elParent != '') {
              item.closest(elParent).querySelectorAll(el).forEach(item => {
                item.classList.remove(toggleClassArray)
              })
            } else {
              $$all(el).forEach(item => {
                item.classList.remove(toggleClassArray)
              })
            }
          } else {
            if (elParent != '') {
              item.closest(elParent).querySelectorAll(el).forEach(item => {
                item.classList.add(toggleClassArray)
              })
            } else {
              $$all(el).forEach(item => {
                item.classList.add(toggleClassArray)
              })
            }
          }
        }
        if (checkedToggleClassByAttr) {
          if (event.currentTarget.checked == true) {
            // console.log('checked')
            // console.log(item.getAttribute(attr))
            item.closest(elParent).querySelectorAll(el).forEach(i => {
              if (i.classList.contains(item.getAttribute(attr))) {
                // console.log(i)
                i.classList.remove(toggleClassArray)
              } else {
                i.classList.add(toggleClassArray)
              }
            })
          } else {
            // console.log('unchecked')
            item.closest(elParent).querySelectorAll(el).forEach(i => {
              if (i.classList.contains(item.getAttribute(attr))) {
                i.classList.add(toggleClassArray)
              }
            })
            if (uncheckHideAll) {
              $$all(el).forEach(i => {
                if (i.classList.contains(item.getAttribute(uncheckHideAllAttr))) {
                  i.classList.add(toggleClassArray)
                  i.querySelectorAll(eventTarget).forEach(item => {
                    item.checked = false
                  })
                }
              })
            }
          }
        }
      })
    } else {
      item.addEventListener(event, event => {
        // prevent the page refreshing - https://www.w3schools.com/jsref/event_preventdefault.asp, same as <a href="javascript:void(0)">
        event.preventDefault()
        if (elParent != '') {
          if (findChildren) {
            item.querySelectorAll(el).forEach(item => {
              toggleClasses(item, toggleClassArray)
            })
          } else {
            // let e = $$(el)
            // console.log($$(el).closest(elParent))
            item.closest(elParent).querySelectorAll(el).forEach(item => {
              toggleClasses(item, toggleClassArray)
            })
          }
        } else {
          $$all(el).forEach(item => {
            toggleClasses(item, toggleClassArray)
          })
        }
      })
    }
    if (toggleClassByChecked) {
      item.addEventListener(event, event => {
        if (event.currentTarget.checked == true) {
          item.closest(elParent).querySelectorAll(toggleClassByCheckedEl).forEach(item => {
            item.classList.remove(toggleClassArray)
          })
        } else {
          item.closest(elParent).querySelectorAll(toggleClassByCheckedEl).forEach(item => {
            item.classList.add(toggleClassArray)
          })
        }
      })
    }
    if (checkedToggleInputType) {
      item.onclick = () => {
        if (elParent != '') {
          // console.log(item.closest(elParent))
          item.closest(elParent).querySelectorAll(checkedToggleInputTypeEl).forEach(item => {
            // https://www.w3schools.com/howto/howto_js_toggle_password.asp
            if (item.type === "password") {
              item.type = "text"
            } else {
              item.type = "password"
            }
          })
        } else {
          $$all(checkedToggleInputTypeEl).forEach(item => {
            if (item.type === "password") {
              item.type = "text"
            } else {
              item.type = "password"
            }
          })
        }
      }
    }
    if (toggleClassByValue) {
      item.addEventListener(event, event => {
        // console.log(event.currentTarget.value)
        if (elParent != '') {
          item.closest(elParent).querySelectorAll(el).forEach(item => {
            item.classList.add(toggleClassArray)
            if (item.classList.contains(event.currentTarget.value)) {
              item.classList.remove(toggleClassArray)
            }
          })
        } else {
          $$all(el).forEach(item => {
            item.classList.add(toggleClassArray)
            if (item.classList.contains(event.currentTarget.value)) {
              item.classList.remove(toggleClassArray)
            }
          })
        }
      })
    }
  })
}

const accordion = (el) => {
  // https://codepen.io/dusanralic/pen/PoqGKLM
  if (el.style.maxHeight) {
    el.classList.remove('active')
    el.style.maxHeight = null
  } else {
    el.classList.add('active')
    el.style.maxHeight = el.scrollHeight + "px"
  }
}
const eventToggleClasses = (eventTarget, event, selfToggleClassArray, accordionEl, eventTargetParent, parentToggleClassArray, inactiveParentSiblings, inactiveParentSiblingsChildern, toggleChild, childToggleClassArray, ifClosestChild, triggerClick) => {
  if (accordionEl != '') {
    $$all(accordionEl).forEach((item) => {
      item.classList.remove('toggle', 'tw-hidden')
      item.classList.add('accordion')
    })
  }
  $$all(eventTarget).forEach(item => {
    if (event != '') {
      item.addEventListener(event, event => {
        if (eventTargetParent != '') {

          if (ifClosestChild) {
            item.querySelectorAll(toggleChild).forEach(item => {
              toggleClasses(item, childToggleClassArray)
            })
            item.closest(eventTargetParent).firstElementChild.nextElementSibling.classList.toggle(childToggleClassArray)
          } else {
            //Toggle class('hidden') to all children in the same tree
            item.closest(eventTargetParent).querySelectorAll(toggleChild).forEach(item => {
              toggleClasses(item, childToggleClassArray)
            })
          }

          //Toggle class('open') to self parent
          if (parentToggleClassArray != '') {
            toggleClasses(item.closest(eventTargetParent), parentToggleClassArray)
            if (accordionEl != '') {
              item.closest(eventTargetParent).querySelectorAll(accordionEl).forEach(item => {
                accordion(item)
              })
            }
          }

          // Close all the siblings (opeing in turn)
          if (inactiveParentSiblings != '' && inactiveParentSiblingsChildern != '') {
            // If the arrow right is hidden when the menu is opened
            if (item.firstElementChild.classList.contains(childToggleClassArray) == true) {
              // Find all the same level parents
              item.closest(eventTargetParent).parentElement.querySelectorAll(eventTargetParent).forEach(i => {
                if (i != item.closest(eventTargetParent)) { // Find all siblings parents except self parent
                  i.classList.remove(parentToggleClassArray) // Remove 'open' class from all siblings parents
                }
              })
              // Find all inactive sibling parents
              item.closest(eventTargetParent).parentElement.querySelectorAll(inactiveParentSiblings).forEach(i => {
                // console.log(item)
                // Check if children elements not only one
                if (i.childElementCount == 2) {
                  // Show Right arrow (All inactive siblings children)
                  i.querySelector(inactiveParentSiblingsChildern).firstElementChild.classList.remove(childToggleClassArray)
                  // Hide Down arrow
                  i.querySelector(inactiveParentSiblingsChildern).lastElementChild.classList.add(childToggleClassArray)
                  if (accordionEl != '') {
                    i.querySelectorAll(accordionEl).forEach(item => {
                      item.classList.remove('active')
                      item.style.maxHeight = null
                    })
                  } else {
                    // Hide Contents
                    i.lastElementChild.classList.add(childToggleClassArray)
                  }
                }
              })
            }
          }
        } else {
          if (toggleChild != '') {
            item.querySelectorAll(toggleChild).forEach(item => {
              toggleClasses(item, childToggleClassArray)
            })
          }
          if (accordionEl != '') {
            item.querySelectorAll(accordionEl).forEach(item => {
              accordion(item)
            })
          }
        }
        if (selfToggleClassArray != '') {
          toggleClasses(item, selfToggleClassArray)
        }
        // prevent the page refreshing - https://www.w3schools.com/jsref/event_preventdefault.asp, same as <a href="javascript:void(0)">
        event.preventDefault()
      })
    }
  })
  if (triggerClick != '') {
    $$all(triggerClick).forEach(item => {
      item.addEventListener(event, event => {
        // event.preventDefault()
        item.closest(eventTargetParent).querySelector(eventTarget).click()
      })
    })
  }
}

const stepsEventChecked = (eventTarget, event, eventTargetParent, elCheck, elCheckAttr, el, elParent, hiddenClass, uncheckHideAll, uncheckHideAllAttr) => {
  $$all(eventTarget).forEach((item) => {
    let checkedArr = item.closest(eventTargetParent).querySelectorAll(elCheck)
    item.addEventListener(event, event => {
      let count = 0
      checkedArr.forEach((item) => {
        if (item.checked) {
          count++
        }
      })
      // console.log(count)
      if (count <= 3) {
        checkedArr.forEach((item) => {
          // item.addEventListener('click', event => {})
          if (item.checked == true) {
            // console.log('checked')
            // console.log(item.getAttribute(elCheckAttr))
            item.closest(elParent).querySelectorAll(el).forEach(i => {
              if (i.classList.contains(item.getAttribute(elCheckAttr))) {
                // console.log(i)
                i.classList.remove(hiddenClass)
              }
            })
          } else {
            // console.log('unchecked')
            item.closest(elParent).querySelectorAll(el).forEach(i => {
              if (i.classList.contains(item.getAttribute(elCheckAttr))) {
                i.classList.add(hiddenClass)
              }
            })
            if (uncheckHideAll) {
              $$all(el).forEach(i => {
                if (i.classList.contains(item.getAttribute(uncheckHideAllAttr))) {
                  i.classList.add(hiddenClass)
                  i.querySelectorAll(elCheck).forEach(item => {
                    item.checked = false
                  })
                }
              })
            }
          }
        })
      }
      if (count > 3 && item.getAttribute('data-bs-toggle') == 'tooltip') {
        let tooltip = new bootstrap.Tooltip(item)
        tooltip.show()
        setTimeout(() => {
          tooltip.hide()
        }, 1000)
        // tooltip.enable()
      } else {
        tooltip.hide()
      }
    })
    $$all(elCheck).forEach((itemCheck) => {
      if (itemCheck.closest(eventTargetParent) != item.closest(eventTargetParent)) {
        itemCheck.onclick = () => {
          if (itemCheck.checked == true) {
            // console.log('checked')
            // console.log(item.getAttribute(elCheckAttr))
            itemCheck.closest(elParent).querySelectorAll(el).forEach(i => {
              if (i.classList.contains(itemCheck.getAttribute(elCheckAttr))) {
                // console.log(i)
                i.classList.remove(hiddenClass)
              }
            })
          } else {
            // console.log('unchecked')
            itemCheck.closest(elParent).querySelectorAll(el).forEach(i => {
              if (i.classList.contains(itemCheck.getAttribute(elCheckAttr))) {
                i.classList.add(hiddenClass)
              }
            })
            if (uncheckHideAll) {
              $$all(el).forEach(i => {
                if (i.classList.contains(itemCheck.getAttribute(uncheckHideAllAttr))) {
                  i.classList.add(hiddenClass)
                  i.querySelectorAll(elCheck).forEach(item => {
                    item.checked = false
                  })
                }
              })
            }
          }
        }
      }
    })
  })
}

// const $$all = (el) => document.querySelectorAll(el)
// const toggleClasses = (el, ...cls) => cls.map(cl => el.classList.toggle(cl)) // '...cls': Rest parameter must be last formal parameter
// const eventToggleClasses = (eventTarget, event, eventTargetParent, toggleChild, ...cls) => {
//   $$all(eventTarget).forEach(item => {
//     item.addEventListener('click', event => {
//       if (eventTargetParent != '') {
//         item.closest(eventTargetParent).querySelectorAll(toggleChild).forEach(item => {
//           toggleClasses(item, ...cls)
//         })
//       } else {
//         item.querySelectorAll(toggleChild).forEach(item => {
//           toggleClasses(item, ...cls)
//         })
//       }
//     })
//   })
// }
// eventToggleClasses('.list-group-item', 'click', '', '.fas', 'fa-angle-right', 'fa-angle-down');
// eventToggleClasses('.list_accordion .arrow', 'click', 'li.py-1', '.toggle', 'tw-hidden');

const setMaxViewHeight = (el) => {
  $$all(el).forEach(item => {
    item.style.maxHeight = window.innerHeight - item.getBoundingClientRect().top + 'px'
  })
}
const eventMaxViewHeight = (event_el, event, height_el) => {
  $$all(event_el).forEach(item => {
    item.addEventListener(event, () => {
      $$all(height_el).forEach(item => {
        item.style.maxHeight = window.innerHeight - item.getBoundingClientRect().top + 'px'
      })
    })
  })
}
const minViewHeight = (el, top_el, top2_el, btm_el) => {
  // offsetHeight: including padding, border and scrollbar, but not the margin - https://www.w3schools.com/jsref/prop_element_offsetheight.asp
  $$all(el).forEach(item => {
    if (top2_el != '') {
      item.style.minHeight = window.innerHeight - $$(top_el).offsetHeight - $$(top2_el).offsetHeight - $$(btm_el).offsetHeight + 'px'
    } else {
      item.style.minHeight = window.innerHeight - $$(top_el).offsetHeight - $$(btm_el).offsetHeight + 'px'
    }
  })
}
const setSameHeight = (el, trigger, event, media, ifBSTab) => {
  let h = []
  const getHeight = () => {
    $$all(el).forEach((item) => {
      h.push(item.offsetHeight)
    })
  }
  const setHeight = () => {
    $$all(el).forEach((item) => {
      item.style.height = Math.max(...h) + 'px'
    })
  }
  if (window.matchMedia(media).matches) {
    getHeight()
    setHeight()
    if (trigger != '') {
      if (ifBSTab) {
        // var tabEl = document.querySelector(trigger)
        $$all(trigger).forEach((item) => {
          item.addEventListener('shown.bs.tab', (event) => {
            h = [] // empty arrary
            $$all(el).forEach((item) => {
              item.setAttribute('style', '')  // remove style height
            })
            getHeight()
            setHeight()
          })
        })
      } else {
        $$all(trigger).forEach((item) => {
          item.addEventListener(event, (e) => {
            e.preventDefault()
            h = []
            $$all(el).forEach((item) => {
              item.setAttribute('style', '')
            })
            getHeight()
            setHeight()
          })
        })
      }
    }
  }
}

/* global ResizeObserver - https://jsfiddle.net/shen_yang_work/bfejc082/ */
const roundedBorder = new ResizeObserver(entries => { // 'entries' can be any names like 'items'
  for (let entry of entries) {
    entry.target.style.borderRadius = Math.max(0, 250 - entry.getBoundingClientRect().width) + 'px'
    // entry.contentRect.width: No support on iOS Safari & Android Firefox
  }
})
// Only observe the 2nd box
// roundedBorder.observe(document.querySelector('.example-element'))

//go to top
const anchorSmoothScroll = (el) => {
  document.querySelectorAll('.nav__item a[href^="#"]').forEach(trigger => {
    trigger.onclick = (e) => {
      e.preventDefault()
      let hash = this.getAttribute('href')
      let target = document.querySelector(hash)
      let headerOffset = 100
      let elementPosition = target.offsetTop
      let offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  })
}
const scrollToTop = (amount) => {
  window.scrollTo({ // If the trigger is a #hash link: <a href="#">, then it's not working. So it needs to be <a href="javascript:void(0)">
    top: amount,
    behavior: 'smooth'
  })
}
const gotoTop = (el, addClassName, removeClassName, scollDownPX, scrollTopPX) => {
  $$all(el).forEach(item => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > scollDownPX || document.documentElement.scrollTop > scollDownPX) {
        item.classList.add(addClassName)
        item.classList.remove(removeClassName)
      } else {
        item.classList.remove(addClassName)
        item.classList.add(removeClassName)
      }
    })
    item.addEventListener('click', () => {
      scrollToTop(scrollTopPX)
    })
  })
}

//------------- Set tabindex for AA ------------------------------------------------//
const closestNumber = (arr, num) => {
  const output = arr.reduce((prev, curr) => Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev)
  return output
}
// console.log(closestNumber([4, 9, 15, 6, 2], 5))

const setTabIndex = (tabSwitcherParent, tabParent, tab, lastTab, switcher, page, target, beginningIndex) => {
  var startingTabindex = beginningIndex,  // It's a number so it must be 1 and cannot be '1' in parameters, or it comes to a text
    lastTSTargetIndex, lastTSTargetIndexArr = []

  if (onePresent(page) && onePresent(tab)) {
    $$(page).querySelectorAll(target).forEach((item) => {
      item.setAttribute('tabindex', startingTabindex) // Set the tabindex to all targets in document
      // console.log(startingTabindex)
    })
  }
  $$all(tab).forEach((item, index) => {
    item.setAttribute('tabindex', index + startingTabindex) // Set the tabindex to all tabs
    // console.log(item, '-index: ', index)
  })
  $$all(switcher).forEach((item, index) => {
    item.querySelectorAll(target).forEach((targetItem) => {
      targetItem.setAttribute('tabindex', index + startingTabindex) // Set the tabindex to all the switcher targets
      // console.log(startingTabindex)
    })
  })

  $$all(target).forEach((item, index, arr) => {
    $$all(tabSwitcherParent).forEach((TSPItem) => {
      TSPItem.querySelectorAll(target).forEach((targetItem, targetIndex, targetArr) => {
        if (item == targetArr[targetArr.length - 1]) { // Find 'the last target' in the tab switcher
          lastTSTargetIndex = index // Get the 'index' from the last target in the tab switcher
          if (lastTSTargetIndexArr.indexOf(lastTSTargetIndex) == -1) { // Exclude 'the same index'
            lastTSTargetIndexArr.push(lastTSTargetIndex) // Collect all 'last target indexs' in the tab switcher
          }
        }
      })
    })
    lastTSTargetIndexArr.forEach((indexItem) => {
      if (index > indexItem && item.closest(tabSwitcherParent) == null) { // Find all other targets following after tab switcher and not in tab switcher
        // closestNumber(lastTSTargetIndexArr, index) // Get the closest item to the last target in tab switcher
        startingTabindex = arr[closestNumber(lastTSTargetIndexArr, index)].closest(tabSwitcherParent).querySelector(tabParent).querySelector(lastTab).tabIndex // Get the tabindex from the closest target in the tab switcher
        item.setAttribute('tabindex', startingTabindex)
      }
    })
  })
}

const tabIndex = (tabSwitcherParent, tab, switcher, page, target, beginningIndex, ignore, ifsub, subTabSwitcher, subTab, subSwitcher) => {

  let startIndex = beginningIndex // It's a number so it must be 1 and cannot be '1' in parameters, or it comes to a text

  if (onePresent(page) && onePresent(tab)) {

    const tabwitcher = (tabSwitcherParent, tab, switcher, target, startIndex) => {
      $$all(tab).forEach((itemTab, indexTab, arrTab) => {
        // console.log(itemTab)
        itemTab.setAttribute('tabindex', indexTab + startIndex) // set tabindex to tab
        $$all(switcher).forEach((itemSw, indexSw) => {
          if (indexSw == indexTab) { // if the switcher id the same as tab
            itemSw.querySelectorAll(target).forEach((i, id) => {
              i.setAttribute('tabindex', indexTab + startIndex) // set tabindex to all targets in this switcher
            })
          }
        })
      })

      $$(tabSwitcherParent).querySelectorAll(target).forEach((itemTarget, idTarget, arrTarget) => {
        if (itemTarget == arrTarget[arrTarget.length - 1]) { // find the last target in tab-switcher
          var tabIndex = itemTarget.closest(tabSwitcherParent).querySelector('ul>li:last-child>[data-bs-target]').getAttribute('tabindex') // get tabindex of the last tab
          if (itemTarget.getAttribute('tabindex') < tabIndex) { // if tabindex of the last target is smaller than tabindex of the last tab
            startIndex = tabIndex
          } else {
            startIndex = itemTarget.getAttribute('tabindex')
          }
        }
      })
      // console.log(startIndex)
      return startIndex
    }

    // if (subTabSwitcher != '' && subTab != '' && subSwitcher != '') not working
    if (ifsub) {
      // $$all(tab).forEach((item) => {})

      // $$all(tab).forEach((itemTab, indexTab) => {
      //   $$(page).querySelectorAll(target).forEach((itemTarget, indexTarget, arrTarget) => {
      //     for (const [i, obj] of arrTarget.entries()) {
      //         if (itemTarget == itemTab && indexTab == 0 && i < indexTarget ) { // find all targets behind the first tab
      //         obj.setAttribute('tabindex', startIndex)
      //       }
      //     }
      //   })
      // })
      // $$all(tab).forEach((itemTab, indexTab) => {
      //   itemTab.setAttribute('tabindex', startIndex) // set tabindex to tab
      //   $$all(switcher).forEach((itemSw, indexSw) => {
      //     if (indexSw == indexTab) { // if the switcher id the same as tab
      //       itemSw.querySelectorAll(target).forEach((i, id) => {
      //         tabwitcher(subTabSwitcher, subTab, subSwitcher, target, startIndex)
      //       })
      //     }
      //   })
      //   startIndex++
      // })
      // $$(tabSwitcherParent).querySelectorAll(target).forEach((itemTarget, idTarget, arrTarget) => {
      //   if (itemTarget == arrTarget[arrTarget.length - 1]) { // find the last target in tab-switcher
      //     startIndex = itemTarget.getAttribute('tabindex')
      //   }
      // })
    } else {
      // console.log('not sub')
      $$all(tab).forEach((itemTab, indexTab) => {
        $$(page).querySelectorAll(target).forEach((itemTarget, indexTarget, arrTarget) => {
          if (itemTarget.closest(tab) == itemTab) { // if tab has child 
            itemTarget.setAttribute('tabindex', itemTab.getAttribute('tabindex')) // set tabindex of this tab's child target
          }
          for (const [i, obj] of arrTarget.entries()) {
            if (itemTarget == itemTab && indexTab == 0 && i < indexTarget) { // find all targets before the first tab
              obj.setAttribute('tabindex', startIndex)
            }
          }
        })
      })

      // tabwitcher(tabSwitcherParent, tab, switcher, target, startIndex) // value in function won't replace outside value
      startIndex = tabwitcher(tabSwitcherParent, tab, switcher, target, startIndex) // execute function and get the value

      $$all(tabSwitcherParent).forEach((itemTS, indexTS, arrTS) => {
        if (arrTS.length > 1) { // if multiple tab-switcher
          let start = 0, end = 0

          $$(page).querySelectorAll(target).forEach((allTarget, idAllTarget, arrAllTarget) => {
            itemTS.querySelectorAll(tab).forEach((iTab, idTab, arrTab) => {
              if (indexTS != (arrTS.length - 1)) { // exclude last tab-switcher
                itemTS.querySelectorAll(target).forEach((iTarget, idTarget, arrTarget) => {
                  //find last target of tab-switcher in all targets, then get its index
                  if (idTarget == (arrTarget.length - 1) && allTarget == iTarget) {
                    // console.log(allTarget)
                    start = idAllTarget // get start index
                    // console.log(start)
                  }
                })
                $$all(tab).forEach((iAllTab, idAllTab, arrAllTab) => {
                  // find last tab of this tab-switcher and its next first tab of next tab-switcher in all tabs, then get its index in all targets
                  // console.log(iAllTab)
                  if (idTab == (arrTab.length - 1) && iAllTab == iTab && allTarget == arrAllTab[idAllTab + 1]) {
                    // console.log(allTarget)
                    end = idAllTarget // get end index
                    // console.log(end)
                  }
                })
                // console.log(start, end)
                for (const [i, obj] of arrAllTarget.entries()) {
                  if (i > start && i < end) { // find all targets between multiple tab-switchers
                    // console.log(obj)
                    obj.setAttribute('tabindex', startIndex)
                  }
                }
                // if (idAllTarget > start && idAllTarget < end) {} // not working
              } else { // if the last tab-switcher
                itemTS.querySelectorAll(target).forEach((iTarget, idTarget, arrTarget) => {
                  if (iTarget == arrTarget[arrTarget.length - 1]) { // find the last target in tab-switcher
                    startIndex = iTarget.getAttribute('tabindex')
                  }
                })
              }
            })
          })
        }
      })

      // console.log(startIndex)
      $$all(tabSwitcherParent).forEach((item, id, arr) => {
        if (id == arr.length - 1) { // find last tab-switcher
          item.querySelectorAll(target).forEach((itemTarget, idTarget, arrTarget) => {
            $$(page).querySelectorAll(target).forEach((allTarget, idAllTarget, arrAllTarget) => {
              for (const [i, obj] of arrAllTarget.entries()) {
                // find all targets behind the last target of tab-switcher then set tabindex
                if (itemTarget == allTarget && itemTarget == arrTarget[arrTarget.length - 1] && i > idAllTarget) {
                  obj.setAttribute('tabindex', startIndex)
                }
              }
            })
          })
        }
      })
    }
    if (ignore != '') {
      // console.log('ignore present')
      $$all(ignore).forEach((i, id) => {
        i.setAttribute('tabindex', -1)
      })
    }
  }
}

const enterToClick = (el, parent, target, event) => {
  $$all(el).forEach(item => {
    item.onkeydown = () => {
      if (event.currentTarget == item && event.keyCode === 13) { // Number 13 is the "Enter" key on the keyboard
        event.preventDefault() // Cancel the default action if needed: Prevent a link from opening the URL if the trigger is a link
        item.closest(parent).querySelectorAll(target).forEach(targetItem => {
          targetItem.click()
        })
      }
    }
  })
}

//Click 'Enter' to open window by the attribute 'href'
// Set <a href="https://www.google.com.tw/" onkeydown="enterOpenUrl('_blank')">
function enterOpenUrl(targetWindow, event) {
  if (event.keyCode === 13) {
    let target = event.currentTarget.getAttribute(targetWindow)
    window.open(event.currentTarget.getAttribute('href'), target ? target : '_self')
  }
}
const enterToUrl = (target, targetWindowArr, event) => {
  $$all(target).forEach((item, index) => {
    item.onkeydown = () => {
      if (event.currentTarget == item && event.keyCode === 13) {
        if (targetWindowArr.length == 1) {
          window.open(item.getAttribute('href'), targetWindowArr[0])
        } else {
          window.open(item.getAttribute('href'), targetWindowArr[index])
        }
      }
    }
  })
}

const attrPlayAudio = (el, eventNames, attr) => {
  let events = eventNames.split(' ')
  $$all(el).forEach(item => {
    events.forEach(e => {
      item.addEventListener(e, event => {
        new Audio(item.getAttribute(attr)).play()
        event.preventDefault() // Clicking on a link, prevent the link from following the URL: https://www.w3schools.com/jsref/event_preventdefault.asp
      })
    })
  })
}

//------------- /Set tabindex for AA ------------------------------------------------//

//Set multiple attributes to element at once
//ES6 Helper function: The "key" can be replace with "x" or any var
const setAttributes = (el, attrs) => {
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]))
}
//Helper function
// function setAttributes(el, attrs) {
//   for (var key in attrs) {
//     el.setAttribute(key, attrs[key])
//   }
// }
// setAttributes(elem, {"src": "http://example.com/something.jpeg", "height": "100%"})

//Set multiple attributes to multiple elements: attrs={'attr':'attrValue', 'attr2':'attrValue2'}
const setAttrs = (el, attrs, ifNoOverride) => {
  // $$all(el).forEach(
  //   key1 => Object.keys(attrs).forEach(
  //     key2 => key1.setAttribute(key2, attrs[key2])
  //   )
  // )
  if (ifNoOverride) {
    $$all(el).forEach(
      key1 => Object.keys(attrs).forEach(
        key2 => key1.setAttribute(key2, key1.getAttribute(key2) + attrs[key2])
      )
    )
  } else {
    $$all(el).forEach(
      key1 => Object.keys(attrs).forEach(
        key2 => key1.setAttribute(key2, attrs[key2])
      )
    )
  }
}

//<a class="uk-accordion-title" href="#" onclick="toggleAttr(event, '', 'title', '展開', '縮起')">
const eventToggleAttr = (event_el, event, event_el_children, attr, val1, val2) => {
  $$all(event_el).forEach(item => {
    item.addEventListener(event, () => {
      let attrVal = item.getAttribute(attr)
      if (val1 != '' && val2 != '') {
        item.setAttribute(attr, attrVal == val1 ? val2 : val1)
      }
      if (val1 == '' && val2 == '') {
        if (event_el_children != '') {
          item.querySelectorAll(event_el_children).forEach(item => {
            if (item.hasAttribute(attr)) {
              item.removeAttribute(attr)
            } else {
              item.setAttribute(attr, true)
            }
          })
        } else {
          if (item.hasAttribute(attr)) {
            item.removeAttribute(attr)
          } else {
            item.setAttribute(attr, true)
          }
        }
      }
    })
  })
}

//------------- Clone - Add <a href="javascript:void(0);" to stop page refresh ------------------------------------------------//
// See: file:///D:/Works/210316-libskh-skh/src/03table1.html
const cloneToggleClass = () => {
  // cloneToggleClass(false, 'click', '#btnAdd', '.searchInput', '.searchInput .searchBox', '.searchInput>div', 4, '.btnRemove, .toggleSelect', 'tw-hidden', '.btnRemove', '.searchBox input', '')
  // var = uk, event, event_el, event_el_parent, clone_el, clone_destination, cloneMaxNumber, toggle_el, toggle_class, btnRemove, input, last_select
  let uk = false
  // let event = 'click'
  let event_el = '#btnAdd'
  let event_el_parent = '.searchInput'
  let clone_el = '.searchInput .searchBox:last-child'
  let clone_destination = '.searchInput>div'
  let cloneMaxNumber = 3
  let toggle_el = '.btnRemove'
  let toggle_class = 'tw-hidden'
  let btnRemove = '.btnRemove'
  let input = '.searchBox input'
  let last_select = '.secondSelect'

  let clone = document.querySelector(clone_el).cloneNode(true)

  if (uk == true) {
    clone.classList.remove('uk-first-column')
  }
  clone.querySelectorAll(toggle_el).forEach(item => { // querySelectorAll() accepts full CSS selectors
    item.classList.remove(toggle_class)
  })

  clone.querySelectorAll(input).forEach(item => {
    item.value = ''
  })

  if (count < cloneMaxNumber) {
    $$(event_el_parent).querySelector(clone_destination).appendChild(clone)
    count++
    console.log(count)
  }

  function toggleSelect() {
    // it's optional for hiding the last select
    if (last_select != '' && onePresent(last_select)) {
      $$all(clone_el).forEach(item => {
        item.querySelector(last_select).classList.remove(toggle_class) // reset all selects to show
      })
      $$(clone_destination).lastElementChild.querySelector(last_select).classList.add(toggle_class) // hide the last select of the last searchBox
    }
  }
  toggleSelect()

  // if (count == cloneMaxNumber) {
  //   window.setTimeout('alert("新增查詢欄位已到極限");window.close();', 500);
  // }

  // Not working because of repeating the same clone
  // $$all(event_el).forEach((item, index, arr) => {
  //   item.addEventListener(event, () => {    
  //     if (count < cloneMaxNumber) {
  //       $$(event_el_parent).querySelector(clone_destination).appendChild(clone)
  //       count++
  //       console.log(count)
  //     }
  //     toggleSelect()
  //   })
  // })

  $$all(btnRemove).forEach((item, index, arr) => {
    item.addEventListener('click', () => {
      if (uk == true) {
        item.closest(clone_el).remove() // click the btnRemove to remove the closest parent
      }
      // arr.splice(index, 1); // splice(index, howmanyToRemoved, NewElementsToBeAdded) https://www.w3schools.com/jsref/jsref_splice.asp
      count = count - 1 // count-- got error
      if (count < 0) {
        count = 0
      }
      toggleSelect()
      // if (last_select != '' && onePresent(last_select)) {
      //   toggleSelect()
      // }
      console.log(count)
    })
  })
}

const cloneElement = (clone_el, clone_destination, childInput, blockBtnAdd, btnRemove, hiddenClass, ifcloneMax, cloneMaxNumber) => {
  const clone = document.querySelector(clone_el).cloneNode(true)
  clone.classList.remove(hiddenClass)
  clone.querySelectorAll(childInput).forEach(item => {
    item.value = ''
  })
  // console.log(clone)
  if (!ifcloneMax) {
    $$(clone_destination).appendChild(clone)
  } else {
    if (count < cloneMaxNumber) {
      $$(clone_destination).appendChild(clone)
      count++
      // console.log(count)
    }
  }
  const fragment = document.createDocumentFragment()
  fragment.appendChild($$(blockBtnAdd))
  $$(clone_destination).appendChild(fragment) // Move btnAdd to last
  if (ifcloneMax) {
    $$all(btnRemove).forEach((item) => {
      // Don't use item.addEventListener(), it got error for loop items in forEach()
      item.onclick = () => {
        // console.log('click remove')
        count = count - 1 // count-- got error
        if (count < 0) {
          count = 0
        }
        // console.log(count)
      }
    })
  }
}

//------------- Form ------------------------------------------------//

const toggleCheckAll = (checkAll, checkAllEvent, toggleCheckClass, inputCheck, inputCheckParent, ifAddClass) => {
  // ifAddClass is boolean
  $$all(checkAll).forEach(item => {
    if (checkAllEvent != '') {
      item.addEventListener(checkAllEvent, event => {
        event.target.classList.toggle(toggleCheckClass)
        if (event.target.classList.contains(toggleCheckClass)) {
          //if 'select all' checked
          event.target.checked = true
          if (ifAddClass == true) {
            event.target.classList.add(toggleCheckClass)
          }
          $$all(inputCheck).forEach(item => {
            item.checked = true
            if (ifAddClass == true) {
              item.closest(inputCheckParent).classList.add(toggleCheckClass)
            }
          })
        } else {
          //if 'select all' unchecked
          event.target.checked = false
          if (ifAddClass == true) {
            event.target.classList.remove(toggleCheckClass)
          }
          $$all(inputCheck).forEach(item => {
            item.checked = false
            if (ifAddClass == true) {
              item.closest(inputCheckParent).classList.remove(toggleCheckClass)
            }
          })
        }
      })
    }
  })
}

const toggleCheckAllSum = (checkAllEl, checkAllEvent, toggleCheckClass, inputCheck, inputCheckEvent, inputCheckParent, ifAddClass, resetButton, resetButtonEvent, ifResetType, textSum, countAttr) => {

  if (textSum != '' && onePresent(textSum)) {
    if (countAttr != '' && $$(textSum).getAttribute(countAttr) != null) {
      var sum = parseInt($$(textSum).getAttribute(countAttr))
    } else {
      var sum = 0
    }
    // console.log($$(textSum))
    $$all(textSum).forEach(item => {
      item.innerHTML = sum
    })
  }
  const checkAll = () => {
    $$all(checkAllEl).forEach(item => {
      item.classList.add(toggleCheckClass)
      if (item.getAttribute('type') == 'checkbox') {
        item.checked = true
      }
    })
    $$all(inputCheck).forEach(item => {
      item.checked = true
      if (ifAddClass == true) {
        item.closest(inputCheckParent).classList.add(toggleCheckClass)
      }
    })
    if (textSum != '') {
      sum = $$all(inputCheck).length
      $$all(textSum).forEach(item => {
        item.innerHTML = sum
      })
    }
  }
  const unCheckAll = () => {
    $$all(checkAllEl).forEach(item => {
      item.classList.remove(toggleCheckClass)
      if (item.getAttribute('type') == 'checkbox') {
        item.checked = false
      }
    })
    $$all(inputCheck).forEach(item => {
      item.checked = false
      if (ifAddClass == true) {
        item.closest(inputCheckParent).classList.remove(toggleCheckClass)
      }
    })
    if (textSum != '') {
      sum = 0
      $$all(textSum).forEach(item => {
        item.innerHTML = sum
      })
    }
  }

  $$all(inputCheck).forEach((item, index, arr) => {
    if (inputCheckEvent != '') {
      item.addEventListener(inputCheckEvent, event => {
        if (event.target.checked) {
          if (ifAddClass == true) {
            event.target.closest(inputCheckParent).classList.add(toggleCheckClass)
          }
          if (textSum != '') {
            sum = sum + 1
            $$all(textSum).forEach(item => {
              item.innerHTML = sum
            })
          }
        } else {
          if (checkAllEl != '') {
            $$all(checkAllEl).forEach(item => {
              item.classList.remove(toggleCheckClass)
              if (item.getAttribute('type') == 'checkbox') {
                item.checked = false
              }
            })
          }
          if (ifAddClass == true) {
            event.target.closest(inputCheckParent).classList.remove(toggleCheckClass)
          }
          if (textSum != '') {
            sum = sum - 1
            $$all(textSum).forEach(item => {
              item.innerHTML = sum
            })
          }
        }
        if (sum == arr.length) {
          if (checkAllEl != '') {
            $$all(checkAllEl).forEach(item => {
              item.classList.add(toggleCheckClass)
              if (item.getAttribute('type') == 'checkbox') {
                item.checked = true
              }
            })
          }
        }
      })
    }
  })

  if (checkAllEl != '') {
    $$all(checkAllEl).forEach(item => {
      if (checkAllEvent != '') {
        item.addEventListener(checkAllEvent, event => {
          event.target.classList.toggle(toggleCheckClass)
          if (event.target.classList.contains(toggleCheckClass)) {
            if (event.target.getAttribute('type') == 'checkbox') {
              $$all(checkAllEl).forEach(item => {
                item.checked = true
              })
            }
            checkAll()
          } else {
            if (event.target.getAttribute('type') == 'checkbox') {
              $$all(checkAllEl).forEach(item => {
                item.checked = false
              })
            }
            unCheckAll()
          }
        })
      }
    })
  }

  if (resetButton != '') {
    $$all(resetButton).forEach(item => {
      item.addEventListener(resetButtonEvent, () => {
        if (ifResetType) {
          if (textSum != '') {
            sum = 0
            $$all(textSum).forEach(item => {
              item.innerHTML = sum
            })
          }
        } else {
          unCheckAll()
        }
      })
    })
  }
}

//select onchange Event - <select onchange="showOption(event,'1','#source')">
function showOption(event, val, sl) {
  var showEl = document.querySelectorAll(sl)
  // var val = event.currentTarget.value
  var i
  if (event.currentTarget.value == val) {
    for (i = 0;i < showEl.length;i++) {
      showEl[i].removeAttribute('hidden')
    }
  } else {
    for (i = 0;i < showEl.length;i++) {
      showEl[i].setAttribute('hidden', '')
    }
  }
}

// Select option selected to its url value or: <select onchange="window.document.location.href=this.options[this.selectedIndex].value;">
const selectToUrl = (e, targetWindow) => {
  $$all(e).forEach((item) => {
    item.onchange = () => {
      window.open(this.options[this.selectedIndex].value, targetWindow)
    }
  })
}

const eventShow = (el, event, targetArr, valArr) => {
  $$(el).on(event, () => {
    $$all(target)
  })
}

//------------- /Form ------------------------------------------------//

// set <img onclick="changeImg(this, 'img/icon01.png', 'img/icon01b.png')">
const changeImg = (thisElement, imgOldUrl, imgNewUrl) => {
  console.log(thisElement.getAttribute('src'))
  if (thisElement.getAttribute('src') == imgOldUrl) {
    // thisElement.src = imgNewUrl
    thisElement.setAttribute('src', imgNewUrl)
  } else {
    // thisElement.src = imgOldUrl
    thisElement.setAttribute('src', imgOldUrl)
  }
}

// ----- < Click img to cahnge src with being single > ----- //
const getSrc = (el) => {
  const srcs = []
  $$all(el).forEach(item => {
    srcs.push(item.getAttribute('src'))
  })
  return srcs
  // console.log(srcs)
}
// const allSrcs = getSrc('siblingEl') Same with the last variable 'siblingEl' in changeImage() as below
// const allSrcs = getSrc('.bg-light .icon img')
// Set <img onclick="changeImage(this, 'img/icon01.png', 'img/icon01b.png', '.bg-light .icon img'); return false;">
const changeImage = (thisElement, imgOldUrl, imgNewUrl, siblingEl) => {
  // console.log(allSrcs)
  // Or using 'for (key in array) {}'
  $$all(siblingEl).forEach((item, key) => {
    item.setAttribute('src', allSrcs[key]) // Reset all
  })
  if (thisElement.getAttribute('src') == imgOldUrl) {
    thisElement.setAttribute('src', imgNewUrl)
  } else {
    thisElement.setAttribute('src', imgOldUrl)
  }
}
// ----- </ Click img to cahnge src with being single > ----- //

// For AA javascript detecting
// const noScript = (elZH, zhText, elEN, enText) => {
//   let noscript = document.createElement('noscript')
//   if (onePresent(elZH)) {
//     noscript.innerHTML = zhText
//     $$(elZH).insertBefore(noscript, $$(elZH).firstChild)
//   }
//   if (onePresent(elEN)) {
//     noscript.innerHTML = enText
//     $$(elEN).insertBefore(noscript, $$(elEN).firstChild)
//   }
// }
// noScript('[lang^="zh"] body', '您的瀏覽器不支援JavaScript功能，若網頁功能無法正常使用時，請開啟瀏覽器JavaScript狀態！', '[lang^="en"] body', "Your browser's JavaScript is disabled, please turn on!")

// For AA javascript detecting
const noScript = (objArr) => {
  // Object Array: object = {'a':'value1', 'b':'value2'}
  let div = document.createElement('div'), noscript = document.createElement('noscript')
  div.classList.add('tw-text-center', 'tw-leading-10', 'tw-text-white', 'tw-bg-pink-900')
  div.appendChild(noscript)
  Object.keys(objArr).forEach(
    key => {
      if (onePresent(key)) {
        noscript.innerHTML = objArr[key]
        $$all(key).forEach(item => {
          item.insertBefore(div, item.firstChild)
        })
      }
    }
  )
}
// noScript({ '[lang^="zh"] body': '您的瀏覽器不支援JavaScript功能，若網頁功能無法正常使用時，請開啟瀏覽器JavaScript狀態！', '[lang^="en"] body': "Your browser's JavaScript is disabled, please turn on!" })

//Trim space text
const trimTxt = (inputtx) => {
  return inputtx.replace(/^\s+|\s+$/gm, "")
}

//------------- Uikit ------------------------------------------------//

const uikitSvg = (logoSvg) => {
  if (onePresent(logoSvg)) {
    UIkit.svg($$(logoSvg)).svg.then((svg) => {
      svg.setAttribute("preserveAspectRatio", "xMinYMid")
      // svg.querySelector('path').style.stroke = 'red'
    })
  }
}

const ukChangeImg = (logoImg, src) => {
  // var str = src
  // var ext = str.slice(str.indexOf('.') + 1) // Extract string between '.' and the end
  UIkit.img($$(logoImg), { dataSrc: src }) // $$(logoImg) is element. CANNOT use selector:'logoImg'
  if ($$(logoImg).hasAttribute('uk-svg')) {
    // console.log('Image')
    UIkit.svg($$(logoImg), { src: src })
  }
  // if (onePresent(logoImg)) {
  //   var img = UIkit.img(logoImg, {dataSrc: src});
  // }
}
// ukChangeImg('.prescription .logoimg > img', '/img/logoB.svg')

// window.onload = () => {
// }

//Slideshow tab focus
const slideShowFocus = (slideshow, tabs, event) => {
  $$all(tabs).forEach((item, index) => {
    item.onfocus = () => {
      if (event.currentTarget == item) {
        UIkit.slideshow($$(slideshow)).show(index)
      }
    }
  })
}

//Uikit 3 load active tab (or with switcher) from url [[for another page]]. Usage: page.html?class=el:switcher#3
//https://www.w3schools.com/JSREF/prop_loc_hash.asp, https://www.w3schools.com/jsref/jsref_slice_string.asp
const urlToUkTab = () => {
  var str = location.search
  var hash = location.hash
  var selector = str.slice(str.indexOf('?') + 1, str.indexOf('=')) // Extract string between '?' and '='
  var el = str.slice(str.indexOf('=') + 1, str.indexOf(':')) // Extract string between '=' and ':'
  var type = str.slice(str.indexOf(':') + 1) // Extract string from next ':' to the end
  var index = hash.slice(1) // Extract string from next '#' to the end
  if (location.search) {
    if (selector == 'class') {
      if (type == 'switcher') {
        UIkit.switcher('.' + el).show(index)
      }
      if (type == 'tab') {
        UIkit.tab('.' + el).show(index)
      }
    }
    if (selector == 'id') {
      if (type == 'switcher') {
        UIkit.switcher('#' + el).show(index)
      }
      if (type == 'tab') {
        UIkit.tab('#' + el).show(index)
      }
    }
    if (selector == 'attr') {
      if (type == 'switcher') {
        UIkit.switcher('[' + el + ']').show(index)
      }
      if (type == 'tab') {
        UIkit.tab('[' + el + ']').show(index)   // console.log(selector, el, type, index)
      }
    }
  }
}

//------------- /Uikit ------------------------------------------------//

const deleteChildren = (e) => {
  //e.firstElementChild can be used.
  $$all(e).forEach((item) => {
    let child = item.lastElementChild
    while (child) {
      item.removeChild(child)
      child = item.lastElementChild
    }
  })
}

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
const copyIputText = (event_el, event, input, parent, ifBootstrap, info) => {
  $$all(event_el).forEach(item => {
    item.addEventListener(event, (event) => {
      /* Get the text field */
      let copyText = item.closest(parent).querySelector(input)

      /* Select the text field */
      copyText.select()
      copyText.setSelectionRange(0, 99999) /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value)

      // Show tooltip or alert
      if (ifBootstrap) {
        item.setAttribute('title', info)
        new bootstrap.Tooltip(item).show()
      } else {
        /* Alert the copied text */
        alert(info + copyText.value)
      }
    })
  })
}

const getDate = () => {
  let d = new Date()
  let date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
  console.log(date)
  return date
}
const setDate = (el) => {
  $$(el).innerHTML = getDate
}

const eventSetFormText = (event_el, event, form_el, txtParent) => {
  $$all(event_el).forEach(item => {
    item.addEventListener(event, (event) => {
      let child = document.createElement("LI")
      let date = document.createElement("SPAN")
      date.classList.add('date', 'pseudo:parentheses')
      date.innerHTML = new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate()
      child.innerHTML = $$(form_el).value
      // console.log(date)
      child.appendChild(date)
      child.classList.add('new')
      $$(txtParent).insertBefore(child, $$(txtParent).firstChild)
      if ($$(form_el).tagName == 'INPUT') {
        $$(form_el).addEventListener('keyup', (event) => {
          // Number 13 is the "Enter" key on the keyboard
          if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault()
            item.click()
          }
        })
      }
    })
  })
}

// https://dev.to/walternascimentobarroso/convert-span-to-input-and-vice-versa-using-javascript-nlh
const eventEditInput = (trigger, event, el, elParent, inputAttrs, iftoggle, toggleEl, toggleClass, saveTrigger, save_event, resetTrigger, reset_event, ifTooltip) => {
  let content = '', oldContent=''
  $$all(trigger).forEach(item => {
    item.addEventListener(event, (event) => {
      oldContent = item.closest(elParent).querySelector(el).innerHTML
      content = item.closest(elParent).querySelector(el).innerHTML
      // Dollar sign ($) - https://codedamn.com/news/javascript/dollar-sign-in-js
      // backtick (`) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      item.closest(elParent).querySelector(el).innerHTML = `<input class="form-control" type="text" value="${content}">`
      Object.keys(inputAttrs).forEach(
        key => item.closest(elParent).querySelector('input').setAttribute(key, inputAttrs[key])
      )
      if (iftoggle) {
        item.closest(elParent).querySelectorAll(toggleEl).forEach(item => {
          item.classList.toggle(toggleClass)
        })
      }
    })
  })
  $$all(saveTrigger).forEach(item => {
    item.addEventListener(save_event, (event) => {
      content = item.closest(elParent).querySelector(el).querySelector('input').value
      if (!content.trim().length) {
        // 'content.trim().length' means words exsit after remove whitespace - https://www.w3schools.com/jsref/jsref_trim_string.asp
        // if content words (!)do not exsit
        if (ifTooltip) {
          item.setAttribute('title', '未輸入任何文字')
          const tooltip = new bootstrap.Tooltip(item)
          tooltip.show()
          item.closest(elParent).querySelector(el).querySelector('input').onfocus = () => {
            // console.log('click')
            tooltip.dispose()
            item.removeAttribute('title')
          }
        } else {
          alert('未輸入任何文字')
        }
      } else {
        item.closest(elParent).querySelector(el).innerHTML = content
        if (iftoggle) {
          item.closest(elParent).querySelectorAll(toggleEl).forEach(item => {
            item.classList.toggle(toggleClass)
          })
        }
      }
    })
  })
  $$all(resetTrigger).forEach(item => {
    item.addEventListener(reset_event, (event) => {
      item.closest(elParent).querySelector(el).innerHTML = oldContent
      if (iftoggle) {
        item.closest(elParent).querySelectorAll(toggleEl).forEach(item => {
          item.classList.toggle(toggleClass)
        })
      }
    })
  })
}

//------------- Bootstrap ------------------------------------------------//

// Trigger event to show modal
const eventShowModal = (eventEl, value, modal, ifPreventDefault) => {
  // var Modal = new bootstrap.Modal($$(modal), {
  //   keyboard: false
  // })
  $$all(eventEl).forEach(item => {
    if (item.tagName === 'SELECT') {
      item.addEventListener('change', (event) => {
        if (item.value == value) {
          var Modal = new bootstrap.Modal($$(modal))
          Modal.show()
          item.selectedIndex = '0' // Set the first option is selected to prevent click the same option not working
        }
      })
    }
    if (item.tagName === 'A' | item.tagName === 'BUTTON') {
      item.addEventListener('click', (event) => {
        var Modal = new bootstrap.Modal($$(modal))
        Modal.show()
        if (ifPreventDefault) {
          event.preventDefault()
        }
      })
    }
  })
}

const addModalTags = (modalInput, modalClone_el, hiddenClass, newCloneClass, modalClone_destination, modalTagsPlace, modalAddBtn, modalHint, modalConfirmBtn, final_destination, modalCloseBtn, childBtnEdit, tagsModal, ifBtnEditParentBg, btnEditParent, btnEditParentBgClass) => {
  // let clone = $$(modalClone_el).cloneNode(true) // Cannot be here, it will repeat the same one
  // clone.classList.remove(hiddenClass)
  // var allChildren
  $$all(modalAddBtn).forEach(item => {
    item.addEventListener('click', (event) => {
      let clone = $$(modalClone_el).cloneNode(true)
      clone.classList.remove(hiddenClass)
      clone.classList.add(newCloneClass)
      event.preventDefault()
      // let last = $$(modalClone_destination).lastElementChild
      if ($$(modalInput).value != '') {
        $$(modalClone_destination).appendChild(clone)
        // $$(modalClone_destination).insertBefore(clone, last.nextSibling)
        $$(modalClone_destination).lastElementChild.querySelector(modalTagsPlace).innerHTML = $$(modalInput).value
      } else {
        $$(modalHint).innerHTML = '提示：未輸入任何字元'
      }
      $$(modalInput).addEventListener('keyup', (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault()
          $$(modalAddBtn).click()
        }
      })
      $$(modalConfirmBtn).addEventListener('click', (event) => {
        $$(modalClone_destination).querySelectorAll(childBtnEdit).forEach((item) => {
          item.classList.remove(hiddenClass)
        })
        if (ifBtnEditParentBg) {
          $$(modalClone_destination).querySelectorAll(btnEditParent).forEach((item) => {
            item.classList.add(btnEditParentBgClass)
          })
        }
        let allChildren = $$(modalClone_destination).childNodes
        allChildren.forEach((item) => {
          let clone = item.cloneNode(true)
          $$(final_destination).appendChild(clone)
        })
        // $$(modalHint).innerHTML = '已新增標籤'
        $$(modalClone_destination).querySelectorAll(childBtnEdit).forEach((item) => {
          item.classList.add(hiddenClass)
        })
        $$(modalCloseBtn).click()
        // deleteChildren(modalClone_destination)
        $$(modalClone_destination).querySelectorAll('.' + newCloneClass).forEach(item => {
          item.remove()
        })
        $$(final_destination).querySelectorAll('.' + hiddenClass).forEach(item => {
          item.remove()
        })
        $$(modalInput).value = ''

        event.preventDefault() // https://www.w3schools.com/jsref/event_preventdefault.asp
      })
    })
  })
  // console.log($$(final_destination).classList)
  // if ($$(final_destination) != null) {
  //   $$(final_destination).querySelectorAll(childBtnEdit).forEach((item) => {
  //     item.addEventListener('click', (event) => {
  //       console.log('click')
  //       new bootstrap.Modal($$(tagsModal)).show()
  //       // console.log(item.parentElement.firstElementChild.innerHTML)
  //       if ($$(modalInput).value != '') {
  //         $$(modalInput).value = item.parentElement.firstElementChild.innerHTML
  //         $$(modalConfirmBtn).addEventListener('click', (event) => {
  //           item.parentElement.lastElementChild.click()
  //         })
  //       }
  //     })
  //   })
  // }

  // Not Working: $$(tagsModal).addEventListener('hidden.bs.modal', , (event) => {})
  $$all(tagsModal).forEach((item) => {
    item.addEventListener('hidden.bs.modal', (event) => {
      // console.log('close')
      $$(modalInput).value = ''
    })
  })
}

const btnToTabpane = (btn, attr, tab, media, offset) => {
  $$all(tab).forEach((tabItem, tabIndex) => {
    $$all(btn).forEach((item) => {
      item.addEventListener("click", (event) => {
        if (item.getAttribute(attr) == (tabIndex + 1)) {
          event.preventDefault // https://www.w3schools.com/jsref/event_preventdefault.asp
          tabItem.click()
          if (window.matchMedia(media).matches) { // https://www.w3schools.com/howto/howto_js_media_queries.asp
            console.log(tabItem.offsetTop)
            window.scrollTo({
              behavior: 'smooth',
              top: tabItem.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset,
              // https://amitd.co/code/javascript/scroll-into-view-with-offset
              // top: tabItem.offsetTop - offset, // https://www.w3schools.com/jsref/prop_element_offsettop.asp
            })
          } else {
            tabItem.scrollIntoView() // not perfect  https://www.w3schools.com/jsref/met_element_scrollintoview.asp
          }
        }
      })
    })
  })
}

const lastTab = (tabEl) => {
  // https://www.w3schools.com/jsref/prop_win_localstorage.asp vs. // https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
  var url = location.href
  var last = sessionStorage.getItem(url)
  $$all(tabEl).forEach((item, index) => {
    item.addEventListener("shown.bs.tab", (event) => {
      if (item == event.target) {
        // console.log(url)
        sessionStorage.setItem(url, index)
        last = sessionStorage.getItem(url)
      }
    })
    if (index == last) {
      new bootstrap.Tab(item).show()
      // item.click()
    }
  })
}

//Bootstrap load active tab from url [[for another page]]. Usage: page.html#tab3, 'tab3' is the id of tab
//https://www.w3schools.com/JSREF/prop_loc_hash.asp, https://www.w3schools.com/jsref/jsref_slice_string.asp
const urlToTab = () => {
  // var index = hash.slice(1) // Extract string from next '#' to the end
  if (location.hash) {
    // console.log(index)
    // $$(location.hash).click()
    new bootstrap.Tab($$(location.hash)).show()
  }
}

//------------- /Bootstrap ------------------------------------------------//

const dateToday = () => {
  new Date().toLocaleDateString() // Get a date as a string, using locale conventions
}

// Scroll Indicator - https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
// Scroll show active tab ,must be with css (.pageSteps .active in style.css)
const steps = (eventTarget, eventTargetAttr, activeClasses, media, offset) => {
  $$all(eventTarget).forEach(item => {
    item.onclick = () => {
      // event.preventDefault
      if (window.matchMedia(media).matches) { // https://www.w3schools.com/howto/howto_js_media_queries.asp
        window.scrollTo({ behavior: 'instant', top: $$(item.getAttribute(eventTargetAttr)).offsetTop })
        // https://kilianvalkhof.com/2022/css-html/preventing-smooth-scrolling-with-javascript/
      } else {
        // $$(item.getAttribute(eventTargetAttr)).scrollIntoView() // https://www.w3schools.com/jsref/met_element_scrollintoview.asp
        window.scrollTo({ behavior: 'instant', top: ($$(item.getAttribute(eventTargetAttr)).offsetTop + offset) })
      }
      $$all(eventTarget).forEach(item => {
        item.classList.remove(activeClasses)
      })
      item.classList.add(activeClasses)
    }
  })
  window.onscroll = () => {
    $$all(eventTarget).forEach((item, index, arr) => {
      if (window.scrollY >= $$(item.getAttribute(eventTargetAttr)).offsetTop) {
        $$all(eventTarget).forEach(item => {
          item.classList.remove(activeClasses)
        })
        item.classList.add(activeClasses)
      }
      // if scroll to bottom - https://techstacker.com/javascript-detect-when-scrolled-to-bottom/
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && index == (arr.length - 1)) {
        $$all(eventTarget).forEach(item => {
          item.classList.remove(activeClasses)
        })
        item.classList.add(activeClasses)
      }
    })
  }
}

// https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
const scrollProgress = (bar, attr, heightTarget) => {
  window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop
    // let height = $$(heightTarget).scrollHeight - document.documentElement.clientHeight
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    // console.log(window.scrollY, $$(heightTarget).offsetTop)
    $$all(bar).forEach(item => {
      item.style.width = parseInt((winScroll / height) * 100) + "%"
      item.setAttribute(attr, parseInt((winScroll / height) * 100))
      // if (window.scrollY >= $$(heightTarget).offsetTop) {
      //   item.style.width = parseInt((winScroll / height)*100) + "%"
      //   item.setAttribute(attr, parseInt((winScroll / height)*100))
      // } else {
      //   item.removeAttribute('style')
      //   item.setAttribute(attr, '0')
      // }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        item.style.width = "100%"
        item.setAttribute(attr, '100')
      }
    })
  }
}

const scrolltoBsTabpane = (el, event_el, parent, target, attrTarget) => {
  $$all(el).forEach(item => {
    const tabTrigger = new bootstrap.Tab(item)
    item.addEventListener(event_el, (event) => {
      tabTrigger.show()
      // only trigger by tab with class 'nav': <xx class="nav ..."></xx>
    })
    item.addEventListener('shown.bs.tab', event => {
      let id = item.closest(parent).querySelector(target).getAttribute(attrTarget)
      // console.log(id)
      $$(id).scrollIntoView(true)
    })
  })
}

const removeSelf = (triggerEl, triggerEvent, parent) => {
  if ($$(triggerEl)) {
    $$all(triggerEl).forEach((i) => {
      i.addEventListener(triggerEvent, (event) => {
        event.preventDefault()
        i.closest(parent).remove()
      })
    })
  }
}

const closeWindow = (triggerEl, triggerEvent) => {
  if ($$(triggerEl)) {
    $$all(triggerEl).forEach((i) => {
      i.addEventListener(triggerEvent, (event) => {
        // event.preventDefault()
        window.open('', '_self').close()
      })
    })
  }
}

// only in this year, just year see: https://www.tutorialspoint.com/How-to-use-year-input-type-in-HTML
const inputDateThisYear = (el) => {
  let year = new Date().getFullYear();
  $$all(el).forEach((i) => {
    i.setAttribute("min", year + "-01-01");
    i.setAttribute("max", year + "-12-31");
  })
}

// --------------------------- bootstrap ---------------------------
const bsToast = (triggerEl, triggerEvent, toast) => {
  if ($$(triggerEl)) {
    $$all(triggerEl).forEach((i) => {
      i.addEventListener(triggerEvent, () => {
        $$all(toast).forEach(t => {
          new bootstrap.Toast(t).show()
        })
      })
    })
  }
}

const bsTooltip = (e) => {
  // $$all('[data-bs-toggle="tooltip"]').forEach((i) => {
  //   new bootstrap.Tooltip(i)
  // })
  const tooltips = $$all(e)
  const tooltipList = [...tooltips].map(i => new bootstrap.Tooltip(i))
}

//------------- End ES5/6 -------------//
//--------------------------------------------------------------------------------------------------------------------------//

const init = () => {
  // if (onePresent(".text_size")) {
  //   fontResize("text-m", "text-l", "text_size", "text_size-s", "text_size-m", "text_size-l", "active")
  // }
  // if (onePresent("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty")) {
  //   removeAll("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty")
  // }

  // increaseFontSize(el, btns, activeClass, plus, minu, reset, increase, fontSize)
  increaseFontSize('html', '.btnFontsize', 'active', 'button.btnPlus', 'button.btnMinus', 'button.btnReset', 0.1, 18)

  // thisYear(el)
  thisYear('.thisYear')

  // eventMaxViewHeight(event_el, event, height_el)
  // eventMaxViewHeight('.mainmenu li>a', 'mouseover', '.mainmenu .uk-dropdown')
  eventMaxViewHeight('.mainmenu li>a', 'mouseover', '.mainmenu .dropdown-menu')

  // minViewHeight(el, top_el, top2_el, btm_el)
  minViewHeight('main', 'header', '', 'footer')

  // setSameHeight(el, trigger, event, media, ifBSTab)
  setSameHeight('.index:not(.sub) .tab-content .card-body', '.index:not(.sub) .tabSwitcher button', 'click', '(min-width: 768px)', true)

  // eventToggle(eventTarget, event, attr, el, elParent, findChildren, toggleClassArray, checkedToggleClassByValue, valueToggleClassByAttr, checkedToggleClassByAttr, uncheckHideAll, uncheckHideAllAttr, toggleClassByChecked, toggleClassByCheckedEl, checkedToggleInputType, checkedToggleInputTypeEl, toggleClassByValue)
  eventToggle('.toggleBtn', 'click', '', '.toggle', 'tr', false, ['tw-hidden'])
  eventToggle('.toggleParent', 'click', '', '.toggle', 'toggleParent', true, ['tw-hidden'])

  eventToggle('.selectShow select', 'change', 'data-val', '.toggle', '.selectShow', false, ['d-none'], false, true)
  eventToggle('.listCheck', 'click', 'data-target', '.checkShow', '.stepsContent', false, ['d-none'], false, false, true, false, 'data-unchecked')

  eventToggle('.togglePwd', 'click', '', '.toggle', '.row', true, ['tw-hidden'], false, false, false, false, '', false, '', true, 'input.password')

  eventToggle('.register .checkToggle', 'click', 'data-target', '.toggle', '.row', false, ['d-none'], false, false, true, false, '', false, '', false, '')


  // eventToggleClasses(eventTarget, event, selfToggleClassArray, accordionEl, eventTargetParent, parentToggleClassArray, inactiveParentSiblings, inactiveParentSiblingsChildern, toggleChild, childToggleClassArray, ifClosestChild, triggerClick)
  eventToggleClasses('#offcanvas li>div>a.arrow', 'click', '', '', 'li.parent', ['open'], '#offcanvas .offcanvas-body>div>ul>li.parent:not(.open)', 'div>a.arrow', '.toggle', ['tw-hidden']) // bs-offcanvas opeing in turn
  // eventToggleClasses('.listMenu>ul>li>div>div a.arrow', 'click', '', '', 'li.list-group-item', ['open'], '.listMenu>ul>li.list-group-item:not(.open)', 'div:first-child>div a.arrow', '.toggle', ['tw-hidden']) // bs listMenu opeing in turn
  eventToggleClasses('.list_titlelink>ul>li>div>a:nth-child(2)', 'click', '', '', 'li.list-group-item', ['open'], '.list_titlelink>ul>li.list-group-item:not(.open)', 'div>a:nth-child(2)', '.toggle', ['tw-hidden']) // bs list_titlelink opeing in turn
  eventToggleClasses('.listMenu>ul>li>div>div a.arrow', 'click', '', '', 'li.list-group-item', ['open'], '', '', '.toggle', ['tw-hidden']) // bs listMenu opeing one by one
  eventToggleClasses('.listMenu .listMore a', 'click', '', '', 'ul', [], '', '', '.listMore', ['tw-hidden']) // bs listMenu listMore
  eventToggleClasses('.likeBtn', 'click', '', '', '.likeBtn', [], '', '', '.likeBtnToggle', ['tw-hidden']) // toggle like
  eventToggleClasses('.page .rateBtn', 'click', '', '', '.page .rate .col-auto', [], '', '', '.toggle', ['tw-hidden']) // toggle rate
  eventToggleClasses('.page .listMore>.btn', 'click', '', '', '.page .list-group', [], '', '', '.listMore.toggle', ['tw-hidden']) // list more
  // eventToggleClasses('.listForm .arrow', 'click', '', '', 'li.parent', ['open'], '.listForm li.parent:not(.open)', 'div a.arrow', '.toggle', ['tw-hidden'], true, '.parent>div>.form-check-label>input') // bs listMenu double trigger opeing one by one
  eventToggleClasses('.listForm .arrow', 'click', '', '', 'li.parent', ['open'], '.listForm li.parent:not(.open)', 'div a.arrow', '.toggle', ['tw-hidden'], true, '') // bs listMenu opeing one by one

  // eventShowModal(eventEl, value, modal)
  eventShowModal('select.optionSelect', '儲存', '#save.modal')
  eventShowModal('select.optionSelect', 'E-Mail', '#email.modal')
  eventShowModal('select.optionSelect', '列印', '#print.modal')
  eventShowModal('select.optionSelect', '新增標籤', '#tagsModal.modal')
  eventShowModal('.renameBtn', '', '#rename.modal')

  // addModalTags(modalInput, modalClone_el, hiddenClass, newCloneClas, modalClone_destination, modalTagsPlace, modalAddBtn, modalHint, modalConfirmBtn, final_destination, modalCloseBtn, childBtnEdit, tagsModal, ifBtnEditParentBg, btnEditParent, btnEditParentBgClass)
  addModalTags('.page.like #tagsModal.modal input#tags', '.page.like #tagsModal.modal .tags>.row>div', 'tw-hidden', 'new', '.page.like #tagsModal.modal .tags>.row', '.page.like #tagsModal.modal .alert>small', '.page.like #tagsModal.modal #addBtn', '.page.like #tagsModal.modal .modal-body>.row>div:first-child small', '.page.like #tagsModal.modal .modal-footer>a', '.page.like .tags>.row', '.page.like #tagsModal.modal .modal-footer>button', '.btn', '.page.like #tagsModal.modal', true, '.page.like #tagsModal.modal .alert', 'bg-white')
  addModalTags('.page #tagsModal.modal input#tags', '.page #tagsModal.modal .tags>.row>div', 'tw-hidden', 'new', '.page #tagsModal.modal .tags>.row', '.page #tagsModal.modal .alert>small', '.page #tagsModal.modal #addBtn', '.page #tagsModal.modal .modal-body>.row>div:first-child small', '.page #tagsModal.modal .modal-footer>a', '.page .list-group .tags.row', '.page #tagsModal.modal .modal-footer>button')

  // copyIputText(event_el, event, input, parent, ifBootstrap, info)
  copyIputText('.page .list-group #copyHref', 'click', '.page .list-group input#href', '.list-group', true, '已複製連結')
  copyIputText('.page .modal #copyHref', 'click', '.page .modal input#href', '.modal', true, '已複製連結')

  // eventSetFormText(event_el, event, form_el, txtParent)
  eventSetFormText('.page #commentBtn', 'click', '.page textarea#commentTxt', '.page ul.comment')

  // gotoTop(el, addClassName, removeClassName, scollDownPX, scrollTopPX)
  gotoTop("#gototop", "tw-opacity-100", "tw-opacity-0", "50", "0")

  //------------- For AA ------------------------------------------------//
  // setTabIndex(tabSwitcherParent, tabParent, tab, lastTab, switcher, page, target, beginningIndex, ignore, ifsub, subTabSwitcher, subTab, subSwitcher)
  // setTabIndex('.steps', '.steps>div>ul.nav', '.steps>div>ul.nav button', 'li:last-child>button', '.page .stepsContent>.step', '.page', 'a, button, input, select, textarea', 1)
  // setTabIndex('.steps', '.steps>div>ul.nav', '.steps>div>ul.nav button', 'li:last-child>button', '.page .stepsContent>.step', '.page', 'a, button, input, select, textarea', 1, '', true, '.listFormMenu', '.nav>button.nav-link', '.pageSteps .tab-content>.tab-pane')
  // setTabIndex('.listFormMenu', '.listFormMenu .nav', '.nav>button.nav-link', 'button.nav-link:last-child', '.pageSteps .tab-content>.tab-pane', '.pageSteps', 'a, button, input, select, textarea', 1, '.steps>div:first-child button.nav-link')

  // set tabindex for bs tab-switcher
  // if ($$('.tabSwitcher')) {
  //   $$all('.tabSwitcher').forEach(i => {
  //     i.addEventListener('shown.bs.tab', (event) => {
  //       event.preventDefault()
  //       // event.target // newly activated tab
  //       // event.relatedTarget // previous active tab
  
  //       // tabIndex(tabSwitcherParent, tab, switcher, page, target, beginningIndex, ignore, ifsub, subTabSwitcher, subTab, subSwitcher)
  //       tabIndex('.tabSwitcher', 'ul.nav button', '.tab-content>.tab-pane', '.index, .page', 'a, button, input, select, textarea', 1, '') // tabRadio is not working on tabindex for aa
  //     })
  //     // click to set tabindex replace default value (tabindex='-1') of bs hidden tab, and back to active first tab
  //     i.firstElementChild.lastElementChild.querySelector('.nav-link').click()
  //     i.firstElementChild.firstElementChild.querySelector('.nav-link').click()
  //     // document.querySelector('#first').focus()
  //   })
  // }

  // enterToClick('.listMenu a.listMore', '.listMenu', '.listMenu a.listMore')
  // enterToUrl('#slideshow .uk-dotnav a', ['_blank'])

  // attrPlayAudio(el, eventNames, attr)
  attrPlayAudio('.btnPlayAudio', 'click focus', 'playaudio')

  // setAttrs(el, attrs, ifNoOverride)
  setAttrs("[class*=fa-], [class*=bi]", { "aria-hidden": "true" }) // all icons For AA
  // setAttrs("a:not([role='submit'])", { "role": "button" }) // For AA
  // setAttrs(".text_size>button", { "role": "button" }) // For AA
  // setAttrs('[target="_blank"]', { "title": "[另開新視窗]" }, true) // For AA

  // setAttrs('.uk-accordion>li>a', { 'title': '展開' })
  // setAttrs('.uk-accordion>li.uk-open>a', { 'title': '縮起' })
  // eventToggleAttr('.uk-accordion>li>a', 'click', '', 'title', '展開', '縮起')

  // eventToggleAttr('a.sort', 'click', '.icon', 'hidden', '', '')
  // eventToggleAttr('#select>select', 'click', '.icon', 'hidden', '', '')

  //------------- /For AA ------------------------------------------------//

  //------------- Form ------------------------------------------------//

  $$all('#btnAdd').forEach(item => {
    item.addEventListener('click', cloneToggleClass)
  })
  // cloneToggleClass(false, 'click', '#btnAdd', '.searchInput', '.searchInput .searchBox', '.searchInput>div', 4, '.btnRemove, .toggleSelect', 'tw-hidden', '.btnRemove', '.searchBox input', '')

  // toggleCheckAll(checkAll, checkAllEvent, toggleCheckClass, inputCheck, inputCheckParent, ifAddClass)
  // toggleCheckAll('.checkAll', 'click', 'checked', '.listCheck', 'li', true)
  toggleCheckAll('.tablePage .checkAll', 'change', 'checked', '.tablePage .listCheck', '', '')

  // toggleCheckAllSum(checkAllEl, checkAllEvent, toggleCheckClass, inputCheck, inputCheckEvent, inputCheckParent, ifAddClass, resetButton, resetButtonEvent, ifResetType, textSum, countAttr)
  // toggleCheckAllSum('.searchList .pagination .checkAll', 'click', 'checked', '.searchList .searchResult .listCheck', 'change', '.searchList .searchResult li', true, '.searchList .uncheckAll', 'click', false, '.searchList .pagination .checkedSum')
  // toggleCheckAllSum('.checkAll', 'click', 'checked', '.listCheck', 'change', 'li', true, '.uncheckAll', 'click', false, '.checkedSum')
  // toggleCheckAllSum('', 'click', 'checked', '.recommend2 input.btn-check', 'change', '.recommend2 .card', false, '', 'click', false, '.recommend2 .checksum', 'data-count')

  selectToUrl('#f-item', '_self') // or: <select onchange="window.document.location.href=this.options[this.selectedIndex].value;">

  //------------- /Form ------------------------------------------------//

  //Bootstrap load active tab from url [[for another page]]. Usage: page.html?#tab3
  // urlToTab()

  // lastTab(tabEl, page) for tabRadio, must removed as active tabIndex() for multiple tab-switcher
  // lastTab('[data-bs-toggle="tab"]')
  // lastTab('[data-bs-toggle="pill"]')

  // btnToTabpane(btn, attr, tab, media, offset)
  btnToTabpane('.steps .btnStep', 'data-tab', '.steps .nav .nav-link', '(max-width: 991px)', 59)

  // cloneElement(clone_el, clone_destination, childInput, blockBtnAdd, btnRemove, hiddenClass, ifcloneMax, cloneMaxNumber)
  $$all('.clone .btnAdd').forEach(item => {
    // console.log('clicked')
    item.addEventListener('click', () => {
      cloneElement('.clone .alert', '.clone', '.clone .alert input', '.clone .blockBtnAdd', '.clone .btn-close', 'd-none', true, 5)
    })
  })

  // stepsEventChecked(eventTarget, event, eventTargetParent, elCheck, elCheckAttr, el, elParent, hiddenClass, uncheckHideAll, uncheckHideAllAttr)
  stepsEventChecked('.btnConfirm', 'click', '.checkShow', '.checkShow [type="checkbox"]', 'data-val', '.item', '.step', ['d-none'], true, 'data-unchecked')

  // steps(eventTarget, eventTargetAttr, activeClasses, media, offset), must be with css (.pageSteps .active in style.css)
  steps('.steps .nav .nav-item button.nav-link', 'data-target', 'active', '(max-width: 991px)', 210)

  // scrollProgress = (bar, attr, heightTarget)
  scrollProgress('.steps .progress-bar', 'aria-valuenow')

  // removeSelf(triggerEl, triggerEvent, parent)
  removeSelf('button.removeSelf', 'click', 'tr')

  // bsToast(triggerEl, triggerEvent, toast)
  bsToast('.hint.btn', 'mouseover', '.toast')

  // bsTooltip(e)
  bsTooltip('.xxx [data-bs-toggle="tooltip"]')

  // eventEditInput(trigger, event, el, elParent, inputAttrs, iftoggle, toggleEl, toggleClass, saveTrigger, save_event, resetTrigger, reset_event, ifTooltip, tooltipTxt)
  eventEditInput('.tools .edit .rename', 'click', '.name', '.edit', '', true, '.toggle', 'd-none', '.tools .edit .save', 'click', '.tools .edit .cancel', 'click', true)


  // bs modal
  if (window.matchMedia("(max-width: 575px)").matches) {
    // eventShowModal = (eventEl, value, modal, ifPreventDefault)
    eventShowModal('.listFormMenu .tabs .nav.nav-pills button', '', '.tab-content.modal')
  }
  
  // scrolltoBsTabpane(el, event_el, parent, target, attrTarget)
  scrolltoBsTabpane('.tools .edit .nav-link', 'click', '.edit', '.nav-link', 'data-bs-target')

  // closeWindow = (triggerEl, triggerEvent)
  closeWindow('.closeWindow', 'click')

  // inputDateThisYear(el)
  inputDateThisYear('input.date')
  
  //------------- Uikit ------------------------------------------------//
  // uikitSvg(".logoimg>[uk-svg]")

  // slideShowFocus('#slideshow', '#slideshow .uk-dotnav a')

  //Uikit 3 load active tab (or with switcher) from url [[for another page]]. Usage: page.html?class=el:switcher#3
  // urlToUkTab()
  //------------- /Uikit ------------------------------------------------//
}
init()

// swiper & splide
document.addEventListener('DOMContentLoaded', function () {
  var mutlipleSwiper = true
  if (onePresent('.coverflow.swiper')) {
    var coverflow = new Swiper("'.coverflow .swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      // slidesPerView: "auto",
      // spaceBetween: -30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true
      },
      navigation: {
        nextEl: '.coverflow-next',
        prevEl: '.coverflow-prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: -10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: -20,
        },
        992: {
          slidesPerView: 4,
          // spaceBetween: -20,
        },
        1200: {
          slidesPerView: 5,
          // spaceBetween: -20,
        },
      }
    })
  }
  if (onePresent('.oneSlideDotNav')) {
    var oneSlideDotNav = new Swiper(".oneSlideDotNav .swiper", {
      lazy: true,
      rewind: true,
      effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: ".swiper-pagination",
        // type: "progressbar",
        clickable: true
      },
      navigation: {
        nextEl: ".oneSlideDotNav-next",
        prevEl: ".oneSlideDotNav-prev"
      },
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      //   hide: true
      // },
    })
  }
  if (onePresent('.oneSlide')) {
    var oneSlide = new Swiper(".oneSlide .swiper", {
      lazy: true,
      rewind: true,
      effect: "fade",
      // slidesPerView: 3,
      // spaceBetween: 30,
      // slidesPerGroup: 3,
      // loop: true,
      // loopFillGroupWithBlank: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "progressbar",
      //   clickable: true
      // },
      navigation: {
        nextEl: ".oneSlide-next",
        prevEl: ".oneSlide-prev"
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true
      },
      breakpoints: {
      }
    })
  }
  if (onePresent('.groupSlide')) {
    var groupSlide = new Swiper(".groupSlide .swiper", {
      lazy: true,
      rewind: true,
      // slidesPerView: 2,
      // spaceBetween: 20,
      // slidesPerGroup: 2,
      // loop: true,
      // loopFillGroupWithBlank: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true
      // },
      // pagination: {
      //   el: ".swiper-pagination",
      //   // type: "progressbar",
      //   clickable: true
      // },
      navigation: {
        nextEl: ".groupSlide-next",
        prevEl: ".groupSlide-prev"
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          // spaceBetween: 20,
          slidesPerGroup: 2
        },
        // 768: {
        //   slidesPerView: 3,
        //   spaceBetween: 30,
        //   slidesPerGroup: 3
        // },
        992: {
          slidesPerView: 4,
          // spaceBetween: 40,
          slidesPerGroup: 4
        },
      }
    })
  }
  if (onePresent('.gridSlide')) {
    var gridSlide = new Swiper(".gridSlide .swiper", {
      rewind: true,
      // slidesPerView: "auto",
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 10,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true
      // },
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "progressbar",
      // },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      navigation: {
        nextEl: ".grid-next",
        prevEl: ".grid-prev"
      },
      breakpoints: {
        576: {
          spaceBetween: 20,
        },
        // 768: {
        //   spaceBetween: 30,
        // },
        992: {
          slidesPerView: 4,
        },
      }
    })
    var h = $$('.gridSlide').querySelector('.swiper-slide').offsetHeight
    if (window.matchMedia("(min-width: 576px)").matches) {
      $$('.gridSlide').querySelector('.swiper').style.height = (h*2 + 20) + 'px'
    } else {
      $$('.gridSlide').querySelector('.swiper').style.height = (h*2 + 10) + 'px'
    }
  }


  // https://www.cssscript.com/animated-tag-cloud-generator-tagscloud/
  if (onePresent('.index #tagscloud')) {
    var radius = 90
    var d = 200
    var dtr = Math.PI / 180
    var mcList = []
    var lasta = 1
    var lastb = 1
    var distr = true
    var tspeed = 6
    var size = 200
    var mouseX = 0
    var mouseY = 10
    var howElliptical = 1
    var aA = null
    var oDiv = null

    if (window.matchMedia("(min-width: 992px)").matches) {
      window.onload = function () {
        var i = 0
        var oTag = null
        oDiv = document.getElementById('tagscloud')
        aA = oDiv.getElementsByTagName('a')
        for (i = 0;i < aA.length;i++) {
          oTag = {}
          aA[i].onmouseover = (function (obj) {
            return function () {
              obj.on = true
              this.style.zIndex = 9999
              // this.style.color = '#fff'
              // this.style.padding = '5px 5px'
              this.style.filter = "alpha(opacity=100)"
              this.style.opacity = 1
            }
          })(oTag)
          aA[i].onmouseout = (function (obj) {
            return function () {
              obj.on = false
              this.style.zIndex = obj.zIndex
              // this.style.color = '#C15254'
              // this.style.padding = '5px'
              this.style.filter = "alpha(opacity=" + 100 * obj.alpha + ")"
              this.style.opacity = obj.alpha
              this.style.zIndex = obj.zIndex
            }
          })(oTag)
          oTag.offsetWidth = aA[i].offsetWidth
          oTag.offsetHeight = aA[i].offsetHeight
          mcList.push(oTag)
        }
        sineCosine(0, 0, 0)
        positionAll();
        (function () {
          update()
          setTimeout(arguments.callee, 40)
        })()
      }
    }
    function update() {
      var a, b, c = 0
      a = (Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed
      b = (-Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed
      lasta = a
      lastb = b
      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
        return
      }
      sineCosine(a, b, c)
      for (var i = 0;i < mcList.length;i++) {
        if (mcList[i].on) {
          continue
        }
        var rx1 = mcList[i].cx
        var ry1 = mcList[i].cy * ca + mcList[i].cz * (-sa)
        var rz1 = mcList[i].cy * sa + mcList[i].cz * ca

        var rx2 = rx1 * cb + rz1 * sb
        var ry2 = ry1
        var rz2 = rx1 * (-sb) + rz1 * cb

        var rx3 = rx2 * cc + ry2 * (-sc)
        var ry3 = rx2 * sc + ry2 * cc
        var rz3 = rz2

        mcList[i].cx = rx3
        mcList[i].cy = ry3
        mcList[i].cz = rz3

        per = d / (d + rz3)

        mcList[i].x = (howElliptical * rx3 * per) - (howElliptical * 2)
        mcList[i].y = ry3 * per
        mcList[i].scale = per
        var alpha = per
        alpha = (alpha - 0.6) * (10 / 6)
        mcList[i].alpha = alpha * alpha * alpha - 0.2
        mcList[i].zIndex = Math.ceil(100 - Math.floor(mcList[i].cz))
      }
      doPosition()
    }
    function positionAll() {
      var phi = 0
      var theta = 0
      var max = mcList.length
      for (var i = 0;i < max;i++) {
        if (distr) {
          phi = Math.acos(-1 + (2 * (i + 1) - 1) / max)
          theta = Math.sqrt(max * Math.PI) * phi
        } else {
          phi = Math.random() * (Math.PI)
          theta = Math.random() * (2 * Math.PI)
        }
        //坐标变换
        mcList[i].cx = radius * Math.cos(theta) * Math.sin(phi)
        mcList[i].cy = radius * Math.sin(theta) * Math.sin(phi)
        mcList[i].cz = radius * Math.cos(phi)

        aA[i].style.left = mcList[i].cx + oDiv.offsetWidth / 2 - mcList[i].offsetWidth / 2 + 'px'
        aA[i].style.top = mcList[i].cy + oDiv.offsetHeight / 2 - mcList[i].offsetHeight / 2 + 'px'
      }
    }
    function doPosition() {
      var l = oDiv.offsetWidth / 2
      var t = oDiv.offsetHeight / 2
      for (var i = 0;i < mcList.length;i++) {
        if (mcList[i].on) {
          continue
        }
        var aAs = aA[i].style
        if (mcList[i].alpha > 0.1) {
          if (aAs.display != '')
            aAs.display = ''
        } else {
          if (aAs.display != 'none')
            aAs.display = 'none'
          continue
        }
        aAs.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px'
        aAs.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px'

        // Shen Yang - 2023/2/24
        if ( mcList[i].cx + l - mcList[i].offsetWidth / 2 < 20) {
          aAs.left = 20 + 'px'
        }
        if ( aA.offsetWidth >= (oDiv.offsetWidth - 60) ) {
          aAfontS = window.getComputedStyle(aA).getPropertyValue('font-size')
          aAs.style.fontSize = parseInt(aAfontS) - 5 + 'px'
        }

        //aAs.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';
        //aAs.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+100*mcList[i].alpha+")";
        aAs.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")"
        aAs.zIndex = mcList[i].zIndex
        aAs.opacity = mcList[i].alpha
      }
    }
    function sineCosine(a, b, c) {
      sa = Math.sin(a * dtr)
      ca = Math.cos(a * dtr)
      sb = Math.sin(b * dtr)
      cb = Math.cos(b * dtr)
      sc = Math.sin(c * dtr)
      cc = Math.cos(c * dtr)
    }
  }

  if (onePresent('.index .amcharts')) {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("wordcloud")


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ])


    // Add wrapper container
    var container = root.container.children.push(am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout
    }))


    // Add chart title
    // var title = container.children.push(am5.Label.new(root, {
    //   text: "Most popular languages on StackOverflow",
    //   fontSize: 20,
    //   x: am5.percent(50),
    //   centerX: am5.percent(50)
    // }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/word-cloud/
    var series = container.children.push(am5wc.WordCloud.new(root, {
      randomness: 0,
      rotation: 0,
      categoryField: "tag",
      valueField: "weight",
      calculateAggregates: true // this is needed for heat rules to work
    }))


    // Set up heat rules
    // https://www.amcharts.com/docs/v5/charts/word-cloud/#Via_heat_rules
    series.set("heatRules", [{
      target: series.labels.template,
      dataField: "value",
      min: am5.color(0xFFD4C2),
      max: am5.color(0xFF621F),
      key: "fill"
    }])


    // Configure labels
    series.labels.template.setAll(
      "tooltipText", "{category}: [bold]{value}[/]",
      {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        fontFamily: "Courier New",
        cursorOverStyle: "pointer"
      })

    // Set tooltip
    // series.labels.template.set("tooltipText", "{category}: [bold]{value}[/]");
    series.labels.template.set("tooltipText", "{category}")

    // Add click event on words
    // https://www.amcharts.com/docs/v5/charts/word-cloud/#Events
    series.labels.template.events.on("click", function (ev) {
      var category = ev.target.dataItem.get("category")
      window.open("https://stackoverflow.com/questions/tagged/" + encodeURIComponent(category))
    })


    // Data from:
    // https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
    series.data.setAll([
      { tag: "測試", weight: 60 },
      { tag: "HTML/CSS", weight: 50 },
      { tag: "Python", weight: 40 },
      { tag: "SQL", weight: 30 },
      { tag: "Java", weight: 20 },
      { tag: "Node.js", weight: 10 },
      { tag: "TypeScript", weight: 8 },
      { tag: "C#", weight: 6 },
      { tag: "Bash/Shell", weight: 4 },
      { tag: "C++", weight: 2 },
    ])
  }

  if (onePresent('.index .splide')) {
    var progress = true
    var grid = true
    if (grid) {
      var splide = new Splide('.splide', {
        autoplay: true,
        rewind: true, // does not work in the loop mode
        // type: 'loop',
        // autoScroll: {
        //   speed: 2,
        // },
        pagination: false,
        // perPage: 3,
        // perMove: 3, // perMove must 1(be one by one) if perPage greater than 1, otherwise will lose the last splide
        // gap: 50,
        // fixedWidth: 'calc(100%/3 - 1rem*2/3)',
        grid: {
          rows: 2,
          cols: 3,
          gap: {
            row: '30px',
            col: '30px',
          },
        },
        breakpoints: {
          576: {
            grid: {
              cols: 1,
            },
            // fixedWidth: '100%',
          },
        },
      })
    } else {
      var splide = new Splide('.index .splide', {
        // autoplay: true,
        rewind: true, // does not work in the loop mode
        // type: 'loop',
        // autoScroll: {
        //   speed: 2,
        // },
        pagination: true,
        // perPage: 3,
        // perMove: 3, // perMove must 1(be one by one) if perPage greater than 1, otherwise will lose the last splide
        gap: 50,
        fixedWidth: '100%',
        heightRatio: 0.41666,
        // breakpoints: {
        //   1200: { // 'under' 1200px
        //     gap: 30,
        //     fixedWidth: 'calc(100%/3 - 30px*2/3)',
        //   },
        //   768: {
        //     perPage: 2,
        //     // perMove: 2,
        //     gap: 10,
        //     fixedWidth: 'calc(100%/2 - 10px/2)',
        //     interval: 7000,
        //   },
        //   576: {
        //     perPage: 1,
        //     // perMove: 2,
        //     // gap: 10,
        //     fixedWidth: '100%',
        //   },
        // },
      })
      splide.on('mounted', function () {
        // https://github.com/Splidejs/splide/issues/256
        // if fewer slides than provided in options, set option to the number of slides
        if (splide.length < splide.options.perPage) {
          splide.options.perPage = splide.length
        }
      })
    }
    splide.on('mounted move', function () {
      if (progress) {
        var bar = splide.root.querySelector('.slider-progress-bar')
        var end = splide.Components.Controller.getEnd() + 1
        bar.style.width = String(100 * (splide.index + 1) / end) + '%'
      }
    })
    splide.mount(window.splide.Extensions)
  }
})

// Js media queries example - https://www.w3schools.com/howto/howto_js_media_queries.asp

//Set the "alt" attribute to all icons for AA
// setAttrs('[class*=fa-]', {'title':''})

//Slideshow adjusts the height to fit the view height, working with CSS: #slideshow .uk-slideshow-items {min-height: auto !important;}
// if (allExist("#slideshow .uk-slideshow-items, header, .bg_bar") == true) {
//   viewHeightMiddle("#slideshow .uk-slideshow-items", "header", ".bg_bar")
//   window.onresize = function() {
//     viewHeightMiddle("#slideshow .uk-slideshow-items", "header", ".bg_bar")
//   }
// }

//Active LeftMenu opening with the 'uk-open' class
// if (allExist('.list_tabs .uk-open')) {
//   toggleAllClass(findAll('.list_tabs .uk-open .toggle'), 'hidden')
// }


// if (allExist(".logo_cht, logo_eng") == true) {
//   var fitText = require("FitText-UMD");
//   // fitText = window.fitText
//   window.fitText = fitText
//   // fitText( document.getElementById("responsive_headline") );
//   fitText(document.querySelector(".logo_cht"), 2.2, {
//     minFontSize: '10px',
//     maxFontSize: '20px'
//   });
//   fitText(document.querySelector(".logo_eng"), 3, {
//     minFontSize: '7px',
//     maxFontSize: '16px'
//   });
// }

// if (allExist("#slideshow .uk-slideshow-items, header, .bg_bar") == true) {
//   window.viewHeightMiddle("#slideshow .uk-slideshow-items", "header", ".bg_bar")
//   window.onload = function() {
//     viewHeightMiddle("#slideshow .uk-slideshow-items", "header", ".bg_bar")
//   }
//   window.onresize = function() {
//     viewHeightMiddle("#slideshow .uk-slideshow-items", "header", ".bg_bar")
//   }
// }


//"DOMContentLoaded" signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired, therefore the error is avoided
//In the external case as below, doesn't need to use the "DOMContentLoaded" event because the "defer" attribute solved the problem
//<script src="script.js" defer></script>
document.addEventListener("DOMContentLoaded", function () {

})

//uk-slideshow height, working with CSS {min-height: auto !important}
window.onload = function () {
  // viewHeightMiddle('#slideshow .uk-slideshow-items', 'header', '.bg_bar')
  // if (allExist(['.bg_menu', '.bg_menu~section:nth-of-type(1)', '.bg_menu~section:nth-of-type(2)']) == true) {
  //   sameHeight('.bg_menu', '.bg_menu~section:nth-of-type(1)', '.bg_menu~section:nth-of-type(2)')
  // }
  // if (oneExist('.editor table')) {
  //   tableWidth('.editor table')
  // }

  // if (allExist('.list_tabs .uk-open') == true) {
  //   toggleAllClass(findAll('.list_tabs .uk-open .toggle'), 'hidden')
  // }
}
window.onresize = function () {
  // viewHeightMiddle('#slideshow .uk-slideshow-items', 'header', '.bg_bar')
  // if (allExist(['.bg_menu', '.bg_menu~section:nth-of-type(1)', '.bg_menu~section:nth-of-type(2)']) == true) {
  //   sameHeight('.bg_menu', '.bg_menu~section:nth-of-type(1)', '.bg_menu~section:nth-of-type(2)')
  // }
}

//--------------- end pure js ----------------------------------------------------------//