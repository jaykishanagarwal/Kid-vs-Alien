var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8b9f702b-4263-49f8-bc81-0d93c52964df","9ae6f20a-8bdd-4ee4-b8c3-21d259ad4ac1","b9890aa8-00a7-4901-85cd-a5cd65146a16","637c8ac0-c828-409b-95a6-5c4eed3fb603","a1a875a2-1e8f-4220-912d-93b42aa219a5","0ad2a084-acaa-4be7-93ec-899fa8b95467","cc550ab6-ed25-443f-9b22-c9bb88160602","a3a59993-8104-4ad3-b828-ae7ac3bfc53b","b749f00c-b510-49d9-adf0-dab180c69172","eb5795c6-d157-4413-a827-7a5e4fcd9aed"],"propsByKey":{"8b9f702b-4263-49f8-bc81-0d93c52964df":{"name":"stage_1","sourceUrl":"assets/api/v1/animation-library/gamelab/02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s/category_backgrounds/stage.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s/category_backgrounds/stage.png"},"9ae6f20a-8bdd-4ee4-b8c3-21d259ad4ac1":{"name":"kid_6_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oboKKADyn02Bln0Ncy1XypFdUsXSE5Hu/category_characters/kid_6.png","frameSize":{"x":170,"y":310},"frameCount":1,"looping":true,"frameDelay":2,"version":"oboKKADyn02Bln0Ncy1XypFdUsXSE5Hu","loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":310},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oboKKADyn02Bln0Ncy1XypFdUsXSE5Hu/category_characters/kid_6.png"},"b9890aa8-00a7-4901-85cd-a5cd65146a16":{"name":"alien_walk_4","sourceUrl":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png"},"637c8ac0-c828-409b-95a6-5c4eed3fb603":{"name":"alien_walk_3","sourceUrl":"assets/api/v1/animation-library/gamelab/bdW2q2MXUU1E9hlGjtcQhAUkLcKKCmMd/category_characters/alienBeige_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"bdW2q2MXUU1E9hlGjtcQhAUkLcKKCmMd","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bdW2q2MXUU1E9hlGjtcQhAUkLcKKCmMd/category_characters/alienBeige_walk.png"},"a1a875a2-1e8f-4220-912d-93b42aa219a5":{"name":"alien_walk_2","sourceUrl":"assets/api/v1/animation-library/gamelab/TTOrBb1JCuhtwAqNuzKsowo7I.aS1lR8/category_characters/alienYellow_walk.png","frameSize":{"x":72,"y":88},"frameCount":2,"looping":true,"frameDelay":2,"version":"TTOrBb1JCuhtwAqNuzKsowo7I.aS1lR8","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":88},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TTOrBb1JCuhtwAqNuzKsowo7I.aS1lR8/category_characters/alienYellow_walk.png"},"0ad2a084-acaa-4be7-93ec-899fa8b95467":{"name":"alien_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb/category_characters/alienPink_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb/category_characters/alienPink_walk.png"},"cc550ab6-ed25-443f-9b22-c9bb88160602":{"name":"fork_1","sourceUrl":null,"frameSize":{"x":27,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZPtwJehCo7ZIULCbc4mAiUoliRpLlsQ1","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":101},"rootRelativePath":"assets/cc550ab6-ed25-443f-9b22-c9bb88160602.png"},"a3a59993-8104-4ad3-b828-ae7ac3bfc53b":{"name":"flail_gold_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"a434trbZpecgLT0hto_INz0GgILLt_0W","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/a3a59993-8104-4ad3-b828-ae7ac3bfc53b.png"},"b749f00c-b510-49d9-adf0-dab180c69172":{"name":"kid_18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2wdhkWk28Z3Ej5dOyW9sPOPwK7OIbO1h/category_characters/kid_18.png","frameSize":{"x":287,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"2wdhkWk28Z3Ej5dOyW9sPOPwK7OIbO1h","loadedFromSource":true,"saved":true,"sourceSize":{"x":287,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2wdhkWk28Z3Ej5dOyW9sPOPwK7OIbO1h/category_characters/kid_18.png"},"eb5795c6-d157-4413-a827-7a5e4fcd9aed":{"name":"kid_34_excited_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4tzgWr._tTaRFwGhdVqC.HsOJDHPdZXK/category_characters/kid_34_excited.png","frameSize":{"x":324,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"4tzgWr._tTaRFwGhdVqC.HsOJDHPdZXK","loadedFromSource":true,"saved":true,"sourceSize":{"x":324,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4tzgWr._tTaRFwGhdVqC.HsOJDHPdZXK/category_characters/kid_34_excited.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// to give gameStates
var PLAY=1;
var END=0;
var gameState=PLAY;
//Creating the background
var bg=createSprite(200,200,400,400);
bg.scale=2;
bg.setAnimation("stage_1");
bg.x=bg.width/2;
bg.velocityX=-6;

var bg2=createSprite(600,200,400,400);
bg2.setAnimation("stage_1");
bg2.x=bg.width/2;
bg2.velocityX=-6;
bg2.scale=2;
// creating the player
var soldier=createSprite(50,350,50,75);
soldier.shapeColor="red";
soldier.setAnimation("kid_6_1");
soldier.scale=0.3;
// creating an invisible ground
var ground=createSprite(200,400,400,25);
ground.visible=false;
// creating a sky
var sky=createSprite(200,0,400,25);
sky.visible=false;

// to create the enemys, weapons,score
var enemy1=createGroup();
var weapon1=createGroup();
// bg.velocityX=-4;
// bg.x=bg.width/2;
var score=0;


function draw() {
  background("White");
  // what should happen if gameState is play
  if (gameState===PLAY) {
    // the enemies and weapon should occur
      enemy();
  enemy();
        

  weapon();
// the mouse should control the soldier
  soldier.y=World.mouseY;
  soldier.collide(ground);
  soldier.collide(sky);
  // creating an infinite scrolling screen
    if (bg.x < 0) {
    bg.x = bg.width/2;
  }
  if (bg2.x < 0) {
    bg2.x = bg2.width/2;
  }
    if (weapon1.isTouching(enemy1)) {
    enemy1.destroyEach();
    weapon1.destroyEach();
    score=score+5;
    playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  }
  

  }
  
  // what should happen if the gameState is end
    if (gameState===END) {
          text('You Win!',200,200);
    soldier.scale=0.3;
    bg.velocityX=0;
    bg2.velocityX=0;
    enemy1.setVelocityEach(0);
    enemy1.lifetime="-1";
      
    }
    // losing the game
      if (enemy1.isTouching(soldier)) {
  gameState=END;
  playSound("assets/category_alerts/vibrant_game_negative_bling_1.mp3");
  
    soldier.setAnimation("kid_18_1");
    soldier.scale=0.3;
  }
  // winning the game
      if (score==100) {
          gameState=END;
          
    soldier.setAnimation("kid_34_excited_1");

    soldier.scale=0.3;

  }
  
  drawSprites();

//displaying score 
  fill('white');
  textSize('20');
  text("Score: "+ score,60,30);
// creating the sprites
  var edges=createEdgeSprites();
  soldier.bounceOff(edges);
}
// spawning the enemies
function enemy() {
  if (World.frameCount%75===0) {
    var eenemy=createSprite(700,randomNumber(50,350));
    eenemy.velocityX=-5;
    eenemy.setAnimation("alien_walk_"+randomNumber(1,4));
    enemy1.add(eenemy);
    eenemy.scale=0.9;
    eenemy.lifetime=400;
    playSound("assets/category_explosion/vibrant_smack_game_object_2.mp3");
  }
  
}
// spawning the weapon
function weapon() {
  if (keyWentDown("RIGHT_ARROW")) {
    var fork=createSprite(soldier.x,soldier.y,20,20);
    fork.setAnimation("flail_gold_1");
    fork.scale=0.5;
    fork.velocityX=7;
    weapon1.add(fork);
    fork.lifetime=400;
    playSound("assets/category_hits/vibrant_next_page_button.mp3");
    
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
