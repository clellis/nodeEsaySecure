

$(function()
{
	$.getScript("i18next/i18next.js");
	
	//Apparition et gestion des drapeaux et du logo1
	$('.lang').delay(4500).animate({top:"7px"},1000);
	$('.logo1').delay(4700).animate({top:"35px"},1000);
	
	$("#fr").mouseover(function()
		{
			$(this).css("background-position","0 0").css("cursor","pointer");
			
//			alert((navigator.cookieEnabled) ? true : false);
//			alert(document.cookie.lang);
			return false;
		}
	).mouseout(function()
		{
//			$(this).css("background-position","0 -36px");
			return false;
		}
	);
	
	$("#en").mouseover(function()
		{
			$(this).css("background-position","0 0").css("cursor","pointer");
			return false;
		}
	).mouseout(function()
		{
			$(this).css("background-position","0 -36px");
			return false;
		}
	);
	
	$("#es").mouseover(function()
		{
			$(this).css("background-position","0 0").css("cursor","pointer");
			return false;
		}
	).mouseleave(function()
		{
			$(this).css("background-position","0 -36px");
			return false;
		}
	);
		
	//Initialisation de la banniere
	initBan();
	
	$(".versBilanCirconstanciel").click(function() 
		{
			//Page d'accueil
			load("Accueil.html");
			
			return false;
		}
	);
	
	//Infobulles
	$("a#infoBulle").mouseover(function() 
		{
			$(this).next("#infoBulle").css("transform","scale(1) rotate(0)").css("opacity","1");
			return false;
		}
	);
	$("a#infoBulle").mouseout(function() 
		{
			$(this).next("#infoBulle").css("transform","scale(0) rotate(-12deg)").css("opacity","0");
			return false;
		}
	);
	
	// BILAN CIRCONSTANCIEL // Apparition de que c'til passe
	$(".bilan_circonstanciel_1").click(function() 
		{
			observer_2_rapport_position = $(".observer_2_rapport").attr("pos");
			observer_3_danger_position = $(".observer_3_danger").attr("pos");
			observer_4_information_position = $(".observer_4_information").attr("pos");
			observer_5_secours_position = $(".observer_5_secours").attr("pos");
			
			if((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){//tout est ferme
				
				open_observer_2_rapport();
				return false;
			}else if ((observer_2_rapport_position === "1") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){//que c'til pass� ouvert
				
				close_observer_2_rapport();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "1")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){// exist il un danger ouvert
				
				close_observer_3_danger();
				//wait
				open_observer_2_rapport();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "1")
					&& (observer_5_secours_position === "0")){// information sont elle exact ouvert
				
				close_observer_4_information();
				//wait
				open_observer_2_rapport();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "1")){// secours sont il suffisant ouvert
				
				close_observer_5_secours();
				//wait
				open_observer_2_rapport();
				return false;
			}
			
		}
	);
	
	// BILAN CIRCONSTANCIEL // Apparition de exist il un danger
	$(".bilan_circonstanciel_2").click(function() 
		{
			observer_2_rapport_position = $(".observer_2_rapport").attr("pos");
			observer_3_danger_position = $(".observer_3_danger").attr("pos");
			observer_4_information_position = $(".observer_4_information").attr("pos");
			observer_5_secours_position = $(".observer_5_secours").attr("pos");
			
			if((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){//tout est ferm�
				
				open_observer_3_danger();
				return false;
			}else if ((observer_2_rapport_position === "1") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){//que c'til pass� ouvert
				
				close_observer_2_rapport();
				//wait
				open_observer_3_danger();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "1")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){// exist il un danger ouvert
				
				close_observer_3_danger();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "1")
					&& (observer_5_secours_position === "0")){// information sont elle exact ouvert
				
				close_observer_4_information();
				//wait
				open_observer_3_danger();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "1")){// secours sont il suffisant ouvert
				
				close_observer_5_secours();
				//wait
				open_observer_3_danger();
				return false;
			}			
		}
	);
	
	// BILAN CIRCONSTANCIEL // Apparition de information sont elle exact
	$(".bilan_circonstanciel_3").click(function() 
		{
			observer_2_rapport_position = $(".observer_2_rapport").attr("pos");
			observer_3_danger_position = $(".observer_3_danger").attr("pos");
			observer_4_information_position = $(".observer_4_information").attr("pos");
			observer_5_secours_position = $(".observer_5_secours").attr("pos");
			
			if((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){//tout est ferm�
				
				open_observer_4_information();
				return false;
			}else if ((observer_2_rapport_position === "1") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){//que c'til pass� ouvert
				
				close_observer_2_rapport();
				//wait
				open_observer_4_information();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "1")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){// exist il un danger ouvert
				
				close_observer_3_danger();
				//wait
				open_observer_4_information();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "1")
					&& (observer_5_secours_position === "0")){// information sont elle exact ouvert
				
				close_observer_4_information();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "1")){// secours sont il suffisant ouvert
				
				close_observer_5_secours();
				//wait
				open_observer_4_information();
				return false;
			}
		}
	);
	
	// BILAN CIRCONSTANCIEL // Apparition de secours sont il suffisant
	$(".bilan_circonstanciel_4").click(function() 
		{
			observer_2_rapport_position = $(".observer_2_rapport").attr("pos");
			observer_3_danger_position = $(".observer_3_danger").attr("pos");
			observer_4_information_position = $(".observer_4_information").attr("pos");
			observer_5_secours_position = $(".observer_5_secours").attr("pos");
			
			if((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){//tout est ferm�
				
				open_observer_5_secours();
				return false;
			}else if ((observer_2_rapport_position === "1") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){//que c'til pass� ouvert
				
				close_observer_2_rapport();
				//wait
				open_observer_5_secours();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "1")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "0")){// exist il un danger ouvert
				
				close_observer_3_danger();
				//wait
				open_observer_5_secours();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "1")
					&& (observer_5_secours_position === "0")){// information sont elle exact ouvert
				
				close_observer_4_information();
				//wait
				open_observer_5_secours();
				return false;
			}else if ((observer_2_rapport_position === "0") 
					&& (observer_3_danger_position === "0")
					&& (observer_4_information_position === "0")
					&& (observer_5_secours_position === "1")){// secours sont il suffisant ouvert
				
				close_observer_5_secours();
				return false;
			}
		}
	);
	
	$(".conscient").click(function()
		{
			//Apparition des cas d'hemoragie
			$("#modifiable").load("HemoragieBis.html div#modifiable", function(){
				$.getScript("script/scriptEvenements.js");
				
				return false;
			});
			
			return false;
		}
	);
		
	
	$(".versOVA").click(function()
		{
			//Page des OVAs
			$("#modifiable").load("OVA.html div#modifiable", function(){
				$.getScript("script/scriptEvenements.js");
				
				
					
				return false;
			});
			
			return false;
		}
	);
	
	$(".versUrgenceVitale").click(function()
			{
				//Page des OAVA
				$("#modifiable").load("UrgenceVitale.html div#modifiable", function(){
					$.getScript("script/scriptEvenements.js");
					
					$(".UV_OVR_slide").attr("pos", "0");
					$(".UV_hemorragie_slide").attr("pos", "0");
					
					return false;
				});
				
				return false;
			}
		);
	
	$(".UV_OVR").click(function()
		{
			UV_OVR_slide_position = $(".UV_OVR_slide").attr("pos");
			UV_hemorragie_slide_position = $(".UV_hemorragie_slide").attr("pos");
			
			//Apparition des cas d'OVR si pas encore apparut
			if((UV_OVR_slide_position === "0") && (UV_hemorragie_slide_position === "0")){
				$('.formulaire').animate({height:"400px"},1000);
				
				// Section OVR
				$('.Urgence_vitale_1').animate({top:"50px"},1000).animate({left:"14%"},1000);
				$('.UV_OVR_slide').animate({left:"40%"},1000).animate({height:"200px"},1000);
				$(".UV_OVR_slide").attr("pos", "1");
				
				// Section Hemorragie
				$('.Urgence_vitale_2').animate({top:"-16px"},1000).animate({top:"-116px"},1000);
				$('.UV_hemorragie_slide').animate({top:"-115px"},1000).animate({top:"-215px"},1000);
				
				// Section Inconscience
				$('.Urgence_vitale_3').animate({top:"-132px"},1000).animate({top:"-232px"},1000);
			}else if ((UV_OVR_slide_position === "0") && (UV_hemorragie_slide_position === "1")){
				$('.formulaire').animate({height:"500px"},1000);
				
				// Section OVR
				$('.Urgence_vitale_1').animate({top:"50px"},1000).animate({left:"14%"},1000);
				$('.UV_OVR_slide').animate({left:"40%"},1000).animate({height:"200px"},1000);
				$(".UV_OVR_slide").attr("pos", "1");
				
				// Section Hemorragie
				$('.Urgence_vitale_2').animate({top:"36px"},1000).animate({top:"-66px"},1000);
				$('.UV_hemorragie_slide').animate({top:"-115px"},1000).animate({top:"-215px"},1000);
				
				// Section Inconscience
				$('.Urgence_vitale_3').animate({top:"-132px"},1000).animate({top:"-232px"},1000);
			}else if ((UV_OVR_slide_position === "1") && (UV_hemorragie_slide_position === "1")){
				
				return false;
			}
		}
	);
	
	$(".UV_hemorragie").click(function()
			{
				UV_hemorragie_slide_position = $(".UV_hemorragie_slide").attr("pos");
				UV_OVR_slide_position = $(".UV_OVR_slide").attr("pos");
				
				//Apparition des cas d'hemorragie si pas encore apparut
				if((UV_hemorragie_slide_position === "0")  && (UV_OVR_slide_position === "0")){
					$('.formulaire').animate({height:"400px"},1000);
					
					// Section OVR
//					$('.Urgence_vitale_1').animate({top:"50px"},1000).animate({left:"15%"},1000);
					
					// Section Hemorragie
					$('.Urgence_vitale_2').animate({top:"-65px"},1000).animate({left:"14%"},1000);
					$('.UV_hemorragie_slide').animate({left:"40%"},1000).animate({height:"200px"},1000);
					$(".UV_hemorragie_slide").attr("pos", "1");
					
					// Section Inconscience
					$('.Urgence_vitale_3').animate({top:"-182px"},1000).animate({top:"-232px"},1000);
				}else if((UV_hemorragie_slide_position === "0")  && (UV_OVR_slide_position === "1")){
					$('.formulaire').animate({height:"500px"},1000);
					
					// Section OVR
//					$('.Urgence_vitale_1').animate({top:"50px"},1000).animate({left:"15%"},1000);
					
					// Section Hemorragie
					$('.Urgence_vitale_2').animate({top:"-65px"},1000).animate({left:"14%"},1000);
					$('.UV_hemorragie_slide').animate({left:"40%"},1000).animate({height:"200px"},1000);
					$(".UV_hemorragie_slide").attr("pos", "1");
					
					// Section Inconscience
					$('.Urgence_vitale_3').animate({top:"-182px"},1000).animate({top:"-232px"},1000);
				}else if((UV_hemorragie_slide_position === "1")  && (UV_OVR_slide_position === "1")){
					
					return false;
				}
			}
		);
	
	$(".versHemorragie").click(function()
		{
			//Page d'hemorragie
			$("#modifiable").load("Hemorragie.html div#modifiable", function(){
				$.getScript("script/scriptEvenements.js");
				
				
				
				return false;
			});
			
			return false;
		}
	);
	
	$(".versInconscience").click(function()
			{
				//Page de l'inconscience
				$("#modifiable").load("Inconscience.html div#modifiable", function(){
					$.getScript("script/scriptEvenements.js");
					
					
					
					return false;
				});
				
				return false;
			}
		);
	
	$(".hemoragie").click(function()
		{
			//Apparition des cas d'hemoragie
			$("#modifiable").load("HemoragieBis.html div#modifiable", function(){
				$.getScript("script/scriptEvenements.js");
				
				return false;
			});
			
			return false;
		}
	);
	
	$(".versConscient").click(function()
		{
			//Page de Conscient
			$("#modifiable").load("Conscient.html div#modifiable", function(){
				$.getScript("script/scriptEvenements.js");
				
				
				
				return false;
			});
			
			return false;
		}
	);
	
	$(".conscient").click(function()
		{
			//Apparition des cas d'hemoragie
//			$("#modifiable").load("HemoragieBis.html div#modifiable", function(){
//				$.getScript("script/scriptEvenements.js");
//				
//				return false;
//			});
			
			return false;
		}
	);
	
	$(".versTrauma").click(function()
		{
			//Page de Conscient
//			$("#modifiable").load("Conscient.html div#modifiable", function(){
//				$.getScript("script/scriptEvenements.js");
//				
//				
//				
//				return false;
//			});
			
			return false;
		}
	);
		
	//$(".navigContact").click(function() 
	//	{
	//		$("#modifiable").load("Contact.html div#modifiable");
	//		return false;
	//	}
	//);
});


