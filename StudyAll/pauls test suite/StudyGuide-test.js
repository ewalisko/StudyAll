var guide = new StudyGuide("HTMLandCSS.xml", "Introductory HTML and CSS", holder);

test("Underweight Tests", function() {
      equal(18, calculateBMI(145, 75).toFixed(0));      
      equal(16, calculateBMI(110, 69).toFixed(0));      
});

test("Normal Tests", function() {
      equal(19, calculateBMI( 91, 58).toFixed(0));      
      equal(20, calculateBMI( 96, 58).toFixed(0));      
      equal(24, calculateBMI(115, 58).toFixed(0));      
      equal(19, calculateBMI(104, 62).toFixed(0));      
      equal(21, calculateBMI(115, 62).toFixed(0));      
      equal(22, calculateBMI(180, 76).toFixed(0));      
      equal(24, calculateBMI(197, 76).toFixed(0));      
});

test("Overweight Tests", function() {
      equal(25, calculateBMI(150, 65).toFixed(0));      
      equal(28, calculateBMI(173, 66).toFixed(0));      
      equal(32, calculateBMI(173, 66).toFixed(0), "Intentional Failure");      
      equal(29, calculateBMI(238, 76).toFixed(0));      
});