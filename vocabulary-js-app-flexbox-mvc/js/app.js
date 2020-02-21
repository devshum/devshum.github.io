// DATA CONTROLLER
var dataController = (function() {
    
    var calculateTotal = function() {
        var sum = 0;

        data.allWords.forEach(function(cur) {
            sum =+ cur.id;
        });

        data.totals = sum;
    };

    var Word = function(id, from, into) {
        this.id = id;
        this.from = from;
        this.into = into
    };

    var data = {
        allWords: [],
        totals: []
    };

    return {
        addWord: function(from, into) {
            var newWord, ID;
            // ID = last ID + 1

            if (data.allWords.length > 0) {
                ID = data.allWords[data.allWords.length - 1].id + 1;
            } else {
                ID = 1;
            }

            // Create new Word
            newWord = new Word(ID, from, into);

            // Push into data 
            data.allWords.push(newWord);

            // Return
            return newWord;
        },

        calculateTotal: function() {
            calculateTotal();
        },

        getData: function() {
            return data.allWords;
        },

        getTotal: function() {
            return data.totals;
        },

        deleteWord: function(id) {
            var ids, index;
            // id = 6
            // ids = [1 2 4 6 8]
            // index = 3

            ids = data.allWords.map(function(cur) {
                return cur.id;
            });

            index = ids.indexOf(id);

            data.allWords.splice(index, 1);
        }

        // test: function() {
        //     console.log(data);
        // },
    };

})();