function initBan()
{
	//Apparition du premier slogan	
	$('.titre1').animate({left:"28%"},1000);
	
	//Disparition du premier slogan	
	//$('.titre1').delay(500).fadeOut(1000);
	
	//Apparition du deuxi�me slogan
	//jQuery('.titre2').delay(1300).animate({left:"28%"},2000);
	var temp = 1300;
	var texte = "Apprendre les premiers soins en toute simplicitee";
	//Apparition lettre par lettre du deuxi�me slogan
	var extrait = texte.split("");
	for (i=0; i<extrait.length; i++)
	{
		setTimeout("jQuery('.titre2 h3').append('" + extrait[i] + "');",temp);
		temp+=50;
	}
		
	//Disparition du deuxi�me slogan
	//jQuery('#slog2').delay(2000).fadeOut(1000);
		
	//Attribution du style au titre 2
	$('.titre2').delay(5000).animate({color:"white"},1500);
	
}

function open_observer_2_rapport()
{
	$('.observer_2_rapport_1').show("normal");
	
	$(".observer_2_rapport").attr("pos", "1");
}

function close_observer_2_rapport()
{
	$('.observer_2_rapport_1').hide("normal");
	
	$(".observer_2_rapport").attr("pos", "0");
}

function open_observer_3_danger()
{
	$('.observer_3_danger_1_2').show("normal");
	
	$(".observer_3_danger").attr("pos", "1");
}

