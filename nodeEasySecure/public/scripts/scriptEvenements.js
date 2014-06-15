$(function()
{
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
					&& (observer_5_secours_position === "0")){//tout est ferm�
				
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
				
				close_observer_4_informations();
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
	
	//Page des dangers
	$(".versDanger").click(function() 
		{
			$("#modifiable").load("Danger.html div#modifiable", function(){
				$.getScript("script/scriptEvenements.js");
				
				
				$('.danger_2_supprime').delay(1000).animate({left:"34%"},1000);
				
				$('.danger_3_non_supprimable').delay(3000).animate({top:"-58px"},500);
				$('.danger_4_balisage').delay(3000).animate({top:"-130px"},500).delay(1000).animate({left:"34%"},1000);
				
				$('.danger_5_supprimable_urgence').delay(3000).animate({top:"-202px"},500).delay(3000).animate({top:"-116px"},500);
				$('.danger_6_degagement').delay(3000).animate({top:"-274px"},500).delay(3000).animate({top:"-188px"},500).delay(1000).animate({left:"34%"},1000);
				
				$('.danger_1_supprimable_img').delay(200).show("normal");
				$('.danger_3_non_supprimable_img').delay(4000).show("normal");
				$('.danger_5_supprimable_urgence_img').delay(7500).show("normal");
				
				$('.danger_2_supprime_vid').delay(2000).show(500);
				$('.danger_4_balisage_vid').delay(5500).show(500);
				$('.danger_6_degagement_vid').delay(9000).show(500);
			});
			
			return false;
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

function open_observer_2_rapport()
{
	$('.formulaire').animate({height:"475px"},500);
	
	$('.observer_3_danger').animate({top:"-58px"},"normal");
	$('.observer_4_information').animate({top:"-74px"},"normal");
	$('.observer_5_secours').animate({top:"-94px"},"normal");
	
	$('.observer_2_rapport_1').show("normal");
	
	$(".observer_2_rapport").attr("pos", "1");
}

function close_observer_2_rapport()
{
	$('.observer_2_rapport_1').hide("normal");
	
	$('.observer_3_danger').animate({top:"-46px"},"normal");
	$('.observer_4_information').animate({top:"-62px"},"normal");
	$('.observer_5_secours').animate({top:"-82px"},"normal");
	
	$('.formulaire').animate({height:"375px"},500);
	
	$(".observer_2_rapport").attr("pos", "0");
}

function open_observer_3_danger()
{
	$('.formulaire').animate({height:"450px"},500);
	
	$('.observer_4_information').animate({top:"-169px"},"normal");
	$('.observer_5_secours').animate({top:"-188px"},"normal");
	
	$('.observer_3_danger_1').show("normal");
	$('.observer_3_danger_2').show("normal");
	
	$(".observer_3_danger").attr("pos", "1");
}

function close_observer_3_danger()
{
	$('.observer_3_danger_1').hide("normal");
	$('.observer_3_danger_2').hide("normal");
	
	$('.observer_4_information').animate({top:"-62px"},"normal");
	$('.observer_5_secours').animate({top:"-82px"},"normal");
	
	$('.formulaire').animate({height:"375px"},500);
	
	$(".observer_3_danger").attr("pos", "0");
}

function open_observer_4_information()
{
	$('.formulaire').animate({height:"450px"},500);
	
	$('.observer_5_secours').animate({top:"-94px"},"normal");
	
	$('.observer_4_information_1').show("normal");
	
	$(".observer_4_information").attr("pos", "1");
}

function close_observer_4_information()
{
	$('.observer_4_information_1').hide("normal");
	
	$('.observer_5_secours').animate({top:"-82px"},"normal");
	
	$('.formulaire').animate({height:"375px"},500);
	
	$(".observer_4_information").attr("pos", "0");
}

function open_observer_5_secours()
{
	$('.formulaire').animate({height:"450px"},500);
	
	$('.observer_5_secours_1').show("normal");
	
	$(".observer_5_secours").attr("pos", "1");
}

function close_observer_5_secours()
{
	$('.observer_5_secours_1').hide("normal");
	
	$('.formulaire').animate({height:"375px"},500);
	
	$(".observer_5_secours").attr("pos", "0");
}