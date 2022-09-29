(function() {
  var game;
  var ui;

  var main = function(dendryUI) {
    ui = dendryUI;
    game = ui.game;

    // Add your custom code here.
  };

  var TITLE = "The Archivist and the Revolution" + '_' + "Autumn Chen";

  window.quickSave = function() {
      var saveString = JSON.stringify(window.dendryUI.dendryEngine.getExportableState());
      localStorage[TITLE+'_save_q'] = saveString;
      window.alert("Saved.");
  };

  window.saveSlot = function(slot) {
      var saveString = JSON.stringify(window.dendryUI.dendryEngine.getExportableState());
      localStorage[TITLE+'_save_' + slot] = saveString;
      var date = new Date(Date.now());
      localStorage[TITLE+'_save_timestamp_' + slot] = date;
      window.populateSaveSlots(slot + 1);
  };

  window.quickLoad = function() {
      if (localStorage[TITLE+'_save_q']) {
          var saveString = localStorage[TITLE+'_save_q'];
          window.dendryUI.dendryEngine.setState(JSON.parse(saveString));
          window.alert("Loaded.");
      } else {
          window.alert("No save available.");
      }
  };

  window.loadSlot = function(slot) {
      if (localStorage[TITLE+'_save_' + slot]) {
          var saveString = localStorage[TITLE+'_save_' + slot];
          window.dendryUI.dendryEngine.setState(JSON.parse(saveString));
          window.hideSaveSlots();
          window.alert("Loaded.");
      } else {
          window.alert("No save available.");
      }
  };

  window.deleteSlot = function(slot) {
      if (localStorage[TITLE+'_save_' + slot]) {
          localStorage[TITLE+'_save_' + slot] = '';
          localStorage[TITLE+'_save_timestamp_' + slot] = '';
          window.populateSaveSlots(slot + 1);
      } else {
          window.alert("No save available.");
      }
  };

  window.populateSaveSlots = function(max_slots) {
      // this fills in the save information
      function createLoadListener(i) {
          return function(evt) {
                window.loadSlot(i);
          };
      }
      function createSaveListener(i) {
          return function(evt) {
                window.saveSlot(i);
          };
      }
      function createDeleteListener(i) {
          return function(evt) {
                window.deleteSlot(i);
          };
      }
      for (var i = 0; i < max_slots; i++) {
          var save_element = document.getElementById('save_info_' + i);
          var save_button = document.getElementById('save_button_' + i);
          var delete_button = document.getElementById('delete_button_' + i);
          if (localStorage[TITLE+'_save_' + i]) {
              var timestamp = localStorage[TITLE+'_save_timestamp_' + i];
              save_element.textContent = timestamp;
              save_button.textContent = "Load";
              save_button.onclick = createLoadListener(i);
              delete_button.onclick = createDeleteListener(i);
          } else {
              save_button.textContent = "Save";
              save_element.textContent = "Empty";
              save_button.onclick = createSaveListener(i);
          }
      }
  };

  window.showSaveSlots = function() {
      var save_element = document.getElementById('save');
      save_element.style.display = "block";
      // magic number lol
      window.populateSaveSlots(8);
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('save');
              if (target == save_element) {
                  window.hideSaveSlots();
              }
          };
      }
  };

  window.hideSaveSlots = function() {
      var save_element = document.getElementById('save');
      save_element.style.display = "none";
  };

  window.showStats = function() {
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('status')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('status');
    }
  };
  
  window.showOptions = function() {
      var save_element = document.getElementById('options');
      window.populateOptions();
      save_element.style.display = "block";
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('options');
              if (target == save_element) {
                  window.hideOptions();
              }
          };
      }
  };

  window.hideOptions = function() {
      var save_element = document.getElementById('options');
      save_element.style.display = "none";
  };

  window.disableBg = function() {
      window.dendryUI.disable_bg = true;
      document.body.style.backgroundImage = 'none';
      window.dendryUI.saveSettings();
  };

  window.enableBg = function() {
      window.dendryUI.disable_bg = false;
      window.dendryUI.setBg(window.dendryUI.dendryEngine.state.bg);
      window.dendryUI.saveSettings();
  };

  window.disableAnimate = function() {
      window.dendryUI.animate = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimate = function() {
      window.dendryUI.animate = true;
      window.dendryUI.saveSettings();
  };

  window.disableAnimateBg = function() {
      window.dendryUI.animate_bg = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimateBg = function() {
      window.dendryUI.animate_bg = true;
      window.dendryUI.saveSettings();
  };

  // populates the checkboxes in the options view
  window.populateOptions = function() {
    var disable_bg = window.dendryUI.disable_bg;
    var animate = window.dendryUI.animate;
    var animate_bg = window.dendryUI.animate_bg;
    if (disable_bg) {
        $('#backgrounds_no')[0].checked = true;
    } else {
        $('#backgrounds_yes')[0].checked = true;
    }
    if (animate) {
        $('#animate_yes')[0].checked = true;
    } else {
        $('#animate_no')[0].checked = true;
    }
    if (animate_bg) {
        $('#animate_bg_yes')[0].checked = true;
    } else {
        $('#animate_bg_no')[0].checked = true;
    }
  };
  
  // This function allows you to modify the text before it's displayed.
  // E.g. wrapping chat-like messages in spans.
  window.displayText = function(text) {
      return text;
  };

  // This function allows you to do something in response to signals.
  window.handleSignal = function(signal) {
  };

  // random name generator
  var forenames = ['John', 'David', 'Robert', 'Michael', 'Paul', 'Richard', 'James', 'Peter', 'William', 'Brian', 'Mary', 'Linda', 'Daniel', 'Mark', 'Chris', 'Karen', 'Jennifer', 'Lisa', 'Susan', 'Michel', 'Kevin', 'George', 'Jean', 'Ken', 'Steven', 'Jim', 'Andrew', 'Michelle', 'Eric', 'Pierre', 'Ron', 'Don', 'Nancy', 'Andre', 'Gary', 'Thomas', 'Frank', 'Kim', 'Kelly', 'Jason', 'Diane', 'Donna', 'Julie', 'Claude', 'Jeff', 'Sandra', 'Scott', 'Heather', 'Donald', 'Roger', 'Carol', 'Denis', 'Dan', 'Patrick', 'Wayne', 'Nicole', 'Martin', 'Barbara', 'Christine', 'Doug', 'Sarah', 'Pat', 'Joe', 'Jacques', 'Sharon', 'Brenda', 'Elizabeth', 'Terry', 'Bob', 'Laura', 'Bruce', 'Marc', 'Greg', 'Gordon', 'Joseph', 'Stephen', 'Gilles', 'Rick', 'Anne', 'Mike', 'Margaret', 'Raymond', 'Debbie', 'Edward', 'Guy', 'Larry', 'Wendy', 'Charles', 'Tim', 'Tony', 'Joanne', 'Marie', 'Kathy', 'Alain', 'Amanda', 'Judy', 'Ryan', 'Cindy', 'Angela', 'Helen'];
  var surnames = ['Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Gagnon', 'Lee', 'Wilson', 'Johnson', 'MacDonald', 'Taylor', 'Campbell', 'Anderson', 'Jones', 'Leblanc', 'Cote', 'Williams', 'Miller', 'Thompson', 'Gauthier', 'White', 'Morin', 'Wong', 'Young', 'Bouchard', 'Scott', 'Stewart', 'Pelletier', 'Lavoie', 'Robinson', 'Moore', 'Belanger', 'Singh', 'Fortin', 'Levesque', 'Chan', 'Reid', 'Ross', 'Clark', 'Johnston', 'Walker', 'Thomas', 'King', 'Gagne', 'Bergeron', 'Li', 'Boucher', 'Landry', 'Poirier', 'Murray', 'Murphy', 'McDonald', 'Wright', 'Richard', 'Mitchell', 'Girard', 'Clarke', 'Davis', 'Simard', 'Kelly', 'Lewis', 'Graham', 'Caron', 'Wang', 'Fraser', 'Fournier', 'Jackson', 'Beaulieu', 'Wood', 'Hall', 'Baker', 'Chen', 'Hill', 'Harris', 'Green', 'Roberts', 'Lapointe', 'Bell', 'Ouellet', 'Patel', 'Watson', 'Kennedy', 'Cloutier', 'Robertson', 'Allen', 'Lefebvre', 'Nguyen', 'Hamilton', 'Desjardins', 'Adams', 'Gill', 'Khan', 'Cameron', 'Morrison', 'Dube', 'Evans', 'Grant', 'Nadeau', 'Zhang', 'Peters'];

  window.randomName = function() {
      var i1 = Math.floor(Math.random()*forenames.length);
      var i2 = Math.floor(Math.random()*forenames.length);
      return forenames[i1] + '-' + surnames[i2];
  };

  window.randomSelect = function(items) {
      return items[Math.floor(Math.random()*items.length)];
  };

  window.randomSelectProbs = function(items, probs) {
      // TODO: select with probability
      return items[Math.floor(Math.random()*items.length)];
  };

  window.dendryModifyUI = main;
  console.log("Modifying stats: see dendryUI.dendryEngine.state.qualities");

  window.onload = function() {
    window.dendryUI.loadSettings();
    if (localStorage[window.dendryUI.game.title + '_animate']) {
          window.dendryUI.animate = localStorage[window.dendryUI.game.title + '_animate'] != 'false' || false;
      } else {
          window.dendryUI.animate = true;
      }
      window.dendryUI.fade_time = 600;
      // pre-load images
      var images = ['images/room1_filtered_dithered.png',
                    'images/windows_filtered_dithered.png',
                    'images/monitor_dithered.png',
                    'images/monitor_2_dithered.png',
      ];
      for (var i = 0; i < images.length; i++) {
          var img = new Image();
          img.src = images[i];
      }
  };
}());
