<!--
3-D Minecraft Skin Viewer
By Kent Rasmussen @ earthiverse.ath.cx
Using Three.Js HTML5 3D Engine from https://github.com/mrdoob/three.js/
Add ?user=USERNAME to render a specific username
Add &refresh to re-grab the skin and generate new parts
-->
<?php include('backend/backend.php');
if(!isset($user)) $user = 'earthiverse';
if(isset($refresh)) minecraft_skin_delete($user);
minecraft_skin_download($user);?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript" src="backend/resources/3d/Three.js"></script>
<script type="text/javascript" src="backend/resources/3d/Cube.js"></script>
<script type="text/javascript" src="backend/resources/3d/ImageUtils.js"></script>
<script type="text/javascript" src="backend/resources/3d/Detector.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="style.css" rel="stylesheet" type="text/css" />
<title>3d minecraft body test v1.0</title>
</head>

<body>
<script type="text/javascript">
 var camera, scene, renderer;
 init();
 setInterval( loop, 1000 / 60 );
 function init() {
  camera = new THREE.Camera(20, window.innerWidth / window.innerHeight, 1, 1000);
  scene = new THREE.Scene();

  var head_materials = [new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/head_right.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/head_left.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/head_top.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/head_bottom.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/head_back.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/head_front.png')})];

  head = new THREE.Mesh( new Cube(8, 8, 8, 1, 1, head_materials), new THREE.MeshFaceMaterial());
  head.position.x = 0;
  head.position.y = 0;
  head.position.z = 0;
  scene.addObject(head);

  var body_materials = [new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/body_right.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/body_left.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/body_top.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/body_bottom.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/body_back.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/body_front.png')})];

  body = new THREE.Mesh( new Cube(8, 12, 4, 1, 1, body_materials), new THREE.MeshFaceMaterial());
  body.position.x = 0;
  body.position.y = -10;
  body.position.z = 0;
  scene.addObject(body);

  var arm_left_materials = [new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_left_inner.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_left_outer.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_left_top.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_left_bottom.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_left_back.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_left_front.png')})];

  arm_left = new THREE.Mesh( new Cube(4, 12, 4, 1, 1, arm_left_materials), new THREE.MeshFaceMaterial());
  arm_left.position.x = 6;
  arm_left.position.y = -10;
  arm_left.position.z = 0;
  scene.addObject(arm_left);

  var arm_right_materials = [new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_right_outer.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_right_inner.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_right_top.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_right_bottom.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_right_back.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/arm_right_front.png')})];

  arm_right = new THREE.Mesh( new Cube(4, 12, 4, 1, 0, arm_right_materials), new THREE.MeshFaceMaterial());
  arm_right.position.x = -6;
  arm_right.position.y = -10;
  arm_right.position.z = 0;
  scene.addObject(arm_right);

  var leg_left_materials = [new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_left_inner.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_left_outer.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_left_top.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_left_bottom.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_left_back.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_left_front.png')})];

  leg_left = new THREE.Mesh( new Cube(4, 12, 4, 1, 1, leg_left_materials), new THREE.MeshFaceMaterial());
  leg_left.position.x = 2;
  leg_left.position.y = -22;
  leg_left.position.z = 0;
  leg_left.rotation.y = 180 * Math.PI;
  scene.addObject(leg_left);

  var leg_right_materials = [new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_right_outer.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_right_inner.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_right_top.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_right_bottom.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_right_back.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/leg_right_front.png')})];

  leg_right = new THREE.Mesh( new Cube(4, 12, 4, 1, 1, leg_right_materials), new THREE.MeshFaceMaterial());
  leg_right.position.x = -2;
  leg_right.position.y = -22;
  leg_right.position.z = 0;
  scene.addObject(leg_right);

  var hat_materials = [new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/hat_right.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/hat_left.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/hat_top.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/hat_bottom.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/hat_back.png')}),new THREE.MeshBasicMaterial({map:ImageUtils.loadTexture('images/skins/<?php echo $user; ?>/hat_front.png')})];

  hat = new THREE.Mesh( new Cube(9, 9, 9, 1, 1, hat_materials), new THREE.MeshFaceMaterial());
  hat.position.x = 0;
  hat.position.y = 0;
  hat.position.z = 0;
  scene.addObject(hat);

  if(Detector.webgl) {
	  renderer = new THREE.WebGLRenderer();
  } else {
	  renderer = new THREE.CanvasRenderer();
  }

  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
 }
 var xvar = 0;
 function loop() {
  xvar += Math.PI/90
  camera.target.position.x = 0;
  camera.target.position.y = -11;
  camera.target.position.z = 0;

  //Leg Swing
  leg_left.rotation.x = Math.cos(xvar);
  leg_left.position.z = 0 - 6*Math.sin(leg_left.rotation.x);
  leg_left.position.y = -16 - 6*Math.abs(Math.cos(leg_left.rotation.x));
  leg_right.rotation.x = Math.cos(xvar + (Math.PI));
  leg_right.position.z = 0 - 6*Math.sin(leg_right.rotation.x);
  leg_right.position.y = -16 - 6*Math.abs(Math.cos(leg_right.rotation.x));
  
  //Arm Swing
  arm_left.rotation.x = Math.cos(xvar + (Math.PI));
  arm_left.position.z = 0 - 6*Math.sin(arm_left.rotation.x);
  arm_left.position.y = -4 - 6*Math.abs(Math.cos(arm_left.rotation.x));
  arm_right.rotation.x = Math.cos(xvar);
  arm_right.position.z = 0 - 6*Math.sin(arm_right.rotation.x);
  arm_right.position.y = -4 - 6*Math.abs(Math.cos(arm_right.rotation.x));

  camera.position.x = 0 - 100*Math.sin(xvar);
  camera.position.y = 0 - 30*Math.sin(xvar);
  camera.position.z = 0 - 100*Math.cos(xvar);
  renderer.render( scene, camera );
 }
</script>

</body>
</html>