function close_observer_3_danger()
{
	$('.observer_3_danger_1_2').hide("normal");
	
	$(".observer_3_danger").attr("pos", "0");
}

function open_observer_4_information()
{
	$('.observer_4_information_1').show("normal");
	
	$(".observer_4_information").attr("pos", "1");
}

function close_observer_4_information()
{
	$('.observer_4_information_1').hide("normal");
	
	$(".observer_4_information").attr("pos", "0");
}

function open_observer_5_secours()
{
	$('.observer_5_secours_1').show("normal");
	
	$(".observer_5_secours").attr("pos", "1");
}

function close_observer_5_secours()
{
	$('.observer_5_secours_1').hide("normal");
	
	$(".observer_5_secours").attr("pos", "0");
}

function afficherDanger()
{
	$('.danger_2_supprime').delay(1000).animate({left:"34%"},1000);
	
//	$('.danger_3_non_supprimable').delay(3000).animate({top:"-58px"},500);
//	$('.danger_4_balisage').delay(3000).animate({top:"-130px"},500).delay(1000).animate({left:"34%"},1000);
//	
//	$('.danger_5_supprimable_urgence').delay(3000).animate({top:"-202px"},500).delay(3000).animate({top:"-116px"},500);
//	$('.danger_6_degagement').delay(3000).animate({top:"-274px"},500).delay(3000).animate({top:"-188px"},500).delay(1000).animate({left:"34%"},1000);
//	
//	$('.danger_1_supprimable_img').delay(200).show("normal");
//	$('.danger_3_non_supprimable_img').delay(4000).show("normal");
//	$('.danger_5_supprimable_urgence_img').delay(7500).show("normal");
//	
//	$('.danger_2_supprime_vid').delay(2000).show(500);
//	$('.danger_4_balisage_vid').delay(5500).show(500);
//	$('.danger_6_degagement_vid').delay(9000).show(500);
	
	//TODO remplacer la variable dans la page danger par:
//	if ($('[page="danger"]').is(':visible')) {
//    	$('#afficherDanger()').click();
//    	
//    }
}
