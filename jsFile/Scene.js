 /* THIS CLASS CONTAINS ALL THE INFORMATION AND STRUCTURE OF EVERY SCENE 
 LIKE HOW TO SPAW THE DIFFERENT OBSTACLE AND GARBAGE ACCORDING TO DIFFERENT SCENE
 THERE WILL BE THREE FUNCTION FOR EVERY SCENE  */
 
        

 



 function createVillageScene(){
     //add any village ground image
     
    path.addImage('path' , pathImg1);

     //spawning wastes
     
     spawnBioWaste(60);
     spawnNonBioWaste(100);
     spawnEWaste(150);
    // console.log(' function of spawning village scene works or not???');
    console.log(bioWasteGroup + 'this is the group checking console log');
    
     //spawning obstacles
     spawnvillageObs(40);
     
    
 }

 function createCityScene(){
     // add any city road image
     path.addImage('path' , pathImg2);

      //spawning wastes
      spawnBioWaste(95);
      spawnNonBioWaste(60);
      spawnEWaste(90);
 
      //spawning obstacles
      spawncityObs(40);

      
 }

 function createInsdrialArea(){
    // add any city road image
    path.addImage('path',pathImg3);

     //spawning wastes
     spawnBioWaste(120);
     spawnNonBioWaste(80);
     spawnEWaste(65);

     //spawning obstacles
     spawncityObs(40);

     
}