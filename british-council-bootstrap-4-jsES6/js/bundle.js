const dataController=function(){const e={pass:!0,rootStrings:{},allItemsArr:[],allAnsweredArr:[],rightAnswersArr:["a foe","a robot","an algorithm","artificial intelligence (AI)","autonomous","a drone"],allStartedArr:["a robot","a drone","autonomous","a foe","an algorithm","artificial intelligence (AI)"],quizAnswers:[{answer:"Which expert has a different view from the others regarding the timescale of AI becoming much more autonomous?"},{answer:"Which expert has a similar view to A about the responsibility humans have for the future of AI?"},{answer:"Which expert agrees with B that the negative aspects of AI far outweigh the positive aspects?"},{answer:"Which expert seems to disagree with B about how fast humans can change?"},{answer:"Which expert gives their opinion about what will happen with the same level of certainty as D?"}]},t=function(e){let t=e.split("-");return t=t[1]};return{setValues:function(t,n){e.rootStrings.itemID=t,e.rootStrings.itemText=n},resetValues:function(){e.rootStrings.itemID="",e.rootStrings.itemText=""},getSetValues:function(){return e.rootStrings},addItem:function(n){if(n){const s=t(n);e.allItemsArr.push(s)}},removeItem:function(n){if(n){const s=t(n),r=e.allItemsArr.findIndex(e=>e===s);e.allItemsArr.splice(r,1)}},updateRemainLabel:function(){const t=document.querySelector(".js-label"),n=document.querySelector(".btn--finish");t.textContent=6-e.allItemsArr.length,e.allItemsArr.length>0?n.disabled=!1:n.disabled=!0},getRightAnswers:function(){return e.rightAnswersArr},sortAnswers:function(t){t.forEach(t=>{t&&e.allAnsweredArr.push(t)})},getSortAnswers:function(){return e.allAnsweredArr},getStartedValues:function(){return e.allStartedArr},clearSortAnswers:function(){e.allAnsweredArr=[]},getPass:function(){return e.pass},passFalse:function(){e.pass=!1},restartState:function(){e.pass=!0,e.allItemsArr=[]},getQuizAnswers:function(){return e.quizAnswers}}}(),UIController=function(){const e={remainLabel:".js-label",item:".js-item",itemsContainer:".js-items-container",inputsContainer:".js-inputs-container",cell:".js-cell",btnFinish:".btn--finish",btnCancel:".btn--cancel",btnOK:".btn--ok",btnAgain:".btn--again",btnFeedback:".btn--show-feedback",btnShowAnswers:".btn--show-answers",btnHideAnswers:".btn--hide-answers",btnShowFeedback:".btn--show-feedback",modalBody:".modal-body",modalFooter:".modal-footer",backdrop:".modal",btnFinishHide:".btn-finish-hide",quizGroup:".quiz-group",swipePanel:".swipe-panel"},t=Array.from(document.querySelectorAll(e.cell)),n=function(t){const n=`\n            <p class="px-4">${t.answer}</p>\n            \n            <form action="#">\n                <label class="input-group" for="0">\n                    <input type="radio" id="0" name="input"/>\n                    <label for="0">&nbsp;</label><span class="ml-2">Expert A</span>\n                </label>\n                <label class="input-group" for="1">\n                    <input type="radio" id="1" name="input"/>\n                    <label for="1">&nbsp;</label><span class="ml-2">Expert B</span>\n                </label>\n                <label class="input-group" for="2">\n                    <input type="radio" id="2" name="input"/>\n                    <label for="2">&nbsp;</label><span class="ml-2">Expert C</span>\n                </label>\n                <label class="input-group" for="3">\n                    <input type="radio" id="3" name="input"/>\n                    <label for="3">&nbsp;</label><span class="ml-2">Expert D</span>\n                </label>\n            </form>\n        `;document.querySelector(e.quizGroup).insertAdjacentHTML("afterbegin",n)};return{getDOMStrings:function(){return e},removeActiveItemsClass:function(){Array.from(document.querySelectorAll(e.item)).forEach(e=>e.classList.remove("js-item-active"))},renderItem:function(t,n){const s=document.querySelector(e.itemsContainer);if(t){const e=`\n                    <div id="${t.replace("chosen","item")}" class="m-1 btn-group-choice js-item">\n                        <button class="btn rounded-0" type="button">\n                            <span>${n}</span>\n                        </button>\n                        <i class="far fa-hand-point-down"></i>\n                    </div>\n                `;s.insertAdjacentHTML("beforeend",e)}},renderAllItems:function(t){const n=document.querySelector(e.itemsContainer);n.innerHTML="",t.forEach((e,t)=>{const s=`\n                    <div id="item-${t}" class="m-1 btn-group-choice js-item">\n                        <button class="btn rounded-0" type="button">\n                            <span>${e}</span>\n                        </button>\n                        <i class="far fa-hand-point-down"></i>\n                    </div>\n                `;n.insertAdjacentHTML("beforeend",s)})},renderRightItems:function(t,n){t.forEach((e,t)=>{let s=`\n                    <div class="pl-3 btn-group-choice js-right-item">\n                        <span>${n[t]}</span>\n                    </div>\n                `;document.getElementById(e.id).insertAdjacentHTML("beforeend",s)}),document.querySelector(e.btnShowAnswers).style.display="none",document.querySelector(e.btnHideAnswers).style.display="block"},hideRightItems:function(t){t.forEach(e=>e.lastElementChild.style.display="none"),document.querySelector(e.btnShowAnswers).style.display="block",document.querySelector(e.btnHideAnswers).style.display="none"},addActiveItemClass:function(e){this.removeActiveItemsClass(),document.getElementById(e).classList.add("js-item-active")},addActiveCellsClass:function(){t.forEach(e=>e.classList.add("js-cell-active"))},removeActiveCellsClass:function(){t.forEach(e=>e.classList.remove("js-cell-active"))},renderChosenItem:function(e,t,n){const s=document.getElementById(n);if(t){s.innerHTML="";const n=`\n                    <div id="${e.replace("item","chosen")}" class="btn-group-choice js-chosen">\n                        <button class="btn rounded-0" type="button">\n                            <span>${t}</span>\n                        </button>\n                        <i class="far fa-hand-point-down"></i>\n                    </div>\n                `;s.insertAdjacentHTML("beforeend",n)}},removeChosenItem:function(e){if(e){const t=document.getElementById(e);t.parentElement.removeChild(t)}},getAllCells:function(){return t},clearAllCells:function(){t.forEach(e=>e.innerHTML="")},renderModal:function(...t){const n=t[0],s=t[1],r=document.querySelector(e.modalBody),o=document.querySelector(e.modalFooter),i=document.querySelector(e.btnAgain),l=document.querySelector(e.btnFinishHide),a=document.querySelector(e.btnFeedback),c=document.querySelector(e.btnShowAnswers);r.textContent=`Total score is: ${n} out of ${s} (${Math.round(n/s*100)}%)`,[l,o].forEach(e=>e.style.display="none"),[a,c].forEach(e=>e.style.display="block"),i.disabled=!1},restartUI:function(){document.querySelector(e.remainLabel).textContent=6,document.querySelector(e.btnShowAnswers).style.display="none",document.querySelector(e.btnShowFeedback).style.display="none",document.querySelector(e.btnFinishHide).style.display="block",document.querySelector(e.modalFooter).style.display="flex",document.querySelector(e.btnFinish).disabled=!0,document.querySelector(e.btnAgain).disabled=!0,document.querySelector(e.btnHideAnswers).style.display="none"},renderAskModal:function(t,n){document.querySelector(e.modalBody).textContent=`Answered questions: ${t} out of ${n}. Do you want to finish?`},checkAnswers:function(e,t){let n=[];return console.log(e,t),e.forEach((e,s)=>{t[s]&&(e===t[s].innerText?(t[s].style.backgroundColor="#b7e9bf",n.push(!0),t[s].lastElementChild.className="fas fa-check",t[s].lastElementChild.style.color="#086e18"):(t[s].style.backgroundColor="#fac8c1",t[s].lastElementChild.className="fas fa-times",t[s].lastElementChild.style.color="#d80d0d"))}),n.length},renderButton:function(e,t){return`\n                <button class="btn mr-2" data-gotopage=${"next"===t?e+1:e-1}>\n                    <i class="fas fa-angle-${"next"===t?"right":"left"}"></i>\n                </button>\n            `},renderButtons:function(t,n,s){let r;const o=n/s;1===t?r=this.renderButton(t,"next"):t>1&&t<o?r=`${this.renderButton(t,"prev")}\n                          ${this.renderButton(t,"next")}`:t===o&&(r=this.renderButton(t,"prev")),document.querySelector(e.swipePanel).insertAdjacentHTML("afterbegin",r)},renderQuizAnswers:function(e,t=1,s=1){const r=(t-1)*s,o=t*s;e.slice(r,o).forEach(n),this.renderButtons(t,e.length,s)},prepareQuizButtons:function(){document.querySelector(e.quizGroup).innerHTML="",document.querySelector(e.swipePanel).innerHTML=""}}}(),controller=function(e,t){const n=function(){const n=t.getAllCells(),s=n.map(e=>e.firstElementChild),r=e.getRightAnswers();return e.sortAnswers(s),[e.getSortAnswers(),r,n,s]},s=function(n){const s=n.target.closest(".js-item"),r=e.getPass();if(s&&r){const r=n.target.closest(".js-item").textContent;t.addActiveItemClass(s.id,r),t.addActiveCellsClass(),e.setValues(s.id,r)}else t.removeActiveItemsClass(),t.removeActiveCellsClass()},r=function(n){const s=e.getSetValues(),r=n.target.closest(".js-cell"),o=n.target.closest(".js-chosen"),i=e.getPass();r&&s.itemID&&i&&t.removeChosenItem(s.itemID),r&&i&&(t.renderChosenItem(s.itemID,s.itemText,r.id),t.removeActiveCellsClass(),o&&""===s.itemID&&""===s.itemText&&i&&(t.removeChosenItem(o.id),t.renderItem(o.id,o.textContent),e.removeItem(o.id),e.updateRemainLabel()),o&&s.itemID&&s.itemText&&i&&(e.removeItem(s.itemID),e.updateRemainLabel(),t.renderItem(o.id,o.textContent)),e.addItem(s.itemID),e.updateRemainLabel(),e.resetValues(),t.removeActiveItemsClass())},o=function(){const[s,r,o,i]=n();if(s.length<o.length)t.renderAskModal(s.length,o.length),document.querySelector(".btn--ok").addEventListener("click",()=>{const n=t.checkAnswers(r,i);t.renderModal(n,o.length),e.passFalse()});else{const n=t.checkAnswers(r,i);t.renderModal(n,o.length),e.passFalse()}},i=function(){e.clearSortAnswers()},l=function(){const e=n()[2];t.hideRightItems(e)},a=function(){const e=n(),s=e[2],r=e[1];t.renderRightItems(s,r)},c=function(){const n=e.getStartedValues();e.restartState(),t.renderAllItems(n),t.clearAllCells(),t.restartUI()},d=function(){const n=e.getQuizAnswers();t.renderQuizAnswers(n)};return{init:function(){!function(){const n=t.getDOMStrings(),u=document.querySelector(n.backdrop),m=document.querySelector(n.btnCancel);document.querySelector(n.itemsContainer).addEventListener("click",s),document.querySelector(n.inputsContainer).addEventListener("click",r),document.querySelector(n.btnHideAnswers).addEventListener("click",l),document.querySelector(n.btnShowAnswers).addEventListener("click",a),document.querySelector(n.btnAgain).addEventListener("click",c),document.querySelector(n.btnFinish).addEventListener("click",o),[u,m].forEach(e=>e.addEventListener("click",i)),document.addEventListener("DOMContentLoaded",d),document.querySelector(n.swipePanel).addEventListener("click",n=>{n.preventDefault();const s=parseInt(n.target.closest(".btn").dataset.gotopage);if(s){const n=e.getQuizAnswers();t.prepareQuizButtons(),t.renderQuizAnswers(n,s)}})}(),console.log("The app has been started")}}}(dataController,UIController);controller.init();