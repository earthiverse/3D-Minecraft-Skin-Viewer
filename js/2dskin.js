/*
    A hodgepodge of random scripts to aid in rendering Minecraft skins
	Latest code should be available at https://github.com/earthiverse/3D-Minecraft-Skin-Viewer
	
	The MIT License

	Copyright (c) 2014-2018 Kent Rasmussen

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

// Expects a canvas with a Minecraft skin drawn in the very top left corner (0,0)
// Makes the overlays transparent if they have no transparent pixels (how Minecraft does it)
function FixOverlay(context) {
	FixOverlay(context,1);
}
function FixOverlay(context,radio) {
	FixHead2(context,radio);
	FixBody2(context,radio);
	FixRightArm2(context,radio);
	FixLeftArm2(context,radio);
	FixRightLeg2(context,radio);
	FixLeftLeg2(context,radio);
}

// Expects a canvas with a Minecraft skin drawn in the very top left corner (0,0)
// Makes the head overlay transparent if it is has no transparent pixels (how Minecraft does it)
function FixHead2(context) {
	FixHead2(context,1);
}
function FixHead2(context,radio) {
	// Front
	if(HasTransparency(context, 40, 8*radio, 8*radio, 8*radio)) return;
	
	// Top, Bottom, Right, Left, Back
	if(HasTransparency(context, 40, 0      , 8*radio, 8*radio)) return;
	if(HasTransparency(context, 48, 0      , 8*radio, 8*radio)) return;
	if(HasTransparency(context, 32*radio, 8*radio, 8*radio, 8*radio)) return;
	if(HasTransparency(context, 48, 8*radio, 8*radio, 8*radio)) return;
	if(HasTransparency(context, 56, 8*radio, 8*radio, 8*radio)) return;
	
	// Didn't have transparency, clearing the head overlay area.
	context.clearRect(40*radio, 0      , 8*radio, 8*radio);
	context.clearRect(48*radio, 0      , 8*radio, 8*radio);
	context.clearRect(32*radio, 8*radio, 8*radio, 8*radio);
	context.clearRect(40*radio, 8*radio, 8*radio, 8*radio);
	context.clearRect(48*radio, 8*radio, 8*radio, 8*radio);
	context.clearRect(56*radio, 8*radio, 8*radio, 8*radio);
}

// Expects a canvas with a Minecraft skin drawn in the very top left corner (0,0)
// Makes the body overlay transparent if it is has no transparent pixels (how Minecraft does it)
function FixBody2(context) {
	FixBody2(context,1);
}
function FixBody2(context,radio) {
	// Front
	if(HasTransparency(context, 20*radio, 36*radio, 8*radio, 12*radio)) return;
	
	// Top, Bottom, Right, Left, Back
	if(HasTransparency(context, 20*radio, 32*radio, 8*radio,  4*radio)) return;
	if(HasTransparency(context, 28*radio, 32*radio, 8*radio,  4*radio)) return;
	if(HasTransparency(context, 16*radio, 36*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context, 28*radio, 36*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context, 32*radio, 36*radio, 8*radio, 12*radio)) return;
	
	// Didn't have transparency, clearing the body overlay area.
	context.clearRect(20*radio, 32*radio, 8*radio,  4*radio);
	context.clearRect(28*radio, 32*radio, 8*radio,  4*radio);
	context.clearRect(16*radio, 36*radio, 4*radio, 12*radio);
	context.clearRect(20*radio, 36*radio, 8*radio, 12*radio);
	context.clearRect(28*radio, 36*radio, 4*radio, 12*radio);
	context.clearRect(32*radio, 36*radio, 8*radio, 12*radio);
}

// Expects a canvas with a Minecraft skin drawn in the very top left corner (0,0)
// Makes the right arm overlay transparent if it is has no transparent pixels (how Minecraft does it)
function FixRightArm2(context) {
	FixRightArm2(context,1);
}
function FixRightArm2(context,radio) {
	// Front
	if(HasTransparency(context, 44*radio, 36*radio, 4*radio, 12*radio)) return;
	
	// Top, Bottom, Right, Left, Back
	if(HasTransparency(context, 44*radio, 32*radio, 4*radio,  4*radio)) return;
	if(HasTransparency(context, 48*radio, 32*radio, 4*radio,  4*radio)) return;
	if(HasTransparency(context, 40*radio, 36*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context, 48*radio, 36*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context, 52*radio, 36*radio, 4*radio, 12*radio)) return;
	
	// Didn't have transparency, clearing the right arm overlay area.
	context.clearRect(44*radio, 32*radio, 4*radio,  4*radio);
	context.clearRect(48*radio, 32*radio, 4*radio,  4*radio);
	context.clearRect(40*radio, 36*radio, 4*radio, 12*radio);
	context.clearRect(44*radio, 36*radio, 4*radio, 12*radio);
	context.clearRect(48*radio, 36*radio, 4*radio, 12*radio);
	context.clearRect(52*radio, 36*radio, 4*radio, 12*radio);
}

// Expects a canvas with a Minecraft skin drawn in the very top left corner (0,0)
// Makes the left arm overlay transparent if it is has no transparent pixels (how Minecraft does it)
function FixLeftArm2(context) {
	FixLeftArm2(context,1);
}
function FixLeftArm2(context,radio) {
	// Front
	if(HasTransparency(context, 52*radio, 52*radio, 4*radio, 12*radio)) return;
	
	// Top, Bottom, Right, Left, Back
	if(HasTransparency(context, 52*radio, 48*radio, 4*radio,  4*radio)) return;
	if(HasTransparency(context, 56*radio, 48*radio, 4*radio,  4*radio)) return;
	if(HasTransparency(context, 48*radio, 52*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context, 56*radio, 52*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context, 60*radio, 52*radio, 4*radio, 12*radio)) return;
	
	// Didn't have transparency, clearing the left arm overlay area.
	context.clearRect(52*radio, 48*radio, 4*radio,  4*radio);
	context.clearRect(56*radio, 48*radio, 4*radio,  4*radio);
	context.clearRect(48*radio, 52*radio, 4*radio, 12*radio);
	context.clearRect(52*radio, 52*radio, 4*radio, 12*radio);
	context.clearRect(56*radio, 52*radio, 4*radio, 12*radio);
	context.clearRect(60*radio, 52*radio, 4*radio, 12*radio);
}
// Expects a canvas with a Minecraft skin drawn in the very top left corner (0,0)
// Makes the right overlay transparent if it is has no transparent pixels (how Minecraft does it)
function FixRightLeg2(context) {
	FixRightLeg2(context,1);
}
function FixRightLeg2(context,radio) {
	// Front
	if(HasTransparency(context,  4*radio, 36*radio, 4*radio, 12*radio)) return;
	
	// Top, Bottom, Right, Left, Back
	if(HasTransparency(context,  4*radio, 32*radio, 4*radio,  4*radio)) return;
	if(HasTransparency(context,  8*radio, 32*radio, 4*radio,  4*radio)) return;
	if(HasTransparency(context,  0      , 36*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context,  8*radio, 36*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context, 12*radio, 36*radio, 4*radio, 12*radio)) return;
	
	// Didn't have transparency, clearing the right leg overlay area.
	context.clearRect( 4*radio, 32*radio, 4*radio,  4*radio);
	context.clearRect( 8*radio, 32*radio, 4*radio,  4*radio);
	context.clearRect( 0      , 36*radio, 4*radio, 12*radio);
	context.clearRect( 4*radio, 36*radio, 4*radio, 12*radio);
	context.clearRect( 8*radio, 36*radio, 4*radio, 12*radio);
	context.clearRect(12*radio, 36*radio, 4*radio, 12*radio);
}

// Expects a canvas with a Minecraft skin drawn in the very top left corner (0,0)
// Makes the left overlay transparent if it is has no transparent pixels (how Minecraft does it)
function FixLeftLeg2(context) {
	FixLeftLeg2(context,1);
}
function FixLeftLeg2(context,radio) {
	// Front
	if(HasTransparency(context,  4*radio, 52*radio, 4*radio, 12*radio)) return;
	
	// Top, Bottom, Right, Left, Back
	if(HasTransparency(context,  4*radio, 48*radio, 4*radio,  4*radio)) return;
	if(HasTransparency(context,  8*radio, 48*radio, 4*radio,  4*radio)) return;
	if(HasTransparency(context,  0      , 52*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context,  8*radio, 52*radio, 4*radio, 12*radio)) return;
	if(HasTransparency(context, 12*radio, 52*radio, 4*radio, 12*radio)) return;
	
	// Didn't have transparency, clearing the left leg overlay area.
	context.clearRect( 4*radio, 48*radio, 4*radio,  4*radio);
	context.clearRect( 8*radio, 48*radio, 4*radio,  4*radio);
	context.clearRect( 0      , 52*radio, 4*radio, 12*radio);
	context.clearRect( 4*radio, 52*radio, 4*radio, 12*radio);
	context.clearRect( 8*radio, 52*radio, 4*radio, 12*radio);
	context.clearRect(12*radio, 52*radio, 4*radio, 12*radio);
}

// Expects a canvas with a 64x32 Minecraft skin drawn in the very top left corner (0,0)
// Your canvas should be 64x64 in size to show the skin parts that were converted
function Convert6432To6464(context) {
	Convert6432To6464(context,1);
}
function Convert6432To6464(context,radio) {
	// Convert old format to new format
	Copy(context,  4*radio, 16*radio, 4*radio,  4*radio, 20*radio, 48*radio, true);	// Top Leg
	Copy(context,  8*radio, 16*radio, 4*radio,  4*radio, 24*radio, 48*radio, true);	// Bottom Leg
	Copy(context,  0      , 20*radio, 4*radio, 12*radio, 24*radio, 52*radio, true);	// Outer Leg
	Copy(context,  4*radio, 20*radio, 4*radio, 12*radio, 20*radio, 52*radio, true);	// Front Leg
	Copy(context,  8*radio, 20*radio, 4*radio, 12*radio, 16*radio, 52*radio, true);	// Inner Leg
	Copy(context, 12*radio, 20*radio, 4*radio, 12*radio, 28*radio, 52*radio, true);	// Back Leg
	
	Copy(context, 44*radio, 16*radio, 4*radio,  4*radio, 36*radio, 48*radio, true);	// Top Arm
	Copy(context, 48*radio, 16*radio, 4*radio,  4*radio, 40*radio, 48*radio, true);	// Bottom Arm
	Copy(context, 40*radio, 20*radio, 4*radio, 12*radio, 40*radio, 52*radio, true);	// Outer Arm
	Copy(context, 44*radio, 20*radio, 4*radio, 12*radio, 36*radio, 52*radio, true);	// Front Arm
	Copy(context, 48*radio, 20*radio, 4*radio, 12*radio, 32*radio, 52*radio, true);	// Inner Arm
	Copy(context, 52*radio, 20*radio, 4*radio, 12*radio, 44*radio, 52*radio, true);	// Back Arm
}

// Expects a canvas with a Minecraft skin drawn in the very top left corner (0,0)
// Makes the non-visible parts of the Minecraft skin transparent
function FixNonVisible(context) {
	FixNonVisible(context,1);
}
function FixNonVisible(context,radio) {
	// 64x32 and 64x64 skin parts
	context.clearRect( 0      ,  0      ,  8*radio,  8*radio);
	context.clearRect(24*radio,  0      , 16*radio,  8*radio);
	context.clearRect(56*radio,  0      ,  8*radio,  8*radio);
	context.clearRect( 0      , 16*radio,  4*radio,  4*radio);
	context.clearRect(12*radio, 16*radio,  8*radio,  4*radio);
	context.clearRect(36*radio, 16*radio,  8*radio,  4*radio);
	context.clearRect(52*radio, 16*radio,  4*radio,  4*radio);
	context.clearRect(56*radio, 16*radio,  8*radio, 32*radio);
	
	// 64x64 skin parts
	context.clearRect( 0      , 32*radio, 4*radio, 4*radio);
	context.clearRect(12*radio, 32*radio, 8*radio, 4*radio);
	context.clearRect(36*radio, 32*radio, 8*radio, 4*radio);
	context.clearRect(52*radio, 32*radio, 4*radio, 4*radio);
	context.clearRect( 0      , 48*radio, 4*radio, 4*radio);
	context.clearRect(12*radio, 48*radio, 8*radio, 4*radio);
	context.clearRect(28*radio, 48*radio, 8*radio, 4*radio);
	context.clearRect(44*radio, 48*radio, 8*radio, 4*radio);
	context.clearRect(60*radio, 48*radio, 8*radio, 4*radio);
}

// Checks if the given part of the canvas contains a pixel with 0 alpha value (transparent)
function HasTransparency(context, x, y, w, h) {
	var imgData = context.getImageData(x, y, w, h);
	
	for(y = 0; y < h; y++) {
		for(x = 0; x < w; x++) {
			var index = (x + y * w) * 4;
			if(imgData.data[index + 3] == 0) return true;	// Has transparency
		}
	}
	
	return false;
}

// Copies one part of the canvas to another, with the option of flipping it horizontally
function Copy(context, sX, sY, w, h, dX, dY, flipHorizontal) {
	var imgData = context.getImageData(sX, sY, w, h);
	
	if(flipHorizontal)
	{
		// Flip horizontal
		for(y = 0; y < h; y++) {
			for(x = 0; x < (w / 2); x++) {
				index = (x + y * w) * 4;
				index2 = ((w - x - 1) + y * w) * 4;
				var pA1 = imgData.data[index];
				var pA2 = imgData.data[index+1];
				var pA3 = imgData.data[index+2];
				var pA4 = imgData.data[index+3];
				
				var pB1 = imgData.data[index2];
				var pB2 = imgData.data[index2+1];
				var pB3 = imgData.data[index2+2];
				var pB4 = imgData.data[index2+3];
				
				imgData.data[index] = pB1;
				imgData.data[index+1] = pB2;
				imgData.data[index+2] = pB3;
				imgData.data[index+3] = pB4;
				
				imgData.data[index2] = pA1;
				imgData.data[index2+1] = pA2;
				imgData.data[index2+2] = pA3;
				imgData.data[index2+3] = pA4;
			}
		}
	}
	
	context.putImageData(imgData,dX,dY);
}