// UI CONTROLLER
var UIController = (function() {
    var data, DOMstrings, trans;

    data = dataController.getData();

    trans = function() {
        document.documentElement.classList.add('transition');
        window.setTimeout(function(){ document.documentElement.classList.remove('transition') }, 1000);
    };

    DOMstrings = {
        inputFrom: '.vocabulary-panel__add-from',
        inputInto: '.vocabulary-panel__add-into',
        inputBtn: '.vocabulary-panel__btn',
        wordsContainer: '.vocabulary-panel__box',
        btnHide: '.eye__hide',
        btnShow: '.eye__show',
        btnDelete: '.heading-tertiary--delete',
        labelTotal: '.heading-tertiary--number',
        labelDate: '.heading-secondary',
        switchBtn: '.btn'
    };

    return {
        getWord: function() {
            return {
                from: document.querySelector(DOMstrings.inputFrom).value,
                into: document.querySelector(DOMstrings.inputInto).value
            };
        },

        addListWord: function(obj) {
            var html, newHtml;

            // 1. Create HTML string with placeholder text
            html = '<ul class="item mt-10px" id="word-%id%"><li class="item__from">%from%</li><li class="item__into">%into%</li><li><button class="item__delete"><i class="icon ion-close-circled"></i></button></li></ul>'

            // 2. Replace the placeholder text
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%from%', obj.from);
            newHtml = newHtml.replace('%into%', obj.into);

            // 3. Insert HTML into the DOM
            document.querySelector(DOMstrings.wordsContainer).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputFrom + ', ' + DOMstrings.inputInto);
            
            // convert the fields list into an array(this)
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(cur, i, arr) {
                cur.value = '';
            });

            fieldsArr[0].focus();
        },

        displayTotal: function(total) {
            document.querySelector(DOMstrings.labelTotal).textContent = total;
        },

        addMenu: function() {
            if (data.length > 0) {
                document.querySelector(DOMstrings.btnHide).classList.add('active');
            }
        },

        deleteListWord: function(selectorID) {
            var el = document.getElementById(selectorID);

            el.parentNode.removeChild(el);
        },

        removeMenu: function() {
            if (data.length <= 0) {
                document.querySelector(DOMstrings.btnHide).classList.remove('active');
            }
        },

        hideList: function() {
            if (data.length > 0) {
                // 1. Hide the hide button
                document.querySelector(DOMstrings.btnHide).style.display = 'none';
                // 2. Show the show button
                document.querySelector(DOMstrings.btnShow).style.display = 'flex';
                // 3. Hide the toggle menu
                document.querySelector(DOMstrings.wordsContainer).style.display = 'none';
            } 
        },

        showList: function() {
            if (data.length > 0) {
                // 1. Show the hide button
                document.querySelector(DOMstrings.btnHide).style.display = 'flex';
                // 2. Hide the show button
                document.querySelector(DOMstrings.btnShow).style.display = 'none';
                // 3. Show the toggle menu
                document.querySelector(DOMstrings.wordsContainer).style.display = 'block';
            }
        },

        deleteAllList: function() {
            var el = document.querySelector(DOMstrings.wordsContainer);

            var child = el.lastElementChild;

            while (child) { 
                el.removeChild(child); 
                child = el.lastElementChild; 
            } 
        },

        lightTheme: function() {
            trans();
            document.documentElement.setAttribute('data-theme', 'light');
        },

        darkTheme: function() {
            trans();
            document.documentElement.setAttribute('data-theme', 'dark');
        },

        getDOMstrings: function() {
            return DOMstrings;
        },

        displayDate: function() {
            var now, month, monthArr, year; 
            now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
            monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            document.querySelector(DOMstrings.labelDate).textContent = monthArr[month] + ' | ' + year;
        },
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function(dataCtrl, UIctrl) {

    var ctrlAddWord = function() {
        var word, newWord;
        // 1. Get the word from field
        word = UIctrl.getWord();

        if(/[a-zA-Z]/.test(word.from) && /[а-яА-Я]/.test(word.into)) {
            // 2. Add the brand new word to the data controller
            newWord = dataCtrl.addWord(word.from, word.into);
            // 3. Add the word to the UI
            UIctrl.addListWord(newWord);
            // 4. Add the toggle menu 
            UIctrl.addMenu();
            // 5. Clear the fields
            UIctrl.clearFields();
            // 6. Update total
            updateTotal();
        }
    };

    var updateTotal = function() {
        // 5. Calculate the total
        dataCtrl.calculateTotal(); 

        // 6. Return the total
        var total = dataCtrl.getTotal();

        // 7. Add the total to the UI
        UIctrl.displayTotal(total);
    };

    var ctrlDeleteWord = function(e) {
        var wordID, splitID, ID;

        wordID = e.target.parentNode.parentNode.parentNode.id;

        if (wordID) {

            // // word-1 = ['word', '1']
            // splitID = wordID.split('-');
            // // = '1'
            // ID = parseInt(splitID[1]);

            // 1. delete the item from the data
            dataCtrl.deleteWord();

            // 2. delete the item from the UI
            UIctrl.deleteListWord(wordID);

            // 3. display new total
            updateTotal();

            // 4. Remove the toggle menu 
            UIctrl.removeMenu();
        }
    };

    var ctrlHideList = function() {
        UIctrl.hideList();
    };
    
    var ctrlShowList = function() {
        UIctrl.showList();
    };

    var ctrlDeleteAll = function() {
        // 1. Delete all the words from the data
        dataCtrl.getData().length = 0;

        // 3. Update the UI
        UIctrl.deleteAllList();

        // 3. display new total
        updateTotal();

        // 4. Remove the toggle menu 
        UIctrl.removeMenu();
    };

    var ctrlThemeChange = function() {
        if(this.checked) {
            UIctrl.lightTheme();
        } else {
            UIctrl.darkTheme();
        }
    }
   
    var setupEventListeenrs = function() {
        var DOM;

        DOM = UIctrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddWord);

        document.addEventListener('keypress', function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddWord();
            }
        });


        document.querySelector(DOM.wordsContainer).addEventListener('click', ctrlDeleteWord);

        document.querySelector(DOM.btnHide).addEventListener('click', ctrlHideList);

        document.querySelector(DOM.btnShow).addEventListener('click', ctrlShowList);
    
        document.querySelector(DOM.btnDelete).addEventListener('click', ctrlDeleteAll);

        document.querySelector('input[name=theme]').addEventListener('change', ctrlThemeChange);
    };

    return {
        init: function() {
            setupEventListeenrs();
            UIctrl.displayDate();
            UIctrl.displayTotal(data = 0);
            console.log('Application has started');
        }
    };

})(dataController, UIController);

controller.init();







