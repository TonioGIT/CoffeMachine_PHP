
<?php
	$date = date('d/m/Y'); //Déclaration d la variable date qui récupère la date au format jour/moi/année.
	$initialCoins = 0; 	   //Déclaration de la variable initialCoins et qui vaut 0.
	$boissons = array("coffee", "tea", "cocoa", "latte"); //Déclaration de la variable boissons sous forme de tableau.
?>



<!doctype html>
<head lang="fr">
	<title>Cooffee Machine Ilot 1</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="styleFinal.css">
	<!-- link rel="stylesheet" type="text/css" href="style2.css" -->
<!-- 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous"> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
</head>

<body>
	<div class="ipad">
		<!-- HAUT DU VIEWPORT / MONNAIE -->
		<div class="view-top">
			<div class="coins">
				<div>
					<img class="" src="img/coins.png">
				</div>    
				<div>
					<img class="piece" id="5" src="img/pieces/piece05.png">
				</div>    
				<div>
					<img class="piece" id="10" src="img/pieces/piece10.png">
				</div>       
				<div>
					<img class="piece" id="20" src="img/pieces/piece20.png">
				</div>        
				<div>
					<img class="piece" id="50" src="img/pieces/piece50.png">
				</div>        
				<div>
					<img class="piece" id="1" src="img/pieces/piece1.png">
				</div>        
				<div>
					<img class="piece" id="2" src="img/pieces/piece2.png">
				</div> 
			</div>                         
		</div>
		<!-- RANGEE MACHINE -->
		<div class="row-machine">

			<div class="machine-left"></div>
			<div class="machine">

			<!-- MACHINE INTER -->
				<div id="vue2">
					<div class="machine2">
						<div class="machine-inter">
							<div class="machine-top2">
							</div>
							<div class="machine-center2">
								<div class="chargeur">
									<div id="chargeur2"></div>
									<div class="button-plus"></div>
									<img src="img/pieces/piece2.png">
									<p>x<span id="nb-coins0"></span></p>
								</div>
								<div class="chargeur">
									<div id="chargeur1"></div>
									<div class="button-plus"></div>
									<img src="img/pieces/piece1.png">
									<p>x<span id="nb-coins1"></span></p>
								</div>
								<div class="chargeur">
									<div id="chargeur50"></div>
									<div class="button-plus"></div>
									<img src="img/pieces/piece50.png">
									<p>x<span id="nb-coins2"></span></p>
								</div>
								<div class="chargeur">
									<div id="chargeur20"></div>
									<div class="button-plus"></div>
									<img src="img/pieces/piece20.png">
									<p>x<span id="nb-coins3"></span></p>
								</div>
								<div class="chargeur">
									<div id="chargeur10"></div>
									<div class="button-plus"></div>
									<img src="img/pieces/piece10.png">
									<p>x<span id="nb-coins4"></span></p>
								</div>
								<div class="chargeur">
									<div id="chargeur05"></div>
									<div class="button-plus"></div>
									<img src="img/pieces/piece05.png">
									<p>x<span id="nb-coins5"></span></p>
								</div>
							</div>
							<div class="machine-distrib">
							</div>
						</div>
					</div>
				</div>
				
				<!-- MACHINE EXTER -->

				<div class="machine-exter">
					<img src="img/front/fond-exter.jpg" alt="machine front">
					<div class="machine-top">
						<div>
							<img class="monnayeur" src="img/pieces/monnayeur.jpg">
							<img class="outils" src="img/outils.png">
						</div>
						<div class="counter" id="count">
							<h1><?php echo $initialCoins. " €uros"?></h1>   <!-- Affichage de la variable initialCoins.  -->   
						</div>
					</div>
					<div class="machine-center">
						<div class="ecran-central">

							<div class="ecran-lcd">
								<div class="ecran-lcd-text"></div>
							</div>
							
							<div class="select-sugar">
								<div class="select-sugar-left">
									<div class="sugar-minus"></div>
									<p>sugar</p>
									<div class="sugar-plus"></div>
								</div>
								<div class="select-sugar-right">
									<div class="led-sugar"></div>
									<div class="led-sugar"></div>
									<div class="led-sugar"></div>
									<div class="led-sugar"></div>
									<div class="led-sugar"></div>
								</div>
							</div>

							<div class="choix-boisson-left">
								<div class="drink">
									<div class="led-drink"></div>
									<p id="label-coffee"><?php echo $boissons[0]; ?></p> <!-- Affichage de la string du tableau boissons à l'index 0. -->
								</div>
								<div class="drink">
									<div class="led-drink"></div>
									<p id="label-tea"><?php echo $boissons[1]; ?></p>  <!-- Affichage de la string du tableau boissons à l'index 1. -->
								</div>
								<div class="drinkEmpty">
									<div class="led-drink"></div>
									<p id="label-*"><?php echo $date;  ?></p> <!-- Affichage de la variable date. -->
								</div>
								<div class="drinkEmpty">
									<div class="led-drink" id="annule"></div>
									<p id="label-*">Get change</p> 
								</div>
							</div>

							<div class="choix-boisson-right">
								<div class="drink">
									<div class="led-drink"></div>
									<p id="label-cocoa"><?php echo $boissons[2]; ?></p>  <!-- Affichage de la string du tableau boissons à l'index 2. -->
								</div>
								<div class="drink">
									<div class="led-drink"></div>
									<p id="label-latte"><?php echo $boissons[3]; ?></p>  <!-- Affichage de la string du tableau boissons à l'index 3. -->
								</div>
								<div class="drinkEmpty">
									<div class="led-drink"></div>
									<p id="label-*"></p>
								</div>
								<div class="drinkEmpty" id="btn-reset">
									<div class="led-drink"></div>
									<p id="label-*">Reset Drinks</p>
								</div>
							</div>
						</div>
					</div>
					<div class="machine-distrib">
						<div id="nicheCup">
							<div id="cup">
								<div id="gobelet">
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="machine-right"></div>
		</div>
	</div>
</body>
</html>