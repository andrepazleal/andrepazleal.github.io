// Um console on-screen, para funcionar precisa de um elemento com a id "main".
function debug_log(msg) {
  var main = document.getElementById("main"),
      debug = document.getElementById('glutton_debug');
  if (debug === null && main !== null) {
	debug = document.createElement('div');
	debug.setAttribute('id','glutton_debug');
	main.appendChild(debug);
  }
  if (debug !== null) {
	debug.innerHTML += "<p>" + msg + "</p>";
  }
}

// Faz a separação dos elementos HTML de uma string.
// Fonte: http://stackoverflow.com/questions/822452/strip-html-from-text-javascript#comment9107196_822486
function strip(html) {
  var tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent||tmp.innerText;
}

// Oculta qualquer elemento DOM utilizando a classe CSS "hidden", a não ser que a classe já esteja presente.
function hide(el) {
  if (el.className.indexOf('hidden') === -1) {
    el.className+= ' hidden';
  }
}

// Mostra todo elemento DOM que previamente foi ocultado usando a classe CSS "hidden";
function show(el) {
  el.className = el.className.replace(/ ?hidden/gi, '');
}


// Uma função de evento callBack para os botões do Android.
function back_event() {
  switch_screen('#home');
}

// Oculta todos os elementos do tipo div.screen e após mostra a div com a id requisitada.
// the requested id.
function switch_screen(id) {
  id = id.substring(1); // Remove o # do inicio da id.
  
  var current_screen = document.getElementById(id),
      back_button = document.getElementById('back_button');
  
  [].forEach.call(document.querySelectorAll("div.screen"), function(el) {
    hide(el);
  });
  
  show(current_screen);
  
  if (id !== "home") {

    document.addEventListener("backbutton", back_event, true); 
  } else {

    document.removeEventListener("backbutton", back_event, true);
  }
}

// Função que simplifica o processo de setar eventos de clique nos elementos.
// A função callback_fnc inserida deve ser definida somente com um parametro,
// a qual vai ser setada ao elemento clicado quando executada.

function set_click(el, callback_fnc) {
  if('ontouchstart' in document.documentElement ) {
    new NoClickDelay(el, callback_fnc);
  } else {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      callback_fnc(el); 
    }, false);
  }
}