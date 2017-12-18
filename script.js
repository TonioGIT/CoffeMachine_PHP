$(document).ready(function () {

	/*$('#vue2').hide();*/

// -------------------------- DECLARATION DES VARIABLES -------------------------- \\

	let tea = {																		// Liste des recettes
		name: 'tea',
		led: false,
		tea: 1,
		water: 2,
		coffee: 0,
		milk: 0,
		cocoa: 0,
		price: 70
	};

	let cocoa = {
		name: "cocoa", 
		led: false, 
		coffee: 0, 
		water: 1, 
		tea: 0,  
		milk: 1,
		cocoa: 1,
		price: 80
	};

	let latte = {
		name: 'latte',
		led: false,
		coffee: 1,
		water: 1,
		milk: 1,
		cocoa: 0,
		tea: 0,
		price: 60
	};

	let coffee = {
		name: "coffee",
		led: false,
		coffee: 1, 
		water: 2, 
		tea: 0,  
		milk: 0, 
		cocoa: 0,
		price: 50
	};

	let stock = {
		cups: 100,
		stirrers: 100,
		sugar: 100,
		water: 100,
		milk: 100,
		coffee: 100,
		tea: 100,
		cocoa: 100
	};

	let availableDrinks = {coffee , tea , cocoa , latte};							// Creation d'un objet contenant toutes les recettes

	let counter = 0;

	let nbSugar = 0;

	let typePieces = [200 , 100 , 50 , 20 , 10 , 5] ; // Création d'un tableau qui référence tous les types de pièces 
	let dispoPieces = [2 , 3 , 5 , 23 , 50 , 10] ; // Création d'un tableau recensant le nb de pièces dispo dans le monnayeur
	let sommeRendue = [] ;
	
// ----------------------- FIN DECLARATION DES VARIABLES ----------------------- \\

	function chargeurMonnaie () {
		for (i = 0 ; i < 6 ; i++) {
			$("#nb-coins"+i).text('  '+dispoPieces[i]);
		}
		console.log(dispoPieces);
	}

	chargeurMonnaie ();
// ------------------------------- FONCTION GET DRINK --------------------------------- \\

	resetDrink();

	$(".drink").click(function () {													// Quand on clique sur une boisson, appeler toutes les fonctions
		let thisDiv = $(this);
		let thisDrink = getDrinkName(thisDiv);
		selectDrink(true , thisDrink);
		lightLed(thisDiv);
		/*prepareCoffee(thisDrink,nbSugar);*/
		displayLCD('You selected :'+thisDrink);
		if (counter >= availableDrinks[thisDrink].price) {
			monnayeur(counter, availableDrinks[thisDrink].price);
		} else {
			displayLCD(thisDrink +' price is '+ availableDrinks[thisDrink].price +' cts');
		}
	});

	function selectDrink (doSelect , drink) {										// fonction qui manipule les objets pour changer la valeur booléenne de la key led
		$.each(availableDrinks , function (key , value) {
			value.led = false;
			if (key === drink) {
				value.led = true;
			}
		});
	}
	
	function getDrinkName (choix) {													// Fonction qui récupère le nom de la boisson dans l'id=label-*
		let tiret = '-' ;
		let currentDivId = choix.find('p').attr('id');
		let currentDrinkArray = currentDivId.split(tiret); 
		let currentDrink = currentDrinkArray[1];
		return currentDrink ;														// renvoie "coffee" , "tea" ...
	}
	
	function lightLed (selectedDrink) {												// Fonction allume / éteint les LEDs
		$(".led-drink").removeClass('led-drink-on');
		$(selectedDrink).find('.led-drink').toggleClass('led-drink-on');
	}
	
	function resetDrink() {															// Fonction 'désélectionner toutes les boissons'
		$('#btn-reset').click(function() {										
			$(".led-drink").removeClass('led-drink-on');	
			$.each(availableDrinks , function (key , value) {
			value.led = false;
			});				
		});
	}
	
	function displayLCD(textLCD) {
		$('.ecran-lcd-text').text(textLCD);
	}

	// Gestion des boutons

	$('.led-drink').mouseenter(function () {
		$(this).toggleClass('led-drink-over');
	})

	$('.led-drink').mouseleave(function () {
		$(this).toggleClass('led-drink-over');
	})

	$(".led-drink").mousedown(function () {
		$(this).toggleClass('led-drink-down');
	});

	$(".led-drink").mouseup(function () {
		$(this).toggleClass('led-drink-down');
	});
// ------------------------------- FIN GET DRINKS --------------------------------- \\

// ------------------------------- FONCTION SUGAR --------------------------------- \\

	$(".sugar-plus").click(function () {
		if ( nbSugar >= 0 && nbSugar < 5 ) {
			nbSugar++ ;
			ledPlus(nbSugar);
		}
	});

	$(".sugar-plus").mousedown(function () {
		$(this).toggleClass('sugar-plus-down');
	});

	$(".sugar-plus").mouseup(function () {
		$(this).toggleClass('sugar-plus-down');
	});

	$(".sugar-minus").click(function () {
		if ( nbSugar > 0 && nbSugar <= 5 ) {
			nbSugar-- ;
			ledMinus(nbSugar);
		}
	});

	$(".sugar-minus").mousedown(function () {
		$(this).toggleClass('sugar-minus-down');
	});

	$(".sugar-minus").mouseup(function () {
		$(this).toggleClass('sugar-minus-down');
	});

	function ledPlus(x) {
			let CurrentSugarDiv = $('.select-sugar-right div:nth-child('+ x +')');
			CurrentSugarDiv.addClass('led-sugar-on');
	}

	function ledMinus(x) {		
			x = x + 1 ;
			let CurrentSugarDiv = $('.select-sugar-right div:nth-child('+ x +')');
			CurrentSugarDiv.removeClass('led-sugar-on');
	}

// ----------------------------- FONCTION INSERT COINS ------------------------------- \\

	$('.piece').click(function() { 													// Fonction 'Insert coins + incrémentation counter'
		money = $(this).attr('id');
		insertCoin(money);
		displayCounter();
		chargeurMonnaie();
	});

	function displayCounter () {
		$('#count h1').html((counter/100) + ' €uros');
	}

	function insertCoin(coin) {
		switch (coin) {
			case '5':
			counter += 5;
			dispoPieces[5] += 1 ;
			break;
			case '10':
			counter += 10;
			dispoPieces[4] += 1 ;
			break;
			case '20':
			counter += 20;
			dispoPieces[3] += 1 ;
			break;
			case '50':
			counter += 50;
			dispoPieces[2] += 1 ;
			break;
			case '1':
			counter += 100;
			dispoPieces[1] += 1 ;
			break;
			case '2':
			counter += 200;
			dispoPieces[0] += 1 ;
			break;
		}
		return counter;
	};

	$('#annule').click(function() {	// Fonction 'Reset coins'
		console.log(sommeRendue);
		resetCoin(sommeRendue);
		chargeurMonnaie ();
	});

	function resetCoin(mychange) {
		displayLCD('Your change is :' + mychange.toString())
		counter = 0;
		$('#count h1').html('0 €uros');
/*		return counter;
*/	}

// ----------------------------- FIN INSERT COINS ------------------------------- \\
// ----------------------------- RENDU MONNAIE ------------------------------- \\


// ----------------------------- FONCTION PREPARE BOISSON ------------------------------- \\


// Declaration de la fonction monnayeur avec deux paramètres "Somme insérée" et "prix de la boisson".
	function monnayeur( sommeInseree, prixBoisson) {
	
	  let monnaie = (sommeInseree - prixBoisson) ;
	
	  for (indexMonnaie = 0 ; indexMonnaie < 6; indexMonnaie++){
	      while (monnaie >= typePieces[indexMonnaie] && dispoPieces[indexMonnaie] > 0 ) {   
	        sommeRendue.push(typePieces[indexMonnaie]) ; // PUSH l'index courant de typePieces dans le tableau sommeRendue (=> '200')       
	        monnaie = monnaie - typePieces[indexMonnaie] ; // Soustrait l'index courant de typePieces à la variable 'monnaie'
	        dispoPieces[indexMonnaie] =dispoPieces[indexMonnaie] - 1 ; // Décrémente l'index courant de dispoPieces 
	      }
	  }
	  counter -= prixBoisson ;
	  displayCounter();
	  console.log(sommeRendue);
	  return sommeRendue ; // En sortie , la fonction renvoie le tableau sommeRendue
	}
	





// ----------------------------- FIN RENDU MONNAIE ------------------------------- \\
// ----------------------------- FONCTION PREPARE BOISSON ------------------------------- \\
	/*prepareCoffee(tea,nbSugar);*/

	function prepareCoffee(boisson, choixNbSugar) { 
		$('.led-drink').click(function() {
			ajoutRecette(boisson);
			ajoutSucre(choixNbSugar);
			stock.cups -= 1;
			stock.water -= boisson.water;
			stock.milk -= boisson.milk;
			stock.tea -= boisson.tea;
			stock.coffee -= boisson.coffee;
			stock.cocoa -= boisson.cocoa;

			if (choixNbSugar !== 0) {
				stock.stirrers -= 1;
				stock.sugar -= choixNbSugar;
			}

		console.log('stock cups: ' + stock.cups);
		console.log('stock stirrers: ' + stock.stirrers);
		console.log('stock sugar: ' + stock.sugar);
		console.log('stock water: ' + stock.water);
		console.log('stock cocoa: ' + stock.cocoa);
		console.log('stock coffe: ' + stock.coffee);
		console.log('stock milk: ' + stock.milk);
		console.log('stock tea: ' + stock.tea);

		});
	}

	function ajoutRecette(boisson) { 
		switch (boisson) { 
			case coffee:
			$('#gobelet').append('<div class="ingredient" id="coffee"></div>');
			$('#gobelet').append('<div class="ingredient" id="water2"></div>');
			break;
			case latte:
			$('#gobelet').append('<div class="ingredient" id="milk"></div>');
			$('#gobelet').append('<div class="ingredient" id="coffee"></div>');
			$('#gobelet').append('<div class="ingredient" id="water"></div>');
			break;
			case cocoa:
			$('#gobelet').append('<div class="ingredient" id="milk"></div>');
			$('#gobelet').append('<div class="ingredient" id="cocoa"></div>');
			$('#gobelet').append('<div class="ingredient" id="water"></div>');
			break;
			case tea:
			$('#gobelet').append('<div class="ingredient" id="waterT1"></div>');
			$('#gobelet').append('<div class="ingredient" id="waterT2"></div>');
			$('#gobelet').append('<div class="ingredient" id="tea"></div>');
			$('#gobelet').append('<div class="ingredient" id="tea2"></div>');
			break;
		}
	}

	function ajoutSucre(nbSugar) { 
		for (var i = 1; i <= nbSugar; i++) {
			$('#gobelet').append('<div class="ingredient sucre" id="sucre'+i+'"></div>');
		}
	}
// ----------------------------- FIN FONCTION PREPARE BOISSON ------------------------------- \\
// ----------------------------- VUE 2 ------------------------------- \\
	$('.outils').click(function() {
		$('.machine-exter').hide();
		$('#vue2').show();
	});

	$('.machine-left, .machine-right').click(function() {
		$('.machine-exter').show();
		$('#vue2').hide();
	});

// ----------------------------- FIN VUE 2 ------------------------------- \\

});
